import { ChemBondPartShell, DataTable, ImportantNote, LearningObjectives, NoteBlock, WorkedExample } from "./_shared";

export default function ChemicalBondingPractice() {
  return (
    <ChemBondPartShell part={24} title="JEE Advanced Integrated Question Bank">
      <LearningObjectives items={[
        "Integrate Lewis/VSEPR/VBT/MOT rather than solving each chapter tool in isolation.",
        "Use corrected electron counts, bond-order trends, formal-charge and lattice-energy reasoning.",
        "Practise single/multiple-correct, assertion–reason, matrix-match and integer formats.",
      ]} />

      <NoteBlock title="Single-correct · bond order and structure">
        <WorkedExample title="Q1. Order N–O bond length in NO₂⁺, NO₂ and NO₂⁻.">
          <p><strong className="text-emerald-300">NO₂⁺ &lt; NO₂ &lt; NO₂⁻</strong> in bond length. Higher average bond order means shorter bond. NO₂⁺ is linear with strong double-bond character; adding electrons into less-bonding/antibonding combinations lowers average bond order across the series.</p>
        </WorkedExample>
        <WorkedExample title="Q2. Which has zero dipole moment: SF₄, ClF₃, XeF₄, IF₅?">
          <p><strong className="text-emerald-300">XeF₄</strong>. Square-planar symmetry cancels four equal Xe–F bond moments. See-saw, T-shaped and square-pyramidal structures remain polar.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="Multiple-correct · mechanism recognition">
        <WorkedExample title="Q3. Select correct statements.">
          <p>(A) B₂ is paramagnetic in the standard MO scheme. (B) A close Born–Landé fit proves 100% ionic bonding. (C) A coordinate bond becomes indistinguishable from an ordinary covalent bond after formation. (D) Resonance contributors physically interconvert.</p>
          <p><strong className="text-emerald-300">Answer: A, C.</strong> B is false because an ionic model can fit approximately despite covalency; D is false because resonance contributors are not real interconverting species.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="Assertion–reason · lattice energy">
        <WorkedExample title="Q4. MgO vs NaCl lattice enthalpy">
          <p><strong>Assertion:</strong> MgO has much larger lattice-energy magnitude than NaCl. <strong>Reason:</strong> Mg²⁺/O²⁻ have larger charge product and relatively small interionic distance.</p>
          <p><strong className="text-emerald-300">Both true; Reason correctly explains Assertion.</strong> The 2×2 charge product is the dominant factor.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="Matrix-match · corrected O₂ family">
        <WorkedExample title="Q5. Match species to magnetic character and bond order">
          <DataTable headers={["Species", "Correct property"]} rows={[
            ["O₂²⁻", "Diamagnetic, BO = 1"],
            ["N₂", "Diamagnetic, BO = 3"],
            ["O₂⁺", "Paramagnetic, BO = 2.5"],
            ["O₂⁻", "Paramagnetic, BO = 1.5"],
          ]} />
          <p>Read directly from π* occupancy. The matrix is deliberately one-to-one and contains no orphan/duplicate option mapping.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="Integer · electron count and magnetism">
        <WorkedExample title="Q6. How many of O₂, N₂, O₂⁻, B₂, C₂, NO, CO and F₂ are paramagnetic?">
          <p>Paramagnetic: O₂, O₂⁻, B₂ and NO. <strong className="text-emerald-300">Answer = 4.</strong> Critical check: NO has <strong>11 valence electrons</strong>, leaving one electron in π* and BO ≈ 2.5.</p>
        </WorkedExample>
      </NoteBlock>

      <ImportantNote title="Preserved audit corrections">
        NO = 11 valence electrons; SCN⁻ is singly charged; O₂-family matrix mapping is one-to-one; r(N₂) &lt; r(N₂⁺); alkali perchlorate solubility discussion must not be inverted; NO₂/N₂O₄ connectivity and radical treatment must remain corrected.
      </ImportantNote>
    </ChemBondPartShell>
  );
}
