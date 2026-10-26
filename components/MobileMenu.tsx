"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; section?: string }[];
  activeSection?: string;
}

/**
 * Right slide-in navigation sheet — ported from the flame build's hamburger menu:
 * dark overlay + 300ms slide from the right, section links, and the Tally CTA.
 */
export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection = "",
}: MobileMenuProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      try {
        const active = document.activeElement as HTMLElement | null;
        if (active && typeof active.blur === "function") active.blur();
        document.body.style.overflow = "hidden";
      } catch {
        /* ignore */
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/80"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Right slide-in panel */}
          <motion.div
            role="dialog"
            aria-label="Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[9999] h-full bg-[#0a0a0c] border-l border-white/10 shadow-2xl overflow-y-auto"
            style={{ width: "min(85vw, 400px)", maxWidth: "400px" }}
          >
            <div className="p-6 h-full w-full">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="absolute right-4 top-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="pt-12 w-full">
                <p className="text-xl font-bold mb-1 text-white">
                  <span>harsh</span>
                  <span className="text-neutral-400">.dev</span>
                </p>
                <p className="text-sm text-neutral-400 mb-6">
                  Navigate to different sections
                </p>

                <nav className="flex flex-col gap-2 w-full">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        activeSection === link.section
                          ? "bg-white text-black"
                          : "text-neutral-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}

                  <a
                    href="https://tally.so/r/QKpNqX"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold bg-white text-black hover:bg-neutral-200 transition-all"
                  >
                    Let&apos;s talk
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </nav>

                {/* Socials row */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
