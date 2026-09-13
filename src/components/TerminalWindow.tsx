import type { ReactNode } from "react";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function TerminalWindow({ title, children, id, className = "" }: TerminalWindowProps) {
  return (
    <div
      id={id}
      className={`rounded-lg border border-term-border bg-term-bg-elevated shadow-[0_0_0_1px_rgba(0,0,0,0.2)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-term-border bg-black/20 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-term-fg-dim">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
