import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { featuredProjects } from "@/data/portfolio";

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 bg-[#EEEEEE]" id="projects">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              FIG. 03 — Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#171717]">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#444444] hover:text-[#171717] transition-colors duration-200 self-start md:self-auto"
          >
            All Projects
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>

        {/* Projects */}
        <div className="space-y-0">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className="border-t border-[#D0D0D0] py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
                  {project.year} — {project.tagline}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-4">
                  {project.title}
                </h3>
                <p className="text-[#777777] leading-relaxed mb-6 max-w-prose">
                  {project.overview}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider uppercase border border-[#D0D0D0] px-3 py-1 text-[#444444]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#171717] border-b border-[#171717] hover:border-transparent transition-colors duration-200 pb-0.5"
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

              {/* Features list */}
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                  Key Features
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

        {/* Footer CTA */}
        <div className="border-t border-[#D0D0D0] pt-12 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-[#171717] border border-[#171717] px-8 py-4 rounded-full hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
