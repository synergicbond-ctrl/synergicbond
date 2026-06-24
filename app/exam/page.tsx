"use client";

import Navbar from "@/components/Navbar";

import { getAdaptiveTest } from "@/lib/adaptiveTestEngine";

export default function ExamPage() {
  const exams = [
    "🟢 NEET",
    "🟡 JEE Main",
    "🔴 JEE Advanced",
  ];

  const difficulty = [
    "Easy",
    "Medium",
    "Hard",
  ];

  const adaptive = getAdaptiveTest([
    "electrochemistry",
    "thermodynamics",
  ]);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          📝 Adaptive Exam Engine

        </h1>

        <p className="text-white/60 mb-12">

          Build personalized chemistry tests.

        </p>

        <section className="mb-12">

          <h2 className="text-3xl font-bold mb-6">

            🎯 Exam Modes

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {exams.map((exam) => (

              <div
                key={exam}
                className="border border-white/10 rounded-2xl p-6"
              >

                {exam}

              </div>

            ))}

          </div>

        </section>

        <section className="mb-12">

          <h2 className="text-3xl font-bold mb-6">

            ⚡ Difficulty

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {difficulty.map((level) => (

              <div
                key={level}
                className="border border-white/10 rounded-2xl p-6"
              >

                {level}

              </div>

            ))}

          </div>

        </section>

        <section className="grid md:grid-cols-3 gap-6">

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              ⚠️ Weak Topics

            </h2>

            {adaptive.weak.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              🎯 Recommended

            </h2>

            {adaptive.recommended.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">

              ⭐ Bonus Topics

            </h2>

            {adaptive.bonus.map((item) => (

              <p key={item}>

                • {item}

              </p>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}