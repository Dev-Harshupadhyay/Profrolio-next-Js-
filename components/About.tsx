"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Flame, Code, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const attributes = [
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: profile.location },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Education", value: "BCA (Undergrad)" },
  { icon: <Flame className="w-4 h-4" />, label: "Daily Streak", value: "1,076 Commits in 2026" },
  { icon: <Code className="w-4 h-4" />, label: "Focus", value: "React, Next.js & Automation" },
];

const techLogos = [
  { src: "/tech/react.png", alt: "React", className: "w-16 h-14 md:w-20 md:h-18" },
  { src: "/tech/node.png", alt: "Node.js", className: "w-16 h-16 md:w-20 md:h-20" },
  { src: "/tech/mongodb.png", alt: "MongoDB wordmark", className: "w-24 h-auto md:w-28" },
];

/**
 * About section — styled after pmharshuu.netlify.app's signature block:
 * blue/purple gradient (instead of red), Harsh's photo FIRST in a hanging
 * frame with a drop-bounce entrance, then the editorial intro text.
 */
export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#7c3aed] pt-20 sm:pt-24 pb-28 sm:pb-36 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient pulsing stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black/25 animate-pulse pointer-events-none" aria-hidden="true">
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div
        className="absolute bottom-36 left-4 md:left-20 text-black/25 animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
        {/* 1. Photo FIRST — hanging frame with drop-bounce entrance */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: -80, rotate: -8, opacity: 0 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { y: 0, rotate: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0.4 }
                : { type: "spring", stiffness: 160, damping: 11, mass: 0.9 }
            }
            className="relative flex justify-center w-full"
          >
            {/* Hanging strap + hook clip (like the original) */}
            <div className="absolute -top-24 left-1/2 w-3 h-28 bg-black -translate-x-1/2 shadow-inner z-0" aria-hidden="true" />
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" aria-hidden="true" />

            {/* Frame with photo */}
            <div className="bg-gray-900 w-full max-w-[300px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <Image
                  src="/profile.webp"
                  alt="Harsh Upadhyay, full-stack web developer"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Tech logos — zoom in on scroll */}
          <div className="flex items-center gap-6 mt-10">
            {techLogos.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hover:scale-110 transition-transform duration-300 cursor-default drop-shadow-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className={`${logo.className} object-contain`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Editorial intro — pmharshuu text + bio */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative z-20 mt-4 md:mt-10"
        >
          <span className="inline-block border border-white/40 bg-white/15 backdrop-blur-md rounded-full px-5 py-1.5 text-sm font-semibold text-white mb-6 shadow-sm">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            My background
          </h2>

          <p className="text-lg leading-relaxed text-white/90 mb-6">
            Hi, my name is{" "}
            <span className="text-black text-xl mx-1 tracking-wide uppercase font-bold bg-white px-2 py-0.5 rounded-md shadow-md whitespace-nowrap">
              Harsh Upadhyay
            </span>
            , a passionate full-stack developer dedicated to crafting clean,
            functional, and highly scalable web applications.
          </p>

          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Attribute glass pills */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {attributes.map((attr) => (
              <div
                key={attr.label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  {attr.icon}
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-white">{attr.label}</span>
                  <span className="text-white/70">{attr.value}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-full text-sm font-bold bg-white text-[#4338ca] hover:bg-white/90 shadow-lg hover:scale-105 transition-all"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom wave transitioning into the next section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-px" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white dark:fill-[#050507]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
