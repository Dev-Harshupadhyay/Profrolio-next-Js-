"use client";

import Link from "next/link";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { BackToTop } from "./BackToTop";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-neutral-950/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="#hero"
              className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              {profile.name}
              <span className="text-sky-500">.</span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-sm">
              {profile.headline} — {profile.roles[0]}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            <a href="#hero" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#services" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <BackToTop />
          </div>
        </div>

        {/* Bottom Tier: Socials & Copyright */}
        <div className="pt-8 border-t border-neutral-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Address"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
