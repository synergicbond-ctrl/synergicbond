"use client";

import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: string;
  marks: number;
  negativeMarks: number;
};

type Section = {
  chapter: string;
  questions: Question[];
};

type Paper = {
  exam: string;
  markingScheme: string;
  totalQuestions: number;
  sections: Section[];
};

const CHAPTERS = [
  "Atomic Structure",
  "Mole Concept",
  "Chemical Bonding",
  "Thermodynamics",
  "Equilibrium",
  "Electrochemistry",
  "Chemical Kinetics",
  "Solutions",
  "Haloalkanes and Haloarenes",
  "General Organic Chemistry",
  "Aldehydes and Ketones",
  "Alcohols, Phenols and Ethers",
  "Amines",
  "p-Block Elements",
  "d and f Block Elements",
  "Coordination Compounds",
];

export default function ExamHubPage() {
  const [exam, setExam] = useState("JEE Main");
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("mixed");
  const [selectedChapters, setSelectedChapters] = useState<string[]>(["Atomic Structure", "Mole Concept"]);
  const [loading, setLoading] = useState(false);
  const [paper, setPaper] = useState<Paper | null>(null);
  const [error, setError] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleChapter = (ch: string) => {
    setSelectedChapters((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedChapters.length === 0) {
      setError("Select at least one chapter.");
      return;
    }
    setLoading(true);
    setPaper(null);
    setError("");
    setShowAnswers(false);

    try {
      const res = await fetch("/api/exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exam,
          totalQuestions,
          targetDifficulty: difficulty,
          selectedChapters: selectedChapters.map((ch) => ({
            chapter: ch,
            questionsAllocated: Math.ceil(totalQuestions / selectedChapters.length),
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setPaper(data.paper);
    } catch (err: any) {
      setError(err.message || "Failed to generate paper.");
    } finally {
      setLoading(false);
    }
  };

  const allQuestions = paper?.sections.flatMap((s) => s.questions) ?? [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-6 md:p-12 max-w-5xl mx-auto space-y-10">
      <header className="space-y-1">
        <h1 className="text-4xl font-black tracking-tight">Mock Exam Generator</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          AI-generated JEE/NEET-standard questions from selected chapters.
        </p>
      </header>

      <form onSubmit={handleGenerate} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">Exam</label>
            <select value={exam} onChange={(e) => setExam(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold">
              <option>JEE Main</option>
              <option>JEE Advanced</option>
              <option>NEET</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">Questions</label>
            <select value={totalQuestions} onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold">
              <option value={5}>5 — Quick Drill</option>
              <option value={10}>10 — Chapter Test</option>
              <option value={25}>25 — Unit Mock</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">Difficulty</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
            Chapters ({selectedChapters.length} selected)
          </label>
          <div className="flex flex-wrap gap-2">
            {CHAPTERS.map((ch) => (
              <button key={ch} type="button" onClick={() => toggleChapter(ch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  selectedChapters.includes(ch)
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400"
                }`}>
                {ch}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-black rounded-xl transition">
          {loading ? "Generating via AI..." : `Generate ${totalQuestions}-Question ${exam} Paper`}
        </button>
      </form>

      {paper && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">{paper.exam} Mock Paper</h2>
              <p className="text-slate-500 text-sm mt-1">{paper.totalQuestions} questions · {paper.markingScheme}</p>
            </div>
            <button onClick={() => setShowAnswers((v) => !v)}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {showAnswers ? "Hide Answers" : "Show Answers"}
            </button>
          </div>

          {allQuestions.map((q, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-slate-800 dark:text-white">
                  <span className="text-indigo-600 dark:text-indigo-400 font-black mr-2">Q{i + 1}.</span>
                  {q.question}
                </p>
                <span className={`shrink-0 px-2 py-0.5 rounded-md text-xs font-bold ${
                  q.difficulty === "hard" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                  q.difficulty === "medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                }`}>{q.difficulty}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(q.options ?? []).map((opt, j) => {
                  const letter = ["A", "B", "C", "D"][j];
                  const isCorrect = showAnswers && letter === q.correct;
                  return (
                    <div key={j} className={`p-3 rounded-xl text-sm border ${
                      isCorrect
                        ? "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-800 dark:text-green-300 font-semibold"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                    }`}>
                      {opt}
                    </div>
                  );
                })}
              </div>

              {showAnswers && (
                <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 text-sm">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">Explanation: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
