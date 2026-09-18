"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github, Linkedin, Send, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}: MobileMenuProps) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 15 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-white/95 dark:bg-black/95 backdrop-blur-2xl px-6 py-6 sm:px-10 overflow-y-auto"
        >
          {/* Top bar: Brand + ThemeToggle + Close */}
          <div className="flex items-center justify-between w-full max-w-lg mx-auto">
            <Link
              href="/"
              onClick={onClose}
              className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white"
            >
              {profile.preferredName}
              <span className="text-sky-500">.</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col justify-center my-auto py-8 max-w-lg mx-auto w-full">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors flex items-center justify-between py-1.5 ${
                        isActive
                          ? "text-sky-600 dark:text-sky-400"
                          : "text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive
                            ? "opacity-100 text-sky-500 translate-x-1 -translate-y-1"
                            : "opacity-40"
                        }`}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              custom={navLinks.length}
              variants={linkVariants}
              initial="closed"
              animate="open"
              className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-white/10"
            >
              <a
                href="#contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-md transition-colors"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* Bottom Socials & Metadata */}
          <div className="max-w-lg mx-auto w-full pt-4 border-t border-neutral-200/60 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>{profile.location}</span>
            <div className="flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2 rounded-full hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="p-2 rounded-full hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
