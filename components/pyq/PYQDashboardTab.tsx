"use client";

import { useMemo } from "react";
import {
  ALL_PYQ_QUESTIONS,
  PYQ_DB_STATS,
  getExamWiseDistribution,
  getDifficultyDistribution,
  getChapterRanking,
  topConcepts,
  getNCERTDirectQuestions,
  topReagents,
  topExceptions,
} from "@/lib/pyq";
import RankBar from "./RankBar";
import { DIFFICULTY_BAR } from "./uiHelpers";

export default function PYQDashboardTab() {
  const examDist = useMemo(() => getExamWiseDistribution(ALL_PYQ_QUESTIONS), []);
  const difficultyDist = useMemo(() => getDifficultyDistribution(ALL_PYQ_QUESTIONS), []);
  const chapterRanking = useMemo(() => getChapterRanking(ALL_PYQ_QUESTIONS), []);
  const maxChapterCount = chapterRanking[0]?.count ?? 1;
  const topics = useMemo(() => topConcepts(10), []);
  const maxTopicCount = topics[0]?.totalCount ?? 1;
  const ncertDirect = useMemo(() => getNCERTDirectQuestions(ALL_PYQ_QUESTIONS), []);
  const reagents = useMemo(() => topReagents(10), []);
  const maxReagentCount = reagents[0]?.count ?? 1;
  const exceptions = useMemo(() => topExceptions(10), []);
  const maxExceptionCount = exceptions[0]?.count ?? 1;

  const maxDifficulty = Math.max(1, ...Object.values(difficultyDist));

  return (
    <div className="space-y-10">
      {/* Question counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold text-cyan-400">{PYQ_DB_STATS.total}</div>
          <div className="text-xs text-white/50">Total Questions</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-400">{PYQ_DB_STATS.chaptersCount}</div>
          <div className="text-xs text-white/50">Chapters Covered</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">
            {PYQ_DB_STATS.yearRange.from}–{PYQ_DB_STATS.yearRange.to}
          </div>
          <div className="text-xs text-white/50">Year Range</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">
            {Math.round((ncertDirect.length / PYQ_DB_STATS.total) * 100)}%
          </div>
          <div className="text-xs text-white/50">NCERT Direct ({ncertDirect.length})</div>
        </div>
      </div>

      {/* Exam-wise distribution */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">📊 Exam-wise Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sky-400">{examDist.jeeMain}</div>
            <div className="text-xs text-white/50">JEE Main ({examDist.jeeMainPct}%)</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-violet-400">{examDist.jeeAdvanced}</div>
            <div className="text-xs text-white/50">JEE Advanced ({examDist.jeeAdvancedPct}%)</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{examDist.neet}</div>
            <div className="text-xs text-white/50">NEET ({examDist.neetPct}%)</div>
          </div>
        </div>
      </div>

      {/* Difficulty distribution */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold">🎚️ Difficulty Distribution</h3>
        <div className="space-y-2 border border-white/10 rounded-lg p-4">
          {(Object.entries(difficultyDist) as Array<[keyof typeof DIFFICULTY_BAR, number]>).map(([diff, count]) => (
            <RankBar key={diff} label={diff} count={count} max={maxDifficulty} accent={DIFFICULTY_BAR[diff]} />
          ))}
        </div>
      </div>

      {/* Chapter rankings */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold">📖 Chapter Rankings</h3>
        <div className="space-y-2 border border-white/10 rounded-lg p-4">
          {chapterRanking.slice(0, 10).map((c, i) => (
            <RankBar key={c.chapter} rank={i + 1} label={c.chapter} count={c.count} max={maxChapterCount} />
          ))}
        </div>
      </div>

      {/* Topic rankings */}
      <div className="space-y-2">
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

      {/* Reagents & exceptions leaderboards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">🧪 Most Asked Reagents</h3>
          <div className="space-y-2 border border-white/10 rounded-lg p-4">
            {reagents.map((r, i) => (
              <RankBar key={r.reagent} rank={i + 1} label={r.reagent} count={r.count} max={maxReagentCount} accent="bg-sky-500" />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">⚠️ Most Asked Exceptions</h3>
          <div className="space-y-2 border border-white/10 rounded-lg p-4">
            {exceptions.map((e, i) => (
              <RankBar
                key={e.exception}
                rank={i + 1}
                label={e.exception}
                count={e.count}
                max={maxExceptionCount}
                accent="bg-red-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
