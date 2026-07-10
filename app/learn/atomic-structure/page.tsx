"use client";

import { renderChemistry } from "@/lib/renderChemistry";
import Link from "next/link";
import { atomicPartMeta } from "./parts/_shared";
import {
  PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection,
} from "@/components/notes/premium";

// /learn/atomic-structure — premium visual chapter on the shared notes template.

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "source-parts", label: "Kohinoor Parts" },
  { id: "models", label: "Models of the Atom" },
  { id: "quantum", label: "Quantum Numbers" },
  { id: "formulas", label: "Formula Cards" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

const MODELS = [
  { name: "Dalton", idea: "Atom = indivisible solid sphere." },
  { name: "Thomson", idea: "Plum-pudding: electrons in a positive sphere." },
  { name: "Rutherford", idea: "Tiny dense nucleus; electrons orbit it." },
  { name: "Bohr", idea: "Fixed energy shells; angular momentum quantised." },
  { name: "Quantum", idea: "Orbitals = probability clouds, not paths." },
];

const QUANTUM = [
  { sym: "n", name: "Principal", role: "Shell & size/energy. n = 1,2,3…" },
  { sym: "l", name: "Azimuthal", role: "Subshell & shape. l = 0…(n−1)" },
  { sym: "mₗ", name: "Magnetic", role: "Orientation. mₗ = −l…0…+l" },
  { sym: "mₛ", name: "Spin", role: "Electron spin. mₛ = ±½" },
];

export default function AtomicStructureNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="Physical Chemistry · Class 11"
          title="Atomic"
          accent="Structure"
          lead="Everything you will ever study in chemistry — bonding, periodicity, colour, reactivity — traces back to how electrons are arranged around a nucleus. This chapter is the story of how we went from a solid billiard-ball atom to fuzzy probability clouds, and the small set of rules that predict where every electron lives."
          stats={[
            { v: "−13.6 eV", k: "ground-state energy of H" },
            { v: "4 numbers", k: "fix every electron", tone: "text-emerald-300" },
            { v: "Highest yield", k: "most PYQs of any chapter", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="source-parts" eyebrow="Handwritten source" title="Kohinoor Atomic Structure Parts">
        <p className="mb-5 max-w-2xl leading-relaxed text-white/65">
          Forensic TSX transcription from the handwritten Atomic Structure source begins here. Parts 01-11 are now
          implemented, matching source pages 1-35 from the 60-part manifest.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {atomicPartMeta.map((part) => (
            <Link key={part.href} href={part.href} className="block">
              <Glass className="h-full p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
                <div className="text-[11px] font-black uppercase tracking-[0.22em] text-cyan-300">
                  Part {String(part.part).padStart(2, "0")} · pages {part.pages}
                </div>
                <div className="mt-2 text-base font-black text-white">{part.title}</div>
              </Glass>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="models" eyebrow="The story" title="Models of the Atom">
        <p className="mb-5 max-w-2xl leading-relaxed text-white/70">
          Each model fixed a flaw in the last. Bohr explained the hydrogen spectrum but failed for multi-electron atoms;
          the quantum-mechanical model replaced fixed orbits with orbitals — regions of high probability.
        </p>
        <div className="space-y-2.5">
          {MODELS.map((m, i) => (
            <Glass key={m.name} className="flex items-center gap-4 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-cyan-300">{i + 1}</span>
              <div><span className="font-bold text-white">{m.name}</span><span className="ml-2 text-sm text-white/60">{renderChemistry(m.idea)}</span></div>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="quantum" eyebrow="Visual map" title="The Four Quantum Numbers">
        <p className="mb-5 max-w-2xl text-white/65">Every electron in an atom has a unique set of four quantum numbers (Pauli). They answer: which shell, which shape, which orientation, which spin.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {QUANTUM.map((q) => (
            <Glass key={q.sym} className="p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B1220] text-lg font-black text-cyan-200">{renderChemistry(q.sym)}</span>
                <span className="font-bold text-white">{q.name}</span>
              </div>
              <p className="mt-2 text-sm text-white/65">{renderChemistry(q.role)}</p>
            </Glass>
          ))}
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Nodes at a glance</div>
          <p className="mt-1 text-sm text-white/75">{renderChemistry("Total nodes = n − 1 · Radial (spherical) = n − l − 1 · Angular (planar) = l")}</p>
        </Glass>
      </Section>

      <Section id="formulas" eyebrow="Toolbox" title="Formula Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="Bohr energy (H-like)" formula="E_n = -13.6 Z² / n²  eV" vars={[{ sym: "Z", mean: "atomic number" }, { sym: "n", mean: "shell number" }]} />
          <FormulaCard name="Bohr radius" formula="r_n = 0.529 n² / Z  Å" vars={[{ sym: "r_n", mean: "orbit radius" }, { sym: "0.529", mean: "Bohr radius (Å)" }]} />
          <FormulaCard name="de Broglie wavelength" formula="λ = h / mv" vars={[{ sym: "h", mean: "Planck constant" }, { sym: "mv", mean: "momentum (p)" }]} />
          <FormulaCard name="Heisenberg uncertainty" formula="Δx · Δp ≥ h / 4π" vars={[{ sym: "Δx", mean: "position uncertainty" }, { sym: "Δp", mean: "momentum uncertainty" }]} />
          <FormulaCard name="Rydberg (spectra)" formula="1/λ = R_H Z² (1/n₁² - 1/n₂²)" vars={[{ sym: "R_H", mean: "1.097×10⁷ m⁻¹" }, { sym: "n₁,n₂", mean: "lower, upper levels" }]} />
          <FormulaCard name="Energy of a photon" formula="E = hν = hc/λ" vars={[{ sym: "ν", mean: "frequency" }, { sym: "λ", mean: "wavelength" }]} />
        </div>
      </Section>

      <Section id="example" eyebrow="Worked out" title="Solved Example">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">{renderChemistry("How many radial and angular nodes are present in a 3d orbital?")}</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>{renderChemistry("For 3d: n = 3, and d-subshell means l = 2.")}</Step>
            <Step n={2}>{renderChemistry("Angular nodes = l = 2.")}</Step>
            <Step n={3}>{renderChemistry("Radial nodes = n − l − 1 = 3 − 2 − 1 = 0.")}</Step>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
            <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
            <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("2 angular nodes, 0 radial nodes (total = n − 1 = 2)")}</div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
            <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
            <p className="mt-0.5 text-sm text-white/75">Read nodes straight off n and l: total = n−1, angular = l, radial = the remainder. No orbital drawing needed.</p>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Exam traps" title="Common Mistakes">
        <CalloutList variant="mistake" items={[
          "Applying Bohr's E = −13.6 Z²/n² to multi-electron atoms — it's exact only for H-like (1-electron) species.",
          "Confusing radial nodes (n−l−1) with angular nodes (l). Total is always n−1.",
          "Forgetting Z² in the Rydberg and Bohr equations for ions like He⁺, Li²⁺.",
          "Writing l values as 1,2,3,4 for s,p,d,f — they are 0,1,2,3.",
        ]} />
      </Section>

      <Section id="ncert" eyebrow="Straight from the book" title="NCERT Highlights">
        <CalloutList variant="ncert" items={[
          "Aufbau: orbitals fill in order of increasing (n + l); for equal (n + l), lower n fills first.",
          "Hund's rule: electrons occupy degenerate orbitals singly, with parallel spins, before pairing.",
          "Half-filled and fully-filled subshells (d⁵, d¹⁰) have extra stability — hence Cr and Cu anomalies.",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Weightage" title="JEE Main Focus">
        <JeeFocus items={[
          { t: "Nodes, quantum numbers & orbital shapes", tag: "Most repeated" },
          { t: "Bohr model — energy, radius, velocity", tag: "High weightage" },
          { t: "Hydrogen spectrum & Rydberg", tag: "Frequent" },
          { t: "de Broglie & Heisenberg numericals", tag: "Recurring" },
        ]} />
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet
          points={[
            "Eₙ = −13.6 Z²/n² eV", "rₙ = 0.529 n²/Z Å", "λ = h/mv", "Δx·Δp ≥ h/4π",
            "1/λ = R_H Z²(1/n₁² − 1/n₂²)", "Total nodes = n − 1", "Radial = n − l − 1, Angular = l", "Fill by (n + l); s,p,d,f → l = 0,1,2,3",
          ]}
          ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/memory?deck=formula", label: "Recall these formulas" }]}
        />
      </Section>
    </PremiumNotes>
  );
}
