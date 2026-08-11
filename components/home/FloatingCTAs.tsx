"use client";

import Link from "next/link";
import { Sparkles, Camera, ArrowUpRight } from "lucide-react";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Ask Chemistry AI — secondary, so it stays a hairline against the page. */}
      <Link
        href="/doubt-solver"
        className="group flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-xs font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent-dim)]"
      >
        <Sparkles className="h-4 w-4 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]" />
        <span className="tracking-wide">Ask Chemistry AI</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
      </Link>

      {/* Snap & Solve — the single accented action in this pair. */}
      <Link
        href="/snap-solve"
        className="flex items-center gap-2.5 rounded-[var(--radius-sm)] bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-black transition-opacity duration-200 hover:opacity-90"
      >
        <Camera className="h-4 w-4 text-black" />
        <span className="tracking-wide">Snap &amp; Solve</span>
      </Link>
    </div>
  );
}
