"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part13() {
  return (
    <AtomicPartShell part={13} title="Stopping Potential Graphs and Photon Flux" pages="39-41">
      <SourcePage page={39}>
        <NoteBlock title="Case 3 — collector below anode potential">
          <p>
            Case-3: <MathText math="V_A > V_C" />.
          </p>
          <p>
            Due to low potential at C, some electrons are repelled by C, resulting decrease in photocurrent. On further
            decrease in <MathText math="V_C" />, a potential must exist when even the fastest e&#8315; just fails to come at C
            resulting no photocurrent. The potential of C relative to A at this state is called stopping potential{" "}
            (<MathText math="V_0" />).
          </p>
          <DiagramBox title="Saturated current v/s intensity">
            <p>
              Axes: Intensity (vertical) against Current (horizontal). The saturated current grows as a straight line from the
              origin.
            </p>
          </DiagramBox>
          <DiagramBox title="V_max v/s V">
            <p>
              Axes: <MathText math="V_{max}" /> against <MathText math="V" />. The curve rises steeply from the point{" "}
              <MathText math="V_0" /> on the potential axis and flattens.
            </p>
          </DiagramBox>
          <DiagramBox title="Stopping potential v/s frequency">
            <p>
              Axes: <MathText math="V_e" /> against <MathText math="V" />. A straight line crosses the frequency axis at{" "}
              <MathText math="V" /> making angle <MathText math="\theta" />; the dotted portion extends below the axis.
            </p>
          </DiagramBox>
          <p>
            <MathText math="I\uparrow,\ n\uparrow,\ i\uparrow" /> — <MathText math="V_0" /> is related to max KE.
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={40}>
        <NoteBlock title="Photoelectric current versus collector plate potential">
          <DiagramBox title="Variation of photoelectric current with collector plate potential for different frequencies of incident radiation">
            <p>
              Photoelectric current (vertical) against collector plate potential (horizontal); the arrow to the left of 0 marks
              the retarding potential. Three curves for frequencies <MathText math="\nu_3 > \nu_2 > \nu_1" /> rise to the same
              saturation current; their intercepts on the retarding-potential axis are <MathText math="-V_{03}" />,{" "}
              <MathText math="-V_{02}" /> and <MathText math="-V_{01}" /> respectively.
            </p>
          </DiagramBox>
          <p>
            Millikan&apos;s Experiment — variation of photoelectric current with the change of potential on the collector plate
            and effect of intensity of the incident light on the photoelectric current.
          </p>
          <DiagramBox title="Variation of stopping potential V0 with frequency v of incident radiation for a given photosensitive material">
            <p>
              Stopping potential <MathText math="V_0" /> (vertical) against frequency of incident radiation{" "}
              <MathText math="\nu" /> (horizontal). Two parallel straight lines: Metal A rising from threshold{" "}
              <MathText math="\nu_0" /> (region <MathText math="\nu > \nu_0" />) and Metal B rising from{" "}
              <MathText math="\nu_0'" /> (region <MathText math="\nu > \nu_0'" />).
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={41}>
        <NoteBlock title="Stopping potential in terms of wavelength">
          <FormulaLine math="(KE)_{max}=\frac{hc}{\lambda}-\phi" />
          <FormulaLine math="eV_0=\frac{hc}{\lambda}-\phi" />
          <FormulaLine math="V_0=\frac{hc}{e}\cdot\frac{1}{\lambda}-\frac{\phi}{e}" />
          <DiagramBox title="V0 versus 1/lambda">
            <p>
              Axes: <MathText math="V_0" /> against <MathText math="\tfrac{1}{\lambda}" />. Three parallel straight lines
              labelled K, Na and Li cut the <MathText math="\tfrac{1}{\lambda}" /> axis in that order; dotted extrapolations
              continue below the axis.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Question — colour prediction">
          <p>
            Q. Photoelectrons are ejected from a metal surface by green light but not by orange light. Predict about ejection of
            photoelectron by
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>(a) Red — ✗</li>
            <li>(2) Blue — ✓</li>
            <li>(c) Yellow — may or may not</li>
          </ul>
          <p>Side note: V I B G | Y | O R (the cut-offs fall between G, Y and O).</p>
        </NoteBlock>
        <NoteBlock title="Question — number of photons from two sources">
          <p>
            Q. Source-a of intensity <MathText math="I" /> and Source-b of intensity <MathText math="I" />.
          </p>
          <FormulaLine math="n=\frac{IAt}{E}" />
          <p>
            <MathText math="E" /> = energy of a photon.
          </p>
          <FormulaLine math="n=\frac{IAt}{E}=\frac{\lambda IAt}{h c}" />
          <p>
            <MathText math="n\propto\lambda" />, therefore <MathText math="n_R > n_B" />.
          </p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="39-41" unclear={0} />
    </AtomicPartShell>
  );
}
