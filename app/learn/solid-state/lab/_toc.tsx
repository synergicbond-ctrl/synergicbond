"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; n: string; label: string };

/** Sticky chapter navigator: highlights the part being read and shows overall progress. */
export function LabToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <nav aria-label="Chapter parts" className="sticky top-16 z-30 -mx-4 border-b border-[var(--border)] bg-[var(--background)]/90 px-4 backdrop-blur sm:-mx-0 sm:rounded-b-xl">
      <div className="flex gap-1.5 overflow-x-auto py-2.5">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            aria-current={active === i.id ? "true" : undefined}
            style={{ color: active === i.id ? "#000" : "var(--foreground)", textDecoration: "none" }}
            className={`shrink-0 rounded-full border px-3 py-1 text-sm font-semibold transition ${active === i.id ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--border)] hover:border-[var(--accent)]"}`}
          >
            <span className="mr-1.5 opacity-60">{i.n}</span>
            {i.label}
          </a>
        ))}
      </div>
      <div className="h-0.5 w-full bg-white/5">
        <div className="h-full bg-[var(--accent)] transition-[width] duration-200" style={{ width: `${progress * 100}%` }} />
      </div>
    </nav>
  );
}
