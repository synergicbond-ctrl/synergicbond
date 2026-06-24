"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";

import {
  explainChapter,
  buildAiTutorContext,
} from "@/lib/aiTutor";

export default function TutorPage() {
  const [query, setQuery] = useState("");

  const [searched, setSearched] = useState(false);

  const [result, setResult] = useState(
    explainChapter("")
  );

  const [context, setContext] = useState(
    buildAiTutorContext()
  );

  function handleAsk() {
    setSearched(true);

    setResult(explainChapter(query));

    setContext(buildAiTutorContext(query));
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          🧠 AI Chemistry Tutor

        </h1>

        <p className="text-white/60 mb-12">

          Explain • Revise • Practice • Learn

        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-12">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask: Thermodynamics, Chemical Bonding, Mole Concept..."
            className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button
            onClick={handleAsk}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold"
          >

            Ask Tutor

          </button>

        </div>

        {!searched && (

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              🚀 Try asking

            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="border border-white/10 rounded-xl p-5">

                Thermodynamics

              </div>

              <div className="border border-white/10 rounded-xl p-5">

                Structure of Atom

              </div>

              <div className="border border-white/10 rounded-xl p-5">

                Chemical Bonding

              </div>

            </div>

          </div>

        )}

        {searched && (

          <div className="space-y-8">

            <div className="border border-white/10 rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-6">

                {result.title}

              </h2>

              <p className="text-white/60 mb-6">

                Difficulty: {result.difficulty}/5

              </p>

              <h3 className="font-semibold mb-4">

                🧠 Concepts

              </h3>

              <ul className="space-y-2">

                {result.concepts.map((concept) => (

                  <li
                    key={concept}
                    className="text-white/80"
                  >

                    • {concept}

                  </li>

                ))}

              </ul>

            </div>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="border border-white/10 rounded-xl p-6">

                💡 Hint

              </div>

              <div className="border border-white/10 rounded-xl p-6">

                📝 Example

              </div>

              <div className="border border-white/10 rounded-xl p-6">

                📚 PYQ

              </div>

              <div className="border border-white/10 rounded-xl p-6">

                ⚡ Revise

              </div>

            </div>

            <div className="border border-white/10 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-4">

                🎯 Chapter Context

              </h3>

              <p className="mb-2">

                Category: {context.category}

              </p>

              <p>

                Chapter: {context.chapterTitle}

              </p>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}