import Image from "next/image";
import Link from "next/link";
import { person } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 bg-[#EEEEEE]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center text-center">

        {/* Reference Composition: Portrait with corner brackets and FIG caption */}
        <div className="relative flex flex-col items-center my-6 md:my-10">
          <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] max-w-full">
            <Image
              src="/SAI-portrait.jpg"
              alt="FIG. 01 — Sai Raghavendra Gupta, Developer"
              width={1020}
              height={1024}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#171717] leading-tight mt-6 mb-4 max-w-4xl tracking-tight">
          {person.name}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#777777] mb-4 font-light tracking-wide">
          {person.title}
        </p>

        <p className="text-sm sm:text-base text-[#777777] max-w-xl mb-10 leading-relaxed font-normal">
          {person.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-[#171717] text-[#EEEEEE] px-8 py-3.5 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#444444] transition-colors duration-200"
          >
            Explore My Work
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-[#171717] text-[#171717] px-8 py-3.5 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#D0D0D0]" aria-hidden="true" />
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#777777]">Scroll</p>
        </div>
      </div>
    </section>
  );
}
