import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <TerminalWindow title="cat education.log">
        <PromptLine command="cat education.log" />
        <ul className="space-y-3 text-sm">
          {education.map((entry) => (
            <li key={entry.degree} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-term-fg">
                <span className="text-term-accent">✓</span> {entry.degree}
                <span className="text-term-fg-dim"> — {entry.institution}</span>
              </span>
              <span className="text-xs text-term-fg-dim">{entry.dateRange}</span>
            </li>
          ))}
        </ul>
      </TerminalWindow>
    </section>
  );
}
