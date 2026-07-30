"use client";

import { PartShell, SectionTitle } from "../../_core";
import { VisualFrame, PressureUnitSVG, InclinedManometerSVG, GraphTransformationAtlasSVG, ContainerTypesSVG, MixtureLawsSVG, VapourEquilibriumSVG, RelativeHumiditySVG, EffusionSVG, KineticCubeSVG } from "../../_visuals";

export default function Part13Page() {
  return (
    <PartShell part={13}>
      <section className="section">
        <SectionTitle id="visual-lab-13" index="13" title="Dark visual laboratory I" subtitle="Scalable, labelled inline SVG plates built specifically for the dark Synergic Bond interface." />
        <div className="visualGallery">
          <VisualFrame title="Pressure-unit ladder" subtitle="atm, torr, bar, pascal and liquid-column language"><PressureUnitSVG /></VisualFrame>
          <VisualFrame title="Inclined manometer" subtitle="Separate pressure head from trapped-gas length"><InclinedManometerSVG /></VisualFrame>
          <VisualFrame title="Gas-law graph atlas" subtitle="Eight transformed plots derived from equations"><GraphTransformationAtlasSVG /></VisualFrame>
          <VisualFrame title="Mechanical container models" subtitle="Rigid, piston, balloon and elastic tyre constraints"><ContainerTypesSVG /></VisualFrame>
          <VisualFrame title="Dalton and Amagat" subtitle="Partial pressure versus partial volume"><MixtureLawsSVG /></VisualFrame>
          <VisualFrame title="Liquid–vapour equilibrium" subtitle="Dynamic equilibrium and boiling criterion"><VapourEquilibriumSVG /></VisualFrame>
          <VisualFrame title="Relative humidity and dew point" subtitle="Actual vapour pressure against saturation curve"><RelativeHumiditySVG /></VisualFrame>
          <VisualFrame title="Molecular effusion" subtitle="Pinhole transport and light-gas enrichment"><EffusionSVG /></VisualFrame>
          <VisualFrame title="Kinetic pressure derivation" subtitle="Momentum transfer in a cubic vessel"><KineticCubeSVG /></VisualFrame>
        </div>
      </section>
    </PartShell>
  );
}
