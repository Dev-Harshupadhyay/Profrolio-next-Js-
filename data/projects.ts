export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  architecture: string[];
  challenges: string;
  metrics: {
    value: string;
    label: string;
  }[];
  image?: string;
  featured: boolean;
  highlight: string;
  year: string;
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "chhath-geet",
    slug: "chhath-geet",
    title: "Chhath Geet",
    subtitle: "Devotional Music Streaming Platform",
    tagline: "106 verified folk songs with an audio engine and lock-screen controls",
    summary:
      "A dedicated devotional music streaming web app celebrating Chhath Puja folk heritage. Engineered with a custom audio player engine, queue manager, repeat modes, 37 artists, and 12 playlists.",
    description:
      "Chhath Geet is a purpose-built devotional music platform designed to preserve and celebrate traditional Chhath Puja folk songs. Featuring 106 meticulously curated tracks from 37 legendary folk artists across 12 playlists, it provides a distraction-free, ad-free listening experience with background playback and lock-screen metadata controls.",
    problem:
      "Devotional music listeners often struggle with fragmented audio sources on YouTube or ad-heavy platforms, suffering from broken background playback, poor categorization, and heavy battery drain.",
    solution:
      "Built a ultra-lightweight, high-performance web audio player using React and the Media Session API. Implemented custom state management for continuous queues, shuffle, repeat modes, and instant search across artists and playlists.",
    keyFeatures: [
      {
        title: "106 Verified Folk Songs",
        description: "Curated audio library categorized by traditional rituals, arghya ceremonies, and morning hymns.",
      },
      {
        title: "Lock-Screen & Headphone Controls",
        description: "Full integration with the browser's Media Session API for play/pause/skip from system notifications and lock screens.",
      },
      {
        title: "Interactive Queue & Playlists",
        description: "Dynamic audio queue allowing instant reordering, track scrubbing, volume memory, and persistent playback state.",
      },
      {
        title: "37 Featured Folk Artists",
        description: "Dedicated artist discography views with instant search and zero-latency audio streaming.",
      },
    ],
    techStack: ["React", "Vite", "Media Session API", "Tailwind CSS", "Web Audio"],
    architecture: [
      "Client-side SPA engineered with React & Vite for lightning-fast sub-second initial load.",
      "Custom HTML5 Audio Controller hook handling audio buffering, time tracking, and background playback.",
      "Optimized CDN audio delivery with preloading strategies for instant track transitions.",
    ],
    challenges:
      "Ensuring seamless playback persistence during tab switches and implementing reliable Media Session API listeners across various mobile browser engines (iOS Safari, Android Chrome).",
    metrics: [
      { value: "106", label: "Songs Hosted" },
      { value: "37", label: "Artists Curated" },
      { value: "12", label: "Custom Playlists" },
      { value: "<0.8s", label: "First Contentful Paint" },
    ],
    featured: true,
    highlight: "106 songs · Custom audio engine",
    year: "2026",
    role: "Lead Full-Stack Developer",
    githubUrl: "https://github.com/Dev-Harshupadhyay/Chhath-puja",
    liveUrl: "https://chhath-puja-ebon.vercel.app",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "cinevood",
    slug: "cinevood",
    title: "Cinevood",
    subtitle: "Full-Stack Film Review & Discovery Platform",
    tagline: "MERN-powered cinema database with custom admin CMS & ratings",
    summary:
      "A complete full-stack movie discovery and review platform. Features dynamic catalog indexing, user reviews, sentiment ratings, and a protected administrative content management system.",
    description:
      "Cinevood is a full-stack web application designed for cinema enthusiasts to explore films, read and submit verified community reviews, and discover trending releases. It includes an end-to-end admin panel for content moderation, movie metadata ingestion, and user management.",
    problem:
      "Many modern movie review platforms are bloated with slow third-party trackers, cluttered banner ads, and complex review submission hurdles for casual moviegoers.",
    solution:
      "Engineered a streamlined MERN architecture (MongoDB, Express, React, Node.js) with responsive client-side routing, JWT authentication, and optimized database indexing for real-time search queries.",
    keyFeatures: [
      {
        title: "Dynamic Film Catalog",
        description: "Filter movies by genre, release year, rating, and language with instant client-side search.",
      },
      {
        title: "Community Reviews & Ratings",
        description: "Interactive rating system calculating aggregate scores and user sentiment breakdowns.",
      },
      {
        title: "Administrative CMS Panel",
        description: "Secure dashboard to create, update, and manage movie listings, trailers, and moderated comments.",
      },
      {
        title: "RESTful API Backend",
        description: "Modular Express.js backend with robust error handling, schema validation, and rate limiting.",
      },
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    architecture: [
      "Decoupled client-server architecture with React frontend on Vercel and Node.js REST API on Render.",
      "MongoDB Atlas database with compound indexing on movie titles, genres, and release timestamps.",
      "Secure token-based auth flow protecting administrative CRUD endpoints.",
    ],
    challenges:
      "Optimizing MongoDB query aggregation pipelines to calculate average review scores dynamically without slowing down catalog pagination.",
    metrics: [
      { value: "MERN", label: "Full Architecture" },
      { value: "100%", label: "Responsive Design" },
      { value: "CRUD", label: "Complete Admin CMS" },
      { value: "Live", label: "Production Deployed" },
    ],
    image: "/projects/cinveood.webp",
    featured: true,
    highlight: "Full MERN Stack · Admin CMS",
    year: "2025",
    role: "Full-Stack Architect",
    githubUrl: "https://github.com/Dev-Harshupadhyay/Cinenvood",
    liveUrl: "https://cinenvood.onrender.com",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "weather",
    slug: "weather-app",
    title: "ClimaTek",
    subtitle: "Real-Time Atmospheric Intelligence",
    tagline: "Live weather intelligence with forecasts, UV index, and air quality data",
    summary:
      "A real-time weather intelligence dashboard delivering live weather metrics, multi-day forecasts, UV index, air quality data, atmospheric humidity, wind speeds, and smart location detection.",
    description:
      "ClimaTek (Atmosphera) is a weather intelligence dashboard built to practice working with third-party APIs and presenting live data in a visually engaging way. It connects to live meteorological APIs to present hourly temperature trends, humidity levels, wind vectors, UV conditions, and air quality with zero visual clutter.",
    problem:
      "Standard weather portals are often filled with distracting sponsored articles, slow radar animations, and inaccurate location defaults.",
    solution:
      "Created a minimal, high-speed single-page application with browser geolocation, instant search debouncing, and fluid visual indicators that adapt dynamically to atmospheric conditions.",
    keyFeatures: [
      {
        title: "Instant Global City Search",
        description: "Search any municipality worldwide with debounced API queries and automatic fallback caching.",
      },
      {
        title: "Comprehensive Telemetry",
        description: "Live readouts for temperature, feels-like index, humidity, wind velocity, and barometric pressure.",
      },
      {
        title: "Adaptive Ambient UI",
        description: "Dynamic color palettes and subtle visual accents reflecting current sky and lighting conditions.",
      },
      {
        title: "Mobile-First Layout",
        description: "Optimized touch targets and swipeable hourly forecast cards designed for single-hand mobile use.",
      },
    ],
    techStack: ["JavaScript", "OpenWeather API", "CSS3", "HTML5", "Geolocation API"],
    architecture: [
      "Lightweight asynchronous JavaScript frontend consuming RESTful meteorological endpoints.",
      "Client-side caching layer using LocalStorage to minimize redundant network roundtrips.",
      "Responsive flex/grid CSS layout with micro-animations on telemetry card updates.",
    ],
    challenges:
      "Gracefully handling API rate limits and network latency on slow mobile connections while providing immediate UI feedback.",
    metrics: [
      { value: "Global", label: "Location Coverage" },
      { value: "<200ms", label: "Search Latency" },
      { value: "100%", label: "Mobile Touch Ready" },
      { value: "0", label: "External Bloat" },
    ],
    image: "/projects/climatek.webp",
    featured: true,
    highlight: "Live Meteorological API",
    year: "2025",
    role: "Frontend Developer",
    githubUrl: "https://github.com/Dev-Harshupadhyay/Weather-app",
    liveUrl: "https://climatek.netlify.app",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "timepass-premium",
    slug: "timepass-premium",
    title: "Timepass Premium",
    subtitle: "OTT Plans & Pricing Platform",
    tagline: "Plan storefront with UPI checkout, price comparisons & instant verification",
    summary:
      "A production pricing and checkout platform for streaming plans — structured pricing cards, an OTT comparison matrix, UPI/Razorpay payments, FAQ, and Telegram-based order verification.",
    description:
      "Timepass Premium is a polished single-page storefront that presents plan packages with transparent pricing, a comparison table benchmarking major platforms, and a frictionless payment flow. It pairs a responsive React front end with UPI deep links and Razorpay checkout, routing order verification through Telegram for instant access.",
    problem:
      "Selling plans through chat threads meant pricing had to be repeated manually, payments were hard to track, and customers had no single trustworthy place to view current rates and offers.",
    solution:
      "Built a fast React single-page storefront with structured pricing cards, an OTT-vs-plan comparison matrix, an FAQ accordion, and dual payment rails (UPI deep links + Razorpay) with Telegram-based order verification.",
    keyFeatures: [
      {
        title: "Structured Plan Catalog",
        description: "Movies, Adult, and Combo packs with clear 1/3/6/12-month pricing tiers and highlighted crown picks.",
      },
      {
        title: "OTT Comparison Matrix",
        description: "Side-by-side price table benchmarking yearly plans against major OTT platforms at a glance.",
      },
      {
        title: "UPI & Razorpay Checkout",
        description: "Instant UPI deep links (GPay / PhonePe / Paytm), static QR flow, and Razorpay payment buttons.",
      },
      {
        title: "Telegram Verification",
        description: "Order verification and 24×7 customer support handled through an automated Telegram workflow.",
      },
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Razorpay", "Telegram API"],
    architecture: [
      "Vite-bundled React single-page app served from the edge on Vercel.",
      "Payment layer combining UPI intent deep links with Razorpay hosted checkout.",
      "Telegram-powered verification and support channel for post-purchase access.",
    ],
    challenges:
      "Designing a pricing UI that stays clear across dozens of plan permutations while keeping the payment flow trustworthy and the page light enough for mid-range phones.",
    metrics: [
      { value: "3", label: "Plan Categories" },
      { value: "24×7", label: "Telegram Support" },
      { value: "Instant", label: "UPI Verification" },
    ],
    featured: true,
    highlight: "Pricing · Payments · Telegram verify",
    year: "2026",
    role: "Full-Stack Developer",
    liveUrl: "https://verceel-timepass.vercel.app",
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "tarazu",
    slug: "tarazu",
    title: "Tarazu",
    subtitle: "Precision Everyday Calculator & Utility",
    tagline: "Minimalist calculation tool named after the traditional balance scale",
    summary:
      "A lightweight, distraction-free calculation suite named after 'Tarazu' (the Hindi word for a balance scale). Features precision unit conversions, split calculations, and quick everyday math.",
    description:
      "Tarazu re-imagines the utility calculator as a calm, elegant web application. Stripping away cluttered scientific buttons that everyday users rarely need, it focuses on rapid, tactile computations with clean typography and real-time history.",
    problem:
      "Default operating system calculators and ad-ridden online tools often lack responsive keyboard ergonomics and clutter the screen with overwhelming button arrays.",
    solution:
      "Designed a minimalist React interface with custom keyboard navigation, instantaneous evaluation, responsive tactile haptics/animations, and persistent calculation history.",
    keyFeatures: [
      {
        title: "Tactile Precision UI",
        description: "Custom designed numeric pads with subtle spring animations and keyboard shortcut bindings.",
      },
      {
        title: "Live Calculation History",
        description: "Session history drawer allowing instant recall and editing of previous arithmetic operations.",
      },
      {
        title: "Zero-Latency Client Computation",
        description: "Ultra-compact bundle size ensuring instantaneous loading even on 2G connections.",
      },
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite", "Netlify"],
    architecture: [
      "Pure React component hierarchy with customized state reducer for math operations.",
      "Zero external runtime dependencies beyond Tailwind CSS for maximum speed.",
    ],
    challenges:
      "Preventing floating-point arithmetic precision errors during repeated financial and division operations.",
    metrics: [
      { value: "<30kB", label: "Bundle Size" },
      { value: "100/100", label: "Lighthouse Score" },
      { value: "0ms", label: "Eval Latency" },
    ],
    image: "/projects/tarazu.webp",
    featured: false,
    highlight: "Tactile Minimalist Tool",
    year: "2025",
    role: "UI/UX & Frontend Developer",
    githubUrl: "https://github.com/Dev-Harshupadhyay/Tarzau-",
    liveUrl: "https://tarzau.netlify.app",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
  },
  {
    id: "nostalgic",
    slug: "nostalgic",
    title: "Nostalgic",
    subtitle: "TypeScript & Motion Design Experiment",
    tagline: "Pushing the boundaries of modern Next.js animations & state ergonomics",
    summary:
      "An experimental web showcase exploring high-order TypeScript generics, complex layout transitions, fluid spring physics, and aesthetic digital minimalism.",
    description:
      "Nostalgic was created as a deep-dive laboratory into strict TypeScript type architectures, Next.js App Router performance patterns, and bespoke micro-interaction ergonomics.",
    problem:
      "Modern web experiences frequently sacrifice runtime smoothness when attempting rich micro-interactions and visual depth.",
    solution:
      "Utilized hardware-accelerated CSS transforms, strict TypeScript interfaces, and Framer Motion layout animations to deliver smooth 60fps transitions.",
    keyFeatures: [
      {
        title: "Strict Type Architecture",
        description: "100% type-safe component props, layout contexts, and event dispatchers.",
      },
      {
        title: "Hardware-Accelerated Motion",
        description: "Subtle spring transitions optimized to prevent layout shifts (CLS) and frame drops.",
      },
      {
        title: "Next.js App Router",
        description: "Leverages React Server Components for minimal client-side JavaScript overhead.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    architecture: [
      "Next.js App Router architecture leveraging React Server Components for zero-bundle data.",
      "Strict TypeScript compile flags with zero `any` declarations.",
    ],
    challenges:
      "Synchronizing multi-element layout transitions across responsive breakpoints without jarring reflows.",
    metrics: [
      { value: "100%", label: "TypeScript Strict" },
      { value: "60fps", label: "Fluid Motion" },
      { value: "Next.js", label: "App Router" },
    ],
    featured: false,
    highlight: "TypeScript & Next.js",
    year: "2026",
    role: "Frontend Architect",
    githubUrl: "https://github.com/Dev-Harshupadhyay/Nostalgic-",
    liveUrl: "https://nostalgic-eight.vercel.app",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
];
