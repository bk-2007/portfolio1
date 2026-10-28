import { education } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

export default function Education() {
  const accentBadges = {
    cobalt: "bg-cobalt text-white",
    coral: "bg-coral text-ink",
    sunny: "bg-sunny text-ink",
    teal: "bg-teal text-ink",
  };

  return (
    <Section id="education" ariaLabel="Educational Background">
      <SectionHeader
        badge="Academic Foundation"
        badgeAccent="cobalt"
        title="Education"
        subtitle="Formal academic training in computer science, mathematics, and data science principles."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item) => {
          const badgeClass =
            accentBadges[item.accent] || "bg-cream text-ink";

          return (
            <div
              key={item.institution}
              className="neo-box bg-white p-6 sm:p-7 border-2 border-ink rounded-neo shadow-neo flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-heading font-extrabold uppercase tracking-wider rounded-lg border-2 border-ink shadow-neo-sm ${badgeClass}`}
                  >
                    {item.period}
                  </span>
                  {item.detail && (
                    <span className="text-xs font-mono font-bold text-ink bg-cream px-2.5 py-0.5 rounded border border-ink">
                      {item.detail}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink leading-snug mb-3">
                  {item.degree}
                </h3>
              </div>

              <div className="pt-4 border-t-2 border-ink/20 mt-4">
                <p className="text-sm font-medium text-ink/80 leading-relaxed">
                  {item.institution}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
