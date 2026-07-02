"use client";

import { useState } from "react";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import type { Chapter } from "@/lib/masterSyllabus/types";

type SearchResult = Pick<Chapter, "title" | "concepts">;

export default function AIChemistryEngine() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = () => {
    const q = query.toLowerCase();

    const chapter = masterSyllabus.find(
      (c) => c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
    );

    if (!chapter) {
      setResult({ title: "Not Found", concepts: [] });
      return;
    }

    setResult(chapter);
  };

  return (
    <div className="p-6 border border-white/10 rounded-xl">
      <h2 className="text-xl font-bold mb-4">AI Chemistry Engine</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 bg-white/5 border border-white/10 rounded"
          placeholder="Search chemistry topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-white text-black rounded"
        >
          Search
        </button>
      </div>

      {result && (
        <div className="mt-4">
          <h3 className="font-bold">{result.title}</h3>

          {result.concepts.length > 0 && (
            <ul className="list-disc ml-5 text-white/70 mt-2">
              {result.concepts.map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
