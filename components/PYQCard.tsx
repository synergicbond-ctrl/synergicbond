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
    <div className={`p-4 rounded-2xl border border-[var(--border)] dark:border-[var(--border)] bg-slate-50/40 dark:bg-[var(--background)]/50 space-y-3 ${
      isJee ? "border-rose-50/50" : "border-indigo-50/50"
    }`}>
      <span className={`text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded ${
        isJee 
          ? "bg-rose-50 dark:bg-[var(--surface-2)] text-rose-600"
          : "bg-indigo-50 dark:bg-[var(--surface-2)] text-indigo-600"
      }`}>
        {examTag}
      </span>
      <p className="text-xs font-bold leading-relaxed">Q: {question}</p>
      <details className="text-[11px] text-slate-600 dark:text-[var(--text-muted)] space-y-2 border-t border-[var(--border)]/50 dark:border-[var(--border-strong)]/50 pt-2">
        <summary className="font-bold text-slate-700 dark:text-[var(--text-body)] cursor-pointer select-none">
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
