"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";
import { AndrewsSVG, PhaseDomeSVG, BarometricSVG } from "../../_visuals";

export default function Part07Page() {
  return (
    <PartShell part={7}>
<section className="section">
            <SectionTitle
              id="liquefaction"
              index="07"
              title="Liquefaction, criticality and corresponding states"
              subtitle="Andrews isotherms, coexistence, critical constants, reduced variables and Joule–Thomson cooling."
            />

            <figure className="figure">
              <AndrewsSVG />
              <figcaption>Below the critical temperature, compression crosses a two-phase region in which pressure stays at the saturation value while vapour condenses. At the critical isotherm, liquid and vapour become indistinguishable.</figcaption>
            </figure>

            <div className="grid2">
              <ConceptCard title="Critical constants">
                <p><Formula tex="T_c" /> is the highest temperature at which a distinct liquid phase can coexist with vapour. <Formula tex="P_c" /> and <Formula tex="V_c" /> are the pressure and molar volume at the critical point.</p>
                <p>At that point, the critical isotherm has a horizontal point of inflection:</p>
                <Formula block tex="\\left(\\frac{\\partial P}{\\partial V_m}\\right)_{T_c}=0,\\qquad \\left(\\frac{\\partial^2P}{\\partial V_m^2}\\right)_{T_c}=0" />
              </ConceptCard>
              <ConceptCard title="van der Waals critical constants" tone="formula">
                <Formula block tex="V_c=3b,\\qquad P_c=\\frac{a}{27b^2},\\qquad T_c=\\frac{8a}{27Rb}" />
                <Formula block tex="Z_c=\\frac{P_cV_c}{RT_c}=\\frac38" />
                <p>Real substances do not all have <Formula tex="Z_c=3/8" />; this is a model prediction.</p>
              </ConceptCard>
            </div>

            <figure className="figure">
              <PhaseDomeSVG />
              <figcaption>Inside the coexistence dome, liquid and vapour coexist. Along a tie line, temperature and pressure are fixed while phase amounts change. The lever rule determines the relative amounts from molar volumes.</figcaption>
            </figure>

            <div className="grid2">
              <ConceptCard title="Lever rule" tone="advanced">
                <p>If the overall molar volume is <Formula tex="\\bar V" />, while saturated liquid and vapour volumes are <Formula tex="V_l" /> and <Formula tex="V_g" />, the vapour fraction is</p>
                <Formula block tex="y_g=\\frac{\\bar V-V_l}{V_g-V_l},\\qquad y_l=\\frac{V_g-\\bar V}{V_g-V_l}" />
              </ConceptCard>
              <ConceptCard title="Maxwell equal-area construction" tone="advanced">
                <p>The unphysical oscillatory van der Waals loop is replaced by a horizontal coexistence line at <Formula tex="P_{sat}" /> such that</p>
                <Formula block tex="\\int_{V_l}^{V_g}[P(V,T)-P_{sat}]\\,dV=0" />
                <p>This enforces equal molar Gibbs energy of liquid and vapour.</p>
              </ConceptCard>
            </div>

            <ConceptCard title="Law of corresponding states" tone="formula">
              <p>Define reduced variables <Formula tex="P_r=P/P_c" />, <Formula tex="T_r=T/T_c" /> and <Formula tex="V_r=V_m/V_c" />. The reduced van der Waals equation becomes</p>
              <Formula block tex="\\left(P_r+\\frac{3}{V_r^2}\\right)(3V_r-1)=8T_r" />
              <p>It contains no substance-specific <Formula tex="a" /> or <Formula tex="b" />, illustrating why fluids at equal reduced conditions often show approximately corresponding behaviour.</p>
            </ConceptCard>

            <h3 className="subheading">Joule–Thomson effect and atmosphere</h3>
            <div className="grid2">
              <ConceptCard title="Throttling and inversion temperature" tone="warning">
                <p>The Joule–Thomson process is steady flow through a porous plug or valve at approximately constant enthalpy, not ordinary free expansion. The coefficient is <Formula tex="\\mu_{JT}=(\\partial T/\\partial P)_H" />.</p>
                <ul>
                  <li><Formula tex="\\mu_{JT}>0" />: cooling on pressure drop.</li>
                  <li><Formula tex="\\mu_{JT}<0" />: heating on pressure drop.</li>
                  <li><Formula tex="\\mu_{JT}=0" />: inversion curve.</li>
                </ul>
              </ConceptCard>
              <ConceptCard title="van der Waals estimate" tone="advanced">
                <p>At low pressure the upper inversion temperature is approximately</p>
                <Formula block tex="T_{i,\\max}\\approx\\frac{2a}{Rb}=2T_B=\\frac{27}{4}T_c" />
                <p>Hydrogen and helium must be precooled below their inversion temperatures before throttling produces cooling.</p>
              </ConceptCard>
            </div>

            <figure className="figure">
              <BarometricSVG />
              <figcaption>For an isothermal ideal atmosphere of molar mass <Formula tex="M" />, hydrostatic balance and the ideal-gas law give the barometric formula <Formula tex="P(h)=P_0e^{-Mgh/(RT)}" />.</figcaption>
            </figure>
          </section>
    </PartShell>
  );
}
