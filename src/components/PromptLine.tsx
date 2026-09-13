import type { ReactNode } from "react";

export default function PromptLine({ command, children }: { command: string; children?: ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-sm">
        <span className="text-term-accent">tushar@portfolio</span>
        <span className="text-term-fg-dim">:</span>
        <span className="text-term-blue">~</span>
        <span className="text-term-fg-dim">$ </span>
        <span className="text-term-fg">{command}</span>
      </p>
      {children}
    </div>
  );
}
