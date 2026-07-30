"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";

export default function Part04Page() {
  return (
    <PartShell part={4}>
<section className="section">
            <SectionTitle
              id="kinetic-theory"
              index="04"
              title="Kinetic theory of gases"
              subtitle="Microscopic assumptions, pressure derivation, equipartition and the physical meaning of temperature."
            />

            <div className="grid2">
              <ConceptCard title="Ideal kinetic model">
                <ol>
                  <li>A gas contains a huge number of molecules whose own volume is negligible compared with the container volume.</li>
                  <li>Molecules move randomly in straight lines between collisions.</li>
                  <li>Intermolecular forces are negligible except during brief collisions.</li>
                  <li>Molecule-molecule and molecule-wall collisions are perfectly elastic.</li>
                  <li>Collision duration is negligible compared with free-flight time.</li>
                </ol>
              </ConceptCard>
              <ConceptCard title="Important correction" tone="warning">
                <p>Continuous random molecular motion is not called Brownian motion. Brownian motion refers to the irregular motion of observable suspended particles produced by molecular bombardment.</p>
                <p>Gravity is neglected only when the gravitational potential change across the vessel is tiny compared with thermal energy.</p>
              </ConceptCard>
            </div>

            <h3 className="subheading">Derivation of the kinetic-gas equation</h3>
            <ConceptCard title="Momentum balance in a cube" tone="advanced">
              <p>For a molecule of mass <Formula tex="m" /> with x-component <Formula tex="c_x" /> in a cube of side <Formula tex="L" />, a collision with a wall changes its x-momentum by <Formula tex="2mc_x" />. Successive impacts on the same wall are separated by <Formula tex="2L/c_x" />, so its average force contribution is <Formula tex="mc_x^2/L" />.</p>
              <p>Summing over all molecules and dividing by wall area <Formula tex="L^2" />:</p>
              <Formula block tex="P=\\frac{m}{V}\\sum_{i=1}^{N}c_{xi}^{2}" />
              <p>Isotropy gives <Formula tex="\\overline{c_x^2}=\\overline{c_y^2}=\\overline{c_z^2}=\\overline{c^2}/3" />, hence</p>
              <Formula block tex="PV=\\frac13Nm\\overline{c^2}=\\frac13Nm c_{\\rm rms}^{2}" />
            </ConceptCard>

            <div className="formulaRail">
              <div className="formulaChip"><Formula tex="P=\\frac13\\rho c_{\\rm rms}^2" /><small>kinetic pressure equation</small></div>
              <div className="formulaChip"><Formula tex="\\frac12m\\overline{c^2}=\\frac32k_BT" /><small>mean translational KE per molecule</small></div>
              <div className="formulaChip"><Formula tex="U_{trans}=\\frac32nRT" /><small>monatomic translational energy</small></div>
            </div>

            <div className="grid3">
              <ConceptCard title="Temperature meaning">
                <p>Absolute temperature measures mean translational kinetic energy. Different gases at the same temperature have the same mean translational kinetic energy, not the same mean speed.</p>
              </ConceptCard>
              <ConceptCard title="Degrees of freedom" tone="advanced">
                <p>Equipartition assigns <Formula tex="\\tfrac12k_BT" /> per active quadratic degree of freedom. Translational modes are always active; rotational and vibrational contributions depend on molecular structure and temperature.</p>
              </ConceptCard>
              <ConceptCard title="Mode correction" tone="warning">
                <p>It is incorrect to claim that gas molecules have only translational motion at low temperature. Monatomic gases have no molecular rotation or vibration; polyatomic gases can have rotational modes active even at ordinary temperatures, while vibrations may be frozen out quantum mechanically.</p>
              </ConceptCard>
            </div>
          </section>
    </PartShell>
  );
}
