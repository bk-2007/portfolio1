export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  download,
  target,
  rel,
  ariaLabel,
  type = "button",
}) {
  const variantClasses = {
    primary: "bg-sunny text-ink hover:bg-[#ffcf52]",
    secondary: "bg-white text-ink hover:bg-[#fafafa]",
    coral: "bg-coral text-ink hover:bg-[#ff6f74]",
    cobalt: "bg-cobalt text-white hover:bg-[#3d68ff]",
    teal: "bg-teal text-ink hover:bg-[#00baa6]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 font-heading font-bold border-2 border-ink rounded-neo shadow-neo neo-interactive cursor-pointer select-none text-center transition-all";

  const appliedClass = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${
    sizeClasses[size] || sizeClasses.md
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={appliedClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={appliedClass}
    >
      {children}
    </button>
  );
}
