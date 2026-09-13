"use client";

import { Mail } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/resume";
import { useTypewriter } from "@/hooks/useTypewriter";

const COMMAND = "whoami --verbose";

export default function Hero() {
  const { output, done } = useTypewriter(COMMAND, 45, 300);

  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-4 pt-16 pb-10 sm:pt-24 scroll-mt-16">
      <TerminalWindow title="tushar@portfolio: ~">
        <p className="text-sm">
          <span className="text-term-accent">tushar@portfolio</span>
          <span className="text-term-fg-dim">:</span>
          <span className="text-term-blue">~</span>
          <span className="text-term-fg-dim">$ </span>
          <span className="text-term-fg">{output}</span>
          <span className="caret-blink text-term-fg">▍</span>
        </p>

        <div
          className={`mt-5 space-y-4 transition-opacity duration-500 ${
            done ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-2xl font-bold text-term-fg sm:text-3xl">{profile.name}</h1>
          <p className="text-term-amber">{profile.title}</p>
          <p className="text-sm text-term-fg-dim">{profile.location}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-term-fg">{profile.summary}</p>

          <div className="flex flex-wrap gap-4 pt-2 text-sm">
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
        </div>
      </TerminalWindow>
    </section>
  );
}
