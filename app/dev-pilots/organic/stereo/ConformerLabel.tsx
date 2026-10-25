"use client";
import { useEffect, useState } from "react";
/** Reads the studio's torsion slider (id pj_tau) and labels the conformation. Reads only; never changes the studio. */
export default function ConformerLabel({ frameId }: { frameId: string }) {
  const [text, setText] = useState("reading torsion…");
  useEffect(() => {
    const id = window.setInterval(() => {
      const doc = (document.getElementById(frameId) as HTMLIFrameElement | null)?.contentDocument;
      const slider = doc?.getElementById("pj_tau") as HTMLInputElement | null;
      if (!slider) return;
      const deg = ((Number(slider.value) % 360) + 360) % 360;
      const near = (a: number) => Math.min(Math.abs(deg - a), 360 - Math.abs(deg - a)) <= 10;
      const name = near(180) ? "anti (staggered, most stable)"
        : near(60) || near(300) ? "gauche (staggered)"
        : near(0) || near(120) || near(240) ? "eclipsed (higher energy)"
        : "intermediate";
      setText(`Torsion C2–C3 = ${deg.toFixed(0)}° · ${name}`);
    }, 300);
    return () => window.clearInterval(id);
  }, [frameId]);
  return <p style={{ fontWeight: 600, margin: "8px 0" }} aria-live="polite">{text}</p>;
}
