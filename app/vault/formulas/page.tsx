import { masterFormulas } from "@/lib/masterSyllabus/formulas";

const CHAPTER_LABELS: Record<string, string> = {
  "atomic-structure": "Atomic Structure",
  "mole-concept": "Mole Concept",
  "chemical-equilibrium": "Equilibrium",
  "thermodynamics": "Thermodynamics",
  "electrochemistry": "Electrochemistry",
  "chemical-kinetics": "Chemical Kinetics",
  "solutions": "Solutions",
};

export default function FormulasPage() {
  const chapters = Object.entries(masterFormulas);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Formula Vault</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Every key formula with meaning, shortcuts, and common mistakes.
        </p>
      </header>

      {chapters.map(([chapterId, formulas]) => (
        <section key={chapterId}>
          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            {CHAPTER_LABELS[chapterId] ?? chapterId}
          </h2>
          <div className="space-y-4">
            {formulas.map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-800 dark:text-white mb-3">{f.title}</h3>

                <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 font-mono text-sm text-indigo-800 dark:text-indigo-300 mb-4 overflow-x-auto">
                  {f.expression}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div><span className="font-semibold text-slate-700 dark:text-slate-300">Meaning: </span>{f.meaning}</div>
                  <div><span className="font-semibold text-slate-700 dark:text-slate-300">Units: </span>{f.units}</div>
                  {f.shortcut && (
                    <div className="md:col-span-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <span className="font-semibold text-amber-700 dark:text-amber-400">Shortcut: </span>{f.shortcut}
                    </div>
                  )}
                  {f.commonMistakes && (
                    <div className="md:col-span-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                      <span className="font-semibold text-red-700 dark:text-red-400">Common Mistake: </span>{f.commonMistakes}
                    </div>
                  )}
                  {f.pyqContext && (
                    <div className="md:col-span-2 text-xs text-slate-400 italic">PYQ context: {f.pyqContext}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
