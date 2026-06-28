"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import { NAME_REACTIONS, HIGH_YIELD } from "@/lib/nameReactions";
import { Search, Star, X, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function NameReactionsPage() {
  const [query, setQuery] = useState("");
  const [highYieldOnly, setHighYieldOnly] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

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

  async function explain(reaction: string) {
    setSelected(reaction);
    setExplanation("");
    setLoading(true);
    try {
      const language = typeof window !== "undefined" ? localStorage.getItem("sb_lang") || "english" : "english";
      const res = await fetch("/api/reaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reaction, language }),
      });
      const data = await res.json();
      setExplanation(data.explanation || data.error || "Could not load explanation.");
    } catch {
      setExplanation("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Organic</p>
          <h1 className="text-4xl font-black md:text-5xl">Name Reactions</h1>
          <p className="mt-3 text-white/65 text-sm max-w-2xl">
            {NAME_REACTIONS.length}+ standard organic name reactions. Search any reaction and tap <span className="text-cyan-300 font-semibold">Explain with AI</span> for a mechanism, reagents, type and exam tip. ★ = high-yield for NEET/JEE.
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
              className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50"
            />
          </div>
          <button
            onClick={() => setHighYieldOnly((v) => !v)}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition border ${
              highYieldOnly ? "bg-cyan-500 text-black border-cyan-500" : "bg-[#111827] text-gray-300 border-white/[0.08] hover:text-white"
            }`}
          >
            <Star className={`h-4 w-4 ${highYieldOnly ? "fill-black" : ""}`} /> High-Yield
          </button>
        </div>

        <p className="text-xs text-white/40 mb-4">{filtered.length} reactions</p>

        {/* A–Z groups */}
        {groups.length === 0 && (
          <p className="text-white/50 text-sm py-10 text-center">No reactions match "{query}".</p>
        )}
        <div className="space-y-6">
          {groups.map(([letter, items]) => (
            <div key={letter}>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-sm font-black text-cyan-400">{letter}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((r) => (
                  <button
                    key={r}
                    onClick={() => explain(r)}
                    className="group flex items-start gap-2 text-left rounded-xl bg-[#111827] border border-white/[0.06] px-3.5 py-2.5 transition hover:border-cyan-400/30 hover:-translate-y-0.5"
                  >
                    {HIGH_YIELD.has(r) && <Star className="h-3 w-3 mt-0.5 flex-shrink-0 fill-amber-400 text-amber-400" />}
                    <span className="text-sm text-white/80 group-hover:text-white leading-snug">{r}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI explanation modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div
            className="w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between bg-[#111827] border-b border-white/[0.06] px-6 py-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-bold">{selected}</span>
              </div>
              <button onClick={() => setSelected(null)} className="p-1 text-white/40 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-5">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-white/50">
                  <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
                  <span className="text-sm">Generating mechanism & exam tips…</span>
                </div>
              ) : (
                <div className="prose-invert text-sm leading-relaxed text-white/80 [&_h2]:text-cyan-300 [&_h2]:font-black [&_h2]:text-lg [&_h2]:mb-3 [&_strong]:text-white [&_li]:my-1 [&_p]:my-2">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {explanation}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
