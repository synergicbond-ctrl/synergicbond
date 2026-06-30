"use client";

import { useState } from "react";
import Link from "next/link";

interface SearchResults {
  results: {
    id: string;
    title: string;
    category: string;
    type?: "chapter" | "reaction";
    href?: string;
    subtitle?: string;
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
    } catch (err) {
      setError("Could not retrieve search results. Please try another term.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-5xl mx-auto space-y-10">
      
      {/* Search Header */}
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Global Syllabus Search</h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          Search across syllabus chapters and core concepts.
        </p>
      </header>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Bohr energy, Wurtz reaction, SN1, Ionic equilibrium..."
          className="flex-1 p-4 rounded-xl border-0 focus:outline-none focus:ring-0 text-slate-800 font-medium text-sm"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-semibold max-w-3xl mx-auto text-center">
          {error}
        </div>
      )}

      {/* Results Display */}
      {results && (
        <div className="space-y-8 animate-fadeIn">
          
          {results.results.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">
                Matching Chapters ({results.total})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.results.map((c) => (
                  <Link key={`${c.type ?? "chapter"}-${c.id}`} href={c.href ?? `/chapter/${c.id}`} className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-indigo-500 transition flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">{c.title}</h4>
                      <span className="inline-block mt-1 text-[10px] font-black uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {(c.type ?? "chapter")} - {c.category}
                      </span>
                      {c.subtitle && <p className="mt-2 text-xs text-slate-500">{c.subtitle}</p>}
                    </div>
                    <span className="text-indigo-600 text-xs font-bold">Open Result →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.results.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium">
              No syllabus elements found matching your query. Try searching for broad topics like 'Atomic', 'Organic', or specific laws.
            </div>
          )}

        </div>
      )}

    </div>
  );
}
