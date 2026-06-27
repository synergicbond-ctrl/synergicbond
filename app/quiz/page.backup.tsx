"use client";

import { useEffect, useState } from "react";

type Question = {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
  difficulty: string;
};

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Load quiz from backend
  useEffect(() => {
    fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chapterId: "mole-concept" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions || []);
      });
  }, []);

  const currentQ = questions[current];

  const handleAnswer = async (option: string) => {
    setSelected(option);

    const isCorrect = option === currentQ.answer;

    if (isCorrect) setScore((s) => s + 1);

    // 🚨 AUTO MISTAKE TRACKING
    if (!isCorrect) {
      await fetch("/api/mistake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "demo-user",
          chapterId: "mole-concept",
          question: currentQ.question,
          selectedAnswer: option,
          correctAnswer: currentQ.answer,
          difficulty: currentQ.difficulty,
        }),
      });
    }

    setTimeout(() => {
      setSelected(null);

      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Quiz Finished 🎯</h1>
          <p className="mt-4 text-xl">
            Score: {score} / {questions.length}
          </p>
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading quiz...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
      
      <h1 className="text-2xl font-bold mb-6">🧠 Quiz Mode</h1>

      <div className="w-full max-w-2xl bg-slate-900 p-6 rounded-xl">

        <h2 className="text-lg font-semibold mb-4">
          Q{current + 1}. {currentQ.question}
        </h2>

        <div className="space-y-3">
          {Object.entries(currentQ.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className={`w-full p-3 rounded-lg border transition ${
                selected === key
                  ? key === currentQ.answer
                    ? "bg-green-600"
                    : "bg-red-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {key}: {value}
            </button>
          ))}
        </div>

      </div>

      <div className="mt-6 text-sm text-slate-400">
        Score: {score}
      </div>

    </div>
  );
}