import React from "react";

interface PYQCardProps {
  examTag: string;
  question: string;
  hint: string;
  solution: string;
  relatedConcept: string;
  difficulty: string;
}

export default function PYQCard({
  examTag,
  question,
  hint,
  solution,
  relatedConcept,
  difficulty,
}: PYQCardProps) {
  const isJee = examTag.includes("JEE");
  
  return (
    <div className={`p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/50 space-y-3 ${
      isJee ? "border-rose-50/50" : "border-indigo-50/50"
    }`}>
      <span className={`text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded ${
        isJee 
          ? "bg-rose-50 dark:bg-slate-800 text-rose-600" 
          : "bg-indigo-50 dark:bg-slate-800 text-indigo-600"
      }`}>
        {examTag}
      </span>
      <p className="text-xs font-bold leading-relaxed">Q: {question}</p>
      <details className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2 border-t border-slate-200/50 dark:border-slate-700/50 pt-2">
        <summary className="font-bold text-slate-700 dark:text-slate-300 cursor-pointer select-none">
          Reveal Hint, Solution & Details
        </summary>
        <p className="pt-2"><strong>Hint:</strong> {hint}</p>
        <p><strong>Solution:</strong> {solution}</p>
        <p><strong>Related Concept:</strong> {relatedConcept}</p>
        <p><strong>Difficulty:</strong> {difficulty}</p>
      </details>
    </div>
  );
}
