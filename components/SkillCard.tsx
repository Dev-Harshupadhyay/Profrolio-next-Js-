"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layers,
  FileCode,
  Sparkles,
  Palette,
  Server,
  Network,
  Cpu,
  Database,
  Table,
  GitBranch,
  Cloud,
  Terminal,
} from "lucide-react";
import { Skill } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  FileCode: <FileCode className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Table: <Table className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.3),
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/25 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300 h-full min-h-[140px]"
    >
      <div>
        {/* Header: Icon + Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-all duration-200 group-hover:bg-sky-50 dark:group-hover:bg-sky-500/10 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:scale-105">
            {iconMap[skill.iconName] || <Terminal className="w-5 h-5" />}
          </div>
          <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-white/5">
            {skill.category}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {skill.name}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
        {skill.tagline}
      </p>
    </motion.div>
  );
}
