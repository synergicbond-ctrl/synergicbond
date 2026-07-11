"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { AufbauFillingVisual } from "../_components/AtomicVisuals";

export default function Part30() {
  return (
    <AtomicPartShell part={30} title="Aufbau Principle and Electronic Configuration" pages="93-96">
      <SourcePage page={93}>
        <NoteBlock title="Filling of electron">
          <ol className="list-decimal space-y-3 pl-5">
            <li>Aufbau Principle</li>
            <li>Pauli&apos;s exclusion principle</li>
            <li>Hund&apos;s Rule of maximum multiplicity</li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Aufbau Principle">
          <p>Aufbau → building up (German word)</p>
          <p>(n+l) rule — Madelung Rule or Klechkowsky&apos;s rule</p>
          <DiagramBox title="Diagonal filling chart (printed)">
            <AufbauFillingVisual />
            <p>
              Shells n = 1 to 8 with subshells 1s; 2s 2p; 3s 3p 3d; 4s 4p 4d 4f; 5s 5p 5d 5f; 6s 6p 6d; 7s 7p; 8s — red diagonal
              arrows sweep through them in filling order.
            </p>
          </DiagramBox>
          <p>For multielectron</p>
          <FormulaLine math="1s<2s<2p<3s<3p<4s<3d<4p<5s<4d<5p<6s<4f<5d<6p<7s<5f<6d<7p<8s" />
          <FormulaLine math="(n+l):\ 1s=1;\ 2s=2;\ 2p,3s=3;\ 3p,4s=4;\ 3d,4p,5s=5;\ 4d,5p,6s=6;\ 4f,5d,6p,7s=7;\ 5f,6d,7p=8" />
          <p>For hydrogen and hydrogen like</p>
          <FormulaLine math="1s<2s=2p<3s=3p=3d<4s=4d=4p=4f<\cdots" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={94}>
        <NoteBlock title="Energy-level ladders">
          <DiagramBox title="For multielectron">
            <p>
              Levels stacked as 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d against an energy axis E — s, p, d columns separated.
            </p>
          </DiagramBox>
          <DiagramBox title="For H and Hydrogen like">
            <p>
              Levels 1s; 2s 2p; 3s 3p 3d; 4s 4p 4d 4f — subshells of the same shell drawn at the same energy.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Degenerate orbitals">
          <p>Degenerate Orbitals — orbitals of same energy</p>
          <FormulaLine math="\text{For H, degeneracy of first shell}=1=n^{2}" />
          <FormulaLine math="\text{2nd shell}=4\qquad\text{3rd shell}=9\qquad\text{4th shell}=16" />
        </NoteBlock>
        <NoteBlock title="Hund's Rule of Maximum Multiplicity">
          <p>
            According to Hund&apos;s rule — electrons are distributed among the degenerate orbitals of subshell in such a way as
            to give maximum no. of unpaired e&#8315; with parallel spin.
          </p>
          <DiagramBox title="3p⁴ and 3p³ box diagrams">
            <p>
              3p⁴: ↑↓ | ↑ | ↑ ✓ while ↑↓ | ↑↓ | (empty) ✗. 3p³: ↑ | ↑ | ↑ ✓ while ↑↓ | ↑ | (empty) ✗.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={95}>
        <NoteBlock title="Electronic Configuration">
          <FormulaLine math="1s<2s<2p<3s<3p<4s<3d<4p<5s<4d<5p<6s<4f<5d<6p<7s<5f<6d<7p<8s" />
          <FormulaLine math="H=1s^{1}\quad(1)" />
          <FormulaLine math="He=1s^{2}\quad(2)" />
          <FormulaLine math="Li=1s^{2},2s^{1}\quad(2,1)\quad[He]\,2s^{1}" />
          <FormulaLine math="Be=1s^{2},2s^{2}\quad(2,2)" />
          <FormulaLine math="{}_{5}B=1s^{2},2s^{2},2p^{1}\quad(2,3)" />
          <FormulaLine math="C=1s^{2}\,2s^{2}\,2p^{2}\quad(2,4)" />
          <FormulaLine math="N=1s^{2}\,2s^{2}\,2p^{3}\quad(2,5)" />
          <FormulaLine math="O=1s^{2}\,2s^{2}\,2p^{4}\quad(2,6)" />
          <FormulaLine math="F=1s^{2}\,2s^{2}\,2p^{5}\quad(2,7)" />
          <FormulaLine math="{}_{10}Ne=1s^{2}\,2s^{2}\,2p^{6}\quad(2,8)" />
          <FormulaLine math="{}_{11}Na=1s^{2}\,2s^{2}\,2p^{6}\,3s^{1}\quad(2,8,1)=[Ne]\,3s^{1}" />
          <FormulaLine math="{}_{50}Sn=1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{10},4p^{6},5s^{2},4d^{10},5p^{2}" />
          <FormulaLine math="K=2,\ L=8,\ M=18,\ N=18,\ O=4" />
        </NoteBlock>
        <NoteBlock title="Exception">
          <FormulaLine math="{}_{24}Cr=1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{4}\quad\text{wrong}" />
          <FormulaLine math="1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{1},3d^{5}\quad\text{Right}" />
          <FormulaLine math="{}_{29}Cu=1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{9}\quad\text{wrong}" />
          <FormulaLine math="1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{1},3d^{10}\quad\text{Right}" />
          <p>other exception: Nb, Mo, Ru, Rh, Pd, Ag, La, Ce, Gd, Pt, Au</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={96}>
        <NoteBlock title="Explanation of half filled and full filled electronic configuration">
          <p>1. Symmetrical Arrangement —</p>
          <DiagramBox title="3d⁴ versus 3d⁵ and 3d⁹ versus 3d¹⁰">
            <p>
              3d⁴ (↑↑↑↑ with one empty box) — Less symmetrical; 3d⁵ (↑↑↑↑↑) — More symmetrical. 3d⁹ (four pairs + one single) —
              Less symmetrical; 3d¹⁰ (five pairs) — More symmetrical.
            </p>
          </DiagramBox>
          <p>2. Exchange Energy —</p>
          <p>Greater the exchanges, greater will be stability</p>
          <DiagramBox title="Counting exchanges">
            <p>
              Four parallel spins: 3 + 2 + 1 = 6 exchanges. Five parallel spins: 4 + 3 + 2 + 1 = 10 exchanges. A ↑↓ pair with
              four singles gives 10 exchanges; five full pairs give 20 exchanges.
            </p>
          </DiagramBox>
          <FormulaLine math="p^{1}<p^{2}<p^{4}<p^{3}<p^{5}<p^{6}" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="93-96" unclear={0} />
    </AtomicPartShell>
  );
}
