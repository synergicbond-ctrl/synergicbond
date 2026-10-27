"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Expandable block for long written notes. Native <details>, so the text stays in the
 * page (Ctrl+F and search engines see it); a #hash that points inside opens it.
 */
export function Fold({ id, kicker, title, meta, children }: { id: string; kicker: string; title: string; meta?: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openIfTargeted = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash || !ref.current) return;
      const el = document.getElementById(hash);
      if (el && ref.current.contains(el)) {
        ref.current.open = true;
        el.scrollIntoView();
      }
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, []);

  return (
    <details ref={ref} id={id} className="group scroll-mt-28 rounded-2xl border border-[var(--border)] bg-[var(--surface)] open:border-[var(--accent)]/50">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/50 text-[var(--accent)] transition group-open:rotate-90">
          ▸
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{kicker}</span>
          <span className="block text-lg font-bold leading-snug text-[var(--foreground)]">{title}</span>
          {meta && <span className="block text-sm text-[var(--text-muted)]">{meta}</span>}
        </span>
        <span className="hidden shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)] group-open:hidden sm:block">Read</span>
        <span className="hidden shrink-0 rounded-full border border-[var(--accent)]/50 px-3 py-1 text-xs font-semibold text-[var(--accent)] group-open:sm:block">Collapse</span>
      </summary>
      <div className="border-t border-[var(--border)] px-4 py-8 sm:px-8">{children}</div>
    </details>
  );
}
