"use client";

import { useState } from "react";

type WeeklyTarget = {
  week: number;
  target: string;
  expectedScoreGain: string;
};

type ExamPrediction = {
  currentLevel?: string;
  estimatedScore?: {
    chemistry?: number;
    overall?: number;
    outOf?: number;
  };
  estimatedRank?: {
    optimistic?: string;
    realistic?: string;
    conservative?: string;
  };
  percentile?: string;
  improvementPotential?: string;
  weeklyTargets?: WeeklyTarget[];
  topicsToFocusNow?: string[];
  motivationalMessage?: string;
  successProbability?: string;
};

export default function ExamPredictorPage() {
  const [examType, setExamType] = useState("NEET");
  const [scores, setScores] = useState("");
  const [hours, setHours] = useState(4);
  const [result, setResult] = useState<ExamPrediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function predict() {
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const quizScores = scores.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
      const res = await fetch("/api/exam-predictor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizScores, examType, practiceHours: hours }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data.prediction);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to predict exam performance.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">📊 Exam Predictor</h1>
          <p className="mt-2 text-[var(--text-muted)]">AI predicts your rank based on current performance</p>
        </div>

        {!result && (
          <div className="space-y-6">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-bold mb-4">Select Exam</h3>
              <div className="flex flex-wrap gap-2">
                {["NEET", "JEE Main", "JEE Advanced", "GATE"].map((e) => (
                  <button key={e} onClick={() => setExamType(e)}
                    className={`rounded-lg px-4 py-2 font-semibold transition ${examType === e ? "bg-[var(--accent)] text-[var(--background)]" : "border border-[var(--border)] bg-[var(--surface-2)] hover:bg-[var(--surface-hover)]"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-bold mb-2">Your Recent Quiz Scores (%)</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">Enter comma-separated scores e.g: 72, 65, 80, 58</p>
              <input value={scores} onChange={(e) => setScores(e.target.value)}
                placeholder="72, 65, 80, 58, 74"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]" />
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-bold mb-3">Daily Study Hours: {hours}h</h3>
              <input type="range" min={1} max={12} value={hours} onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[var(--accent)]" />
            </div>

            {error && <p className="text-red-400">{error}</p>}

            <button onClick={predict} disabled={loading}
              className="w-full rounded-lg bg-[var(--accent)] py-4 font-bold text-[var(--background)] text-lg disabled:opacity-40 hover:brightness-110 transition">
              {loading ? "🤖 Analyzing your performance..." : "🔮 Predict My Rank"}
            </button>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <button onClick={() => setResult(null)} className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition">← Try again</button>

            {/* Main prediction */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-6 text-center">
              <p className="text-[var(--text-muted)] text-sm mb-2">Current Level</p>
              <p className="text-3xl font-bold mb-4">{result.currentLevel}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[var(--text-muted)] text-xs">Chemistry Score</p>
                  <p className="text-2xl font-bold text-[var(--foreground)]">{result.estimatedScore?.chemistry}</p>
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs">Overall Score</p>
                  <p className="text-2xl font-bold">{result.estimatedScore?.overall}<span className="text-[var(--text-muted)] text-sm">/{result.estimatedScore?.outOf}</span></p>
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs">Percentile</p>
                  <p className="text-2xl font-bold text-[var(--foreground)]">{result.percentile}</p>
                </div>
              </div>
            </div>

            {/* Rank range */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "🌟 Optimistic Rank", value: result.estimatedRank?.optimistic },
                { label: "🎯 Realistic Rank", value: result.estimatedRank?.realistic },
                { label: "📉 Conservative Rank", value: result.estimatedRank?.conservative },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
                  <p className="text-xs text-[var(--text-muted)] mb-1">{label}</p>
                  <p className="font-bold text-[var(--foreground)]">{value}</p>
                </div>
              ))}
            </div>

            {/* Improvement potential */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <p className="text-[var(--text-muted)] font-semibold">🚀 Improvement Potential</p>
              <p className="text-[var(--foreground)] mt-1">{result.improvementPotential}</p>
            </div>

            {/* Weekly targets */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-bold mb-4">📅 4-Week Target Plan</h3>
              <div className="space-y-3">
                {result.weeklyTargets?.map((w) => (
                  <div key={w.week} className="flex items-center gap-4 rounded-lg bg-[var(--surface-2)] p-3">
                    <span className="text-sm font-bold text-[var(--accent)] w-14">Week {w.week}</span>
                    <span className="flex-1 text-[var(--foreground)] text-sm">{w.target}</span>
                    <span className="text-[var(--foreground)] text-sm font-semibold">{w.expectedScoreGain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus topics */}
            <div className="rounded-lg border border-red-500/20 bg-red-950/20 p-6">
              <h3 className="font-bold mb-3 text-red-300">🔥 Focus on These NOW</h3>
              <div className="flex flex-wrap gap-2">
                {result.topicsToFocusNow?.map((t: string, i: number) => (
                  <span key={i} className="rounded-full bg-red-500/20 border border-red-500/30 px-3 py-1 text-sm text-red-200">{t}</span>
                ))}
              </div>
            </div>

            {/* Motivational message */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <p className="text-[var(--text-muted)] font-semibold">💪 Message from AI Mentor</p>
              <p className="text-[var(--foreground)]/80 mt-2 italic">&quot;{result.motivationalMessage}&quot;</p>
            </div>

            <div className="rounded-lg bg-[var(--surface-2)] p-4 text-center">
              <p className="text-[var(--text-muted)] text-sm">{result.successProbability}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
