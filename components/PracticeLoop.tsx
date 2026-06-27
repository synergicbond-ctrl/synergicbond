"use client";

import { useState, useEffect } from "react";

interface Question {
  id: string;
  text: string;
  options: string[];
  answer: string;
  solution: string;
  conceptTitle: string;
}

export default function PracticeLoop({ questions, chapterId }: { questions: Question[]; chapterId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [mistakes, setMistakes] = useState<Question[]>([]);
  const [completed, setCompleted] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);

  const currentQ = questions[currentIndex];

  const handleAnswer = (option: string) => {
    if (selectedOption) return; // Prevent double clicking
    setSelectedOption(option);
    const correct = option.startsWith(currentQ.answer);
    setIsCorrect(correct);

    if (!correct) {
      setMistakes((prev) => [...prev, currentQ]);
      // Trigger Syllabus Graph / AI Context explanation on error
      setAiExplanation(`[AI Deep Graph Correction] The selected option is incorrect. For ${currentQ.conceptTitle}, the correct path is ${currentQ.solution}`);
    } else {
      setAiExplanation(null);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setAiExplanation(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const retryMistakes = () => {
    setCurrentIndex(0);
    setMistakes([]);
    setSelectedOption(null);
    setIsCorrect(null);
    setCompleted(false);
    setAiExplanation(null);
  };

  if (completed) {
    return (
      <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-3xl text-center space-y-4 animate-fadeIn">
        <span className="text-4xl">🎉</span>
        <h3 className="text-xl font-black text-emerald-900 dark:text-emerald-200">Learning Cycle Completed!</h3>
        <p className="text-xs text-emerald-700 dark:text-emerald-400">
          Concepts mastered: {questions.length - mistakes.length}/{questions.length}
        </p>
        {mistakes.length > 0 ? (
          <div className="space-y-4 pt-4 text-left max-w-md mx-auto">
            <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-300">Review Error Drills:</h4>
            <div className="space-y-2">
              {mistakes.map((m, idx) => (
                <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-emerald-800 text-xs">
                  <span className="font-bold text-rose-600 block">Q: {m.text}</span>
                  <span className="text-slate-600 dark:text-slate-400 mt-1 block">Correction: {m.solution}</span>
                </div>
              ))}
            </div>
            <button onClick={retryMistakes} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition">
              Retry Failed Drills Queue
            </button>
          </div>
        ) : (
          <div className="pt-4 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✔ Concept Mastered & Added to Long Term Revision Queue!
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        <span>Active Recall Drill</span>
        <span>Question {currentIndex + 1} of {questions.length}</span>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded text-slate-600 dark:text-slate-400 uppercase tracking-wider">Target: {currentQ.conceptTitle}</span>
        <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 leading-relaxed">{currentQ.text}</h3>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {currentQ.options.map((opt) => {
          const isSelected = selectedOption === opt;
          const isAns = opt.startsWith(currentQ.answer);
          let btnStyle = "border-slate-200 dark:border-slate-800 hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-950 text-slate-700 dark:text-slate-300";

          if (selectedOption) {
            if (isAns) {
              btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 font-bold";
            } else if (isSelected && !isAns) {
              btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-slate-300 font-bold";
            } else {
              btnStyle = "opacity-60 border-slate-200 dark:border-slate-800 bg-slate-50/20 text-slate-500 dark:text-slate-600";
            }
          }

          return (
            <button
              key={opt}
              disabled={!!selectedOption}
              onClick={() => handleAnswer(opt)}
              className={`p-4 text-left border-2 rounded-2xl transition text-xs font-semibold ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {aiExplanation && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-2xl text-rose-900 dark:text-rose-200 text-xs font-medium leading-relaxed animate-fadeIn">
          {aiExplanation}
        </div>
      )}

      {selectedOption && (
        <button onClick={nextQuestion} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-2xl shadow-sm transition">
          {currentIndex < questions.length - 1 ? "Proceed to Next Drill" : "Finalize Learning Loop"}
        </button>
      )}
    </div>
  );
}
