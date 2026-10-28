import { experience } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

export default function Experience() {
  const accentBorders = {
    sunny: "border-l-sunny",
    cobalt: "border-l-cobalt",
    coral: "border-l-coral",
    teal: "border-l-teal",
  };

  const nodeAccents = {
    sunny: "bg-sunny",
    cobalt: "bg-cobalt",
    coral: "bg-coral",
    teal: "bg-teal",
  };

  return (
    <Section id="experience" ariaLabel="Professional Experience">
      <SectionHeader
        badge="Career Track"
        badgeAccent="sunny"
        title="Experience"
        subtitle="Internship and leadership roles focused on practical data science workflows and campus outreach."
      />

      <div className="relative pl-6 sm:pl-8 border-l-3 border-ink space-y-10 ml-2 sm:ml-4">
        {experience.map((item, index) => {
          const nodeColor = nodeAccents[item.accent] || "bg-sunny";

          return (
            <div key={`${item.role}-${item.org}`} className="relative group">
              {/* Timeline Node Marker */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-6 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-ink ${nodeColor} shadow-neo-sm z-10 flex items-center justify-center`}
              >
                <div className="w-2 h-2 rounded-full bg-ink" />
              </div>

              {/* Experience Card */}
              <div className="neo-box bg-white p-6 sm:p-8 border-2 border-ink rounded-neo shadow-neo transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink">
                      {item.role}
                    </h3>
                    <div className="inline-flex items-center gap-2 mt-1">
                      <span className="font-heading font-bold text-base text-ink/85">
                        {item.org}
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider bg-cream border-2 border-ink rounded-full shadow-neo-sm">
                    {item.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mt-4 text-ink/85 text-sm sm:text-base leading-relaxed">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-sm bg-ink shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
