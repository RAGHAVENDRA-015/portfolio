import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { person } from "@/data/portfolio";

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#E5E5E5]" id="about">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="w-64 h-64 sm:w-72 sm:h-72 max-w-full mb-4">
              <Image
                src="/SAI-portrait.jpg"
                alt="FIG. 01 — Sai Raghavendra Gupta, Developer"
                width={1020}
                height={1024}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
              {person.location}
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              FIG. 06 — About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-8">
              The Developer
            </h2>

            <div className="space-y-6 text-[#444444] leading-relaxed mb-12">
              <p>
                I&apos;m a Computer Science student at Narasaraopeta Engineering College, currently in my
                second year (2024–2028), with a CGPA of 8.5. My work sits at the intersection of
                full-stack web development and AI-powered applications.
              </p>
              <p>
                I build end-to-end products — from responsive frontends in React.js and Flutter to
                robust backends with Node.js, Express.js, and MongoDB. I have a particular interest
                in integrating AI capabilities into everyday applications, as demonstrated in projects
                like Omni AI and the AI-Powered Grievance Portal.
              </p>
              <p>
                Every project I take on is an opportunity to solve a real problem: making civic
                grievances easier to file, unifying AI models in a single interface, or helping
                people understand their health data. I care about building things that work well
                and are genuinely useful.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 border-l border-t border-[#D0D0D0] mb-12">
              {[
                { value: "5+", label: "Projects Built" },
                { value: "8.5", label: "CGPA" },
                { value: "2024", label: "Started Coding" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-b border-[#D0D0D0] p-6 text-center"
                >
                  <p className="text-2xl font-semibold text-[#171717] mb-1">{stat.value}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#171717] border border-[#171717] px-6 py-3 rounded-full hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
              >
                Full Profile
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
