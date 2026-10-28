"use client";

import { useEffect } from "react";
import SkipLink from "@/components/ui/SkipLink";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // One subtle fade-up on scroll respecting prefers-reduced-motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content" className="w-full overflow-hidden">
        <div className="fade-up">
          <Hero />
        </div>

        <div className="fade-up">
          <About />
        </div>

        <div className="fade-up">
          <Skills />
        </div>

        <div className="fade-up">
          <Experience />
        </div>

        <div className="fade-up">
          <Projects />
        </div>

        <div className="fade-up">
          <Education />
        </div>

        <div className="fade-up">
          <Activities />
        </div>

        <div className="fade-up">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
