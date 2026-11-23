import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { person } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#EEEEEE]" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              FIG. 07 — Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-8">
              Get in Touch
            </h2>
            <p className="text-[#777777] leading-relaxed mb-12 max-w-sm">
              Open to internship and project opportunities. Whether you have a question,
              an idea, or just want to connect — feel free to reach out.
            </p>

            {/* Contact details */}
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 border border-[#D0D0D0] flex items-center justify-center group-hover:border-[#171717] transition-colors duration-200">
                    <Mail size={16} className="text-[#444444]" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#444444] group-hover:text-[#171717] transition-colors duration-200">
                    {person.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 border border-[#D0D0D0] flex items-center justify-center group-hover:border-[#171717] transition-colors duration-200">
                    <Phone size={16} className="text-[#444444]" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#444444] group-hover:text-[#171717] transition-colors duration-200">
                    {person.phone}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-[#D0D0D0] flex items-center justify-center">
                    <MapPin size={16} className="text-[#444444]" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#444444]">{person.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & profiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-[#D0D0D0]">
              {[
                {
                  icon: GithubIcon,
                  label: "GitHub",
                  description: "Browse my open-source projects and code",
                  href: person.github,
                  external: true,
                },
                {
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                  description: "Connect professionally and view my profile",
                  href: person.linkedin,
                  external: true,
                },
                {
                  icon: Mail,
                  label: "Email",
                  description: "Best way to reach me for opportunities",
                  href: `mailto:${person.email}`,
                  external: false,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  description: "Direct call or messaging for discussions",
                  href: `tel:${person.phone}`,
                  external: false,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="border-r border-b border-[#D0D0D0] p-8 group hover:bg-[#E5E5E5] transition-colors duration-200"
                  >
                    <Icon
                      size={24}
                      className="text-[#444444] mb-4 group-hover:text-[#171717] transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-2">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#444444] leading-relaxed">{item.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
