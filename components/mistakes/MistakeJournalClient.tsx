"use client";

import { useState } from "react";
import QuestionCard from "@/components/pyq/QuestionCard";
import { MISTAKE_CATEGORIES, type MistakeItem, type MistakeCategory, type WeakConcept } from "@/lib/attempts/mistakes";

// Mistake Journal UI (Week 6). Filter by category, drill into weak concepts,
// and reattempt any wrong question inline via the existing QuestionCard —
// answering correctly records a new attempt, so the question leaves the
// journal on next load. Tab state is the only reason this is a client file.

type Filter = "all" | MistakeCategory;

const CATEGORY_TONE: Record<MistakeCategory, string> = {
  Concept: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  Calculation: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  Memory: "border-violet-500/40 bg-violet-500/10 text-violet-300",
};

function MistakeRow({ item }: { item: MistakeItem }) {
  const [reattempting, setReattempting] = useState(false);
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
        <span className={`rounded-full border px-2 py-0.5 font-bold ${CATEGORY_TONE[item.category]}`}>{item.category}</span>
        <span className="rounded bg-white/5 px-2 py-0.5 text-white/60">{item.chapter}</span>
        <span className="rounded bg-white/5 px-2 py-0.5 text-white/45">{item.topic}</span>
        {item.timesWrong > 1 && (
          <span className="rounded bg-rose-500/15 px-2 py-0.5 font-semibold text-rose-300">missed ×{item.timesWrong}</span>
        )}
      </div>

      {reattempting ? (
        <QuestionCard question={item.question} attemptSource="practice" />
      ) : (
        <>
          <p className="text-sm font-medium leading-relaxed text-white">{item.question.question}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-2.5 py-1 font-semibold text-rose-300">
              You chose {item.selectedAnswer}
            </span>
            <span className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-semibold text-emerald-300">
              Correct: {item.correctAnswer}
            </span>
          </div>
          <button
            onClick={() => setReattempting(true)}
            className="mt-3 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Reattempt →
          </button>
        </>
      )}
    </div>
  );
}

export default function MistakeJournalClient({
  items,
  categoryCounts,
  weakConcepts,
}: {
  items: MistakeItem[];
  categoryCounts: Record<MistakeCategory, number>;
  weakConcepts: WeakConcept[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? items : items.filter((i) => i.category === filter);

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All", count: items.length },
    ...MISTAKE_CATEGORIES.map((c) => ({ key: c.key as Filter, label: c.label, count: categoryCounts[c.key] })),
  ];

  return (
    <div className="space-y-8">
      {weakConcepts.length > 0 && (
        <section>
          <h2 className="mb-1 text-lg font-bold">Weak Concepts</h2>
          <p className="mb-3 text-sm text-zinc-500">Subtopics where your mistakes cluster — start here.</p>
          <div className="flex flex-wrap gap-2">
            {weakConcepts.map((w) => (
              <span key={`${w.chapter}-${w.topic}`} className="rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-sm">
                <span className="font-semibold text-white">{w.topic}</span>
                <span className="ml-2 text-xs text-rose-300">{w.wrong} wrong</span>
              </span>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                filter === t.key
                  ? "border-cyan-400/50 bg-cyan-500/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
              }`}
            >
              {t.label} <span className="text-white/40">{t.count}</span>
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-8 text-center text-sm text-white/55">
            No mistakes in this category. 🎉
          </p>
        ) : (
          <div className="space-y-4">
            {shown.map((item) => (
              <MistakeRow key={item.questionId} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
