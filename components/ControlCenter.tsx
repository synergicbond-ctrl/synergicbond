"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search, Sparkles, FlaskConical, Table2, Atom, FileText, Mic,
  BookOpen, GraduationCap, ArrowRight, Users, Zap, Trophy,
  BookMarked, GitBranch, Microscope,
} from "lucide-react";

const quickActions = [
  { href: "/doubt-solver", label: "Solve Doubt", icon: Sparkles, c: "#00F5D4" },
  { href: "/quiz",         label: "Start Quiz",  icon: FlaskConical, c: "#00BBF9" },
  { href: "/periodic-table", label: "Periodic Table", icon: Table2, c: "#9B5DE5" },
  { href: "/molecule",     label: "Molecule Explorer", icon: Atom, c: "#00F5D4" },
  { href: "/exam",         label: "Mock Exam",   icon: FileText, c: "#00BBF9" },
];

const coreCards = [
  { title: "Learn Progress", pct: 62, last: "Coordination Compounds", href: "/vault", cta: "Continue", icon: BookOpen, c: "#00F5D4" },
  { title: "Practice Progress", pct: 48, last: "JEE Mock #4 — 168/180", href: "/quiz", cta: "Practice", icon: FlaskConical, c: "#00BBF9" },
  { title: "AI Lab Usage", pct: 70, last: "Doubt solved 3h ago", href: "/doubt-solver", cta: "Open AI Lab", icon: Sparkles, c: "#9B5DE5" },
];

const examIntel = [
  { exam: "NEET", href: "/neet", readiness: 74, weak: ["Qualitative Analysis", "Thermodynamics"], icon: Microscope, c: "#00F5D4" },
  { exam: "JEE", href: "/jee", readiness: 61, weak: ["Chemical Kinetics", "GOC"], icon: Atom, c: "#00BBF9" },
  { exam: "Olympiad", href: "/olympiads", readiness: 38, weak: ["Coordination", "Stereochemistry"], icon: Trophy, c: "#9B5DE5" },
  { exam: "GATE", href: "/gate", readiness: 22, weak: ["Spectroscopy", "Quantum"], icon: GraduationCap, c: "#C084FC" },
];

const features = [
  { href: "/periodic-table", label: "Periodic Table", desc: "Interactive trends & data", icon: Table2, c: "#00F5D4" },
  { href: "/molecule", label: "Molecule Explorer", desc: "Look up any compound", icon: Atom, c: "#00BBF9" },
  { href: "/reaction-predictor", label: "Reaction Predictor", desc: "A + B → ? (AI · soon)", icon: GitBranch, c: "#9B5DE5", soon: true },
  { href: "/library", label: "Book Library", desc: "70+ world-class textbooks", icon: BookMarked, c: "#C084FC" },
];

export default function ControlCenter() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [online, setOnline] = useState(4310);

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
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">

      {/* Hero control panel */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider mb-4">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" /></span>
          CHEMISTRY OS · CONTROL CENTER
        </div>
        <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent tracking-tight">
          What do you want to master today?
        </h1>
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

      {/* 3 core system cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {coreCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${card.c}1a` }}><Icon className="h-4.5 w-4.5" style={{ color: card.c }} /></span>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                </div>
                <span className="text-lg font-black" style={{ color: card.c }}>{card.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                <div className="h-full rounded-full" style={{ width: `${card.pct}%`, background: `linear-gradient(to right, ${card.c}, ${card.c}aa)` }} />
              </div>
              <p className="text-xs text-white/45 mb-3">Last: <span className="text-white/70">{card.last}</span></p>
              <Link href={card.href} className="inline-flex items-center gap-1.5 text-xs font-semibold transition hover:gap-2.5" style={{ color: card.c }}>{card.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          );
        })}
      </div>

      {/* Exam intelligence */}
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Exam Intelligence</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        {examIntel.map((e) => {
          const Icon = e.icon;
          return (
            <Link key={e.exam} href={e.href} className="group rounded-2xl bg-[#111827] border p-5 transition hover:-translate-y-1" style={{ borderColor: `${e.c}30` }}>
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-2 font-black text-white">
                  <Icon className="h-4 w-4" style={{ color: e.c }} /> {e.exam}
                </span>
                <span className="text-xs font-bold" style={{ color: e.c }}>{e.readiness}% ready</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                <div className="h-full rounded-full" style={{ width: `${e.readiness}%`, background: e.c }} />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/35 mb-1">Weak topics</p>
              <div className="flex flex-wrap gap-1">
                {e.weak.map((w) => <span key={w} className="text-[10px] text-red-300 bg-red-500/10 px-1.5 py-0.5 rounded-full">{w}</span>)}
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
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Featured Tools</h2>
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
