"use client";

import { useEffect, useMemo, useState } from "react";

type PreloaderProps = {
  /** Milliseconds the logo takes to enter */
  enterDurationMs?: number;
  /** Milliseconds before the preloader starts exiting */
  exitAfterMs?: number;
  /** Milliseconds the exit animation takes */
  exitDurationMs?: number;
  className?: string;
};

/**
 * Opening preloader — ported from the flame build (logo pan-in, scroll lock,
 * slide-up exit) and extended with the "ॐ नमः शिवाय" mantra reveal in Hindi.
 * Plays on every full page load, then gets out of the way.
 */
export default function Preloader({
  enterDurationMs = 900,
  exitAfterMs = 2400,
  exitDurationMs = 700,
  className = "",
}: PreloaderProps) {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const resolvedEnterMs = prefersReducedMotion ? 0 : enterDurationMs;
    const resolvedExitAfterMs = prefersReducedMotion ? 200 : exitAfterMs;
    const resolvedExitDurationMs = prefersReducedMotion ? 0 : exitDurationMs;

    const startExit = window.setTimeout(
      () => setExiting(true),
      resolvedExitAfterMs
    );
    const finish = window.setTimeout(() => {
      setDone(true);
    }, resolvedExitAfterMs + resolvedExitDurationMs);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
    };
  }, [enterDurationMs, exitAfterMs, exitDurationMs, prefersReducedMotion]);

  if (done) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[10000] bg-white dark:bg-[#050507] flex flex-col items-center justify-center transform-gpu transition-transform ease-in-out ${
        prefersReducedMotion ? "duration-0" : "duration-700"
      } ${exiting ? "-translate-y-full" : "translate-y-0"} ${className}`}
    >
      {/* Flame-style H mark, pans up into place */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/preloader.svg"
        alt=""
        className={`h-auto w-[140px] select-none ${
          prefersReducedMotion
            ? "opacity-100"
            : "animate-preloader-logo-in"
        }`}
        draggable={false}
      />

      {/* ॐ नमः शिवाय — mantra reveal */}
      <p
        className={`mt-8 text-3xl sm:text-4xl md:text-5xl font-devanagari font-medium text-neutral-900 dark:text-white select-none ${
          prefersReducedMotion
            ? "opacity-100"
            : "animate-mantra-in animate-mantra-breathe"
        }`}
        style={{ letterSpacing: "0.18em" }}
      >
        ॐ नमः शिवाय
      </p>

      <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-neutral-400 dark:text-neutral-500 select-none">
        Loading portfolio
      </p>
    </div>
  );
}
