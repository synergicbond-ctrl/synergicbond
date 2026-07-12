"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DerivationPanel, FigureCaption, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { OrbitalBoxVisual, RadialFunctionCurvesVisual } from "../_components/AtomicVisuals";

export default function Part43() {
  return (
    <AtomicPartShell part={43} title="Most Probable Radius, Radial Solutions and Radial Node Counting" pages="135-137">
      <LearningObjectives items={["differentiate a radial distribution to locate r_mp", "connect explicit radial solutions to their nodes", "count radial nodes and orbitals within a subshell"]} />
      <SourcePage page={135}>
        <DerivationPanel title="Calculate r_mp for (i) 1s electron">
          <FormulaLine math="R_{1s}(r)=2\cdot\left(\frac{Z}{a_0}\right)^{3/2}e^{-\sigma/2}=2\left(\frac{Z}{a_0}\right)^{3/2}e^{-Zr/a_0}" />
          <FormulaLine math="P(r)=4\pi r^{2}\,R^{2}(r)=4\pi r^{2}\left[4\left(\frac{Z}{a_0}\right)^{3}e^{-2Zr/a_0}\right]" />
          <FormulaLine math="=16\pi\left(\frac{Z}{a_0}\right)^{3}r^{2}\,e^{-2Zr/a_0}" />
          <p>For maxima or minima</p>
          <FormulaLine math="\frac{dP(r)}{dr}=0" />
          <FormulaLine math="16\pi\left(\frac{Z}{a_0}\right)^{3}\left[2r\,e^{-2Zr/a_0}+r^{2}e^{-2Zr/a_0}\left(-\frac{2Z}{a_0}\right)\right]=0" />
          <FormulaLine math="16\pi\left(\frac{Z}{a_0}\right)^{3}2r\,e^{-2Zr/a_0}\left[1-\frac{Zr}{a_0}\right]=0" />
          <FormulaLine math="\text{For }r_{mp}\Rightarrow\ r=\frac{a_0}{Z}" />
        </DerivationPanel>
      </SourcePage>

      <SourcePage page={136}>
        <DerivationPanel title="Calculate r_mp for (ii) 2p electron">
          <FormulaLine math="R_{2p}(r)=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\cdot\sigma\cdot e^{-\sigma/2}" />
          <FormulaLine math="=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\left(\frac{Zr}{a_0}\right)e^{-\frac{Zr}{2a_0}}" />
          <FormulaLine math="=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{5/2}r\,e^{-\frac{Zr}{2a_0}}" />
          <p>Now</p>
          <FormulaLine math="P(r)=4\pi r^{2}R^{2}(r)=4\pi r^{2}\left(\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{5/2}r\,e^{-\frac{Zr}{2a_0}}\right)^{2}" />
          <FormulaLine math="=4\pi r^{2}\,\frac{1}{4\times6}\left(\frac{Z}{a_0}\right)^{5}r^{2}\,e^{-Zr/a_0}" />
          <FormulaLine math="=\frac{\pi}{6}r^{2}\left(\frac{Z}{a_0}\right)^{5}r^{2}\,e^{-Zr/a_0}=\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}r^{4}\,e^{-Zr/a_0}" />
          <p>For maxima or minima —</p>
          <FormulaLine math="\frac{d(P_r)}{dr}=0" />
          <FormulaLine math="\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}\left[4r^{3}e^{-\frac{Zr}{a_0}}+r^{4}e^{-\frac{Zr}{a_0}}\left(-\frac{Z}{a_0}\right)\right]" />
          <FormulaLine math="\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}r^{3}\,e^{-Zr/a_0}\left[4-\frac{Zr}{a_0}\right]=0" />
          <FormulaLine math="r_{mp}=\frac{4a_0}{Z}" />
        </DerivationPanel>
      </SourcePage>

      <SourcePage page={137}>
        <NoteBlock title="Radial part solution table">
          <DiagramBox title="Radial functions with no radial node">
            <RadialFunctionCurvesVisual nodes={0} />
          </DiagramBox>
          <DiagramBox title="Radial functions with one radial node">
            <RadialFunctionCurvesVisual nodes={1} />
            <FigureCaption>The following ψ values are radial parts, using a<sub>0</sub> as the Bohr radius.</FigureCaption>
          </DiagramBox>
          <FormulaLine math="1s\ (n=1,l=0):\ \psi=2\left(\frac{1}{a_0}\right)^{3/2}e^{-r/a_0}" />
          <FormulaLine math="2s\ (n=2,l=0):\ \psi=\frac{1}{\sqrt{8}}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/2a_0}" />
          <FormulaLine math="2p\ (n=2,l=1):\ \psi=\frac{1}{\sqrt{24}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}\,e^{-r/2a_0}" />
          <FormulaLine math="3s\ (n=3,l=0):\ \psi=\frac{2}{81\sqrt{3}}\left(\frac{1}{a_0}\right)^{3/2}\left(27-18\frac{r}{a_0}+2\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}" />
          <FormulaLine math="3p\ (n=3,l=1):\ \psi=\frac{2}{9\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(6\frac{r}{a_0}-\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}" />
          <FormulaLine math="3d\ (n=3,l=2):\ \psi=\frac{4}{81\sqrt{30}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}" />
        </NoteBlock>
        <NoteBlock title="Nodes and radial-node counting">
          <p>
            <MathText math="\psi^{2}=0" /> zero probability (node).
          </p>
          <FormulaLine math="\text{node }|\psi^{2}|=0" />
          <FormulaLine math="\text{Radial node}=n-l-1" />
          <DataTable
            headers={["orbital", "n − l − 1", "radial nodes"]}
            rows={[
              ["1s", "1 − 0 − 1", "0"],
              ["2s", "2 − 0 − 1", "1"],
              ["2p", "2 − 1 − 1", "0"],
              ["3s", "3 − 0 − 1", "2"],
              ["3p", "3 − 1 − 1", "1"],
              ["3d", "3 − 2 − 1", "0"],
            ]}
          />
          <DiagramBox title="Radial nodes as concentric shells">
            <svg role="img" aria-labelledby="shells-title shells-desc" viewBox="0 0 380 250" className="mx-auto h-auto w-full max-w-md"><title id="shells-title">Radial nodes as concentric spherical shells</title><desc id="shells-desc">A central nucleus has concentric probability regions separated by two dark circular nodal surfaces.</desc><circle cx="170" cy="125" r="98" fill="#67e8f9" fillOpacity=".1" stroke="#67e8f9" strokeWidth="2"/><circle cx="170" cy="125" r="61" fill="#facc15" fillOpacity=".12" stroke="#facc15" strokeWidth="2"/><circle cx="170" cy="125" r="30" fill="#f472b6" fillOpacity=".22" stroke="#f472b6" strokeWidth="2"/><circle cx="170" cy="125" r="79" fill="none" stroke="#08111f" strokeWidth="9"/><circle cx="170" cy="125" r="45" fill="none" stroke="#08111f" strokeWidth="9"/><circle cx="170" cy="125" r="5" fill="#fbbf24"/><text x="274" y="50" fill="#e2e8f0" fontSize="13">probability regions</text><text x="238" y="151" fill="#f9a8d4" fontSize="13">radial nodes</text><text x="18" y="235" fill="#94a3b8" fontSize="12">dark circular boundaries represent spherical surfaces where ψ² = 0</text></svg>
            <FigureCaption>A bullseye cross-section represents concentric spherical regions; the dark circles are radial nodes.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Subshell orbital boxes">
          <DiagramBox title="s, p and d orbital boxes">
            <OrbitalBoxVisual />
            <FigureCaption>s has one box. p has three boxes labelled p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>. d has five boxes labelled d<sub>xy</sub>, d<sub>yz</sub>, d<sub>zx</sub>, d(x²−y²), d<sub>z²</sub>.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>
      <SummaryStrip items={["For hydrogen-like 1s, differentiation gives r_mp = a₀/Z.", "For 2p, the r⁴ exponential distribution peaks at 4a₀/Z.", "Radial-node count is n − l − 1; s, p, d contain 1, 3, 5 orbitals."]} />

      <NoteBlock title="Practice set — reading wave functions (original problems)">
        <PracticeQuestion prompt={<>The 2s radial function of hydrogen contains the factor <MathText math="\left(2-\dfrac{r}{a_0}\right)e^{-r/2a_0}" />. Without any calculation beyond setting the bracket to zero, state the radius of the spherical surface on which a 2s electron is never found.</>} answer={<>The bracket vanishes at <MathText math="r=2a_0" /> — the single radial node of 2s.</>} />
        <PracticeQuestion prompt={<>A one-electron ion of carbon (C⁵⁺, Z = 6) occupies a state whose radial function carries the factor <MathText math="(4-\sigma)\,\sigma\,e^{-\sigma/2}" /> with <MathText math="\sigma=Zr/a_0" />. Locate its radial node in ångström (a₀ = 0.529 Å).</>} answer={<><MathText math="\sigma=4\Rightarrow r=4a_0/6=0.353\ \text{Å}" />. The σ factor's zero at the origin is not a node.</>} />
        <PracticeQuestion prompt={<>An electron in hydrogen has <MathText math="\psi\propto\left(6-\dfrac{r}{a_0}\right)\dfrac{r}{a_0}\,e^{-r/3a_0}\,\sin\theta\cos\phi" />. Read off n and l and name the orbital.</>} answer={<>One radial node (at <MathText math="r=6a_0" />) and l = 1 give n = 3: a 3p orbital (the <MathText math="\sin\theta\cos\phi" /> factor is the pₓ angular form).</>} />
        <PracticeQuestion prompt={<>For the ground state <MathText math="\psi_{1s}\propto e^{-r/a_0}" />, at what distance from the nucleus is an electron most likely to be detected, and why is that not r = 0 even though ψ² is largest there?</>} answer={<>The radial distribution 4πr²ψ² peaks at <MathText math="r=a_0=52.9\ \text{pm}" />; the r² shell factor suppresses the origin.</>} />
        <PracticeQuestion prompt={<>A hydrogen state has <MathText math="\psi\propto\left(27-18\sigma+2\sigma^{2}\right)e^{-\sigma/3}" /> with <MathText math="\sigma=Zr/a_0" /> and no angular dependence. How many radial and angular nodes does it possess, and which orbital is it?</>} answer={<>No angular factor ⇒ l = 0; the quadratic gives 2 radial nodes, so n = 3: the 3s orbital (2, 0).</>} />
        <PracticeQuestion prompt={<>For the same 3s state with Z = 1, derive the two node radii by solving <MathText math="2\sigma^{2}-18\sigma+27=0" />.</>} answer={<><MathText math="\sigma=\dfrac{9\pm3\sqrt{3}}{2}\Rightarrow r=\dfrac{3}{2}\left(3\pm\sqrt{3}\right)a_0" />.</>} />
        <PracticeQuestion prompt={<>In a dot-density photograph of the 5s orbital, how many dark gaps separate the bright rings, and what does each gap represent?</>} answer={<>Four gaps (n − l − 1 = 4), each a spherical surface where ψ² = 0 — a radial node.</>} />
      </NoteBlock>
      <AuditComment pages="135-137" unclear={0} />
    </AtomicPartShell>
  );
}
