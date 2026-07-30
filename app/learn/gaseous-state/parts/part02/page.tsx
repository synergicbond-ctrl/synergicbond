"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";
import { GasLawGraphsSVG } from "../../_visuals";

export default function Part02Page() {
  return (
    <PartShell part={2}>
<section className="section">
            <SectionTitle
              id="gas-laws"
              index="02"
              title="Gas laws and the ideal-gas equation"
              subtitle="Proportionalities, graph transformations, standard states, density relations and variable-mass systems."
            />

            <div className="grid2">
              <ConceptCard title="Boyle law" tone="formula">
                <p>For a fixed amount of gas at constant temperature,</p>
                <Formula block tex="P\\propto \\frac1V,\\qquad PV=\\text{constant}" />
                <Formula block tex="P_1V_1=P_2V_2" />
                <p>The <Formula tex="P-V" /> isotherm is a rectangular hyperbola; its slope is <Formula tex="dP/dV=-P/V" />.</p>
              </ConceptCard>
              <ConceptCard title="Charles law" tone="formula">
                <p>At fixed pressure and amount,</p>
                <Formula block tex="V\\propto T,\\qquad \\frac{V_1}{T_1}=\\frac{V_2}{T_2}" />
                <p>The linear relation is exact for an ideal gas only when temperature is in kelvin.</p>
              </ConceptCard>
              <ConceptCard title="Gay-Lussac law" tone="formula">
                <p>At fixed volume and amount,</p>
                <Formula block tex="P\\propto T,\\qquad \\frac{P_1}{T_1}=\\frac{P_2}{T_2}" />
              </ConceptCard>
              <ConceptCard title="Avogadro law" tone="formula">
                <p>At fixed temperature and pressure,</p>
                <Formula block tex="V\\propto n,\\qquad \\frac{V_1}{n_1}=\\frac{V_2}{n_2}" />
                <p>Equal volumes of ideal gases at the same <Formula tex="T" /> and <Formula tex="P" /> contain equal numbers of molecules.</p>
              </ConceptCard>
            </div>

            <figure className="figure">
              <GasLawGraphsSVG />
              <figcaption>Canonical plots. A transformed plot can be inferred algebraically: write the governing equation in the form <Formula tex="y=mx+c" />, <Formula tex="xy=k" />, or an appropriate power relation before sketching.</figcaption>
            </figure>

            <div className="formulaRail">
              <div className="formulaChip"><Formula tex="\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}" /><small>combined gas law, fixed n</small></div>
              <div className="formulaChip"><Formula tex="PV=nRT" /><small>ideal-gas equation</small></div>
              <div className="formulaChip"><Formula tex="R=8.314462618\\,\\mathrm{J\\,mol^{-1}K^{-1}}" /><small>SI gas constant</small></div>
            </div>

            <table className="dataTable">
              <thead><tr><th>Pressure-volume units</th><th>Convenient value of R</th><th>Use</th></tr></thead>
              <tbody>
                <tr><td>L·atm</td><td>0.082057 L atm mol⁻¹ K⁻¹</td><td>Atmospheric-pressure calculations</td></tr>
                <tr><td>L·bar</td><td>0.0831446 L bar mol⁻¹ K⁻¹</td><td>IUPAC standard-state calculations</td></tr>
                <tr><td>J = Pa·m³</td><td>8.31446 J mol⁻¹ K⁻¹</td><td>Energy and SI derivations</td></tr>
                <tr><td>cal</td><td>1.98720 cal mol⁻¹ K⁻¹</td><td>Thermochemical forms</td></tr>
              </tbody>
            </table>

            <div className="grid2">
              <ConceptCard title="Density and molar mass" tone="formula">
                <Formula block tex="PV=\\frac{m}{M}RT\\quad\\Rightarrow\\quad d=\\frac{PM}{RT}" />
                <Formula block tex="M=\\frac{dRT}{P}" />
                <p>At fixed temperature, density is proportional to pressure. At fixed pressure, density varies inversely with absolute temperature.</p>
              </ConceptCard>
              <ConceptCard title="Standard-state precision" tone="warning">
                <p>IUPAC STP uses <Formula tex="T=273.15\\,\\mathrm K" /> and <Formula tex="P=100\\,\\mathrm{kPa}=1\\,\\mathrm{bar}" />, giving <Formula tex="V_m=22.71095\\,\\mathrm L\\,mol^{-1}" /> for an ideal gas.</p>
                <p>The older convention <Formula tex="P=1\\,\\mathrm{atm}" /> gives <Formula tex="V_m=22.41397\\,\\mathrm L\\,mol^{-1}" />. State the convention used.</p>
              </ConceptCard>
            </div>

            <h3 className="subheading">How to read unfamiliar gas-law graphs</h3>
            <div className="grid3">
              <ConceptCard title="Power transformations">
                <p>If <Formula tex="PV=k" />, then <Formula tex="PV^2=kV" /> is a straight line through the origin when <Formula tex="PV^2" /> is plotted against <Formula tex="V" />. Similarly, <Formula tex="P/V" /> plotted against <Formula tex="1/V^2" /> is linear.</p>
              </ConceptCard>
              <ConceptCard title="Logarithmic plots" tone="advanced">
                <Formula block tex="PV=k\\Rightarrow \\log P=-\\log V+\\log k" />
                <p>Thus the slope of <Formula tex="\\log P" /> versus <Formula tex="\\log V" /> is −1. More generally, <Formula tex="y=kx^m" /> gives slope <Formula tex="m" /> on a log-log plot.</p>
              </ConceptCard>
              <ConceptCard title="Absolute-zero extrapolation" tone="warning">
                <p>Extending the ideal-gas straight line to zero volume suggests −273.15 °C. Real gases condense before reaching that extrapolated point, so a negative gas volume is not a physical prediction.</p>
              </ConceptCard>
            </div>

            <h3 className="subheading">Containers and changing amount</h3>
            <div className="grid3">
              <ConceptCard title="Rigid vessel">
                <p><Formula tex="V" /> is fixed. Therefore <Formula tex="P\\propto nT" />. A closed rigid cylinder can burst when its internal pressure exceeds its rated limit.</p>
              </ConceptCard>
              <ConceptCard title="Flexible balloon">
                <p>For a thin, freely flexible membrane, internal pressure is approximately the external pressure plus a small surface-tension correction. Heating mainly changes volume until the elastic limit is reached.</p>
              </ConceptCard>
              <ConceptCard title="Open rigid vessel">
                <p>At fixed external pressure and vessel volume, heating expels gas:</p>
                <Formula block tex="\\frac{n_1}{T_1}=\\frac{n_2}{T_2}" />
              </ConceptCard>
            </div>
          </section>
    </PartShell>
  );
}
