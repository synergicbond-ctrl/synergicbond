import { BackBondingVisual, DiboraneBridgeVisual } from "../_components/ChemicalBondingVisuals";
import { ChemBondPartShell, DiagramBox, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part02() {
  return (
    <ChemBondPartShell part={2} title="Coordinate Bonds, Resonance & Formal Charge">
      <LearningObjectives items={[
        "Draw a coordinate (dative) bond and identify it in NH₄⁺ and BF₃·NH₃.",
        "Apply formal charge FC = V − L − ½S to choose between candidate Lewis structures.",
        "Explain diborane's 3-centre-2-electron bridge bonds and BF₃'s back-bonding.",
        "Assign the correct charge and formal-charge distribution for SCN⁻.",
      ]} />

      <NoteBlock title="Coordinate (dative) bonds">
        <p>A coordinate bond is a covalent bond where both shared electrons come from one atom (the donor) into an empty orbital of the other (the acceptor). Once formed, it is indistinguishable from an ordinary covalent bond.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>NH₄⁺: NH₃&apos;s lone pair donates into H⁺&apos;s empty 1s orbital — all four N–H bonds become equivalent immediately after formation.</li>
          <li>BF₃ + NH₃ → F₃B←NH₃: BF₃&apos;s incomplete octet (Part 1) makes it a classic Lewis acid; NH₃&apos;s lone pair is the Lewis base.</li>
        </ul>
      </NoteBlock>

      <NoteBlock title="Writing a Lewis structure that survives marking schemes">
        <ul className="list-disc space-y-1 pl-5">
          <li>Count ALL valence electrons — add electrons for a negative charge, subtract for a positive one.</li>
          <li>The least electronegative atom is usually central (H and F are always terminal).</li>
          <li>Connect with single bonds, complete terminal octets, place any leftover electrons on the central atom, then convert lone pairs into multiple bonds if the central atom is short of an octet.</li>
          <li>Formal charge FC = V − L − ½S (V = free-atom valence electrons, L = non-bonding electrons on that atom, S = electrons it shares in bonds). The best structure minimises formal charges and places any negative FC on the more electronegative atom.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="Assign the major Lewis structure and formal charges of SCN⁻">
        <p>SCN⁻ has 6 (S) + 4 (C) + 5 (N) + 1 (charge) = <strong className="text-cyan-200">16 valence electrons</strong>. Carbon is central.</p>
        <p>Major contributor: <strong>[S=C=N]⁻</strong>. FC(S) = 6 − 4 − 2 = 0; FC(C) = 4 − 0 − 4 = 0; FC(N) = 5 − 4 − 2 = −1. Net = 0 + 0 + (−1) = <strong className="text-emerald-300">−1</strong>, matching the ion&apos;s actual singly-negative charge — the formal negative charge sits on N, the more electronegative terminal atom, favouring this canonical form over placements that put the negative charge on S.</p>
        <p className="text-white/60">Always total the formal charges first and check the sum equals the species&apos; stated charge before ranking candidate structures against each other.</p>
      </WorkedExample>

      <TrapCallout
        trap={<>Labelling the thiocyanate candidate structure as &quot;[S–C≡N]<sup>2−</sup>&quot;.</>}
        reality={<>SCN⁻ is a <strong>singly</strong> charged ion (16 valence e⁻, from S 6 + C 4 + N 5 + 1 for the charge — not 17). Every valid resonance form of SCN⁻ must sum its formal charges to exactly −1.</>}
      />

      <NoteBlock title="Formal charge vs oxidation state — do not conflate them">
        <p>Formal charge assumes perfectly equal sharing of every bonding pair; the real charge distribution follows electronegativity. Oxidation state assumes the opposite extreme — complete electron transfer. For S in SO₄²⁻: oxidation state is +6, but formal charge in the expanded-octet Lewis structure (two S=O double bonds, two S–O single bonds) is 0 — different bookkeeping systems, different numbers, both &quot;correct&quot; on their own terms.</p>
      </NoteBlock>

      <NoteBlock title="Diborane, B₂H₆ — bonding beyond ordinary 2-centre bonds">
        <p>B₂H₆ has only 12 valence electrons — too few to form seven ordinary 2-centre-2-electron (2c–2e) bonds for its eight B–H connections. Structure: each boron makes two ordinary terminal B–H bonds, and the two borons are additionally bridged by two hydrogens through <strong>3-centre-2-electron (3c–2e) bonds</strong> — one pair of electrons delocalised over B–H–B, not localised on a single B–H line.</p>
        <DiagramBox title="Diborane 3c–2e bridge bonding"><DiboraneBridgeVisual /></DiagramBox>
      </NoteBlock>

      <NoteBlock title="BF₃ back-bonding — partial π character on an 'incomplete-octet' molecule">
        <p>Although B in BF₃ has only 6 electrons around it (Part 1), each F contributes a filled 2p lone pair into boron&apos;s empty 2pz orbital — pπ–pπ back-donation. This partially fills B&apos;s octet and gives the B–F bonds some double-bond character (shorter than a pure single bond), without ever reaching a full, localised B=F double bond — three equivalent resonance contributors share the donation among the three fluorines.</p>
        <DiagramBox title="BF₃ back bonding"><BackBondingVisual /></DiagramBox>
      </NoteBlock>

      <PracticeQuestion
        prompt="Why does BF₃ act as a stronger Lewis acid than BI₃ despite fluorine being far more electronegative?"
        answer="Back-bonding is strongest for BF₃ (best 2p–2p size match with B), partially filling boron's empty orbital and reducing its appetite for an external lone pair; back-bonding falls off from F → I as the halogen's p-orbital size mismatches boron's more, so BI₃ is the strongest Lewis acid of the series, BF₃ the weakest."
      />

      <SummaryStrip items={[
        "Coordinate bond = both electrons from one atom (NH₄⁺, F₃B←NH₃); indistinguishable from a covalent bond once formed.",
        "FC = V − L − ½S; SCN⁻ is 16 valence e⁻, charge −1, with the negative FC on N in the major form.",
        "B₂H₆: 2 bridging 3c–2e bonds + 4 terminal 2c–2e bonds; BF₃: pπ–pπ back-bonding gives partial B=F character.",
      ]} />
    </ChemBondPartShell>
  );
}
