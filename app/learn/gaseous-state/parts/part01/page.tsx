"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";
import { ParticlePressureSVG, ManometerSVG } from "../../_visuals";

export default function Part01Page() {
  return (
    <PartShell part={1}>
<section className="section">
            <SectionTitle
              id="foundations"
              index="01"
              title="Foundations and pressure measurement"
              subtitle="State variables, absolute temperature, pressure units, hydrostatics and the logic of manometers."
            />

            <div className="grid2">
              <ConceptCard title="Four variables that specify a gas">
                <p>A macroscopic sample is described by amount <Formula tex="n" />, pressure <Formula tex="P" />, volume <Formula tex="V" /> and absolute temperature <Formula tex="T" />. For a gas in mechanical equilibrium, its volume is the accessible volume of the container.</p>
                <ul>
                  <li>Amount: moles, <Formula tex="n=m/M" />, or number of molecules, <Formula tex="N=nN_A" />.</li>
                  <li>Pressure: normal force per unit area, <Formula tex="P=F_\\perp/A" />.</li>
                  <li>Temperature: always use kelvin in gas equations.</li>
                  <li>State: an equilibrium condition fixed by a sufficient set of independent variables.</li>
                </ul>
              </ConceptCard>
              <ConceptCard title="Temperature conversion" tone="formula">
                <Formula block tex="T(\\mathrm K)=t(^{\\circ}\\mathrm C)+273.15" />
                <Formula block tex="t(^{\\circ}\\mathrm F)=\\frac95t(^{\\circ}\\mathrm C)+32" />
                <Formula block tex="\\frac{t_C}{100}=\\frac{T-273.15}{100}=\\frac{t_F-32}{180}" />
                <p>Kelvin and Celsius intervals have equal size: a change of 1 K equals a change of 1 °C.</p>
              </ConceptCard>
            </div>

            <div className="formulaRail">
              <div className="formulaChip"><Formula tex="1\\,\\mathrm{atm}=760\\,\\mathrm{torr}=760\\,\\mathrm{mmHg}" /><small>traditional atmosphere</small></div>
              <div className="formulaChip"><Formula tex="1\\,\\mathrm{bar}=10^5\\,\\mathrm{Pa}" /><small>IUPAC standard pressure</small></div>
              <div className="formulaChip"><Formula tex="1\\,\\mathrm{atm}=1.01325\\,\\mathrm{bar}" /><small>exact conversion</small></div>
            </div>

            <figure className="figure">
              <ParticlePressureSVG />
              <figcaption>Pressure is the time-averaged momentum transfer produced by enormous numbers of molecular impacts. In ordinary laboratory vessels gravity produces a negligible pressure difference over small heights, although it matters in the atmosphere and very tall columns.</figcaption>
            </figure>

            <div className="grid3">
              <ConceptCard title="Hydrostatic pressure" tone="formula">
                <p>In a stationary liquid of density <Formula tex="\\rho" />, the pressure difference between two levels separated vertically by <Formula tex="h" /> is</p>
                <Formula block tex="\\Delta P=\\rho gh" />
                <p>Only the vertical height difference matters; tube shape and inclination do not.</p>
              </ConceptCard>
              <ConceptCard title="Barometer">
                <p>A mercury barometer balances atmospheric pressure against a mercury column:</p>
                <Formula block tex="P_{\\rm atm}=\\rho_{\\rm Hg}gh" />
                <p>The space above the mercury is approximately a Torricellian vacuum.</p>
              </ConceptCard>
              <ConceptCard title="Equivalent liquid columns" tone="advanced">
                <p>Two columns exert equal hydrostatic pressure when</p>
                <Formula block tex="\\rho_1h_1=\\rho_2h_2" />
                <p>This relation permits conversion between cm Hg, cm water and other manometric liquids.</p>
              </ConceptCard>
            </div>

            <figure className="figure">
              <ManometerSVG />
              <figcaption>For an open-end manometer, decide the sign by comparing liquid levels: the side with the lower liquid surface has the greater pressure. For a closed-end manometer, the sealed limb is treated as a vacuum.</figcaption>
            </figure>

            <div className="grid2">
              <ConceptCard title="Open-end manometer rule" tone="formula">
                <ul>
                  <li>If the gas-side liquid level is lower: <Formula tex="P_g=P_{\\rm atm}+\\rho gh" />.</li>
                  <li>If the gas-side level is higher: <Formula tex="P_g=P_{\\rm atm}-\\rho gh" />.</li>
                  <li>If levels coincide: <Formula tex="P_g=P_{\\rm atm}" />.</li>
                </ul>
              </ConceptCard>
              <ConceptCard title="Trapped gas separated by a liquid plug" tone="advanced">
                <p>For a uniform tube, gas volume is proportional to trapped length. If a mercury plug of length <Formula tex="L" /> is inclined by angle <Formula tex="\\theta" /> to the horizontal, its pressure head is <Formula tex="L\\sin\\theta" /> cm Hg.</p>
                <Formula block tex="P_1\\ell_1=P_2\\ell_2\\qquad(T=\\text{constant})" />
              </ConceptCard>
            </div>

            <ConceptCard title="Precision corrections" tone="warning">
              <p>Do not say that every gas can be liquefied merely by compression. A gas can be liquefied by pressure only when its temperature is below its critical temperature. Also, random thermal motion of molecules is not Brownian motion; Brownian motion is the erratic motion of larger suspended particles caused by molecular impacts.</p>
            </ConceptCard>
          </section>
    </PartShell>
  );
}
