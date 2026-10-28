import { about, profile } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Chip from "./ui/Chip";

export default function About() {
  return (
    <Section id="about" ariaLabel="About Gorle Balakrishna">
      <div className="neo-box bg-white p-6 sm:p-8 md:p-12 border-2 border-ink rounded-neo shadow-neo">
        <SectionHeader
          badge="Background"
          badgeAccent="teal"
          title="About Me"
          className="mb-6 md:mb-8"
        />

        {/* Verbatim About Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-ink/90 font-normal leading-relaxed mb-8">
          {about}
        </p>

        {/* Location & Spoken Languages */}
        <div className="pt-6 border-t-2 border-ink flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Location Badge */}
          <div className="space-y-2">
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-ink/70">
              Location
            </span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-teal shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-heading font-bold text-ink text-base sm:text-lg">
                {profile.location}
              </span>
            </div>
          </div>

          {/* Languages Chips */}
          <div className="space-y-2">
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-ink/70">
              Languages
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {profile.languages.map((language) => (
                <Chip key={language} accent="sunny" size="md">
                  {language}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
