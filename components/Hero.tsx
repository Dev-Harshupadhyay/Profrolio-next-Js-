"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(site.roles);

  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden" id="home">
      {/* glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-[140px]" aria-hidden />

      <div className="max-w-6xl mx-auto px-5 pt-28 pb-16 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 text-accent-soft text-xs font-mono px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects & internships
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I&apos;m <span className="text-gradient">Harsh Upadhyay</span>
          </h1>

          <p className="mt-4 font-mono text-lg sm:text-xl text-accent h-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {typed}
            <span className="animate-blink">|</span>
          </p>

          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            BCA student & self-taught developer building things you can open in a
            tab and actually use — movie platforms, weather apps, music players and
            bots that automate the boring stuff. Build it badly, understand why,
            rebuild it properly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-base-950 font-semibold px-6 py-3 rounded-full hover:bg-accent-soft transition-colors glow"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
              <Github size={22} />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={site.socials.email} aria-label="Email" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={22} />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-slate-500 ml-2">
              <MapPin size={14} /> {site.location}
            </span>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/40 to-indigo-500/40 blur-2xl scale-95" aria-hidden />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden w-64 h-64 sm:w-80 sm:h-80 bg-base-800">
              <Image
                src="/profile.jpg"
                alt="Harsh Upadhyay — Full-Stack Web Developer"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-base-900 border border-white/10 rounded-2xl px-4 py-2.5 font-mono text-xs text-slate-300 shadow-xl">
              <span className="text-accent">const</span> status = <span className="text-emerald-400">&quot;building&quot;</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
