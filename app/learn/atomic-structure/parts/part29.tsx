"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DefinitionCard, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";
import { MagneticQuantumNumberVisual } from "../_components/AtomicVisuals";

export default function Part29() {
  return (
    <AtomicPartShell part={29} title="Magnetic and Spin Quantum Numbers, (n+l) Rule" pages="90-92">
      <LearningObjectives items={[
        "determine allowed m values and their physical meaning (spatial orientation) for any subshell",
        "state the two spin quantum number values and their physical picture",
        "apply the (n+l) Madelung rule to rank subshells in order of increasing energy",
      ]} />

      <SourcePage page={90}>
        <DefinitionCard term="Magnetic Quantum Number (m or mₗ)">
          Under the influence of an external magnetic field, the electrons of a subshell can orient themselves
          in certain preferred regions of space around the nucleus. The magnetic quantum number determines the
          number of these preferred orientations. It depends on <MathText math="l" /> and runs from{" "}
          <MathText math="-l" /> to <MathText math="+l" />.
        </DefinitionCard>

        <NoteBlock title="Physical origin and allowed values">
          <p className="text-sm text-white/75">
            Angular motion of the electron → electric current → magnetic field. In an external field, only
            certain angular momentum projections onto the field axis are allowed (space quantisation).
          </p>
          <FormulaLine math="\text{Preferred orientations:}\quad m = -l,\,-l+1,\,\ldots,\,0,\,\ldots,\,l-1,\,+l" />
          <DataTable
            headers={["Subshell", "l", "m values", "Orientations"]}
            rows={[
              ["s", "0", "0", "1"],
              ["p", "1", "−1, 0, +1", "3"],
              ["d", "2", "−2, −1, 0, +1, +2", "5"],
              ["f", "3", "−3, −2, −1, 0, +1, +2, +3", "7"],
            ]}
          />
          <p className="mt-2 text-sm text-white/75">
            Orbital assignments: <MathText math="p_x,p_y \leftrightarrow m=\pm1" />;{" "}
            <MathText math="p_z \leftrightarrow m=0" />;{" "}
            <MathText math="d_{xy},d_{x^2-y^2} \leftrightarrow m=\pm2" />;{" "}
            <MathText math="d_{yz},d_{zx} \leftrightarrow m=\pm1" />;{" "}
            <MathText math="d_{z^2} \leftrightarrow m=0" />
          </p>
          <DiagramBox title="Space quantisation — five orientations for d orbital (l = 2)">
            <MagneticQuantumNumberVisual />
            <p className="mt-3 text-sm text-slate-300">
              Each arrow shows the orbital angular momentum vector <MathText math="\mathbf{L}" /> precessing around the
              field direction z at one of five allowed angles. The z-projection equals m in units of{" "}
              <MathText math="h/2\pi" />. Dashed horizontal lines show these quantised projections onto the z-axis.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={91}>
        <NoteBlock title="4. Spin Quantum Number (ms)">
          <p>The spin quantum number gives information about the spin angular momentum of the electron.</p>
          <FormulaLine math="\text{Spin angular momentum} = \sqrt{s(s+1)}\,\frac{h}{2\pi}\qquad\left(s = \tfrac{1}{2}\right)" />
          <p>
            Two allowed values: <MathText math="m_s = +\tfrac{1}{2}" /> (spin-up ↑) and{" "}
            <MathText math="m_s = -\tfrac{1}{2}" /> (spin-down ↓). Physically pictured as the electron spinning
            clockwise or anticlockwise about its own axis.
          </p>
        </NoteBlock>

        <WorkedExample title="Computing (n+l) values">
          <p>Find <MathText math="(n+l)" /> for each subshell listed:</p>
          <DataTable
            headers={["Subshell", "n", "l", "n+l"]}
            rows={[
              ["1s", "1", "0", "1"],
              ["2p", "2", "1", "3"],
              ["3s", "3", "0", "3"],
              ["3d", "3", "2", "5"],
              ["5p", "5", "1", "6"],
              ["6f", "6", "3", "9"],
              ["7p", "7", "1", "8"],
              ["7s", "7", "0", "7"],
              ["4f", "4", "3", "7"],
            ]}
          />
        </WorkedExample>

        <WorkedExample title="Increasing energy order from (n+l) values">
          <p><strong className="text-white">(a)</strong> 2p, 3p, 3d, 5f — <MathText math="n+l" /> values 3, 4, 5, 8:</p>
          <FormulaLine math="2p < 3p < 3d < 5f" />
          <p><strong className="text-white">(b)</strong> 4s, 3d, 4f, 6s, 7p — <MathText math="n+l" /> values 4, 5, 7, 6, 8:</p>
          <FormulaLine math="4s < 3d < 6s < 4f < 7p" />
          <p><strong className="text-white">(c)</strong> 4s, 3d, 4p, 5s — <MathText math="n+l" /> values 4, 5, 5, 5 (equal <MathText math="n+l" /> → lower n first):</p>
          <FormulaLine math="4s < 3d < 4p < 5s" />
        </WorkedExample>
      </SourcePage>

      <SourcePage page={92}>
        <WorkedExample title="Energy ordering (d) — tie-breaking with equal (n+l)">
          <p>(d) 4f, 7p, 8s, 5d, 6p — <MathText math="n+l" /> values 7, 8, 8, 7, 7:</p>
          <p className="text-sm text-white/75">
            Group <MathText math="n+l=7" />: {"{4f (n=4), 5d (n=5), 6p (n=6)}"} — lower n fills first.<br />
            Group <MathText math="n+l=8" />: {"{7p (n=7), 8s (n=8)}"} — lower n fills first.
          </p>
          <FormulaLine math="4f < 5d < 6p < 7p < 8s" />
        </WorkedExample>

        <ImportantNote title="Madelung rule summary">
          Fill in order of increasing <MathText math="(n+l)" />. When two subshells have the same{" "}
          <MathText math="(n+l)" />, the one with lower <MathText math="n" /> fills first. This is the Madelung rule
          (also called Klechkowsky&apos;s rule), which empirically reproduces the filling order for most elements.
        </ImportantNote>
      </SourcePage>

      <SummaryStrip items={[
        "Magnetic QN m runs from −l to +l: total of 2l+1 allowed spatial orientations per subshell.",
        "Spin QN ms = ±½; spin angular momentum = √(s(s+1))·h/2π with s = ½ for every electron.",
        "(n+l) rule: lower (n+l) fills first; equal (n+l) → lower n fills first (Madelung / Klechkowsky).",
      ]} />

      <AuditComment pages="90-92" unclear={0} note="page 92 has a single continuation item" />
    </AtomicPartShell>
  );
}
