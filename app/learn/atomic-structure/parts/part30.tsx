"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ConceptCard, FormulaCard, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";
import { AufbauFillingVisual } from "../_components/AtomicVisuals";

export default function Part30() {
  return (
    <AtomicPartShell part={30} title="Aufbau Principle and Electronic Configuration" pages="93-96">
      <LearningObjectives items={[
        "state and apply the three electron-filling rules: Aufbau, Pauli and Hund",
        "write the full electron configuration for any element to Xe using the Madelung order",
        "explain the Cr/Cu exceptions using symmetrical arrangement and exchange energy",
      ]} />

      <SourcePage page={93}>
        <ConceptCard title="Three rules governing electron filling">
          <ol className="list-decimal space-y-2 pl-5 text-sm">
            <li>
              <strong className="text-white">Aufbau Principle</strong> — electrons fill the lowest available energy
              subshell first (<em>Aufbau</em> = German for &quot;building up&quot;).
            </li>
            <li>
              <strong className="text-white">Pauli Exclusion Principle</strong> — no two electrons in an atom may have
              all four quantum numbers identical; at most 2 electrons per orbital (with opposite spins).
            </li>
            <li>
              <strong className="text-white">Hund&apos;s Rule of Maximum Multiplicity</strong> — electrons distribute among
              degenerate orbitals to give the maximum number of unpaired electrons with parallel spin.
            </li>
          </ol>
        </ConceptCard>

        <NoteBlock title="Aufbau Principle and Madelung Rule">
          <p>
            The filling order is governed by the <MathText math="(n+l)" /> rule, also called the{" "}
            <strong className="text-white">Madelung Rule</strong> or Klechkowsky&apos;s rule:
          </p>
          <FormulaLine math="1s<2s<2p<3s<3p<4s<3d<4p<5s<4d<5p<6s<4f<5d<6p<7s<5f<6d<7p<8s" />
          <FormulaLine math="(n+l):\ 1s=1;\ 2s=2;\ 2p,3s=3;\ 3p,4s=4;\ 3d,4p,5s=5;\ 4d,5p,6s=6;\ 4f,5d,6p,7s=7;\ 5f,6d,7p=8" />
          <DiagramBox title="Aufbau diagonal filling chart">
            <AufbauFillingVisual />
            <p className="mt-3 text-sm text-slate-300">
              Red diagonal arrows sweep through equal-<MathText math="(n+l)" /> groups from top to bottom.
              Within a group, lower n fills first. This generates the filling sequence above.
            </p>
          </DiagramBox>
          <p className="mt-2 text-sm text-white/75">
            For hydrogen and hydrogen-like atoms (no inter-electron repulsion), all subshells within a shell are degenerate:
          </p>
          <FormulaLine math="1s < 2s = 2p < 3s = 3p = 3d < 4s = 4p = 4d = 4f < \cdots" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={94}>
        <NoteBlock title="Energy-level ladders">
          <DiagramBox title="Multielectron atoms — non-degenerate subshells">
            <p className="text-sm text-white/75">
              Energy levels stacked in filling order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d … with s, p, d
              columns separated. Subshells of the same shell differ in energy due to electron–electron repulsion.
            </p>
          </DiagramBox>
          <DiagramBox title="Hydrogen and hydrogen-like — degenerate subshells">
            <p className="text-sm text-white/75">
              All subshells of the same n lie at the same energy: 1s; 2s = 2p; 3s = 3p = 3d; 4s = 4p = 4d = 4f.
            </p>
          </DiagramBox>
        </NoteBlock>

        <FormulaCard label="Degeneracy in hydrogen (single electron)">
          <p className="mb-3 text-sm text-slate-200">
            Degenerate orbitals are orbitals of the same energy. For hydrogen, all orbitals within a shell are
            degenerate:
          </p>
          <FormulaLine math="\text{Degeneracy of shell }n = n^2" />
          <FormulaLine math="n=1:\ 1\quad n=2:\ 4\quad n=3:\ 9\quad n=4:\ 16" />
        </FormulaCard>

        <NoteBlock title="Hund's Rule of Maximum Multiplicity">
          <p>
            Electrons distribute among the degenerate orbitals of a subshell so as to give the maximum number
            of unpaired electrons with parallel spins.
          </p>
          <DiagramBox title="Orbital box diagrams for 3p³ and 3p⁴">
            <p className="text-sm text-white/75">
              <strong className="text-cyan-200">3p³</strong> correct ✓: ↑ | ↑ | ↑ — three singly occupied orbitals, all parallel.<br />
              <strong className="text-white/50">3p³</strong> wrong ✗: ↑↓ | ↑ | (empty) — forced pairing reduces unpaired count.<br />
              <strong className="text-cyan-200">3p⁴</strong> correct ✓: ↑↓ | ↑ | ↑ — pair only when all are singly occupied first; 2 unpaired.<br />
              <strong className="text-white/50">3p⁴</strong> wrong ✗: ↑↓ | ↑↓ | (empty) — two forced pairs, zero unpaired.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={95}>
        <NoteBlock title="Electronic configurations — H to Na and Sn">
          <FormulaLine math="H=1s^{1}\,(1)\quad He=1s^{2}\,(2)\quad Li=1s^{2}2s^{1}\,(2,1)=[He]\,2s^{1}" />
          <FormulaLine math="Be=1s^{2}2s^{2}\,(2,2)\quad {}_5B=1s^{2}2s^{2}2p^{1}\,(2,3)\quad C=1s^{2}2s^{2}2p^{2}\,(2,4)" />
          <FormulaLine math="N=1s^{2}2s^{2}2p^{3}\,(2,5)\quad O=1s^{2}2s^{2}2p^{4}\,(2,6)\quad F=1s^{2}2s^{2}2p^{5}\,(2,7)" />
          <FormulaLine math="{}_{10}Ne=1s^{2}2s^{2}2p^{6}\,(2,8)\quad {}_{11}Na=1s^{2}2s^{2}2p^{6}3s^{1}\,(2,8,1)=[Ne]\,3s^{1}" />
          <FormulaLine math="{}_{50}Sn=1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{2}3d^{10}4p^{6}5s^{2}4d^{10}5p^{2}" />
          <FormulaLine math="K=2,\ L=8,\ M=18,\ N=18,\ O=4" />
        </NoteBlock>

        <ImportantNote title="Exceptions: Cr and Cu (half-filled and fully-filled d)">
          <p className="mb-2">
            The extra stability of half-filled (<MathText math="d^5" />) and fully-filled (<MathText math="d^{10}" />)
            configurations promotes one electron from 4s to 3d:
          </p>
          <FormulaLine math="{}_{24}Cr:\ [\text{Ar}]\,\underbrace{4s^{1}3d^{5}}_{\text{correct}}\quad\text{(predicted }4s^{2}3d^{4}\text{ is wrong)}" />
          <FormulaLine math="{}_{29}Cu:\ [\text{Ar}]\,\underbrace{4s^{1}3d^{10}}_{\text{correct}}\quad\text{(predicted }4s^{2}3d^{9}\text{ is wrong)}" />
          <p className="mt-2 text-amber-100/80 text-sm">
            Other exceptions: Nb, Mo, Ru, Rh, Pd, Ag, La, Ce, Gd, Pt, Au.
          </p>
        </ImportantNote>
      </SourcePage>

      <SourcePage page={96}>
        <WorkedExample title="Why half-filled and fully-filled configurations are extra stable">
          <p className="font-semibold text-white">1. Symmetrical arrangement</p>
          <DiagramBox title="Symmetry comparison: 3d⁴ vs 3d⁵ and 3d⁹ vs 3d¹⁰">
            <p className="text-sm text-white/75">
              <strong className="text-cyan-200">3d⁴</strong>: ↑ ↑ ↑ ↑ □ — one empty orbital, less symmetric distribution.<br />
              <strong className="text-cyan-200">3d⁵</strong>: ↑ ↑ ↑ ↑ ↑ — all five orbitals equally occupied (half-filled), perfectly symmetric.<br />
              <strong className="text-cyan-200">3d⁹</strong>: four pairs + one single — asymmetric, less stable.<br />
              <strong className="text-cyan-200">3d¹⁰</strong>: five pairs — spherically symmetric (fully filled), more stable.
            </p>
          </DiagramBox>

          <p className="mt-4 font-semibold text-white">2. Exchange energy</p>
          <p className="text-sm text-white/75">Greater the number of exchanges between electrons of parallel spin, greater the stability.</p>
          <DiagramBox title="Counting exchange pairs among parallel spins">
            <p className="text-sm text-white/75">
              <strong className="text-cyan-200">4 parallel spins (3d⁴)</strong>: exchanges = 3 + 2 + 1 = <strong className="text-white">6</strong>.<br />
              <strong className="text-cyan-200">5 parallel spins (3d⁵)</strong>: exchanges = 4 + 3 + 2 + 1 = <strong className="text-white">10</strong>.<br />
              <strong className="text-cyan-200">↑↓ pair + 4 singles</strong>: 10 exchanges from the parallel set.<br />
              <strong className="text-cyan-200">5 full pairs (3d¹⁰)</strong>: 5 × 4/2 = <strong className="text-white">20 exchanges</strong> within each spin set.
            </p>
          </DiagramBox>

          <p className="mt-3 text-sm text-white/75">Consequence for p-subshell ionisation energy order:</p>
          <FormulaLine math="p^1 < p^2 < p^4 < p^3 < p^5 < p^6" />
          <p className="text-sm text-white/75">
            p³ (3 parallel spins, C(3,2) = 3 exchanges, half-filled) is extra stable. p⁴ also has 3 α-spins
            giving 3 exchanges, but the mandatory pairing costs a Coulomb repulsion penalty — so the net
            stability of p⁴ is less than p³ and its IE is lower.
          </p>
        </WorkedExample>
      </SourcePage>

      <SummaryStrip items={[
        "Three filling rules: Aufbau (lowest n+l first), Pauli (max 2e⁻/orbital, opposite spins), Hund (max parallel spins).",
        "Filling order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p … Exceptions: Cr (3d⁵4s¹), Cu (3d¹⁰4s¹), and others.",
        "Extra stability of half-filled/filled d: spherical symmetry + maximum exchange energy (10 vs 6 exchanges).",
      ]} />

      <AuditComment pages="93-96" unclear={0} />
    </AtomicPartShell>
  );
}
