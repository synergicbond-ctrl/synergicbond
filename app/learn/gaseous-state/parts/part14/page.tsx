"use client";

import { PartShell, SectionTitle } from "../../_core";
import { VisualFrame, SpeedHierarchySVG, MaxwellMassTemperatureSVG, CollisionFluxSVG, PotentialCurveSVG, VirialFamilySVG, JouleThomsonSVG, PayloadSVG, CoverageMapSVG } from "../../_visuals";

export default function Part14Page() {
  return (
    <PartShell part={14}>
      <section className="section">
        <SectionTitle id="visual-lab-14" index="14" title="Dark visual laboratory II" subtitle="Scalable, labelled inline SVG plates built specifically for the dark Synergic Bond interface." />
        <div className="visualGallery">
          <VisualFrame title="Molecular-speed hierarchy" subtitle="Most probable, average and rms speeds"><SpeedHierarchySVG /></VisualFrame>
          <VisualFrame title="Maxwell distribution families" subtitle="Temperature and molar-mass effects"><MaxwellMassTemperatureSVG /></VisualFrame>
          <VisualFrame title="Collision and wall flux" subtitle="Collision cylinder, mean free path and impingement"><CollisionFluxSVG /></VisualFrame>
          <VisualFrame title="Intermolecular potential" subtitle="Repulsive wall, attractive well and equilibrium distance"><PotentialCurveSVG /></VisualFrame>
          <VisualFrame title="Virial and Boyle temperature" subtitle="Compressibility-factor families"><VirialFamilySVG /></VisualFrame>
          <VisualFrame title="Joule–Thomson inversion" subtitle="Cooling and heating regions in the P–T plane"><JouleThomsonSVG /></VisualFrame>
          <VisualFrame title="Balloon payload" subtitle="Buoyancy, lifting-gas mass and useful load"><PayloadSVG /></VisualFrame>
          <VisualFrame title="Complete source-page map" subtitle="Coverage ledger for all 169 uploaded pages"><CoverageMapSVG /></VisualFrame>
        </div>
      </section>
    </PartShell>
  );
}
