import Preloader from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpotlightCursor } from "@/components/SpotlightCursor";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-apple-bg-light dark:bg-apple-bg-dark text-neutral-900 dark:text-neutral-100 flex flex-col relative overflow-hidden">
      {/* Opening mantra preloader (ॐ नमः शिवाय) */}
      <Preloader />
      {/* 3D Ambient Spotlight Cursor */}
      <SpotlightCursor />

      <Navbar />

      <main className="flex-1 w-full relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <ProjectGrid />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
