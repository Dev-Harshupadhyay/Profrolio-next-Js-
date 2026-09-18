import Image from "next/image";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="projects"
          title="Things I've Built"
          sub="Real apps, live at public URLs, used by real people — not tutorial clones."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="card-hover group bg-base-900 border border-white/8 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-44 bg-base-800 overflow-hidden">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} — project screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-base-800 to-base-700">
                    <span className="font-mono text-4xl text-accent/30 font-bold">
                      {p.title.slice(0, 2)}
                    </span>
                  </div>
                )}
                {p.highlight && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-base-950/85 backdrop-blur text-accent-soft text-[11px] font-mono px-2.5 py-1 rounded-full border border-accent/20">
                    <Sparkles size={11} /> {p.highlight}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                  {p.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-soft transition-colors"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
