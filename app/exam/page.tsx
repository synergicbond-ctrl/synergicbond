import Link from "next/link";
import { masterSyllabus } from "@/lib/masterSyllabus";

export default function ExamPage() {
  const totalConcepts = masterSyllabus.reduce(
    (count, chapter) => count + chapter.concepts.length,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-wider text-white/50">
            Exam Engine
          </p>
          <h1 className="text-4xl font-bold">Practice by chapter</h1>
          <p className="mt-4 max-w-2xl text-white/60">
            Start with a chapter, revise its concepts, then use the chapter page
            exam mode to generate a quick score.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="border border-white/10 p-4">
            <p className="text-3xl font-bold">{masterSyllabus.length}</p>
            <p className="text-white/50">Chapters</p>
          </div>
          <div className="border border-white/10 p-4">
            <p className="text-3xl font-bold">{totalConcepts}</p>
            <p className="text-white/50">Concepts</p>
          </div>
          <div className="border border-white/10 p-4">
            <p className="text-3xl font-bold">3</p>
            <p className="text-white/50">Exam modes</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {masterSyllabus.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/chapter/${chapter.id}`}
              className="border border-white/10 p-5 transition hover:border-white/40"
            >
              <h2 className="text-xl font-semibold">{chapter.title}</h2>
              <p className="mt-2 text-sm text-white/50">
                Difficulty {chapter.difficulty}/5
              </p>
              <p className="mt-4 text-sm text-white/70">
                {chapter.concepts.slice(0, 3).join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
