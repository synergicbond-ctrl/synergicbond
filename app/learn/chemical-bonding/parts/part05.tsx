import { DipoleVectors } from "@/components/premiumNotes/visuals/chemicalBonding";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part05() {
  return (
    <ChemBondPartShell part={5} title="Dipole Moment & Molecular Polarity">
      <LearningObjectives items={[
        "Treat dipole moment as a vector sum, not just bond polarity.",
        "Explain why NH₃ has a larger dipole moment than NF₃ despite N–F bonds being more polar.",
        "Calculate percentage ionic character from an observed dipole moment.",
        "List the standard zero-μ and non-zero-μ molecules examiners recycle.",
      ]} />

      <NoteBlock title="μ = q × d — but as a vector">
        <p>Dipole moment is charge × separation, measured in debye (1 D = 3.336 × 10⁻³⁰ C m). It acts as a vector along each bond; the molecular dipole is the vector SUM of all bond dipoles, so a molecule with polar bonds can still be non-polar overall if geometry cancels them.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Zero μ despite polar bonds: CO₂ (linear), BF₃ (trigonal planar), CCl₄ (tetrahedral), PCl₅, SF₆, XeF₄, para-dichlorobenzene, trans-alkenes.</li>
          <li>Non-zero μ: H₂O (1.85 D, bent), NH₃ (1.47 D), CHCl₃, cis-alkenes, ortho- and meta-dichlorobenzene.</li>
          <li>Dichlorobenzene order: ortho &gt; meta &gt; para (para = 0).</li>
        </ul>
        <DiagramBox title="Vector cancellation across geometries"><DipoleVectors /></DiagramBox>
      </NoteBlock>

      <WorkedExample title="NH₃ has μ = 1.47 D but NF₃ only 0.24 D, though N–F bonds are individually more polar. Resolve the contradiction.">
        <p>The lone pair on nitrogen contributes its own moment, pointing away from the bonding face. In NH₃, N is more electronegative than H, so each N–H bond moment points from H toward N — the three-bond resultant points along the same axis as the lone pair. Lone-pair moment and bond resultant <strong className="text-emerald-300">add</strong>, giving a large net μ.</p>
        <p>In NF₃, each bond moment points from N toward the more electronegative F — the bond resultant now <strong className="text-rose-300">opposes</strong> the lone-pair moment, and the two nearly cancel, leaving a small net μ.</p>
        <p className="text-white/60">Rule of thumb: whenever the lone-pair moment and bond-dipole resultant oppose each other, expect an anomalously small net dipole (NF₃, ClF₃-type discussions).</p>
      </WorkedExample>

      <WorkedExample title="HCl has observed μ = 1.03 D and bond length 127 pm. Find its percentage ionic character.">
        <p>Compare the observed moment with the hypothetical 100% ionic moment (full charges e⁺/e⁻ separated by the bond length): μ(ionic) = e × d = (1.6 × 10⁻¹⁹ C)(1.27 × 10⁻¹⁰ m) = 2.03 × 10⁻²⁹ C m ≈ 6.09 D.</p>
        <p>% ionic character = 1.03 / 6.09 × 100 ≈ <strong className="text-emerald-300">17%</strong>.</p>
        <p className="text-white/60">Fast method (bond length in Å only): μ(100% ionic) ≈ 4.8 × d(Å) debye. Here 4.8 × 1.27 ≈ 6.1 D → 1.03/6.1 ≈ 17%. Mixing pm with Å in this shortcut is the most common slip.</p>
      </WorkedExample>

      <TrapCallout
        trap={<>&quot;BF₃ has polar bonds, so BF₃ must be a polar molecule.&quot;</>}
        reality={<>The three B–F vectors, spaced 120° apart, sum to exactly zero. Bond polarity is not the same question as molecular polarity — always sketch the geometry first; the vector sum is a geometry question, not purely an electronegativity one.</>}
      />

      <PracticeQuestion
        prompt="CCl₄ has polar C–Cl bonds. Is CCl₄ polar overall, and why?"
        answer="Non-polar. The four C–Cl bond dipoles point toward the vertices of a regular tetrahedron and their vector sum is exactly zero, just like CH₄'s bond arrangement — geometry cancels bond polarity."
      />

      <SummaryStrip items={[
        "μ is a vector sum, not a bond-polarity tally — always draw the shape first.",
        "NH₃ (1.47 D) > NF₃ (0.24 D): lone-pair and bond-resultant directions add in NH₃, oppose in NF₃.",
        "% ionic character = μ_obs / μ_ionic × 100, with μ_ionic ≈ 4.8 × d(Å) debye.",
      ]} />
    </ChemBondPartShell>
  );
}
