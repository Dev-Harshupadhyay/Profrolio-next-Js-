"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    description:
      "Building responsive, interactive user interfaces and web experiences.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    colSpan: "md:col-span-2 lg:col-span-2",
    tint: "bg-sky-500/[0.07] border-sky-500/20",
    hoverAccent: "group-hover:text-sky-400",
  },
  {
    category: "Backend Architecture",
    description: "Developing robust APIs and scalable database architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Java",
      "Python",
      "REST APIs",
      "JWT",
      "MySQL",
      "MongoDB",
    ],
    colSpan: "md:col-span-2 lg:col-span-1",
    tint: "bg-indigo-500/[0.07] border-indigo-500/20",
    hoverAccent: "group-hover:text-indigo-400",
  },
  {
    category: "AI Tools & Assistants",
    description: "Leveraging generative AI to accelerate development.",
    skills: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Cursor",
      "Antigravity AI",
      "Codex",
      "OpenCode",
      "Midjourney",
    ],
    colSpan: "md:col-span-2 lg:col-span-1",
    tint: "bg-violet-500/[0.07] border-violet-500/20",
    hoverAccent: "group-hover:text-violet-400",
  },
  {
    category: "Cloud & Infrastructure",
    description: "Managing deployment, version control, and infrastructure.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Linux",
      "CI/CD",
      "AWS",
      "Figma",
    ],
    colSpan: "md:col-span-2 lg:col-span-2",
    tint: "bg-emerald-500/[0.07] border-emerald-500/20",
    hoverAccent: "group-hover:text-emerald-400",
  },
];

/**
 * "Tools of the Trade" technical stack section — ported from the harshuu repo
 * (bento grid, 4 skill groups) and adapted to this site's dark theme.
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs text-sky-400 uppercase tracking-[0.15em] px-4 py-2 bg-sky-500/10 rounded-full mb-6 border border-sky-500/20 shadow-sm">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-black">
              Tools of the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Trade
              </span>
              .
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-base md:text-lg leading-relaxed">
            A curated selection of modern technologies and frameworks I use to
            build scalable, high-performance digital solutions.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative ${group.colSpan} ${group.tint} border rounded-[2rem] p-8 md:p-10 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 overflow-hidden flex flex-col justify-between will-change-transform`}
            >
              {/* Subtle hover reveal gradient */}
              <div
                className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 mb-10">
                <h3
                  className={`text-2xl md:text-3xl text-white mb-3 tracking-tight transition-colors duration-300 ${group.hoverAccent}`}
                >
                  {group.category}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                  {group.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm text-neutral-300 bg-white/[0.06] border border-white/10 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1 hover:text-white hover:border-white/25 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
