export const site = {
  name: "Harsh Upadhyay",
  handle: "Dev-Harshupadhyay",
  role: "Full-Stack Web Developer",
  tagline: "BCA student & self-taught full-stack developer from India.",
  description:
    "Portfolio of Harsh Upadhyay — BCA student and self-taught full-stack web developer building clean, fast, real-world web apps with React, Next.js, Node.js and MongoDB.",
  url: "https://profrolio-next-js.vercel.app",
  email: "harsh48227@gmail.com",
  location: "Faridabad, Haryana, India",
  quote: "Code is like humor. When you have to explain it, it's bad.",
  socials: {
    github: "https://github.com/Dev-Harshupadhyay",
    linkedin: "https://www.linkedin.com/in/harsh-upadhyay-a014783b4",
    telegram: "https://t.me/TIMEPASSQ_BOT",
    email: "mailto:harsh48227@gmail.com",
  },
  roles: [
    "Full-Stack Developer",
    "React & Next.js Builder",
    "AI Automation Enthusiast",
    "BCA Student",
  ],
  stats: [
    { value: "40+", label: "Public Repos" },
    { value: "1,076", label: "Contributions in 2026" },
    { value: "10+", label: "Live Deployed Apps" },
    { value: "141", label: "Commits — Best Day" },
  ],
  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Python", "REST APIs"],
    Database: ["MongoDB", "SQL"],
    "Tools & Deploy": ["Git", "GitHub Actions", "Vercel", "Netlify", "Render"],
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: "chhath-geet",
    title: "Chhath Geet",
    description:
      "A devotional music platform for Chhath Puja — 106 verified folk songs, a real audio player with queue, repeat and lock-screen controls, 37 artists and 12 curated playlists.",
    tags: ["React", "Vite", "Media Session API"],
    githubUrl: "https://github.com/Dev-Harshupadhyay/Chhath-puja",
    liveUrl: "https://chhath-puja-ebon.vercel.app",
    featured: true,
    highlight: "106 songs · full player",
  },
  {
    id: "cinevood",
    title: "Cinevood",
    description:
      "A full-stack movie review & discovery platform with a complete admin panel — browse, review and manage film data end to end. MERN architecture, deployed live.",
    image: "/projects/cinveood.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Dev-Harshupadhyay/Cinenvood",
    liveUrl: "https://cinenvood.onrender.com",
    featured: true,
    highlight: "Full MERN stack",
  },
  {
    id: "weather",
    title: "Weather App",
    description:
      "Real-time weather tracking with a clean, fast interface — live API data, city search, and a responsive dashboard people actually check before leaving the house.",
    image: "/projects/climatek.png",
    tags: ["JavaScript", "Weather API", "CSS"],
    githubUrl: "https://github.com/Dev-Harshupadhyay/Weather-app",
    liveUrl: "https://weather-j82w.onrender.com",
    featured: true,
    highlight: "Live API data",
  },
  {
    id: "timepass-bot",
    title: "@TIMEPASSQ_BOT",
    description:
      "A personal Telegram bot for media handling and task automation — quietly automating the boring jobs so they run themselves.",
    tags: ["Python", "Telegram API", "Automation"],
    liveUrl: "https://t.me/TIMEPASSQ_BOT",
    featured: true,
    highlight: "Automation",
  },
  {
    id: "tarazu",
    title: "Tarazu",
    description:
      "A lightweight utility & calculator web app named after the Hindi word for a weighing scale — clean, distraction-free UI for quick everyday calculations.",
    image: "/projects/tarazu.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Dev-Harshupadhyay/Tarzau-",
    liveUrl: "https://tarzau.netlify.app",
    featured: false,
    highlight: "Utility app",
  },
  {
    id: "nostalgic",
    title: "Nostalgic",
    description:
      "A TypeScript-powered experience built while going deeper into Next.js and TypeScript — one of the newest builds in the streak.",
    tags: ["TypeScript", "Next.js"],
    githubUrl: "https://github.com/Dev-Harshupadhyay/Nostalgic-",
    liveUrl: "https://nostalgic-eight.vercel.app",
    featured: false,
    highlight: "TypeScript",
  },
];
