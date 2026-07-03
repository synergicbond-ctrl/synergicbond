import Link from "next/link";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildNcertReport, type NcertStatus } from "@/lib/attempts/ncert";

// ─────────────────────────────────────────────────────────────────────────────
// /ncert — NCERT Blind Spot Detector (Roadmap V2 · Week 9).
//
// Server component. Reads attempt_answers (existing table, no new pipeline) and
// classifies every exam-tagged NCERT line as mastered / weak / unseen. Unseen
// lines are the real blind spots. No fabricated numbers — empty state until
// real attempts exist.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "NCERT Blind Spots — SYNERGIC BOND",
  description: "Line-level NCERT coverage from your real attempts — what you've mastered, what's weak, and what you haven't touched.",
};

const STATUS_META: Record<NcertStatus, { label: string; dot: string; text: string; ring: string }> = {
  mastered: { label: "Mastered", dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-500/30 bg-emerald-500/[0.06]" },
  weak: { label: "Weak", dot: "bg-rose-400", text: "text-rose-300", ring: "border-rose-500/30 bg-rose-500/[0.06]" },
  unseen: { label: "Not seen", dot: "bg-white/30", text: "text-white/50", ring: "border-white/10 bg-white/[0.02]" },
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-emerald-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Line-level NCERT coverage</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">NCERT Blind Spots</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Every NCERT line that shows up in exams, tracked against your real attempts — so the lines you&apos;ve never
            touched stop being blind spots.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </main>
  );
}

export default async function NcertPage() {
  const { data: answers, error } = await getAllUserAnswers();

  if (error === "Unauthorized") {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your NCERT coverage</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Coverage is tracked automatically from tests and practice.</p>
          <Link href="/auth/signin" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">
            Sign in →
          </Link>
        </div>
      </Shell>
    );
  }

  if (error || !answers) {
    return (
      <Shell>
        <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">
          NCERT coverage is unavailable right now — try again shortly.
        </p>
      </Shell>
    );
  }

  const report = buildNcertReport(answers);

  if (!report.hasData) {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No coverage yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Answer NCERT-linked questions in a{" "}
            <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set or{" "}
            <Link href="/tests" className="font-bold text-cyan-400 hover:underline">test</Link> — your line-level NCERT map builds automatically across {report.totalLines} tracked lines.
          </p>
        </div>
      </Shell>
    );
  }

  const { totalLines, covered, mastered, weak, unseen, coveragePct, chapters } = report;

  return (
    <Shell>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 text-center">
          <div className="text-2xl font-black text-cyan-300">{coveragePct}%</div>
          <div className="mt-1 text-xs text-white/50">Coverage ({covered}/{totalLines})</div>
        </div>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4 text-center">
          <div className="text-2xl font-black text-emerald-300">{mastered}</div>
          <div className="mt-1 text-xs text-white/50">Mastered</div>
        </div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-4 text-center">
          <div className="text-2xl font-black text-rose-300">{weak}</div>
          <div className="mt-1 text-xs text-white/50">Weak</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <div className="text-2xl font-black text-white/70">{unseen}</div>
          <div className="mt-1 text-xs text-white/50">Not seen</div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold">By chapter</h2>
        <div className="flex flex-wrap gap-3 text-[11px] text-white/50">
          {(["mastered", "weak", "unseen"] as NcertStatus[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${STATUS_META[s].dot}`} />
              {STATUS_META[s].label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {chapters.map((ch) => (
          <div key={ch.chapterKey} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-white">{ch.chapterKey}</span>
              <span className="text-xs text-white/45">
                <span className="text-emerald-300">{ch.mastered} mastered</span> ·{" "}
                <span className="text-rose-300">{ch.weak} weak</span> ·{" "}
                <span className="text-white/50">{ch.unseen} not seen</span>
              </span>
            </div>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {ch.lines.map((l) => {
                const m = STATUS_META[l.status];
                return (
                  <div key={l.line} className={`flex items-start gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${m.ring}`}>
                    <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${m.dot}`} />
                    <span className="text-white/75">{l.line.replace(/^Class\s*\d+\s*Ch\.?\s*\d+\s*[—-]?\s*/i, "")}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/pyq" className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20">
          Close blind spots →
        </Link>
        <Link href="/analytics" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]">
          Analytics →
        </Link>
      </div>
    </Shell>
  );
}
