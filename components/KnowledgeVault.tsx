"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Atom, GitBranch, Sigma, AlertTriangle, Zap, Heart, ArrowRight,
} from "lucide-react";

const tabs = [
  {
    id: "concepts",
    title: "Concepts",
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
    icon: AlertTriangle,
    count: "300+",
    href: "/vault/exceptions",
    accent: "#EF4444",
    blurb: "The anomalies that trip up rankers — exceptional configurations, anomalous trends and the traps examiners love.",
    items: ["Cr & Cu Electronic Config", "Inert Pair Effect", "Anomalous Boiling Point of H₂O", "Lithium Diagonal Relationship", "Beryllium Anomaly", "Back Bonding in BF₃"],
  },
  {
    id: "facts",
    title: "Quick Facts",
    icon: Zap,
    count: "1500+",
    href: "/vault/facts",
    accent: "#FFD700",
    blurb: "High-yield facts for rapid last-minute revision — colors, smells, uses and the one-liners that fetch easy marks.",
    items: ["Flame Test Colors", "Colored Ions & Compounds", "Common Ore Names", "IUPAC Nomenclature Rules", "Hybridization Shortcuts", "Magnetic Behavior Facts"],
  },
  {
    id: "favorites",
    title: "Favorites",
    icon: Heart,
    count: "Personal",
    href: "/vault/favorites",
    accent: "#F472B6",
    blurb: "Your saved chemistry knowledge — bookmark concepts, formulas and exceptions to build a personal revision deck.",
    items: ["Build your own collection", "Star any concept or formula", "Sync across devices", "Spaced-repetition ready", "Export to PDF", "Share with study group"],
  },
];

export default function KnowledgeVault() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const Icon = current.icon;

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          Knowledge Vault
        </p>
        <h2 className="text-4xl font-black md:text-5xl text-white">
          Everything Chemistry. One Place.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/50 text-sm">
          Concepts, formulas, reactions and exceptions — organized into a premium chemistry knowledge system.
        </p>
      </div>

      {/* Floating tab bar */}
      <div className="flex justify-center mb-8">
        <div
          className="flex items-center gap-1 overflow-x-auto scrollbar-none rounded-full bg-[#111827] border border-white/[0.06] p-1.5 max-w-full"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${
                  isActive ? "text-white font-bold bg-white/[0.06]" : "text-gray-400 hover:text-white"
                }`}
              >
                <TabIcon
                  className="h-3.5 w-3.5 flex-shrink-0 transition-colors"
                  style={{ color: isActive ? tab.accent : undefined }}
                />
                {tab.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic content panel — uniform bg, only content swaps */}
      <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-8 md:p-10 min-h-[340px] transition-all duration-300">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] items-start">

          {/* Left — header */}
          <div>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl mb-5"
              style={{ background: `${current.accent}1a` }}
            >
              <Icon className="h-7 w-7" style={{ color: current.accent }} />
            </div>
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
              style={{ background: `${current.accent}1a`, color: current.accent }}
            >
              {current.count} entries
            </span>
            <h3 className="text-3xl font-black text-white mb-3">{current.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{current.blurb}</p>
            <Link
              href={current.href}
              className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
              style={{ color: current.accent }}
            >
              Explore {current.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — sample items */}
          <div className="grid gap-2.5 sm:grid-cols-2">
            {current.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.05] px-4 py-3 transition hover:bg-white/[0.06]"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: current.accent }}
                />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
