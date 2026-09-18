export interface Profile {
  name: string;
  preferredName: string;
  handle: string;
  title: string;
  roles: string[];
  headline: string;
  heroLines: string[];
  tagline: string;
  bio: string[];
  quote: string;
  url: string;
  email: string;
  location: string;
  country: string;
  timezone: string;
  status: {
    available: boolean;
    text: string;
  };
  socials: {
    github: string;
    linkedin: string;
    telegram: string;
    email: string;
  };
  stats: {
    value: string;
    label: string;
    sublabel?: string;
  }[];
}

export const profile: Profile = {
  name: "Harsh Upadhyay",
  preferredName: "Harsh",
  handle: "Dev-Harshupadhyay",
  title: "Full-Stack Web Developer & BCA Student",
  roles: [
    "Full-Stack Web Developer",
    "React & Next.js Specialist",
    "Automation & Bot Builder",
    "BCA Student",
  ],
  headline: "Designing. Building. Shipping.",
  heroLines: ["Designing.", "Building.", "Shipping."],
  tagline:
    "Modern digital experiences built with thoughtful design, powerful engineering, and obsessive attention to detail.",
  bio: [
    "I'm a self-taught full-stack developer and BCA student based in Faridabad, India. I turn ideas into clean, fast, reliable web applications that feel good to use.",
    "My focus is on the modern React & Next.js ecosystem, Node.js backends, RESTful APIs, and intelligent Python automation. I believe software should be simple, tactile, and performant.",
    "When I'm not writing code, I'm exploring new web standards, optimizing developer workflows, or building open-source tools with a streak of daily commits.",
  ],
  quote: "Code is like humor. When you have to explain it, it's bad.",
  url: "https://profrolio-next-js.vercel.app",
  email: "harsh48227@gmail.com",
  location: "Faridabad, Haryana, India",
  country: "India",
  timezone: "Asia/Kolkata",
  status: {
    available: true,
    text: "Available for new projects & roles",
  },
  socials: {
    github: "https://github.com/Dev-Harshupadhyay",
    linkedin: "https://www.linkedin.com/in/harsh-upadhyay-a014783b4",
    telegram: "https://t.me/TIMEPASSQ_BOT",
    email: "mailto:harsh48227@gmail.com",
  },
  stats: [
    {
      value: "1,076+",
      label: "Contributions in 2026",
      sublabel: "GitHub commit activity",
    },
    {
      value: "40+",
      label: "Public Repositories",
      sublabel: "Open-source builds",
    },
    {
      value: "10+",
      label: "Live Deployed Apps",
      sublabel: "Production ready",
    },
    {
      value: "141",
      label: "Commits in a Single Day",
      sublabel: "Personal record",
    },
  ],
};
