"use client";

import { AtomicPartShell, AuditComment, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part37() {
  return (
    <AtomicPartShell part={37} title="Deriving the Wave Equation from a Sine Wave and Eigenvalues" pages="116-118">
      <SourcePage page={116}>
        <NoteBlock title="Hamiltonian recap">
          <FormulaLine math="\boxed{\hat{H}\psi=E\psi}" />
          <FormulaLine math="\hat{H}=-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}+V=\text{Hamiltonian operator}" />
          <p>
            <MathText math="\hat{H}" /> gives information about total energy of electron.
          </p>
        </NoteBlock>
        <NoteBlock title="From a sine wave function to the wave equation">
          <FormulaLine math="\psi=A\sin\!\left(\frac{2\pi}{\lambda}\,x\right)" />
          <FormulaLine math="\frac{d\psi}{dx}=A\cos\!\left(\frac{2\pi}{\lambda}\,x\right)\cdot\frac{2\pi}{\lambda}" />
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}=-A\sin\!\left(\frac{2\pi}{\lambda}\,x\right)\cdot\left(\frac{2\pi}{\lambda}\right)^{2}" />
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}=-\frac{4\pi^{2}}{\lambda^{2}}\,\psi" />
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}+\frac{4\pi^{2}}{\lambda^{2}}\,\psi=0" />
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}+\frac{4\pi^{2}m^{2}v_x^{2}}{h^{2}}\,\psi=0" />
          <p>Similarly for the wave propagating in y and z directions only.</p>
          <FormulaLine math="\frac{d^{2}\psi}{dy^{2}}+\frac{4\pi^{2}m^{2}v_y^{2}}{h^{2}}\,\psi=0" />
          <FormulaLine math="\frac{d^{2}\psi}{dz^{2}}+\frac{4\pi^{2}m^{2}v_z^{2}}{h^{2}}\,\psi=0" />
          <p>For matter wave propagating in space</p>
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}+\frac{d^{2}\psi}{dy^{2}}+\frac{d^{2}\psi}{dz^{2}}+\frac{4\pi^{2}m^{2}\left(v_x^{2}+v_y^{2}+v_z^{2}\right)}{h^{2}}\,\psi=0" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={117}>
        <NoteBlock title="Reducing to the time-independent Schrödinger equation">
          <FormulaLine math="\frac{d^{2}\psi}{dx^{2}}+\frac{d^{2}\psi}{dy^{2}}+\frac{d^{2}\psi}{dz^{2}}+\frac{4\pi^{2}m^{2}v^{2}}{h^{2}}\,\psi=0" />
          <FormulaLine math="\nabla^{2}\psi+\frac{4\pi^{2}m^{2}v^{2}}{h^{2}}\,\psi=0" />
          <FormulaLine math="\nabla^{2}\psi+\frac{8\pi^{2}m\overbrace{\left(\tfrac{1}{2}mv^{2}\right)}^{KE}}{h^{2}}\,\psi=0" />
          <FormulaLine math="\nabla^{2}\psi+\frac{8\pi^{2}m\,(E-V)}{h^{2}}\,\psi=0" />
        </NoteBlock>
        <NoteBlock title="Eigenfunctions and eigenvalues">
          <FormulaLine math="\frac{dy}{dx}=7\,y" />
          <FormulaLine math="\underset{\text{operator}}{\frac{d}{dy}}\ \underset{\text{function}}{(y)}=\underset{\text{constant}}{7}\times\underset{\text{function}}{(y)}" />
          <p>Here (y) is the eigenfunction and the constant 7 is the eigenvalue.</p>
          <FormulaLine math="\underset{\text{operator}}{\hat{H}}\ \underset{\text{function}}{\psi}=\underset{\text{constant}}{E}\ \underset{\text{function}}{\psi}" />
          <FormulaLine math="\psi=\text{eigen function}\qquad E=\text{eigen value}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={118}>
        <NoteBlock title="Properties of the Schrödinger wave equation and its solutions">
          <ul className="list-disc space-y-3 pl-5">
            <li>Schrodinger wave equation is a second order differential equation. It has infinite solution.</li>
            <li>
              Out of infinite solution only those solution are acceptable in which <MathText math="\psi" /> is finite,
              single valued and continuous.
            </li>
            <li>
              When solved with certain restriction, called boundary condition, only finite number of solutions are
              obtained.
            </li>
            <li>The acceptable solution corresponds to different states of electron in an atom.</li>
            <li>
              SWE may be solved only for single electron system. Its solution for multielectron system under certain
              condition resemble with H-like atoms. Hence the conditions for single electron system is generallised for
              all the system.
            </li>
          </ul>
        </NoteBlock>
        <NoteBlock title="ψ — summary">
          <ul className="list-disc space-y-2 pl-5">
            <li>It is wave function</li>
            <li>It has no physical significance</li>
            <li>It represent single particle</li>
            <li>It represent amplitude</li>
          </ul>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="116-118" unclear={0} />
    </AtomicPartShell>
  );
}
