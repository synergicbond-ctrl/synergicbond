"use client";
import { Rocket, BookOpenCheck, BrainCircuit, Sparkles, CheckCircle, Quote, ShieldCheck, Layers, Cpu, Eye } from "lucide-react";
import { useT } from "@/lib/i18n";

const pillars = [
  {
    icon: Rocket,
    tkey: "about.pillar1", bodyKey: "about.pillar1body",
    title: "Built for Elite Ranks",
    body: "Engineered to decode the highest-tier conceptual patterns of JEE Advanced, NEET, and International Olympiads through algorithmic problem breakdown.",
    accent: "text-[var(--accent)]",
    border: "border-[var(--border)]",
    bg: "bg-[var(--surface-2)]",
  },
  {
    icon: BookOpenCheck,
    tkey: "about.pillar2", bodyKey: "about.pillar2body",
    title: "Beyond the Textbook",
    body: "We transform rigid rote-memorization into dynamic visual mechanisms and algorithmic practice — so chemistry becomes intuition, not cramming.",
    accent: "text-[var(--accent)]",
    border: "border-[var(--border)]",
    bg: "bg-[var(--surface-2)]",
  },
  {
    icon: BrainCircuit,
    tkey: "about.pillar3", bodyKey: "about.pillar3body",
    title: "Human Intelligence + AI",
    body: "Fine-tuned core chemistry data trained to assist students 24/7 with zero placeholders — verified chemistry explanations powered by AI speed.",
    accent: "text-[var(--accent)]",
    border: "border-[var(--border)]",
    bg: "bg-[var(--surface-2)]",
  },
];

const platformCapabilities = [
  { icon: Cpu, text: "Schema-Governed AI Architecture", color: "text-[var(--accent)]", bg: "bg-[var(--surface-2)] border-[var(--border)]" },
  { icon: ShieldCheck, text: "100% Verified Chemistry Question Bank", color: "text-[var(--accent)]", bg: "bg-[var(--surface-2)] border-[var(--border)]" },
  { icon: Eye, text: "Dynamic 3D & Reaction Visualizations", color: "text-[var(--accent)]", bg: "bg-[var(--surface-2)] border-[var(--border)]" },
  { icon: Layers, text: "Strict Program Content Isolation", color: "text-[var(--accent)]", bg: "bg-[var(--surface-2)] border-[var(--border)]" },
];

export default function AboutVision() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Gradient divider */}
      <div className="h-px w-full mb-20 bg-[var(--border)]" />

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center mb-24">
        {/* Left — mission statement */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-1.5 text-[var(--accent)] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            {t("about.eyebrow")}
          </div>
          <h2 className="text-4xl font-black leading-tight md:text-5xl text-[var(--foreground)]">
            {t("about.missionTitle")}
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed text-base sm:text-lg">
            {t("about.body")}
          </p>

          <div className="mt-10 flex gap-6 flex-wrap items-center">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">200+</span>
              <span className="text-xs text-white/65 font-bold uppercase tracking-wider mt-1">{t("about.stat1")}</span>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">24/7</span>
              <span className="text-xs text-white/65 font-bold uppercase tracking-wider mt-1">{t("about.stat2")}</span>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">100%</span>
              <span className="text-xs text-white/65 font-bold uppercase tracking-wider mt-1">{t("about.stat3")}</span>
            </div>
          </div>
        </div>

        {/* Right — trust pillars */}
        <div className="flex flex-col gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group rounded-lg border ${p.border} ${p.bg} p-6 flex gap-5 items-start backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl`}
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-white/10 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className={`h-6 w-6 ${p.accent}`} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white mb-1.5 group-hover:text-white transition-colors">{t(p.tkey)}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium">{t(p.bodyKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Synergic Bond — Platform Excellence Block */}
      <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-purple-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />
        <Quote className="absolute right-8 top-8 h-36 w-36 text-white/[0.03] pointer-events-none transform -rotate-12" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
          {/* Architectural Elevation & Badge Hierarchy */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative mb-5 group">
              <div className="absolute -inset-1 rounded-lg bg-[var(--accent)]/30 blur-md transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-lg bg-[var(--background)] border border-white/20 shadow-2xl">
                <BrainCircuit className="h-16 w-16 text-[var(--accent)]" />
              </div>
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1 rounded-full bg-cyan-500 border border-black px-3 py-1 text-[10px] font-black uppercase text-black shadow-lg">
                <CheckCircle className="h-3 w-3 fill-black text-[var(--accent)]" />
                Verified
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mt-2">Why Synergic Bond</h3>
            <p className="text-sm font-semibold text-[var(--accent)] mt-0.5">The Chemistry Operating System</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-[var(--border)] px-3.5 py-1 text-xs font-bold text-[var(--text-muted)]">
              Verified Chemistry Only
            </div>
          </div>

          {/* Architectural Statement & Capability Badges */}
          <div>
            <p className="text-lg sm:text-xl font-medium italic text-white/90 leading-relaxed mb-8">
              &ldquo;Traditional exam preparation relies on fragmented books and rote memorization. Synergic Bond unifies algorithmic practice, interactive visual mechanisms, and schema-governed AI into a single, high-precision chemistry operating system.&rdquo;
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {platformCapabilities.map((cap, idx) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${cap.bg}`}
                  >
                    <CapIcon className={`h-5 w-5 shrink-0 ${cap.color}`} />
                    <span className="text-xs sm:text-sm font-bold text-white/90">{cap.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

