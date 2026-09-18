import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-900/60 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-sm text-slate-500">
          harsh<span className="text-accent">.dev</span> — © {new Date().getFullYear()}{" "}
          {site.name}
        </p>

        <p className="text-xs text-slate-600 flex items-center gap-1.5">
          Built with <Heart size={12} className="text-accent" /> using Next.js &
          Tailwind — one commit at a time.
        </p>

        <div className="flex items-center gap-5">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors">
            <Github size={19} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin size={19} />
          </a>
          <a href={site.socials.email} aria-label="Email" className="text-slate-500 hover:text-white transition-colors">
            <Mail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
