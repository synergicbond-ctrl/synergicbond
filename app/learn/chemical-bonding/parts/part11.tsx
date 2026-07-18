import { HydrogenBondingVisual } from "../_components/ChemicalBondingVisuals";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part11() {
  return (
    <ChemBondPartShell part={11} title="Hydrogen Bonding & Intermolecular Forces">
      <LearningObjectives items={[
        "Identify when a hydrogen bond can form, and distinguish inter- from intramolecular H-bonds.",
        "Explain why H₂O boils higher than HF despite F being more electronegative than O.",
        "Order the van der Waals force family by relative strength.",
      ]} />

      <NoteBlock title="When H bridges two electronegative atoms">
        <p>A hydrogen atom covalently bound to N, O or F is left so electron-poor that it attracts a lone pair on another nearby N, O or F — a hydrogen bond (≈10–40 kJ mol⁻¹: far weaker than a covalent bond ~400 kJ mol⁻¹, far stronger than dispersion forces).</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Intermolecular H-bonds link different molecules: the water network, HF zig-zag chains, alcohols, carboxylic-acid dimers.</li>
          <li>Intramolecular H-bonds close a ring within ONE molecule: o-nitrophenol, salicylaldehyde — these molecules then associate LESS with their neighbours.</li>
          <li>Consequences: water&apos;s anomalously high boiling point and ice&apos;s open structure; DNA base pairing; protein secondary structure.</li>
        </ul>
        <DiagramBox title="Intermolecular hydrogen bonding in water"><HydrogenBondingVisual /></DiagramBox>
      </NoteBlock>

      <WorkedExample title="o-Nitrophenol is steam-volatile; p-nitrophenol is not. Why?">
        <p>Ortho: the –NO₂ and –OH groups sit close enough to form an intramolecular H-bond (chelation) — no association with neighbouring molecules, so it is volatile and less water-soluble. Para: the groups are too far apart to chelate, so the molecule instead forms an intermolecular H-bonded network with its neighbours, raising its boiling point and reducing volatility.</p>
      </WorkedExample>

      <TrapCallout
        trap={<>&quot;F is the most electronegative element, so HF must boil higher than H₂O.&quot;</>}
        reality={<>H₂O boils at 100 °C vs HF at only 19.5 °C. Each water molecule can form roughly 4 hydrogen bonds (2 as donor via its H atoms + 2 as acceptor via its lone pairs), building an extended 3-D network; HF averages only about 2 per molecule (zig-zag chains). The <strong>number</strong> of H-bonds per molecule outweighs the strength of any single one.</>}
      />

      <NoteBlock title="The rest of the weak-force family (van der Waals forces)">
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-white">London dispersion</strong> (instantaneous dipole–induced dipole): present in every molecule, grows with molecular size/surface area — why I₂ is a solid while Cl₂ is a gas at room temperature.</li>
          <li><strong className="text-white">Dipole–dipole</strong>: between permanent dipoles (HCl···HCl); <strong className="text-white">dipole–induced dipole</strong>: a polar molecule inducing a temporary dipole in a nonpolar neighbour.</li>
          <li>Strength ladder: dispersion &lt; dipole–dipole &lt; hydrogen bond ≪ covalent/ionic bonds.</li>
        </ul>
      </NoteBlock>

      <PracticeQuestion
        prompt="Why does ice float instead of sinking, unlike almost every other solid relative to its own liquid?"
        answer="The hydrogen-bonded network locks each water molecule into a tetrahedral cage in ice, which is more open (lower density) than the liquid, where some H-bonds are bent or broken and molecules pack more closely. Density therefore drops on freezing, and maximum liquid-water density occurs near 4 °C, not at the freezing point."
      />

      <SummaryStrip items={[
        "H-bond needs H on N/O/F attracted to a lone pair on N/O/F, 10–40 kJ mol⁻¹.",
        "Intramolecular H-bonding (o-nitrophenol) → volatile, less soluble; intermolecular → high boiling point.",
        "H₂O > HF > NH₃ in boiling point: count H-bonds per molecule, don't just rank by electronegativity.",
      ]} />
    </ChemBondPartShell>
  );
}
