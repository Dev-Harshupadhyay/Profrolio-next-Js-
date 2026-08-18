"use client";

// Fallback responses for common queries when the AI API is unavailable.
// Keeping this on the client means the widget still feels responsive
// even if the network call to /api/chat fails.
const fallbackResponses: Record<string, string> = {
  "work style":
    "I like keeping things simple — clear goals, clean code, and steady progress. As I'm early in my journey, I focus a lot on learning by actually building rather than just following tutorials.",
  experience:
    "I'm just starting out — currently a BCA 1st semester student who has been building real projects like Cinevood, Tarazu, and ClimaTek to learn full-stack development hands-on.",
  skills:
    "I'm comfortable with JavaScript/TypeScript, React, Node.js, Express, MongoDB, MySQL, and TailwindCSS, with the basics of C++ and Python as well.",
  education:
    "I'm currently a BCA (Bachelor of Computer Applications) 1st semester student, and I'm passionate about full-stack web development.",
  projects:
    "My portfolio includes Cinevood (a movie discovery app), Tarazu (a utility/calculator web app), and ClimaTek (a weather intelligence dashboard).",
  contact:
    "You can reach me at harsh48227@gmail.com, connect on LinkedIn, or check out my work on GitHub (github.com/Dev-Harshupadhyay).",
  achievements:
    "I'm early in my journey — right now my focus is on building and shipping real projects as I start my BCA degree.",
  availability:
    "I'm open to internships, freelance work, and collaboration opportunities in full-stack web development.",
  text: "You can reach me via email (harsh48227@gmail.com), LinkedIn, or GitHub (github.com/Dev-Harshupadhyay).",
  "contact information":
    "Feel free to reach out via email at harsh48227@gmail.com or connect with me on LinkedIn.",
};

function getFallbackResponse(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim();

  if (fallbackResponses[normalizedQuery]) {
    return fallbackResponses[normalizedQuery];
  }

  for (const [key, value] of Object.entries(fallbackResponses)) {
    if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
      return value;
    }
  }

  return null;
}

/**
 * Sends the visitor's question to our own /api/chat route (server-side),
 * which holds the resume context and the real AI API key. The key is
 * never shipped to the browser.
 */
export async function queryAI(query: string): Promise<string> {
  try {
    const resp = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!resp.ok) {
      const fallback = getFallbackResponse(query);
      if (fallback) return fallback;
      return "I'm having trouble reaching the AI service right now. Please try again in a moment.";
    }

    const data = (await resp.json()) as { answer?: string };
    const text = data.answer?.trim();

    if (!text || text.length < 2) {
      const fallback = getFallbackResponse(query);
      if (fallback) return fallback;
      return "I'm sorry, but I couldn't generate a meaningful response. Please try rephrasing your question.";
    }

    return text;
  } catch (error) {
    console.error("Error in queryAI:", error);
    const fallback = getFallbackResponse(query);
    if (fallback) return fallback;
    return "I apologize, but I'm having trouble processing your request. Please try again in a moment.";
  }
}

export function isHardcodedQuery(query: string): boolean {
  const hardcodedKeywords = [
    "projects",
    "contact",
    "resume",
    "theme",
    "cv",
    "github",
    "linkedin",
  ];

  const lowerQuery = query.toLowerCase().trim();

  return hardcodedKeywords.some(
    (keyword) => keyword.startsWith(lowerQuery) || lowerQuery.startsWith(keyword)
  );
}
