"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experience, Milestone } from "@/data/experience";

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (type: Milestone["type"]) => {
    switch (type) {
      case "Work & Projects":
        return <Briefcase className="w-4 h-4 text-sky-500" />;
      case "Education":
        return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      case "Milestone":
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading
        badge="Journey &amp; Milestones"
        title="Experience &amp; Progression."
        description="A chronology of self-directed engineering, formal education, and continuous skill refinement."
        align="center"
      />

      <div className="relative mt-12 sm:mt-16">
        {/* Animated Central Vertical Line (Desktop) / Left Line (Mobile) */}
        <div
          className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-sky-500 via-neutral-300 dark:via-neutral-700 to-transparent -translate-x-1/2 opacity-70"
          aria-hidden="true"
        />

        <div className="space-y-10 sm:space-y-12">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.year + item.role}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-10`}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-2 border-sky-500 dark:border-sky-400 shadow-md shadow-sky-500/20 z-10">
                  {getIcon(item.type)}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? "sm:text-left" : "sm:text-left"
                  }`}
                >
                  <div className="group rounded-3xl p-6 sm:p-7 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-lg shadow-black/[0.02] dark:shadow-black/30 transition-all duration-300">
                    {/* Header: Year Badge + Type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-500/20">
                        <Calendar className="w-3 h-3" />
                        <span>{item.year}</span>
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                        {item.location}
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5 mb-3">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-4">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Tagline */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/60 dark:border-white/10">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200/40 dark:border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
