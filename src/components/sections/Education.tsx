import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="py-24 px-6 bg-[#EEEEEE]" id="education">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Education */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              FIG. 05 — Background
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-12">
              Education
            </h2>

            <div className="space-y-0">
              {education.map((edu, idx) => (
                <div key={idx} className="border-t border-[#D0D0D0] py-10 grid grid-cols-12 gap-6">
                  <div className="col-span-1">
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="col-span-11">
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-2">
                      {edu.period}
                    </p>
                    <h3 className="text-xl font-semibold text-[#171717] mb-1">{edu.degree}</h3>
                    <p className="text-[#444444] mb-3">{edu.institution}</p>
                    {edu.cgpa && (
                      <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777]">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                    {edu.details && (
                      <p className="text-sm text-[#777777] mt-3 leading-relaxed">{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-4">
              &nbsp;
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-12">
              Certifications
            </h2>

            <div className="space-y-0">
              {certifications.map((cert, idx) => (
                <div key={idx} className="border-t border-[#D0D0D0] py-8">
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#777777] mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-base font-medium text-[#171717]">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
