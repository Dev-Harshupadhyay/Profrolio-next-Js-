import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="skills"
          title="My Stack"
          sub="Tools I use to take an idea from a blank editor to a live URL."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(site.skills).map(([group, items]) => (
            <div
              key={group}
              className="card-hover bg-base-900 border border-white/8 rounded-2xl p-6"
            >
              <h3 className="font-mono text-sm text-accent mb-4">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-slate-300 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
