import AboutVision from "@/components/AboutVision";
import Footer from "@/components/Footer";
import {
  Bot, Search, Library, Route, Eye, BrainCircuit,
  Trophy, Globe2, Smartphone, AlertTriangle, Cpu,
} from "lucide-react";

export const metadata = {
  title: "About & Mission — SYNERGIC BOND",
  description: "Why SYNERGIC BOND exists — the Chemistry Operating System built to make you fall in love with chemistry. Built for NEET, JEE, Olympiad and GATE.",
};

const problems = [
  "Concepts feel disconnected from each other",
  "Books feel overwhelming and scattered",
  "Reactions feel like memorization traps",
  "No system ever shows how everything connects",
];

const features = [
  { icon: Bot, title: "AI Chemistry Tutor", tag: "24×7 Doubt Engine", what: "Ask anything in natural language — \"Why does SN1 prefer a tertiary carbon?\" — and get instant conceptual breakdowns.", why: "No waiting, no confusion, no memorization pressure — like a personal IIT professor.", accent: "#00F5D4" },
  { icon: Search, title: "Universal Chemistry Search", tag: "Google for Chemistry", what: "Search reactions, formulas, concepts, mechanisms and PYQs — all in one engine.", why: "Stop flipping through 10 books. Everything is one search away.", accent: "#00BBF9" },
  { icon: Library, title: "Knowledge Vault", tag: "Chemistry Brain System", what: "A structured library of concepts, reactions, exceptions, tricks and mechanisms — NCERT to advanced.", why: "Chemistry becomes a connected map, not isolated chapters.", accent: "#9B5DE5" },
  { icon: Route, title: "Track-Based Learning", tag: "Your Path, Your Pace", what: "Pick your goal — NEET Mastery, JEE Advanced, Olympiad (INChO/IChO), or GATE.", why: "No more one-size-fits-all. You study exactly what you need.", accent: "#00F5D4" },
  { icon: Eye, title: "Mechanism Visualizer", tag: "Game-Changer", what: "Watch reactions happen step-by-step — electron flow, bond breaking, intermediate formation.", why: "You don't memorize reactions — you see them happen.", accent: "#00BBF9" },
  { icon: BrainCircuit, title: "Revision Engine", tag: "Smart Memory System", what: "Flashcards, quick facts, high-yield notes and a spaced-revision system.", why: "You forget less and revise smarter.", accent: "#9B5DE5" },
  { icon: Trophy, title: "Exam Intelligence Center", tag: "Clarity Before Exams", what: "Eligibility, syllabus tracking, important dates and strategy guides in one place.", why: "No confusion before exams — only clarity.", accent: "#00F5D4" },
  { icon: Globe2, title: "Olympiad & Global Prep", tag: "Beyond School", what: "Prepare for INChO, IChO, USNCO and AP Chemistry.", why: "We don't stop at school exams — we go beyond.", accent: "#00BBF9" },
  { icon: Smartphone, title: "Mobile-First Chemistry OS", tag: "Learn Anywhere", what: "Fast search, AI tutor on mobile, offline revision and an app-like (PWA) experience.", why: "Learn anytime, anywhere — like scrolling, but learning.", accent: "#9B5DE5" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider mb-6">
          <Cpu className="h-3.5 w-3.5" /> CHEMISTRY OS
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.05]">
          Built to Make You{" "}
          <span className="bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
            Fall in Love with Chemistry
          </span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/65 text-base leading-relaxed">
          SYNERGIC BOND isn't another study website. It's a Chemistry Operating System — a structured intelligence layer that turns scattered knowledge into one connected system.
        </p>
      </section>

      {/* The real problem */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-white/[0.06] bg-[#111827] p-8 md:p-10">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            <h2 className="text-2xl font-black">The Real Problem</h2>
          </div>
          <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-2xl">
            Most students don't fail chemistry because it's hard. They fail because traditional learning leaves knowledge scattered:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/[0.05] px-4 py-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span className="text-sm text-white/70">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
            <div className="flex-1 rounded-xl bg-red-500/5 border border-red-500/15 px-4 py-3 text-white/60">
              ❌ Traditional learning = <span className="font-semibold text-white/80">scattered knowledge</span>
            </div>
            <div className="flex-1 rounded-xl bg-cyan-500/5 border border-cyan-400/20 px-4 py-3 text-white/70">
              ✅ SYNERGIC BOND = <span className="font-semibold text-cyan-300">structured intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">What's Inside</p>
          <h2 className="text-3xl md:text-4xl font-black">Nine Systems. One Chemistry OS.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5 transition hover:-translate-y-1" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border" style={{ background: `${f.accent}14`, borderColor: `${f.accent}30` }}>
                    <Icon className="h-5 w-5" style={{ color: f.accent }} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: `${f.accent}14`, color: f.accent }}>{f.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-3">{f.what}</p>
                <p className="text-xs text-white/50 leading-relaxed border-t border-white/[0.06] pt-3">
                  <span className="font-semibold" style={{ color: f.accent }}>Why it matters: </span>{f.why}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission + pillars (existing) */}
      <AboutVision />

      <Footer />
    </main>
  );
}
