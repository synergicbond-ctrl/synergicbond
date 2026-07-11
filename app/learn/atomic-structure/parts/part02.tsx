"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, ImportantNote, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { MillikanOilDropVisual } from "../_components/AtomicVisuals";

export default function Part02() {
  return (
    <AtomicPartShell part={2} title="Determination of e/m and Electron Charge" pages="4-6">
      <LearningObjectives items={["Derive e/m from crossed electric and magnetic fields.", "Use Millikan’s quantisation result to identify the elementary charge.", "Calculate electron mass from e and e/m.", "Distinguish the classical electron radius from a measured physical boundary."]} />
      <SourcePage page={4}>
        <NoteBlock title="Determination of e/m">
          <DiagramBox title="Electrical and magnetic field deflection setup">
            <svg viewBox="0 0 780 250" className="h-auto w-full">
              <path d="M80 120 H445 L495 70 L545 120 Q565 150 545 180 L495 230 L445 180 H80 Q35 150 80 120Z" fill="none" stroke="#22d3ee" strokeWidth="3" />
              <line x1="40" y1="150" x2="600" y2="150" stroke="#f59e0b" strokeWidth="3" />
              <path d="M470 150 L570 85 M470 150 L590 150 M470 150 L555 215" stroke="#f59e0b" strokeWidth="3" />
              <text x="150" y="210" fill="#22d3ee" fontSize="24">PD</text>
              <text x="220" y="210" fill="#22d3ee" fontSize="24">V</text>
              <text x="315" y="215" fill="#22d3ee" fontSize="24">EF</text>
              <text x="420" y="215" fill="#22d3ee" fontSize="24">MF</text>
              <text x="585" y="90" fill="#22d3ee" fontSize="22">C only M.F</text>
              <text x="610" y="155" fill="#22d3ee" fontSize="22">B EF = MF</text>
              <text x="585" y="215" fill="#22d3ee" fontSize="22">A only EF</text>
              <text x="300" y="118" fill="#fff" fontSize="24">-</text>
              <text x="300" y="175" fill="#fff" fontSize="24">+</text>
            </svg>
          </DiagramBox>
          <FormulaLine math="F_e=F_m" />
          <FormulaLine math="eE=eBv" />
          <FormulaLine math="v=\frac{E}{B}\qquad (1)" />
          <p>E = electric field strength</p>
          <p>B = magnetic field strength</p>
          <p>Now the K.E. of particles of cathode rays:</p>
          <FormulaLine math="eV=\frac{1}{2}mv^2" />
          <FormulaLine math="\frac{e}{m}=\frac{v^2}{2V}=\frac{E^2}{2VB^2}" />
          <FormulaLine math="\left|\frac{e}{m}\right|=1.758\times 10^{11}\ \mathrm{C/kg}" />
          <p>
            Write ↑ order <MathText math="\left|\frac{e}{m}\right|" /> of e, p, n, α
          </p>
          <p>n &lt; α &lt; p &lt; e</p>
          <DataTable
            headers={["Species", "Charge", "Mass", "e/m note"]}
            rows={[
              ["Cu+ / Cu2+", "+1 / +2", "same copper nucleus context", "Cu+ < Cu2+"],
              ["α", "+2", "2p + 2n", "He shown as 2e, 2p, 2n, neutral"],
            ]}
          />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={5}>
        <NoteBlock title="Calculation of charge of e-">
          <h3 className="text-lg font-black text-emerald-300">Milliken&apos;s oil drop Experiment</h3>
          <DiagramBox title="Millikan oil-drop experiment"><MillikanOilDropVisual /></DiagramBox>
          <FormulaLine math="ne=6\pi\frac{\eta^{3/2}}{E}\left[\frac{9u_o}{2(\rho_o-\rho_m)g}\right]^{1/2}u_o" />
          <p>The HCF of charge on oil particles was taken as electronic charge.</p>
          <FormulaLine math="e^-=4.80\times 10^{-10}\ \mathrm{esu}" />
          <FormulaLine math="=1.602\times 10^{-19}\ \mathrm{C}" />
          <p>1 F = charge of 1 mole of e-</p>
        </NoteBlock>
        <NoteBlock title="Problem">
          <p>
            In an oil drop experiment, the following charge were found on a series of oil droplets:{" "}
            <MathText math="3\times10^{-15}" />, <MathText math="9\times10^{-15}" />,{" "}
            <MathText math="12\times10^{-15}" />, <MathText math="18\times10^{-15}\ \mathrm{C}" />. Calculate charge of
            e<sup>-</sup>.
          </p>
          <p className="font-semibold text-yellow-300">
            Ans: <MathText math="3\times10^{-15}\ \mathrm{C}" />
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={6}>
        <NoteBlock title="Determination of mass of e-">
          <FormulaLine math="\mathrm{mass}=\frac{e}{e/m}=9.1\times10^{-31}\ \mathrm{kg}\ (m_o)" />
        </NoteBlock>
        <NoteBlock title="Radius of e-">
          <DiagramBox title="Electron radius sketch">
            <svg viewBox="0 0 240 130" className="mx-auto h-auto max-w-sm">
              <circle cx="110" cy="65" r="48" fill="none" stroke="#34d399" strokeWidth="4" />
              <circle cx="110" cy="65" r="8" fill="#f0f" />
              <line x1="110" y1="65" x2="158" y2="65" stroke="#fde047" strokeWidth="3" />
              <text x="140" y="55" fill="#fff" fontSize="22">r</text>
            </svg>
          </DiagramBox>
          <p>rest mass energy = electrostatic P.E.</p>
          <FormulaLine math="m_oc^2=K\frac{e^2}{r}" />
          <FormulaLine math="r=\frac{e^2}{m_oc^2}" />
          <p>
            <MathText math="K=\frac{1}{4\pi\epsilon_o}=1" /> (cgs)
          </p>
          <FormulaLine math="=2.82\times10^{-13}\ \mathrm{cm}" />
          <FormulaLine math="=2.82\times10^{-15}\ \mathrm{m}\quad(\mathrm{Classical\ Radius})" />
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/[0.06] p-3 text-sm text-amber-100">
            <strong>Classical-radius note.</strong> The model also uses <MathText math="E=mc^2" /> and the electrostatic-energy relation <MathText math="W=\frac{e^2}{2r_o}" />.
          </div>
          <ImportantNote title="Model boundary">The classical radius follows from equating rest energy with an electrostatic-energy model. It is not a measured hard-sphere radius of the electron.</ImportantNote>
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt={<>The charge on several droplets is an integral multiple of <MathText math="3\times10^{-15}\ \mathrm{C}" />. What elementary charge is inferred from this data set?</>} answer={<MathText math="3\times10^{-15}\ \mathrm{C}" />} />
      <SummaryStrip items={["Crossed fields give v = E/B; combining this with eV = ½mv² gives e/m.", "Millikan’s data establish quantisation of charge; the accepted elementary charge is 1.602 × 10⁻¹⁹ C.", "mₑ = e/(e/m) = 9.1 × 10⁻³¹ kg."]} />
      <AuditComment pages="4-6" unclear={0} note="supplementary insert reviewed" />
    </AtomicPartShell>
  );
}
