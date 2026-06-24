"use client";

import Navbar from "@/components/Navbar";
import { masterSyllabus } from "@/lib/masterSyllabus";

export default function PYQPage() {
  const exams = [
    {
      key: "neet",
      title: "🟢 NEET",
    },

    {
      key: "jeeMain",
      title: "🟡 JEE Main",
    },

    {
      key: "jeeAdvanced",
      title: "🔴 JEE Advanced",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          📚 Previous Year Questions

        </h1>

        <p className="text-white/60 mb-14">

          Practice chapter-wise PYQs for NEET, JEE Main and JEE Advanced.

        </p>

        {exams.map((exam) => {

          const chapters = masterSyllabus.filter((chapter) =>
            chapter.exams.includes(
              exam.key as
                | "neet"
                | "jeeMain"
                | "jeeAdvanced"
            )
          );

          return (

            <section
              key={exam.key}
              className="mb-16"
            >

              <h2 className="text-3xl font-bold mb-8">

                {exam.title}

              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                {chapters.map((chapter) => (

                  <div
                    key={chapter.id}
                    className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition"
                  >

                    <h3 className="text-xl font-bold mb-3">

                      {chapter.title}

                    </h3>

                    <p className="text-white/50 mb-2">

                      {chapter.category}

                    </p>

                    <p className="text-white/50 mb-6">

                      Difficulty {chapter.difficulty}/5

                    </p>

                    <button
                      className="w-full rounded-xl bg-white text-black py-2 font-semibold"
                    >

                      Open PYQs

                    </button>

                  </div>

                ))}

              </div>

            </section>

          );
        })}

      </div>

    </main>
  );
}