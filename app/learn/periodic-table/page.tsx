"use client";

import { renderChemistry } from "@/lib/renderChemistry";
import {
  PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection,
} from "@/components/notes/premium";

// /learn/periodic-table — premium visual chapter on the shared notes template.

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "law", label: "The Periodic Law" },
  { id: "trends", label: "Periodic Trends" },
  { id: "formulas", label: "Key Relations" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

const TRENDS = [
  { name: "Atomic radius", across: "decreases →", down: "increases ↓", why: "Zeff rises across; new shells added down." },
  { name: "Ionisation energy", across: "increases →", down: "decreases ↓", why: "Tighter hold across; farther electrons down." },
  { name: "Electron affinity", across: "increases →", down: "decreases ↓", why: "Greater pull across a period." },
  { name: "Electronegativity", across: "increases →", down: "decreases ↓", why: "F is the most electronegative." },
  { name: "Metallic character", across: "decreases →", down: "increases ↓", why: "Opposite of ionisation energy." },
];

export default function PeriodicTableNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="Inorganic Chemistry · Class 11"
          title="The Periodic"
          accent="Table"
          lead="The periodic table is chemistry's single greatest idea — arrange elements by atomic number and their properties repeat in rhythm. Once you can read the trends, you no longer memorise element properties; you derive them. Position on the table tells you size, reactivity, and how an element will behave in a reaction."
          stats={[
            { v: "Z", k: "orders everything" },
            { v: "2 directions", k: "across period, down group", tone: "text-emerald-300" },
            { v: "Predict, not memorise", k: "trends beat rote", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="law" eyebrow="The organising idea" title="The Periodic Law">
        <p className="max-w-2xl leading-relaxed text-white/70">
          The modern periodic law states that the properties of elements are a <span className="font-bold text-white">periodic function of their atomic number</span> (Z), not atomic mass. Elements in the same
          group share the same valence-shell configuration — which is exactly why they behave alike.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Period", v: "a horizontal row — same outermost shell (n)" },
            { k: "Group", v: "a vertical column — same valence configuration" },
            { k: "Blocks", v: "s, p, d, f — by the last orbital filled" },
          ].map((c) => (
            <Glass key={c.k} className="p-4">
              <div className="text-sm font-bold text-white">{c.k}</div>
              <div className="mt-1 text-sm text-white/60">{renderChemistry(c.v)}</div>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="trends" eyebrow="Visual map" title="The Five Periodic Trends">
        <p className="mb-5 max-w-2xl text-white/65">Learn these five and their directions; almost every periodicity question is one of them (or an exception to one).</p>
        <div className="space-y-2">
          {TRENDS.map((t) => (
            <Glass key={t.name} className="p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-white">{t.name}</span>
                <div className="flex gap-2 text-xs font-bold">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-cyan-300">{t.across}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">{t.down}</span>
                </div>
              </div>
              <p className="mt-1.5 text-sm text-white/55">{renderChemistry(t.why)}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="formulas" eyebrow="Toolbox" title="Key Relations">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="Effective nuclear charge" formula="Z_eff = Z - σ" vars={[{ sym: "Z", mean: "nuclear charge" }, { sym: "σ", mean: "shielding constant (Slater)" }]} />
          <FormulaCard name="Ionisation vs electron gain" formula="EN ≈ (IE + EA) / 2" vars={[{ sym: "IE", mean: "ionisation energy" }, { sym: "EA", mean: "electron affinity (Mulliken)" }]} />
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Diagonal relationship</div>
          <p className="mt-1 text-sm text-white/75">{renderChemistry("Li–Mg, Be–Al, B–Si behave alike — similar charge/size ratio across the diagonal.")}</p>
        </Glass>
      </Section>

      <Section id="example" eyebrow="Worked out" title="Solved Example">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">{renderChemistry("Why is the first ionisation energy of oxygen LOWER than that of nitrogen?")}</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>{renderChemistry("N (2p³) has a stable, exactly half-filled p-subshell with all electrons unpaired.")}</Step>
            <Step n={2}>{renderChemistry("O (2p⁴) must remove one electron from an already-paired 2p orbital.")}</Step>
            <Step n={3}>{renderChemistry("Electron–electron repulsion in that paired orbital makes O's electron easier to remove.")}</Step>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
            <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
            <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("IE₁: O < N — half-filled stability of N + pairing repulsion in O")}</div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
            <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
            <p className="mt-0.5 text-sm text-white/75">Half-filled/fully-filled = extra stable. Any dip in a trend usually hides one of these.</p>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Exam traps" title="Common Mistakes">
        <CalloutList variant="mistake" items={[
          "Assuming IE rises smoothly across a period — dips occur at Be→B and N→O.",
          "Thinking F has the highest electron affinity — it's Cl (small F has high electron–electron repulsion).",
          "Confusing electron affinity (energy released) sign conventions.",
          "Ranking ionic radii wrong for isoelectronic species — more protons = smaller ion.",
        ]} />
      </Section>

      <Section id="ncert" eyebrow="Straight from the book" title="NCERT Highlights">
        <CalloutList variant="ncert" items={[
          "Properties are a periodic function of atomic number (Moseley), not atomic mass.",
          "Across a period Zeff increases, pulling electrons closer — radius shrinks.",
          "For isoelectronic species, radius decreases as nuclear charge increases (N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺).",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Weightage" title="JEE Main Focus">
        <JeeFocus items={[
          { t: "Ionisation energy order & anomalies", tag: "Most repeated" },
          { t: "Atomic / ionic radius comparisons", tag: "High weightage" },
          { t: "Electronegativity & electron affinity", tag: "Frequent" },
          { t: "Isoelectronic species ordering", tag: "Recurring" },
        ]} />
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet
          points={[
            "Properties ∝ atomic number (Z)", "Z_eff = Z − σ", "Radius: ← across, ↓ down increases", "IE: → across, ↑ up increases",
            "Anomalies: Be>B, N>O (IE)", "EA: Cl > F", "Isoelectronic: more protons → smaller", "F is most electronegative",
          ]}
          ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/periodic-trends", label: "Explore trends" }]}
        />
      </Section>
    </PremiumNotes>
  );
}
