import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/portfolio";
import { person } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore the projects built by ${person.name} — full-stack web apps, AI-powered tools, and mobile applications.`,
  openGraph: {
    title: `Projects | ${person.name}`,
    description: `Explore the full portfolio of ${person.name} — React, Flutter, Node.js, and AI-powered projects.`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6 bg-[#EEEEEE] border-b border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
            Work
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#171717] mb-6 leading-tight">
            All Projects
          </h1>
          <p className="text-lg text-[#777777] max-w-xl leading-relaxed">
            A complete collection of projects built with React.js, Flutter, Node.js, and
            AI integrations.
          </p>
        </div>
      </section>

      {/* Project list */}
      <section className="px-6 bg-[#EEEEEE]">
        <div className="max-w-[1280px] mx-auto">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="border-b border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Number + year */}
              <div className="lg:col-span-1">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Main content */}
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
                  {project.year} — {project.tagline}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-4">
                  {project.title}
                </h2>
                <p className="text-[#777777] leading-relaxed mb-6 max-w-prose">{project.overview}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider uppercase border border-[#D0D0D0] px-3 py-1 text-[#444444]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#171717] border-b border-[#171717] pb-0.5 hover:border-transparent transition-colors duration-200"
                  >
                    Case Study
                    <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#777777] hover:text-[#171717] transition-colors duration-200"
                    >
                      Live Demo
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#777777] hover:text-[#171717] transition-colors duration-200"
                    >
                      GitHub
                      <GithubIcon size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                  Highlights
                </p>
                <ul className="space-y-2">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#444444]">
                      <span className="font-mono text-[#D0D0D0] mt-0.5" aria-hidden="true">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#E5E5E5] border-t border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
            More on GitHub
          </p>
          <h2 className="text-3xl font-semibold text-[#171717] mb-6">
            See All Repositories
          </h2>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#171717] text-[#EEEEEE] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#444444] transition-colors duration-200"
          >
            <GithubIcon size={14} />
            View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}
