import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/portfolio";
import { person } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.overview,
    openGraph: {
      title: `${project.title} | ${person.name}`,
      description: project.overview,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.overview,
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: person.name,
      url: "https://sairaghavendra.dev",
    },
    url: project.liveUrl,
    codeRepository: project.githubUrl,
    datePublished: project.year,
    softwareRequirements: project.technologies.join(", "),
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <div className="px-6 py-6 border-b border-[#D0D0D0] bg-[#EEEEEE]">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/projects"
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#777777] hover:text-[#171717] transition-colors duration-200"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            All Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 px-6 bg-[#EEEEEE] border-b border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                {project.year} — {project.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#171717] mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-[#777777] leading-relaxed max-w-2xl">{project.overview}</p>
            </div>

            {/* Quick facts */}
            <div className="lg:col-span-4">
              <div className="border border-[#D0D0D0] p-8 space-y-6">
                {project.liveUrl && (
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-2">
                      Live
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#171717] hover:text-[#444444] transition-colors duration-200 break-all"
                    >
                      <ExternalLink size={12} className="flex-shrink-0" aria-hidden="true" />
                      {project.liveUrl.replace("https://", "")}
                    </a>
                  </div>
                )}
                {project.githubUrl && (
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-2">
                      Repository
                    </p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#171717] hover:text-[#444444] transition-colors duration-200"
                    >
                      <GithubIcon size={12} className="flex-shrink-0" />
                      GitHub
                    </a>
                  </div>
                )}
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-2">
                    Year
                  </p>
                  <p className="text-sm text-[#171717]">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-6 bg-[#E5E5E5] border-b border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
            Technologies Used
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wider uppercase border border-[#D0D0D0] bg-[#EEEEEE] px-4 py-2 text-[#444444]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case study content */}
      <section className="px-6 bg-[#EEEEEE]">
        <div className="max-w-[1280px] mx-auto">

          {/* Problem */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                01 — Problem
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-4">Problem Statement</h2>
              <p className="text-[#444444] leading-relaxed max-w-2xl">{project.problem}</p>
            </div>
          </div>

          {/* Objectives */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                02 — Objectives
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-6">Objectives</h2>
              <ul className="space-y-4">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-[11px] text-[#777777] mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#444444] leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                03 — Solution
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-4">Solution</h2>
              <p className="text-[#444444] leading-relaxed max-w-2xl">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                04 — Features
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="border border-[#D0D0D0] p-5">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm text-[#171717]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                05 — Challenges
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-4">Development Challenges</h2>
              <p className="text-[#444444] leading-relaxed max-w-2xl">{project.challenges}</p>
            </div>
          </div>

          {/* Results */}
          <div className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                06 — Results
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-semibold text-[#171717] mb-4">Results</h2>
              <p className="text-[#444444] leading-relaxed max-w-2xl">{project.results}</p>

              {/* Live link */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] tracking-widest uppercase text-[#171717] border border-[#171717] px-6 py-3 rounded-full hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
                >
                  View Live
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project navigation */}
      <section className="py-16 px-6 bg-[#E5E5E5] border-t border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group border border-[#D0D0D0] p-8 hover:border-[#171717] transition-colors duration-200"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-3 flex items-center gap-2">
                  <ArrowLeft size={10} aria-hidden="true" />
                  Previous
                </p>
                <p className="text-base font-medium text-[#171717] group-hover:underline underline-offset-4">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group border border-[#D0D0D0] p-8 hover:border-[#171717] transition-colors duration-200 text-right"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777] mb-3 flex items-center justify-end gap-2">
                  Next
                  <ArrowRight size={10} aria-hidden="true" />
                </p>
                <p className="text-base font-medium text-[#171717] group-hover:underline underline-offset-4">
                  {nextProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
