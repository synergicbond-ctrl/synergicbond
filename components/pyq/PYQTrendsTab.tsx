"use client";

import { useMemo, useState } from "react";
import {
  ALL_PYQ_QUESTIONS,
  yearlyTrend,
  getChapterRanking,
  topConcepts,
  getTrendingConcepts,
} from "@/lib/pyq";
import type { PYQExam } from "@/lib/pyq";
import RankBar from "./RankBar";

const EXAMS: Array<{ key: PYQExam; label: string; accent: string; field: "jeeMain" | "jeeAdvanced" | "neet" }> = [
  { key: "JEE Main", label: "JEE Main", accent: "bg-sky-500", field: "jeeMain" },
  { key: "JEE Advanced", label: "JEE Advanced", accent: "bg-violet-500", field: "jeeAdvanced" },
  { key: "NEET", label: "NEET", accent: "bg-emerald-500", field: "neet" },
];

type RankingScope = "All" | PYQExam;

export default function PYQTrendsTab() {
  const [rankingScope, setRankingScope] = useState<RankingScope>("All");

  const trend = useMemo(() => yearlyTrend(), []);
  const maxByExam = useMemo(
    () => ({
      jeeMain: Math.max(1, ...trend.map((p) => p.jeeMain)),
      jeeAdvanced: Math.max(1, ...trend.map((p) => p.jeeAdvanced)),
      neet: Math.max(1, ...trend.map((p) => p.neet)),
    }),
    [trend]
  );

  const chapterRanking = useMemo(
    () => getChapterRanking(ALL_PYQ_QUESTIONS, rankingScope === "All" ? undefined : rankingScope),
    [rankingScope]
  );
  const maxChapterCount = chapterRanking[0]?.count ?? 1;

  const topics = useMemo(() => topConcepts(15), []);
  const maxTopicCount = topics[0]?.totalCount ?? 1;

  const trending = useMemo(() => getTrendingConcepts(ALL_PYQ_QUESTIONS, 3).slice(0, 12), []);

  return (
    <div className="space-y-10">
      {/* NEET / JEE Main / JEE Advanced trends */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">📈 Exam-wise Trend Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EXAMS.map((exam) => (
            <div key={exam.key} className="border border-white/10 rounded-lg p-4 space-y-2">
              <div className="text-sm font-semibold text-white/80">{exam.label}</div>
              <div className="space-y-1.5">
                {trend.map((point) => (
                  <div key={point.year} className="flex items-center gap-2">
                    <span className="text-[11px] text-white/40 w-10">{point.year}</span>
                    <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${exam.accent}`}
                        style={{
                          width: `${Math.round((point[exam.field] / maxByExam[exam.field]) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-white/40 w-5 text-right">{point[exam.field]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending now */}
      {trending.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold">🔥 Trending Now (last 3 years)</h3>
          <div className="flex flex-wrap gap-2">
            {trending.map((t) => (
              <span
                key={t.concept}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-900/30 text-cyan-300 border border-cyan-800/50"
              >
                {t.concept} <span className="text-cyan-500/70">· {t.chapter}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Chapter rankings */}
      <div className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-bold">📖 Chapter Rankings</h3>
          <div className="flex gap-1.5">
            {(["All", "JEE Main", "JEE Advanced", "NEET"] as RankingScope[]).map((scope) => (
              <button
                key={scope}
                onClick={() => setRankingScope(scope)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
                  rankingScope === scope ? "bg-cyan-600 text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {scope}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2 border border-white/10 rounded-lg p-4">
          {chapterRanking.slice(0, 12).map((c, i) => (
            <RankBar key={c.chapter} rank={i + 1} label={c.chapter} count={c.count} max={maxChapterCount} />
          ))}
        </div>
      </div>

      {/* Topic rankings */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">🎯 Topic Rankings</h3>
        <div className="space-y-2 border border-white/10 rounded-lg p-4">
          {topics.map((t, i) => (
            <RankBar
              key={t.concept}
              rank={i + 1}
              label={`${t.concept} (${t.chapter})`}
              count={t.totalCount}
              max={maxTopicCount}
              accent="bg-purple-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
