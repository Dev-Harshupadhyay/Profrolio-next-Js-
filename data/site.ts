import { profile } from "./profile";
import { projects } from "./projects";
import { skills } from "./skills";
import { experience } from "./experience";
import { services } from "./services";

export { profile, projects, skills, experience, services };

export const site = {
  name: profile.name,
  handle: profile.handle,
  role: profile.roles[0],
  tagline: profile.tagline,
  description: profile.bio.join(" "),
  url: profile.url,
  email: profile.email,
  location: profile.location,
  quote: profile.quote,
  socials: profile.socials,
  roles: profile.roles,
  stats: profile.stats,
  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Python", "REST APIs"],
    Database: ["MongoDB", "SQL"],
    "Tools & Deploy": ["Git", "GitHub Actions", "Vercel", "Netlify", "Render"],
  },
};
