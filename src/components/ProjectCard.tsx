"use client";

import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import type { Project } from "@/data/resume";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const command = `cd ./${project.slug} && cat README.md`;
  const { output, done } = useTypewriter(command, 28, 0, open);

  const commandText = done ? command : open ? output : command;
  const showCaret = open && !done;
  const showDetail = open && done;

  const tagColor =
    project.tag === "Production"
      ? "text-term-accent border-term-accent-dim"
      : "text-term-amber border-term-amber/40";

  return (
    <div className="rounded-md border border-term-border bg-black/20 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-term-fg">{project.name}</p>
        <span className={`shrink-0 rounded border px-2 py-0.5 text-[11px] uppercase tracking-wide ${tagColor}`}>
          {project.tag}
        </span>
      </div>

      <p className="mt-2 text-sm italic text-term-fg-dim">{project.description}</p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-3 flex w-full items-center gap-1.5 rounded border border-term-border bg-black/30 px-2.5 py-1.5 text-left text-xs transition-colors hover:border-term-accent"
      >
        <span className="text-term-accent">$</span>
        <span className="truncate text-term-fg">{commandText}</span>
        {showCaret && <span className="caret-blink shrink-0 text-term-fg">▍</span>}
        <span className="ml-auto shrink-0 text-term-fg-dim">{open ? "[-] cd .." : "[+] view details"}</span>
      </button>

      {showDetail && (
        <div className="mt-3 animate-[fadeSlideIn_500ms_ease-out] space-y-3 border-t border-term-border pt-3">
          <p className="text-xs text-term-fg-dim">tushar@portfolio:~/projects/{project.slug}$</p>

          {project.bullets.length > 0 && (
            <ul className="space-y-1.5 text-sm text-term-fg">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-term-accent">-</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded border border-term-border px-2 py-0.5 text-[11px] text-term-blue">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
