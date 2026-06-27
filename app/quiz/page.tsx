"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: string;
  difficulty: string;
};

const CHAPTERS = [
  { id: "atomic-structure", label: "Atomic Structure" },
  { id: "mole-concept", label: "Mole Concept" },
  { id: "chemical-equilibrium", label: "Equilibrium" },
  { id: "thermodynamics", label: "Thermodynamics" },
  { id: "electrochemistry", label: "Electrochemistry" },
  { id: "chemical-kinetics", label: "Chemical Kinetics" },
  { id: "solutions", label: "Solutions" },
  { id: "chemical-bonding", label: "Chemical Bonding" },
  { id: "goc", label: "General Organic Chemistry" },
  { id: "haloalkanes-haloarenes", label: "Haloalkanes & Haloarenes" },
  { id: "aldehydes-ketones", label: "Aldehydes & Ketones" },
  { id: "alcohols-phenols-ethers", label: "Alcohols, Phenols & Ethers" },
  { id: "amines", label: "Amines" },
  { id: "coordination-compounds", label: "Coordination Compounds" },
];

export default function QuizPage() {
  const [chapterId, setChapterId] = useState("atomic-structure");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultSaved, setResultSaved] = useState(false);
  const [started, setStarted] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setQuestions([]);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setResultSaved(false);
    setSelected(null);

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterId }),
      });
      const data = await res.json();
      setQuestions(data.questions || []);
      setStarted(true);
    } catch {
      alert("Failed to load quiz. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const saveResult = async (finalScore: number) => {
    if (resultSaved) return;
    try {
      await fetch("/api/exam-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examName: `Quiz: ${chapterId}`, score: finalScore, total: questions.length }),
      });
      const isPerfect = finalScore === questions.length;
      await fetch("/api/xp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: isPerfect ? "quiz_perfect" : "quiz_complete" }),
      });
      setResultSaved(true);
    } catch { /* silently fail */ }
  };

  const handleAnswer = async (option: string) => {
    if (selected) return;
    setSelected(option);

    const currentQ = questions[current];
    const isCorrect = option === currentQ.answer;
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(newScore);

    if (!isCorrect) {
      fetch("/api/mistake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chapterId,
          question: currentQ.question,
          selectedAnswer: option,
          correctAnswer: currentQ.answer,
          difficulty: currentQ.difficulty,
        }),
      }).catch(() => {});
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
      } else {
        setFinished(true);
        saveResult(newScore);
      }
    }, 1000);
  };

  // Chapter selection screen
  if (!started) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg space-y-6">
          <h1 className="text-3xl font-black text-center">Quiz Mode</h1>
          <p className="text-slate-400 text-center text-sm">5 AI-generated questions per chapter</p>

          <div className="bg-slate-900 rounded-2xl p-6 space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Select Chapter</label>
            <div className="grid grid-cols-1 gap-2 max-h-72 overflow-y-auto pr-1">
              {CHAPTERS.map((ch) => (
                <button key={ch.id} onClick={() => setChapterId(ch.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold border transition ${
                    chapterId === ch.id
                      ? "bg-indigo-600 border-indigo-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500"
                  }`}>
                  {ch.label}
                </button>
              ))}
            </div>

            <button onClick={startQuiz} disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-black rounded-xl transition hover:opacity-90 disabled:opacity-50">
              {loading ? "Loading questions..." : "Start Quiz"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center space-y-6 max-w-sm">
          <div className="text-6xl">{pct === 100 ? "🏆" : pct >= 60 ? "🎯" : "📚"}</div>
          <h1 className="text-3xl font-black">Quiz Complete!</h1>
          <p className="text-5xl font-black text-indigo-400">{score}/{questions.length}</p>
          <p className="text-slate-400">{pct}% accuracy</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setStarted(false); }}
              className="px-6 py-3 bg-slate-800 rounded-xl font-semibold text-sm hover:bg-slate-700 transition">
              Change Chapter
            </button>
            <button onClick={startQuiz}
              className="px-6 py-3 bg-indigo-600 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition">
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[current];
  if (!currentQ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="animate-pulse">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-300">
            {CHAPTERS.find((c) => c.id === chapterId)?.label ?? chapterId}
          </h1>
          <span className="text-slate-400 text-sm">{current + 1} / {questions.length}</span>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-1.5">
          <div className="bg-indigo-500 h-1.5 rounded-full transition-all"
            style={{ width: `${((current) / questions.length) * 100}%` }} />
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-5">
          <p className="text-base font-semibold leading-relaxed">{currentQ.question}</p>

          <div className="space-y-3">
            {Object.entries(currentQ.options).map(([key, value]) => (
              <button key={key} onClick={() => handleAnswer(key)} disabled={!!selected}
                className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition ${
                  selected === key
                    ? key === currentQ.answer
                      ? "bg-green-600 border-green-500 text-white"
                      : "bg-red-600 border-red-500 text-white"
                    : selected && key === currentQ.answer
                    ? "bg-green-600 border-green-500 text-white"
                    : "bg-slate-800 border-slate-700 hover:border-slate-500 disabled:cursor-default"
                }`}>
                <span className="font-black mr-2">{key}.</span>{value}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm">Score: {score}</div>
      </div>
    </div>
  );
}
