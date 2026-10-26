"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const TAG_CARDS = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Crafting responsive and interactive user interfaces using React, Next.js, JavaScript, Tailwind CSS, and modern frontend technologies to deliver seamless user experiences.",
    className:
      "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
    aosType: "fade-left",
    aosDelay: 100,
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Building secure REST APIs, authentication systems, server-side applications, and database integrations with scalable architectures.",
    className:
      "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
    aosType: "fade-right",
    aosDelay: 200,
  },
  {
    number: "03",
    title: "AI Tools",
    text: "Leveraging state-of-the-art AI assistants and generative tools like ChatGPT, Claude, GitHub Copilot, Cursor, Antigravity AI, Codex, OpenCode, and Midjourney to accelerate development.",
    className:
      "md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
    aosType: "fade-left",
    aosDelay: 300,
  },
  {
    number: "04",
    title: "Cloud & Deployment",
    text: "Deploying and managing applications using Docker, GitHub Actions, CI/CD pipelines, cloud platforms, and performance optimization practices.",
    className:
      "md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
    aosType: "fade-right",
    aosDelay: 400,
  },
] as const;

const PATH_D =
  "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200";

/**
 * Expertise section — the signature scroll animation ported VERBATIM from the
 * harshuu repo (which mirrors pmharshuu.netlify.app):
 *  - useScroll offset ["start center","end center"]
 *  - spring(stiffness 60, damping 20, restDelta 0.001)
 *  - dashed path revealed through an SVG mask as the spring progresses
 *  - each tag card activates when the line tip (progress × containerHeight)
 *    reaches 50px past the card's top — reversible on scroll-back
 * Palette adapted to this site's dark blue/purple theme (cards light indigo→violet).
 */
const TagCard = ({
  number,
  title,
  text,
  className,
  aosType,
  aosDelay,
  pathLength,
  containerRef,
}: {
  number: string;
  title: string;
  text: string;
  className: string;
  aosType: "fade-left" | "fade-right";
  aosDelay: number;
  pathLength: ReturnType<typeof useSpring>;
  containerRef: React.RefObject<HTMLElement | null>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  const entrance = aosType === "fade-left" ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 };

  return (
    <div
      ref={ref}
      className={`relative z-10 hover:scale-[1.02] transition-transform duration-700 ${className}`}
    >
      <motion.div
        initial={entrance}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: (aosDelay % 400) / 1000 }}
        className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center ${
          isActive
            ? "bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#8b5cf6] border-2 border-white/40 shadow-[0_20px_50px_rgba(99,102,241,0.45)]"
            : "bg-neutral-900 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.07)]"
        }`}
      >
        {/* The hole punch */}
        <div className="w-5 h-5 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] absolute top-4 border border-neutral-600 z-10 flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full opacity-40" />
        </div>

        {/* Inner container */}
        <div
          className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
            isActive ? "bg-black/25" : "bg-white/[0.04]"
          }`}
        >
          <span
            className={`font-serif italic text-xl mb-2 transition-colors duration-700 ${
              isActive ? "text-white/70" : "text-neutral-500"
            }`}
          >
            {number}
          </span>

          <h3
            className={`text-2xl mb-3 tracking-tight font-semibold transition-colors duration-700 ${
              isActive ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? "text-white/85" : "text-neutral-400"
            }`}
          >
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export function Expertise() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full pt-24 pb-32 px-6 md:px-12 overflow-hidden border-y border-white/5"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-sm text-neutral-300 mb-8 shadow-sm bg-white/5 backdrop-blur-md">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 tracking-tight relative font-black">
            Building Modern Digital Solutions with{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Code &amp; AI
            </span>
            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-10 right-10 w-12 h-12 text-neutral-400 hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-sm leading-relaxed">
            Combining full-stack development, artificial intelligence, and cloud
            technologies to create scalable and impactful digital experiences.
          </p>
        </motion.div>

        {/* Desktop SVG Animated Dashed Line — mask reveal (exact harshuu mechanic) */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="expertiseLineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Faint background guide path */}
          <path
            d={PATH_D}
            fill="none"
            stroke="#4b5563"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="expertise-path-mask">
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path
            d={PATH_D}
            fill="none"
            stroke="url(#expertiseLineGradient)"
            strokeWidth="2.5"
            strokeDasharray="8 10"
            mask="url(#expertise-path-mask)"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#4b5563"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="expertise-path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#6366f1"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#expertise-path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {TAG_CARDS.map((card) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={card.className}
              aosType={card.aosType}
              aosDelay={card.aosDelay}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          {/* Hand-drawn end text */}
          <div
            className="hidden md:block absolute top-[1250px] left-[60%] text-3xl text-neutral-400 rotate-6 italic"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            Turning ideas into reality!
          </div>
        </div>
      </div>
    </section>
  );
}
