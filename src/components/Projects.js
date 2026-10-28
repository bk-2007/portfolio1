import { projects } from "@data/content";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" ariaLabel="Featured Projects">
      <SectionHeader
        badge="Featured Work"
        badgeAccent="coral"
        title="Projects"
        subtitle="Full-stack web applications and analytics platforms built for performance and live deployment."
      />

      {/* 2-column grid on desktop, 1-column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
