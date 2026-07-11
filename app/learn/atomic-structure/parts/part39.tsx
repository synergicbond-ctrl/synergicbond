"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part39() {
  return (
    <AtomicPartShell part={39} title="Matter Wave as a Wave of Probability and Schrödinger in Polar Coordinates" pages="122-124">
      <SourcePage page={122}>
        <NoteBlock title="Electron probability across repeated measurements">
          <p>but e&#8315; have different probability at different at different place.</p>
          <DiagramBox title="Electron in different measurement (printed)">
            <p>
              A <MathText math="|\psi(x)|^{2}" />-vs-x axis with a few scattered faint orange dots near the baseline — a
              single set of measurements landing the electron at various x with low, uneven frequency.
            </p>
          </DiagramBox>
          <DiagramBox title="Accumulated measurements tracing |ψ(x)|² (printed)">
            <p>
              The same axis after many measurements: stacked orange dots fill under the blue <MathText math="|\psi(x)|^{2}" />
              envelope, forming five lobes with the tallest at the centre — the density of hits reproduces the curve.
            </p>
          </DiagramBox>
          <DiagramBox title="More probable region (printed)">
            <p>
              Same accumulation with a purple arrow pointing to the tall central lobe labelled &quot;More Probable (means
              more probability to be here).&quot;
            </p>
          </DiagramBox>
          <DiagramBox title="Matter wave is a wave of probability (printed)">
            <p>
              A red wave-packet envelope with a single blue dot (the particle) sitting at its central crest, captioned
              &quot;Matter Wave is a wave of Probability.&quot;
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={123}>
        <NoteBlock title="Electron-density (dot) pictures of ns orbitals">
          <DiagramBox title="1s–5s electron density (printed)">
            <p>
              Five dot-density plots labelled 1S, 2S, 3S, 4S, 5S. 1S: a single diffuse cloud densest at the centre. 2S: a
              small dense core surrounded by sparse space. 3S: a bright core ringed by one faint shell. 4S: a core with two
              concentric shells. 5S: a core with additional concentric shells — the number of radial regions increases with
              n.
            </p>
          </DiagramBox>
          <FormulaLine math="\text{Max Born}\qquad |\psi\psi^{*}|\quad\text{or}\quad|\psi^{2}|" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={124}>
        <NoteBlock title="Schrödinger Equation in polar co-ordinates">
          <DiagramBox title="Spherical polar coordinates (diagram)">
            <p>
              A position vector r from the origin making polar angle θ with the z-axis; its projection in the x–y plane
              makes azimuthal angle φ with the x-axis. Marked components: z = r cos θ (vertical) and r sin θ (in-plane
              projection).
            </p>
          </DiagramBox>
          <FormulaLine math="z=r\cos\theta" />
          <FormulaLine math="x=r\sin\theta\cos\phi" />
          <FormulaLine math="y=r\sin\theta\sin\phi" />
          <FormulaLine math="\theta\to 0\text{ to }\pi\qquad \phi\to 0\text{ to }2\pi" />
          <FormulaLine math="\psi(x,y,z)=R(r)\,\Theta(\theta)\,\Phi(\phi)" />
          <FormulaLine math="\psi_{n,l,m}=\underbrace{R(r)}_{\text{Radial function }f(n,l)}\ \underbrace{\Theta(\theta)\,\Phi(\phi)}_{\text{angular function}}\quad[\Theta=f(l,m),\ \Phi=f(m)]" />
          <p>The differential polar equation is broken into 3 independent equation —</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Radial Equation</li>
            <li>Zenith Equation</li>
            <li>Azimuthal Equation</li>
          </ol>
          <FormulaLine math="\text{Probability density at a point }(r,\theta,\phi)\text{ in space}=\left(R(r)\,\Theta(\theta)\,\Phi(\phi)\right)^{2}" />
          <p>Probability of finding of electron in infinitesimally small volume element</p>
          <FormulaLine math="dV=r^{2}\sin\theta\,d\theta\,d\phi\,dr" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="122-124" unclear={0} />
    </AtomicPartShell>
  );
}
