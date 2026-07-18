import { MoDiagram } from "@/components/premiumNotes/visuals/chemicalBonding";
import { ChemBondPartShell, DataTable, DiagramBox, FormulaLine, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part10() {
  return (
    <ChemBondPartShell part={10} title="Molecular Orbital Theory">
      <LearningObjectives items={[
        "Fill molecular orbitals with the correct order for Li₂–N₂ (mixed) vs O₂/F₂ (normal).",
        "Compute bond order and predict magnetism for homonuclear diatomics and their ions.",
        "Correctly count NO's valence electrons and use them to explain the N₂ → N₂⁺ and NO → NO⁺ bond-length changes.",
      ]} />

      <NoteBlock title="LCAO, bonding & antibonding">
        <p>Atomic orbitals of comparable energy and correct symmetry combine (Linear Combination of Atomic Orbitals): constructive overlap gives a bonding MO (density between the nuclei, lower energy); destructive overlap gives an antibonding MO (a node between the nuclei, higher energy, marked σ*/π*). n atomic orbitals combine into n molecular orbitals.</p>
        <FormulaLine math="\text{Bond order} = \tfrac{1}{2}\left(N_b - N_a\right)" />
        <ul className="list-disc space-y-1 pl-5">
          <li>Bond order 0 ⇒ the molecule does not exist (He₂).</li>
          <li>Unpaired MO electrons ⇒ paramagnetic; all electrons paired ⇒ diamagnetic.</li>
          <li>O₂, F₂ order: σ2s &lt; σ*2s &lt; σ2pz &lt; (π2px = π2py) &lt; (π*2px = π*2py) &lt; σ*2pz.</li>
          <li>B₂, C₂, N₂ order (s–p mixing pushes σ2pz above the π set): σ2s &lt; σ*2s &lt; (π2px = π2py) &lt; σ2pz &lt; π* &lt; σ*.</li>
        </ul>
        <DiagramBox title="MO diagrams: N₂ (mixed order) vs O₂ (normal order)"><MoDiagram /></DiagramBox>
      </NoteBlock>

      <NoteBlock title="Bond order, magnetism and the isoelectronic order-3 club">
        <ul className="list-disc space-y-1 pl-5">
          <li>O₂ (16 e⁻): bond order 2, two unpaired π* electrons → paramagnetic — MOT&apos;s signature triumph, since Lewis/VBT both predict all-paired O₂.</li>
          <li>B₂: order 1, paramagnetic (two unpaired π electrons — this needs the mixed order). C₂: order 2, diamagnetic (configuration ...π2p⁴ with σ2p empty — both bonds are π, a favourite advanced true/false).</li>
          <li>N₂: order 3, diamagnetic, 946 kJ mol⁻¹ bond enthalpy — the mixed order is exactly why N₂⁺ (order 2.5) is less stable than neutral N₂.</li>
          <li>Isoelectronic order-3 club (14 electrons): N₂, CO, NO⁺, CN⁻, C₂²⁻.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="Between N₂ and N₂⁺, which has the longer bond?">
        <p>N₂ uses the mixed order, so its HOMO is the bonding π2p set. Removing an electron from a <em>bonding</em> orbital to form N₂⁺ drops the bond order from 3 to 2.5, so the bond <strong className="text-cyan-200">lengthens</strong>: N₂ ≈ 110 pm → N₂⁺ ≈ 112 pm.</p>
        <p className="text-white/60">Contrast with O₂ → O₂⁺: O₂&apos;s HOMO is antibonding π*, so removing an electron there raises the bond order (2 → 2.5) and shortens the bond — the direction of the length change always depends on whether the departing electron was bonding or antibonding, never a fixed rule for &quot;forming a cation.&quot;</p>
      </WorkedExample>

      <WorkedExample title="NO and NO⁺ — count the electrons correctly first">
        <p>NO has 5 (N) + 6 (O) = <strong className="text-cyan-200">11 valence electrons</strong> — filling the normal (O₂-type) MO order with 11 electrons gives configuration σ2s² σ*2s² σ2p² π2p⁴ π*2p¹, using exactly 11 electrons and leaving one electron in π*. Bond order = (8 − 3)/2 = 2.5, and that lone π* electron makes NO paramagnetic.</p>
        <p>Removing that single π* (antibonding) electron gives NO⁺: bond order rises to 3.0, so NO⁺ is shorter and stronger than NO (115 pm → 106 pm) and diamagnetic.</p>
        <p className="text-white/60">By contrast, CO&apos;s HOMO is a weakly bonding, largely carbon-centred lone-pair σ2p orbital — removing it to form CO⁺ changes the bond only slightly, and experimentally CO⁺&apos;s bond even contracts marginally rather than lengthening.</p>
      </WorkedExample>

      <TrapCallout
        trap={<>&quot;NO has 15 valence electrons.&quot;</>}
        reality={<>NO has <strong>11 valence electrons</strong> (5 from N + 6 from O). 15 is NO&apos;s <em>total</em> electron count, including both 1s² core shells — a different number that has no role in the valence MO diagram. Using 15 electrons in the MO filling above would overshoot every real orbital and give a nonsensical, negative bond order.</>}
      />

      <NoteBlock title="Ranking a full isoelectronic-style series: O₂⁺, O₂, O₂⁻, O₂²⁻">
        <p>Each successive electron added beyond O₂⁺ enters an antibonding π* orbital, dropping the bond order by ½ each time and lengthening the bond.</p>
        <DataTable
          headers={["Species", "Bond order", "Unpaired e⁻", "Magnetism"]}
          rows={[
            ["O₂⁺", "2.5", "1", "paramagnetic"],
            ["O₂", "2", "2", "paramagnetic"],
            ["O₂⁻", "1.5", "1", "paramagnetic"],
            ["O₂²⁻", "1", "0", "diamagnetic"],
          ]}
        />
        <p className="text-white/60">Bond length runs the opposite way to bond order: O₂⁺ &lt; O₂ &lt; O₂⁻ &lt; O₂²⁻. Anchor from familiar salts: KO₂ (superoxide, O₂⁻) is paramagnetic; Na₂O₂ (peroxide, O₂²⁻) is diamagnetic.</p>
      </NoteBlock>

      <PracticeQuestion
        prompt="Why can't a resonance/Lewis argument explain O₂'s paramagnetism the way MOT does?"
        answer="Lewis structures pair every electron by construction (O=O with two lone pairs each), and no amount of resonance mixing between Lewis structures introduces unpaired electrons. Only MOT's orbital-filling procedure — which independently fills bonding and antibonding orbitals by energy and Hund's rule — naturally produces O₂'s two unpaired π* electrons. This exact assertion–reason pair is a frequently asked question."
      />

      <SummaryStrip items={[
        "Bond order = ½(Nb − Na); mixed order (π below σ) applies up to N₂, normal order from O₂ onward.",
        "NO has 11 valence electrons (not 15) → bond order 2.5, one π* electron, paramagnetic; NO⁺ is 3.0, diamagnetic.",
        "N₂ → N₂⁺ lengthens the bond (loses a bonding electron); O₂ → O₂⁺ shortens it (loses an antibonding electron) — direction depends on which orbital loses the electron.",
      ]} />
    </ChemBondPartShell>
  );
}
