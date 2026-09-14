"use client";

import type { ReactNode } from "react";
import { useTheme } from "./ThemeProvider";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function TerminalWindow({ title, children, id, className = "" }: TerminalWindowProps) {
  const { theme } = useTheme();

  return (
    <div
      id={id}
      className={`rounded-lg border border-term-border bg-term-bg-elevated shadow-[0_0_0_1px_rgba(0,0,0,0.2)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-term-border bg-black/20 px-4 py-2.5">
        {theme === "mac" && (
          <>
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </>
        )}
        {theme === "terminal" && <span className="text-term-accent">{">_"}</span>}

        <span className={`text-xs text-term-fg-dim ${theme === "mac" || theme === "terminal" ? "ml-3" : ""}`}>
          {title}
        </span>

        {theme === "ubuntu" && (
          <span className="ml-auto flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-term-fg-dim/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-term-fg-dim/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e95420]" />
          </span>
        )}
        {theme === "windows" && (
          <span className="ml-auto flex items-center gap-3 font-sans text-[11px] leading-none text-term-fg-dim">
            <span>─</span>
            <span>▢</span>
            <span>✕</span>
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
