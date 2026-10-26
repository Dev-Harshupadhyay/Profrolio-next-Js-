"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "#hero", section: "hero" },
  { name: "About", href: "#about", section: "about" },
  { name: "Expertise", href: "#expertise", section: "expertise" },
  { name: "Skills", href: "#skills", section: "skills" },
  { name: "Projects", href: "#projects", section: "projects" },
  { name: "Contact", href: "#contact", section: "contact" },
];

/**
 * Top navigation — apple-style theme ported from new-profotilo-flame.vercel.app:
 * morphing bar (full-width → floating pill), scroll progress underline,
 * mouse-tracking eyes, pill links with active state, "Let's talk" CTA,
 * and a right slide-in hamburger menu. Dark mode only.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 915);
    const handleMouseMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      setIsScrolled(scrollTop > 20);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach((link) => {
      const el = document.getElementById(link.section);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(link.section);
          });
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const calculateEyePosition = (eyeElement: HTMLDivElement | null) => {
    if (!eyeElement) return { x: 0, y: 0 };
    if (typeof window === "undefined" || window.innerWidth < 915)
      return { x: 0, y: 0 };
    const rect = eyeElement.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);
    const distance = Math.min(
      4,
      Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 100
    );
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "px-4 sm:px-6 pt-6" : "px-0 pt-0"
        } pointer-events-none`}
      >
        <nav
          className={`pointer-events-auto mx-auto px-4 sm:px-8 py-4 flex items-center relative transition-all duration-300 overflow-hidden ${
            isScrolled
              ? "max-w-[85em] rounded-full backdrop-blur-xl bg-white/70 dark:bg-black/70 border border-black/10 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40"
              : "max-w-full rounded-none backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-black/10 dark:border-white/10 shadow-none"
          }`}
        >
          {/* Scroll progress underline */}
          <div
            className="absolute bottom-0 left-0 h-[3px] rounded-b-full z-[5] bg-black dark:bg-white transition-all duration-300 ease-out"
            style={{
              width: `${scrollProgress * 100}%`,
              opacity: isScrolled ? 1 : 0,
              boxShadow: "0 0 6px rgba(0,0,0,0.25)",
              transition: "width 0.25s ease-out, opacity 0.3s ease",
            }}
            aria-hidden="true"
          />

          {/* Left — Logo */}
          <a
            href="/"
            className="text-xl font-bold z-10 flex-shrink-0 tracking-tight active:scale-95 transition-transform duration-200"
          >
            <span className="text-neutral-900 dark:text-white whitespace-nowrap">harsh</span>
            <span className="text-neutral-500 dark:text-neutral-400 whitespace-nowrap">.dev</span>
          </a>

          {/* Center — Mouse-tracking eyes */}
          <div className="hidden min-[915px]:flex items-center gap-1.5 z-10 flex-1 justify-center mx-4">
            <div
              ref={leftEyeRef}
              className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center relative overflow-hidden"
            >
              <div
                className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full absolute transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${
                    isDesktop ? calculateEyePosition(leftEyeRef.current).x : 0
                  }px, ${
                    isDesktop ? calculateEyePosition(leftEyeRef.current).y : 0
                  }px)`,
                }}
              />
            </div>
            <div
              ref={rightEyeRef}
              className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center relative overflow-hidden"
            >
              <div
                className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full absolute transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${
                    isDesktop ? calculateEyePosition(rightEyeRef.current).x : 0
                  }px, ${
                    isDesktop ? calculateEyePosition(rightEyeRef.current).y : 0
                  }px)`,
                }}
              />
            </div>
          </div>

          {/* Right — Navigation */}
          <div className="z-10 flex items-center gap-2 flex-shrink-0 ml-auto">
            <div className="hidden min-[915px]:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === link.section
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle className="ml-1" />
              <a
                href="https://tally.so/r/QKpNqX"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Let&apos;s talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile — Hamburger → slide-in sheet */}
            <div className="flex min-[915px]:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
