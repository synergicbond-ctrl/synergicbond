"use client";

import Navbar from "@/components/Navbar";

export default function ExamPage() {
  const exams = [
    {
      name: "🟢 NEET",
      description: "NCERT-focused objective chemistry",
    },

    {
      name: "🟡 JEE Main",
      description: "Speed + conceptual chemistry",
    },

    {
      name: "🔴 JEE Advanced",
      description: "Advanced analytical chemistry",
    },
  ];

  const testSizes = [10, 20, 50];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          📝 Adaptive Exam Engine

        </h1>

        <p className="text-white/60 mb-14">

          Practice exam-style chemistry questions.

        </p>

        <section className="mb-16">

          <h2 className="text-3xl font-bold mb-8">

            🎯 Select Exam

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {exams.map((exam) => (

              <div
                key={exam.name}
                className="border border-white/10 rounded-2xl p-8"
              >

                <h3 className="text-2xl font-bold mb-4">

                  {exam.name}

                </h3>

                <p className="text-white/60">

                  {exam.description}

                </p>

              </div>

            ))}

          </div>

        </section>

        <section className="mb-16">

          <h2 className="text-3xl font-bold mb-8">

            📋 Test Size

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {testSizes.map((size) => (

              <div
                key={size}
                className="border border-white/10 rounded-2xl p-8"
              >

                <h3 className="text-3xl font-bold mb-3">

                  {size}

                </h3>

                <p className="text-white/60">

                  Questions

                </p>

              </div>

            ))}

          </div>

        </section>

        <section>

          <div className="border border-white/10 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              🚀 Coming Soon

            </h2>

            <ul className="space-y-3 text-white/70">

              <li>🎯 Adaptive difficulty</li>

              <li>📈 Performance analytics</li>

              <li>🔥 Weak chapter detection</li>

              <li>⭐ Personalized tests</li>

            </ul>

          </div>

        </section>

      </div>

    </main>
  );
}