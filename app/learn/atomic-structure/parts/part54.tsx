"use client";

import { AtomicPartShell, AuditComment, FormulaLine, NoteBlock, SourcePage } from "./_shared";

export default function Part54() {
  return (
    <AtomicPartShell part={54} title="Olympiad Problems — de Broglie Wavelengths (2.1–2.7)" pages="170-172">
      <SourcePage page={170}>
        <NoteBlock title="For Olympiads — Problem 2.1">
          <p>
            Calculate the de Broglie wavelength of an electron having a kinetic energy of 1000 eV. Compare the result with
            the wavelength of x-rays having the same energy.
          </p>
          <FormulaLine math="T=\frac{p^{2}}{2m}=1000\ \text{eV}=1.6\times10^{-16}\ \text{J}" />
          <FormulaLine math="\lambda=\frac{h}{p}=\frac{6.626\times10^{-34}\ \text{Js}}{\left[2\times(9.11\times10^{-31}\ \text{kg})\times(1.6\times10^{-16}\ \text{J})\right]^{1/2}}=0.39\times10^{-10}\ \text{m}=0.39\ \text{Å}" />
          <FormulaLine math="\text{For x-rays: }E=\frac{hc}{\lambda}" />
          <FormulaLine math="\lambda=\frac{(6.626\times10^{-34}\ \text{Js})(3\times10^{8}\ \text{m/s})}{1.6\times10^{-16}\ \text{J}}=12.42\times10^{-10}\ \text{m}=12.42\ \text{Å}" />
          <FormulaLine math="\frac{\lambda_{\text{x-ray}}}{\lambda_{\text{de Broglie}}}=\frac{12.42}{0.39}=31.85" />
        </NoteBlock>
        <NoteBlock title="Problem 2.2 — electron accelerated through 100 V and 200 V">
          <FormulaLine math="\text{(i) }\frac{p^{2}}{2m}=100\ \text{eV}=1.6\times10^{-17}\ \text{J}" />
          <FormulaLine math="p=\left[2(9.1\times10^{-31}\ \text{kg})(1.6\times10^{-17}\ \text{J})\right]^{1/2}=5.396\times10^{-24}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\lambda=\frac{h}{p}=\frac{6.626\times10^{-34}}{5.396\times10^{-24}}=1.228\times10^{-10}\ \text{m}\approx1.228\ \text{Å}" />
          <FormulaLine math="\text{(ii) }\frac{p^{2}}{2m}=200\ \text{eV}=3.2\times10^{-17}\ \text{J}" />
          <FormulaLine math="p=\left[2(9.1\times10^{-31})(3.2\times10^{-17})\right]^{1/2}=7.632\times10^{-24}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\lambda=\frac{6.626\times10^{-34}}{7.632\times10^{-24}}=0.868\times10^{-10}\ \text{m}=0.868\ \text{Å}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={171}>
        <NoteBlock title="Problem 2.3 — electron energy for nuclear scattering (relativistic)">
          <p>
            The electron scattering experiment gives 2×10⁻¹⁵ m for the radius of a nucleus. Estimate the order of energies
            of electrons used. The de Broglie wavelength must be of the order of 4×10⁻¹⁵ m (the diameter).
          </p>
          <FormulaLine math="T=E-m_0 c^{2}=\sqrt{c^{2}p^{2}+m_0^{2}c^{4}}-m_0 c^{2}" />
          <FormulaLine math="(T+m_0 c^{2})^{2}=c^{2}p^{2}+m_0^{2}c^{4}" />
          <FormulaLine math="c^{2}p^{2}=m_0^{2}c^{4}\left[\left(1+\frac{T}{m_0 c^{2}}\right)^{2}-1\right]" />
          <FormulaLine math="p=m_0 c\left[\left(1+\frac{T}{m_0 c^{2}}\right)^{2}-1\right]^{1/2}" />
          <FormulaLine math="\left(1+\frac{T}{m_0 c^{2}}\right)^{2}=\frac{h^{2}}{\lambda^{2}m_0^{2}c^{2}}+1=\frac{(6.626\times10^{-34})^{2}}{(16\times10^{-30})(9.11\times10^{-31})^{2}(3\times10^{8})^{2}}+1=3.6737\times10^{5}" />
          <FormulaLine math="T=605.1\,m_0 c^{2}=605.1\times(9.11\times10^{-31})(3\times10^{8})^{2}=496.12\times10^{-13}\ \text{J}" />
          <FormulaLine math="=\frac{496.12\times10^{-13}}{1.6\times10^{-19}}=310\times10^{6}\ \text{eV}=310\ \text{MeV}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.4 — ratio of de Broglie wavelengths, electron : proton">
          <p>
            Evaluate the ratio of the de Broglie wavelength of electron to that of proton when (i) both have the same
            kinetic energy, and (ii) electron KE = 1000 eV, proton KE = 100 eV.
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={172}>
        <NoteBlock title="Problem 2.4 — solution">
          <FormulaLine math="\lambda_1=\frac{h}{\sqrt{2m_1 T_1}},\quad \lambda_2=\frac{h}{\sqrt{2m_2 T_2}},\quad \frac{\lambda_1}{\lambda_2}=\sqrt{\frac{m_2 T_2}{m_1 T_1}}" />
          <FormulaLine math="\text{(i) }\frac{\lambda_{e}}{\lambda_{p}}=\sqrt{\frac{1836\,m_e T}{m_e T}}=\sqrt{1836}=42.85" />
          <FormulaLine math="\text{(ii) }T_1=1000\ \text{eV},\ T_2=100\ \text{eV}:\ \frac{\lambda_{e}}{\lambda_{p}}=\sqrt{\frac{1836\times100}{1000}}=13.55" />
        </NoteBlock>
        <NoteBlock title="Problem 2.5 — proton energy for nuclear study (relativistic)">
          <p>
            If nuclei diameter ≈ 10⁻¹⁵ m, the proton de Broglie wavelength must be of that order. With the relativistic
            momentum (as in Problem 2.3),
          </p>
          <FormulaLine math="p=m_0 c\sqrt{\left(1+\frac{T}{m_0 c^{2}}\right)^{2}-1},\qquad \lambda=\frac{h}{p}\approx10^{-15}\ \text{m}" />
          <FormulaLine math="\frac{h^{2}}{\lambda^{2}}=m_0^{2}c^{2}\left[\left(1+\frac{T}{m_0 c^{2}}\right)^{2}-1\right]" />
          <FormulaLine math="T=9.8912\times10^{-11}\ \text{J}=618.2\ \text{MeV}" />
        </NoteBlock>
        <NoteBlock title="Problem 2.6 — neutron velocity for neutron diffraction (spacing 2 Å)">
          <FormulaLine math="\lambda\approx2\times10^{-10}\ \text{m},\qquad \lambda=\frac{h}{mv}\ \text{or}\ v=\frac{h}{m\lambda}" />
          <FormulaLine math="v=\frac{6.626\times10^{-34}}{(1.6749\times10^{-27}\ \text{kg})(2\times10^{-10}\ \text{m})}=1.978\times10^{3}\ \text{m s}^{-1}" />
          <FormulaLine math="T=\frac{1}{2}mv^{2}=\frac{1}{2}(1.6749\times10^{-27})(1.978\times10^{3})^{2}=3.2765\times10^{-21}\ \text{J}=20.478\times10^{-3}\ \text{eV}" />
          <p>Problem 2.7 — Estimate the energy of electrons needed for electron diffraction of crystals with interatomic spacing ≈ 2 Å.</p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="170-172" unclear={0} />
    </AtomicPartShell>
  );
}
