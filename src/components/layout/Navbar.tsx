"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { person } from "@/data/portfolio";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="fixed top-0 left-0 right-0 z-50 bg-[#EEEEEE]/90 backdrop-blur-sm border-b border-[#D0D0D0]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-mono text-[11px] tracking-widest uppercase text-[#171717] hover:text-[#444444] transition-colors duration-200"
          aria-label="K. Sai Raghavendra Gupta — Home"
        >
          {person.fullName}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#171717]"
                  : "text-[#777777] hover:text-[#171717]"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#171717] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#EEEEEE] border-b border-[#D0D0D0]">
          <nav aria-label="Mobile navigation" className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href ? "text-[#171717]" : "text-[#777777]"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
