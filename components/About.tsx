import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading eyebrow="about" title="About Me" />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-medium">Harsh Upadhyay</span> — a{" "}
              <span className="text-white font-medium">BCA student</span> and full-stack
              developer from {site.location}. My GitHub has been my workshop since
              January 2025: <span className="text-accent">40+ public repositories</span> and{" "}
              <span className="text-accent">1,076 contributions</span> in 2026 alone.
            </p>
            <p>
              Most of my work lives on the front end, because I like things you can open
              in a tab and actually use — a movie site someone can browse, a weather app
              someone checks before leaving the house, a Telegram bot that quietly
              automates a boring job. If it runs at a public URL and a real person can
              use it, I&apos;m interested.
            </p>
            <p>
              I&apos;m not the kind of developer who collects finished tutorials. Most of
              what I know, I learned by breaking things and then having to fix them.
              That&apos;s still how I work:{" "}
              <span className="text-white">
                build it badly, understand why it&apos;s bad, rebuild it properly.
              </span>
            </p>
            <blockquote className="border-l-2 border-accent pl-4 font-mono text-sm text-slate-500 italic">
              &quot;{site.quote}&quot;
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4 content-start">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="card-hover bg-base-900 border border-white/8 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-gradient font-mono">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
