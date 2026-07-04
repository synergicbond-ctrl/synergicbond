"use client";

import { renderChemistry } from "@/lib/renderChemistry";
import {
  PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection,
} from "@/components/notes/premium";

// /learn/thermodynamics — premium visual chapter on the shared notes template.

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "first", label: "System & First Law" },
  { id: "spontaneity", label: "Spontaneity (ΔG)" },
  { id: "formulas", label: "Formula Cards" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

const SPONTANEITY = [
  { h: "− (exo)", s: "+ (disorder ↑)", g: "always spontaneous", tone: "text-emerald-300" },
  { h: "+ (endo)", s: "− (disorder ↓)", g: "never spontaneous", tone: "text-rose-300" },
  { h: "− (exo)", s: "− (disorder ↓)", g: "spontaneous at LOW T", tone: "text-amber-300" },
  { h: "+ (endo)", s: "+ (disorder ↑)", g: "spontaneous at HIGH T", tone: "text-amber-300" },
];

export default function ThermodynamicsNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="Physical Chemistry · Class 11"
          title="Chemical"
          accent="Thermodynamics"
          lead="Every reaction is an energy transaction — heat flows in or out, disorder rises or falls, and one number decides whether it happens at all. Thermodynamics doesn't ask how fast; it asks whether a change is even possible. Master ΔH, ΔS and ΔG and you can predict the direction of any process before touching a single chemical."
          stats={[
            { v: "ΔG < 0", k: "the test for spontaneity" },
            { v: "State functions", k: "path doesn't matter", tone: "text-emerald-300" },
            { v: "High yield", k: "ΔG, Hess & bond enthalpy", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="first" eyebrow="Bookkeeping" title="System & the First Law">
        <p className="max-w-2xl leading-relaxed text-white/70">
          The <span className="font-bold text-white">first law</span> is conservation of energy: the internal energy of
          a system changes only by heat exchanged (q) and work done (w). Energy is neither created nor destroyed — only
          moved between system and surroundings.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Open system", v: "exchanges matter + energy" },
            { k: "Closed system", v: "exchanges energy only" },
            { k: "Isolated system", v: "exchanges nothing" },
          ].map((c) => (
            <Glass key={c.k} className="p-4">
              <div className="text-sm font-bold text-white">{c.k}</div>
              <div className="mt-1 text-sm text-white/60">{renderChemistry(c.v)}</div>
            </Glass>
          ))}
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Sign convention</div>
          <p className="mt-1 text-sm text-white/75">{renderChemistry("q is + when heat is absorbed BY the system; w is + when work is done ON the system (ΔU = q + w).")}</p>
        </Glass>
      </Section>

      <Section id="spontaneity" eyebrow="Visual map" title="The ΔG Spontaneity Grid">
        <p className="mb-5 max-w-2xl text-white/65">Gibbs energy combines enthalpy and entropy: ΔG = ΔH − TΔS. Its sign — driven by the signs of ΔH and ΔS — decides everything.</p>
        <div className="space-y-2">
          {SPONTANEITY.map((r, i) => (
            <Glass key={i} className="flex flex-wrap items-center gap-3 p-3.5">
              <span className="rounded-lg border border-white/10 bg-[#0B1220] px-2.5 py-1 text-xs font-bold text-white/80">ΔH {r.h}</span>
              <span className="rounded-lg border border-white/10 bg-[#0B1220] px-2.5 py-1 text-xs font-bold text-white/80">ΔS {r.s}</span>
              <span className="text-white/30">→</span>
              <span className={`text-sm font-bold ${r.tone}`}>{r.g}</span>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="formulas" eyebrow="Toolbox" title="Formula Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="First law" formula="ΔU = q + w" vars={[{ sym: "ΔU", mean: "internal energy change" }, { sym: "q", mean: "heat" }, { sym: "w", mean: "work (−PΔV)" }]} />
          <FormulaCard name="Enthalpy" formula="ΔH = ΔU + Δn_g RT" vars={[{ sym: "Δn_g", mean: "change in moles of gas" }, { sym: "R", mean: "gas constant" }]} />
          <FormulaCard name="Gibbs energy" formula="ΔG = ΔH - TΔS" vars={[{ sym: "ΔS", mean: "entropy change" }, { sym: "T", mean: "temperature (K)" }]} />
          <FormulaCard name="ΔG and equilibrium" formula="ΔG° = -RT ln K" vars={[{ sym: "K", mean: "equilibrium constant" }, { sym: "ΔG°", mean: "standard Gibbs energy" }]} />
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Hess&apos;s law</div>
          <p className="mt-1 text-sm text-white/75">{renderChemistry("ΔH of a reaction is the same whether it happens in one step or many — enthalpy is a state function.")}</p>
        </Glass>
      </Section>

      <Section id="example" eyebrow="Worked out" title="Solved Example">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">{renderChemistry("For a reaction ΔH = +50 kJ and ΔS = +100 J/K. Above what temperature is it spontaneous?")}</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>{renderChemistry("Spontaneous when ΔG < 0, i.e. ΔH − TΔS < 0.")}</Step>
            <Step n={2}>{renderChemistry("T > ΔH/ΔS. Convert: ΔH = 50000 J, ΔS = 100 J/K.")}</Step>
            <Step n={3}>{renderChemistry("T > 50000 / 100 = 500 K.")}</Step>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
            <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
            <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("Spontaneous above 500 K")}</div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
            <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
            <p className="mt-0.5 text-sm text-white/75">For +ΔH, +ΔS reactions, the crossover temperature is simply T = ΔH/ΔS — always convert ΔS to kJ or ΔH to J first.</p>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Exam traps" title="Common Mistakes">
        <CalloutList variant="mistake" items={[
          "Mixing units — ΔH in kJ but ΔS in J/K. Convert before using ΔG = ΔH − TΔS.",
          "Forgetting Δn_g counts only GASEOUS moles in ΔH = ΔU + Δn_g RT.",
          "Assuming exothermic (−ΔH) always means spontaneous — entropy and T can override it.",
          "Confusing q (path function) with ΔH/ΔU (state functions).",
        ]} />
      </Section>

      <Section id="ncert" eyebrow="Straight from the book" title="NCERT Highlights">
        <CalloutList variant="ncert" items={[
          "Internal energy (U), enthalpy (H), entropy (S) and Gibbs energy (G) are state functions; q and w are not.",
          "At equilibrium ΔG = 0; a negative ΔG° means K > 1 (products favoured).",
          "Entropy of the universe always increases for a spontaneous process (second law).",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Weightage" title="JEE Main Focus">
        <JeeFocus items={[
          { t: "ΔG, spontaneity & crossover temperature", tag: "Most repeated" },
          { t: "Hess's law & enthalpy of formation", tag: "High weightage" },
          { t: "Bond enthalpy calculations", tag: "Frequent" },
          { t: "ΔG° = −RT ln K linkage", tag: "Recurring" },
        ]} />
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet
          points={[
            "ΔU = q + w", "ΔH = ΔU + Δn_g RT", "ΔG = ΔH − TΔS", "ΔG° = −RT ln K",
            "ΔG < 0 → spontaneous", "Crossover T = ΔH/ΔS", "State functions: U, H, S, G", "Hess: ΔH is path-independent",
          ]}
          ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/memory?deck=formula", label: "Recall these formulas" }]}
        />
      </Section>
    </PremiumNotes>
  );
}
