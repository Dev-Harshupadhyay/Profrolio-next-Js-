"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Code2, Flame, Layers } from "lucide-react";

export function Floating3DObjects() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden xl:block">
      {/* Floating 3D Badge 1: Top Left */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotateZ: [-2, 3, -2],
          rotateX: [5, -5, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-36 left-8 2xl:left-16 transform-gpu"
        style={{ perspective: 600 }}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-sky-500/30 shadow-[0_15px_30px_-10px_rgba(56,189,248,0.25)] text-xs font-semibold text-neutral-900 dark:text-white">
          <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-sky-500 leading-none">Specialization</span>
            <span>React &amp; Next.js 14</span>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Badge 2: Top Right */}
      <motion.div
        animate={{
          y: [12, -8, 12],
          rotateZ: [2, -3, 2],
          rotateX: [-5, 5, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-44 right-8 2xl:right-16 transform-gpu"
        style={{ perspective: 600 }}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-amber-500/30 shadow-[0_15px_30px_-10px_rgba(245,158,11,0.25)] text-xs font-semibold text-neutral-900 dark:text-white">
          <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-amber-500 leading-none">2026 Activity</span>
            <span>1,076+ Commits</span>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Badge 3: Bottom Left */}
      <motion.div
        animate={{
          y: [-8, 12, -8],
          rotateZ: [-3, 2, -3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-12 transform-gpu"
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-purple-500/30 shadow-[0_15px_30px_-10px_rgba(168,85,247,0.25)] text-xs font-semibold text-neutral-900 dark:text-white">
          <Layers className="w-3.5 h-3.5 text-purple-500" />
          <span>Full-Stack MERN</span>
        </div>
      </motion.div>
    </div>
  );
}
