import Link from "next/link";
import SavedRevisionList from "@/components/revision/SavedRevisionList";

type RevisionWorkspaceProps = {
  /** Route prefix for sessions launched from this workspace. */
  baseHref?: string;
  /** The selected programme context, when this page was entered from a portal. */
  scopeLabel?: string;
};

const REVISION_MODULES = [
  {
    type: "5min",
    title: "5-Minute High-Yield Blitz",
    description: "Rapid review of critical physical anomalies, organic name reactions, and inorganic exceptions.",
    time: "5 min",
    color: "bg-indigo-50 border-indigo-100 text-indigo-900",
  },
  {
    type: "examDay",
    title: "One-Day-Before-Exam Refresher",
    description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
    time: "45 min",
    color: "bg-violet-50 border-violet-100 text-violet-900",
  },
  {
    type: "formula",
    title: "Formula & Constants Recall",
    description: "Drill on exact expressions, variables, units, and common numeric traps.",
    time: "10 min",
    color: "bg-cyan-50 border-cyan-100 text-cyan-900",
  },
  {
    type: "reaction",
    title: "Name Reactions & Mechanisms",
    description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
    time: "10 min",
    color: "bg-purple-50 border-purple-100 text-purple-900",
  },
] as const;

/**
 * Reuses the revision UI for generic and programme-entry routes. The selected
 * programme controls navigation and access; existing recall/saved-item stores
 * remain device-wide until they gain a programme key, so the copy says so.
 */
export default function RevisionWorkspace({ baseHref = "/revision", scopeLabel }: RevisionWorkspaceProps) {
  const contextMessage = scopeLabel
    ? `You entered from ${scopeLabel}. Revision session links stay in this programme context. The current recall and saved-item stores are device-wide, so their items are not program-filtered.`
    : null;

  return (
    <div className="min-h-screen max-w-7xl space-y-10 bg-slate-50 p-6 text-slate-900 md:p-12">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Revision Queue{scopeLabel ? ` · ${scopeLabel}` : ""}
        </h1>
        <p className="mt-1 text-slate-600">Daily spaced-repetition due cards plus targeted, high-yield revision sessions — in one place.</p>
      </header>

      {contextMessage && (
        <aside className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">
          <span className="font-bold">Programme context:</span> {contextMessage}
        </aside>
      )}

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {REVISION_MODULES.map((module) => (
          <div key={module.type} className={`flex h-48 flex-col justify-between rounded-2xl border p-6 shadow-sm ${module.color}`}>
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <span className="rounded bg-white/60 px-2 py-0.5 text-xs font-black backdrop-blur-sm">{module.time}</span>
              </div>
              <p className="mt-2 text-sm opacity-90">{module.description}</p>
            </div>
            <Link
              href={`${baseHref}/${module.type}`}
              className="mt-4 w-full rounded-xl bg-white py-3 text-center font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/mistakes"
        className="flex items-center justify-between gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm transition hover:border-rose-300"
      >
        <div>
          <h2 className="text-2xl font-bold text-rose-900">Mistake Journal →</h2>
          <p className="mt-1 text-sm text-rose-700/80">Every question you got wrong, categorised, with a one-tap reattempt queue.</p>
        </div>
        <span className="text-3xl">📓</span>
      </Link>

      <SavedRevisionList />

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-slate-800">Drill a Custom Weak Topic</h2>
        <p className="mb-4 text-sm text-slate-600">Enter a specific concept, reaction, or formula that needs targeted practice.</p>
        <form action={`${baseHref}/weakTopic`} method="GET" className="flex gap-4">
          <input
            type="text"
            name="topic"
            placeholder="e.g. SN1 vs SN2, Buffer solutions, CFT splitting..."
            className="flex-1 rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <button type="submit" className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700">
            Generate Session
          </button>
        </form>
      </section>

      <p className="text-center text-sm text-slate-500">
        <Link href="/timers" className="font-semibold text-indigo-600 hover:underline">
          ⏱ Smart Timers — Pomodoro, deep work & exam simulation →
        </Link>
      </p>
    </div>
  );
}
