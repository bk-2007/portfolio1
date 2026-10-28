import { profile } from "@data/content";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function Contact() {
  const isLinkedInPlaceholder =
    !profile.linkedin ||
    profile.linkedin.trim() === "" ||
    profile.linkedin.includes("[");

  return (
    <Section id="contact" ariaLabel="Contact Information">
      {/* Large Solid-Color Neo-Brutalist Block */}
      <div className="bg-cobalt border-3 border-ink rounded-neo p-8 sm:p-12 md:p-16 shadow-neo text-white relative overflow-hidden">
        <div className="max-w-3xl space-y-4 mb-10">
          <span className="inline-block px-3.5 py-1 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider bg-sunny text-ink border-2 border-ink rounded-full shadow-neo-sm">
            Contact & Availability
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Let&apos;s work together
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Currently looking for data science internships and entry-level software engineering roles. Reach out via email, phone, or find me across the web.
          </p>
        </div>

        {/* Four Tactile Link Buttons (No Form) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email Button */}
          <Button
            href={`mailto:${profile.email}`}
            variant="primary"
            size="md"
            className="w-full justify-between"
            ariaLabel={`Send email to ${profile.email}`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email</span>
            </div>
            <span aria-hidden="true">↗</span>
          </Button>

          {/* Phone Button */}
          <Button
            href={`tel:${profile.phone}`}
            variant="secondary"
            size="md"
            className="w-full justify-between"
            ariaLabel={`Call ${profile.phone}`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Phone</span>
            </div>
            <span aria-hidden="true">↗</span>
          </Button>

          {/* GitHub Button */}
          <Button
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
            className="w-full justify-between"
            ariaLabel="Open GitHub profile in a new tab"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </div>
            <span aria-hidden="true">↗</span>
          </Button>

          {/* LinkedIn Button */}
          {!isLinkedInPlaceholder ? (
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="teal"
              size="md"
              className="w-full justify-between"
              ariaLabel="Open LinkedIn profile in a new tab"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </div>
              <span aria-hidden="true">↗</span>
            </Button>
          ) : (
            <div
              className="inline-flex items-center justify-between font-heading font-bold px-6 py-3.5 text-base border-2 border-ink rounded-neo bg-cream text-ink/60 shadow-neo-sm opacity-90 cursor-not-allowed"
              title="LinkedIn profile link pending update in data/content.js"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </div>
              <span className="text-xs font-mono font-bold uppercase">Pending</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
