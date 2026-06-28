"use client";

import { useState } from "react";

export default function ExamPredictorPage() {
  const [examType, setExamType] = useState("NEET");
  const [scores, setScores] = useState("");
  const [hours, setHours] = useState(4);
  const [result, setResult] = useState<any>(null);
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
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">📊 Exam Predictor</h1>
          <p className="mt-2 text-white/60">AI predicts your rank based on current performance</p>
        </div>

        {!result && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-4">Select Exam</h3>
              <div className="flex flex-wrap gap-2">
                {["NEET", "JEE Main", "JEE Advanced", "GATE"].map((e) => (
                  <button key={e} onClick={() => setExamType(e)}
                    className={`rounded-xl px-4 py-2 font-semibold transition ${examType === e ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 hover:bg-white/10"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-2">Your Recent Quiz Scores (%)</h3>
              <p className="text-white/40 text-sm mb-3">Enter comma-separated scores e.g: 72, 65, 80, 58</p>
              <input value={scores} onChange={(e) => setScores(e.target.value)}
                placeholder="72, 65, 80, 58, 74"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 focus:outline-none focus:border-cyan-500" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-3">Daily Study Hours: {hours}h</h3>
              <input type="range" min={1} max={12} value={hours} onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-cyan-500" />
            </div>

            {error && <p className="text-red-400">{error}</p>}

            <button onClick={predict} disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-purple-500 py-4 font-bold text-white text-lg disabled:opacity-40">
              {loading ? "🤖 Analyzing your performance..." : "🔮 Predict My Rank"}
            </button>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <button onClick={() => setResult(null)} className="text-sm text-white/40 hover:text-white transition">← Try again</button>

            {/* Main prediction */}
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6 text-center">
              <p className="text-purple-300 text-sm mb-2">Current Level</p>
              <p className="text-3xl font-bold mb-4">{result.currentLevel}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-white/40 text-xs">Chemistry Score</p>
                  <p className="text-2xl font-bold text-cyan-400">{result.estimatedScore?.chemistry}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Overall Score</p>
                  <p className="text-2xl font-bold">{result.estimatedScore?.overall}<span className="text-white/30 text-sm">/{result.estimatedScore?.outOf}</span></p>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Percentile</p>
                  <p className="text-2xl font-bold text-green-400">{result.percentile}</p>
                </div>
              </div>
            </div>

            {/* Rank range */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "🌟 Optimistic Rank", value: result.estimatedRank?.optimistic, color: "green" },
                { label: "🎯 Realistic Rank", value: result.estimatedRank?.realistic, color: "cyan" },
                { label: "📉 Conservative Rank", value: result.estimatedRank?.conservative, color: "yellow" },
              ].map(({ label, value, color }) => (
                <div key={label} className={`rounded-xl border border-${color}-500/20 bg-${color}-950/20 p-4 text-center`}>
                  <p className="text-xs text-white/40 mb-1">{label}</p>
                  <p className="font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            {/* Improvement potential */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-5">
              <p className="text-cyan-300 font-semibold">🚀 Improvement Potential</p>
              <p className="text-white mt-1">{result.improvementPotential}</p>
            </div>

            {/* Weekly targets */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-4">📅 4-Week Target Plan</h3>
              <div className="space-y-3">
                {result.weeklyTargets?.map((w: any) => (
                  <div key={w.week} className="flex items-center gap-4 rounded-xl bg-white/5 p-3">
                    <span className="text-sm font-bold text-cyan-400 w-14">Week {w.week}</span>
                    <span className="flex-1 text-white/80 text-sm">{w.target}</span>
                    <span className="text-green-400 text-sm font-semibold">{w.expectedScoreGain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus topics */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-6">
              <h3 className="font-bold mb-3 text-red-300">🔥 Focus on These NOW</h3>
              <div className="flex flex-wrap gap-2">
                {result.topicsToFocusNow?.map((t: string, i: number) => (
                  <span key={i} className="rounded-full bg-red-500/20 border border-red-500/30 px-3 py-1 text-sm text-red-200">{t}</span>
                ))}
              </div>
            </div>

            {/* Motivational message */}
            <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5">
              <p className="text-violet-300 font-semibold">💪 Message from AI Mentor</p>
              <p className="text-white/80 mt-2 italic">"{result.motivationalMessage}"</p>
            </div>

            <div className="rounded-xl bg-white/5 p-4 text-center">
              <p className="text-white/60 text-sm">{result.successProbability}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
