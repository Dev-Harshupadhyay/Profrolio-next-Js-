"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  className?: string;
}

export function BackToTop({ className = "" }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-white/10 transition-colors ${className}`}
      aria-label="Scroll back to top"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </motion.button>
  );
}
