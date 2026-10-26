import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Compass, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-apple-bg-light dark:bg-apple-bg-dark text-neutral-900 dark:text-neutral-100 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-b from-sky-500/15 via-blue-600/10 to-indigo-600/5 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Terminal-style 404 card */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border-2 border-neutral-200/90 dark:border-white/15 shadow-2xl text-left mb-10">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-200 dark:border-white/10 text-xs">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono font-semibold text-neutral-500 dark:text-neutral-400 ml-2">
              harsh@portfolio ~ exit code 404
            </span>
          </div>
          <div className="flex items-start gap-3 font-mono text-sm">
            <Terminal className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 dark:text-neutral-400">
                $ navigate /this-page
              </span>
              <span className="text-red-500 dark:text-red-400 font-semibold">
                error: route not found — the star you followed drifted away.
              </span>
            </div>
          </div>
        </div>

        {/* Big 404 */}
        <span className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(56,189,248,0.3)]">
          404
        </span>

        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The link may be broken or the page has moved. Head back home and
          continue exploring the work.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.4)] active:translate-y-1 active:shadow-none hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-white/15 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4 text-sky-500" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
