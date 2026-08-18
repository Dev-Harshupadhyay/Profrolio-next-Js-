"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  
  const skills = {
    fullstack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "TailwindCSS",
      "REST API Design",
    ],
    learning: [
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Next.js",
    ],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
    ],
  };

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`space-y-8 ${aboutVisible ? 'scroll-animate' : ''}`}>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                About Me
              </p>
              <h2 className="text-5xl font-bold mb-8">My background</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm currently a <span className="font-bold text-black dark:text-white">BCA (Bachelor of Computer Applications) 1st semester</span> student, and a self-taught, passionate full-stack web developer. I started learning to code out of pure curiosity, and instead of waiting to "finish a course" before building something, I jumped straight into real projects and figured things out along the way.
              </p>

              <p>
                Over the past while, I've built and shipped multiple full-stack web apps — from movie discovery platforms to weather intelligence dashboards — using <span className="font-bold text-black dark:text-white">React, Node.js, Express and MongoDB</span>. Each project has taught me something new, whether it's structuring a clean API, handling real-time data, or just getting the little UI details right.
              </p>

              <p>
                I'm at the very start of my formal computer science education, but I already know this is what I want to keep doing. I approach every project with curiosity and a genuine eagerness to learn, and I'm excited for everything the next few years of college — and building — will teach me.
              </p>
            </div>

          </div>

          {/* Right Content - Skills Card */}
          <div className={`glass-card rounded-3xl p-8 shadow-xl ${aboutVisible ? 'scroll-animate scroll-animate-delay-2' : ''}`}>
            <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>

            <div className="space-y-8">
              {/* Software & Full-Stack Development */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Software & Full-Stack Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.fullstack.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium border border-border hover:border-black dark:hover:border-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Currently Learning */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.learning.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium border border-border hover:border-black dark:hover:border-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Tools & Ecosystem */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Developer Tools & Ecosystem
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium border border-border hover:border-black dark:hover:border-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
