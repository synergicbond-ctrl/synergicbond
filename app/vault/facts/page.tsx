import { highYieldNotes } from "@/lib/masterSyllabus/notes";

export default function FactsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Quick Facts</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          High-yield notes and must-know facts for last-minute revision.
        </p>
      </header>

      <div className="space-y-4">
        {highYieldNotes.map((note, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-black text-slate-800 dark:text-white">{note.title}</h3>
              <span className="shrink-0 text-xs font-bold px-2 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                {note.chapterId}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
