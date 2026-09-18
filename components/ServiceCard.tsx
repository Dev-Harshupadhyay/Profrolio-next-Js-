"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, Layout, Code, Server, Cpu, Zap } from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.3),
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.25, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-lg shadow-black/[0.02] dark:shadow-black/30 transition-all duration-300 h-full overflow-hidden"
    >
      {/* Top Row: Oversized Number + Icon */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-neutral-300 dark:text-neutral-700 group-hover:text-sky-500 transition-colors">
            {service.number}
          </span>
          <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center group-hover:bg-sky-50 dark:group-hover:bg-sky-500/10 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {iconMap[service.iconName] || <Layout className="w-5 h-5" />}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mt-1 mb-3">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-6">
          {service.description}
        </p>
      </div>

      {/* Deliverables List */}
      <div>
        <div className="pt-5 border-t border-neutral-200/60 dark:border-white/10 space-y-2">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
            >
              <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Hover Arrow Indicator */}
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          <span>Inquire regarding this capability</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
