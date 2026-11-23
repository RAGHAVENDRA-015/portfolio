import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6 bg-[#EEEEEE]">
      <div className="text-center max-w-lg">
        <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
          Error 404
        </p>
        <h1 className="text-6xl md:text-8xl font-semibold text-[#171717] mb-6 leading-none">
          404
        </h1>
        <p className="text-lg text-[#777777] mb-12 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#171717] text-[#EEEEEE] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#444444] transition-colors duration-200"
          >
            <Home size={12} aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 border border-[#171717] text-[#171717] px-8 py-4 rounded-full font-mono text-[11px] tracking-widest uppercase hover:bg-[#171717] hover:text-[#EEEEEE] transition-colors duration-200"
          >
            View Projects
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
