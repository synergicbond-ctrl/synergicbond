import { renderChemistry } from "@/lib/renderChemistry";
import {
  PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection,
} from "@/components/notes/premium";

// /learn/chemical-bonding — premium visual chapter on the shared notes template.

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "types", label: "Types of Bonds" },
  { id: "shapes", label: "VSEPR Shapes" },
  { id: "formulas", label: "Formula Cards" },
  { id: "example", label: "Solved Example" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ncert", label: "NCERT Highlights" },
  { id: "jee", label: "JEE Focus" },
  { id: "revision", label: "Revision Sheet" },
];

const BONDS = [
  { name: "Ionic", idea: "Full electron transfer; metal + non-metal (NaCl)." },
  { name: "Covalent", idea: "Shared electron pairs; non-metals (H₂O, CH₄)." },
  { name: "Coordinate", idea: "Both shared electrons from one atom (NH₄⁺)." },
  { name: "Metallic", idea: "Cations in a sea of delocalised electrons." },
];

const SHAPES = [
  { sn: "2", shape: "Linear", ex: "BeCl₂, CO₂", ang: "180°" },
  { sn: "3", shape: "Trigonal planar", ex: "BF₃", ang: "120°" },
  { sn: "4", shape: "Tetrahedral", ex: "CH₄", ang: "109.5°" },
  { sn: "5", shape: "Trigonal bipyramidal", ex: "PCl₅", ang: "120°/90°" },
  { sn: "6", shape: "Octahedral", ex: "SF₆", ang: "90°" },
];

export default function ChemicalBondingNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="Physical / Inorganic · Class 11"
          title="Chemical"
          accent="Bonding"
          lead="Atoms bond for one reason: to reach a lower-energy, more stable arrangement of electrons. From the salt on your table to the DNA in your cells, every structure is a negotiation over electrons. Learn the handful of rules — octet, VSEPR, hybridization, MOT — and you can predict the shape, polarity and magnetism of almost any molecule."
          stats={[
            { v: "Octet", k: "the driving rule" },
            { v: "Shape → property", k: "geometry decides behaviour", tone: "text-emerald-300" },
            { v: "High yield", k: "shapes, MOT & polarity", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="types" eyebrow="The four kinds" title="Types of Bonds">
        <div className="space-y-2.5">
          {BONDS.map((b, i) => (
            <Glass key={b.name} className="flex items-center gap-4 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-cyan-300">{i + 1}</span>
              <div><span className="font-bold text-white">{b.name}</span><span className="ml-2 text-sm text-white/60">{renderChemistry(b.idea)}</span></div>
            </Glass>
          ))}
        </div>
        <Glass className="mt-4 border-cyan-400/20 bg-cyan-500/[0.05] p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Fajans&apos; rule (covalent character in ionic bonds)</div>
          <p className="mt-1 text-sm text-white/75">{renderChemistry("Small cation + large anion + high charge → more covalent character (more polarisation).")}</p>
        </Glass>
      </Section>

      <Section id="shapes" eyebrow="Visual map" title="VSEPR — Steric Number to Shape">
        <p className="mb-5 max-w-2xl text-white/65">Count the steric number (bond pairs + lone pairs) around the central atom; it fixes the electron geometry. Lone pairs then bend the observed shape.</p>
        <div className="space-y-2">
          {SHAPES.map((s) => (
            <Glass key={s.sn} className="flex items-center gap-4 p-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0B1220] text-lg font-black text-cyan-200">{s.sn}</span>
              <div className="min-w-0 flex-1"><span className="font-bold text-white">{s.shape}</span><span className="ml-2 text-sm text-white/55">{renderChemistry(s.ex)}</span></div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-bold text-amber-300">{s.ang}</span>
            </Glass>
          ))}
        </div>
      </Section>

      <Section id="formulas" eyebrow="Toolbox" title="Formula Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="Formal charge" formula="FC = V - N - B/2" vars={[{ sym: "V", mean: "valence electrons" }, { sym: "N", mean: "non-bonding electrons" }, { sym: "B", mean: "bonding electrons" }]} />
          <FormulaCard name="Bond order (MOT)" formula="B.O. = (N_b - N_a) / 2" vars={[{ sym: "N_b", mean: "bonding electrons" }, { sym: "N_a", mean: "antibonding electrons" }]} />
          <FormulaCard name="Dipole moment" formula="μ = q × d" vars={[{ sym: "q", mean: "charge magnitude" }, { sym: "d", mean: "distance between charges" }]} />
          <FormulaCard name="% ionic character" formula="= (μ_obs / μ_ionic) × 100" vars={[{ sym: "μ_obs", mean: "measured dipole" }, { sym: "μ_ionic", mean: "100% ionic dipole" }]} />
        </div>
      </Section>

      <Section id="example" eyebrow="Worked out" title="Solved Example">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">{renderChemistry("Find the bond order and magnetic nature of O₂ using MOT.")}</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>{renderChemistry("O₂ has 16 electrons. Fill MOs: bonding N_b = 10, antibonding N_a = 6.")}</Step>
            <Step n={2}>{renderChemistry("Bond order = (N_b − N_a)/2 = (10 − 6)/2 = 2.")}</Step>
            <Step n={3}>{renderChemistry("Two unpaired electrons sit in the π* orbitals → paramagnetic.")}</Step>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
            <span className="text-xs font-bold uppercase text-emerald-300">Final answer</span>
            <div className="mt-0.5 font-black text-emerald-200">{renderChemistry("Bond order = 2, and O₂ is paramagnetic")}</div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-2.5">
            <span className="text-xs font-bold uppercase text-amber-300">JEE shortcut</span>
            <p className="mt-0.5 text-sm text-white/75">MOT is the only model that predicts O₂&apos;s paramagnetism — a favourite trap where Lewis/VBT fail.</p>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Exam traps" title="Common Mistakes">
        <CalloutList variant="mistake" items={[
          "Counting lone pairs into the shape name — steric number gives electron geometry; lone pairs bend it (H₂O is bent, not tetrahedral).",
          "Assuming all symmetrical molecules are non-polar without checking bond dipoles cancel (CO₂ non-polar, H₂O polar).",
          "Using VBT for O₂ magnetism — only MOT predicts it correctly.",
          "Forgetting coordinate bonds when counting bond pairs (NH₄⁺, O₃).",
        ]} />
      </Section>

      <Section id="ncert" eyebrow="Straight from the book" title="NCERT Highlights">
        <CalloutList variant="ncert" items={[
          "A polar molecule needs polar bonds AND an asymmetric shape so dipoles don't cancel.",
          "Bond order ∝ bond strength and stability, and is inversely related to bond length.",
          "Hydrogen bonding (in HF, H₂O, NH₃) explains their abnormally high boiling points.",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Weightage" title="JEE Main Focus">
        <JeeFocus items={[
          { t: "Hybridization, shape & bond angle", tag: "Most repeated" },
          { t: "MOT — bond order & magnetism", tag: "High weightage" },
          { t: "Dipole moment & polarity", tag: "Frequent" },
          { t: "Fajans' rule & covalent character", tag: "Recurring" },
        ]} />
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet
          points={[
            "FC = V − N − B/2", "Bond order = (N_b − N_a)/2", "μ = q × d", "SN 2→6: linear→octahedral",
            "Lone pairs bend the observed shape", "Bond order ↑ → length ↓, strength ↑", "MOT explains O₂ paramagnetism", "Fajans: small cation + large anion → covalent",
          ]}
          ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/memory?deck=formula", label: "Recall these formulas" }]}
        />
      </Section>
    </PremiumNotes>
  );
}
