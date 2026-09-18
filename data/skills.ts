export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools";
  tagline: string;
  iconName: string;
  level?: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    tagline: "Component-driven interfaces & responsive state architecture",
    iconName: "Code2",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    tagline: "Full-stack SSR, SSG & edge-optimized applications",
    iconName: "Layers",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    tagline: "Reliable, scalable code with strict compile-time safety",
    iconName: "FileCode",
    featured: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    tagline: "Modern asynchronous workflows & browser runtimes",
    iconName: "Sparkles",
    featured: false,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tagline: "Design systems, fluid typography & Apple-grade polish",
    iconName: "Palette",
    featured: true,
  },
  {
    name: "Node.js",
    category: "Backend",
    tagline: "Backend systems & high-throughput asynchronous APIs",
    iconName: "Server",
    featured: true,
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "Robust middleware, secure routing & RESTful endpoints",
    iconName: "Network",
    featured: false,
  },
  {
    name: "Python",
    category: "Backend",
    tagline: "Automation pipelines, Telegram bots & utility tooling",
    iconName: "Cpu",
    featured: true,
  },
  {
    name: "MongoDB",
    category: "Database",
    tagline: "Document schemas, aggregation pipelines & data indexing",
    iconName: "Database",
    featured: true,
  },
  {
    name: "SQL",
    category: "Database",
    tagline: "Relational data modeling, table normalization & queries",
    iconName: "Table",
    featured: false,
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    tagline: "Version control, automated workflows & open-source collaboration",
    iconName: "GitBranch",
    featured: true,
  },
  {
    name: "Vercel & Cloud Deploy",
    category: "DevOps & Tools",
    tagline: "Zero-downtime continuous deployment & edge CDN hosting",
    iconName: "Cloud",
    featured: true,
  },
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
] as const;
