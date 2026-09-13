"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 55, startDelayMs = 0, start = true) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs, start]);

  return { output, done };
}
