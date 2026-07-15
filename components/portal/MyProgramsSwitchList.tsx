"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// My Programs — switch list (client). Renders ONLY the server-verified
// entitled programs passed down by /dashboard/programs; switching re-validates
// on the server (the POST rejects anything the user doesn't own).
// ─────────────────────────────────────────────────────────────────────────────

export interface MyProgramRow {
  key: string;
  name: string;
  category: string;
  href: string;
  sourceLabel: string;
  isActive: boolean;
}

export default function MyProgramsSwitchList({ programs }: { programs: MyProgramRow[] }) {
  const router = useRouter();
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function makeActive(key: string) {
    if (busyKey) return;
    setBusyKey(key);
    setError(null);
    try {
      const res = await fetch("/api/portal/active-program", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programKey: key }),
      });
      if (!res.ok) throw new Error("rejected");
      window.dispatchEvent(new Event("sb-program-switched"));
      router.refresh();
    } catch {
      setError("Couldn't switch programs — please try again.");
    } finally {
      setBusyKey(null);
    }
  }

  return (
    <section className="space-y-3">
      {programs.map((p) => (
        <div
          key={p.key}
          className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 ${
            p.isActive ? "border-cyan-400/30 bg-cyan-500/[0.06]" : "border-white/[0.08] bg-[#111827]"
          }`}
        >
          <div className="min-w-0">
            <p className="flex items-center gap-2 font-bold">
              <span className="truncate">{p.name}</span>
              <span className="shrink-0 rounded-full border border-white/[0.12] bg-white/[0.05] px-2 py-0.5 text-[10px] font-bold text-white/60">
                {p.category}
              </span>
              {p.isActive && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                  <Check className="h-2.5 w-2.5" /> Active
                </span>
              )}
            </p>
            <p className="mt-0.5 text-xs text-white/45">{p.sourceLabel}</p>
          </div>
          <div className="flex items-center gap-2">
            {!p.isActive && (
              <button
                type="button"
                disabled={busyKey !== null}
                onClick={() => makeActive(p.key)}
                className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-500/15 disabled:opacity-50"
              >
                {busyKey === p.key ? "Switching…" : "Make active"}
              </button>
            )}
            <Link
              href={p.href}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-white/75 transition hover:bg-white/[0.08]"
            >
              Open <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      ))}
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </section>
  );
}
