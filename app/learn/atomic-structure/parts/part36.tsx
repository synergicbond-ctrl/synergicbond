"use client";

import { AtomicPartShell, AuditComment, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part36() {
  return (
    <AtomicPartShell part={36} title="Schrödinger Wave Equation — Time Dependence and Hamiltonian" pages="113-115">
      <SourcePage page={113}>
        <NoteBlock title="Time derivative and the time-dependent equation">
          <p>at constant x,</p>
          <FormulaLine math="\frac{\partial\psi}{\partial t}=A\,e^{\frac{i}{\hbar}(px-Et)}\left(-E\,\frac{i}{\hbar}\right)=-\frac{i}{\hbar}\,E\,\psi" />
          <p>Side working:</p>
          <FormulaLine math="E\psi=-\frac{\hbar}{i}\,\frac{\partial\psi}{\partial t}=i\hbar\,\frac{\partial\psi}{\partial t}\qquad(i^{2}=-1,\ -\tfrac{1}{i}=i)" />
          <FormulaLine math="\text{for free particle }E\psi=\frac{p^{2}}{2m}\,\psi" />
          <FormulaLine math="\boxed{-i\hbar\,\frac{\partial\psi}{\partial t}=\frac{\hbar^{2}}{2\pi}\,\frac{\partial^{2}\psi}{\partial x^{2}}}" />
          <p>we got a differential equation free from p, E.</p>
          <FormulaLine math="E=KE+PE=\frac{p^{2}}{2m}+V(x)\qquad\text{one dimension}" />
          <FormulaLine math="E\psi=\frac{p^{2}}{2m}\,\psi+V(x)\,\psi" />
          <FormulaLine math="\boxed{-\frac{\hbar^{2}}{2m}\,\frac{\partial^{2}\psi}{\partial x^{2}}+V(x)\,\psi=i\hbar\,\frac{\partial\psi}{\partial t}}\quad\text{Schrodinger wave equation}" />
          <p>On solving we get, how wave function of particle will vary with time.</p>
          <NoteBlock title="Momentum operator">
            <FormulaLine math="p\,\psi=-i\hbar\,\frac{\partial\psi}{\partial x}\qquad p=-i\hbar\,\frac{\partial}{\partial x}" />
            <p>Remove ψ (can&apos;t remove in practice). P = Linear momentum operator.</p>
            <p>Similarly,</p>
            <FormulaLine math="p^{2}\psi=-\hbar^{2}\,\frac{\partial^{2}\psi}{\partial x^{2}}" />
            <p>Divide by 2m</p>
            <FormulaLine math="\frac{p^{2}\psi}{2m}=-\frac{\hbar^{2}}{2m}\,\frac{\partial^{2}\psi}{\partial x^{2}}" />
            <FormulaLine math="KE=\frac{p^{2}}{2m}=-\frac{\hbar^{2}}{2m}\,\frac{\partial^{2}}{\partial x^{2}}" />
            <FormulaLine math="\frac{p^{2}}{2m}\,\psi+V(x)\,\psi=i\hbar\,\frac{\partial\psi}{\partial t}" />
            <FormulaLine math="\underbrace{\left(-\frac{\hbar^{2}}{2m}\,\frac{\partial^{2}}{\partial x^{2}}\right)}_{\text{K.E. operator}}\psi+\underbrace{V(x)}_{\text{P.E. operator}}\psi=i\hbar\,\frac{\partial\psi}{\partial t}" />
          </NoteBlock>
          <NoteBlock title="Time-independent form">
            <FormulaLine math="\boxed{\frac{\partial^{2}\psi}{\partial x^{2}}+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0}\quad\text{for one dimension}" />
            <FormulaLine math="\boxed{\frac{\partial^{2}\psi}{\partial x^{2}}+\frac{\partial^{2}\psi}{\partial y^{2}}+\frac{\partial^{2}\psi}{\partial z^{2}}+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0}\quad\text{for 3D}" />
          </NoteBlock>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={114}>
        <NoteBlock title="Laplacian form and the Hamiltonian operator">
          <FormulaLine math="\left(\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}+\frac{\partial^{2}}{\partial z^{2}}\right)\psi+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0" />
          <FormulaLine math="\boxed{\nabla^{2}\psi+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0}" />
          <FormulaLine math="-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}\psi=(E-V)\,\psi" />
          <FormulaLine math="\left(-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}-V\right)\psi=E\,\psi" />
          <FormulaLine math="\boxed{\hat{H}\psi=E\,\psi}\qquad \hat{H}=\left(-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}-V\right)" />
          <p>
            <MathText math="\hat{H}" /> = Hamiltonian operator. <MathText math="\hat{H}" /> gives information about total
            energy of electron.
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={115}>
        <NoteBlock title="Wave Mechanical Model of atom">
          <p>
            Schrodinger given a general equation for all the moving object showing wave-particle duality, for which the
            energy in a particular state does not change with time. as
          </p>
        </NoteBlock>
        <NoteBlock title="Schrodinger Wave Equation">
          <p>
            wave function = <MathText math="\psi" /> (Psi)
          </p>
          <p>For one dimension</p>
          <FormulaLine math="\frac{\partial^{2}\psi}{\partial x^{2}}+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0" />
          <p>for three dimension</p>
          <FormulaLine math="\frac{\partial^{2}\psi}{\partial x^{2}}+\frac{\partial^{2}\psi}{\partial y^{2}}+\frac{\partial^{2}\psi}{\partial z^{2}}+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0" />
          <FormulaLine math="\nabla^{2}\psi+\frac{8\pi^{2}m}{h^{2}}\,(E-V)\,\psi=0" />
          <FormulaLine math="\nabla^{2}=\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}+\frac{\partial^{2}}{\partial z^{2}}=\text{Laplacian operator}" />
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <MathText math="\psi" /> = wave function of matter waves
            </li>
            <li>
              m = mass of <MathText math="e^{-}" />
            </li>
            <li>E = Total energy</li>
            <li>V = Potential energy</li>
          </ul>
          <FormulaLine math="-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}\psi=(E-V)\,\psi" />
          <FormulaLine math="-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}\psi+V\psi=E\,\psi" />
          <FormulaLine math="\left(-\frac{h^{2}}{8\pi^{2}m}\,\nabla^{2}+V\right)\psi=E\,\psi" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="113-115" unclear={0} />
    </AtomicPartShell>
  );
}
