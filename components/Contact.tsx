import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="contact"
          title="Let's Build Something"
          sub="Always up for talking about web development, automation, or a project that's slightly too ambitious."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a
              href={site.socials.email}
              className="card-hover flex items-center gap-4 bg-base-900 border border-white/8 rounded-2xl p-5"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
                <p className="text-white font-medium">{site.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-base-900 border border-white/8 rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                <p className="text-white font-medium">{site.location}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex-1 flex items-center justify-center gap-2 bg-base-900 border border-white/8 rounded-2xl p-4 text-slate-300 hover:text-white"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex-1 flex items-center justify-center gap-2 bg-base-900 border border-white/8 rounded-2xl p-4 text-slate-300 hover:text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 via-base-900 to-indigo-500/10 border border-accent/20 rounded-2xl p-8 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-white">
              Have an idea? Let&apos;s talk.
            </h3>
            <p className="mt-3 text-slate-400 leading-relaxed">
              Open an issue, drop a star, or just say hi. I read everything and
              usually reply fast.
            </p>
            <a
              href={site.socials.email}
              className="mt-6 inline-flex items-center gap-2 bg-accent text-base-950 font-semibold px-6 py-3 rounded-full hover:bg-accent-soft transition-colors glow"
            >
              <Send size={17} /> Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
