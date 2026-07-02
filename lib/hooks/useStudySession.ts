"use client";

import { useEffect, useRef } from "react";

export function useStudySession(chapterId?: string) {
  const startTime = useRef<number>(0);
  const logged = useRef(false);

  useEffect(() => {
    startTime.current = Date.now();
    logged.current = false;

    const logSession = async () => {
      if (logged.current) return;
      logged.current = true;

      const minutes = (Date.now() - startTime.current) / 60000;
      if (minutes < 0.5) return; // ignore sessions under 30 seconds

      try {
        await fetch("/api/study-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ minutes, chapterId }),
        });

        await fetch("/api/xp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "chapter_read" }),
        });
      } catch {
        // silently fail — don't interrupt the study experience
      }
    };

    window.addEventListener("beforeunload", logSession);
    return () => {
      window.removeEventListener("beforeunload", logSession);
      logSession();
    };
  }, [chapterId]);
}
