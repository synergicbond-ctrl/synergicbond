"use client";

import Navbar from "@/components/Navbar";

import { userProgress } from "@/lib/userProgress";

export default function RevisionPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          🔁 Smart Revision

        </h1>

        <p className="text-white/60 mb-12">

          Revise according to priority.

        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              📅 Due Today

            </h2>

            {userProgress.revisionQueue.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              ⚠️ Weak Chapters

            </h2>

            {userProgress.weakChapters.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              🔥 In Progress

            </h2>

            {userProgress.inProgress.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

        </div>

        <div className="border border-white/10 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">

            🧠 Spaced Repetition Rule

          </h2>

          <ul className="space-y-3 text-white/70">

            <li>Day 1 → Learn</li>

            <li>Day 3 → Revise</li>

            <li>Day 7 → Practice PYQs</li>

            <li>Day 15 → Retest</li>

          </ul>

        </div>

      </div>

    </main>
  );
}