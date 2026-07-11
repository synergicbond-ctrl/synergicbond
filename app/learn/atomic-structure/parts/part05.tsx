"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, ImportantNote, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { ClosestApproachVisual } from "../_components/AtomicVisuals";

export default function Part05() {
  return (
    <AtomicPartShell part={5} title="Rutherford Model Calculations" pages="13-16">
      <LearningObjectives items={["Interpret the Geiger–Marsden deflection data and the nuclear-size scale.", "Derive the head-on distance of closest approach from energy conservation.", "Follow the momentum-impulse derivation for impact parameter.", "Relate scattering geometry to cross section."]} />
      <SourcePage page={13}>
        <NoteBlock title="Geiger and Marsden table">
          <DataTable
            headers={["Angle of deflection", "% of α-particles deflected"]}
            rows={[
              ["15", "93"],
              ["30", "5"],
              ["45", "1"],
              ["60", "0.34"],
              ["120", "0.037"],
              ["150", "0.023"],
            ]}
          />
        </NoteBlock>
        <NoteBlock title="Model">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              All the p and n i.e. nearly the total mass of an atom is present in very small region at the centre of atom,
              k/a nucleus.
            </li>
            <li>Size of nuclei is very small in comparison to the size of atom.</li>
          </ol>
          <FormulaLine math="R_{Nu}\propto(A)^{1/3}" />
          <FormulaLine math="R_{Nu}=R_o(A)^{1/3}" />
          <p>
            R<sub>o</sub> = Rutherford&apos;s constant = <MathText math="1\times10^{-15}\ \mathrm{m}" />
          </p>
          <p>
            order of radius of atom = <MathText math="10^{-10}\ \mathrm{m}" />
          </p>
          <p>
            order of radius of nucleus = <MathText math="10^{-15}\ \mathrm{m}" />
          </p>
          <ol start={3} className="list-decimal space-y-3 pl-5">
            <li>
              Electrons, equal in number to net nuclear positive charge, revolve around the nucleus with fast speed in
              circular orbits.
            </li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={14}>
        <NoteBlock title="Rutherford model force correction">
          <p>
            In Rutherford&apos;s classical orbit picture, the Coulomb attraction supplies the required centripetal force. In a co-moving rotating frame, this may be described using an outward centrifugal pseudo-force; it is not an additional real force in an inertial frame.
          </p>
          <DiagramBox title="Atom labels">
            <p>atom → Nucleus</p>
            <p>atom → extra nuclear part.</p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Calculation of Distance of Closest Approach">
          <DiagramBox title="Closest approach">
            <ClosestApproachVisual />
            <p>Positive nucleus Nu and incoming α particle; far away: KE = known, P.E. = 0; closest: KE = 0.</p>
            <p>
              <MathText math="PE=K\frac{q_1q_2}{r}" />
            </p>
          </DiagramBox>
          <p>
            When a +vely charged particle is accelerated towards another +vely charged particle, it K.E. is converted
            into P.E. and at distance of closest approach KE = P.E.
          </p>
          <FormulaLine math="\frac{1}{2}mv^2=K\frac{q_1q_2}{r}" />
          <FormulaLine math="r=\frac{2Kq_1q_2}{mv^2}" />
          <FormulaLine math="r=\frac{Kq_1q_2}{KE}" />
          <p>
            <MathText math="K=\frac{1}{4\pi\epsilon_o}=9\times10^9" />
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={15}>
        <NoteBlock title="Alpha scattering geometry">
          <p>p = momentum of projectile.</p>
          <DiagramBox title="Impact parameter and geometry labels">
            <p>Labels: α scattering geometry, symmetry plane, Δp, θ, φ, b impact parameter, path of projectile, target nucleus.</p>
            <p>After Beiser figure: closest approach, r min, impact parameter b.</p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Calculation of Impact parameter">
          <FormulaLine math="\Delta p=p_f-p_i" />
          <FormulaLine math="\Delta p=2mv_o\sin\frac{\theta}{2}" />
          <FormulaLine math="\Delta p=\int F_{\Delta p}\,dt\qquad F_{\Delta p}=F\cos\phi" />
          <p>φ = angular location projectile relative to symmetry plane</p>
          <FormulaLine math="\Delta p=Z_1Z_2Ke^2\int\frac{\cos\phi}{r^2}\,dt=2mv_o\sin\frac{\theta}{2}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={16}>
        <NoteBlock title="Impact parameter derivation">
          <FormulaLine math="L=mv_ob=mr^2\frac{d\phi}{dt}" />
          <FormulaLine math="r^2=\frac{v_ob}{d\phi/dt}" />
          <FormulaLine math="2mv_o\sin\frac{\theta}{2}=Z_1Z_2Ke^2\int\frac{\cos\phi}{v_ob}\frac{d\phi}{dt}\,dt" />
          <FormulaLine math="=\frac{Z_1Z_2Ke^2}{v_ob}\int_{\phi_i}^{\phi_f}\cos\phi\,d\phi" />
          <FormulaLine math="\phi_i=-\left(\frac{\pi-\theta}{2}\right),\qquad \phi_f=+\left(\frac{\pi-\theta}{2}\right)" />
          <FormulaLine math="\int_{\phi_i}^{\phi_f}\cos\phi\,d\phi=\sin\left(\frac{\pi-\theta}{2}\right)-\sin\left[-\left(\frac{\pi-\theta}{2}\right)\right]" />
          <FormulaLine math="=2\cos\frac{\theta}{2}" />
          <FormulaLine math="b=\frac{Z_1Z_2Ke^2}{mv_o^2}\cot\frac{\theta}{2}" />
          <FormulaLine math="b=\frac{Z_1Z_2Ke^2}{mv_o^2}\sqrt{\frac{1+\cos\theta}{1-\cos\theta}}" />
        </NoteBlock>
        <NoteBlock title="Scattering Cross Section">
          <FormulaLine math="\sigma=\pi r^2" />
          <FormulaLine math="\sigma=\pi Z^2\left(\frac{Ke^2}{KE}\right)^2\frac{1+\cos\theta}{1-\cos\theta}" />
          <DiagramBox title="Scattering cross-section figure">
            <p>Visible labels: db, b, dθ, θ, r, rdθ, r sinθ, after Thornton & Rex.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>
      <ImportantNote title="Frame of reference">Coulomb attraction is the real force in an inertial frame. “Centrifugal force” is only a rotating-frame description, as noted in this part.</ImportantNote>
      <PracticeQuestion prompt={<>For a head-on α-particle approach, what energy statement is used to obtain <MathText math="r=Kq_1q_2/KE" />?</>} answer="The initial kinetic energy becomes electrostatic potential energy at the closest approach, where the instantaneous kinetic energy is zero." />
      <SummaryStrip items={["Nuclear radius follows RNu = R₀A¹ᐟ³, with R₀ = 1 × 10⁻¹⁵ m; atomic radius is of order 10⁻¹⁰ m.", "Head-on closest approach follows directly from KE = Kq₁q₂/r.", "Impact parameter b and scattering cross section encode how Coulomb repulsion redirects the projectile."]} />
      <AuditComment pages="13-16" unclear={0} />
    </AtomicPartShell>
  );
}
