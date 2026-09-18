import { Github, GitCommit, Flame, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

const numbers = [
  { icon: GitCommit, value: "1,076", label: "Contributions in 2026" },
  { icon: CalendarDays, value: "64", label: "Active days" },
  { icon: Flame, value: "8 days", label: "Longest streak" },
  { icon: Github, value: "141", label: "Commits — best day" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 bg-base-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="github"
          title="Where The Work Happens"
          sub="Real counts from my public contribution calendar — one commit at a time."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {numbers.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="card-hover bg-base-900 border border-white/8 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">{value}</p>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-base-900 border border-white/8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-mono text-sm text-slate-500 mb-1">
              harsh@github <span className="text-accent">~</span> $ ./connect.sh
            </p>
            <p className="text-white font-medium">
              40+ public repos — movie platforms, music players, weather apps, bots & more.
            </p>
          </div>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-base-950 font-semibold px-6 py-3 rounded-full hover:bg-accent-soft transition-colors whitespace-nowrap"
          >
            <Github size={18} /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
