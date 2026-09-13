import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <TerminalWindow title="ls ./projects">
        <PromptLine command={`ls ./projects --count=${projects.length}`} />
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
