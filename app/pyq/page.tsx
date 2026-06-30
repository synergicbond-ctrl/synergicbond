"use client";

import { useState } from "react";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { pyqDatabase, type PYQQuestion } from "@/lib/pyqDatabase";

const masterSyllabus = [...physical, ...organic, ...inorganic];

function examMatches(exams: string[], activeExam: "neet" | "jeeMain" | "jeeAdvanced") {
  const normalized = exams.map((exam) => exam.toLowerCase().replace(/[\s_-]/g, ""));
  return normalized.includes(activeExam.toLowerCase());
}

export default function PYQPage() {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [activeExam, setActiveExam] = useState<"neet" | "jeeMain" | "jeeAdvanced">("jeeMain");
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const exams: { key: "neet" | "jeeMain" | "jeeAdvanced"; title: string }[] = [
    { key: "neet", title: "🟢 NEET" },
    { key: "jeeMain", title: "🟡 JEE Main" },
    { key: "jeeAdvanced", title: "🔴 JEE Advanced" },
  ];

  const chapters = masterSyllabus.filter((c) => examMatches(c.exams, activeExam));
  const questions: PYQQuestion[] = activeChapter ? (pyqDatabase[activeChapter] ?? []) : [];

  const toggleReveal = (id: string) =>
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h1 className="text-5xl font-bold mb-2">📚 Previous Year Questions</h1>
          <p className="text-white/60">Practice chapter-wise PYQs for NEET, JEE Main and JEE Advanced.</p>
        </div>

        {/* Exam filter tabs */}
        <div className="flex gap-3">
          {exams.map((e) => (
            <button key={e.key} onClick={() => { setActiveExam(e.key); setActiveChapter(null); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                activeExam === e.key
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}>
              {e.title}
            </button>
          ))}
        </div>

        {/* Chapter grid */}
        {!activeChapter && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {chapters.map((chapter) => {
              const count = (pyqDatabase[chapter.id] ?? []).length;
              return (
                <button key={chapter.id} onClick={() => setActiveChapter(chapter.id)}
                  className="border border-white/10 rounded-2xl p-5 hover:border-white/30 transition text-left group">
                  <h3 className="text-base font-bold mb-1 group-hover:text-cyan-400 transition">{chapter.title}</h3>
                  <p className="text-white/40 text-xs mb-3 capitalize">{chapter.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30">Difficulty {chapter.difficulty}/5</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      count > 0 ? "bg-cyan-900/50 text-cyan-400" : "bg-white/5 text-white/30"
                    }`}>
                      {count > 0 ? `${count} Qs` : "Coming soon"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Questions panel */}
        {activeChapter && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveChapter(null)}
                className="text-sm text-white/50 hover:text-white transition flex items-center gap-1">
                ← Back
              </button>
              <h2 className="text-2xl font-bold">
                {masterSyllabus.find((c) => c.id === activeChapter)?.title}
              </h2>
            </div>

            {questions.length === 0 ? (
              <div className="border border-white/10 rounded-2xl p-12 text-center text-white/40">
                PYQs for this chapter are being added. Check back soon.
              </div>
            ) : (
              <div className="space-y-5">
                {questions.map((q) => (
                  <div key={q.id} className="border border-white/10 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <span className="bg-white/5 px-2 py-0.5 rounded-md">{q.year}</span>
                      <span className="bg-white/5 px-2 py-0.5 rounded-md">{q.exam}</span>
                      <span className="bg-indigo-900/40 text-indigo-400 px-2 py-0.5 rounded-md">{q.topic}</span>
                    </div>

                    <p className="text-white font-medium leading-relaxed">{q.question}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(q.options).map(([key, val]) => {
                        const isCorrect = revealed[q.id] && key === q.answer;
                        return (
                          <div key={key} className={`p-3 rounded-xl text-sm border ${
                            isCorrect
                              ? "bg-green-900/30 border-green-600 text-green-300 font-semibold"
                              : "bg-white/[0.03] border-white/10 text-white/70"
                          }`}>
                            <span className="font-bold mr-2">{key}.</span>{val}
                          </div>
                        );
                      })}
                    </div>

                    {revealed[q.id] && (
                      <div className="bg-indigo-950/40 border border-indigo-800 rounded-xl p-4 text-sm text-slate-300">
                        <span className="font-bold text-indigo-400">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}

                    <button onClick={() => toggleReveal(q.id)}
                      className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition">
                      {revealed[q.id] ? "Hide Answer" : "Reveal Answer & Explanation"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
