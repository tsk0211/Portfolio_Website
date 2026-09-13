import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <Reveal>
        <TerminalWindow title="skills.json">
          <PromptLine command="cat skills.json" />
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.key}>
                <p className="mb-2 text-xs uppercase tracking-wide text-term-magenta">
                  &quot;{group.label}&quot;:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-term-border bg-black/20 px-2 py-1 text-xs text-term-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
