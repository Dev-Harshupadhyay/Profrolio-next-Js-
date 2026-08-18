"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { useFastFloat } from "@/hooks/useFastFloat";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

// Three.js scene is client-only and fairly heavy, so it's code-split
// and only mounted in the browser.
const Hero3D = dynamic(() => import("@/components/three/Hero3D"), {
  ssr: false,
});

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const blobA = useRef<HTMLDivElement | null>(null);
  const blobB = useRef<HTMLDivElement | null>(null);
  const blobC = useRef<HTMLDivElement | null>(null);
  const blobD = useRef<HTMLDivElement | null>(null);
  const { animate } = useFastFloat();

  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(max-width: 767px)") : null;
    const update = () => {
      const inner = typeof window !== "undefined" ? window.innerWidth <= 767 : false;
      setIsMobile((mq && mq.matches) || inner);
    };
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const mq = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(max-width: 360px)") : null;
    const update = () => {
      const inner = typeof window !== "undefined" ? window.innerWidth <= 360 : false;
      setIsNarrow((mq && mq.matches) || inner);
    };
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const stopA = animate(blobA.current);
      const stopB = animate(blobB.current);
      const stopC = animate(blobC.current);
      const stopD = animate(blobD.current);
      return () => {
        stopA();
        stopB();
        stopC();
        stopD();
      };
    }
    [blobA, blobB, blobC, blobD].forEach((r) => {
      if (r.current) r.current.style.transform = "";
    });
    return;
  }, [isMobile]);

  // Cinematic entrance timeline, runs once on mount.
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.35"
        )
        .fromTo(paraRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
        .fromTo(ctaRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.8"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[85vh] bg-background relative overflow-hidden pt-24 pb-16">
      {/* Cinematic 3D backdrop */}
      <div className="absolute inset-0 z-0 opacity-70 dark:opacity-90">
        <Hero3D />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div
          ref={blobA}
          className={`absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-200/30 blur-xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
        />
        <div
          ref={blobB}
          className={`absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-200/20 blur-2xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={{ animationDelay: "1s" }}
        />
        <div
          ref={blobC}
          className={`absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-pink-200/20 blur-xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={{ animationDelay: "2s" }}
        />
        <div
          ref={blobD}
          className={`absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-cyan-200/30 blur-lg ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 lg:gap-4 items-center relative z-10">
        {/* Command Palette Hint */}
        <div className="absolute top-0.5 right-0 z-20 hidden sm:block">
          <div className="bg-gradient-to-r from-gray-100/95 to-gray-200/90 dark:from-gray-900/95 dark:to-black/90 backdrop-blur-sm text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-black/20 dark:border-white/10">
            Press <kbd className="px-2 py-0.5 mx-1 bg-gray-300/60 dark:bg-gray-800/60 border border-black/20 dark:border-white/20 rounded text-xs font-mono font-semibold">Ctrl+K</kbd> to open the command palette
          </div>
        </div>

        {/* Left Content */}
        <div className={`space-y-7 ${heroVisible ? "scroll-animate" : ""}`}>
          <div ref={badgeRef} className="inline-block">
            {isNarrow ? (
              <div className="marquee" aria-hidden>
                <div className="marquee__inner bg-black text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                  <span>Full Stack Web Developer</span>
                </div>
              </div>
            ) : (
              <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                Full Stack Web Developer
              </span>
            )}
          </div>

          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold leading-tight">
            Building clean, modern web experiences from the ground up
          </h1>

          <p ref={paraRef} className="text-lg text-muted-foreground max-w-lg">
            Hi, I&apos;m <span className="text-foreground font-medium">Harsh Upadhyay</span>. <br />A BCA 1st semester student and a self-taught, passionate full-stack web developer. I love turning ideas into real, working products — and I&apos;m just getting started.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full gap-2 px-8 py-6 text-base font-medium"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View my work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 py-6 text-base font-medium border-2 border-black dark:border-white hover:bg-black hover:text-white hover:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black"
              onClick={() => window.open("https://drive.google.com/file/d/1M47X-gCa-cjSFUMKYzSWb88e1cY5xAkn/view?usp=drivesdk", "_blank")}
            >
              View Resume
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          ref={imageRef}
          className={`relative mt-12 lg:mt-0 ${heroVisible ? "scroll-animate scroll-animate-delay-2" : ""}`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="rounded-3xl p-1 bg-white/60 dark:bg-black/30 relative">
              <img
                src="/profile.jpg"
                alt="Harsh Upadhyay"
                className="w-full h-[min(65vh,650px)] sm:h-[min(55vh,600px)] md:h-[min(70vh,750px)] max-h-[850px] object-cover sm:object-top md:object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 rounded-2xl pointer-events-none hidden dark:block"
                style={{
                  background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              <div
                className="absolute inset-0 rounded-2xl pointer-events-none block dark:hidden"
                aria-hidden
                style={{
                  background: "radial-gradient(circle at 62% 34%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 8%, rgba(255,255,255,0.05) 18%, transparent 28%)",
                  mixBlendMode: "screen",
                  opacity: 0.22,
                }}
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl p-6 text-white border-white/10 bg-black/40 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wider mb-1 text-white/80">Available for work</p>
              <p className="text-base sm:text-lg font-semibold">Let&apos;s collaborate on a project!</p>
              <p className="text-xs text-white/60 mt-2">|| ॐ नमः शिवाय ||</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
