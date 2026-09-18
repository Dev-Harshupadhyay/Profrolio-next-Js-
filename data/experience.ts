export interface Milestone {
  year: string;
  role: string;
  organization: string;
  type: "Work & Projects" | "Education" | "Milestone";
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const experience: Milestone[] = [
  {
    year: "2026 — Present",
    role: "Full-Stack Web Developer & Open-Source Creator",
    organization: "Independent Builder",
    type: "Work & Projects",
    location: "Faridabad, India",
    description:
      "Actively architecting and deploying production-grade web applications with React, Next.js, and TypeScript. Maintaining an intensive daily commit streak with over 1,076 contributions in 2026.",
    highlights: [
      "Engineered high-performance web applications including Chhath Geet (106 songs) and Cinevood (MERN stack).",
      "Built asynchronous Python automation tools and Telegram bots handling real-world workflows.",
      "Maintained 40+ public GitHub repositories with modular architecture and clean documentation.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Python", "Tailwind CSS"],
  },
  {
    year: "2025",
    role: "Full-Stack & Backend Systems Deep-Dive",
    organization: "Self-Directed Engineering",
    type: "Work & Projects",
    location: "Faridabad, India",
    description:
      "Deepened expertise in backend systems, RESTful API design, database modeling, and modern JavaScript tooling.",
    highlights: [
      "Built complete MERN architectures with JWT authentication, CRUD administrative dashboards, and database indexing.",
      "Developed interactive responsive web utilities including Weather App and Tarazu.",
      "Implemented automated CI/CD deployment pipelines using GitHub Actions, Vercel, and Render.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript ES6+", "Git"],
  },
  {
    year: "2024 — Present",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "University Education",
    type: "Education",
    location: "Haryana, India",
    description:
      "Pursuing formal undergraduate degree in Computer Applications with a focus on data structures, algorithms, relational databases, software engineering principles, and web technologies.",
    highlights: [
      "Core coursework in Object-Oriented Programming, Database Management Systems (DBMS), and Computer Networks.",
      "Applied academic theoretical concepts directly into production-grade personal software projects.",
    ],
    skills: ["Data Structures", "Algorithms", "C/C++", "DBMS & SQL", "Computer Networks"],
  },
  {
    year: "2024",
    role: "The Genesis: Learning to Code",
    organization: "Foundations",
    type: "Milestone",
    location: "India",
    description:
      "Began the software engineering journey with HTML5, CSS3, and core JavaScript, quickly progressing into modern frontend frameworks.",
    highlights: [
      "Built foundational static websites, responsive landing pages, and interactive JavaScript widgets.",
      "Established core habits in Git version control, GitHub workflow, and clean code principles.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Git & GitHub", "Responsive Design"],
  },
];
