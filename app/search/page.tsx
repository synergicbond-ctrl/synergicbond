"use client";

import { useState } from "react";
import Link from "next/link";

interface SearchResults {
  chapters: { id: string; title: string; category: string }[];
  formulas: { chapterId: string; matches: { title: string; expression: string }[] }[];
  reactions: { id: string; name: string; category: string }[];
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
      setResults(data.results);
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
          Search across all chapters, core concepts, formulas, exceptions, and organic name reactions.
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
          
          {/* Matched Chapters */}
          {results.chapters.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">Matching Chapters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.chapters.map((c) => (
                  <Link key={c.id} href={`/chapter/${c.id}`} className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-indigo-500 transition flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">{c.title}</h4>
                      <span className="inline-block mt-1 text-[10px] font-black uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {c.category}
                      </span>
                    </div>
                    <span className="text-indigo-600 text-xs font-bold">Open Learning Hub →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Matched Formulas */}
          {results.formulas.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">Matching Formulas & Constants</h2>
              <div className="space-y-4">
                {results.formulas.map((fGroup, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm space-y-3">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                      Chapter ID: {fGroup.chapterId}
                    </span>
                    {fGroup.matches.map((f, fIdx) => (
                      <div key={fIdx} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div>
                          <h5 className="font-bold text-slate-800 text-sm">{f.title}</h5>
                          <code className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-slate-200 mt-1 inline-block text-indigo-600">
                            {f.expression}
                          </code>
                        </div>
                        <Link href={`/chapter/${fGroup.chapterId}`} className="text-xs font-bold text-slate-500 hover:underline">
                          View in Chapter
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Matched Reactions */}
          {results.reactions.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">Matching Reactions & Mechanisms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.reactions.map((r) => (
                  <div key={r.id} className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{r.name}</h4>
                      <span className="inline-block mt-1 text-[10px] font-black uppercase px-2 py-0.5 bg-purple-50 text-purple-600 rounded">
                        {r.category}
                      </span>
                    </div>
                    <Link href={`/chapter/${r.category === "organic" ? "organic" : "inorganic"}`} className="text-purple-600 text-xs font-bold hover:underline">
                      View Pathway
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {results.chapters.length === 0 && results.formulas.length === 0 && results.reactions.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium">
              No syllabus elements found matching your query. Try searching for broad topics like 'Atomic', 'Organic', or specific laws.
            </div>
          )}

        </div>
      )}

    </div>
  );
}
