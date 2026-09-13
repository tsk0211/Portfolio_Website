import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import Reveal from "./Reveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <Reveal>
        <TerminalWindow title="git log --stat experience">
          <PromptLine command="git log --stat --author=tushar" />
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company} className="border-l-2 border-term-accent-dim pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-semibold text-term-fg">
                    {job.company} <span className="font-normal text-term-fg-dim">— {job.location}</span>
                  </p>
                  <p className="text-xs text-term-fg-dim">{job.dateRange}</p>
                </div>

                <ul className="mt-1.5 space-y-0.5 text-sm">
                  {job.roles.map((role) => (
                    <li key={role.title} className="text-term-blue">
                      <span className="text-term-fg-dim">*</span> {role.title}{" "}
                      <span className="text-term-fg-dim">({role.dateRange})</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-term-fg">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 shrink-0 text-term-accent">+</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
