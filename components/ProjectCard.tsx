"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Terminal, Bot, Calculator, Code2 } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";
import { Card3D, Card3DItem } from "./Card3D";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
}

const fallbackIcons: Record<string, React.ReactNode> = {
  "timepass-bot": <Bot className="w-8 h-8 text-emerald-400" />,
  tarazu: <Calculator className="w-8 h-8 text-purple-400" />,
  nostalgic: <Code2 className="w-8 h-8 text-indigo-400" />,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="h-full"
    >
      <Card3D depth={14} glowColor="rgba(56, 189, 248, 0.25)" className="h-full">
        <div className="group relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border-2 border-neutral-200/90 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-400/50 shadow-xl transition-all duration-300 h-full overflow-hidden">
          <div>
            {/* Project 3D Visual Preview */}
            <Card3DItem z={35}>
              <Link href={`/projects/${project.slug}`} className="block group/preview mb-5">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-300 dark:border-white/10 shadow-lg">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span className="font-mono font-bold text-sky-400">{project.year}</span>
                        <span className="font-semibold px-2.5 py-0.5 rounded-full bg-white/10">
                          {project.highlight}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center my-auto text-center space-y-2">
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-xl transition-transform group-hover/preview:scale-110">
                          {fallbackIcons[project.id] || <Terminal className="w-8 h-8 text-sky-400" />}
                        </div>
                        <span className="text-xs font-semibold text-neutral-200">
                          {project.subtitle}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 truncate">
                        {project.techStack.join(" · ")}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-neutral-950 shadow-md">
                      3D Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </Card3DItem>

            {/* Title & Metadata in 3D */}
            <Card3DItem z={25}>
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-3">
                {project.subtitle}
              </p>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-4 line-clamp-3">
                {project.summary}
              </p>
            </Card3DItem>

            {/* Tech Stack */}
            <Card3DItem z={15}>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card3DItem>
          </div>

          {/* Action Footer in 3D */}
          <Card3DItem z={40}>
            <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white hover:text-sky-500 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-sky-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source Code"
                    className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-sky-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </Card3DItem>
        </div>
      </Card3D>
    </motion.div>
  );
}
