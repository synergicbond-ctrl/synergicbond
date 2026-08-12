import Link from "next/link";
import SavedRevisionList from "@/components/revision/SavedRevisionList";

// ─────────────────────────────────────────────────────────────────────────────
// /revision — Revision Queue (Dashboard Simplification pass: Memory System +
// Revision Engine merged here). Saved Attempts moved to /tests/history (now
// "Test History", under Tests where it belongs). Daily Revision Queue
// (SM-2 spaced repetition, /memory) is cross-linked below instead of
// duplicated — one data store, reachable from one destination.
// ─────────────────────────────────────────────────────────────────────────────

export default function RevisionPage() {
  const revisionModules = [
    {
      type: "5min",
      title: "5-Minute High-Yield Blitz",
      description: "Rapid review of critical physical anomalies, organic name reactions, and inorganic exceptions.",
      time: "5 min",
      color: "bg-indigo-50 border-indigo-100 text-indigo-900"
    },
    {
      type: "examDay",
      title: "One-Day-Before-Exam Refresher",
      description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
      time: "45 min",
      color: "bg-violet-50 border-violet-100 text-violet-900"
    },
    {
      type: "formula",
      title: "Formula & Constants Recall",
      description: "Drill on exact expressions, variables, units, and common numeric traps.",
      time: "10 min",
      color: "bg-cyan-50 border-cyan-100 text-cyan-900"
    },
    {
      type: "reaction",
      title: "Name Reactions & Mechanisms",
      description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
      time: "10 min",
      color: "bg-purple-50 border-purple-100 text-purple-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Revision Queue</h1>
        <p className="text-slate-600 mt-1">Daily spaced-repetition due cards plus targeted, high-yield revision sessions — in one place.</p>
      </header>

      {/* Daily Revision Queue (Memory Engine, SM-2) — merged in here, not duplicated */}
      <Link
        href="/memory?deck=daily"
        className="flex items-center justify-between gap-4 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 shadow-sm transition hover:border-cyan-300"
      >
        <div>
          <h2 className="text-2xl font-bold text-cyan-900">Daily Revision Queue →</h2>
          <p className="mt-1 text-sm text-cyan-800/80">
            Every spaced-repetition card due today, across all decks — graded with SM-2 so weak cards come back sooner.
          </p>
        </div>
        <span className="text-3xl">🧠</span>
      </Link>

      {/* Revision Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionModules.map((module, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border ${module.color} flex flex-col justify-between h-48 shadow-sm`}>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <span className="text-xs font-black px-2 py-0.5 rounded bg-white/60 backdrop-blur-sm">
                  {module.time}
                </span>
              </div>
              <p className="text-sm mt-2 opacity-90">{module.description}</p>
            </div>
            
            <Link 
              href={`/revision/${module.type}`} 
              className="mt-4 w-full py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-center rounded-xl transition shadow-sm"
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>

      {/* Mistake Journal entry (Week 6) */}
      <Link
        href="/mistakes"
        className="flex items-center justify-between gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm transition hover:border-rose-300"
      >
        <div>
          <h2 className="text-2xl font-bold text-rose-900">Mistake Journal →</h2>
          <p className="mt-1 text-sm text-rose-700/80">
            Every question you got wrong, categorised, with a one-tap reattempt queue.
          </p>
        </div>
        <span className="text-3xl">📓</span>
      </Link>

      {/* One-Tap Revision saved items (Week 7) */}
      <SavedRevisionList />

      {/* Weak Topic Custom Search */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Drill a Custom Weak Topic</h2>
        <p className="text-sm text-slate-600 mb-4">Enter a specific concept, reaction, or formula that needs targeted practice.</p>
        <form action="/revision/weakTopic" method="GET" className="flex gap-4">
          <input 
            type="text" 
            name="topic" 
            placeholder="e.g. SN1 vs SN2, Buffer solutions, CFT splitting..." 
            className="flex-1 p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition">
            Generate Session
          </button>
        </form>
      </section>

      {/* Smart Timers — a study utility, not a test type, so it lives here not under Tests */}
      <p className="text-center text-sm text-slate-500">
        <Link href="/timers" className="font-semibold text-indigo-600 hover:underline">
          ⏱ Smart Timers — Pomodoro, deep work & exam simulation →
        </Link>
      </p>

    </div>
  );
}
