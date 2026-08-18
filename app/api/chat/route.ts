import { NextRequest, NextResponse } from "next/server";

// This context is only ever read on the server, so it's safe to keep
// resume-level detail here without worrying about scraping.
const RESUME_CONTEXT = `PERSONAL INFORMATION & CONTACT:
Name: Harsh Upadhyay
Role: BCA (Bachelor of Computer Applications) Student — 1st Semester
Location: Faridabad, India
Email: harsh48227@gmail.com
LinkedIn: linkedin.com/in/harsh-upadhyay-a014783b4
GitHub: github.com/Dev-Harshupadhyay

PROFESSIONAL SUMMARY:
I'm a BCA 1st semester student and a self-taught, passionate full-stack web developer. I started coding out of curiosity and have been building real projects ever since — learning by doing rather than waiting to "finish a course" first. I enjoy turning ideas into working products and I'm just getting started on this journey.

TECHNICAL SKILLS:
Programming Languages:
- JavaScript, TypeScript, basics of C++ and Python
Frameworks & Technologies:
- React, Node.js, Express
- MongoDB, MySQL
- TailwindCSS
- Git & GitHub

PROJECT PORTFOLIO:
1. Cinevood — a movie discovery/browsing web app, live at cinenvood.onrender.com
2. Tarazu — a calculator/utility web app ("tarazu" = weighing scale), live at tarzau.netlify.app
3. ClimaTek (Atmosphera) — a real-time weather intelligence dashboard with forecasts, UV index and air quality data, live at climatek.netlify.app

ADDITIONAL INFORMATION:
Languages: English, Hindi`;

const FALLBACK_RESPONSES: Record<string, string> = {
  "work style":
    "I like keeping things simple — clear goals, clean code, and steady progress.",
  experience:
    "I'm just starting out — currently a BCA 1st semester student building real projects like Cinevood, Tarazu, and ClimaTek.",
  skills:
    "JavaScript/TypeScript, React, Node.js, Express, MongoDB, MySQL, TailwindCSS, plus the basics of C++ and Python.",
  contact:
    "Reach me at harsh48227@gmail.com, on LinkedIn, or on GitHub (github.com/Dev-Harshupadhyay).",
};

function getFallback(query: string): string | null {
  const q = query.toLowerCase().trim();
  for (const [key, value] of Object.entries(FALLBACK_RESPONSES)) {
    if (q.includes(key)) return value;
  }
  return null;
}

// Accepts either GEMINI_API_KEY or AI_API_KEY so it's a drop-in for
// whichever name you've already set in your hosting provider.
function getServerApiKeys(): string[] {
  const raw =
    process.env.GEMINI_API_KEY ||
    process.env.AI_API_KEY ||
    process.env.GEMINI_API_KEYS ||
    "";
  return raw
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

export async function POST(req: NextRequest) {
  let query = "";
  try {
    const body = await req.json();
    query = String(body?.query ?? "").slice(0, 2000);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!query.trim()) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const keys = getServerApiKeys();
  if (keys.length === 0) {
    const fallback = getFallback(query);
    return NextResponse.json({
      answer:
        fallback ??
        "The AI assistant isn't configured yet — add GEMINI_API_KEY to your environment to enable it.",
    });
  }

  const prompt = `You are an AI assistant for Harsh Upadhyay's portfolio website. You have access to Harsh's complete profile and should provide helpful, accurate responses to visitors' questions. Consider the following information:
${RESUME_CONTEXT}

Question: ${query}

Instructions:
1. Answer in Harsh's voice (first person), confident but humble.
2. Provide specific, accurate information from the context above.
3. Keep the response concise — no more than 2-3 sentences — but always finish your sentences.
4. Stay within the scope of the provided information. If you don't know, say so honestly.`;

  let lastError: string | null = null;

  for (const key of keys) {
    try {
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.3, topP: 0.6, topK: 30 },
          }),
        }
      );

      if (!resp.ok) {
        lastError = `status=${resp.status}`;
        continue;
      }

      const data = await resp.json();
      const text: string | undefined =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (text && text.length >= 2) {
        return NextResponse.json({ answer: text });
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      continue;
    }
  }

  console.error("All Gemini keys failed:", lastError);
  const fallback = getFallback(query);
  return NextResponse.json({
    answer:
      fallback ??
      "I'm having trouble processing that right now. Please try again in a moment.",
  });
}
