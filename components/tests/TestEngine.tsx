"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  TEST_CATEGORIES,
  TESTS_BY_CATEGORY,
  TEST_ENGINE_STATS,
  getTestById,
  getTestQuestions,
  type TestCategory,
  type TestDefinition,
} from "@/lib/tests/testEngine";
import type { PYQDifficulty } from "@/lib/pyq";
import { renderChemistry } from "@/lib/renderChemistry";

// ─────────────────────────────────────────────────────────────────────────────
// Test Engine (foundation) — browse test definitions built from real PYQ data,
// then open a test to attempt its real questions. Mobile-first.
// ─────────────────────────────────────────────────────────────────────────────

const DIFF_TONE: Record<PYQDifficulty, string> = {
  Easy: "text-emerald-300",
  Moderate: "text-amber-300",
  Hard: "text-orange-300",
  Olympiad: "text-rose-300",
};

function examLabel(e: string): string {
  return e; // PYQExam values are already display-ready ("JEE Main", "NEET", …)
}

function DifficultyMix({ mix }: { mix: TestDefinition["difficultyMix"] }) {
  const entries = (Object.entries(mix) as [PYQDifficulty, number][]).filter(([, n]) => n > 0);
  if (entries.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px]">
      {entries.map(([d, n]) => (
        <span key={d} className={DIFF_TONE[d]}>{d} {n}</span>
      ))}
    </div>
  );
}

function TestCard({ def, onOpen }: { def: TestDefinition; onOpen: (id: string) => void }) {
  return (
    <button
      onClick={() => onOpen(def.id)}
      className="w-full rounded-2xl border border-white/[0.08] bg-[#111827] p-4 text-left transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-white">{def.title}</h3>
          {def.subtitle && <p className="mt-0.5 truncate text-xs text-white/50">{def.subtitle}</p>}
        </div>
        <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-200">
          {def.count} Q
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {def.exams.map((e) => (
          <span key={e} className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold text-white/70">
            {examLabel(e)}
          </span>
        ))}
        <span className="text-[11px] text-white/40">· {def.totalMarks} marks</span>
      </div>
      <div className="mt-2"><DifficultyMix mix={def.difficultyMix} /></div>
    </button>
  );
}

function EmptyState({ message, hint }: { message: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-8 text-center">
      <p className="text-sm font-semibold text-white/60">{message}</p>
      {hint && <p className="mt-1 text-xs text-white/35">{hint}</p>}
    </div>
  );
}

function PlaceholderCard({ label, blurb }: { label: string; blurb: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center">
      <p className="text-sm font-bold text-white/70">{label}</p>
      <p className="mt-1 text-xs text-white/40">{blurb}</p>
      <span className="mt-3 inline-block rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/55">
        Coming soon
      </span>
    </div>
  );
}

// ── Test runner (foundation): shows real questions with reveal ────────────────

function TestRunner({ id, onBack }: { id: string; onBack: () => void }) {
  const def = getTestById(id);
  const questions = useMemo(() => (def ? getTestQuestions(def) : []), [def]);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!def) {
    return <EmptyState message="Test not found." hint="It may have been regenerated. Go back and pick another." />;
  }

  return (
    <div className="space-y-5">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
        ← Back to tests
      </button>

      <div className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.04] p-4">
        <h2 className="text-xl font-black text-white">{def.title}</h2>
        {def.subtitle && <p className="mt-0.5 text-sm text-white/55">{def.subtitle}</p>}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/60">
          <span>{def.count} questions</span>
          <span>· {def.totalMarks} marks</span>
          {def.exams.map((e) => (
            <span key={e} className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold text-white/70">{e}</span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <Link href="/notes" className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300">📖 Revise notes</Link>
          <Link href="/pyq" className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300">🎯 PYQ analytics</Link>
          <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-white/35">📊 Scoring — coming soon</span>
        </div>
      </div>

      {questions.length === 0 ? (
        <EmptyState message="No questions available for this test yet." />
      ) : (
        <div className="space-y-4">
          {questions.map((q, i) => {
            const show = revealed[q.id];
            return (
              <div key={q.id} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="font-bold text-cyan-300">Q{i + 1}</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-white/60">{q.exam} {q.year}</span>
                  <span className={`rounded bg-white/5 px-2 py-0.5 font-semibold ${DIFF_TONE[q.difficulty]}`}>{q.difficulty}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-white">{renderChemistry(q.question)}</p>

                {q.options && (
                  <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                    {Object.entries(q.options).map(([k, v]) => {
                      const correct = show && k === q.answer;
                      return (
                        <div
                          key={k}
                          className={`rounded-lg border p-2.5 text-sm transition ${
                            correct
                              ? "border-emerald-500/50 bg-emerald-500/10 font-semibold text-emerald-200"
                              : "border-white/10 bg-white/[0.03] text-white/70"
                          }`}
                        >
                          <span className="mr-2 font-bold">{k}.</span>{renderChemistry(v)}
                        </div>
                      );
                    })}
                  </div>
                )}

                {show && (
                  <div className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-sm">
                    <p className="font-semibold text-emerald-300">Answer: {q.answer}</p>
                    {q.explanation && <p className="mt-1.5 text-white/65">{renderChemistry(q.explanation)}</p>}
                  </div>
                )}

                <button
                  onClick={() => setRevealed((p) => ({ ...p, [q.id]: !p[q.id] }))}
                  className="mt-3 text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  {show ? "Hide answer" : "Reveal answer & explanation"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function TestEngine() {
  const [category, setCategory] = useState<TestCategory>("chapter");
  const [openId, setOpenId] = useState<string | null>(null);

  const meta = TEST_CATEGORIES.find((c) => c.key === category) ?? TEST_CATEGORIES[0];
  const defs = TESTS_BY_CATEGORY[category];

  if (openId) {
    return (
      <div className="space-y-6">
        <TestRunner id={openId} onBack={() => setOpenId(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Test Engine</p>
        <h1 className="text-3xl font-black md:text-4xl">Practice Tests</h1>
        <p className="mt-2 text-sm text-white/55">
          {TEST_ENGINE_STATS.totalTests} tests built from {TEST_ENGINE_STATS.questionPool} real previous-year questions —
          {" "}chapter, topic, revision & full papers. Scoring & performance tracking arrive next.
        </p>
      </div>

      {/* Category nav */}
      <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <div className="flex gap-2 md:flex-wrap">
          {TEST_CATEGORIES.map((c) => {
            const active = c.key === category;
            const count = TESTS_BY_CATEGORY[c.key].length;
            return (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                  active
                    ? "border-cyan-400/50 bg-cyan-500/15 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
                }`}
              >
                <span className="mr-1">{c.icon}</span>{c.label}
                {!c.placeholder && count > 0 && <span className="ml-1.5 text-white/40">{count}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category blurb */}
      <p className="text-sm text-white/50">{meta.icon} {meta.blurb}</p>

      {/* Content */}
      {meta.placeholder ? (
        <PlaceholderCard label={meta.label} blurb={meta.blurb} />
      ) : defs.length === 0 ? (
        <EmptyState message="No data yet." hint="Tests appear here as soon as matching PYQ data is available." />
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {defs.map((def) => (
            <TestCard key={def.id} def={def} onOpen={setOpenId} />
          ))}
        </div>
      )}
    </div>
  );
}
