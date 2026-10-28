export default function SectionHeader({
  badge,
  badgeAccent = "sunny",
  title,
  subtitle,
  className = "mb-12 md:mb-16",
}) {
  const badgeColors = {
    coral: "bg-coral text-ink",
    sunny: "bg-sunny text-ink",
    teal: "bg-teal text-ink",
    cobalt: "bg-cobalt text-white",
    cream: "bg-cream text-ink",
  };

  const currentBadgeColor = badgeColors[badgeAccent] || badgeColors.sunny;

  return (
    <div className={`space-y-3 ${className}`}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider border-2 border-ink rounded-full shadow-neo-sm ${currentBadgeColor}`}
        >
          {badge}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-ink/80 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
