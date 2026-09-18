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
import { Card3D, Card3DItem } from "./Card3D";

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
      className="h-full"
    >
      <Card3D depth={14} glowColor="rgba(56, 189, 248, 0.2)" className="h-full">
        <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-2 border-neutral-200/80 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-400/50 shadow-[0_6px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_6px_0_0_rgba(255,255,255,0.05)] transition-all duration-200 h-full min-h-[160px]">
          <div>
            {/* Header: 3D Pop Icon + Category Badge */}
            <Card3DItem z={25}>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-850 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:text-sky-500 transition-all">
                  {iconMap[skill.iconName] || <Terminal className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">
                  {skill.category}
                </span>
              </div>
            </Card3DItem>

            {/* Skill Name in 3D */}
            <Card3DItem z={35}>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-sky-500 transition-colors">
                {skill.name}
              </h3>
            </Card3DItem>
          </div>

          {/* Description */}
          <Card3DItem z={20}>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              {skill.tagline}
            </p>
          </Card3DItem>
        </div>
      </Card3D>
    </motion.div>
  );
}
