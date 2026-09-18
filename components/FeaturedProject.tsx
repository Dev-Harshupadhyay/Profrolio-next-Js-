"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Sparkles, Music, Play, Disc } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";

interface FeaturedProjectProps {
  project: ProjectCaseStudy;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-xl shadow-black/[0.04] dark:shadow-black/40 overflow-hidden mb-8 transition-all duration-300"
    >
      {/* Subtle Background Accent Gradient */}
      <div
        className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl pointer-events-none opacity-60 transition-opacity group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Left Column: Metadata & Editorial Content */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Top Pill */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Project</span>
              </span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {project.year} · {project.highlight}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-sky-600 dark:text-sky-400 mt-1">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {project.summary}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-6">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-neutral-100/70 dark:bg-white/[0.04] border border-neutral-200/60 dark:border-white/5"
                >
                  <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {metric.value}
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/15 transition-colors border border-neutral-200/80 dark:border-white/10"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/15 transition-colors border border-neutral-200/80 dark:border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Showcase Container */}
        <div className="lg:col-span-6">
          <Link href={`/projects/${project.slug}`} className="block group/image">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/60 dark:border-white/10 shadow-lg">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover/image:scale-[1.03]"
                />
              ) : (
                /* Bespoke Visual Mockup for Projects without direct screenshots (e.g. Chhath Geet) */
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Music className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm">Chhath Geet Web Player</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">106 Tracks</span>
                  </div>

                  <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10 transition-transform group-hover/image:scale-110">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="text-xs text-neutral-400 font-medium">
                      Lock-Screen Audio API · 37 Artists · 12 Playlists
                    </span>
                  </div>

                  {/* Simulated Audio Waveform / Queue */}
                  <div className="flex items-center gap-1.5 justify-center opacity-70">
                    {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 30, 65, 85, 40].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h * 0.25}px` }}
                        className="w-1.5 bg-amber-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-neutral-900 shadow-lg">
                  View Full Case Study →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
