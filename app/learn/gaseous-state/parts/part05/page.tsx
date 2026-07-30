"use client";

import { PartShell, SectionTitle, Formula, ConceptCard } from "../../_core";
import { MaxwellSVG, CollisionSVG } from "../../_visuals";

export default function Part05Page() {
  return (
    <PartShell part={5}>
<section className="section">
            <SectionTitle
              id="molecular-motion"
              index="05"
              title="Molecular speeds and collision parameters"
              subtitle="Maxwell distribution, characteristic speeds, mean free path, wall flux and Knudsen effusion."
            />

            <div className="formulaRail">
              <div className="formulaChip"><Formula tex="c_{mp}=\\sqrt{\\frac{2RT}{M}}" /><small>most probable speed</small></div>
              <div className="formulaChip"><Formula tex="\\bar c=\\sqrt{\\frac{8RT}{\\pi M}}" /><small>mean speed</small></div>
              <div className="formulaChip"><Formula tex="c_{rms}=\\sqrt{\\frac{3RT}{M}}" /><small>root-mean-square speed</small></div>
            </div>
            <div className="note"><Formula tex="c_{rms}:\\bar c:c_{mp}=\\sqrt3:\\sqrt{8/\\pi}:\\sqrt2" /> and therefore <Formula tex="c_{rms}>\\bar c>c_{mp}" />.</div>

            <figure className="figure">
              <MaxwellSVG />
              <figcaption>The Maxwell distribution broadens and shifts to larger speeds as temperature rises. The total area remains unity. For larger molar mass at the same temperature, the curve shifts left and becomes taller.</figcaption>
            </figure>

            <ConceptCard title="Maxwell speed distribution" tone="advanced">
              <Formula block tex="f(c)=4\\pi\\left(\\frac{M}{2\\pi RT}\\right)^{3/2}c^2e^{-Mc^2/(2RT)}" />
              <p><Formula tex="f(c)dc" /> is the fraction of molecules with speeds between <Formula tex="c" /> and <Formula tex="c+dc" />. The peak follows from <Formula tex="df/dc=0" /> and occurs at <Formula tex="c_{mp}" />.</p>
            </ConceptCard>

            <h3 className="subheading">Collision diameter, frequency and mean free path</h3>
            <figure className="figure">
              <CollisionSVG />
              <figcaption>A molecule of collision diameter <Formula tex="d" /> sweeps a collision cylinder. Correcting for motion of all molecules introduces the factor <Formula tex="\\sqrt2" /> for identical molecules.</figcaption>
            </figure>

            <div className="grid2">
              <ConceptCard title="Single-molecule collision frequency" tone="formula">
                <Formula block tex="z_1=\\sqrt2\\,\\pi d^2\\left(\\frac NV\\right)\\bar c" />
                <p>It is the mean number of binary collisions made by one molecule per unit time.</p>
              </ConceptCard>
              <ConceptCard title="Mean free path" tone="formula">
                <Formula block tex="\\lambda=\\frac{\\bar c}{z_1}=\\frac1{\\sqrt2\\pi d^2(N/V)}=\\frac{k_BT}{\\sqrt2\\pi d^2P}" />
                <p>Thus <Formula tex="\\lambda" /> increases with temperature at fixed pressure and decreases with pressure at fixed temperature.</p>
              </ConceptCard>
            </div>

            <div className="grid2">
              <ConceptCard title="Wall collision flux" tone="advanced">
                <p>The number of molecules striking unit wall area per unit time is</p>
                <Formula block tex="J_w=\\frac14\\left(\\frac NV\\right)\\bar c" />
                <p>For an orifice of area <Formula tex="A" />, the ideal molecular effusion rate is <Formula tex="\\dot N=AJ_w" />.</p>
              </ConceptCard>
              <ConceptCard title="Knudsen condition" tone="warning">
                <p>Simple effusion theory requires an orifice dimension much smaller than the mean free path and a thin opening. A long capillary introduces transmission corrections and becomes a molecular-flow problem.</p>
              </ConceptCard>
            </div>
          </section>
    </PartShell>
  );
}
