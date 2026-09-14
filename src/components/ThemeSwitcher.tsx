"use client";

import { useEffect, useRef, useState } from "react";
import { THEMES, useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div ref={rootRef} className="relative ml-auto shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded border border-term-border bg-term-bg-elevated px-2.5 py-1 text-xs text-term-fg transition-colors hover:border-term-accent"
      >
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: current.swatch }} />
        {current.label}
        <span className="text-term-fg-dim">▾</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Choose terminal theme"
          className="absolute right-0 top-full z-20 mt-2 w-40 overflow-hidden rounded border border-term-border bg-term-bg-elevated shadow-lg"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="option"
              aria-selected={t.id === theme}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-black/30 ${
                t.id === theme ? "text-term-accent" : "text-term-fg"
              }`}
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: t.swatch }} />
              {t.label}
              {t.id === theme && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
