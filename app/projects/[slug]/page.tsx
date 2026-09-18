import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Award,
  Terminal,
  Activity,
  Music,
  Play,
  Bot,
  Calculator,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary,
      url: `${profile.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

const fallbackIcons: Record<string, React.ReactNode> = {
  "timepass-bot": <Bot className="w-12 h-12 text-emerald-400" />,
  tarazu: <Calculator className="w-12 h-12 text-purple-400" />,
  nostalgic: <Code2 className="w-12 h-12 text-indigo-400" />,
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-apple-bg-light dark:bg-apple-bg-dark text-neutral-900 dark:text-neutral-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-500/20">
              <Sparkles className="w-3 h-3" />
              <span>{project.highlight}</span>
            </span>
            <span className="text-xs font-mono text-neutral-500">
              {project.year} · {project.role}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            {project.title}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-sky-600 dark:text-sky-400 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-5 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal max-w-3xl">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="primary" size="md" arrow>
                Launch Live App
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="md"
                icon={<Github className="w-4 h-4" />}
              >
                View Repository
              </Button>
            )}
          </div>
        </div>

        {/* Hero Visual Container */}
        <div className="mb-14 sm:mb-20 rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-white/10 shadow-2xl">
          {project.image ? (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-400">{project.year}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {project.techStack.join(" · ")}
                </span>
              </div>

              <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
                  {fallbackIcons[project.id] || <Music className="w-12 h-12 text-amber-400" />}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center justify-center text-xs text-neutral-500 font-mono">
                Production Case Study · Dev-Harshupadhyay
              </div>
            </div>
          )}
        </div>

        {/* Project Telemetry / Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white block">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 block">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-12 sm:space-y-16">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                The Problem
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                The Solution
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
              Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-base">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal pl-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Process */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-sky-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                System Architecture
              </h3>
            </div>
            <ul className="space-y-3 mb-6">
              {project.architecture.map((arch, aIdx) => (
                <li
                  key={aIdx}
                  className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-neutral-200/60 dark:border-white/10">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Tech Stack Components
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
              Technical Challenges &amp; Overcoming Hurdles
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              {project.challenges}
            </p>
          </div>
        </div>

        {/* Next Project Footer Card */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-neutral-200/80 dark:border-white/10">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Next Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {nextProject.subtitle}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
