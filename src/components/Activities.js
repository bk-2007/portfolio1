import { certifications, activities } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

export default function Activities() {
  return (
    <Section id="activities" ariaLabel="Certifications and Extracurricular Activities">
      <SectionHeader
        badge="Credentials & Leadership"
        badgeAccent="teal"
        title="Certifications & Activities"
        subtitle="Professional credentials and campus leadership involvements."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Certifications Card */}
        <div className="neo-box bg-white p-6 sm:p-8 border-2 border-ink rounded-neo shadow-neo">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-ink">
            <span className="w-9 h-9 rounded-lg bg-teal border-2 border-ink shadow-neo-sm flex items-center justify-center text-ink">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink">
              Certifications
            </h3>
          </div>

          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="p-4 rounded-xl border-2 border-ink bg-cream/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-neo-sm"
              >
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-ink">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink/75 font-medium mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-heading font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-ink rounded">
                  Verified
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Co-curricular & Activities Card */}
        <div className="neo-box bg-white p-6 sm:p-8 border-2 border-ink rounded-neo shadow-neo">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-ink">
            <span className="w-9 h-9 rounded-lg bg-sunny border-2 border-ink shadow-neo-sm flex items-center justify-center text-ink">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink">
              Activities & Campus Involvements
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border-2 border-ink bg-cream/60 shadow-neo-sm">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-heading font-bold text-base sm:text-lg text-ink">
                  College Annual Fest Coordination (SPIRIT)
                </h4>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-white border border-ink rounded">
                  ANITS
                </span>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">
                Coordinated and organized college annual flagship festival events, managing student logistics, stage operations, and inter-departmental participation.
              </p>
            </div>

            <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-neo-sm">
              <h4 className="font-heading font-bold text-base text-ink mb-2">
                All Recorded Activities
              </h4>
              <ul className="space-y-2">
                {activities.map((act, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 mt-1.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
