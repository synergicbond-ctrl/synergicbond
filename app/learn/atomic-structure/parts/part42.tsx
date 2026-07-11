"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { RadialDistributionVisual } from "../_components/AtomicVisuals";

export default function Part42() {
  return (
    <AtomicPartShell part={42} title="Radial Function Curves, Radial Nodes and Radial Distribution Function" pages="132-134">
      <SourcePage page={132}>
        <NoteBlock title="Identifying an orbital from its radial polynomial">
          <FormulaLine math="R(r)=\psi(r)=K\,e^{-\sigma/2}\,\underbrace{\sigma^{2}}_{l}\,\underbrace{\left(5-2\sigma+3\sigma^{2}-4\sigma^{3}\right)}_{n-l-1}" />
          <FormulaLine math="l=2\qquad n-l-1=3\qquad n=6\ \Rightarrow\ 6d" />
        </NoteBlock>
        <NoteBlock title="Radial Function Curve [R(r) vs r]">
          <DiagramBox title="R(r) vs r for nodeless orbitals (diagram)">
            <p>
              For n − l − 1 = 0 (1s, 2p, 3d, 4f, 5g …): the 1s curve starts at K on the R(r) axis and decays
              monotonically to zero; the 2p, 3d, 4f … curves start at zero, rise to a single maximum, then decay — no
              radial node.
            </p>
          </DiagramBox>
          <FormulaLine math="R(r)=K\,e^{-\sigma/2}\,\sigma^{l}\quad\begin{cases}l=0\\l\neq0\end{cases}\qquad \sigma=\frac{2Z}{n a_0}\,r" />
          <DiagramBox title="R(r) vs r for one-node orbitals (diagram)">
            <p>
              For n − l − 1 = 1 (2s, 3p, 4d, 5f …): the 2s curve starts at aK, falls, crosses zero (the radial node,
              circled) and goes negative; the 3p, 4d, 5f … curves start at zero, rise, then cross the axis once — one
              radial node.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={133}>
        <NoteBlock title="Radial nodes from the polynomial">
          <FormulaLine math="R(r)=K\,e^{-\sigma/2}\,\sigma^{l}\,(a-b\sigma)" />
          <FormulaLine math="0=\ \underset{\sigma=\infty}{e^{-\sigma/2}}\quad\underset{\sigma=0}{\sigma^{l}\,(l\neq0)}\quad\underset{\sigma=a/b}{(a-b\sigma)}" />
          <ul className="list-disc space-y-2 pl-5">
            <li>
              No. of radial nodes = <MathText math="n-l-1" />
            </li>
            <li>r = 0 and r = ∞ are never considered as node.</li>
            <li>Node is always that point through which the wave passes (crosses).</li>
            <li>
              Only for s-orbital <MathText math="R(r)\neq0" /> at r = 0.
            </li>
          </ul>
        </NoteBlock>
        <NoteBlock title="Radial Probability Distribution Function [P(r) vs r]">
          <FormulaLine math="|\psi|^{2}\propto\text{Probability Density}\propto\frac{P}{dV}" />
          <FormulaLine math="P=|\psi|^{2}\,dV\times\text{constant}" />
          <p>(constant already involved in the radial function equation during the solution of SWE.)</p>
          <FormulaLine math="\text{Probability of finding of }e^{-}=\psi^{2}\,dV" />
          <FormulaLine math="\text{Radial Probability of finding }e^{-}=R^{2}(r)\,dV=\psi_r^{2}\,dV" />
          <FormulaLine math="dV=dx\,dy\,dz" />
          <DiagramBox title="Volume element in a sphere (diagram)">
            <p>A sphere of radius r with a small box dx·dy·dz shown near the surface; (dV)_Total is the whole sphere.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={134}>
        <NoteBlock title="Radial distribution function and most probable radius">
          <p>Total Probability of finding of e&#8315; at a distance r from nucleus</p>
          <FormulaLine math="=\psi^{2}(r)\,dV" />
          <FormulaLine math="P_{\text{Total}}=R^{2}(r)\left(4\pi r^{2}\,dr\right)" />
          <FormulaLine math="\frac{P_{\text{Total}}}{dr}=4\pi r^{2}\,R^{2}(r)=P(r)=\text{Radial Distribution Function}" />
          <DiagramBox title="P(r) vs r (diagram)">
            <RadialDistributionVisual />
            <p>
              For n − l − 1 = 0 (1s, 2p, 3d, 4f, 5g …): a single hump rising from the origin to a peak then falling to
              zero. The peak sits at the most probable radius.
            </p>
          </DiagramBox>
          <FormulaLine math="r_{mp}=\frac{n^{2}a_0}{Z}" />
          <FormulaLine math="P(r)=4\pi r^{2}\cdot\left(K\,e^{-\sigma/2}\,\sigma^{l}\right)^{2}" />
          <p>
            P(r) = 0 at r = 0 (from the r² factor, and additionally from σ<sup>l</sup> when l ≠ 0) and as r → ∞ (from the
            exponential factor).
          </p>
          <p>r_mp = most probable radius of electron from nucleus.</p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="132-134" unclear={0} />
    </AtomicPartShell>
  );
}
