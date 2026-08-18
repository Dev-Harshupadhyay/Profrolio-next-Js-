# Harsh Upadhyay — Portfolio (Next.js + Three.js + GSAP)

Migrated from the original Vite + React Router SPA to **Next.js 14 (App Router)**,
with a cinematic Three.js hero scene, GSAP scroll-reveal animations, and a
secure AI chat widget.

## What changed from the original repo

- **Routing:** `react-router-dom` → Next.js App Router (`app/page.tsx`, `app/not-found.tsx`).
- **Entry point:** `main.tsx` / `App.tsx` → `app/layout.tsx` + `components/Providers.tsx`.
- **3D:** new `components/three/Hero3D.tsx` — a React Three Fiber scene (distorted
  sphere + starfield particles) with pointer-based parallax, code-split so it
  never touches the server bundle, and a static fallback for
  `prefers-reduced-motion`.
- **Animation:** GSAP powers the Hero's entrance timeline and a reusable
  `components/Reveal.tsx` scroll-trigger wrapper used around About, Projects,
  FAQ, and Contact.
- **AI chat:** the existing Gemini-powered Q&A (previously called directly
  from the browser with an exposed key) now goes through a server route,
  `app/api/chat/route.ts`. There's also a new standalone floating widget,
  `components/AIChat.tsx`, in addition to the existing Cmd+K command palette.
- Everything else — all `components/ui/*` (shadcn), data, hooks, and visual
  design — is carried over as-is.

## A deliberate change from the original spec: no `NEXT_PUBLIC_` key

The brief asked for `NEXT_PUBLIC_AI_API_KEY`, but any `NEXT_PUBLIC_*` variable
is bundled into the JavaScript sent to every visitor's browser — anyone can
open devtools and copy your Gemini key. Instead:

- The key lives in a **server-only** env var, `GEMINI_API_KEY`.
- The browser calls your own `/api/chat` route.
- That route calls Gemini using the key, which never leaves your server.

If you'd still rather expose it client-side for simplicity, you can revert
`lib/aiSearch.ts` to call Gemini directly — but it isn't recommended.

## Setup

```bash
npm install
cp .env.example .env.local
# edit .env.local and paste your Gemini key
npm run dev
```

Get a free Gemini key at https://aistudio.google.com/apikey.

## Deploying

Works out of the box on Vercel:

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the `GEMINI_API_KEY` environment variable in the Vercel project settings.
4. Deploy.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata, providers
  page.tsx             Home page — assembles all sections
  not-found.tsx         404 page
  globals.css           Design tokens + Tailwind layers
  api/chat/route.ts     Server-side Gemini proxy
components/
  three/Hero3D.tsx      Cinematic R3F hero background
  Reveal.tsx             GSAP ScrollTrigger reveal wrapper
  AIChat.tsx              Floating AI chat widget
  Providers.tsx            Theme/query/toast providers
  GlobalChrome.tsx          Preloader, command palette, analytics, AI chat
  ui/                        shadcn/ui primitives
data/                          Project data
hooks/                          Custom hooks
lib/                            Utilities + AI query helper
public/                         Static assets
```

## Notes

- Dependencies aren't installed in this export — run `npm install` first.
- This was built and reviewed without a live `npm run build` (no network
  access in the build environment), so do a local build/dev check before
  deploying: `npm run dev` then `npm run build`.
