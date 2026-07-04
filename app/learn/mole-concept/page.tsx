"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { renderChemistry } from "@/lib/renderChemistry";

// ─────────────────────────────────────────────────────────────────────────────
// /learn/mole-concept — Premium Visual Notes exemplar (Content · design system).
//
// Reference-quality chapter, mobile-first, built to the design spec: dark navy
// (#0B1220), soft glass cards, restrained accents (no neon glow), eye-friendly
// for long sessions. This is the reusable TEMPLATE — hero, visual concept
// blocks, formula cards, stepwise solved examples, mistake / NCERT / JEE focus
// cards, a one-screen revision sheet, sticky TOC and a scroll progress bar.
// Content here is standard, universally-correct Mole Concept material.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "why", label: "Why it matters" },
  { id: "mole", label: "The Mole" },
  { id: "map", label: "Conversion Map" },
  { id: "formulas", label: "Formula Cards" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

// ── Reusable premium primitives ──────────────────────────────────────────────

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm ${className}`}>{children}</div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
    </div>
  );
}

function FormulaCard({ name, formula, vars }: { name: string; formula: string; vars: { sym: string; mean: string }[] }) {
  return (
    <Glass className="p-5">
      <div className="text-xs font-bold uppercase tracking-wider text-white/40">{name}</div>
      <div className="mt-2 rounded-xl bg-[#0B1220] px-4 py-3 text-center text-xl font-black text-cyan-200">
        {renderChemistry(formula)}
      </div>
      <div className="mt-3 space-y-1">
        {vars.map((v) => (
          <div key={v.sym} className="flex items-baseline gap-2 text-sm">
            <span className="min-w-[2.5rem] font-black text-amber-300">{renderChemistry(v.sym)}</span>
            <span className="text-white/60">{v.mean}</span>
          </div>
        ))}
      </div>
    </Glass>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-cyan-300">{n}</span>
      <div className="pt-0.5 text-sm leading-relaxed text-white/80">{children}</div>
    </div>
  );
}

export default function MoleConceptNotes() {
  const [active, setActive] = useState("why");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(Math.round(p * 100));
      // active section = last heading above the mid-viewport
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < h.clientHeight * 0.4) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="mx-auto flex max-w-6xl gap-8 px-5 py-10 sm:px-6">
        {/* Sticky TOC (desktop) */}
        <aside className="hidden w-52 shrink-0 lg:block">
          <div className="sticky top-10">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/35">Contents</p>
            <nav className="space-y-0.5">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block rounded-lg px-3 py-1.5 text-sm transition ${
                    active === s.id ? "bg-cyan-500/10 font-bold text-cyan-300" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-white/[0.06] pt-3 text-[11px] text-white/35">{progress}% read</div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-16">
          {/* HERO */}
          <header id="why" className="scroll-mt-10">
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/80">Physical Chemistry · Class 11</div>
            <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              The Mole<span className="text-cyan-400"> Concept</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
              Chemistry happens in numbers too big to count — a single drop of water holds more molecules than there are
              stars in the observable universe. The mole is the chemist&apos;s bridge from the invisible world of atoms to
              the grams you weigh on a balance. Master this, and every calculation in chemistry becomes arithmetic.
            </p>
            <Glass className="mt-6 flex flex-wrap gap-6 p-5">
              <div><div className="text-2xl font-black text-cyan-300">6.022×10²³</div><div className="text-xs text-white/45">particles per mole</div></div>
              <div><div className="text-2xl font-black text-emerald-300">Foundation</div><div className="text-xs text-white/45">of all stoichiometry</div></div>
              <div><div className="text-2xl font-black text-amber-300">High yield</div><div className="text-xs text-white/45">every year, every exam</div></div>
            </Glass>
          </header>

          {/* CONCEPT: THE MOLE */}
          <section id="mole" className="scroll-mt-10">
            <SectionTitle eyebrow="Core idea" title="What is a mole?" />
            <p className="max-w-2xl leading-relaxed text-white/70">
              A <span className="font-bold text-white">mole</span> is simply a counting unit — like a dozen (12) or a
              gross (144), but far larger. One mole is <span className="font-bold text-cyan-300">6.022×10²³</span> particles
              (Avogadro&apos;s number, N<sub>A</sub>). We use it because atoms are so small that lab-sized amounts contain
              astronomically many of them.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { k: "1 mole of atoms", v: "6.022×10²³ atoms" },
                { k: "1 mole of a gas (STP)", v: "22.7 L volume" },
                { k: "1 mole of a substance", v: "mass = molar mass in g" },
              ].map((c) => (
                <Glass key={c.k} className="p-4">
                  <div className="text-sm font-bold text-white">{c.k}</div>
                  <div className="mt-1 text-sm text-cyan-200">{renderChemistry(c.v)}</div>
                </Glass>
              ))}
            </div>
          </section>

          {/* VISUAL CONVERSION MAP (mole wheel) */}
          <section id="map" className="scroll-mt-10">
            <SectionTitle eyebrow="Visual map" title="The Mole Conversion Wheel" />
            <p className="mb-5 max-w-2xl text-white/65">Every mole problem is one of these four hops. The mole sits at the centre — you always convert to moles first, then out.</p>
            <Glass className="p-6">
              <svg viewBox="0 0 340 260" className="mx-auto h-auto w-full max-w-md">
                {/* spokes */}
                <g stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                  <line x1="170" y1="130" x2="170" y2="40" /><line x1="170" y1="130" x2="300" y2="130" />
                  <line x1="170" y1="130" x2="170" y2="220" /><line x1="170" y1="130" x2="40" y2="130" />
                </g>
                {/* centre */}
                <circle cx="170" cy="130" r="42" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.5)" strokeWidth="2" />
                <text x="170" y="126" textAnchor="middle" fill="#67e8f9" fontSize="15" fontWeight="800">MOLES</text>
                <text x="170" y="142" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">n</text>
                {/* nodes */}
                {[
                  { x: 170, y: 26, t: "Mass (g)", s: "÷ M" },
                  { x: 300, y: 130, t: "Particles", s: "× Nₐ" },
                  { x: 170, y: 234, t: "Gas Volume", s: "× 22.7 L" },
                  { x: 40, y: 130, t: "Molarity", s: "× V(L)" },
                ].map((n) => (
                  <g key={n.t}>
                    <rect x={n.x - 44} y={n.y - 16} width="88" height="32" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <text x={n.x} y={n.y - 2} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">{n.t}</text>
                    <text x={n.x} y={n.y + 10} textAnchor="middle" fill="#fcd34d" fontSize="9">{n.s}</text>
                  </g>
                ))}
              </svg>
            </Glass>
          </section>

          {/* FORMULA CARDS */}
          <section id="formulas" className="scroll-mt-10">
            <SectionTitle eyebrow="Toolbox" title="Formula Cards" />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormulaCard name="Moles from mass" formula="n = m / M" vars={[{ sym: "n", mean: "moles (mol)" }, { sym: "m", mean: "given mass (g)" }, { sym: "M", mean: "molar mass (g/mol)" }]} />
              <FormulaCard name="Number of particles" formula="N = n × N_A" vars={[{ sym: "N", mean: "particles" }, { sym: "N_A", mean: "6.022×10²³ /mol" }]} />
              <FormulaCard name="Molarity" formula="M = n / V" vars={[{ sym: "M", mean: "molarity (mol/L)" }, { sym: "V", mean: "volume of solution (L)" }]} />
              <FormulaCard name="Gas at STP" formula="n = V / 22.7" vars={[{ sym: "V", mean: "volume at STP (L)" }, { sym: "22.7", mean: "molar volume (L/mol)" }]} />
            </div>
            <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Memory box</div>
              <p className="mt-1 text-sm text-white/75">Always land on <span className="font-bold text-cyan-200">moles</span> first. Mass → moles → anything. Never jump mass → particles directly.</p>
            </Glass>
          </section>

          {/* SOLVED EXAMPLE */}
          <section id="example" className="scroll-mt-10">
            <SectionTitle eyebrow="Worked out" title="Solved Example" />
            <Glass className="p-5">
              <p className="text-sm font-semibold text-white">
                {renderChemistry("How many oxygen atoms are present in 8.8 g of CO₂? (M = 44 g/mol)")}
              </p>
              <div className="mt-4 space-y-3">
                <Step n={1}>{renderChemistry("Moles of CO₂ = m/M = 8.8 / 44 = 0.2 mol")}</Step>
                <Step n={2}>{renderChemistry("Each CO₂ has 2 O atoms → moles of O atoms = 0.2 × 2 = 0.4 mol")}</Step>
                <Step n={3}>{renderChemistry("O atoms = 0.4 × 6.022×10²³ = 2.409×10²³")}</Step>
              </div>
              <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
                <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
                <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("≈ 2.41×10²³ oxygen atoms")}</div>
              </div>
              <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
                <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
                <p className="mt-0.5 text-sm text-white/75">Atoms of an element = (given mass ÷ molar mass) × (atomicity) × Nₐ — chain it in one line.</p>
              </div>
            </Glass>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes" className="scroll-mt-10">
            <SectionTitle eyebrow="Exam traps" title="Common Mistakes" />
            <div className="space-y-3">
              {[
                "Confusing molecules with atoms — 1 mole of CO₂ is 1 mole of molecules but 3 moles of atoms.",
                "Using 22.4 L instead of the current STP molar volume 22.7 L (273.15 K, 1 bar).",
                "Forgetting to multiply by atomicity for diatomic gases (O₂, N₂, Cl₂).",
                "Mixing up molarity (per litre of solution) with molality (per kg of solvent).",
              ].map((m, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-rose-500/25 bg-rose-500/[0.07] p-4">
                  <span className="text-rose-400">⚠</span>
                  <p className="text-sm text-white/80">{renderChemistry(m)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NCERT HIGHLIGHTS */}
          <section id="ncert" className="scroll-mt-10">
            <SectionTitle eyebrow="Straight from the book" title="NCERT Highlights" />
            <div className="space-y-3">
              {[
                "Avogadro's number is the number of entities in one mole; it equals 6.022×10²³ (NCERT Class 11, Ch. 1).",
                "Molar mass in grams is numerically equal to atomic/molecular mass in u.",
                "Molarity changes with temperature (volume expands); molality does not.",
              ].map((t, i) => (
                <div key={i} className="flex gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] p-4">
                  <span className="text-emerald-400">📗</span>
                  <p className="text-sm text-white/80">{renderChemistry(t)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* JEE FOCUS */}
          <section id="jee" className="scroll-mt-10">
            <SectionTitle eyebrow="Weightage" title="JEE Main Focus" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { t: "% composition & empirical formula", tag: "Most repeated" },
                { t: "Limiting reagent problems", tag: "High weightage" },
                { t: "Concentration terms interconversion", tag: "Frequent" },
                { t: "Gas volumes & Avogadro's law", tag: "Recurring" },
              ].map((c) => (
                <Glass key={c.t} className="flex items-center justify-between gap-3 p-4">
                  <span className="text-sm font-semibold text-white">{c.t}</span>
                  <span className="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">{c.tag}</span>
                </Glass>
              ))}
            </div>
          </section>

          {/* REVISION SHEET */}
          <section id="revision" className="scroll-mt-10">
            <SectionTitle eyebrow="One screen" title="Revision Sheet" />
            <Glass className="p-5">
              <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {[
                  "Nₐ = 6.022×10²³ per mole",
                  "n = m / M",
                  "N = n × Nₐ",
                  "Molar volume (STP) = 22.7 L",
                  "Molarity M = n / V(L)",
                  "Molar mass (g) = molecular mass (u)",
                  "Always convert to moles first",
                  "Atoms = moles × atomicity × Nₐ",
                ].map((r) => (
                  <div key={r} className="flex items-center gap-2 border-b border-white/[0.05] py-1.5 text-sm text-white/75">
                    <span className="text-cyan-400">▸</span>{renderChemistry(r)}
                  </div>
                ))}
              </div>
            </Glass>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pyq" className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20">Practise PYQs →</Link>
              <Link href="/memory?deck=formula" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]">Recall these formulas →</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
