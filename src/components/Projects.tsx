import TerminalSection from "./TerminalSection";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <TerminalSection title="ls ./projects" command={`ls ./projects --count=${projects.length}`}>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 180}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </TerminalSection>
    </section>
  );
}
