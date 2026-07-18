import { BornHaberCycleVisual } from "../_components/ChemicalBondingVisuals";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part03() {
  return (
    <ChemBondPartShell part={3} title="Ionic Bonding & the Born–Haber Cycle">
      <LearningObjectives items={[
        "State what actually decides whether an ionic bond forms.",
        "Construct the Born–Haber cycle for NaCl and identify the term that makes it exothermic overall.",
        "Explain why 'NaCl molecules' is not a valid description of the solid.",
        "Place ionic, covalent and metallic bonding on the Ketelaar triangle continuum.",
      ]} />

      <NoteBlock title="What really pays for an ionic bond">
        <p>Ionic bond formation is favoured by a low ionisation enthalpy of the metal, a high (very negative) electron-gain enthalpy of the non-metal, and — decisively — a large lattice enthalpy: the energy released when gaseous ions assemble into one mole of crystal.</p>
        <p>The classic subtlety: forming O²⁻(g) from O(g) is overall <em>endothermic</em> (the second electron is forced onto an already-negative ion), yet oxides like MgO are extremely stable, because the lattice enthalpy of the 2+/2− crystal overwhelms that cost. Ion formation is only the set-up; the crystal lattice pays the bill.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Lattice enthalpy increases with higher ionic charges and smaller inter-ionic distance.</li>
          <li>Ionic compounds: crystalline, high melting/boiling points, conduct only when molten or in solution (not as a solid), generally soluble in polar solvents.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="Born–Haber cycle for NaCl(s)">
        <p>Na(s) → Na(g): +108 kJ (sublimation). ½Cl₂(g) → Cl(g): +122 kJ (half the bond dissociation enthalpy). Na(g) → Na⁺(g) + e⁻: +496 kJ (IE₁). Cl(g) + e⁻ → Cl⁻(g): −349 kJ (electron-gain enthalpy). Na⁺(g) + Cl⁻(g) → NaCl(s): −788 kJ (lattice enthalpy of formation).</p>
        <p>Sum: (+108) + (+122) + (+496) + (−349) + (−788) ≈ <strong className="text-emerald-300">−411 kJ mol⁻¹</strong> = ΔfH(NaCl), matching the accepted value. The three costs (sublimation, dissociation, ionisation — total +726) comfortably exceed the electron-gain payback (−349); only the lattice enthalpy (−788), the largest single term, turns the overall process exothermic.</p>
        <DiagramBox title="Born–Haber cycle for NaCl"><BornHaberCycleVisual /></DiagramBox>
      </WorkedExample>

      <TrapCallout
        trap={<>&quot;NaCl exists as discrete Na⁺Cl⁻ ion pairs, like a molecule.&quot;</>}
        reality={<>In the solid there are no discrete molecules — each Na⁺ touches 6 Cl⁻ and each Cl⁻ touches 6 Na⁺ (6:6 coordination) in an extended lattice. &quot;A molecule of NaCl&quot; only makes sense for isolated gas-phase ion pairs in the vapour, not the crystalline solid.</>}
      />

      <NoteBlock title="The Ketelaar triangle — bonding is a continuum, not three boxes">
        <p>Real bonds rarely sit at a pure ionic, pure covalent or pure metallic corner. Electronegativity difference between the two atoms pushes a bond toward ionic character; average electronegativity (how strongly both atoms hold electrons overall) separates covalent from metallic character. Most real compounds sit somewhere along the edges or interior of this triangle — AlCl₃ and BeCl₂, for instance, sit well inside the covalent region despite being metal chlorides.</p>
      </NoteBlock>

      <PracticeQuestion
        prompt="Which single Born–Haber term is most responsible for MgO being far more stable than NaCl, despite the endothermic cost of forming O²⁻ from O?"
        answer="Lattice enthalpy — MgO's smaller, doubly-charged ions (Mg²⁺, O²⁻) give a much larger (more negative) lattice enthalpy than NaCl's singly-charged, larger ions, easily outweighing the extra endothermic step of adding a second electron to oxygen."
      />

      <SummaryStrip items={[
        "Lattice enthalpy — not electron-gain enthalpy — is what actually pays for an ionic bond (the MgO argument).",
        "Born–Haber for NaCl: three endothermic set-up steps (+726 kJ total) outweighed only by the −788 kJ lattice term.",
        "No 'NaCl molecule' in the solid: 6:6 ionic coordination; bonding itself is a continuum (Ketelaar triangle), not three separate boxes.",
      ]} />
    </ChemBondPartShell>
  );
}
