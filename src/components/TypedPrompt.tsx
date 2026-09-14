export default function TypedPrompt({
  output,
  done,
  onRun,
}: {
  output: string;
  done: boolean;
  onRun?: () => void;
}) {
  return (
    <p className="flex items-start gap-2 text-sm">
      {onRun && (
        <button
          type="button"
          onClick={onRun}
          aria-label="Run command again"
          title="Run again"
          className="mt-0.5 shrink-0 rounded border border-term-border px-1.5 py-0.5 text-[10px] leading-none text-term-fg-dim transition-colors hover:border-term-accent hover:text-term-accent"
        >
          ▶
        </button>
      )}
      <span>
        <span className="text-term-accent">tushar@portfolio</span>
        <span className="text-term-fg-dim">:</span>
        <span className="text-term-blue">~</span>
        <span className="text-term-fg-dim">$ </span>
        <span className="text-term-fg">{output}</span>
        {!done && <span className="caret-blink text-term-fg">▍</span>}
      </span>
    </p>
  );
}
