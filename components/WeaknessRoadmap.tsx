"use client";

import { useState } from "react";
import { Target, BookOpen, Layers, ClipboardCheck, ArrowRight } from "lucide-react";

// Client-side sanitizer (defense against XSS in the weakness input)
function sanitize(s: string) {
  return s.replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/on\w+\s*=/gi, "").slice(0, 120).trim();
}

const commonWeak = [
  "Inorganic Qualitative Analysis", "Thermodynamics Entropy", "Chemical Kinetics",
  "Coordination Compounds", "Organic Mechanisms", "Electrochemistry",
];

export default function WeaknessRoadmap() {
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState<string | null>(null);

  function generate(t: string) {
    const clean = sanitize(t);
    if (!clean) return;
    setPlan(clean);
  }

  const days = plan
    ? [
        {
          day: "Day 1",
          icon: BookOpen,
          title: "High-Yield Core Theory",
          accent: "#00F5D4",
          tasks: [
            `Read the complete theory of "${plan}" using the multicolor notes engine`,
            "Highlight every formula in cyan and exception in crimson",
            "Watch 1 concept video + make a one-page summary",
          ],
        },
        {
          day: "Day 2",
          icon: Layers,
          title: "Flashcards & Exceptions Review",
          accent: "#9B5DE5",
          tasks: [
            `Drill 30 flashcards focused on "${plan}"`,
            "Revise all anomalies & edge cases from the Exception Vault",
            "Self-test: recall without looking, mark gaps",
          ],
        },
        {
          day: "Day 3",
          icon: ClipboardCheck,
          title: "Adaptive Practice & Mock Drill",
          accent: "#FFD700",
          tasks: [
            `Solve 20 adaptive questions on "${plan}" (easy → hard)`,
            "Attempt a sub-syllabus mini-mock (timed)",
            "Review every mistake — log it to your weak-topic tracker",
          ],
        },
      ]
    : [];

  return (
    <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6 md:p-8">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 rounded-lg bg-cyan-500/10">
          <Target className="h-4 w-4 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Weakness Analytics</h3>
          <p className="text-xs text-white/40">Get a personalized 3-day recovery roadmap</p>
        </div>
      </div>

      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generate(topic)}
          placeholder="Enter your weak topic, e.g. Inorganic Qualitative Analysis"
          className="flex-1 rounded-xl border border-white/[0.08] bg-black/40 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50"
        />
        <button
          onClick={() => generate(topic)}
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
        >
          Build My Plan
        </button>
      </div>

      {/* Quick picks */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {commonWeak.map((w) => (
          <button
            key={w}
            onClick={() => { setTopic(w); generate(w); }}
            className="text-[11px] text-white/50 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full hover:text-white hover:border-cyan-400/30 transition"
          >
            {w}
          </button>
        ))}
      </div>

      {/* Roadmap output — same uniform bg, only content swaps */}
      {plan && (
        <div className="grid gap-3 md:grid-cols-3">
          {days.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.day} className="rounded-2xl bg-black/30 border border-white/[0.06] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg" style={{ background: `${d.accent}1a` }}>
                    <Icon className="h-4 w-4" style={{ color: d.accent }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: d.accent }}>{d.day}</p>
                    <p className="text-xs font-bold text-white">{d.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {d.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                      <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" style={{ color: d.accent }} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
