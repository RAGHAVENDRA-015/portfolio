import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { person, education, certifications, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${person.name} — ${person.title} from ${person.location}. ${person.summary}`,
  openGraph: {
    title: `About | ${person.name}`,
    description: `Learn more about ${person.name} — ${person.title}`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 md:py-24 px-6 bg-[#EEEEEE] border-b border-[#D0D0D0]">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          {/* Centered Circular Portrait Matching Exact Provided Image */}
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-full">
              <Image
                src="/SAI-portrait.jpg"
                alt="FIG. 01 — Sai Raghavendra Gupta, Developer"
                width={1020}
                height={1024}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mt-3">
              {person.location}
            </p>
          </div>

          {/* About Header & Bio Content */}
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#171717] mb-4 leading-tight">
              {person.name}
            </h1>
            <p className="text-lg md:text-xl text-[#777777] mb-8 font-light">{person.title}</p>

            <div className="space-y-6 text-[#444444] leading-relaxed text-left sm:text-justify text-base md:text-lg mb-10">
              <p>
                I&apos;m a Computer Science student at Narasaraopeta Engineering College, currently in my
                second year (2024–2028), maintaining a CGPA of 8.5. My focus is building
                full-stack applications that solve real problems — not just completing coursework.
              </p>
              <p>
                My technical foundation spans React.js and Flutter for cross-platform frontends,
                Node.js and Express.js for backends, and MongoDB as my primary database. I deploy
                primarily on Firebase and Vercel, keeping infrastructure simple so the product
                gets the most attention.
              </p>
              <p>
                I&apos;m particularly drawn to AI-integrated applications. Projects like Omni AI and
                the AI-Powered Grievance Portal show how AI can make existing workflows
                meaningfully better — not just technically impressive, but genuinely useful.
              </p>
              <p>
                Outside of code, I focus on understanding why products work, not just how they
                are built. That curiosity about product thinking informs every project I take on.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#171717] text-[#171717] px-6 py-3 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
              >
                GitHub
                <GithubIcon size={12} />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#171717] text-[#171717] px-6 py-3 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
              >
                LinkedIn
                <LinkedinIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-[#E5E5E5] border-b border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold text-[#171717] mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#D0D0D0]">
            {skills.map((category) => (
              <div key={category.category} className="border-r border-b border-[#D0D0D0] p-8">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
                  {category.category}
                </p>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-[#171717]">
                      <span className="w-1 h-1 rounded-full bg-[#444444] flex-shrink-0" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 px-6 bg-[#EEEEEE] border-b border-[#D0D0D0]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                Academic Background
              </p>
              <h2 className="text-3xl font-semibold text-[#171717] mb-12">Education</h2>
              {education.map((edu, idx) => (
                <div key={idx} className="border-t border-[#D0D0D0] py-8">
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-2">
                    {edu.period}
                  </p>
                  <h3 className="text-xl font-semibold text-[#171717] mb-1">{edu.degree}</h3>
                  <p className="text-[#444444] mb-2">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                  {edu.details && (
                    <p className="text-sm text-[#777777] mt-3 leading-relaxed">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                Professional Development
              </p>
              <h2 className="text-3xl font-semibold text-[#171717] mb-12">Certifications</h2>
              {certifications.map((cert, idx) => (
                <div key={idx} className="border-t border-[#D0D0D0] py-8">
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-base font-medium text-[#171717]">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
            Let&apos;s work together
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-8">
            Open to Opportunities
          </h2>
          <p className="text-[#777777] max-w-lg mx-auto mb-10 leading-relaxed">
            Looking for internship positions and collaborative projects. If you have something
            interesting in mind, I&apos;d love to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#171717] text-[#EEEEEE] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#444444] transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight size={12} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${person.email}`}
              className="flex items-center justify-center gap-2 border border-[#171717] text-[#171717] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
            >
              <Mail size={12} aria-hidden="true" />
              {person.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
