import Link from "next/link";
import { getUserAttempts } from "@/lib/attempts/store";

// Saved attempts (Week 5A Attempt Layer) — real sessions only; signed-out
// users see an honest sign-in hint instead of an empty fake list.
async function SavedAttempts() {
  const result = await getUserAttempts({ limit: 20 });
  const error = result.error;
  const attempts = result.data ?? [];

  return (
    <section className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">Saved Attempts</h2>
      <p className="text-slate-600 text-sm mt-1">
        Your submitted exams and test answers — open any attempt to review every question.
      </p>

      {error === "Unauthorized" ? (
        <p className="mt-4 text-sm text-slate-600">
          <Link href="/auth/signin" className="font-bold text-indigo-600 hover:underline">Sign in</Link>{" "}
          to save and review your attempts.
        </p>
      ) : error ? (
        <p className="mt-4 text-sm text-slate-500">Attempts are unavailable right now — try again shortly.</p>
      ) : attempts.length === 0 ? (
        <p className="mt-4 text-sm text-slate-600">
          No attempts yet — take a{" "}
          <Link href="/exam" className="font-bold text-indigo-600 hover:underline">mock exam</Link> or a{" "}
          <Link href="/tests" className="font-bold text-indigo-600 hover:underline">practice test</Link> to start.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-100">
          {attempts.map((a) => (
            <li key={a.attemptId}>
              <Link
                href={`/revision/attempt/${a.attemptId}`}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition"
              >
                <span className="font-bold text-slate-900">{a.title ?? `${a.exam} ${a.source}`}</span>
                <span className="text-xs uppercase tracking-wide text-slate-400">{a.source}</span>
                <span className="text-sm text-slate-600">
                  {a.correctCount}/{a.totalQuestions} correct · score {a.score}/{a.maxScore}
                </span>
                <span className="ml-auto text-xs text-slate-400">
                  {new Date(a.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span className="text-indigo-600 font-semibold text-sm">Review →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

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
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Revision Engine</h1>
        <p className="text-slate-600 mt-1">Targeted, high-yield revision sessions to retain concepts and patch weak spots.</p>
      </header>

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

      {/* Saved attempts (Attempt Layer) */}
      <SavedAttempts />

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

    </div>
  );
}
