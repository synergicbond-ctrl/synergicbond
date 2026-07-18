import { ChemBondPartShell, DataTable, ImportantNote, LearningObjectives, NoteBlock, WorkedExample } from "./_shared";

export default function Part13() {
  return (
    <ChemBondPartShell part={13} title="Practice — Chemical Bonding Question Bank">
      <LearningObjectives items={[
        "Apply Parts 1-12's tools together, the way integrated JEE Advanced questions actually combine them.",
        "Practice every JEE Advanced question format: single-correct, multiple-correct, assertion-reason, matrix-match, integer and comprehension.",
        "Work the corrected O₂-family matrix-match (Q7) with a clean one-to-one mapping.",
      ]} />

      <NoteBlock title="How to use this part">
        <p>No new chemistry is introduced here — every question below is answered entirely with material from Parts 1–12. Integrated JEE Advanced questions test exactly this: recognising which previously-learned tool applies, sometimes more than one at once.</p>
      </NoteBlock>

      <NoteBlock title="13.1 · Single-Correct">
        <WorkedExample title="Q1. Order the N–O bond length in NO₂⁺, NO₂ and NO₂⁻.">
          <p>(A) NO₂⁺ &lt; NO₂ &lt; NO₂⁻ &nbsp; (B) NO₂⁻ &lt; NO₂ &lt; NO₂⁺ &nbsp; (C) NO₂ &lt; NO₂⁺ &lt; NO₂⁻ &nbsp; (D) All equal</p>
          <p>Average N–O bond order: NO₂⁺ (linear, two N=O double bonds, order 2 each) &gt; NO₂ (resonance-averaged, between 1 and 2) &gt; NO₂⁻ (between 1 and 2, but more single-bond character from its extra electron pair). Higher bond order → shorter bond.</p>
          <p><strong className="text-emerald-300">Answer: (A)</strong> — NO₂⁺ has the highest bond order, so the shortest bond, and the length order follows directly.</p>
        </WorkedExample>
        <WorkedExample title="Q2. Which of these has a zero dipole moment?">
          <p>(A) SF₄ &nbsp; (B) ClF₃ &nbsp; (C) XeF₄ &nbsp; (D) IF₅</p>
          <p>Only a fully cancelling, centrosymmetric bond-moment arrangement gives μ = 0 (Part 5, Part 9). SF₄ (see-saw), ClF₃ (T-shaped) and IF₅ (square pyramidal) are all asymmetric. XeF₄ (square planar) is centrosymmetric — every Xe–F moment is cancelled by the one directly opposite it.</p>
          <p><strong className="text-emerald-300">Answer: (C) XeF₄</strong>.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="13.2 · Multiple-Correct">
        <WorkedExample title="Q3. Which statements are correct?">
          <p>(A) B₂ is paramagnetic because of s–p mixing. (B) The Born–Landé equation&apos;s close numerical fit to experiment for alkali halides proves the bonding is 100% ionic. (C) A coordinate bond, once formed, cannot be distinguished from an ordinary covalent bond by any physical measurement. (D) Resonance structures of NO₃⁻ physically interconvert rapidly at room temperature.</p>
          <p>(A) Correct — the mixed MO order gives B₂ two unpaired π electrons (Part 10). (B) Incorrect — a close numerical fit doesn&apos;t prove 100% ionic character; the model is self-compensating (Part 3). (C) Correct — a coordinate bond is chemically identical to a covalent bond after formation (Part 2). (D) Incorrect — canonical resonance forms have no independent existence; there is only ever one real hybrid structure (Part 6).</p>
          <p><strong className="text-emerald-300">Answer: (A), (C)</strong>.</p>
        </WorkedExample>
        <WorkedExample title="Q4. Which pairs share the same underlying physical mechanism?">
          <p>(A) NH₃-vs-NF₃ dipole difference and Bent&apos;s-rule bond-angle distortion. (B) Pseudo-noble-gas cation polarising power and d-block maximum covalency via orbital promotion. (C) O₂ paramagnetism (MOT) and B₂ paramagnetism (MOT). (D) Ice&apos;s low density and CsCl&apos;s 8:8 coordination.</p>
          <p>(A) Correct — both trace to how substituent electronegativity redistributes s/p character and shifts vector direction/magnitude. (C) Correct — both are direct consequences of degenerate π-type orbitals being singly filled by Hund&apos;s rule, even though O₂ uses the normal order and B₂ the mixed order. (B) is a mismatch — polarising power is a shielding effect, unrelated to expanded-octet covalency. (D) is a mismatch — ice&apos;s anomaly is a hydrogen-bonding geometry effect; CsCl&apos;s coordination is a radius-ratio packing effect.</p>
          <p><strong className="text-emerald-300">Answer: (A), (C)</strong>.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="13.3 · Assertion–Reason">
        <WorkedExample title="Q5. Assertion & Reason — MgO vs NaCl lattice enthalpy">
          <p><strong>Assertion:</strong> The lattice enthalpy of MgO is much greater than that of NaCl. <strong>Reason:</strong> The ionic radii of Mg²⁺ and O²⁻ are smaller than those of Na⁺ and Cl⁻, and the charges are higher.</p>
          <p>Both statements are true (lattice energy ∝ z⁺z⁻ and ∝ 1/r₀), and here both the charge-product and the size contributions point the same direction, so the Reason correctly and completely explains the Assertion.</p>
          <p><strong className="text-emerald-300">Answer: both true, Reason correctly explains Assertion.</strong></p>
        </WorkedExample>
        <WorkedExample title="Q6. Assertion & Reason — XeF₆">
          <p><strong>Assertion:</strong> XeF₆ is predicted by simple VSEPR to be pentagonal pyramidal, but is experimentally close to a distorted octahedron. <strong>Reason:</strong> The lone pair in XeF₆ is stereochemically inactive, exactly as in [SbCl₆]³⁻.</p>
          <p>The Assertion is true. The Reason is false — XeF₆&apos;s lone pair is stereochemically <em>active but delocalised/fluxional</em> (causing the observed distortion), which is the opposite of [SbCl₆]³⁻-type anions, where the lone pair is genuinely inactive and the octahedron stays undistorted. These are the two explicitly contrasted cases from Part 9, not the same case.</p>
          <p><strong className="text-emerald-300">Answer: Assertion true, Reason false.</strong></p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="13.4 · Matrix-Match">
        <WorkedExample title="Q7. Match each species to its magnetic character and bond order">
          <DataTable
            headers={["Column I", "Column II"]}
            rows={[
              ["(A) O₂²⁻", "(P) Paramagnetic, bond order 2.5"],
              ["(B) N₂", "(Q) Diamagnetic, bond order 1"],
              ["(C) O₂⁺", "(R) Paramagnetic, bond order 1.5"],
              ["(D) O₂⁻", "(S) Diamagnetic, bond order 3"],
            ]}
          />
          <p>O₂²⁻: both degenerate π* orbitals fully filled → bond order (8−6)/2 = 1, no unpaired electrons, diamagnetic → (Q). N₂: bond order 3, all paired, diamagnetic → (S). O₂⁺: one π* electron → bond order (8−3)/2 = 2.5, paramagnetic → (P). O₂⁻: three π* electrons → bond order (8−5)/2 = 1.5, one unpaired, paramagnetic → (R).</p>
          <p><strong className="text-emerald-300">Answer: (A)–(Q), (B)–(S), (C)–(P), (D)–(R).</strong></p>
          <p className="text-white/60">Common mistake: assuming every oxygen-family species must be paramagnetic because O₂ is — O₂²⁻ (peroxide) is diamagnetic precisely because the added electrons complete the π* pair. Read the magnetic character off the actual electron filling, never off the parent molecule.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="13.5 · Integer / Numerical">
        <WorkedExample title="Q8. A diatomic X–Y has μ = 2.4 D and bond length 1.00 Å. Find the % ionic character.">
          <p>μ(100% ionic) = e × d = (4.8 × 10⁻¹⁰ esu)(1.00 × 10⁻⁸ cm) = 4.8 D. % ionic character = (2.4/4.8) × 100 = 50%.</p>
          <p><strong className="text-emerald-300">Answer: 50</strong>.</p>
        </WorkedExample>
        <WorkedExample title="Q9. How many of O₂, N₂, O₂⁻, B₂, C₂, NO, CO, F₂ are paramagnetic?">
          <p>O₂ (P), N₂ (D), O₂⁻ (P), B₂ (P), C₂ (D), NO (P), CO (D — isoelectronic with N₂, same bonding pattern), F₂ (D). Paramagnetic set: O₂, O₂⁻, B₂, NO.</p>
          <p><strong className="text-emerald-300">Answer: 4</strong>.</p>
        </WorkedExample>
      </NoteBlock>

      <NoteBlock title="13.6 · Comprehension">
        <p className="text-white/60">Passage: a student examines three species — X = SO₃, Y = SO₂, Z = SO₄²⁻.</p>
        <WorkedExample title="Q10. Which of X, Y, Z requires resonance to explain equal bond lengths, and which does not?">
          <p>SO₂ (Y) genuinely requires two resonance contributors to equalise its two S–O bonds. SO₃ (X) does not strictly require resonance — a single symmetric structure with three S=O double bonds already gives equal bond lengths by molecular symmetry alone. SO₄²⁻ (Z) requires resonance among four equivalent contributors (extending the CO₃²⁻ logic to a tetrahedral case) to equalise all four S–O bonds.</p>
        </WorkedExample>
        <WorkedExample title="Q11. Rank X, Y, Z by average S–O bond order.">
          <p>SO₃: bond order 2 (three S=O bonds, no resonance-averaging needed). SO₂: bond order 1.5 (two equivalent resonance contributors, one S=O + one S–O each). SO₄²⁻: using the minimal-formal-charge structure (two S=O and two S–O⁻, giving S a formal charge of +2 and each single-bonded O a formal charge of −1), bond order = (2×2 + 2×1)/4 = 1.5.</p>
          <p><strong className="text-emerald-300">Answer: SO₃ (2) &gt; SO₂ = SO₄²⁻ (1.5)</strong> — a genuinely counter-intuitive result worth flagging: despite SO₄²⁻ having more oxygens and a higher negative charge, its average S–O bond order equals SO₂&apos;s, not exceeds it, because the extra oxygens in SO₄²⁻ are accommodated partly through additional single, not double, bonds.</p>
        </WorkedExample>
      </NoteBlock>

      <ImportantNote title="The single most valuable habit from this Part">
        Every question above was solved by identifying which specific earlier Part&apos;s tool applies, not by fresh derivation. The core skill this chapter builds is not memorising isolated facts, but quickly recognising which of a small number of underlying mechanisms — energy minimisation, formal charge, electronegativity-driven polarisation, orbital-overlap effectiveness, electron-domain repulsion, bonding/antibonding orbital character — an unfamiliar-looking question is actually testing.
      </ImportantNote>
    </ChemBondPartShell>
  );
}
