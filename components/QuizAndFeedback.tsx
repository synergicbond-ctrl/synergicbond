"use client";

import { useState } from "react";

interface Question {
  id: string;
  text: string;
  options: string[];
  answer: string;
  solution: string;
}

export default function QuizAndFeedback({ questions, chapterId }: { questions: Question[]; chapterId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [aiExplain, setAiExplain] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-500 font-medium">
        No questions loaded for this learning drill.
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleOptionSelect = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsAnswered(true);
  };

  const handleAskAITutor = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Explain why the answer for this question is: ${currentQ.solution}`,
          chapterId: chapterId,
        })
      });
      const data = await res.json();
      setAiExplain(data.reply || "Knowledge graph context hydrated.");
    } catch (err) {
      setAiExplain("Failed to connect to Knowledge Graph Tutor.");
    } finally {
      setLoadingAi(false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setAiExplain(null);
    setCurrentIndex((prev) => (prev + 1 < questions.length ? prev + 1 : 0));
  };

  const isCorrect = selectedOption ? selectedOption.startsWith(currentQ.answer) : false;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 max-w-2xl mx-auto space-y-6">
      
      {/* Progress */}
      <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
        <span>Question {currentIndex + 1} of {questions.length}</span>
        <span>Target: {chapterId}</span>
      </div>

      {/* Question Text */}
      <div>
        <h3 className="text-lg font-bold text-slate-800">{currentQ.text}</h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQ.options.map((opt) => {
          let optStyle = "bg-slate-50 border-slate-200 hover:border-indigo-500 text-slate-700";
          
          if (isAnswered) {
            if (opt.startsWith(currentQ.answer)) {
              optStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold"; // Correct answer
            } else if (selectedOption === opt && !isCorrect) {
              optStyle = "bg-red-50 border-red-500 text-red-900 font-bold"; // Wrong user selection
            } else {
              optStyle = "bg-slate-50 border-slate-200 opacity-60 text-slate-500";
            }
          } else if (selectedOption === opt) {
            optStyle = "bg-indigo-50 border-indigo-600 text-indigo-900 font-bold";
          }

          return (
            <button
              key={opt}
              disabled={isAnswered}
              onClick={() => handleOptionSelect(opt)}
              className={`w-full text-left p-4 rounded-xl border transition ${optStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Submit / Action Controls */}
      {!isAnswered ? (
        <button 
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-sm"
        >
          Submit & Evaluate
        </button>
      ) : (
        <div className="space-y-4 pt-4 border-t border-slate-100 animate-fadeIn">
          <div className={`p-4 rounded-xl text-sm font-bold flex items-center justify-between ${
            isCorrect ? "bg-emerald-50 text-emerald-800 border border-emerald-100" : "bg-red-50 text-red-800 border border-red-100"
          }`}>
            <span>{isCorrect ? "🎉 Absolutely Correct!" : "❌ Incorrect Answer"}</span>
            <span className="text-xs font-normal underline cursor-pointer" onClick={handleAskAITutor}>
              {loadingAi ? "Consulting AI Tutor..." : "Ask AI Tutor for Breakdown"}
            </span>
          </div>

          {/* Solution Breakdown */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700 text-sm space-y-1">
            <span className="text-[10px] font-black uppercase text-indigo-600 tracking-wider block">Syllabus Master Deduction</span>
            <p className="leading-relaxed">{currentQ.solution}</p>
          </div>

          {/* AI Tutor Explanation Hydration */}
          {aiExplain && (
            <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100 text-indigo-950 text-xs space-y-1 animate-fadeIn">
              <span className="text-[10px] font-black uppercase text-indigo-700 tracking-wider block">Relational AI Analysis</span>
              <p className="leading-relaxed">{aiExplain}</p>
            </div>
          )}

          <button 
            onClick={handleNext}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition"
          >
            {currentIndex + 1 < questions.length ? "Next Question" : "Restart Learning Drill"}
          </button>
        </div>
      )}

    </div>
  );
}
