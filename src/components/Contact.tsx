import { Mail } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import PromptLine from "./PromptLine";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-4 py-8 scroll-mt-16">
      <Reveal>
        <TerminalWindow title="contact --send-message">
          <PromptLine command="./contact --reach-out" />
          <p className="text-sm leading-relaxed text-term-fg">
            Open to backend, AI/LLM, and agentic-systems engineering roles and collaborations. Reach out
            through any of the channels below.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded border border-term-border px-3 py-1.5 text-term-fg transition-colors hover:border-term-accent hover:text-term-accent"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-term-border px-3 py-1.5 text-term-fg transition-colors hover:border-term-accent hover:text-term-accent"
            >
              <GithubIcon size={16} /> github.com/{profile.handle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-term-border px-3 py-1.5 text-term-fg transition-colors hover:border-term-accent hover:text-term-accent"
            >
              <LinkedinIcon size={16} /> linkedin.com/in/{profile.handle}
            </a>
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
