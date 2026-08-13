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
      color: "border-cyan-400/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),transparent_55%),#111827] text-cyan-200",
      button: "border-cyan-400/35 text-cyan-200 hover:bg-cyan-500/15",
    },
    {
      type: "examDay",
      title: "One-Day-Before-Exam Refresher",
      description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
      time: "45 min",
      color: "border-violet-400/30 bg-[linear-gradient(135deg,rgba(139,92,246,0.20),transparent_55%),#111827] text-violet-200",
      button: "border-violet-400/35 text-violet-200 hover:bg-violet-500/15",
    },
    {
      type: "formula",
      title: "Formula & Constants Recall",
      description: "Drill on exact expressions, variables, units, and common numeric traps.",
      time: "10 min",
      color: "border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.17),transparent_55%),#111827] text-emerald-200",
      button: "border-emerald-400/35 text-emerald-200 hover:bg-emerald-500/15",
    },
    {
      type: "reaction",
      title: "Name Reactions & Mechanisms",
      description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
      time: "10 min",
      color: "border-amber-300/30 bg-[linear-gradient(135deg,rgba(251,191,36,0.17),rgba(244,63,94,0.08),transparent_55%),#111827] text-amber-100",
      button: "border-amber-300/35 text-amber-200 hover:bg-amber-500/15",
    }
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_92%_0%,rgba(139,92,246,0.14),transparent_25%),radial-gradient(circle_at_5%_8%,rgba(34,211,238,0.11),transparent_28%),#0B0F19] text-white">
    <div className="mx-auto max-w-7xl space-y-10 p-6 md:p-12">
      
      {/* Header */}
      <header className="rounded-3xl border border-violet-400/20 bg-[linear-gradient(110deg,rgba(139,92,246,0.16),transparent_48%,rgba(34,211,238,0.08)),#111827] p-6 shadow-[0_26px_65px_-48px_rgba(139,92,246,0.85)]">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.34em] text-violet-300">Memory laboratory</p>
        <h1 className="font-serif text-4xl font-black tracking-tight text-white">Revision Queue</h1>
        <p className="mt-2 text-white/60">Daily spaced-repetition due cards plus targeted, high-yield revision sessions — in one place.</p>
      </header>

      {/* Daily Revision Queue (Memory Engine, SM-2) — merged in here, not duplicated */}
      <Link
        href="/memory?deck=daily"
        className="flex items-center justify-between gap-4 rounded-2xl border border-cyan-400/35 bg-[linear-gradient(115deg,rgba(34,211,238,0.18),rgba(16,185,129,0.08),transparent),#111827] p-6 shadow-[0_24px_60px_-46px_rgba(34,211,238,0.9)] transition hover:-translate-y-0.5 hover:border-cyan-300/75"
      >
        <div>
          <h2 className="font-serif text-2xl font-black text-cyan-200">Daily Revision Queue →</h2>
          <p className="mt-1 text-sm text-cyan-100/75">
            Every spaced-repetition card due today, across all decks — graded with SM-2 so weak cards come back sooner.
          </p>
        </div>
        <span className="text-3xl">🧠</span>
      </Link>

      {/* Revision Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionModules.map((module, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border ${module.color} flex flex-col justify-between min-h-52 shadow-[0_24px_60px_-48px_rgba(0,0,0,0.95)]`}>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <span className="text-xs font-black px-2 py-0.5 rounded border border-white/15 bg-black/25 backdrop-blur-sm text-white/85">
                  {module.time}
                </span>
              </div>
              <p className="text-sm mt-2 text-white/65">{module.description}</p>
            </div>
            
            <Link 
              href={`/revision/${module.type}`} 
              className={`mt-4 w-full rounded-xl border bg-black/20 py-3 text-center font-bold transition ${module.button}`}
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>

      {/* Mistake Journal entry (Week 6) */}
      <Link
        href="/mistakes"
        className="flex items-center justify-between gap-4 rounded-2xl border border-rose-400/30 bg-[linear-gradient(115deg,rgba(244,63,94,0.16),rgba(251,191,36,0.08),transparent),#111827] p-6 shadow-[0_24px_60px_-46px_rgba(244,63,94,0.8)] transition hover:-translate-y-0.5 hover:border-rose-300/75"
      >
        <div>
          <h2 className="font-serif text-2xl font-black text-rose-200">Mistake Journal →</h2>
          <p className="mt-1 text-sm text-rose-100/75">
            Every question you got wrong, categorised, with a one-tap reattempt queue.
          </p>
        </div>
        <span className="text-3xl">📓</span>
      </Link>

      {/* One-Tap Revision saved items (Week 7) */}
      <SavedRevisionList />

      {/* Weak Topic Custom Search */}
      <section className="rounded-2xl border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.11),transparent_45%),#111827] p-6 shadow-[0_24px_60px_-48px_rgba(251,191,36,0.75)]">
        <h2 className="mb-2 font-serif text-2xl font-black text-amber-200">Drill a Custom Weak Topic</h2>
        <p className="mb-4 text-sm text-white/60">Enter a specific concept, reaction, or formula that needs targeted practice.</p>
        <form action="/revision/weakTopic" method="GET" className="flex gap-4">
          <input 
            type="text" 
            name="topic" 
            placeholder="e.g. SN1 vs SN2, Buffer solutions, CFT splitting..." 
            className="flex-1 rounded-xl border border-white/15 bg-black/30 p-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
            required
          />
          <button type="submit" className="rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 font-bold text-black transition hover:brightness-110">
            Generate Session
          </button>
        </form>
      </section>

      {/* Smart Timers — a study utility, not a test type, so it lives here not under Tests */}
      <p className="text-center text-sm text-white/45">
        <Link href="/timers" className="font-semibold text-violet-300 hover:underline">
          ⏱ Smart Timers — Pomodoro, deep work & exam simulation →
        </Link>
      </p>

    </div>
    </main>
  );
}
