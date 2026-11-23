import type { Metadata } from "next";
import { person } from "@/data/portfolio";

const baseUrl = "https://sairaghavendra.dev";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${person.name} — Full Stack Developer`,
    template: `%s | ${person.name}`,
  },
  description: person.summary,
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Flutter",
    "Node.js",
    "MongoDB",
    "Firebase",
    "AI Applications",
    "K. Sai Raghavendra Gupta",
    "Portfolio",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: `${person.name} — Portfolio`,
    title: `${person.name} — Full Stack Developer`,
    description: person.summary,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${person.name} — Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Full Stack Developer`,
    description: person.summary,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
