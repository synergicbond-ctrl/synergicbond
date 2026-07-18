import { ChemBondPartShell, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part06() {
  return (
    <ChemBondPartShell part={6} title="Resonance in Odd-Electron Species">
      <LearningObjectives items={[
        "Locate the unpaired electron correctly in NO₂'s canonical structures.",
        "Explain how NO₂ dimerises to N₂O₄, and through which bond.",
        "Rank C–O bond lengths across CO, CO₂ and CO₃²⁻ by bond order.",
      ]} />

      <NoteBlock title="One molecule, several drawings">
        <p>When a single Lewis structure cannot represent a molecule (experimental bond lengths sit between single- and double-bond values), a set of canonical structures is drawn whose weighted average — the resonance hybrid — is the real molecule. The hybrid is MORE stable than any individual canonical form; that stabilisation is the resonance energy.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Canonical forms differ only in electron positions — never in atom positions.</li>
          <li>O₃: two equivalent forms → both O–O bonds identical (128 pm, between the 121 pm O=O and 148 pm O–O reference lengths).</li>
          <li>CO₃²⁻: three equivalent forms → each C–O bond order = total π bonds ÷ equivalent positions = 4/3.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="NO₂'s odd electron and N₂O₄'s dimerisation">
        <p>NO₂ has 17 valence electrons — an odd total, so one electron must remain unpaired. Two equivalent canonical forms delocalise NO₂&apos;s formal −1 charge and one π bond over the two oxygens (giving both N–O bonds equal, intermediate bond order), but the unpaired electron itself resides <strong className="text-cyan-200">principally on nitrogen</strong> in the major contributors, not on either oxygen.</p>
        <p>Because the radical sits on N, two NO₂ molecules dimerise by pairing their nitrogen-centred electrons directly: N₂O₄ is planar <strong>O₂N–NO₂</strong>, joined by a single N–N bond (≈178 pm) — not by any oxygen-to-oxygen linkage.</p>
      </WorkedExample>

      <TrapCallout
        trap={<>&quot;NO₂&apos;s radical character sits on the oxygens, so N₂O₄ forms by dimerising through the terminal oxygen positions.&quot;</>}
        reality={<>The unpaired electron is principally on <strong>N</strong>, and N₂O₄ is O₂N–NO₂ with a direct <strong>N–N bond</strong>. Placing the radical on oxygen, or drawing the dimer as an O–O linked species, is the single most common NO₂/N₂O₄ error.</>}
      />

      <WorkedExample title="Arrange the C–O bond lengths in CO, CO₂ and CO₃²⁻">
        <p>Bond order: CO = 3 (triple bond, shortest, ≈110 pm) · CO₂ = 2 (each C=O double bond, ≈120 pm) · CO₃²⁻ = 4/3 (three equivalent resonance forms, longest of the three, ≈136 pm).</p>
        <p>Higher bond order → shorter bond, so <strong className="text-emerald-300">CO &lt; CO₂ &lt; CO₃²⁻</strong> — a one-line ranking these exams recycle directly from the bond-order argument.</p>
      </WorkedExample>

      <PracticeQuestion
        prompt="Why is the resonance hybrid of a molecule always more stable than any single canonical structure, and why is 'the molecule oscillates between the structures' a wrong description?"
        answer="Canonical forms have no independent physical existence — there is only ever one real structure, the hybrid, whose electron distribution is a genuine weighted blend, not a time-average of separate forms. The extra stabilisation of the true hybrid over any single contributor is the resonance energy."
      />

      <SummaryStrip items={[
        "Resonance hybrid is the only real structure; canonical forms never differ in atom positions, only electron positions.",
        "NO₂'s unpaired electron is on N; N₂O₄ = O₂N–NO₂ joined by an N–N bond, not an O–O linkage.",
        "Bond order: CO (3) > CO₂ (2) > CO₃²⁻ (4/3); length runs the other way — CO shortest, CO₃²⁻ longest.",
      ]} />
    </ChemBondPartShell>
  );
}
