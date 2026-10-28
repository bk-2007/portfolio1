export default function Chip({
  children,
  accent = "cream",
  className = "",
  size = "md",
}) {
  const accentClasses = {
    coral: "bg-coral text-ink",
    sunny: "bg-sunny text-ink",
    teal: "bg-teal text-ink",
    cobalt: "bg-cobalt text-white",
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const colorStyle = accentClasses[accent] || accentClasses.cream;
  const sizeStyle = sizeClasses[size] || sizeClasses.md;

  return (
    <span
      className={`inline-flex items-center justify-center font-medium border-2 border-ink rounded-lg shadow-neo-sm transition-transform select-none ${colorStyle} ${sizeStyle} ${className}`}
    >
      {children}
    </span>
  );
}
