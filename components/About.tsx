"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Flame, Code, Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        badge="About Me"
        title="Built with curiosity. Refined through experience."
        description="A full-stack software developer who values simplicity, tactile ergonomics, and relentless daily execution."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Editorial Story */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7 flex flex-col space-y-6 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal"
        >
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} className="first:text-xl sm:first:text-2xl first:font-medium first:text-neutral-900 dark:first:text-white first:leading-snug">
              {paragraph}
            </p>
          ))}

          {/* Quick Quote Callout */}
          <div className="pt-4 border-l-2 border-sky-500 pl-4 my-2 text-neutral-800 dark:text-neutral-200 italic font-mono text-sm sm:text-base">
            &ldquo;{profile.quote}&rdquo;
          </div>

          {/* Key Attributes Pills */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white">Location</span>
                <span className="text-neutral-600 dark:text-neutral-400">{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white">Education</span>
                <span className="text-neutral-600 dark:text-neutral-400">BCA (Undergrad)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white">Daily Streak</span>
                <span className="text-neutral-600 dark:text-neutral-400">1,076 Commits in 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Code className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white">Code Philosophy</span>
                <span className="text-neutral-600 dark:text-neutral-400">Tactile &amp; Scalable</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl p-3 sm:p-4 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40">
            {/* Image Container with subtle rounded framing */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/40 dark:border-white/10">
              <Image
                src="/profile.jpg"
                alt="Harsh Upadhyay"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                <span className="font-medium">{profile.name}</span>
                <span className="font-mono opacity-80">@{profile.handle}</span>
              </div>
            </div>

            {/* Bottom Mini Stats */}
            <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-500" />
                <span>Full-Stack Builder</span>
              </span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
