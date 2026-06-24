"use client";

import { useState } from "react";
import { explainChapter, type TutorResult } from "@/lib/aiTutor";

export default function TutorPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<TutorResult | null>(null);

  const handleAsk = () => {
    const res = explainChapter(query);
    setResult(res);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Chemistry AI Tutor</h1>

        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask: Thermodynamics, Atom, Mole concept..."
            className="flex-1 p-3 rounded bg-white/5 border border-white/10"
          />

          <button
            onClick={handleAsk}
            className="px-6 py-3 bg-white text-black rounded"
          >
            Ask
          </button>
        </div>

        {result && (
          <div className="mt-10 border border-white/10 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{result.title}</h2>

            <h3 className="text-white/60 mb-2">Key Concepts</h3>
            <ul className="list-disc ml-5 text-white/80">
              {result.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <p className="mt-4 text-white/50">
              Difficulty: {result.difficulty}/5
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
