"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { trackBetaEvent } from "@/lib/betaAnalyticsClient";

// Unlock messaging for Preview Mode (Roadmap Phase 8). Callers pass REAL
// counts from the catalogue they are rendering.
//
//   250 Available · 2000 Total → "Unlock Complete Library"
//
// WEEK 15 — conversion tracking: clicking the CTA records an `upgrade_intent`
// beta event (+ Vercel analytics) with the surface it came from.
export default function UnlockBanner({
  available,
  total,
  itemLabel,
}: {
  available: number;
  total: number;
  itemLabel: string; // e.g. "formula cards", "reagents"
}) {
  if (available >= total) return null;
  return (
    <div className="my-6 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-5 text-center">
      <p className="text-2xl font-black text-[var(--foreground)]">
        {available} <span className="text-[var(--text-muted)]">of</span> {total}
      </p>
      <p className="mt-1 text-sm text-[var(--text-muted)]">
        {itemLabel} available on the free plan
      </p>
      <Link
        href="/pricing"
        onClick={() => {
          trackBetaEvent("upgrade_intent", { source: itemLabel, available, total });
          track("unlock_banner_click", { source: itemLabel });
        }}
        className="mt-4 inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--background)] transition hover:opacity-90"
      >
        Unlock Complete Library →
      </Link>
    </div>
  );
}
