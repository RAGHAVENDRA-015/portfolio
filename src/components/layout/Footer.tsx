import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { person } from "@/data/portfolio";

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="border-t border-[#D0D0D0] bg-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Identity */}
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
              Designer &amp; Developer
            </p>
            <p className="text-xl font-medium text-[#171717] mb-2">{person.name}</p>
            <p className="text-[#777777] text-sm leading-relaxed">{person.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/projects", label: "Projects" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#444444] hover:text-[#171717] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-3">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#171717] transition-colors duration-200"
                >
                  <Mail size={14} aria-hidden="true" />
                  {person.email}
                </a>
              </li>
              <li>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#171717] transition-colors duration-200"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#171717] transition-colors duration-200"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D0D0D0] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-wider text-[#777777] uppercase">
            © {currentYear} {person.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-[#777777] uppercase hover:text-[#171717] transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
