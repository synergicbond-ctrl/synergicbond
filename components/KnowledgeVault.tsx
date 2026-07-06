"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import {
  Atom, GitBranch, Sigma, AlertTriangle, Zap, Heart, ArrowRight, Bookmark, Sparkles
} from "lucide-react";

const tabs = [
  {
    id: "concepts",
    title: "Concepts",
    tkey: "vault.tab.concepts",
    icon: Atom,
    count: "2000+",
    href: "/vault/concepts",
    accent: "#00F5D4",
    blurb: "Core chemistry concepts explained from first principles — atomic structure, bonding, periodicity, thermodynamics and beyond.",
    items: ["Atomic Structure & Quantum Numbers", "Chemical Bonding & VSEPR", "Periodic Trends", "Thermodynamics & Entropy", "Chemical Equilibrium", "Coordination Compounds"],
  },
  {
    id: "reactions",
    title: "Reactions",
    tkey: "vault.tab.reactions",
    icon: GitBranch,
    count: "500+",
    href: "/vault",
    accent: "#9B5DE5",
    blurb: "Every named reaction and mechanism with full arrow-pushing — organic, inorganic and the exam-critical conversions.",
    items: ["Aldol Condensation", "SN1 / SN2 Mechanisms", "Cannizzaro Reaction", "Friedel-Crafts Acylation", "Grignard Reactions", "Markovnikov Addition"],
  },
  {
    id: "formulas",
    title: "Formula Vault",
    tkey: "vault.tab.formulas",
    icon: Sigma,
    count: "800+",
    href: "/vault/formulas",
    accent: "#00BBF9",
    blurb: "Essential equations, shortcuts and derivations — the formulas that win marks under time pressure.",
    items: ["Nernst Equation", "Arrhenius Equation", "Henderson-Hasselbalch", "Raoult's Law", "Gibbs Free Energy", "Rate Law Expressions"],
  },
  {
    id: "exceptions",
    title: "Exceptions",
    tkey: "vault.tab.exceptions",
    icon: AlertTriangle,
    count: "300+",
    href: "/vault/exceptions",
    accent: "#F59E0B",
    blurb: "The anomalies that trip up rankers — exceptional configurations, anomalous trends and the traps examiners love.",
    items: ["Cr & Cu Electronic Config", "Inert Pair Effect", "Anomalous Boiling Point of H₂O", "Lithium Diagonal Relationship", "Beryllium Anomaly", "Back Bonding in BF₃"],
  },
  {
    id: "facts",
    title: "Quick Facts",
    tkey: "vault.tab.facts",
    icon: Zap,
    count: "1500+",
    href: "/vault/facts",
    accent: "#10B981",
    blurb: "High-yield facts for rapid last-minute revision — colors, smells, uses and the one-liners that fetch easy marks.",
    items: ["Flame Test Colors", "Colored Ions & Compounds", "Common Ore Names", "IUPAC Nomenclature Rules", "Hybridization Shortcuts", "Magnetic Behavior Facts"],
  },
  {
    id: "favorites",
    title: "Favorites",
    tkey: "vault.tab.favorites",
    icon: Heart,
    count: "Personal",
    href: "/vault/favorites",
    accent: "#FB7185",
    blurb: "Your saved chemistry knowledge — bookmark concepts, formulas and exceptions to build a personal revision deck.",
    items: ["Build your own collection", "Star any concept or formula", "Sync across devices", "Spaced-repetition ready", "Export to PDF", "Share with study group"],
  },
];

export default function KnowledgeVault() {
  const { t } = useT();
  const [active, setActive] = useState(tabs[0].id);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});
  const current = tabs.find((tab) => tab.id === active)!;
  const Icon = current.icon;

  const toggleBookmark = (item: string) => {
    setBookmarked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          {t("vault.eyebrow")}
        </div>
        <h2 className="text-3xl font-black md:text-5xl text-white tracking-tight drop-shadow-sm">
          {t("vault.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-base leading-relaxed">
          {t("vault.desc")}
        </p>
      </div>

      {/* Floating tab bar with glowing active states */}
      <div className="flex justify-center mb-10">
        <div
          className="flex items-center gap-1.5 overflow-x-auto scrollbar-none rounded-full bg-[#0B0F19]/90 border border-white/15 p-2 max-w-full backdrop-blur-xl shadow-2xl"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive ? "text-white bg-white/10 shadow-lg scale-105" : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
                style={{
                  borderColor: isActive ? `${tab.accent}66` : "transparent",
                  borderWidth: "1px",
                  boxShadow: isActive ? `0 0 20px -5px ${tab.accent}66` : undefined
                }}
              >
                <TabIcon
                  className="h-4 w-4 flex-shrink-0 transition-transform duration-300"
                  style={{ color: tab.accent, transform: isActive ? "scale(1.15)" : "scale(1)" }}
                />
                {t(tab.tkey)}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: tab.accent }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic content panel with deep glassmorphism and category glow */}
      <div 
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111827]/95 to-[#0B0F19]/95 border border-white/15 p-8 md:p-12 min-h-[380px] backdrop-blur-2xl shadow-2xl transition-all duration-500"
        style={{ borderColor: `${current.accent}33` }}
      >
        {/* Ambient background glow matching category color */}
        <div 
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-25"
          style={{ background: current.accent }}
        />
        <div 
          className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-15"
          style={{ background: current.accent }}
        />

        <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_1.4fr] items-start">

          {/* Left — header & description */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg border border-white/10"
                style={{ background: `${current.accent}26`, borderColor: `${current.accent}4d` }}
              >
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: current.accent }} />
              </div>
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full border mb-1 shadow-sm"
                  style={{ background: `${current.accent}1a`, color: current.accent, borderColor: `${current.accent}40` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: current.accent }} />
                  {current.count} {t("vault.entries")}
                </span>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">{t(current.tkey)}</h3>
            <p className="text-white/75 text-base leading-relaxed mb-8">{current.blurb}</p>
            
            <Link
              href={current.href}
              className="group inline-flex items-center gap-2.5 rounded-xl border px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${current.accent}33, ${current.accent}1a)`, borderColor: `${current.accent}66` }}
            >
              <span>{t("vault.explore")} {t(current.tkey)}</span>
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: current.accent }} />
            </Link>
          </div>

          {/* Right — interactive cards with elevation & bookmark feedback */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {current.items.map((item) => {
              const isMarked = !!bookmarked[item];
              return (
                <div
                  key={item}
                  className="group relative flex items-center justify-between gap-3 rounded-2xl bg-[#0B0F19]/80 border border-white/10 px-5 py-4 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#111827] hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-125"
                      style={{ background: current.accent, boxShadow: `0 0 8px ${current.accent}` }}
                    />
                    <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors truncate">{item}</span>
                  </div>

                  {/* Bookmark interactive button */}
                  <button
                    onClick={() => toggleBookmark(item)}
                    title={isMarked ? "Remove bookmark" : "Bookmark this knowledge item"}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
                      isMarked 
                        ? "border-rose-500/50 bg-rose-500/20 text-rose-400 scale-110 shadow-[0_0_12px_rgba(244,63,94,0.3)]" 
                        : "border-white/10 bg-white/[0.03] text-white/30 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${isMarked ? "fill-rose-400" : ""}`} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

