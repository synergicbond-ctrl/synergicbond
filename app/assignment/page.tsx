"use client";

import { useState } from "react";
import { masterSyllabus } from "@/lib/masterSyllabus/all";

const EXAMS = ["JEE Main", "JEE Advanced", "NEET", "GATE", "NSEC", "INChO", "IChO"];
const QUESTION_TYPES = [
  { value: "single_correct", label: "MCQ (Single Correct)" },
  { value: "multiple_correct", label: "MCQ (Multi Correct)" },
  { value: "numerical", label: "Numerical Answer" },
  { value: "reasoning", label: "Assertion-Reason" },
];
const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "hinglish", label: "Hinglish" },
  { value: "hindi", label: "हिंदी" },
];

type Question = {
  id: number;
  type: string;
  difficulty: string;
  subTopic: string;
  question: string;
  options?: string[];
  correct: string;
  marks: number;
  negativeMarks: number;
  solution: string;
  concept: string;
  tip: string;
};

export default function AssignmentPage() {
  const [topic, setTopic] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [examType, setExamType] = useState("JEE Main");
  const [difficulty, setDifficulty] = useState("mixed");
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [language, setLanguage] = useState("english");
  const [selectedTypes, setSelectedTypes] = useState(["single_correct", "numerical"]);
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState<any>(null);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function toggleType(t: string) {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  async function generate() {
    if (!topic && !chapterId) return;
    setLoading(true);
    setError("");
    setAssignment(null);
    setAnswers({});
    setSubmitted(false);

    try {
      const res = await fetch("/api/assignment/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic, chapterId, examType, difficulty,
          totalQuestions, language, questionTypes: selectedTypes,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAssignment(data.assignment);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function submit() {
    setSubmitted(true);
    // Log mistakes to API
    if (!assignment) return;
    assignment.questions.forEach(async (q: Question) => {
      const selected = answers[q.id];
      if (selected && selected !== q.correct) {
        await fetch("/api/mistake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chapterId: chapterId || topic,
            question: q.question,
            selectedAnswer: selected,
            correctAnswer: q.correct,
          }),
        }).catch(() => {});
      }
    });

    // Award XP
    const correct = assignment.questions.filter((q: Question) => answers[q.id] === q.correct).length;
    const isPerfect = correct === assignment.questions.length;
    fetch("/api/xp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: isPerfect ? "quiz_perfect" : "quiz_complete" }),
    }).catch(() => {});
  }

  const score = assignment
    ? assignment.questions.reduce((sum: number, q: Question) => {
        if (!submitted) return sum;
        if (answers[q.id] === q.correct) return sum + q.marks;
        if (answers[q.id] && q.negativeMarks) return sum + q.negativeMarks;
        return sum;
      }, 0)
    : 0;

  const maxScore = assignment
    ? assignment.questions.reduce((sum: number, q: Question) => sum + q.marks, 0)
    : 0;

  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Assignment Generator</h1>
        <p className="text-zinc-400">Auto-generate practice assignments with solutions for any topic and exam.</p>
      </div>

      {/* Config Panel */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-300 mb-2">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='e.g. "Electrochemistry", "SN1 vs SN2", "Chemical Equilibrium"'
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Or Select Chapter</label>
            <select
              value={chapterId}
              onChange={(e) => setChapterId(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
            >
              <option value="">— Select Chapter —</option>
              {masterSyllabus.map((ch) => (
                <option key={ch.id} value={ch.id}>{ch.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Exam</label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
            >
              {EXAMS.map((e) => <option key={e}>{e}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Difficulty</label>
            <div className="flex gap-2 flex-wrap">
              {["easy", "medium", "hard", "mixed"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border capitalize transition ${
                    difficulty === d
                      ? "bg-cyan-500 border-cyan-500 text-black"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Questions: <span className="text-cyan-400">{totalQuestions}</span>
            </label>
            <input
              type="range" min="5" max="30" step="5"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-zinc-600 mt-1">
              <span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Question Types</label>
            <div className="flex flex-wrap gap-2">
              {QUESTION_TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => toggleType(t.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                    selectedTypes.includes(t.value)
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Language</label>
            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLanguage(l.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                    language === l.value
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generate}
          disabled={loading || (!topic && !chapterId)}
          className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-semibold py-3 rounded-xl transition"
        >
          {loading ? "Generating Assignment..." : "Generate Assignment"}
        </button>
      </div>

      {error && (
        <div className="bg-red-950 border border-red-800 text-red-300 rounded-xl p-4 mb-6">{error}</div>
      )}

      {/* Assignment */}
      {assignment && (
        <div>
          {/* Header */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-6">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-bold">{assignment.title}</h2>
                <p className="text-zinc-400 text-sm mt-1">{assignment.topic} · {assignment.examType}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="bg-zinc-800 rounded-lg px-3 py-2 text-center">
                  <div className="font-bold text-cyan-400">{assignment.totalQuestions}</div>
                  <div className="text-zinc-500 text-xs">Questions</div>
                </div>
                <div className="bg-zinc-800 rounded-lg px-3 py-2 text-center">
                  <div className="font-bold text-green-400">{assignment.totalMarks}</div>
                  <div className="text-zinc-500 text-xs">Total Marks</div>
                </div>
                <div className="bg-zinc-800 rounded-lg px-3 py-2 text-center">
                  <div className="font-bold text-violet-400">{assignment.duration}</div>
                  <div className="text-zinc-500 text-xs">Duration</div>
                </div>
              </div>
            </div>
            {submitted && (
              <div className={`mt-4 p-4 rounded-xl text-center ${score >= maxScore * 0.7 ? "bg-green-950 border border-green-800" : "bg-red-950 border border-red-800"}`}>
                <div className="text-2xl font-bold">{score} / {maxScore}</div>
                <div className="text-sm text-zinc-300 mt-1">
                  {score >= maxScore * 0.7 ? "Excellent work! 🎯" : score >= maxScore * 0.4 ? "Good effort, keep practicing! 💪" : "Needs more practice — review the solutions below"}
                </div>
              </div>
            )}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {assignment.questions.map((q: Question, idx: number) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correct;
              return (
                <div key={q.id} className={`bg-zinc-900 border rounded-2xl p-5 transition ${
                  submitted
                    ? isCorrect ? "border-green-700" : userAns ? "border-red-800" : "border-zinc-700"
                    : "border-zinc-800"
                }`}>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-zinc-500 font-medium text-sm">Q{idx + 1}.</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                      q.difficulty === "easy" ? "border-green-700 text-green-400" :
                      q.difficulty === "medium" ? "border-violet-700 text-violet-400" :
                      "border-red-700 text-red-400"
                    }`}>{q.difficulty}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">{q.type.replace("_", " ")}</span>
                    <span className="text-xs text-zinc-600">{q.subTopic}</span>
                    <span className="ml-auto text-xs text-cyan-400">+{q.marks} / {q.negativeMarks}</span>
                  </div>

                  <p className="text-white mb-4 leading-relaxed">{q.question}</p>

                  {q.options && (
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        const letter = ["A", "B", "C", "D"][oi];
                        const isSelected = userAns === letter;
                        const isAnswer = q.correct === letter;
                        return (
                          <button
                            key={oi}
                            onClick={() => !submitted && setAnswers({ ...answers, [q.id]: letter })}
                            disabled={submitted}
                            className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition ${
                              submitted
                                ? isAnswer ? "border-green-600 bg-green-950 text-green-300"
                                  : isSelected ? "border-red-700 bg-red-950 text-red-300"
                                  : "border-zinc-800 text-zinc-500"
                                : isSelected
                                  ? "border-cyan-500 bg-cyan-950 text-cyan-300"
                                  : "border-zinc-800 text-zinc-300 hover:border-zinc-600"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {q.type === "numerical" && (
                    <input
                      type="number"
                      disabled={submitted}
                      value={answers[q.id] || ""}
                      onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                      placeholder="Enter numerical answer"
                      className="bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-white w-48 focus:outline-none focus:border-cyan-500"
                    />
                  )}

                  {submitted && (
                    <div className="mt-4 bg-zinc-800 rounded-xl p-4">
                      <div className="text-xs font-semibold text-zinc-400 mb-2">SOLUTION</div>
                      <p className="text-zinc-200 text-sm leading-relaxed">{q.solution}</p>
                      {q.tip && (
                        <div className="mt-2 text-xs text-violet-400">💡 Tip: {q.tip}</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!submitted && (
            <button
              onClick={submit}
              className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl transition"
            >
              Submit Assignment
            </button>
          )}
        </div>
      )}
    </main>
  );
}
