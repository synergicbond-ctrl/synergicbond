import { renderChemistry } from "@/lib/renderChemistry";
import { PremiumNotes, Glass, Hero, Section, FormulaCard, Step, CalloutList, JeeFocus, RevisionSheet, type NoteSection } from "@/components/notes/premium";
import { CanonicalNotesStyles, ChapterLessonGrid } from "@/components/notes/canonical";
import { chemBondPartMeta, CHEM_BOND_GROUPS } from "./parts/_shared";

const SECTIONS: NoteSection[] = [
  { id: "why", label: "Why it matters" },
  { id: "coverage", label: "189-topic coverage" },
  { id: "shapes", label: "VSEPR map" },
  { id: "formulas", label: "Formula cards" },
  { id: "example", label: "Solved example" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "jee", label: "JEE Advanced focus" },
  { id: "parts", label: "Chapter parts" },
  { id: "revision", label: "Revision sheet" },
];

const SHAPES = [
  { sn: "2", shape: "Linear", ex: "BeCl₂, CO₂", ang: "180°" },
  { sn: "3", shape: "Trigonal planar", ex: "BF₃", ang: "120°" },
  { sn: "4", shape: "Tetrahedral family", ex: "CH₄, NH₃, H₂O", ang: "109.5° base" },
  { sn: "5", shape: "Trigonal-bipyramidal family", ex: "PCl₅, SF₄, ClF₃, XeF₂", ang: "90°/120°" },
  { sn: "6", shape: "Octahedral family", ex: "SF₆, BrF₅, XeF₄", ang: "90°" },
  { sn: "7", shape: "Pentagonal-bipyramidal", ex: "IF₇", ang: "72°/90°" },
];

export default function ChemicalBondingNotes() {
  return (
    <PremiumNotes sections={SECTIONS}>
      <div id="why" className="scroll-mt-10">
        <Hero
          eyebrow="JEE Advanced · Authoritative master sequence"
          title="Chemical Bonding &"
          accent="Molecular Structure"
          lead="A 189-topic deep chapter: energetic origin of bonding → ionic thermochemistry → orbitals/VBT/hybridisation/VSEPR → inorganic structures and special bonding → dipoles/resonance/hydrogen bonding → full MOT → Fajans/intermolecular forces → carbon allotropes and silicates. Historical exam models are retained, but modern bonding caveats are stated explicitly."
          stats={[
            { v: "189/189", k: "master topics mapped" },
            { v: `${chemBondPartMeta.length}`, k: "balanced study parts", tone: "text-emerald-300" },
            { v: "JEE Adv", k: "derivations + traps + modern caveats", tone: "text-amber-300" },
          ]}
        />
      </div>

      <Section id="coverage" eyebrow="No heading-only padding" title="Coverage Architecture">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["1–27", "Bond formation, octet, maximum covalency, ionic/Lewis foundations"],
            ["28–57", "Atomic orbitals, nodes, symmetry, VBT, overlap and hybridisation"],
            ["58–104", "VSEPR, inorganic structures, bond angle/back bonding, multicentre bonding"],
            ["105–130", "Dipoles, formal charge, resonance, periodic effects and hydrogen bonding"],
            ["131–178", "Full MOT, pseudohalides, Fajans, intermolecular forces, carbon and ionic-solubility thermodynamics"],
            ["179–189", "Silicate tetrahedra → isolated/dimer/ring/chain/sheet/framework → aluminosilicates/zeolites/uses"],
          ].map(([range, text]) => (
            <Glass key={range} className="p-4"><div className="text-sm font-black text-cyan-200">Topics {range}</div><p className="mt-1 text-sm leading-relaxed text-white/65">{text}</p></Glass>
          ))}
        </div>
        <Glass className="mt-4 border-violet-300/20 bg-violet-300/[0.05] p-4 text-sm leading-relaxed text-white/75">
          Traditional labels such as expanded-octet d-orbital hybridisation and pπ–dπ bonding are taught for exam literacy, then separated from the more defensible modern delocalised/3c–4e/MO interpretation. The chapter never asks you to choose between scoring in an exam and learning accurate chemistry.
        </Glass>
      </Section>

      <Section id="shapes" eyebrow="Visual map" title="VSEPR — Steric Number to Shape Family">
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

      <Section id="formulas" eyebrow="Toolbox" title="Core Formula Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard name="Formal charge" formula="FC = V - N - B/2" vars={[{ sym: "V", mean: "valence electrons" }, { sym: "N", mean: "non-bonding electrons" }, { sym: "B", mean: "bonding electrons" }]} />
          <FormulaCard name="MOT bond order" formula="B.O. = (N_b - N_a) / 2" vars={[{ sym: "N_b", mean: "bonding electrons" }, { sym: "N_a", mean: "antibonding electrons" }]} />
          <FormulaCard name="Dipole moment" formula="μ = q × d" vars={[{ sym: "q", mean: "charge magnitude" }, { sym: "d", mean: "separation" }]} />
          <FormulaCard name="Ionic dissolution" formula="ΔG_soln = ΔH_soln - TΔS_soln" vars={[{ sym: "ΔH", mean: "lattice + hydration/solvation" }, { sym: "ΔS", mean: "system + solvent entropy" }]} />
        </div>
      </Section>

      <Section id="example" eyebrow="Integrated reasoning" title="Solved Example — O₂ Family">
        <Glass className="p-5">
          <p className="text-sm font-semibold text-white">Rank O₂⁺, O₂, O₂⁻ and O₂²⁻ by bond length and state their magnetism.</p>
          <div className="mt-4 space-y-3">
            <Step n={1}>Start from O₂: two electrons occupy degenerate π* orbitals → BO = 2 and two unpaired electrons.</Step>
            <Step n={2}>Removing one π* electron gives O₂⁺, BO = 2.5. Adding one gives O₂⁻, BO = 1.5; adding two gives O₂²⁻, BO = 1.</Step>
            <Step n={3}>Bond length is inverse to BO within this related series: O₂⁺ &lt; O₂ &lt; O₂⁻ &lt; O₂²⁻. O₂⁺, O₂ and O₂⁻ are paramagnetic; peroxide O₂²⁻ is diamagnetic.</Step>
          </div>
        </Glass>
      </Section>

      <Section id="mistakes" eyebrow="Audit-protected" title="High-Risk Corrections">
        <CalloutList variant="mistake" items={[
          "NO has 11 valence electrons (5 + 6), not 15; 15 is its total electron count including core electrons.",
          "SCN⁻ is singly charged. Always total formal charges to −1.",
          "r(N₂) < r(N₂⁺): ionising N₂ removes a bonding electron and lowers BO 3 → 2.5.",
          "Hypervalent main-group bonding should not be taught as compulsory literal d-orbital expansion; retain the exam label but state the modern caveat.",
          "Ionic solubility requires lattice + hydration/solvation + entropy; do not invert the alkali-perchlorate trend by a one-factor slogan.",
        ]} />
      </Section>

      <Section id="jee" eyebrow="Depth target" title="JEE Advanced Focus">
        <JeeFocus items={[
          { t: "VSEPR + stereochemically active/inactive lone pairs + state dependence", tag: "High yield" },
          { t: "MOT: ordering, s–p mixing, O₂ family, CO/NO and ligand view", tag: "Core" },
          { t: "Lattice/Born–Landé/Kapustinskii + hydration/solubility thermodynamics", tag: "Advanced" },
          { t: "Back bonding, multicentre bonds, inorganic structures and silicate topology", tag: "Differentiator" },
        ]} />
      </Section>

      <Section id="parts" eyebrow="Authoritative sequence" title={`Chemical Bonding — All ${chemBondPartMeta.length} Parts`}>
        <p className="mb-5 max-w-3xl text-white/65">Parts 1–23 follow Topics 1–189 in exact master order; Part 24 is integrated JEE Advanced practice. Topic numbers remain visible inside every lesson for auditability.</p>
        <CanonicalNotesStyles />
        <div className="space-y-7">
          {CHEM_BOND_GROUPS.map((group, index) => (
            <div key={group.label} id={`bond-group-${index + 1}`} style={{ scrollMarginTop: 90 }}>
              <h3 className="sbnLessonGroupLabel" style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>
                {group.label}<span className="ml-2 text-sm font-semibold normal-case tracking-normal" style={{ color: "#91a9bc" }}>Parts {String(group.from).padStart(2, "0")}–{String(group.to).padStart(2, "0")}</span>
              </h3>
              <ChapterLessonGrid lessons={chemBondPartMeta.filter((p) => p.part >= group.from && p.part <= group.to).map((p) => ({ href: p.href, number: `Part ${String(p.part).padStart(2, "0")}`, title: p.title, meta: p.tag }))} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="revision" eyebrow="One screen" title="Revision Sheet">
        <RevisionSheet points={[
          "Bonding = net energy lowering; octet is a model, not the cause", "Lattice |U| ↑ with charge and ↓ with distance", "FC = V − N − B/2", "SN 2→7 maps electron-domain geometries",
          "LP–LP > LP–BP > BP–BP, but real angles also depend on electronegativity/π bonding", "BO = (Nb − Na)/2; inspect unpaired electrons for magnetism", "NO = 11 valence e⁻", "Silicates: 0→4 shared O gives isolated→3-D framework",
        ]} ctas={[{ href: "/pyq", label: "Practise PYQs" }, { href: "/memory?deck=formula", label: "Recall formulas" }]} />
      </Section>
    </PremiumNotes>
  );
}
