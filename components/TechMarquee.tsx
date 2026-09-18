const tech = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "MongoDB", "Python", "Tailwind CSS", "Git", "GitHub Actions", "Vercel",
];

export default function TechMarquee() {
  const row = [...tech, ...tech];
  return (
    <div className="border-y border-white/5 bg-base-900/60 py-4 overflow-hidden" aria-hidden>
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="font-mono text-sm text-slate-500 whitespace-nowrap flex items-center gap-10">
            {t} <span className="text-accent/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
