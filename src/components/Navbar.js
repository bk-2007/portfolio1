"use client";

import { useState, useEffect } from "react";
import { profile, navLinks } from "@data/content";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = navLinks.map((link) => link.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-cream border-b-2 border-ink w-full">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          className="group inline-flex items-center gap-2.5 font-heading font-extrabold text-lg sm:text-xl text-ink tracking-tight hover:opacity-90"
        >
          <span className="w-8 h-8 rounded-lg bg-sunny border-2 border-ink shadow-neo-sm flex items-center justify-center text-sm font-black group-hover:-translate-y-0.5 group-hover:shadow-neo transition-all">
            GB
          </span>
          <span>{profile.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1.5 lg:gap-2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-1.5 text-sm font-heading font-bold rounded-lg border-2 transition-all ${
                  isActive
                    ? "bg-sunny text-ink border-ink shadow-neo-sm -translate-y-0.5"
                    : "border-transparent text-ink/80 hover:text-ink hover:border-ink/30 hover:bg-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden w-11 h-11 border-2 border-ink rounded-neo bg-white shadow-neo-sm flex flex-col items-center justify-center gap-1.5 cursor-pointer neo-interactive"
        >
          <span
            className={`w-6 h-0.5 bg-ink transition-transform duration-200 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-ink transition-opacity duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-ink transition-transform duration-200 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-cream/95 border-b-2 border-ink z-50 overflow-y-auto px-6 py-8 flex flex-col gap-3 animate-in fade-in"
        >
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`w-full px-5 py-3.5 text-left font-heading font-bold text-lg rounded-neo border-2 transition-all ${
                    isActive
                      ? "bg-sunny text-ink border-ink shadow-neo translate-x-1"
                      : "bg-white text-ink border-ink shadow-neo-sm hover:translate-x-1"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t-2 border-ink flex flex-col gap-3">
            <span className="text-xs uppercase font-heading font-extrabold tracking-wider text-ink/70">
              Get in touch
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-bold text-ink underline"
            >
              {profile.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
