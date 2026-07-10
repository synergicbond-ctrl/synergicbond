"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part18() {
  return (
    <AtomicPartShell part={18} title="Ritz Principle, Reduced Mass and Spectrum" pages="55-57">
      <SourcePage page={55}>
        <NoteBlock title="Shortest wavelength">
          <p>
            <MathText math="\lambda_{min}" />:
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{1^{2}}-\frac{1}{\infty^{2}}\right)" />
          <FormulaLine math="\lambda=\frac{1}{R}=912\ \text{\AA}" />
        </NoteBlock>
        <NoteBlock title="Ritz Combination Principle">
          <DiagramBox title="Levels 1, 2, 3">
            <p>Three horizontal energy levels labelled 3, 2 and 1.</p>
          </DiagramBox>
          <FormulaLine math="3\to2:\ \lambda_2,\ \nu_2,\ \bar{\nu}_2" />
          <FormulaLine math="2\to1:\ \lambda_1,\ \nu_1,\ \bar{\nu}_1" />
          <FormulaLine math="3\to1:\ \lambda_3,\ \nu_3,\ \bar{\nu}_3" />
          <FormulaLine math="\nu_3=\nu_1+\nu_2" />
          <FormulaLine math="\bar{\nu}_3=\bar{\nu}_1+\bar{\nu}_2" />
          <FormulaLine math="E_3=E_1+E_2" />
          <FormulaLine math="\lambda_3=\lambda_2+\lambda_1\ \Rightarrow\ \text{wrong}" />
        </NoteBlock>
        <NoteBlock title="Reduced Mass Effect">
          <DiagramBox title="Nucleus and electron about the centre of mass">
            <p>
              A circular orbit of radius <MathText math="r" />; below it, the line Nu — com — e marks distances{" "}
              <MathText math="r_1" /> (nucleus to centre of mass) and <MathText math="r_2" /> (centre of mass to electron).
            </p>
          </DiagramBox>
          <FormulaLine math="m_n r_1=m_e r_2=m_e(r-r_2)" />
          <FormulaLine math="r_1=\frac{m_e}{m_e+m_n}\,r" />
          <FormulaLine math="r_2=\frac{m_n}{m_e+m_n}\,r" />
          <p>modified quantisation of angular momentum,</p>
          <FormulaLine math="(I\omega)_e+(I\omega)_n=\frac{nh}{2\pi}" />
          <FormulaLine math="m_e r_2^{2}\omega+m_n r_1^{2}\omega=\frac{nh}{2\pi}" />
          <FormulaLine math="m_e\left(\frac{m_n}{m_e+m_n}r\right)^{2}\omega+m_n\left(\frac{m_e}{m_e+m_n}r\right)^{2}\omega=\frac{nh}{2\pi}" />
          <FormulaLine math="\frac{m_e m_n}{m_e+m_n}\,r^{2}\omega=\frac{nh}{2\pi}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={56}>
        <NoteBlock title="Reduced mass in the quantisation condition">
          <FormulaLine math="\mu r^{2}\omega=\frac{nh}{2\pi}\qquad\cdots(i)" />
          <p>where <MathText math="\mu" /> is reduced mass,</p>
          <FormulaLine math="\boxed{\mu=\frac{m_e m_n}{m_e+m_n}}" />
          <p>when nucleus is stationary</p>
          <FormulaLine math="(I.W.)_e=\frac{nh}{2\pi}\qquad\cdots(ii)" />
          <p>in all calculation we may replace mass of e&#8315; by reduced mass (<MathText math="\mu" />)</p>
          <FormulaLine math="m_n\gg m_e" />
          <FormulaLine math="\mu=\frac{m_e m_n}{m_n}=m_e" />
          <p>
            Reduced mass effect does not influence the calculations significantly but it must be considered in comparison of
            isotope and some hypothetical atoms.
          </p>
          <FormulaLine math="\mu=\frac{m_e m_n}{m_e+m_n}=\frac{m_e}{\left(\frac{m_e}{m_n}\right)+1}\ \Rightarrow\ m_n\uparrow\ \mu\uparrow" />
          <FormulaLine math="R\propto\mu\qquad R_H<R_D<R_T" />
          <FormulaLine math="IE\propto\mu\qquad H<D<T" />
        </NoteBlock>
        <NoteBlock title="Spectrum">
          <p>
            The impression produced on a screen when any light fall on screen after passing through a prism or prism like
            material is called spectrum.
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={57}>
        <NoteBlock title="Dispersion through a prism">
          <DiagramBox title="Solar spectrum from a prism">
            <p>
              Sunlight or white light enters the prism, deviates by angle <MathText math="\theta" /> and spreads onto the screen
              as the solar spectrum. Side note: <MathText math="\theta\propto\tfrac{1}{\lambda}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Continuous and Discontinuous spectrum">
          <p>
            In continuous spectrum all the the spectral lines overlap each other while some gap exist in discontinuous
            spectrum.
          </p>
        </NoteBlock>
        <NoteBlock title="Emission and Absorption spectrum">
          <p>
            In emission spectrum radiation coming out from some source fall on screen after passing through prism but in
            absorption spectrum sunlight fall on prism after passing through some sample. As the sample absorbs radiation of
            some certain wavelength, these radiation appears in solar spectrum. These wavelength are called missing wavelength.
          </p>
          <DiagramBox title="Emission versus absorption apparatus">
            <p>
              Printed figure: an excited sample sends light through a slit and prism onto a film or detector, giving the
              emission spectrum (bright lines, increasing wavelength). A white light source passing through an absorbing sample,
              slit and prism gives the absorption spectrum (dark lines on a continuous band, increasing wavelength).
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="55-57" unclear={0} />
    </AtomicPartShell>
  );
}
