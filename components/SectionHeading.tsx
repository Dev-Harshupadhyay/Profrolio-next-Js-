"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClasses =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  const containerVariants = {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200/60 dark:border-sky-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
