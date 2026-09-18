"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Flame, Code, Award, ExternalLink, Box } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card3D, Card3DItem } from "./Card3D";
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
        description="A full-stack software developer who values tactile 3D ergonomics, clean architecture, and relentless daily execution."
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

          {/* 3D Quote Card */}
          <div className="p-4 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/90 border-l-4 border-sky-500 shadow-md my-2 text-neutral-800 dark:text-neutral-200 italic font-mono text-sm sm:text-base">
            &ldquo;{profile.quote}&rdquo;
          </div>

          {/* 3D Key Attributes Grid */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 shadow-[0_4px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">Location</span>
                <span className="text-neutral-600 dark:text-neutral-400">{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 shadow-[0_4px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 shadow-inner">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">Education</span>
                <span className="text-neutral-600 dark:text-neutral-400">BCA (Undergrad)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 shadow-[0_4px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 shadow-inner">
                <Flame className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">Daily Streak</span>
                <span className="text-neutral-600 dark:text-neutral-400">1,076 Commits in 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 shadow-[0_4px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 shadow-inner">
                <Code className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">Motion Philosophy</span>
                <span className="text-neutral-600 dark:text-neutral-400">Tactile &amp; 3D Pro</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Profile Hologram Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5 flex justify-center"
        >
          <Card3D depth={18} glowColor="rgba(56, 189, 248, 0.35)" className="w-full max-w-sm">
            <div className="relative rounded-[2rem] p-4 sm:p-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border-2 border-neutral-200 dark:border-white/15 shadow-2xl">
              {/* Photo Container with 3D Pop */}
              <Card3DItem z={35}>
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 dark:border-white/10 shadow-lg">
                  <Image
                    src="/profile.jpg"
                    alt="Harsh Upadhyay"
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* 3D Floating Nameplate inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-2.5 rounded-xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-lg">
                    <span className="font-bold tracking-tight">{profile.name}</span>
                    <span className="font-mono text-sky-400">@{profile.handle}</span>
                  </div>
                </div>
              </Card3DItem>

              {/* Bottom 3D Badges */}
              <Card3DItem z={50}>
                <div className="mt-4 px-2 py-1 flex items-center justify-between text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <Award className="w-4 h-4 text-sky-500" />
                    <span>Full-Stack Engineer</span>
                  </span>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card3DItem>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
