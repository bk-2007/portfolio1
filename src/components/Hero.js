"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@data/content";
import Button from "./ui/Button";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="pt-12 pb-20 md:pt-16 md:pb-28 w-full"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content: 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Title Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-ink bg-white shadow-neo-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-teal border border-ink" />
              <span className="text-xs sm:text-sm font-heading font-bold text-ink uppercase tracking-wide">
                {profile.title}
              </span>
            </div>

            {/* Main Name Heading (Single H1) */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.05]">
              {profile.name}
            </h1>

            {/* Verbatim Plain One-Line Intro */}
            <p className="text-lg sm:text-xl lg:text-2xl text-ink/85 font-normal leading-relaxed max-w-2xl">
              {profile.intro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary" size="md">
                <span>View Projects</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Button>

              <Button
                href={profile.resumePath}
                variant="secondary"
                size="md"
                download="Gorle_Balakrishna_Resume.pdf"
                ariaLabel="Download Gorle Balakrishna resume PDF"
              >
                <span>Download Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Photo Column: 5 Columns with Tilted, Offset Colored Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              {/* Back Offset Card (Cobalt Accent, tilted 3 degrees) */}
              <div
                className="absolute inset-0 bg-cobalt border-2 border-ink rounded-neo shadow-neo rotate-3 transform"
                aria-hidden="true"
              />

              {/* Front Frame (-rotate-2 for tactile juxtaposition) */}
              <div className="relative w-full h-full bg-white border-2 border-ink rounded-neo overflow-hidden -rotate-2 transform transition-transform hover:rotate-0 duration-200">
                {!imageError ? (
                  <Image
                    src={profile.photoPath}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    priority
                    className="object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Graceful neo-brutalist fallback if photo is missing */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-sunny text-ink p-6 select-none">
                    <div className="w-24 h-24 rounded-full border-2 border-ink bg-white flex items-center justify-center shadow-neo-sm mb-3">
                      <span className="font-heading font-extrabold text-3xl">GB</span>
                    </div>
                    <span className="font-heading font-bold text-lg text-center">
                      {profile.name}
                    </span>
                    <span className="text-xs font-semibold text-ink/75 uppercase tracking-wide mt-1">
                      {profile.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
