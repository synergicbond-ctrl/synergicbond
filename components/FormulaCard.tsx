import React from "react";

interface FormulaCardProps {
  title: string;
  expression: string;
  meaning: string;
  units: string;
  derivation: string;
  shortcut: string;
  commonMistakes: string;
  pyqContext: string;
}

export default function FormulaCard({
  title,
  expression,
  meaning,
  units,
  derivation,
  shortcut,
  commonMistakes,
  pyqContext,
}: FormulaCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2 space-y-4 border-r border-slate-100 dark:border-slate-800 pr-4">
        <div>
          <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-100">{title}</h3>
          <code className="text-sm font-mono mt-1 inline-block bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-xl tracking-tight">
            {expression}
          </code>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong className="text-slate-800 dark:text-slate-200">Meaning:</strong> {meaning}
        </p>
        <p className="text-[10px] text-slate-500">
          <strong className="text-slate-700 dark:text-slate-400">Units:</strong> {units}
        </p>
        <p className="text-[10px] text-indigo-600 dark:text-indigo-400 bg-indigo-50/40 dark:bg-slate-800 p-2 rounded-xl leading-relaxed">
          <strong className="block font-bold">Derivation Pathway:</strong> {derivation}
        </p>
      </div>
      <div className="space-y-4">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Shortcut / Trick</span>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{shortcut}</p>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900 space-y-1">
          <span className="text-[9px] font-extrabold text-amber-700 dark:text-amber-500 uppercase tracking-widest">Common Mistake</span>
          <p className="text-[11px] font-semibold text-amber-900 dark:text-amber-200 leading-relaxed">{commonMistakes}</p>
        </div>
        <div className="text-[10px] text-slate-500 font-semibold border-t border-slate-100 pt-2">
          Related PYQ Context: {pyqContext}
        </div>
      </div>
    </div>
  );
}
