"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

/**
 * Services section with the red scroll animation ported from pmharshuu.netlify.app:
 * a serpentine path draws in a blue→purple gradient as you scroll, and each
 * capability card lights up in blue/purple sequentially when the path reaches it.
 */
export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [litCount, setLitCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 55%"],
  });

  // Smooth (spring) progress for the drawn path
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Activate cards one-by-one as the scroll progress (and colored path) passes them
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const n = services.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      const threshold = 0.1 + i * (0.78 / Math.max(n - 1, 1));
      if (latest >= threshold) count = i + 1;
    }
    setLitCount(count);
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading
        badge="Capabilities"
        title="Solutions built for scale &amp; speed."
        description="Comprehensive technical capabilities designed to take digital ideas from concept to production deployment."
        align="center"
      />

      <div className="relative mt-14 sm:mt-16">
        {/* Serpentine dashed path (desktop) — gray base + blue→purple draw-on-scroll overlay */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 1400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="scrollPathGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            d="M 500,0 C 500,140 240,120 240,280 C 240,440 760,420 760,580 C 760,740 240,720 240,880 C 240,1040 760,1020 760,1180 C 760,1300 520,1310 500,1400"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <motion.path
            d="M 500,0 C 500,140 240,120 240,280 C 240,440 760,420 760,580 C 760,740 240,720 240,880 C 240,1040 760,1020 760,1180 C 760,1300 520,1310 500,1400"
            fill="none"
            stroke="url(#scrollPathGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
          />
        </svg>

        {/* Capability cards — alternating along the path on desktop */}
        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-14">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`relative lg:w-[47%] ${
                index % 2 === 1 ? "lg:ml-auto" : ""
              }`}
            >
              <ServiceCard
                service={service}
                index={index}
                lit={index < litCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
