"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Sparkles, Music, Play, Disc } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";
import { Card3D, Card3DItem } from "./Card3D";

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
      className="mb-10"
    >
      <Card3D depth={12} glowColor="rgba(56, 189, 248, 0.3)">
        <div className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-2 border-neutral-200/90 dark:border-white/15 hover:border-sky-500/50 dark:hover:border-sky-400/50 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Subtle Background Accent Gradient */}
          <div
            className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Column: Metadata & Editorial Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Top Pill in 3D */}
                <Card3DItem z={25}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Featured 3D Showcase</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-semibold">
                      {project.year} · {project.highlight}
                    </span>
                  </div>
                </Card3DItem>

                {/* Title & Subtitle in 3D */}
                <Card3DItem z={40}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 mt-1">
                    {project.subtitle}
                  </p>
                </Card3DItem>

                {/* Description */}
                <Card3DItem z={20}>
                  <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </Card3DItem>

                {/* Key Metrics in 3D */}
                <Card3DItem z={35}>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 my-6">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col p-3 rounded-2xl bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 shadow-sm"
                      >
                        <span className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white">
                          {metric.value}
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 truncate">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card3DItem>

                {/* Tech Stack Pills */}
                <Card3DItem z={20}>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card3DItem>
              </div>

              {/* Action Links */}
              <Card3DItem z={50}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.4)] active:translate-y-1 active:shadow-none hover:scale-105 transition-all"
                  >
                    <span>3D Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm border border-neutral-200 dark:border-white/15 transition-all hover:scale-105"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm border border-neutral-200 dark:border-white/15 transition-all hover:scale-105"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo</span>
                    </a>
                  )}
                </div>
              </Card3DItem>
            </div>

            {/* Right Column: 3D Visual Showcase Container */}
            <div className="lg:col-span-6">
              <Card3DItem z={45}>
                <Link href={`/projects/${project.slug}`} className="block group/image">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 border-2 border-neutral-300/80 dark:border-white/20 shadow-2xl">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover/image:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-lg">
                              <Music className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-sm">Chhath Geet Web Audio 3D</span>
                          </div>
                          <span className="text-xs font-mono text-amber-400 font-bold">106 Songs</span>
                        </div>

                        <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
                          <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-transform group-hover/image:scale-110">
                            <Play className="w-7 h-7 fill-current ml-1" />
                          </div>
                          <span className="text-xs text-neutral-300 font-semibold">
                            Media Session API · 37 Artists · 12 Playlists
                          </span>
                        </div>

                        {/* Simulated Audio 3D Waveform */}
                        <div className="flex items-center gap-1.5 justify-center">
                          {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 30, 65, 85, 40].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h * 0.28}px` }}
                              className="w-1.5 bg-gradient-to-t from-amber-500 to-amber-300 rounded-full shadow-sm"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-full text-xs font-bold bg-white text-neutral-950 shadow-xl scale-95 group-hover/image:scale-100 transition-transform">
                        Launch 3D Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              </Card3DItem>
            </div>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}
