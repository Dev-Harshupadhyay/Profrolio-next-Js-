"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Activity, GitCommit, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { profile } from "@/data/profile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Subtle Apple Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-b from-sky-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100/90 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{profile.status.text}</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05] max-w-4xl"
        >
          <span className="block text-neutral-900 dark:text-white">Designing.</span>
          <span className="block text-neutral-900 dark:text-white">Building.</span>
          <span className="block bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Shipping.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed font-normal"
        >
          {profile.tagline}
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
        >
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            arrow
          >
            Explore My Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            size="lg"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Hero Visual: Apple Glass Telemetry Card */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-4xl"
        >
          <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-2xl shadow-neutral-950/5 dark:shadow-black/50 text-left overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200/60 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-neutral-500 dark:text-neutral-400 ml-2">
                  harsh@workstation ~ production-ready
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
                <span>Live Metrics</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col p-3.5 rounded-xl bg-neutral-100/60 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-white/[0.05]"
                >
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-0.5">
                    {stat.label}
                  </span>
                  {stat.sublabel && (
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-1">
                      {stat.sublabel}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Quick Stack Badges */}
            <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 font-mono">
                <Terminal className="w-3.5 h-3.5 text-sky-500" />
                <span>Stack: Next.js 14 · React · TypeScript · Node.js · Python</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Mobile &amp; SEO Ready</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12 hidden md:flex flex-col items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
