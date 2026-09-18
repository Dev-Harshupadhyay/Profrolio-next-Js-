# Harsh Upadhyay — Premium Developer Portfolio

> **"Designing. Building. Shipping."**  
> Modern digital experiences built with thoughtful design, powerful engineering, and obsessive attention to detail.

---

## 🌟 Overview

An Apple-inspired developer portfolio designed for **Harsh Upadhyay** — Full-Stack Web Developer, React & Next.js specialist, and BCA student from India. Engineered from the ground up for minimalism, tactile feedback, sub-second performance, fluid micro-interactions, dark/light theme versatility, and comprehensive SEO.

- **Live URL**: [https://profrolio-next-js.vercel.app](https://profrolio-next-js.vercel.app)
- **GitHub**: [@Dev-Harshupadhyay](https://github.com/Dev-Harshupadhyay)
- **LinkedIn**: [Harsh Upadhyay](https://www.linkedin.com/in/harsh-upadhyay-a014783b4)
- **Contact**: `harsh48227@gmail.com` | Telegram: `@TIMEPASSQ_BOT`

---

## 💎 Design Philosophy & Highlights

- **Apple-Inspired Product Aesthetic**: Restrained color palette (deep near-black `#050507` canvas, crisp `#f5f5f7` text, Apple accent blue `#2997ff` / `#0071e3`, off-white light mode `#fbfbfd`).
- **Tactile Button System**: Reusable `Button` component with spring physics hover (`scale: 1.025`), tactile click (`scale: 0.97`), focus-visible rings, dynamic arrow translations, and accessible loading state.
- **Floating Island Navigation**: Dynamic glassmorphism navbar with blur scroll transitions, active section tracking, theme toggle, and a spring-animated mobile menu.
- **Dynamic Case Study Routes (`/projects/[slug]`)**: Dedicated static case study pages with deep-dive problem/solution breakdowns, architecture notes, key metrics, and next-project routing.
- **Dual Theme Support**: Flawless dark and light theme switching with `next-themes` and CSS variables, with zero hydration mismatch.
- **Accessibility & Reduced Motion**: Full compliance with `prefers-reduced-motion` and keyboard accessibility.
- **100% SEO Ready**: Google Search Console verification meta tag, Open Graph cards, Twitter large image cards, JSON-LD Person schema, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, Server Components & Static Site Generation)
- **Language**: TypeScript with strict compile-time type safety
- **Styling**: Tailwind CSS with custom Apple design tokens
- **Motion & Physics**: Framer Motion 11
- **Icons**: Lucide React
- **Theming**: `next-themes`
- **Deployment**: Vercel & Edge CDN

---

## 📁 Project Architecture

```
├── app/
│   ├── globals.css              # Apple design system, CSS variables & typography
│   ├── layout.tsx               # Root layout, SEO tags, JSON-LD schema & Google verification
│   ├── page.tsx                 # Single-page portfolio orchestrator
│   ├── robots.ts                # Crawler directives
│   ├── sitemap.ts               # Dynamic sitemap generator (home + case studies)
│   └── projects/[slug]/         # Dynamic case study case pages
│       └── page.tsx
├── components/
│   ├── Navbar.tsx               # Floating pill navigation with blur scroll transition
│   ├── MobileMenu.tsx           # Full-screen spring modal menu
│   ├── Hero.tsx                 # Product launch hero with live dev telemetry
│   ├── Button.tsx               # Apple-grade tactile button system
│   ├── SectionHeading.tsx       # Minimalist section header with kicker badge
│   ├── About.tsx                # Editorial narrative & profile card
│   ├── SkillCard.tsx            # Interactive tech cards with value propositions
│   ├── Skills.tsx               # Category-filtered technology grid
│   ├── FeaturedProject.tsx      # Large cinematic featured showcase
│   ├── ProjectCard.tsx          # Responsive secondary project cards
│   ├── ProjectGrid.tsx          # Unified project directory with category tabs
│   ├── ExperienceTimeline.tsx   # Vertical timeline with animated milestones
│   ├── ServiceCard.tsx          # Minimalist capability cards with numerals 01-05
│   ├── Services.tsx             # Capabilities section
│   ├── Contact.tsx              # Interactive CTA form with client validation
│   ├── Footer.tsx               # Minimal footer with socials & BackToTop
│   ├── ThemeToggle.tsx          # Light/Dark animated toggle
│   ├── ThemeProvider.tsx        # Next-themes wrapper
│   └── BackToTop.tsx            # Smooth scroll to top button
├── data/
│   ├── profile.ts               # Personal bio, stats, location & contact info
│   ├── projects.ts              # Detailed case study records & metadata
│   ├── skills.ts                # Structured technology toolkit & categories
│   ├── experience.ts            # Career journey & academic milestones
│   ├── services.ts              # Service capabilities & deliverables
│   └── site.ts                  # Centralized data re-exports
└── public/
    ├── profile.jpg              # High-resolution profile portrait
    └── projects/                # Project visual assets
```

---

## 🚀 Local Development

```bash
# 1. Clone repository
git clone https://github.com/Dev-Harshupadhyay/Profrolio-next-Js-.git
cd Profrolio-next-Js-

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production (Static SSG)
npm run build
npm run start
```

---

## 📄 License & Credits

Designed and built by [Harsh Upadhyay](https://github.com/Dev-Harshupadhyay).  
© 2026 Harsh Upadhyay. All rights reserved.
