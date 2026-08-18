"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStackScroller from "@/components/TechStackScroller";
import About from "@/components/About";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";
import Reveal from "@/components/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle hash navigation when the page mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  // Dynamically measure the footer's height for the curtain-scroll effect
  useEffect(() => {
    if (!footerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(footerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  if (isMobile) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <TechStackScroller />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
        <MobileFAB />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <main
        className="relative z-10 bg-background shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[2.5rem] sm:rounded-b-[3rem] overflow-hidden"
        style={{ marginBottom: footerHeight }}
      >
        <Navbar />
        <Hero />
        <TechStackScroller />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <div className="fixed inset-0 w-full h-full z-0 flex flex-col justify-end bg-[#0a0a0a]">
        <div ref={footerRef} className="w-full">
          <Footer />
        </div>
      </div>

      <MobileFAB />
    </div>
  );
}
