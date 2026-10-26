"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, Layout, Code, Server, Cpu, Zap } from "lucide-react";
import { Service } from "@/data/services";
import { Card3D, Card3DItem } from "./Card3D";

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
  /** Scroll-driven blue/purple activation (ported from pmharshuu scroll animation) */
  lit?: boolean;
}

export function ServiceCard({ service, index, lit = false }: ServiceCardProps) {
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
      className="h-full"
    >
      <Card3D
        depth={14}
        glowColor={lit ? "rgba(129, 140, 248, 0.4)" : "rgba(56, 189, 248, 0.25)"}
        className="h-full"
      >
        <div
          className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl backdrop-blur-2xl shadow-xl transition-all duration-700 h-full overflow-hidden ${
            lit
              ? "bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#8b5cf6] border-2 border-indigo-300/70 shadow-[0_20px_50px_rgba(99,102,241,0.45)]"
              : "bg-white/90 dark:bg-neutral-900/90 border-2 border-neutral-200/90 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-400/50"
          }`}
        >
          {/* Top Row: Oversized Number + Icon */}
          <div>
            <Card3DItem z={35}>
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-4xl sm:text-5xl font-black font-mono tracking-tight transition-colors duration-700 drop-shadow-sm ${
                    lit
                      ? "text-white/40"
                      : "text-neutral-300 dark:text-neutral-700 group-hover:text-sky-500"
                  }`}
                >
                  {service.number}
                </span>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-700 ${
                    lit
                      ? "bg-white/20 text-white scale-110"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110"
                  }`}
                >
                  {iconMap[service.iconName] || <Layout className="w-5 h-5" />}
                </div>
              </div>
            </Card3DItem>

            {/* Title & Tagline */}
            <Card3DItem z={25}>
              <h3
                className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-700 ${
                  lit ? "text-white" : "text-neutral-900 dark:text-white group-hover:text-sky-500"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-semibold mt-1 mb-3 transition-colors duration-700 ${
                  lit ? "text-white/80" : "text-sky-600 dark:text-sky-400"
                }`}
              >
                {service.tagline}
              </p>
            </Card3DItem>

            {/* Description */}
            <Card3DItem z={15}>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-normal mb-6 transition-colors duration-700 ${
                  lit ? "text-white/90" : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {service.description}
              </p>
            </Card3DItem>
          </div>

          {/* Deliverables List */}
          <div>
            <Card3DItem z={20}>
              <div
                className={`pt-5 border-t space-y-2.5 transition-colors duration-700 ${
                  lit ? "border-white/25" : "border-neutral-200 dark:border-white/10"
                }`}
              >
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 text-xs font-medium transition-colors duration-700 ${
                      lit ? "text-white/90" : "text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 transition-colors duration-700 ${
                        lit ? "text-white" : "text-sky-500"
                      }`}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card3DItem>

            {/* Hover Arrow Indicator */}
            <Card3DItem z={40}>
              <div
                className={`mt-6 flex items-center gap-2 text-xs font-bold transition-colors duration-700 ${
                  lit ? "text-white" : "text-neutral-900 dark:text-white group-hover:text-sky-500"
                }`}
              >
                <span>Inquire This Capability</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Card3DItem>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}
