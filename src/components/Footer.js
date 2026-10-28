"use client";

import { profile } from "@data/content";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-cream border-t-2 border-ink py-10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright notice verbatim */}
        <p className="text-sm font-heading font-bold text-ink/80">
          © 2026 {profile.name}
        </p>

        {/* Back-to-top link */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider bg-white border-2 border-ink rounded-lg shadow-neo-sm neo-interactive cursor-pointer select-none"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <svg
            className="w-4 h-4 text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
