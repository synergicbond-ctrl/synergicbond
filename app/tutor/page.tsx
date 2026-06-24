"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";

import { chemistryDatabase } from "@/lib/chemistryDatabase";
import { pyqDatabase } from "@/lib/pyqDatabase";

export default function TutorPage() {
  const [query, setQuery] = useState("");

  const [result, setResult] = useState<
    (typeof chemistryDatabase)[string] | null
  >(null);

  const [pyqs, setPyqs] = useState<string[]>([]);

  const [notFound, setNotFound] = useState(false);

  function askTutor() {
    const normalized = query
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const topic = chemistryDatabase[normalized];

    if (topic) {
      setResult(topic);

      setPyqs(pyqDatabase[normalized] ?? []);

      setNotFound(false);
    } else {
      setResult(null);

      setPyqs([]);

      setNotFound(true);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          🧠 Smart Chemistry Tutor

        </h1>

        <p className="text-white/60 mb-12">

          Offline Tutor for NEET & JEE.

        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-12">

          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Try: thermodynamics"
            className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button
            onClick={askTutor}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold"
          >

            Search

          </button>

        </div>

        {!result && !notFound && (

          <div className="grid md:grid-cols-4 gap-4">

            <div className="border border-white/10 rounded-xl p-5">

              Thermodynamics

            </div>

            <div className="border border-white/10 rounded-xl p-5">

              Equilibrium

            </div>

            <div className="border border-white/10 rounded-xl p-5">

              Electrochemistry

            </div>

            <div className="border border-white/10 rounded-xl p-5">

              Chemical Bonding

            </div>

          </div>

        )}

        {notFound && (

          <div className="border border-red-500/30 rounded-2xl p-8">

            Topic not found.

          </div>

        )}

        {result && (

          <div className="space-y-8">

            <div className="border border-white/10 rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-4">

                {result.title}

              </h2>

              <p>

                {result.overview}

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="border border-white/10 rounded-2xl p-6">

                <h3 className="font-bold mb-4">

                  🟢 NEET Focus

                </h3>

                {result.neet.map((item) => (

                  <p key={item}>

                    • {item}

                  </p>

                ))}

              </div>

              <div className="border border-white/10 rounded-2xl p-6">

                <h3 className="font-bold mb-4">

                  🟡 JEE Focus

                </h3>

                {result.jee.map((item) => (

                  <p key={item}>

                    • {item}

                  </p>

                ))}

              </div>

              <div className="border border-white/10 rounded-2xl p-6">

                <h3 className="font-bold mb-4">

                  🎯 Exam Tip

                </h3>

                <p>

                  Study theory first.

                </p>

                <p className="mt-3">

                  Then practice PYQs immediately.

                </p>

              </div>

            </div>

            {pyqs.length > 0 && (

              <div className="border border-white/10 rounded-2xl p-8">

                <h3 className="text-2xl font-bold mb-6">

                  📚 Related PYQs

                </h3>

                <div className="space-y-3">

                  {pyqs.map((pyq) => (

                    <p key={pyq}>

                      • {pyq}

                    </p>

                  ))}

                </div>

              </div>

            )}

          </div>

        )}

      </div>

    </main>
  );
}