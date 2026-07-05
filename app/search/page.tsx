"use client";

import { useState } from "react";
import Link from "next/link";
import { trackBetaEvent } from "@/lib/betaAnalyticsClient";

interface SearchResults {
  results: {
    id: string;
    title: string;
    category: string;
    type?: "chapter" | "reaction" | "formula" | "pyq" | "ncert" | "order" | "graph";
    href?: string;
    subtitle?: string;
    graphType?: string;
    relevanceScore?: number;
  }[];
  total: number;
}

export default function GlobalSearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await res.json();
      setResults(data);
      trackBetaEvent("search", {
        queryLength: query.trim().length,
        total: typeof data?.total === "number" ? data.total : 0,
      }, "/search");
    } catch {
      setError("Could not retrieve search results. Please try another term.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white p-6 md:p-12 max-w-5xl mx-auto space-y-10">
      
      {/* Search Header */}
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-black tracking-tight text-white">Global Syllabus Search</h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm">
          Search across reactions, reagents, exceptions, orders, formulas, PYQs, and NCERT refs.
        </p>
      </header>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="flex flex-col gap-3 bg-[#111827] p-2 rounded-2xl border border-white/[0.08] max-w-3xl mx-auto sm:flex-row focus-within:border-cyan-400/40 transition">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Bohr energy, Wurtz, SN1, osmotic pressure, acidity order..."
          className="min-w-0 flex-1 p-4 rounded-xl border-0 bg-transparent text-white focus:outline-none focus:ring-0 font-medium text-sm placeholder:text-white/30"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800 disabled:text-white/50 text-black font-black text-sm rounded-xl transition shadow-[0_0_15px_rgba(6,182,212,0.15)] sm:w-auto"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-sm font-semibold max-w-3xl mx-auto text-center">
          {error}
        </div>
      )}

      {/* Results Display */}
      {results && (
        <div className="space-y-8 animate-fadeIn">
          
          {results.results.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white/80 border-b border-white/[0.08] pb-2">
                Matching Results ({results.total})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.results.map((c) => (
                  <Link key={`${c.type ?? "chapter"}-${c.id}`} href={c.href ?? `/chapter/${c.id}`} className={`flex min-w-0 flex-col gap-4 p-5 bg-[#111827] rounded-xl border border-white/[0.08] hover:border-cyan-400/30 transition sm:flex-row sm:items-center sm:justify-between`}>
                    <div className="min-w-0">
                      <h4 className="break-words font-bold text-white">{c.title}</h4>
                      <span className="inline-block mt-1 text-[10px] font-black uppercase px-2 py-0.5 bg-white/[0.06] text-white/60 rounded">
                        {(c.type ?? "chapter")} - {c.category}
                      </span>
                      {c.graphType && (
                        <span className="ml-2 inline-block text-[10px] font-black uppercase px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded">
                          {c.graphType}
                        </span>
                      )}
                      {c.subtitle && <p className="mt-2 break-words text-xs text-white/50">{c.subtitle}</p>}
                    </div>
                    <span className="shrink-0 self-end text-cyan-400 text-xs font-bold sm:self-auto hover:text-cyan-300">Open Result →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.results.length === 0 && (
            <div className="p-12 text-center bg-[#111827] rounded-2xl border border-dashed border-white/[0.08] text-white/40 font-medium">
              No syllabus elements found matching your query. Try broad topics like Atomic, Organic, or specific laws.
            </div>
          )}

        </div>
      )}

    </div>
  );
}
