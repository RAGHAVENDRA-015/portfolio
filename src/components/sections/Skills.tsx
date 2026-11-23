import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-[#E5E5E5]" id="skills">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
            FIG. 04 — Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#171717]">
            Technical Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#D0D0D0]">
          {skills.map((category) => (
            <div
              key={category.category}
              className="border-r border-b border-[#D0D0D0] p-8"
            >
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-6">
                {category.category}
              </p>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-[#171717]">
                    <span
                      className="w-1 h-1 rounded-full bg-[#444444] flex-shrink-0"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
