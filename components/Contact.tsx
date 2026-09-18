"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./Button";
import { Card3D, Card3DItem } from "./Card3D";
import { profile } from "@/data/profile";
import { playTactileClick } from "@/lib/sound";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const copyEmail = () => {
    playTactileClick();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.85 },
        colors: ["#38bdf8", "#818cf8"],
      });
    } catch (e) {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setStatusMessage("Please fill out all fields.");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setStatusMessage("Message prepared! Opening your mail client...");

      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#34d399", "#818cf8", "#f59e0b"],
        });
      } catch (e) {}

      const mailtoUrl = `mailto:${profile.email}?subject=3D Portfolio Project Inquiry from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(
        `Hi Harsh,\n\n${formState.message}\n\nBest,\n${formState.name} (${formState.email})`
      )}`;
      window.location.href = mailtoUrl;

      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Background 3D Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-purple-600/15 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <Card3D depth={8} glowColor="rgba(56, 189, 248, 0.25)">
        <div className="rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-2 border-neutral-200/90 dark:border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle top pill in 3D */}
          <Card3DItem z={25}>
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Initiate Collaboration</span>
              </span>
            </div>
          </Card3DItem>

          {/* Large Statement */}
          <Card3DItem z={35}>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
                Have something worth building?
                <span className="block mt-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(56,189,248,0.25)]">
                  Let&apos;s make it happen.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto">
                Whether you have an ambitious full-stack product, an automation need, or an engineering role — let&apos;s build together.
              </p>
            </div>
          </Card3DItem>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
            {/* Left Column: Direct Contact & 3D Channels */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <Card3DItem z={20}>
                <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                  Direct Contact
                </h3>

                {/* Email Card with 3D Push Copy button */}
                <div className="p-4 rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/80 border border-neutral-200 dark:border-white/10 shadow-sm flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 shadow-inner">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-neutral-500 font-semibold">Email Address</span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-bold text-neutral-900 dark:text-white hover:text-sky-500 truncate"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2.5 rounded-xl bg-white dark:bg-neutral-700 shadow-[0_2px_0_0_rgba(0,0,0,0.1)] active:translate-y-0.5 active:shadow-none text-neutral-700 dark:text-neutral-200 hover:text-sky-500 transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Social 3D Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-white/10 shadow-[0_3px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_3px_0_0_rgba(255,255,255,0.05)] flex items-center gap-3 hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-neutral-900 dark:text-white group-hover:text-sky-500">
                        LinkedIn
                      </span>
                      <span className="text-neutral-500">Connect</span>
                    </div>
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-white/10 shadow-[0_3px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_3px_0_0_rgba(255,255,255,0.05)] flex items-center gap-3 hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-neutral-900 dark:text-white group-hover:text-sky-500">
                        GitHub
                      </span>
                      <span className="text-neutral-500">40+ Repos</span>
                    </div>
                  </a>

                  <a
                    href={profile.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-white/10 shadow-[0_3px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_3px_0_0_rgba(255,255,255,0.05)] flex items-center gap-3 hover:-translate-y-1 transition-all group sm:col-span-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#229ED9]/10 text-[#229ED9] flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-neutral-900 dark:text-white group-hover:text-sky-500">
                        Telegram (@TIMEPASSQ_BOT)
                      </span>
                      <span className="text-neutral-500">Direct message &amp; bots</span>
                    </div>
                  </a>
                </div>
              </Card3DItem>
            </div>

            {/* Right Column: 3D Form */}
            <div className="lg:col-span-7">
              <Card3DItem z={30}>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                    Send Direct Message
                  </h3>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-sky-500 text-sm shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-sky-500 text-sm shadow-inner transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Project Details / Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, engineering role, or automation ideas..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-neutral-800/80 border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-sky-500 text-sm shadow-inner transition-all resize-none"
                    />
                  </div>

                  {statusMessage && (
                    <div
                      className={`p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                        status === "success"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                          : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : null}
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    loading={status === "loading"}
                    arrow
                    confettiEffect
                    className="w-full mt-2"
                  >
                    Send Message via Mail
                  </Button>
                </form>
              </Card3DItem>
            </div>
          </div>
        </div>
      </Card3D>
    </section>
  );
}
