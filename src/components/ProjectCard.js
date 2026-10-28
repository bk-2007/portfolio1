import Chip from "./ui/Chip";

export default function ProjectCard({ project, index }) {
  // Check if URL is missing or still a placeholder (e.g. "[NOVA_CART_URL]")
  const isPlaceholderUrl =
    !project.url ||
    project.url.trim() === "" ||
    project.url.startsWith("[") ||
    project.url.includes("PLACEHOLDER") ||
    project.url === "#";

  const numberTag = String(index + 1).padStart(2, "0");

  const accentStyles = {
    coral: {
      bar: "bg-coral",
      numberBadge: "bg-coral text-ink",
    },
    cobalt: {
      bar: "bg-cobalt",
      numberBadge: "bg-cobalt text-white",
    },
    sunny: {
      bar: "bg-sunny",
      numberBadge: "bg-sunny text-ink",
    },
    teal: {
      bar: "bg-teal",
      numberBadge: "bg-teal text-ink",
    },
  };

  const accent = accentStyles[project.accent] || accentStyles.coral;

  // Inner card content shared between <a> and <div>
  const cardContent = (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Top bar with Number tag and Accent Strip */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink">
          <span
            className={`px-3 py-1 font-mono font-black text-sm border-2 border-ink rounded-lg shadow-neo-sm ${accent.numberBadge}`}
          >
            #{numberTag}
          </span>
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-ink/60">
            {project.subtitle}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.stack.map((tech) => (
            <Chip key={tech} accent="cream" size="sm">
              {tech}
            </Chip>
          ))}
        </div>

        {/* Description (2-3 lines) */}
        <p className="text-ink/85 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>
      </div>

      {/* Pinned Bottom CTA */}
      <div className="pt-4 border-t-2 border-ink mt-auto flex items-center justify-between">
        {!isPlaceholderUrl ? (
          <span className="w-full inline-flex items-center justify-between font-heading font-bold text-sm sm:text-base px-4 py-2.5 rounded-lg border-2 border-ink bg-cream text-ink shadow-neo-sm group-hover:bg-ink group-hover:text-cream group-focus:bg-ink group-focus:text-cream transition-colors duration-150">
            <span>Visit Live</span>
            <span className="text-lg leading-none" aria-hidden="true">
              ↗
            </span>
          </span>
        ) : (
          <span className="w-full inline-flex items-center justify-between font-heading font-bold text-sm px-4 py-2.5 rounded-lg border-2 border-ink/40 bg-ink/5 text-ink/60 cursor-not-allowed">
            <span>Coming soon</span>
            <span className="text-xs uppercase font-mono tracking-wider">
              In progress
            </span>
          </span>
        )}
      </div>
    </div>
  );

  // If URL is placeholder/empty, render as non-link <div>
  if (isPlaceholderUrl) {
    return (
      <div
        className="neo-box bg-white p-6 sm:p-7 border-2 border-ink rounded-neo shadow-neo flex flex-col h-full"
        aria-label={`${project.title} (Coming soon)`}
      >
        {cardContent}
      </div>
    );
  }

  // Entire card is one <a> element
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live site in a new tab`}
      className="group neo-box bg-white p-6 sm:p-7 border-2 border-ink rounded-neo shadow-neo neo-interactive flex flex-col h-full cursor-pointer focus-visible:ring-4 focus-visible:ring-ink"
    >
      {cardContent}
    </a>
  );
}
