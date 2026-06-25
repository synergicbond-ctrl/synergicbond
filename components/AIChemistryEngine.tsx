"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { type Chapter, masterSyllabus } from "@/lib/masterSyllabus";

type SearchResult = Pick<Chapter, "title" | "concepts">;

const quickSearches = [
  "Atomic Structure",
  "Chemical Bonding",
  "Thermodynamics",
  "Equilibrium",
  "Electrochemistry",
];

export default function AIChemistryEngine() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();

    if (!q) {
      setResult(null);
      return;
    }

    const chapter = masterSyllabus.find(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
    );

    if (!chapter) {
      setResult({
        title: "No chapter found",
        concepts: [],
      });
      return;
    }

    setResult(chapter);
  };

  return (
    <Container>
      <Card className="p-8">

        <h2 className="text-3xl font-bold tracking-tight">
          🧠 AI Chemistry Engine
        </h2>

        <p className="mt-3 text-white/60">
          Search the complete chemistry knowledge base.
        </p>

        <div className="mt-8 flex flex-col gap-3 md:flex-row">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Atomic Structure, Thermodynamics..."
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-white/30"
          />

          <button
            onClick={handleSearch}
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Search
          </button>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          {quickSearches.map((item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                setTimeout(handleSearch, 0);
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
            >
              {item}
            </button>
          ))}

        </div>

        {result && (
          <Card className="mt-8 p-6">

            <h3 className="text-2xl font-bold">
              {result.title}
            </h3>

            {result.concepts.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
                {result.concepts.map((concept) => (
                  <li key={concept}>{concept}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-white/50">
                Try another chemistry topic.
              </p>
            )}

          </Card>
        )}

      </Card>
    </Container>
  );
}