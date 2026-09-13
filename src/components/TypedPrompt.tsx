export default function TypedPrompt({ output, done }: { output: string; done: boolean }) {
  return (
    <p className="text-sm">
      <span className="text-term-accent">tushar@portfolio</span>
      <span className="text-term-fg-dim">:</span>
      <span className="text-term-blue">~</span>
      <span className="text-term-fg-dim">$ </span>
      <span className="text-term-fg">{output}</span>
      {!done && <span className="caret-blink text-term-fg">▍</span>}
    </p>
  );
}
