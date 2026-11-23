import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { person } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${person.name} — ${person.title}. Available for internship positions and project collaborations.`,
  openGraph: {
    title: `Contact | ${person.name}`,
    description: `Reach out to ${person.name} for internship and collaboration opportunities.`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="min-h-screen py-24 px-6 bg-[#EEEEEE]">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              Let&apos;s Connect
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-[#171717] mb-6 leading-tight">
              Contact
            </h1>
            <p className="text-lg text-[#777777] max-w-xl leading-relaxed">
              Open to internship positions, project collaborations, and conversations about
              interesting tech problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact methods */}
            <div className="lg:col-span-5 space-y-0">
              <div className="border-t border-[#D0D0D0] py-10">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                  Email
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-start gap-4 group"
                >
                  <Mail
                    size={20}
                    className="text-[#444444] mt-0.5 group-hover:text-[#171717] transition-colors duration-200 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[#171717] group-hover:underline underline-offset-4 transition-colors duration-200">
                      {person.email}
                    </p>
                    <p className="text-sm text-[#777777] mt-1">Best way to reach me</p>
                  </div>
                </a>
              </div>

              <div className="border-t border-[#D0D0D0] py-10">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                  Phone
                </p>
                <a
                  href={`tel:${person.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <Phone
                    size={20}
                    className="text-[#444444] mt-0.5 group-hover:text-[#171717] transition-colors duration-200 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[#171717] group-hover:underline underline-offset-4 transition-colors duration-200">
                      {person.phone}
                    </p>
                    <p className="text-sm text-[#777777] mt-1">Available during IST hours</p>
                  </div>
                </a>
              </div>

              <div className="border-t border-[#D0D0D0] py-10">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
                  Location
                </p>
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="text-[#444444] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[#171717]">{person.location}</p>
                    <p className="text-sm text-[#777777] mt-1">Open to remote work</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-[#D0D0D0] py-10">
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
                  Profiles
                </p>
                <div className="flex gap-4">
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#444444] hover:text-[#171717] transition-colors duration-200 border border-[#D0D0D0] hover:border-[#171717] px-5 py-3 rounded-full"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#444444] hover:text-[#171717] transition-colors duration-200 border border-[#D0D0D0] hover:border-[#171717] px-5 py-3 rounded-full"
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right column — info panel */}
            <div className="lg:col-span-7">
              <div className="bg-[#E5E5E5] border border-[#D0D0D0] p-10 md:p-14 h-full flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
                    What I&apos;m looking for
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Internship Positions",
                        desc: "Full-stack development, frontend engineering, or mobile development roles where I can contribute meaningfully and learn from experienced developers.",
                      },
                      {
                        title: "Project Collaborations",
                        desc: "Open-source projects or early-stage startups where I can help build something from scratch with a focused team.",
                      },
                      {
                        title: "Technical Conversations",
                        desc: "Always happy to discuss tech, share ideas, or get feedback on something I am building.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="border-b border-[#D0D0D0] pb-6 last:border-0 last:pb-0">
                        <h3 className="text-base font-medium text-[#171717] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#777777] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-[#D0D0D0]">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center justify-center gap-3 bg-[#171717] text-[#EEEEEE] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase w-full hover:bg-[#444444] transition-colors duration-200"
                  >
                    Send an Email
                    <ArrowRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
