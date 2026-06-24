"use client";

import { useState } from "react";
import AiTutorBox from "@/components/AiTutorBox";
import { masterSyllabus } from "@/lib/masterSyllabus";

type ChapterPageProps = {
  params: {
    id: string;
  };
};

export default function ChapterPage({ params }: ChapterPageProps) {
  const id = params.id;
  const chapter = masterSyllabus.find((c) => c.id === id);
  const [score, setScore] = useState<number | null>(null);
  const [mode, setMode] = useState<"learn" | "exam" | "dashboard">("learn");

  if (!id || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Chapter Not Found
      </div>
    );
  }

  const startExam = () => {
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="flex gap-3 mb-6">
        <button onClick={() => setMode("learn")} className="px-3 py-1 border rounded">
          Learn
        </button>
        <button onClick={() => setMode("exam")} className="px-3 py-1 border rounded">
          Exam
        </button>
        <button onClick={() => setMode("dashboard")} className="px-3 py-1 border rounded">
          Dashboard
        </button>
      </div>

      {mode === "learn" && (
        <div>
          <h1 className="text-3xl font-bold">{chapter.title}</h1>

          <div className="mt-4">
            <h2 className="text-xl">Concepts</h2>
            {chapter.concepts.map((concept) => (
              <div key={concept} className="p-2 border mt-2">
                {concept}
              </div>
            ))}
          </div>

          <AiTutorBox chapter={chapter.title} concepts={chapter.concepts} />
        </div>
      )}

      {mode === "exam" && (
        <div>
          <h1 className="text-2xl font-bold">Exam Mode</h1>

          <button onClick={startExam} className="mt-4 px-4 py-2 border">
            Start Test
          </button>

          {score !== null && <div className="mt-4 text-xl">Your Score: {score} / 100</div>}
        </div>
      )}

      {mode === "dashboard" && (
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="mt-4">
            <p>Chapter: {chapter.title}</p>
            <p>Difficulty: {chapter.difficulty}/5</p>
            <p>PYQ Topics: {chapter.pyqTags.length}</p>
          </div>
        </div>
      )}
    </main>
  );
}
