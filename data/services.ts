export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Frontend Engineering",
    tagline: "Pixel-perfect, accessible, 60fps web interfaces",
    description:
      "Crafting modern, responsive user interfaces using React, Next.js, and Tailwind CSS. Focused on fluid micro-interactions, clean component hierarchies, tactile feedback, and strict cross-device responsiveness.",
    deliverables: [
      "Responsive React / Next.js Applications",
      "Custom Design Systems & Tailwind Layouts",
      "Framer Motion Micro-Interactions",
      "Mobile-First Touch Ergonomics",
    ],
    iconName: "Layout",
  },
  {
    number: "02",
    title: "Full-Stack Web Applications",
    tagline: "End-to-end web products from database to UI",
    description:
      "Building complete web applications with robust backend APIs, database modeling, secure user authentication, and seamless frontend integration. Designed for reliability and scale.",
    deliverables: [
      "MERN Stack & Next.js Full-Stack Architectures",
      "JWT & Session Authentication Systems",
      "Administrative Panels & Content Dashboards",
      "Dynamic Data CRUD Workflows",
    ],
    iconName: "Code",
  },
  {
    number: "03",
    title: "Backend & RESTful APIs",
    tagline: "High-performance services & data endpoints",
    description:
      "Developing scalable Node.js and Express backend services with clean routing, request validation, structured error handling, rate limiting, and seamless third-party API integrations.",
    deliverables: [
      "RESTful API Design & Documentation",
      "MongoDB & SQL Database Optimization",
      "Third-Party Service & Webhook Integrations",
      "Secure Serverless Functions & Edge Handlers",
    ],
    iconName: "Server",
  },
  {
    number: "04",
    title: "Automation & Telegram Bots",
    tagline: "Smart workflows that eliminate manual work",
    description:
      "Programming asynchronous Python automation tools, custom Telegram bots, web scrapers, and automated notification pipelines to handle repetitive tasks quietly in the cloud.",
    deliverables: [
      "Custom Asynchronous Telegram Bots",
      "Automated Media & Data Processing Pipelines",
      "Webhook Notification & Monitoring Alerts",
      "Background Cron Jobs & Cloud Workers",
    ],
    iconName: "Cpu",
  },
  {
    number: "05",
    title: "Performance & SEO Optimization",
    tagline: "Lightning-fast page loads & search engine visibility",
    description:
      "Auditing and enhancing web applications for Core Web Vitals, sub-second initial loads, full search engine crawlability, rich Open Graph cards, and structured JSON-LD schemas.",
    deliverables: [
      "Lighthouse 100/100 Audit Optimization",
      "Google Search Console Verification & Sitemaps",
      "Rich Open Graph & Social Card Previews",
      "Bundle Size Reduction & Lazy Loading",
    ],
    iconName: "Zap",
  },
];
