"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";

export default function Part03Page() {
  return (
    <PartShell part={3}>
<section className="section">
            <SectionTitle
              id="mixtures"
              index="03"
              title="Gas mixtures, connected vessels and vapours"
              subtitle="Partial pressure, partial volume, vapour-liquid equilibrium, humidity, dew point and effusion."
            />

            <div className="grid2">
              <ConceptCard title="Dalton law of partial pressures" tone="formula">
                <p>For a non-reacting ideal-gas mixture at common <Formula tex="T" /> and <Formula tex="V" />,</p>
                <Formula block tex="P_{\\rm tot}=\\sum_i P_i,\\qquad P_i=\\frac{n_iRT}{V}=x_iP_{\\rm tot}" />
                <p>Partial pressure is the pressure a component would exert if it alone occupied the mixture volume at the same temperature.</p>
              </ConceptCard>
              <ConceptCard title="Amagat law of partial volumes" tone="formula">
                <p>At common <Formula tex="T" /> and <Formula tex="P" />,</p>
                <Formula block tex="V_{\\rm tot}=\\sum_i V_i,\\qquad V_i=x_iV_{\\rm tot}" />
                <p>For ideal gases, mole fraction equals both pressure fraction and partial-volume fraction.</p>
              </ConceptCard>
            </div>

            <ConceptCard title="Connected vessels at different temperatures" tone="advanced">
              <p>At equilibrium, connected volumes share one final pressure. If vessel <Formula tex="i" /> has volume <Formula tex="V_i" /> and temperature <Formula tex="T_i" />, conservation of moles gives</p>
              <Formula block tex="n_{\\rm tot}=\\sum_i\\frac{PV_i}{RT_i}\\quad\\Rightarrow\\quad P=\\frac{n_{\\rm tot}R}{\\sum_i V_i/T_i}" />
              <p>Do not apply a single combined-gas-law ratio to the entire assembly unless every part has the same final temperature.</p>
            </ConceptCard>

            <h3 className="subheading">Vapour pressure and humidity</h3>
            <div className="grid3">
              <ConceptCard title="Dynamic equilibrium">
                <p>In a closed vessel containing liquid and vapour, evaporation and condensation continue simultaneously. At equilibrium their rates are equal, not zero.</p>
              </ConceptCard>
              <ConceptCard title="Saturated vapour pressure" tone="formula">
                <p>At a given temperature, the equilibrium vapour pressure of a pure liquid is independent of the amounts of liquid and vapour, provided both phases remain present.</p>
              </ConceptCard>
              <ConceptCard title="Boiling condition" tone="formula">
                <Formula block tex="P_{\\rm vap}(T_b)=P_{\\rm external}" />
                <p>Reducing external pressure lowers boiling point; increasing pressure raises it.</p>
              </ConceptCard>
            </div>

            <div className="formulaRail">
              <div className="formulaChip"><Formula tex="\\mathrm{RH}=\\frac{p_{\\mathrm{H_2O}}}{p^*_{\\mathrm{H_2O}}}\\times100\\%" /><small>relative humidity</small></div>
              <div className="formulaChip"><Formula tex="\\ln\\frac{P_2}{P_1}=-\\frac{\\Delta H_{vap}}R\\left(\\frac1{T_2}-\\frac1{T_1}\\right)" /><small>Clausius–Clapeyron</small></div>
              <div className="formulaChip"><Formula tex="P_{\\rm dry}=P_{\\rm total}-P^*_{\\mathrm{H_2O}}" /><small>gas collected over water</small></div>
            </div>

            <div className="grid2">
              <ConceptCard title="Dew point" tone="advanced">
                <p>The dew point is the temperature at which the existing water-vapour partial pressure equals the saturation vapour pressure. On isothermal compression, dew begins when <Formula tex="p_{\\mathrm{H_2O}}" /> reaches <Formula tex="p^*_{\\mathrm{H_2O}}" />.</p>
              </ConceptCard>
              <ConceptCard title="Condensation accounting" tone="warning">
                <p>After condensation begins at fixed temperature, the remaining vapour pressure stays at the saturation value while excess vapour converts to liquid. Do not continue scaling vapour pressure beyond saturation.</p>
              </ConceptCard>
            </div>

            <h3 className="subheading">Diffusion and effusion</h3>
            <div className="grid2">
              <ConceptCard title="Definitions">
                <p><strong>Diffusion</strong> is spontaneous mixing driven by molecular motion and concentration gradients. <strong>Effusion</strong> is escape through an orifice much smaller than the mean free path.</p>
              </ConceptCard>
              <ConceptCard title="Graham law" tone="formula">
                <Formula block tex="\\frac{r_1}{r_2}=\\sqrt{\\frac{M_2}{M_1}}=\\sqrt{\\frac{d_2}{d_1}}" />
                <p>The comparison requires the same temperature, pressure geometry and orifice conditions.</p>
              </ConceptCard>
            </div>

            <ConceptCard title="Successive effusion enrichment" tone="advanced">
              <p>For two gases A and B, the instantaneous effusate ratio is enriched in the lighter gas:</p>
              <Formula block tex="\\left(\\frac{n_A}{n_B}\\right)_{\\rm effusate}=\\left(\\frac{n_A}{n_B}\\right)_{\\rm vessel}\\sqrt{\\frac{M_B}{M_A}}" />
              <p>For finite leakage from a well-mixed constant-volume vessel, each component decays exponentially with a rate constant proportional to <Formula tex="1/\\sqrt{M_i}" />; a linear pressure-loss assumption is generally not exact.</p>
            </ConceptCard>
          </section>
    </PartShell>
  );
}
