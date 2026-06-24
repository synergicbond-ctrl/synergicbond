"use client";

import Navbar from "@/components/Navbar";
import { masterSyllabus } from "@/lib/masterSyllabus";

export default function RevisionPage() {
  const highWeightage = masterSyllabus
    .filter((chapter) => chapter.difficulty >= 4)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          ⚡ Revision Engine

        </h1>

        <p className="text-white/60 mb-12">

          Revise smarter, not longer.

        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">

              ⚡ 15 Min

            </h2>

            <p className="text-white/60">

              Rapid formula revision.

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">

              ⚡ 30 Min

            </h2>

            <p className="text-white/60">

              Concepts + formulas.

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">

              ⚡ 60 Min

            </h2>

            <p className="text-white/60">

              Full chapter revision.

            </p>

          </div>

        </div>

        <section>

          <h2 className="text-3xl font-bold mb-8">

            🔥 High Weightage Chapters

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {highWeightage.map((chapter) => (

              <div
                key={chapter.id}
                className="border border-white/10 rounded-2xl p-6"
              >

                <h3 className="text-xl font-bold mb-3">

                  {chapter.title}

                </h3>

                <p className="text-white/50 mb-2">

                  {chapter.category}

                </p>

                <p className="text-white/50">

                  Difficulty {chapter.difficulty}/5

                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}