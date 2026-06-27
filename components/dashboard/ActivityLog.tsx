"use client";

import { useState, useEffect } from "react";
import {
  Clock, BookOpen, Search, Target, ClipboardCheck,
  Timer, Trophy, Lock, CheckCircle2, XCircle, TrendingUp,
} from "lucide-react";

// ── DEMO DATA — replace each block with Supabase queries when wiring backend ──
const recentlyRead = [
  { title: "Chemical Bonding & VSEPR", type: "Chapter", when: "2h ago" },
  { title: "J.D. Lee — Coordination Compounds", type: "Book", when: "Yesterday" },
  { title: "Thermodynamics: Entropy", type: "Theory Log", when: "2 days ago" },
  { title: "Aldol Condensation", type: "Reaction", when: "3 days ago" },
];
const searchHistory = ["SN2 mechanism", "KMnO4 oxidation states", "Nernst equation", "Lanthanide contraction", "Hybridization of XeF4"];
const assignments = [
  { name: "Organic Chemistry Set 4", status: "Submitted", color: "text-emerald-400 bg-emerald-500/10" },
  { name: "Mole Concept Drill", status: "Submitted", color: "text-emerald-400 bg-emerald-500/10" },
  { name: "Electrochemistry Worksheet", status: "Pending", color: "text-amber-400 bg-amber-500/10" },
  { name: "p-Block Elements Quiz", status: "Overdue", color: "text-red-400 bg-red-500/10" },
];
const timeSpent = [
  { paper: "JEE Main Mock #3", mins: 178 },
  { paper: "NEET Mock #2", mins: 142 },
  { paper: "Inorganic PYQ Set", mins: 96 },
];
const solved = { correct: 247, incorrect: 63 };
const hasMockAttempt = false; // flip true once a full-syllabus mock is attempted

function fmt(s: number) {
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

export default function ActivityLog() {
  const [seconds, setSeconds] = useState(0);

  // Live focus timer — counts up while the page is open
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const accuracy = Math.round((solved.correct / (solved.correct + solved.incorrect)) * 100);
  const maxMins = Math.max(...timeSpent.map((t) => t.mins));

  return (
    <div className="space-y-5">

      {/* Focus timer */}
      <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <Clock className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-white/70 tracking-wide">⚡ SESSION FOCUS TIME</span>
        </div>
        <span className="text-lg font-black font-mono text-cyan-300 tabular-nums">{fmt(seconds)}</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {/* Recently Read */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Recently Read</h3>
          </div>
          <div className="space-y-2.5">
            {recentlyRead.map((r) => (
              <div key={r.title} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-white/50 flex-shrink-0">{r.type}</span>
                  <span className="text-white/70 truncate">{r.title}</span>
                </div>
                <span className="text-white/30 flex-shrink-0 ml-2">{r.when}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search History */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-purple-400" />
            <h3 className="text-sm font-bold text-white">Search History</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((q) => (
              <span key={q} className="text-xs text-white/60 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full">
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* Solved Engine */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Solved Engine</h3>
          </div>
          <div className="flex items-center gap-6">
            {/* Accuracy ring */}
            <div className="relative h-20 w-20 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray={`${accuracy}, 100`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-black text-white">{accuracy}%</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /><span className="text-white/70">{solved.correct} Correct</span></div>
              <div className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /><span className="text-white/70">{solved.incorrect} Incorrect</span></div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-cyan-400" /><span className="text-white/50 text-xs">{solved.correct + solved.incorrect} total attempts</span></div>
            </div>
          </div>
        </div>

        {/* Assignments Tracker */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardCheck className="h-4 w-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">Assignments Tracker</h3>
          </div>
          <div className="space-y-2.5">
            {assignments.map((a) => (
              <div key={a.name} className="flex items-center justify-between text-xs">
                <span className="text-white/70">{a.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.color}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time-Spent on Paper */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Timer className="h-4 w-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Time-Spent on Paper</h3>
          </div>
          <div className="space-y-3">
            {timeSpent.map((t) => (
              <div key={t.paper}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">{t.paper}</span>
                  <span className="text-white/40">{t.mins} min</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" style={{ width: `${(t.mins / maxMins) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National Rank Engine */}
        <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-4 w-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">National Rank Engine</h3>
          </div>
          {hasMockAttempt ? (
            <div className="text-center py-4">
              <p className="text-4xl font-black text-amber-400">#2,847</p>
              <p className="text-xs text-white/40 mt-1">Estimated National Rank</p>
            </div>
          ) : (
            <div className="text-center py-6">
              <Lock className="h-8 w-8 text-white/20 mx-auto mb-3" />
              <p className="text-sm text-white/50 font-medium">Rank Locked</p>
              <p className="text-xs text-white/30 mt-1 max-w-[220px] mx-auto">
                Attempt one Full-Syllabus Mock Paper to unlock your estimated national rank.
              </p>
              <a href="/exam" className="inline-block mt-4 text-xs font-bold bg-amber-500 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition">
                Take Full Mock →
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
