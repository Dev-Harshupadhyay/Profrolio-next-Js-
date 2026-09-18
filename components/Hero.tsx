"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Activity, GitCommit, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { Card3D, Card3DItem } from "./Card3D";
import { Hero3DCanvas } from "./Hero3DCanvas";
import { Floating3DObjects } from "./Floating3DObjects";
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
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* 3D WebGL Holographic Particle Scene */}
      <Hero3DCanvas />

      {/* 3D Floating Badges & Geometry */}
      <Floating3DObjects />

      {/* Ambient 3D Depth Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-b from-sky-500/15 via-blue-600/10 to-indigo-600/5 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center text-center relative z-20"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/15 text-neutral-800 dark:text-neutral-200 shadow-md backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{profile.status.text}</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.02] max-w-4xl select-none"
        >
          <span className="block drop-shadow-sm text-neutral-900 dark:text-white">Designing.</span>
          <span className="block drop-shadow-sm text-neutral-900 dark:text-white">Building.</span>
          <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(56,189,248,0.3)]">
            Shipping.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed font-normal"
        >
          {profile.tagline}
        </motion.p>

        {/* Hero CTA 3D Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full"
        >
          <Button
            href="#projects"
            variant="glow"
            size="lg"
            arrow
            confettiEffect
          >
            Explore 3D Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            size="lg"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* 3D Interactive Telemetry Workstation Card */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-4xl"
        >
          <Card3D depth={10} glowColor="rgba(56, 189, 248, 0.25)">
            <div className="relative rounded-3xl p-5 sm:p-7 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border-2 border-neutral-200/80 dark:border-white/15 shadow-2xl text-left overflow-hidden">
              {/* Top Bar with 3D Pop */}
              <Card3DItem z={25}>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200 dark:border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    </div>
                    <span className="font-mono font-semibold text-neutral-600 dark:text-neutral-300 ml-2">
                      harsh@workstation ~ 3d-accelerated-mode
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Live Telemetry</span>
                  </div>
                </div>
              </Card3DItem>

              {/* Metrics Grid in 3D */}
              <Card3DItem z={40}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group/stat flex flex-col p-4 rounded-2xl bg-neutral-100/80 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 hover:border-sky-500/50 transition-all shadow-sm"
                    >
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white group-hover/stat:text-sky-500 transition-colors">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">
                        {stat.label}
                      </span>
                      {stat.sublabel && (
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                          {stat.sublabel}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Card3DItem>

              {/* Bottom Quick Stack Badges */}
              <Card3DItem z={20}>
                <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-sky-500" />
                    <span>Stack: Next.js 14 · React · TypeScript · Node.js · Three.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>60fps WebGL &amp; 3D Motion</span>
                  </div>
                </div>
              </Card3DItem>
            </div>
          </Card3D>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-10 hidden md:flex flex-col items-center gap-2 text-xs text-neutral-500"
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
