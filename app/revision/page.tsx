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
      color: "border-[var(--accent)]/30 bg-[var(--surface)] text-[var(--foreground)]",
      button: "border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10",
    },
    {
      type: "examDay",
      title: "One-Day-Before-Exam Refresher",
      description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
      time: "45 min",
      color: "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]",
      button: "border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)]",
    },
    {
      type: "formula",
      title: "Formula & Constants Recall",
      description: "Drill on exact expressions, variables, units, and common numeric traps.",
      time: "10 min",
      color: "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]",
      button: "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-hover)]",
    },
    {
      type: "reaction",
      title: "Name Reactions & Mechanisms",
      description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
      time: "10 min",
      color: "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]",
      button: "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-hover)]",
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <div className="mx-auto max-w-7xl space-y-10 p-6 md:p-12">

      {/* Header */}
      <header className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.34em] text-[var(--text-muted)]">Memory laboratory</p>
        <h1 className="font-display text-4xl font-black tracking-tight text-[var(--foreground)]">Revision Queue</h1>
        <p className="mt-2 text-[var(--text-muted)]">Daily spaced-repetition due cards plus targeted, high-yield revision sessions — in one place.</p>
      </header>

      {/* Daily Revision Queue (Memory Engine, SM-2) — merged in here, not duplicated */}
      <Link
        href="/memory?deck=daily"
        className="flex items-center justify-between gap-4 rounded-lg border border-[var(--accent)]/30 bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50"
      >
        <div>
          <h2 className="font-display text-2xl font-black text-[var(--accent)]">Daily Revision Queue →</h2>
          <p className="mt-1 text-sm text-[var(--accent)]/75">
            Every spaced-repetition card due today, across all decks — graded with SM-2 so weak cards come back sooner.
          </p>
        </div>
        <span className="text-3xl">🧠</span>
      </Link>

      {/* Revision Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionModules.map((module, idx) => (
          <div key={idx} className={`p-6 rounded-lg border ${module.color} flex flex-col justify-between min-h-52`}>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <span className="text-xs font-black px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)]">
                  {module.time}
                </span>
              </div>
              <p className="text-sm mt-2 text-[var(--text-muted)]">{module.description}</p>
            </div>

            <Link
              href={`/revision/${module.type}`}
              className={`mt-4 w-full rounded-lg border bg-[var(--surface-2)] py-3 text-center font-bold transition ${module.button}`}
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>

      {/* Mistake Journal entry (Week 6) */}
      <Link
        href="/mistakes"
        className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
      >
        <div>
          <h2 className="font-display text-2xl font-black text-[var(--foreground)]">Mistake Journal →</h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Every question you got wrong, categorised, with a one-tap reattempt queue.
          </p>
        </div>
        <span className="text-3xl">📓</span>
      </Link>

      {/* One-Tap Revision saved items (Week 7) */}
      <SavedRevisionList />

      {/* Weak Topic Custom Search */}
      <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="mb-2 font-display text-2xl font-black text-[var(--foreground)]">Drill a Custom Weak Topic</h2>
        <p className="mb-4 text-sm text-[var(--text-muted)]">Enter a specific concept, reaction, or formula that needs targeted practice.</p>
        <form action="/revision/weakTopic" method="GET" className="flex gap-4">
          <input
            type="text"
            name="topic"
            placeholder="e.g. SN1 vs SN2, Buffer solutions, CFT splitting..."
            className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3 text-[var(--foreground)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]"
            required
          />
          <button type="submit" className="rounded-lg bg-[var(--accent)] px-6 py-3 font-bold text-[var(--background)] transition hover:brightness-110">
            Generate Session
          </button>
        </form>
      </section>

      {/* Smart Timers — a study utility, not a test type, so it lives here not under Tests */}
      <p className="text-center text-sm text-[var(--text-muted)]/45">
        <Link href="/timers" className="font-semibold text-[var(--text-muted)] hover:underline">
          ⏱ Smart Timers — Pomodoro, deep work & exam simulation →
        </Link>
      </p>

    </div>
    </main>
  );
}
