"use client";

import { AtomicPartShell, AuditComment, FormulaLine, ImportantNote, LearningObjectives, MathText, NoteBlock, SourcePage, SummaryStrip } from "./_shared";

export default function Part55() {
  return (
    <AtomicPartShell part={55} title="Olympiad Problems — Uncertainty and Relativistic Wavelength (2.7–2.14)" pages="173-175">
      <LearningObjectives items={[<>Use uncertainty relations with stated experimental precision.</>, <>Relate a finite lifetime to linewidth.</>, <>Derive the relativistic electron wavelength without skipping algebra.</>]} />
      <SourcePage page={173}>
        <NoteBlock title="Problem 2.7 — electron energy for electron diffraction (spacing 2 Å)">
          <p>de Broglie wavelength of electrons ≈ 2 Å = 2 × 10⁻¹⁰ m.</p>
          <FormulaLine math="T=\frac{p^{2}}{2m}=\frac{(h/\lambda)^{2}}{2m}=\frac{(6.626\times10^{-34}\ \text{Js})^{2}}{2\times(2\times10^{-10}\ \text{m})^{2}(9.11\times10^{-31}\ \text{kg})}" />
          <FormulaLine math="=60.24\times10^{-19}\ \text{J}=37.65\ \text{eV}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.8 — ratio of KE (electron : proton) when de Broglie wavelengths are equal">
          <FormulaLine math="\lambda=\frac{h}{m_1 v_1}=\frac{h}{m_2 v_2}\quad\text{or}\quad m_1 v_1=m_2 v_2" />
          <FormulaLine math="m_1\left(\tfrac{1}{2}m_1 v_1^{2}\right)=m_2\left(\tfrac{1}{2}m_2 v_2^{2}\right)" />
          <FormulaLine math="\frac{\text{KE of electron}}{\text{KE of proton}}=\frac{m_2}{m_1}=1836" />
        </NoteBlock>
        <NoteBlock title="Problem 2.9 — locating an electron (500 m/s, accuracy 0.004%)">
          <FormulaLine math="p=mv=(9.11\times10^{-31}\ \text{kg})(500\ \text{m/s})" />
          <FormulaLine math="\frac{\Delta p}{p}\times100=0.004" />
          <FormulaLine math="\Delta p=\frac{0.004(9.11\times10^{-31})(500)}{100}=182.2\times10^{-34}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\Delta x\approx\frac{h}{\Delta p}=\frac{6.626\times10^{-34}}{182.2\times10^{-34}}=0.0364\ \text{m}" />
          <p>The position of the electron cannot be measured to accuracy less than 0.036 m.</p>
        </NoteBlock>
        <NoteBlock title="Problem 2.10 — natural linewidth (lifetime 10⁻⁹ s, line 6000 Å)">
          <FormulaLine math="\Delta t=10^{-9}\ \text{s},\quad \lambda=6000\times10^{-10}\ \text{m}=6\times10^{-7}\ \text{m}" />
          <FormulaLine math="E=\frac{hc}{\lambda}\quad\text{or}\quad \Delta E=\frac{hc}{\lambda^{2}}\Delta\lambda" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={174}>
        <NoteBlock title="Problem 2.10 — solution (continued)">
          <FormulaLine math="\Delta E\cdot\Delta t=\frac{hc}{\lambda^{2}}\Delta\lambda\cdot\Delta t\approx\frac{\hbar}{2}=\frac{h}{4\pi}" />
          <FormulaLine math="\Delta\lambda=\frac{\lambda^{2}}{4\pi c\,\Delta t}=\frac{36\times10^{-14}\ \text{m}^{2}}{4\pi(3\times10^{8}\ \text{m/s})(10^{-9}\ \text{s})}=9.5\times10^{-14}\ \text{m}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.11 — n = 2 state of hydrogen (lifetime ~10⁻⁸ s)">
          <FormulaLine math="\text{(i) }\Delta E\ge\frac{h}{4\pi\Delta t}=\frac{6.626\times10^{-34}}{4\pi\times10^{-8}}=0.527\times10^{-26}\ \text{J}=3.29\times10^{-8}\ \text{eV}" />
          <FormulaLine math="\text{(ii) }E_{2\to1}=-13.6\ \text{eV}\left(\frac{1}{2^{2}}-\frac{1}{1^{2}}\right)=10.2\ \text{eV}" />
          <FormulaLine math="\frac{\Delta E}{E}=\frac{3.29\times10^{-8}}{10.2}=3.23\times10^{-9}" />
          <FormulaLine math="\text{(iii) }\lambda=\frac{hc}{E}=\frac{(6.626\times10^{-34})(3\times10^{8})}{10.2\times1.6\times10^{-19}}=1.218\times10^{-7}\ \text{m}=122\ \text{nm}" />
          <FormulaLine math="\Delta\lambda=\frac{\Delta E}{E}\times\lambda=(3.23\times10^{-9})(1.218\times10^{-7})=3.93\times10^{-16}\ \text{m}=3.93\times10^{-7}\ \text{nm}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.12 — electron accelerated by V volts (relativistic wavelength)">
          <p>Show that</p>
          <FormulaLine math="\lambda=\frac{hc}{\left[eV\,(eV+2m_0 c^{2})\right]^{1/2}}" />
          <FormulaLine math="\frac{m_0 c^{2}}{(1-v^{2}/c^{2})^{1/2}}-m_0 c^{2}=Ve" />
          <FormulaLine math="(1-v^{2}/c^{2})^{1/2}=\frac{m_0 c^{2}}{Ve+m_0 c^{2}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={175}>
        <NoteBlock title="Problem 2.12 — solution (continued)">
          <FormulaLine math="1-\frac{v^{2}}{c^{2}}=\frac{m_0^{2}c^{4}}{(Ve+m_0 c^{2})^{2}}" />
          <FormulaLine math="\frac{v^{2}}{c^{2}}=\frac{(Ve+m_0 c^{2})^{2}-m_0^{2}c^{4}}{(Ve+m_0 c^{2})^{2}}=\frac{Ve(Ve+2m_0 c^{2})}{(Ve+m_0 c^{2})^{2}}" />
          <FormulaLine math="v=\frac{c\left[Ve(Ve+2m_0 c^{2})\right]^{1/2}}{Ve+m_0 c^{2}}" />
          <FormulaLine math="\lambda=\frac{h}{mv}=\frac{h(1-v^{2}/c^{2})^{1/2}}{m_0 v}=\frac{hc}{\left[Ve(Ve+2m_0 c^{2})\right]^{1/2}}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.13 — lifetime of a resonance (Mc² = 1228 MeV, ±56 MeV)">
          <FormulaLine math="\Delta E=(56\times10^{6}\ \text{eV})(1.6\times10^{-19}\ \text{J/eV})" />
          <FormulaLine math="\Delta t=\frac{\hbar}{2}\frac{1}{\Delta E}=\frac{1.05\times10^{-34}}{2}\cdot\frac{1}{56\times1.6\times10^{-13}}=5.86\times10^{-24}\ \text{s}" />
          <p>Its lifetime is about 5.86 × 10⁻²⁴ s (laboratory frame).</p>
          <FormulaLine math="\text{Distance}=(5.86\times10^{-24}\ \text{s})(10^{8}\ \text{m/s})=5.86\times10^{-16}\ \text{m}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.14 — uncertainty for a macroscopic bullet (0.03 kg, 500 m/s, 0.02%)">
          <FormulaLine math="p=0.03\times500=15\ \text{kg m s}^{-1}" />
          <FormulaLine math="\frac{\Delta p}{p}\times100=0.02\ \Rightarrow\ \Delta p=\frac{0.02\times15}{100}=3\times10^{-3}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\Delta x\approx\frac{\hbar}{2\,\Delta p}=\frac{h}{4\pi\,\Delta p}=\frac{6.626\times10^{-34}}{4\pi\times3\times10^{-3}}=1.76\times10^{-31}\ \text{m}" />
          <p>The uncertainty in position is negligibly small for a macroscopic object.</p>
        </NoteBlock>
      </SourcePage>

      <ImportantNote title="Reading the uncertainty estimates">The symbol <MathText math="\approx" /> marks the order-of-magnitude use of the uncertainty relation. The line-width calculations instead retain <MathText math="\Delta E\,\Delta t\approx\hbar/2" /> through the stated substitutions.</ImportantNote>
      <SummaryStrip items={[<>Electron diffraction at 2 Å requires <MathText math="37.65\ \mathrm{eV}" />.</>, <>The relativistic result is <MathText math="\lambda=hc/[eV(eV+2m_0c^2)]^{1/2}" />.</>, <>For the bullet, <MathText math="\Delta x=1.76\times10^{-31}\ \mathrm{m}" />.</>]} />

      <AuditComment pages="173-175" unclear={0} />
    </AtomicPartShell>
  );
}
