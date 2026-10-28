import { skills } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Chip from "./ui/Chip";

export default function Skills() {
  const headerPillColors = {
    coral: "bg-coral text-ink",
    cobalt: "bg-cobalt text-white",
    teal: "bg-teal text-ink",
    sunny: "bg-sunny text-ink",
  };

  return (
    <Section id="skills" ariaLabel="Skills and Technical Proficiencies">
      <SectionHeader
        badge="Expertise"
        badgeAccent="coral"
        title="Technical Skills"
        subtitle="Core competencies across data preprocessing, machine learning fundamentals, and modern web application development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, idx) => {
          const pillColor =
            headerPillColors[skillGroup.accent] || "bg-sunny text-ink";

          return (
            <div
              key={skillGroup.group}
              className={`neo-box bg-white p-6 border-2 border-ink rounded-neo shadow-neo flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Group Heading Header */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 text-xs font-heading font-extrabold uppercase tracking-wider rounded-lg border-2 border-ink shadow-neo-sm ${pillColor}`}
                  >
                    {skillGroup.group}
                  </span>
                  <span className="text-xs font-mono font-bold text-ink/60">
                    {skillGroup.items.length} items
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item) => (
                    <Chip
                      key={item}
                      accent="cream"
                      size="sm"
                      className="hover:bg-sunny/40 transition-colors"
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
