"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";
import { skills, skillCategories } from "@/data/skills";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        badge="Technologies"
        title="Engineered with modern tools."
        description="A curated toolkit honed through relentless practice and real-world full-stack deployments."
        align="center"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
        {skillCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isSelected
                  ? "text-white dark:text-neutral-950"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-white/10"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                />
              )}
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
