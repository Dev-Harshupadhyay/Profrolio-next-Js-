"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon: IconType;
  color: string;
}

const TechStackScroller = () => {
  const { ref: scrollerRef, isVisible: scrollerVisible } = useScrollAnimation();

  const techStack: TechItem[] = [
    { name: "React.js", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38BDF8" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
  ];

  // Duplicate the list so the marquee loops seamlessly
  const loopedStack = [...techStack, ...techStack];

  return (
    <section ref={scrollerRef} className={`py-16 bg-foreground dark:bg-background ${scrollerVisible ? 'scroll-animate' : ''}`}>
      <div className="max-w-full overflow-hidden relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-foreground dark:from-background via-foreground/90 dark:via-background/90 to-transparent z-10" style={{ left: '-1px' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-foreground dark:from-background via-foreground/90 dark:via-background/90 to-transparent z-10" style={{ right: '-1px' }} />

        <div className="flex space-x-8 animate-scroll overflow-visible">
          {loopedStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 group"
            >
              <tech.Icon
                className="w-7 h-7 mr-3 shrink-0 transition-transform group-hover:scale-110"
                style={{ color: tech.color }}
                aria-hidden="true"
              />
              <span className="text-2xl font-medium text-background dark:text-foreground whitespace-nowrap group-hover:text-background/80 dark:group-hover:text-foreground/80">{tech.name}</span>
              <span className="mx-8 text-background/40 dark:text-foreground/40 transition-colors group-hover:text-background/60 dark:group-hover:text-foreground/60">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackScroller;

// Add styles to your index.css or a similar global stylesheet
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 20s linear infinite;
    width: fit-content;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
