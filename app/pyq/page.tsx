import { masterSyllabus } from "@/lib/masterSyllabus";

export default function PYQPage() {
  const grouped = {
    neet: masterSyllabus.filter((c) => c.exams.includes("neet")),
    jeeMain: masterSyllabus.filter((c) => c.exams.includes("jeeMain")),
    jeeAdvanced: masterSyllabus.filter((c) =>
      c.exams.includes("jeeAdvanced")
    ),
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-4">
          📚 Chemistry PYQ Engine
        </h1>

        <p className="text-white/60 mb-14">
          Practice chapter-wise PYQs for NEET, JEE Main and JEE Advanced.
        </p>

        <div className="space-y-16">
          {Object.entries(grouped).map(([exam, chapters]) => (
            <section key={exam}>
              
              <h2 className="text-3xl font-bold mb-6 uppercase">
                {exam}
              </h2>

              <div className="grid md:grid-cols-3 gap-5">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className="border border-white/10 rounded-2xl p-5 hover:border-white/30 transition"
                  >
                    <h3 className="font-semibold text-lg">
                      {chapter.title}
                    </h3>

                    <p className="text-sm text-white/40 mt-2">
                      Difficulty: {chapter.difficulty}/5
                    </p>

                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}