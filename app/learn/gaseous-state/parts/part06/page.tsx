"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";
import { CompressibilitySVG } from "../../_visuals";

export default function Part06Page() {
  return (
    <PartShell part={6}>
<section className="section">
            <SectionTitle
              id="real-gases"
              index="06"
              title="Real gases and equations of state"
              subtitle="Compressibility factor, attraction-repulsion competition, van der Waals corrections and virial behaviour."
            />

            <div className="grid2">
              <ConceptCard title="Compressibility factor" tone="formula">
                <Formula block tex="Z=\\frac{PV_m}{RT}=\\frac{PV}{nRT}" />
                <ul>
                  <li><Formula tex="Z=1" />: ideal-gas value.</li>
                  <li><Formula tex="Z<1" />: attractions dominate.</li>
                  <li><Formula tex="Z>1" />: repulsion/excluded volume dominates.</li>
                </ul>
              </ConceptCard>
              <ConceptCard title="When gases approach ideality">
                <p>Low pressure makes intermolecular separation large. High temperature makes thermal kinetic energy large relative to attractive potential energy. Therefore real gases approach ideal behaviour most closely at low <Formula tex="P" /> and high <Formula tex="T" />.</p>
              </ConceptCard>
            </div>

            <figure className="figure">
              <CompressibilitySVG />
              <figcaption>All gases approach <Formula tex="Z=1" /> as <Formula tex="P\\to0" />. Many easily liquefiable gases first show negative deviation and then positive deviation. Hydrogen and helium at ordinary temperatures often show positive deviation over a broad pressure range.</figcaption>
            </figure>

            <h3 className="subheading">van der Waals equation</h3>
            <ConceptCard title="Two physical corrections" tone="advanced">
              <p><strong>Excluded volume:</strong> molecules have finite size, so the translational free volume is smaller than the vessel volume. For <Formula tex="n" /> moles, use <Formula tex="V-nb" />.</p>
              <p><strong>Attraction:</strong> molecules near a wall experience a net inward pull, so measured pressure is lower than the ideal collision pressure. The pressure correction scales as density squared: <Formula tex="a(n/V)^2" />.</p>
              <Formula block tex="\\left(P+a\\frac{n^2}{V^2}\\right)(V-nb)=nRT" />
              <Formula block tex="\\left(P+\\frac{a}{V_m^2}\\right)(V_m-b)=RT" />
            </ConceptCard>

            <div className="grid3">
              <ConceptCard title="Meaning of a">
                <p><Formula tex="a" /> measures the strength of cohesive attractions. Larger <Formula tex="a" /> usually correlates with easier liquefaction and a higher critical temperature.</p>
              </ConceptCard>
              <ConceptCard title="Meaning of b">
                <p><Formula tex="b" /> is an excluded-volume parameter, not simply the molecular volume. For hard spheres in the dilute limit it is approximately four times the actual molecular volume per mole.</p>
              </ConceptCard>
              <ConceptCard title="Low-density expansion" tone="advanced">
                <Formula block tex="Z\\approx1+\\frac{1}{V_m}\\left(b-\\frac{a}{RT}\\right)+\\cdots" />
                <p>This immediately identifies the van der Waals Boyle temperature <Formula tex="T_B=a/(Rb)" />.</p>
              </ConceptCard>
            </div>

            <h3 className="subheading">Virial equation and limitations</h3>
            <div className="grid2">
              <ConceptCard title="Virial forms" tone="formula">
                <Formula block tex="Z=1+\\frac{B(T)}{V_m}+\\frac{C(T)}{V_m^2}+\\cdots" />
                <Formula block tex="Z=1+B'(T)P+C'(T)P^2+\\cdots" />
                <p>Virial coefficients are temperature-dependent and encode two-body, three-body and higher interactions.</p>
              </ConceptCard>
              <ConceptCard title="Why one cubic equation is not universal" tone="warning">
                <p>The van der Waals equation captures the right qualitative ideas but is not quantitatively accurate for every gas or near all phase boundaries. Its constants are treated as fixed, it predicts <Formula tex="Z_c=3/8" /> for every substance, and it represents repulsion only through excluded volume.</p>
              </ConceptCard>
            </div>

            <table className="dataTable">
              <thead><tr><th>Equation</th><th>Representative form</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>Berthelot</td><td><Formula tex="\\left(P+\\frac{a}{TV_m^2}\\right)(V_m-b)=RT" /></td><td>Adds temperature dependence to attraction.</td></tr>
                <tr><td>Dieterici</td><td><Formula tex="P(V_m-b)=RT\\exp[-a/(RTV_m)]" /></td><td>Alternative exponential attraction model.</td></tr>
                <tr><td>Virial</td><td><Formula tex="Z=1+B'P+C'P^2+\\cdots" /></td><td>Systematic low-density representation using measured coefficients.</td></tr>
              </tbody>
            </table>
          </section>
    </PartShell>
  );
}
