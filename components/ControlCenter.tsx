"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search, Sparkles, FlaskConical, Table2, Atom, FileText,
  BookOpen, GraduationCap, ArrowRight, Users, Zap, Trophy,
  BookMarked, GitBranch, Microscope, Lock, RotateCcw, Flame, Compass,
  Activity, Award, CheckCircle2, Clock, TrendingUp, ShieldAlert
} from "lucide-react";
import type { ControlCenterProgress, ActionIcon, WeakTopicInsight } from "@/lib/controlCenterTypes";
import { GUEST_NEXT_ACTIONS } from "@/lib/controlCenterTypes";

const ACTION_ICONS: Record<ActionIcon, typeof Sparkles> = {
  revise: RotateCcw,
  quiz: FlaskConical,
  mock: FileText,
  learn: BookOpen,
  streak: Flame,
  tutor: Sparkles,
};

const quickActions = [
  { href: "/doubt-solver", label: "Solve Doubt", icon: Sparkles, c: "#00F5D4" },
  { href: "/quiz",         label: "Start Quiz",  icon: FlaskConical, c: "#00BBF9" },
  { href: "/periodic-table", label: "Periodic Table", icon: Table2, c: "#9B5DE5" },
  { href: "/molecule",     label: "Molecule Explorer", icon: Atom, c: "#00F5D4" },
  { href: "/exam",         label: "Mock Exam",   icon: FileText, c: "#00BBF9" },
];

// Static presentation meta + demo values (shown to guests). Real values are merged from props.
const coreCards = [
  { key: "learn" as const,    title: "Learn Progress",    pct: 62, last: "Coordination Compounds", href: "/vault", cta: "Continue", icon: BookOpen, c: "#00F5D4" },
  { key: "practice" as const, title: "Practice Progress", pct: 48, last: "JEE Mock #4 — 168/180", href: "/quiz", cta: "Practice", icon: FlaskConical, c: "#00BBF9" },
  { key: "aiLab" as const,    title: "AI Lab & Momentum", pct: 70, last: "Level 4 · 7-day streak", href: "/doubt-solver", cta: "Open AI Lab", icon: Sparkles, c: "#9B5DE5" },
];

const examIntel: {
  key: string; exam: string; href: string; readiness: number;
  weak: WeakTopicInsight[]; icon: typeof Atom; c: string;
}[] = [
  { key: "neet",     exam: "NEET", href: "/neet", readiness: 74, weak: [
    { name: "Qualitative Analysis", impact: "high", recommendation: "Revise + 15 MCQs" },
    { name: "Thermodynamics", impact: "medium", recommendation: "10 MCQs today" },
  ], icon: Microscope, c: "#00F5D4" },
  { key: "jee",      exam: "JEE", href: "/jee", readiness: 61, weak: [
    { name: "Chemical Kinetics", impact: "high", recommendation: "Revise + 15 MCQs" },
    { name: "GOC", impact: "medium", recommendation: "10 MCQs today" },
  ], icon: Atom, c: "#00BBF9" },
  { key: "olympiad", exam: "Olympiad", href: "/olympiads", readiness: 38, weak: [
    { name: "Coordination", impact: "high", recommendation: "Revise + 15 MCQs" },
    { name: "Stereochemistry", impact: "low", recommendation: "Quick review" },
  ], icon: Trophy, c: "#9B5DE5" },
  { key: "gate",     exam: "GATE", href: "/gate", readiness: 22, weak: [
    { name: "Spectroscopy", impact: "high", recommendation: "Revise + 15 MCQs" },
    { name: "Quantum", impact: "medium", recommendation: "10 MCQs today" },
  ], icon: GraduationCap, c: "#C084FC" },
];

const IMPACT_STYLE: Record<WeakTopicInsight["impact"], { label: string; cls: string }> = {
  high:   { label: "High impact", cls: "bg-rose-500/15 text-rose-300 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.15)]" },
  medium: { label: "Medium",      cls: "bg-amber-500/15 text-amber-300 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.15)]" },
  low:    { label: "Low",         cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]" },
};

const features = [
  { href: "/periodic-table", label: "Periodic Table", desc: "Interactive trends & data", icon: Table2, c: "#00F5D4" },
  { href: "/molecule", label: "Molecule Explorer", desc: "Look up any compound", icon: Atom, c: "#00BBF9" },
  { href: "/reaction-predictor", label: "Reaction Predictor", desc: "A + B → ? (AI · soon)", icon: GitBranch, c: "#9B5DE5", soon: true },
  { href: "/library", label: "Book Library", desc: "70+ world-class textbooks", icon: BookMarked, c: "#C084FC" },
];

export default function ControlCenter({ progress }: { progress?: ControlCenterProgress | null }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [online, setOnline] = useState(4310);
  const isReal = !!progress;

  useEffect(() => {
    const id = setInterval(() => setOnline(4310 + Math.floor(Math.random() * 80) - 40), 2500);
    return () => clearInterval(id);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const s = q.trim().replace(/[<>{}]/g, "");
    router.push(s ? `/search?q=${encodeURIComponent(s)}` : "/search");
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pt-2 pb-6">

      {/* Control panel sub-heading */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-violet-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider mb-4 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(34,211,238,0.25)]">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" /></span>
          CONTROL CENTER
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-sm">
          {isReal ? `Welcome back, ${progress!.name}` : "What do you want to master today?"}
        </h2>
      </div>

      {/* AI global search with OS-level depth */}
      <form onSubmit={submit} className="mx-auto max-w-3xl mb-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 opacity-30 blur-md transition duration-300 group-hover:opacity-60 group-focus-within:opacity-80" />
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 transition-transform duration-300 group-focus-within:scale-110" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask anything — “Why is SN1 fastest for 3° carbon?”, search a reaction, formula, element…"
              className="w-full rounded-2xl border border-white/15 bg-[#0B0F19]/90 backdrop-blur-xl pl-14 pr-28 py-4.5 text-sm md:text-base text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-[#111827] focus:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-2.5 text-sm font-extrabold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              Ask AI
            </button>
          </div>
        </div>
      </form>

      {/* Quick actions with hover elevation */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {quickActions.map((a) => {
          const Icon = a.icon;
          return (
            <Link 
              key={a.href} 
              href={a.href} 
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-[#111827]/80 backdrop-blur-md px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#1f2937]/90 hover:text-white hover:shadow-xl" 
              style={{ borderColor: `${a.c}33` }}
            >
              <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" style={{ color: a.c }} />
              {a.label}
            </Link>
          );
        })}
      </div>

      {/* ===== TODAY DASHBOARD WIDGET & ACTIVITY FEED UI ===== */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] mb-12">
        {/* Today Dashboard Widget */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 p-6 md:p-7 backdrop-blur-xl shadow-2xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/30">
                <Activity className="h-5 w-5 text-cyan-400" />
              </span>
              <div>
                <h3 className="text-base font-black text-white">Today Dashboard Widget</h3>
                <p className="text-xs text-white/50">Real-time learning telemetry &amp; daily momentum</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                <Award className="h-3.5 w-3.5 text-cyan-400" /> XP
              </div>
              <div className="text-2xl font-black text-white tracking-tight">2,450 <span className="text-xs font-bold text-cyan-400">XP</span></div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
              <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Questions Solved
              </div>
              <div className="text-2xl font-black text-white tracking-tight">42 <span className="text-xs font-bold text-sky-400">Solved</span></div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.05]">
              <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                <Flame className="h-3.5 w-3.5 text-amber-400" /> Current Streak
              </div>
              <div className="text-2xl font-black text-white tracking-tight">7 <span className="text-xs font-bold text-amber-400">Days 🔥</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">Weakest Topic Flagged</span>
                <p className="text-sm font-bold text-white">Ionic Equilibrium (pH &amp; Buffer Systems)</p>
              </div>
            </div>
            <Link href="/quiz" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/15 border border-rose-500/30 px-3.5 py-2 text-xs font-bold text-rose-200 transition hover:bg-rose-500/25 shrink-0">
              Recommended Next Action <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Activity Feed UI */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 p-6 md:p-7 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/30">
                  <Clock className="h-5 w-5 text-violet-400" />
                </span>
                <div>
                  <h3 className="text-base font-black text-white">Activity Feed UI</h3>
                  <p className="text-xs text-white/50">Recent study milestones &amp; AI sessions</p>
                </div>
              </div>
              <TrendingUp className="h-5 w-5 text-violet-400/60" />
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition hover:border-white/15 hover:bg-white/[0.04]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                  <FlaskConical className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300">Quiz Completed</span>
                    <span className="text-[10px] text-white/40">2h ago</span>
                  </div>
                  <p className="text-xs text-white/80 font-medium truncate mt-0.5">JEE Advanced Mock #4 — 168/180</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition hover:border-white/15 hover:bg-white/[0.04]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300">AI Tutor Session</span>
                    <span className="text-[10px] text-white/40">4h ago</span>
                  </div>
                  <p className="text-xs text-white/80 font-medium truncate mt-0.5">Arrow-pushing mechanism for Aldol Condensation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition hover:border-white/15 hover:bg-white/[0.04]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300">Chapter Learned</span>
                    <span className="text-[10px] text-white/40">Yesterday</span>
                  </div>
                  <p className="text-xs text-white/80 font-medium truncate mt-0.5">Coordination Compounds (Synergic Bonding)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
            <Link href="/vault" className="text-xs font-bold text-violet-300 hover:text-white transition inline-flex items-center gap-1">
              View Complete Telemetry Log <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== PRIMARY ZONE — Next Action Engine ===== */}
      {(() => {
        const actions = progress?.nextActions?.length ? progress.nextActions : GUEST_NEXT_ACTIONS;
        const [primary, ...rest] = actions;
        const PIcon = ACTION_ICONS[primary.icon];
        return (
          <div className="mb-12 rounded-3xl p-[1.5px] bg-gradient-to-r from-[#00F5D4]/80 via-[#00BBF9]/60 to-[#9B5DE5]/80 shadow-[0_0_60px_-10px_rgba(0,187,249,0.45)] transition-all duration-500 hover:shadow-[0_0_80px_-10px_rgba(0,187,249,0.6)]">
            <div className="rounded-3xl bg-[#0B0F19] p-6 md:p-8 backdrop-blur-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Compass className="h-4.5 w-4.5 text-cyan-300" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">What should I do next?</h2>
                <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-400/30 shadow-sm">AI&nbsp;GUIDED</span>
                {!isReal && (
                  <Link href="/login" className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/[0.1] px-3 py-1 text-[11px] font-semibold text-amber-200/90 transition hover:bg-amber-500/20 hover:scale-105">
                    <Lock className="h-3 w-3" /> Demo — <span className="underline underline-offset-2">sign in to personalise</span>
                  </Link>
                )}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                {/* The one highlighted action */}
                <Link
                  href={primary.href}
                  className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ borderColor: `${primary.tone}66`, background: `linear-gradient(135deg, ${primary.tone}26, transparent)` }}
                >
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl opacity-50 transition-transform duration-500 group-hover:scale-125" style={{ background: primary.tone }} />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl shadow-md" style={{ background: `${primary.tone}33` }}>
                        <PIcon className="h-5 w-5" style={{ color: primary.tone }} />
                      </span>
                      <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm" style={{ color: primary.tone, background: `${primary.tone}26` }}>Do this first</span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">{primary.label}</h3>
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{primary.reason}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3" style={{ color: primary.tone }}>
                      Start now <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>

                {/* Up-next stack */}
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Then</p>
                  {rest.map((a) => {
                    const Icon = ACTION_ICONS[a.icon];
                    return (
                      <Link key={a.label} href={a.href} className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-[#111827]/90 px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#1a2332] hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: `${a.tone}26` }}>
                          <Icon className="h-4.5 w-4.5" style={{ color: a.tone }} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold text-white">{a.label}</span>
                          <span className="block truncate text-xs text-white/50 mt-0.5">{a.reason}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white/80" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ===== SECONDARY ZONE — progress snapshot ===== */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Your Progress</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <div className="grid gap-5 md:grid-cols-3 mb-12">
        {coreCards.map((card) => {
          const Icon = card.icon;
          const real = progress?.[card.key];
          const value = real?.pct ?? card.pct;
          const last = real?.last ?? card.last;
          return (
            <div key={card.title} className="group rounded-3xl bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 border border-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl shadow-inner" style={{ background: `${card.c}26` }}><Icon className="h-5 w-5" style={{ color: card.c }} /></span>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                </div>
                <span className="text-xl font-black tracking-tight" style={{ color: card.c }}>{value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-4 p-0.5">
                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${value}%`, background: `linear-gradient(to right, ${card.c}, ${card.c}cc)` }} />
              </div>
              <p className="text-xs text-white/50 mb-4">Last: <span className="text-white/80 font-medium">{last}</span></p>
              <Link href={card.href} className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-2.5" style={{ color: card.c }}>{card.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          );
        })}
      </div>

      {/* ===== TERTIARY ZONE — system info (calm) ===== */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Exam Intelligence</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-10">
        {examIntel.map((e) => {
          const Icon = e.icon;
          const real = progress?.exams?.[e.key];
          const readiness = real?.readiness ?? e.readiness;
          const weak = real && real.weak.length ? real.weak : isReal ? [] : e.weak;
          return (
            <Link key={e.exam} href={e.href} className="group rounded-3xl bg-[#111827]/80 border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl" style={{ borderColor: `${e.c}33` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2.5 font-black text-base text-white">
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" style={{ color: e.c }} /> {e.exam}
                </span>
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-md" style={{ color: e.c, background: `${e.c}1a` }}>{readiness}% ready</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-4 p-0.5">
                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${readiness}%`, background: e.c }} />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Weak topics</p>
              <div className="flex flex-col gap-2">
                {weak.length ? weak.map((w) => {
                  const s = IMPACT_STYLE[w.impact];
                  return (
                    <div key={w.name} className={`flex items-center justify-between p-2.5 bg-slate-950/60 border rounded-xl transition ${s.cls}`}>
                      <span className="min-w-0 truncate pr-2">
                        <span className="block truncate text-xs font-bold text-white/90">{w.name}</span>
                        <span className="block truncate text-[10px] text-white/50 mt-0.5">{w.recommendation}</span>
                      </span>
                      <span className={`shrink-0 font-bold px-2 py-0.5 text-[10px] rounded-md border ${s.cls}`}>{s.label}</span>
                    </div>
                  );
                }) : <span className="text-xs text-emerald-300/90 font-medium py-1">None flagged yet 🎉</span>}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Live panel with pulsing OS telemetry glow */}
      <Link href="/live" className="group block rounded-3xl p-[1.5px] mb-10 bg-gradient-to-r from-green-500/60 via-cyan-500/40 to-transparent shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(34,197,94,0.45)]">
        <div className="rounded-3xl bg-[#0B0F19] p-6 flex items-center gap-6 flex-wrap backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3.5 w-3.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 shadow-[0_0_10px_#22c55e]" /></span>
            <span className="text-sm font-black text-green-400 tracking-wider">LIVE NOW</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80 font-medium"><Users className="h-4 w-4 text-green-400" /> <b className="text-white tabular-nums font-bold">{online.toLocaleString()}</b> online</div>
          <div className="flex items-center gap-2 text-sm text-white/80 font-medium"><Zap className="h-4 w-4 text-cyan-400" /> 2 mocks running</div>
          <div className="flex items-center gap-2 text-sm text-white/80 font-medium"><Trophy className="h-4 w-4 text-amber-400" /> Rank Rush in <b className="text-white font-bold">2h 15m</b></div>
          <span className="ml-auto inline-flex items-center gap-2 text-sm font-bold text-green-400 transition-all duration-200 group-hover:gap-3">Enter Arena <ArrowRight className="h-4 w-4" /></span>
        </div>
      </Link>

      {/* Feature highlights */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Featured Tools</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Link key={f.href} href={f.href} className="group relative rounded-3xl bg-[#111827]/80 border border-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-xl">
              {f.soon && <span className="absolute top-4 right-4 text-[9px] font-extrabold tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">SOON</span>}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${f.c}26` }}><Icon className="h-5.5 w-5.5" style={{ color: f.c }} /></span>
              <h3 className="text-base font-bold text-white">{f.label}</h3>
              <p className="text-xs text-white/55 mt-1 leading-relaxed">{f.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

