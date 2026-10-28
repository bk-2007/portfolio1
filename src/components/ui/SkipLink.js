export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-5 py-3 bg-sunny text-ink font-heading font-bold text-base border-2 border-ink rounded-neo shadow-neo transition-transform"
    >
      Skip to main content
    </a>
  );
}
