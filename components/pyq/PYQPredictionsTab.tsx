"use client";

import { useMemo, useState } from "react";
import {
  ALL_PYQ_QUESTIONS,
  predictNext,
  getOverduePredictions,
  getTrendingPredictions,
  predictDifficultyProfile,
} from "@/lib/pyq";
import type { PYQExam, Prediction } from "@/lib/pyq";
import { probabilityBand, PROBABILITY_STYLE } from "./uiHelpers";

const EXAMS: PYQExam[] = ["JEE Main", "JEE Advanced", "NEET"];

function PredictionCard({ pred }: { pred: Prediction }) {
  const band = probabilityBand(pred.confidenceScore);
  const style = PROBABILITY_STYLE[band];
  return (
    <div className="border border-white/10 rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-bold text-sm">{pred.chapter}</h4>
          <p className="text-xs text-white/60">{pred.subtopic}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xl font-bold text-white">{pred.confidenceScore}%</div>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${style.badge}`}>{band}</span>
        </div>
      </div>
      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div className={`h-full ${style.bar}`} style={{ width: `${pred.confidenceScore}%` }} />
      </div>
      <p className="text-xs text-white/50">{pred.reason}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-white/5 p-2 rounded">
          <div className="text-white/40">Gap:</div>
          <div className="font-bold">{pred.gapYears} years</div>
        </div>
        <div className="bg-white/5 p-2 rounded">
          <div className="text-white/40">Last asked:</div>
          <div className="font-bold">{pred.lastAskedYear}</div>
        </div>
      </div>
      {pred.concepts.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {pred.concepts.map((c) => (
            <span key={c} className="text-[10px] bg-cyan-900/30 text-cyan-300 px-1.5 py-0.5 rounded">
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PYQPredictionsTab() {
  const [exam, setExam] = useState<PYQExam>("JEE Main");

  const predictions = useMemo(() => predictNext(exam, 60), [exam]);
  const overdue = useMemo(() => getOverduePredictions(ALL_PYQ_QUESTIONS, exam), [exam]);
  const trendingPreds = useMemo(() => getTrendingPredictions(ALL_PYQ_QUESTIONS, exam), [exam]);
  const difficultyProfile = useMemo(() => predictDifficultyProfile(ALL_PYQ_QUESTIONS, exam), [exam]);

  const buckets = useMemo(() => {
    const high = predictions.filter((p) => probabilityBand(p.confidenceScore) === "High");
    const medium = predictions.filter((p) => probabilityBand(p.confidenceScore) === "Medium");
    const low = predictions.filter((p) => probabilityBand(p.confidenceScore) === "Low");
    return { high, medium, low };
  }, [predictions]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EXAMS.map((e) => (
          <button
            key={e}
            onClick={() => setExam(e)}
            className={`border rounded-lg p-4 text-left transition ${
              exam === e ? "border-cyan-500 bg-cyan-950/20" : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="font-semibold">{e}</div>
            <div className="text-xs text-white/50">View prediction engine</div>
          </button>
        ))}
      </div>

      {/* Expected difficulty profile */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold">⚖️ Expected Difficulty Mix — {exam}</h3>
        <div className="grid grid-cols-4 gap-2">
          {(
            [
              ["Easy", difficultyProfile.easy, "bg-green-500"],
              ["Moderate", difficultyProfile.moderate, "bg-yellow-500"],
              ["Hard", difficultyProfile.hard, "bg-orange-500"],
              ["Olympiad", difficultyProfile.olympiad, "bg-red-500"],
            ] as Array<[string, number, string]>
          ).map(([label, pct, accent]) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{pct}%</div>
              <div className={`h-1 rounded-full ${accent} mt-1 mb-1`} style={{ width: `${pct}%`, marginInline: "auto" }} />
              <div className="text-[10px] text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overdue & trending highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-white/80">⏰ Overdue Topics ({overdue.length})</h3>
          <div className="flex flex-wrap gap-1.5">
            {overdue.slice(0, 10).map((p) => (
              <span key={`${p.chapter}-${p.subtopic}`} className="text-[11px] bg-red-900/30 text-red-300 px-2 py-1 rounded">
                {p.subtopic} ({p.gapYears}y gap)
              </span>
            ))}
            {overdue.length === 0 && <span className="text-xs text-white/40">None currently overdue.</span>}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-white/80">🔥 Trending Topics ({trendingPreds.length})</h3>
          <div className="flex flex-wrap gap-1.5">
            {trendingPreds.slice(0, 10).map((p) => (
              <span key={`${p.chapter}-${p.subtopic}`} className="text-[11px] bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
                {p.subtopic}
              </span>
            ))}
            {trendingPreds.length === 0 && <span className="text-xs text-white/40">No hot topics right now.</span>}
          </div>
        </div>
      </div>

      {/* Probability buckets */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">🎯 Predicted Topics — {exam}</h2>

        {(
          [
            ["High", buckets.high],
            ["Medium", buckets.medium],
            ["Low", buckets.low],
          ] as Array<["High" | "Medium" | "Low", Prediction[]]>
        ).map(([band, list]) => (
          <div key={band} className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${PROBABILITY_STYLE[band].badge}`}>
                {band} Probability
              </span>
              <span className="text-xs text-white/40">{list.length} topics</span>
            </div>
            {list.length === 0 ? (
              <p className="text-xs text-white/40">None in this band.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {list.map((pred) => (
                  <PredictionCard key={`${pred.chapter}-${pred.subtopic}`} pred={pred} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
