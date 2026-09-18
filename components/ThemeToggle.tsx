"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100/90 dark:bg-neutral-900/90 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-800" />
        )}
      </motion.div>
    </motion.button>
  );
}
