import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { siteMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { person } from "@/data/portfolio";

export const metadata: Metadata = {
  ...siteMetadata,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sairaghavendra.dev/#person",
      name: person.name,
      jobTitle: person.title,
      description: person.summary,
      email: person.email,
      telephone: person.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Andhra Pradesh",
      },
      sameAs: [person.github, person.linkedin],
      url: "https://sairaghavendra.dev",
    },
    {
      "@type": "WebSite",
      "@id": "https://sairaghavendra.dev/#website",
      name: `${person.name} — Portfolio`,
      url: "https://sairaghavendra.dev",
      description: person.summary,
      author: { "@id": "https://sairaghavendra.dev/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sairaghavendra.dev/#profilepage",
      name: `${person.name} — Full Stack Developer Portfolio`,
      url: "https://sairaghavendra.dev",
      about: { "@id": "https://sairaghavendra.dev/#person" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <hr className="section-divider" />
      <FeaturedProjects />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Education />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Contact />
    </>
  );
}
