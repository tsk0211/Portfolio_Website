"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeId = "terminal" | "mac" | "ubuntu" | "windows";

export const THEMES: { id: ThemeId; label: string; swatch: string }[] = [
  { id: "terminal", label: "Terminal", swatch: "#39ff88" },
  { id: "mac", label: "macOS", swatch: "#27c93f" },
  { id: "ubuntu", label: "Ubuntu", swatch: "#e95420" },
  { id: "windows", label: "Windows", swatch: "#3a96dd" },
];

const DEFAULT_THEME: ThemeId = "terminal";
const STORAGE_KEY = "portfolio-theme";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES.some((t) => t.id === saved)) {
        // One-time hydration-safe restore from localStorage: the initial
        // render must match SSR output (default theme), so the persisted
        // theme can only be applied after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeState(saved as ThemeId);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — stay on default
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (next: ThemeId) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures
    }
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
