import { HybridShapes } from "@/components/premiumNotes/visuals/chemicalBonding";
import { ChemBondPartShell, DiagramBox, FormulaLine, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part08() {
  return (
    <ChemBondPartShell part={8} title="Hybridisation">
      <LearningObjectives items={[
        "Mix atomic orbitals into hybrid sets and match them to observed geometry.",
        "Use the steric-number formula to find hybridisation directly from a formula.",
        "Rank bond lengths by % s-character.",
        "Know why the classical d-orbital picture of expanded octets is now considered a simplification.",
      ]} />

      <NoteBlock title="Mixing orbitals to match geometry">
        <p>Hybridisation mixes valence orbitals of similar energy into an equal number of degenerate hybrid orbitals whose directions match the observed molecular geometry. It is invoked to explain shapes, not independently observed — a model that earns its keep by correctly predicting angles.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>sp (2 orbitals, 180°) — BeCl₂, C₂H₂.</li>
          <li>sp² (3 orbitals, 120°) — BF₃, C₂H₄.</li>
          <li>sp³ (4 orbitals, 109.5°) — CH₄.</li>
          <li>sp³d (5 orbitals, trigonal bipyramidal) — PCl₅.</li>
          <li>sp³d² (6 orbitals, octahedral) — SF₆.</li>
        </ul>
        <DiagramBox title="Hybrid orbital geometries"><HybridShapes /></DiagramBox>
      </NoteBlock>

      <NoteBlock title="Steric number → hybridisation, directly">
        <p>Steric number (SN) = σ-bonds + lone pairs on the central atom, and it picks the hybridisation immediately: 2→sp, 3→sp², 4→sp³, 5→sp³d, 6→sp³d².</p>
        <FormulaLine math="SN = \tfrac{1}{2}\left[V + M - c + a\right]" />
        <p className="text-white/60">V = central atom&apos;s valence electrons, M = number of monovalent atoms attached, c = cation charge (subtract), a = anion charge (add). Oxygen atoms attached by double bonds count as one σ-bond each but are NOT counted in M (they are not monovalent).</p>
      </NoteBlock>

      <WorkedExample title="Find the hybridisation of the central atom in NH₄⁺, SO₂ and I₃⁻">
        <p>NH₄⁺: SN = ½[5 + 4 − 1 + 0] = 4 → <strong>sp³</strong>, tetrahedral.</p>
        <p>SO₂: 2 σ-bonds + 1 lone pair = SN 3 → <strong>sp²</strong>, bent (~119°).</p>
        <p>I₃⁻ (central I): SN = ½[7 + 2 − 0 + 1] = 5 → <strong>sp³d</strong>; 2 bond pairs + 3 lone pairs → linear shape.</p>
      </WorkedExample>

      <NoteBlock title="% s-character and its consequences">
        <p>% s-character: 50% (sp) &gt; 33⅓% (sp²) &gt; 25% (sp³). More s-character holds bonding electrons closer to the nucleus → shorter, stronger bonds and a more electronegative hybrid orbital.</p>
        <p className="text-white/60">Ranking C–H bond lengths: ethyne (sp, 50% s) &lt; ethene (sp², 33% s) &lt; ethane (sp³, 25% s).</p>
      </NoteBlock>

      <TrapCallout
        trap={<>Treating sp³d/sp³d² hybridisation of P, S and related nonmetals as settled, textbook-final fact.</>}
        reality={<>It is a widely taught <strong>classical model under revision</strong> — modern bonding descriptions of PF₅/SF₆-type molecules favour 3-centre-4-electron bonding over true d-orbital promotion, since phosphorus/sulfur d-orbitals are too high in energy to participate substantially. Exams still accept the classical sp³d/sp³d² labels, but advanced comprehension passages have referenced the modern view — know both.</>}
      />

      <PracticeQuestion
        prompt="A central atom has 2 σ-bonds and 2 lone pairs. What is its hybridisation and the resulting molecular shape?"
        answer="Steric number 4 → sp³ hybridisation; with 2 bond pairs and 2 lone pairs the shape is bent (H₂O-type), not tetrahedral — the lone pairs occupy two of the four tetrahedral hybrid positions but are invisible in the shape's name."
      />

      <SummaryStrip items={[
        "SN = σ-bonds + lone pairs = ½[V + M − c + a] → sp/sp²/sp³/sp³d/sp³d² directly.",
        "% s-character 50/33/25 drives bond length and orbital electronegativity trends.",
        "Classical d-orbital hybridisation for hypervalent nonmetals is being superseded by 3c–4e bonding in modern treatments.",
      ]} />
    </ChemBondPartShell>
  );
}
