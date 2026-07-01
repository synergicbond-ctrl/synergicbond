"use client";

import { useMemo, useState } from "react";
import { ALL_PYQ_QUESTIONS, getConceptFrequencies, filterPYQ } from "@/lib/pyq";
import type { PYQChapter } from "@/lib/pyq";
import QuestionCard from "./QuestionCard";

type SortMode = "frequency" | "recent" | "recurrence";

function conceptYearSpread(concept: string): { years: number; span: number; recurrenceRate: number } {
  const years = new Set<number>();
  for (const q of ALL_PYQ_QUESTIONS) {
    if (q.concepts.includes(concept)) years.add(q.year);
  }
  if (years.size === 0) return { years: 0, span: 0, recurrenceRate: 0 };
  const sorted = [...years].sort((a, b) => a - b);
  const span = sorted[sorted.length - 1] - sorted[0] + 1;
  const recurrenceRate = Math.round((years.size / span) * 100);
  return { years: years.size, span, recurrenceRate };
}

export default function PYQTopicsTab() {
  const [query, setQuery] = useState("");
  const [chapterFilter, setChapterFilter] = useState<PYQChapter | "">("");
  const [sortMode, setSortMode] = useState<SortMode>("frequency");
  const [expanded, setExpanded] = useState<string | null>(null);

  const chapterList = useMemo(
    () => Array.from(new Set(ALL_PYQ_QUESTIONS.map((q) => q.chapter))).sort(),
    []
  );

  const allConcepts = useMemo(() => getConceptFrequencies(ALL_PYQ_QUESTIONS), []);

  const enriched = useMemo(
    () =>
      allConcepts.map((c) => ({
        ...c,
        ...conceptYearSpread(c.concept),
      })),
    [allConcepts]
  );

  const filtered = useMemo(() => {
    let list = enriched;
    if (chapterFilter) list = list.filter((c) => c.chapter === chapterFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((c) => c.concept.toLowerCase().includes(q) || c.chapter.toLowerCase().includes(q));
    }
    const sorted = [...list];
    if (sortMode === "frequency") sorted.sort((a, b) => b.totalCount - a.totalCount);
    else if (sortMode === "recent") sorted.sort((a, b) => b.lastAsked - a.lastAsked);
    else sorted.sort((a, b) => b.recurrenceRate - a.recurrenceRate);
    return sorted.slice(0, 60);
  }, [enriched, chapterFilter, query, sortMode]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          type="text"
          placeholder="Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500"
        />
        <select
          value={chapterFilter}
          onChange={(e) => setChapterFilter(e.target.value as PYQChapter | "")}
          className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 focus:outline-none focus:border-cyan-500"
        >
          <option value="">All Chapters</option>
          {chapterList.map((ch) => (
            <option key={ch} value={ch} className="bg-black">
              {ch}
            </option>
          ))}
        </select>
        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as SortMode)}
          className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 focus:outline-none focus:border-cyan-500"
        >
          <option value="frequency" className="bg-black">Sort: Frequency</option>
          <option value="recent" className="bg-black">Sort: Last Appearance</option>
          <option value="recurrence" className="bg-black">Sort: Recurrence Rate</option>
        </select>
      </div>

      <p className="text-xs text-white/50">{filtered.length} topics</p>

      <div className="space-y-2">
        {filtered.map((topic) => (
          <div key={topic.concept} className="border border-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === topic.concept ? null : topic.concept)}
              className="w-full p-4 text-left hover:bg-white/[0.03] transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-semibold text-cyan-400">{topic.concept}</div>
                  <div className="text-xs text-white/50">{topic.chapter}</div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-white">{topic.totalCount}</div>
                    <div className="text-white/40">Frequency</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">{topic.lastAsked}</div>
                    <div className="text-white/40">Last Seen</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">{topic.recurrenceRate}%</div>
                    <div className="text-white/40">Recurrence</div>
                  </div>
                  {topic.trending && (
                    <span className="bg-cyan-900/40 text-cyan-300 px-2 py-1 rounded font-semibold">Trending</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 mt-2 text-[11px]">
                {topic.byExam.jeeMain > 0 && (
                  <span className="bg-sky-900/30 text-sky-300 px-1.5 py-0.5 rounded">JEE Main × {topic.byExam.jeeMain}</span>
                )}
                {topic.byExam.jeeAdvanced > 0 && (
                  <span className="bg-violet-900/30 text-violet-300 px-1.5 py-0.5 rounded">
                    JEE Advanced × {topic.byExam.jeeAdvanced}
                  </span>
                )}
                {topic.byExam.neet > 0 && (
                  <span className="bg-emerald-900/30 text-emerald-300 px-1.5 py-0.5 rounded">NEET × {topic.byExam.neet}</span>
                )}
              </div>
            </button>

            {expanded === topic.concept && (
              <div className="border-t border-white/10 p-4 space-y-3 bg-white/[0.02]">
                {filterPYQ(ALL_PYQ_QUESTIONS, { concept: topic.concept })
                  .slice(0, 5)
                  .map((q) => (
                    <QuestionCard key={q.id} question={q} compact />
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
