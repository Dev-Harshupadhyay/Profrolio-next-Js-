export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  techStack: string[];
  category: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string[];
  metrics: {
    value: string;
    label: string;
    description?: string;
  }[];
  implementation: {
    approach: string;
    technologies: {
      name: string;
      reason: string;
    }[];
  };
  architecture?: string;
  documentation: Record<string, any>;
  repoNotes?: Record<string, any>;
}

export const projectsData: Project[] = [
  {
    id: "cinevood",
    title: "Cinevood",
    description:
      "A movie discovery and browsing web app for exploring films with a clean, fast interface.",
    fullDescription:
      "Cinevood is a full-stack movie discovery platform that lets users browse and explore movies through a clean, responsive interface. Built as a hands-on project to practice full-stack architecture — from API-driven data fetching to a polished, fast-loading front end — it's deployed live and continuously being improved.",
    image: "/projects/cinveood.png",      // <-- yahan /projects/ add kiya
    images: ["/projects/cinveood.png"],   // <-- yahan bhi
    tags: ["React", "Node.js", "Express", "MongoDB"],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    category: "web",
    featured: true,
    githubUrl: "https://github.com/Dev-Harshupadhyay",
    liveUrl: "https://cinenvood.onrender.com",
    features: [
      "Browse and search movies",
      "Responsive, mobile-friendly UI",
      "Fast, clean navigation",
      "Full-stack MERN architecture",
    ],
    challenges: [
      "Structuring a clean, scalable API for movie data",
      "Optimizing load times on a free-tier backend host",
      "Designing a UI that stays simple but feels polished",
    ],
    metrics: [
      { value: "Live", label: "Status", description: "Deployed and publicly accessible" },
    ],
    implementation: {
      approach:
        "Built as a full-stack MERN application, with a Node/Express backend serving movie data to a React front end styled with TailwindCSS.",
      technologies: [
        { name: "React", reason: "Component-driven, fast UI development" },
        { name: "Node.js & Express", reason: "Lightweight, flexible backend API" },
        { name: "MongoDB", reason: "Flexible document storage for movie data" },
      ],
    },
    architecture: "React front end communicating with a Node/Express + MongoDB backend, deployed on Render.",
    documentation: {
      setup: "Clone the repository, install dependencies with npm install, and run the dev server.",
      usage: "Visit the live site to browse and search movies.",
    },
  },
  {
    id: "tarazu",
    title: "Tarazu",
    description:
      "A handy calculator/utility web app named after the Hindi word for a weighing scale.",
    fullDescription:
      "Tarazu is a lightweight utility web app designed to make everyday calculations quick and simple. Built with a focus on a clean, distraction-free UI, it's one of the earliest full projects built while learning the fundamentals of front-end and full-stack development.",
    image: "/projects/tarazu.png",      // <-- /projects/ add kiya (aur spelling check kar li)
    images: ["/projects/tarazu.png"],   // <-- yahan bhi
    tags: ["React", "JavaScript", "TailwindCSS"],
    techStack: ["React", "JavaScript", "TailwindCSS"],
    category: "web",
    featured: true,
    githubUrl: "https://github.com/Dev-Harshupadhyay",
    liveUrl: "https://tarzau.netlify.app",
    features: [
      "Simple, fast calculation tool",
      "Clean, minimal interface",
      "Fully responsive design",
    ],
    challenges: [
      "Keeping the UI minimal while staying functional",
      "Handling edge cases in calculation logic",
    ],
    metrics: [
      { value: "Live", label: "Status", description: "Deployed and publicly accessible" },
    ],
    implementation: {
      approach: "Built as a React single-page app, styled with TailwindCSS, and deployed on Netlify.",
      technologies: [
        { name: "React", reason: "Interactive, component-based UI" },
        { name: "TailwindCSS", reason: "Fast, utility-first styling" },
      ],
    },
    architecture: "Static React front end deployed on Netlify.",
    documentation: {
      setup: "Clone the repository, install dependencies with npm install, and run the dev server.",
      usage: "Visit the live site to use the calculator.",
    },
  },
  {
    id: "climatek",
    title: "ClimaTek",
    description:
      "A real-time weather intelligence dashboard with forecasts, UV index, and air quality data.",
    fullDescription:
      "ClimaTek (Atmosphera) is a weather intelligence dashboard that presents real-time weather data — including forecasts, UV index, and air quality — in a clean, easy-to-read interface. It was built to practice working with third-party APIs and presenting live data in a visually engaging way.",
    image: "/projects/climatek.png",      // <-- /projects/ add kiya
    images: ["/projects/climatek.png"],   // <-- yahan bhi
    tags: ["React", "API Integration", "TailwindCSS"],
    techStack: ["React", "JavaScript", "Weather API", "TailwindCSS"],
    category: "web",
    featured: true,
    githubUrl: "https://github.com/Dev-Harshupadhyay",
    liveUrl: "https://climatek.netlify.app",
    features: [
      "Real-time weather data",
      "Forecast, UV index, and air quality display",
      "Clean, dashboard-style UI",
      "Responsive across devices",
    ],
    challenges: [
      "Working with live weather API data and rate limits",
      "Presenting multiple data points without cluttering the UI",
    ],
    metrics: [
      { value: "Live", label: "Status", description: "Deployed and publicly accessible" },
    ],
    implementation: {
      approach:
        "A React front end that fetches and displays live weather data from a public weather API, styled with TailwindCSS and deployed on Netlify.",
      technologies: [
        { name: "React", reason: "Dynamic, data-driven dashboard UI" },
        { name: "Weather API", reason: "Source of real-time forecast, UV, and air quality data" },
        { name: "TailwindCSS", reason: "Fast, consistent styling" },
      ],
    },
    architecture: "Static React front end fetching live data client-side, deployed on Netlify.",
    documentation: {
      setup: "Clone the repository, install dependencies with npm install, and run the dev server.",
      usage: "Visit the live site to check real-time weather intelligence for any location.",
    },
  },
];
