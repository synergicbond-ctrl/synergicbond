"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, History } from "lucide-react";
import { allCards } from "@/lib/memory/decks";
import { dueCards } from "@/lib/memory/store";

// ─────────────────────────────────────────────────────────────────────────────
// Revise Today (Portal Reorganisation pass) — the REAL due-item count from the
// SM-2 store. That store is device-local (an honest, documented V1 limitation
// of the memory engine), so the count is computed client-side from the same
// data /memory itself uses — never fabricated server-side.
// ─────────────────────────────────────────────────────────────────────────────

export default function ReviseTodayCard() {
  // null = still computing (SSR-safe); number = real count.
  const [due, setDue] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const t = setTimeout(() => {
      let count = 0;
      try {
        count = dueCards(allCards()).length;
      } catch {
        count = 0;
      }
      if (alive) setDue(count);
    }, 0);
    return () => { alive = false; clearTimeout(t); };
  }, []);

  const caughtUp = due !== null && due === 0;

  return (
    <section className="flex flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
      <h3 className="flex items-center gap-2 text-lg font-black">
        <History className="h-5 w-5 text-violet-400" /> Revise Today
      </h3>
      {due === null ? (
        <p className="mt-2 flex-1 text-sm text-white/55">Checking your revision queue…</p>
      ) : caughtUp ? (
        <>
          <p className="mt-2 flex-1 text-sm text-white/55">
            You&apos;re caught up for today — no recall cards are due on this device.
          </p>
          <Link
            href="/memory"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/75 transition hover:bg-white/[0.08]"
          >
            Browse Recall Decks <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </>
      ) : (
        <>
          <p className="mt-2 flex-1 text-sm text-white/55">
            <span className="font-black text-white">{due}</span> recall card{due === 1 ? "" : "s"} due today —
            short daily reviews are what make them stick.
          </p>
          <Link
            href="/memory?deck=daily"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-bold text-violet-300 transition hover:bg-violet-500/15"
          >
            Revise <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </>
      )}
    </section>
  );
}
