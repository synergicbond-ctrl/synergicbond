"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { NAME_REACTIONS, HIGH_YIELD } from "@/lib/nameReactions";
import { reactionSlug } from "@/lib/reactionSlug";
import { Search, Star } from "lucide-react";
import ReferenceTabs from "@/components/ReferenceTabs";

export default function NameReactionsPage() {
  const [query, setQuery] = useState("");
  const [highYieldOnly, setHighYieldOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().replace(/[<>{}]/g, "").trim();
    let list = NAME_REACTIONS;
    if (highYieldOnly) list = list.filter((r) => HIGH_YIELD.has(r));
    if (q) list = list.filter((r) => r.toLowerCase().includes(q));
    return list;
  }, [query, highYieldOnly]);

  // Group A–Z
  const groups = useMemo(() => {
    const m: Record<string, string[]> = {};
    for (const r of filtered) {
      const letter = /[a-z]/i.test(r[0]) ? r[0].toUpperCase() : "#";
      (m[letter] ??= []).push(r);
    }
    return Object.entries(m).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ReferenceTabs />
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-300 mb-3">Knowledge Vault · Named Reactions</p>
          <h1 className="text-4xl font-black md:text-5xl">Name Reactions</h1>
          <p className="mt-3 text-white/65 text-sm max-w-2xl">
            {NAME_REACTIONS.length}+ standard organic name reactions. Tap any reaction to open its full <span className="text-purple-300 font-semibold">reaction page</span> — definition, mechanism, examples, stereochemistry, RDS, conditions, exam tricks, common mistakes & references. ★ = high-yield for NEET/JEE.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sticky top-16 z-30 bg-[#0B0F19]/90 backdrop-blur py-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search reactions — e.g. Aldol, Cannizzaro, Wittig…"
              className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-purple-400/50"
            />
          </div>
          <button
            onClick={() => setHighYieldOnly((v) => !v)}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition border ${
              highYieldOnly ? "bg-purple-500 text-white border-purple-500" : "bg-[#111827] text-gray-300 border-white/[0.08] hover:text-white"
            }`}
          >
            <Star className={`h-4 w-4 ${highYieldOnly ? "fill-white" : ""}`} /> High-Yield
          </button>
        </div>

        <p className="text-xs text-white/40 mb-4">{filtered.length} reactions</p>

        {/* A–Z groups */}
        {groups.length === 0 && (
          <p className="text-white/50 text-sm py-10 text-center">No reactions match &quot;{query}&quot;.</p>
        )}
        <div className="space-y-6">
          {groups.map(([letter, items]) => (
            <div key={letter}>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-sm font-black text-purple-400">{letter}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((r) => (
                  <Link
                    key={r}
                    href={`/learn/reactions/${reactionSlug(r)}`}
                    className="group flex items-start gap-2 text-left rounded-xl bg-[#111827] border border-white/[0.06] px-3.5 py-2.5 transition hover:border-purple-400/30 hover:-translate-y-0.5"
                  >
                    {HIGH_YIELD.has(r) && <Star className="h-3 w-3 mt-0.5 flex-shrink-0 fill-amber-400 text-amber-400" />}
                    <span className="text-sm text-white/80 group-hover:text-white leading-snug">{r}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
