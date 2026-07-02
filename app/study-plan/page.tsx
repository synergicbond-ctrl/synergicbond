"use client";

import { useState } from "react";
import { masterSyllabus } from "@/lib/masterSyllabus/all";

// Topic list derives from the master-syllabus SSOT (was a hardcoded, drifting list).
const WEAK_TOPICS_LIST = masterSyllabus.map((c) => c.title);

type StudyPlanDay = {
  day: number;
  topic: string;
  tasks?: string[];
  duration?: string;
  goal?: string;
};

type StudyPlanWeek = {
  week: number;
  theme: string;
  focus?: string;
  days?: StudyPlanDay[];
};

type StudyPlan = {
  title?: string;
  strategy?: string;
  dailyRoutine?: Record<string, string>;
  weeks?: StudyPlanWeek[];
  tips?: string[];
};

export default function StudyPlanPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [examType, setExamType] = useState("NEET");
  const [examDate, setExamDate] = useState("");
  const [hours, setHours] = useState(4);
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleTopic(t: string) {
    setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  }

  async function generatePlan() {
    if (selectedTopics.length === 0) return;
    setLoading(true);
    setPlan(null);
    setError("");
    try {
      const res = await fetch("/api/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weakTopics: selectedTopics, examType, examDate, hoursPerDay: hours }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setPlan(data.plan);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to generate study plan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">🤖 Personalized Study Plan</h1>
          <p className="mt-2 text-white/60">AI builds your custom 30-day chemistry revision roadmap</p>
        </div>

        {!plan && (
          <div className="space-y-6">
            {/* Exam */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-4">1. Select Your Exam</h3>
              <div className="flex flex-wrap gap-2">
                {["NEET", "JEE Main", "JEE Advanced", "GATE", "NSEC"].map((e) => (
                  <button key={e} onClick={() => setExamType(e)}
                    className={`rounded-xl px-4 py-2 font-semibold transition ${examType === e ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 hover:bg-white/10"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* Weak topics */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold mb-4">2. Select Your Weak Topics ({selectedTopics.length} selected)</h3>
              <div className="flex flex-wrap gap-2">
                {WEAK_TOPICS_LIST.map((t) => (
                  <button key={t} onClick={() => toggleTopic(t)}
                    className={`rounded-full px-3 py-1.5 text-sm transition ${selectedTopics.includes(t) ? "bg-red-500/30 border border-red-500/50 text-red-200" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`}>
                    {selectedTopics.includes(t) ? "✗ " : "+ "}{t}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Hours */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-bold mb-3">3. Exam Date (optional)</h3>
                <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-bold mb-3">4. Daily Study Hours: {hours}h</h3>
                <input type="range" min={1} max={12} value={hours} onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-cyan-500" />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>1h</span><span>6h</span><span>12h</span>
                </div>
              </div>
            </div>

            {error && <p className="text-red-400">{error}</p>}

            <button onClick={generatePlan} disabled={selectedTopics.length === 0 || loading}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold text-black disabled:opacity-40 text-lg">
              {loading ? "🤖 AI is building your plan..." : "🚀 Generate My Study Plan"}
            </button>
          </div>
        )}

        {plan && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <button onClick={() => setPlan(null)} className="text-sm text-white/40 hover:text-white transition">← Start over</button>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4">
              <p className="text-cyan-300 font-semibold">Strategy</p>
              <p className="text-white/80 mt-1">{plan.strategy}</p>
            </div>

            {/* Daily Routine */}
            <div className="grid gap-3 sm:grid-cols-3">
              {Object.entries(plan.dailyRoutine || {}).map(([time, task]) => (
                <div key={time} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/40 capitalize mb-1">🕐 {time}</p>
                  <p className="text-white/80 text-sm">{task as string}</p>
                </div>
              ))}
            </div>

            {/* Weeks */}
            {plan.weeks?.map((week) => (
              <div key={week.week} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-bold text-lg mb-1">Week {week.week}: {week.theme}</h3>
                <p className="text-white/50 text-sm mb-4">{week.focus}</p>
                <div className="space-y-3">
                  {week.days?.slice(0, 3).map((day) => (
                    <div key={day.day} className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="rounded-full bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1">Day {day.day}</span>
                        <span className="font-semibold">{day.topic}</span>
                        <span className="text-white/40 text-xs ml-auto">{day.duration}</span>
                      </div>
                      <p className="text-white/60 text-sm">{day.goal}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {day.tasks?.map((t: string, i: number) => (
                          <span key={i} className="text-xs bg-white/10 rounded px-2 py-0.5 text-white/60">✓ {t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  {Math.max((week.days?.length ?? 0) - 3, 0) > 0 && (
                    <p className="text-white/30 text-sm">+{Math.max((week.days?.length ?? 0) - 3, 0)} more days...</p>
                  )}
                </div>
              </div>
            ))}

            {/* Tips */}
            <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6">
              <h3 className="font-bold mb-3 text-violet-300">💡 Expert Tips</h3>
              {plan.tips?.map((tip: string, i: number) => (
                <p key={i} className="text-white/80 text-sm mb-1">• {tip}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
