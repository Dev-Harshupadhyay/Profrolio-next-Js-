"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: ReactNode;
  /** Direction the content animates in from. Defaults to "up". */
  direction?: "up" | "left" | "right";
  /** Delay in seconds before the animation starts, for staggering siblings. */
  delay?: number;
  className?: string;
}

export default function Reveal({ children, direction = "up", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") fromVars.y = 48;
    if (direction === "left") fromVars.x = -48;
    if (direction === "right") fromVars.x = 48;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
