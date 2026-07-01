"use client";

import { useMemo, useState } from "react";
import {
  ALL_PYQ_QUESTIONS,
  PYQ_DB_STATS,
  getAllChapterStats,
  chapterIntelligence,
  yearlyTrend,
  getByChapter,
  getByReagent,
  getByReaction,
  getByException,
} from "@/lib/pyq";
import type { PYQChapter } from "@/lib/pyq";
import QuestionCard from "./QuestionCard";
import RankBar from "./RankBar";
import { trendBadgeClass } from "./uiHelpers";

type TagKind = "reaction" | "reagent" | "exception";

function relatedForTag(kind: TagKind, value: string): number {
  const fn = kind === "reaction" ? getByReaction : kind === "reagent" ? getByReagent : getByException;
  return fn(ALL_PYQ_QUESTIONS, value).length;
}

export default function PYQChaptersTab() {
  const [activeChapter, setActiveChapter] = useState<PYQChapter | null>(null);
  const [activeTag, setActiveTag] = useState<{ kind: TagKind; value: string } | null>(null);

  const allStats = useMemo(() => getAllChapterStats(ALL_PYQ_QUESTIONS), []);

  const chapterStats = useMemo(
    () => (activeChapter ? chapterIntelligence(activeChapter) : null),
    [activeChapter]
  );

  const trendData = useMemo(() => (activeChapter ? yearlyTrend(activeChapter) : []), [activeChapter]);

  const weightagePct = chapterStats
    ? Math.round((chapterStats.totalQuestions / PYQ_DB_STATS.total) * 1000) / 10
    : 0;

  const recentMomentum = useMemo(() => {
    if (!trendData.length) return 0;
    const recent = trendData.slice(-3).reduce((sum, p) => sum + p.total, 0);
    const total = trendData.reduce((sum, p) => sum + p.total, 0);
    return total > 0 ? Math.round((recent / total) * 100) : 0;
  }, [trendData]);

  const activeTagQuestions = useMemo(() => {
    if (!activeTag) return [];
    const fn =
      activeTag.kind === "reaction" ? getByReaction : activeTag.kind === "reagent" ? getByReagent : getByException;
    return fn(ALL_PYQ_QUESTIONS, activeTag.value);
  }, [activeTag]);

  if (!activeChapter) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allStats.map((stat) => (
          <button
            key={stat.chapter}
            onClick={() => setActiveChapter(stat.chapter)}
            className="border border-white/10 rounded-lg p-4 hover:border-cyan-500 transition text-left group space-y-2"
          >
            <h3 className="font-bold group-hover:text-cyan-400 transition">{stat.chapter}</h3>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>{stat.totalQuestions} questions</span>
              <span>{Math.round((stat.totalQuestions / PYQ_DB_STATS.total) * 1000) / 10}% weightage</span>
            </div>
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${trendBadgeClass(stat.trend)}`}>
              {stat.trend}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => {
          setActiveChapter(null);
          setActiveTag(null);
        }}
        className="text-sm text-white/50 hover:text-white transition flex items-center gap-2"
      >
        ← Back to Chapters
      </button>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-3xl md:text-4xl font-bold">{activeChapter}</h2>
          {chapterStats && (
            <span className={`px-2 py-1 rounded text-xs font-semibold ${trendBadgeClass(chapterStats.trend)}`}>
              {chapterStats.trend}
            </span>
          )}
        </div>

        {chapterStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400">{chapterStats.totalQuestions}</div>
              <div className="text-xs text-white/50">Total Questions</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">{weightagePct}%</div>
              <div className="text-xs text-white/50">Predicted Weightage</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">{recentMomentum}%</div>
              <div className="text-xs text-white/50">Trend Score (last 3 yrs)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">{chapterStats.lastAsked || "—"}</div>
              <div className="text-xs text-white/50">Last Asked</div>
            </div>
          </div>
        )}

        {chapterStats && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-sky-400">{chapterStats.byExam.jeeMain}</div>
              <div className="text-xs text-white/50">JEE Main</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-violet-400">{chapterStats.byExam.jeeAdvanced}</div>
              <div className="text-xs text-white/50">JEE Advanced</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-emerald-400">{chapterStats.byExam.neet}</div>
              <div className="text-xs text-white/50">NEET</div>
            </div>
          </div>
        )}
      </div>

      {/* Difficulty distribution */}
      {chapterStats && (
        <div className="space-y-2">
          <h3 className="text-lg font-bold">📊 Difficulty Distribution</h3>
          {(Object.entries(chapterStats.byDifficulty) as Array<[string, number]>).map(([diff, count]) => (
            <RankBar
              key={diff}
              label={diff}
              count={count}
              max={chapterStats.totalQuestions}
              accent={
                diff === "Easy"
                  ? "bg-green-500"
                  : diff === "Moderate"
                  ? "bg-yellow-500"
                  : diff === "Hard"
                  ? "bg-orange-500"
                  : "bg-red-500"
              }
            />
          ))}
        </div>
      )}

      {/* Yearly trend */}
      {trendData.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold">📈 Year Distribution</h3>
          <div className="space-y-2">
            {trendData.map((point) => (
              <div key={point.year} className="flex items-center gap-3">
                <span className="text-white/50 w-12 text-sm">{point.year}</span>
                <div className="flex gap-1 flex-1">
                  {point.jeeMain > 0 && (
                    <div className="h-6 bg-sky-500/40 rounded" style={{ width: `${Math.min(point.jeeMain * 30, 100)}px` }} />
                  )}
                  {point.jeeAdvanced > 0 && (
                    <div
                      className="h-6 bg-violet-500/40 rounded"
                      style={{ width: `${Math.min(point.jeeAdvanced * 30, 100)}px` }}
                    />
                  )}
                  {point.neet > 0 && (
                    <div className="h-6 bg-emerald-500/40 rounded" style={{ width: `${Math.min(point.neet * 30, 100)}px` }} />
                  )}
                </div>
                <span className="text-xs text-white/50 w-16 text-right">{point.total} Qs</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top subtopics & concepts */}
      {chapterStats && chapterStats.topSubtopics.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-bold">🧩 Top Subtopics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {chapterStats.topSubtopics.map((item) => (
              <div key={item.subtopic} className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="font-semibold text-white/90 text-sm">{item.subtopic}</div>
                <div className="text-xs text-white/50">{item.count} questions</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {chapterStats && chapterStats.topConcepts.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold">🎯 Top Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {chapterStats.topConcepts.map((item) => (
              <div key={item.concept} className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="font-semibold text-cyan-400">{item.concept}</div>
                <div className="text-xs text-white/50">{item.count} questions</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Knowledge linking: reactions / reagents / exceptions */}
      {chapterStats &&
        (chapterStats.topReactions.length > 0 ||
          chapterStats.topReagents.length > 0 ||
          chapterStats.topExceptions.length > 0) && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">🔗 Knowledge Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chapterStats.topReactions.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-orange-300 uppercase tracking-wide">Reactions</div>
                  <div className="flex flex-wrap gap-1.5">
                    {chapterStats.topReactions.map((item) => (
                      <button
                        key={item.reaction}
                        onClick={() => setActiveTag({ kind: "reaction", value: item.reaction })}
                        className={`px-2 py-1 rounded text-xs bg-orange-900/30 text-orange-300 hover:bg-orange-900/50 transition ${
                          activeTag?.kind === "reaction" && activeTag.value === item.reaction
                            ? "ring-1 ring-cyan-400"
                            : ""
                        }`}
                      >
                        {item.reaction} ({item.count})
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {chapterStats.topReagents.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-sky-300 uppercase tracking-wide">Reagents</div>
                  <div className="flex flex-wrap gap-1.5">
                    {chapterStats.topReagents.map((item) => (
                      <button
                        key={item.reagent}
                        onClick={() => setActiveTag({ kind: "reagent", value: item.reagent })}
                        className={`px-2 py-1 rounded text-xs bg-sky-900/30 text-sky-300 hover:bg-sky-900/50 transition ${
                          activeTag?.kind === "reagent" && activeTag.value === item.reagent
                            ? "ring-1 ring-cyan-400"
                            : ""
                        }`}
                      >
                        {item.reagent} ({item.count})
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {chapterStats.topExceptions.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-red-300 uppercase tracking-wide">Exceptions</div>
                  <div className="flex flex-wrap gap-1.5">
                    {chapterStats.topExceptions.map((item) => (
                      <button
                        key={item.exception}
                        onClick={() => setActiveTag({ kind: "exception", value: item.exception })}
                        className={`px-2 py-1 rounded text-xs bg-red-900/30 text-red-300 hover:bg-red-900/50 transition ${
                          activeTag?.kind === "exception" && activeTag.value === item.exception
                            ? "ring-1 ring-cyan-400"
                            : ""
                        }`}
                      >
                        {item.exception} ({item.count})
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {activeTag && (
              <div className="border border-cyan-900/50 bg-cyan-950/20 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-cyan-300">
                    PYQs linked via {activeTag.kind} &ldquo;{activeTag.value}&rdquo; ({relatedForTag(activeTag.kind, activeTag.value)})
                  </span>
                  <button onClick={() => setActiveTag(null)} className="text-xs text-white/40 hover:text-white/70">
                    ✕
                  </button>
                </div>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {activeTagQuestions.slice(0, 8).map((q) => (
                    <QuestionCard key={q.id} question={q} compact />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      {/* Chapter questions */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">📝 Questions</h3>
        <div className="space-y-4">
          {getByChapter(ALL_PYQ_QUESTIONS, activeChapter)
            .slice(0, 10)
            .map((q) => (
              <QuestionCard key={q.id} question={q} compact />
            ))}
        </div>
      </div>
    </div>
  );
}
