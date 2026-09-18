"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "experience", "services", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className={`pointer-events-auto flex items-center justify-between gap-4 transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 max-w-5xl w-full ${
            isScrolled
              ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-lg shadow-black/[0.03] dark:shadow-black/40"
              : "bg-white/40 dark:bg-black/30 backdrop-blur-md border border-neutral-200/40 dark:border-white/[0.06]"
          }`}
        >
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-tight text-neutral-900 dark:text-white transition-opacity hover:opacity-80 shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span>{profile.preferredName}</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-neutral-200/60 dark:bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer/Modal */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
