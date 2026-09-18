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
import { Button } from "./Button";
import { profile } from "@/data/profile";

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
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setStatusMessage("Please fill out all fields.");
      return;
    }

    setStatus("loading");

    // Simulate reliable dispatch or open mail client if desired
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setStatusMessage("Thank you! Your message has been prepared.");

      // Open mailto fallback with prefilled fields
      const mailtoUrl = `mailto:${profile.email}?subject=Project Inquiry from ${encodeURIComponent(
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
      {/* Background Subtle Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/10 via-blue-500/5 to-purple-500/10 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-white/10 shadow-2xl shadow-black/[0.04] dark:shadow-black/60 relative overflow-hidden">
        {/* Subtle top pill */}
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </span>
        </div>

        {/* Large Statement */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            Have something worth building?
            <span className="block mt-2 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Let&apos;s make it happen.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Whether you have an ambitious full-stack product, an automation need, or an open engineering role — I&apos;d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
              Direct Contact
            </h3>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">Email Address</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 truncate"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors shrink-0"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-white/10 flex items-center gap-3 hover:border-neutral-300 dark:hover:border-white/25 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    LinkedIn
                  </span>
                  <span className="text-neutral-500">Connect professionally</span>
                </div>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-white/10 flex items-center gap-3 hover:border-neutral-300 dark:hover:border-white/25 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    GitHub
                  </span>
                  <span className="text-neutral-500">Explore 40+ repos</span>
                </div>
              </a>

              <a
                href={profile.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-white/10 flex items-center gap-3 hover:border-neutral-300 dark:hover:border-white/25 transition-all group sm:col-span-2"
              >
                <div className="w-9 h-9 rounded-xl bg-[#229ED9]/10 text-[#229ED9] flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    Telegram (@TIMEPASSQ_BOT)
                  </span>
                  <span className="text-neutral-500">Instant messaging &amp; bot commands</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
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
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
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
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                >
                  Project Details / Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or engineering opportunity..."
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    status === "success"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
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
                variant="primary"
                size="lg"
                loading={status === "loading"}
                arrow
                className="w-full mt-2"
              >
                Send Message via Mail
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
