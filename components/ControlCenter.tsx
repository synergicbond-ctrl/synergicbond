"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search, Sparkles, FlaskConical, Table2, Atom, FileText, Mic,
  BookOpen, GraduationCap, ArrowRight, Users, Zap, Trophy,
  BookMarked, GitBranch, Microscope, Lock, RotateCcw, Flame, Compass,
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

// impact → badge style lookup (clean array map, no inline logic in JSX)
const IMPACT_STYLE: Record<WeakTopicInsight["impact"], { label: string; cls: string }> = {
  high:   { label: "High impact", cls: "bg-rose-500/15 text-rose-300 border-rose-500/20" },
  medium: { label: "Medium",      cls: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
  low:    { label: "Low",         cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
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

      {/* Control panel sub-heading (brand hero sits above this section) */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider mb-4">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" /></span>
          CONTROL CENTER
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {isReal ? `Welcome back, ${progress!.name}` : "What do you want to master today?"}
        </h2>
      </div>

      {/* AI global search */}
      <form onSubmit={submit} className="mx-auto max-w-3xl mb-4">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask anything — “Why is SN1 fastest for 3° carbon?”, search a reaction, formula, element…"
            className="w-full rounded-2xl border border-white/[0.1] bg-[#111827] pl-14 pr-28 py-4 text-sm md:text-base text-white placeholder-white/35 outline-none focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]"
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5">
            Ask AI
          </button>
        </div>
      </form>

      {/* Quick actions */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {quickActions.map((a) => {
          const Icon = a.icon;
          return (
            <Link key={a.href} href={a.href} className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:text-white" style={{ borderColor: `${a.c}22` }}>
              <Icon className="h-4 w-4" style={{ color: a.c }} />
              {a.label}
            </Link>
          );
        })}
      </div>

      {/* ===== PRIMARY ZONE — Next Action Engine ===== */}
      {(() => {
        const actions = progress?.nextActions?.length ? progress.nextActions : GUEST_NEXT_ACTIONS;
        const [primary, ...rest] = actions;
        const PIcon = ACTION_ICONS[primary.icon];
        return (
          <div className="mb-10 rounded-3xl p-[1.5px] bg-gradient-to-r from-[#00F5D4]/60 via-[#00BBF9]/40 to-[#9B5DE5]/60 shadow-[0_0_50px_-12px_rgba(0,187,249,0.4)]">
            <div className="rounded-3xl bg-[#0B0F19] p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Compass className="h-4 w-4 text-cyan-300" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">What should I do next?</h2>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-400/20">AI&nbsp;GUIDED</span>
                {/* guest status chip — lives inside the card frame, not floating */}
                {!isReal && (
                  <Link href="/login" className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-500/[0.08] px-2.5 py-0.5 text-[10px] font-semibold text-amber-200/90 transition hover:bg-amber-500/15">
                    <Lock className="h-3 w-3" /> Demo — <span className="underline underline-offset-2">sign in to personalise</span>
                  </Link>
                )}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                {/* The one highlighted action */}
                <Link
                  href={primary.href}
                  className="group relative overflow-hidden rounded-2xl border p-5 transition hover:-translate-y-0.5"
                  style={{ borderColor: `${primary.tone}55`, background: `linear-gradient(135deg, ${primary.tone}1f, transparent)` }}
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-40" style={{ background: primary.tone }} />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${primary.tone}22` }}>
                        <PIcon className="h-5 w-5" style={{ color: primary.tone }} />
                      </span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: primary.tone, background: `${primary.tone}1a` }}>Do this first</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{primary.label}</h3>
                    <p className="mt-1 text-sm text-white/55">{primary.reason}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition group-hover:gap-2.5" style={{ color: primary.tone }}>
                      Start now <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>

                {/* Up-next stack */}
                <div className="flex flex-col gap-2.5">
                  <p className="text-[10px] uppercase tracking-wider text-white/35">Then</p>
                  {rest.map((a) => {
                    const Icon = ACTION_ICONS[a.icon];
                    return (
                      <Link key={a.label} href={a.href} className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#111827] px-4 py-2.5 transition hover:border-white/[0.14]">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `${a.tone}1a` }}>
                          <Icon className="h-4 w-4" style={{ color: a.tone }} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-white">{a.label}</span>
                          <span className="block truncate text-xs text-white/40">{a.reason}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white/60" />
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
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">Your Progress</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid gap-4 md:grid-cols-3 mb-10 opacity-95">
        {coreCards.map((card) => {
          const Icon = card.icon;
          const real = progress?.[card.key];
          const value = real?.pct ?? card.pct;
          const last = real?.last ?? card.last;
          return (
            <div key={card.title} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${card.c}1a` }}><Icon className="h-4.5 w-4.5" style={{ color: card.c }} /></span>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                </div>
                <span className="text-lg font-black" style={{ color: card.c }}>{value}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                <div className="h-full rounded-full" style={{ width: `${value}%`, background: `linear-gradient(to right, ${card.c}, ${card.c}aa)` }} />
              </div>
              <p className="text-xs text-white/45 mb-3">Last: <span className="text-white/70">{last}</span></p>
              <Link href={card.href} className="inline-flex items-center gap-1.5 text-xs font-semibold transition hover:gap-2.5" style={{ color: card.c }}>{card.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          );
        })}
      </div>

      {/* ===== TERTIARY ZONE — system info (calm) ===== */}
      {/* Exam intelligence */}
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Exam Intelligence</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        {examIntel.map((e) => {
          const Icon = e.icon;
          const real = progress?.exams?.[e.key];
          const readiness = real?.readiness ?? e.readiness;
          const weak = real && real.weak.length ? real.weak : isReal ? [] : e.weak;
          return (
            <Link key={e.exam} href={e.href} className="group rounded-2xl bg-[#111827] border p-5 transition hover:-translate-y-1" style={{ borderColor: `${e.c}30` }}>
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-2 font-black text-white">
                  <Icon className="h-4 w-4" style={{ color: e.c }} /> {e.exam}
                </span>
                <span className="text-xs font-bold" style={{ color: e.c }}>{readiness}% ready</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                <div className="h-full rounded-full" style={{ width: `${readiness}%`, background: e.c }} />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/35 mb-1.5">Weak topics</p>
              <div className="flex flex-col gap-1.5">
                {weak.length ? weak.map((w) => {
                  const s = IMPACT_STYLE[w.impact];
                  return (
                    <div key={w.name} className="flex items-center justify-between p-2.5 bg-slate-950/40 border border-slate-900 rounded-lg">
                      <span className="min-w-0 truncate pr-2">
                        <span className="block truncate text-xs font-semibold text-white/85">{w.name}</span>
                        <span className="block truncate text-[10px] text-white/40">{w.recommendation}</span>
                      </span>
                      <span className={`shrink-0 font-semibold px-2 py-0.5 text-[11px] rounded-md border ${s.cls}`}>{s.label}</span>
                    </div>
                  );
                }) : <span className="text-[10px] text-emerald-300/80">None flagged yet 🎉</span>}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Live panel */}
      <Link href="/live" className="group block rounded-2xl p-[1px] mb-8 bg-gradient-to-r from-green-500/40 via-cyan-500/30 to-transparent">
        <div className="rounded-2xl bg-[#111827] p-5 flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" /></span>
            <span className="text-sm font-black text-green-400">LIVE NOW</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80"><Users className="h-4 w-4 text-green-400" /> <b className="text-white tabular-nums">{online.toLocaleString()}</b> online</div>
          <div className="flex items-center gap-2 text-sm text-white/80"><Zap className="h-4 w-4 text-cyan-400" /> 2 mocks running</div>
          <div className="flex items-center gap-2 text-sm text-white/80"><Trophy className="h-4 w-4 text-amber-400" /> Rank Rush in <b className="text-white">2h 15m</b></div>
          <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 transition group-hover:gap-2.5">Enter Arena <ArrowRight className="h-4 w-4" /></span>
        </div>
      </Link>

      {/* Feature highlights */}
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Featured Tools</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Link key={f.href} href={f.href} className="group relative rounded-2xl bg-[#111827] border border-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-white/[0.12]">
              {f.soon && <span className="absolute top-3 right-3 text-[8px] font-bold tracking-wider text-amber-300 bg-amber-500/15 px-1.5 py-0.5 rounded-full">SOON</span>}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl mb-3" style={{ background: `${f.c}1a` }}><Icon className="h-5 w-5" style={{ color: f.c }} /></span>
              <h3 className="text-sm font-bold text-white">{f.label}</h3>
              <p className="text-xs text-white/50 mt-0.5">{f.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
