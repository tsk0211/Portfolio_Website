"use client";

import type { ReactNode } from "react";
import TerminalWindow from "./TerminalWindow";
import TypedPrompt from "./TypedPrompt";
import { useInView } from "@/hooks/useInView";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function TerminalSection({
  title,
  command,
  children,
}: {
  title: string;
  command: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { output, done } = useTypewriter(command, 55, 250, inView);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1400ms] ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <TerminalWindow title={title}>
        <div className="mb-4">
          <TypedPrompt output={output} done={done} />
        </div>
        {done && children}
      </TerminalWindow>
    </div>
  );
}
