"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

const filterOptions = ["All", "Featured", "Full-Stack", "Frontend & UI", "Automation"] as const;

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Determine filtered projects
  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    if (activeFilter === "Full-Stack")
      return p.techStack.includes("MongoDB") || p.techStack.includes("Node.js") || p.techStack.includes("REST API");
    if (activeFilter === "Frontend & UI")
      return p.techStack.includes("React") || p.techStack.includes("Tailwind CSS") || p.techStack.includes("JavaScript");
    if (activeFilter === "Automation")
      return p.techStack.includes("Python") || p.techStack.includes("Telegram Bot API") || p.techStack.includes("Automation Tools");
    return true;
  });

  const featuredList = filtered.filter((p) => p.featured);
  const secondaryList = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        badge="Selected Work"
        title="Crafted with intent. Built to perform."
        description="A showcase of real-world production systems, developer tools, and tactile web interfaces."
        align="center"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
        {filterOptions.map((filter) => {
          const isSelected = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isSelected
                  ? "text-white dark:text-neutral-950"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-white/10"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                />
              )}
              <span>{filter}</span>
            </button>
          );
        })}
      </div>

      {/* Content Rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Featured Large Projects */}
          {featuredList.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}

          {/* Secondary Grid Projects */}
          {secondaryList.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {secondaryList.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
