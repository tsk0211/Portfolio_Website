import type { Project } from "@/data/resume";

export default function ProjectCard({ project }: { project: Project }) {
  const tagColor = project.tag === "Production" ? "text-term-accent border-term-accent-dim" : "text-term-amber border-term-amber/40";

  return (
    <div className="rounded-md border border-term-border bg-black/20 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-term-fg">{project.name}</p>
        <span className={`shrink-0 rounded border px-2 py-0.5 text-[11px] uppercase tracking-wide ${tagColor}`}>
          {project.tag}
        </span>
      </div>

      <p className="mt-2 text-sm italic text-term-fg-dim">{project.description}</p>

      {project.bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-term-fg">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 shrink-0 text-term-accent">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded border border-term-border px-2 py-0.5 text-[11px] text-term-blue">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
