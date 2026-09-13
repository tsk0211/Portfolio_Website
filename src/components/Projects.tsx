import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <Reveal>
        <TerminalWindow title="ls ./projects">
          <PromptLine command={`ls ./projects --count=${projects.length}`} />
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delayMs={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
