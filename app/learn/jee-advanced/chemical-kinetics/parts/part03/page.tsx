"use client";

import { PartShell, ChapterSection, ConceptCard, DataTable, ExperimentalMethodsFigure, FigureFrame, K } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart03() {
  return (
    <PartShell
      part={3}
      title={"Experimental Measurement of Rate"}
      description={"Chemical, pressure, volume, optical and instrumental approaches used to monitor reaction progress."}
    >
<ChapterSection
            id="measurement"
            index="04"
            eyebrow="Laboratory kinetics"
            title="How reaction rates are measured"
            intro={<>A kinetic experiment does not usually count molecular events directly. It records a physical signal, converts that signal to concentration or extent using a calibration or stoichiometric relation, and then differentiates or fits the resulting time profile.</>}
          >
            <FigureFrame title="Common experimental observables" caption={<>The best method is selective, fast relative to the reaction, minimally perturbing and accurately calibrated.</>}>
              <ExperimentalMethodsFigure />
            </FigureFrame>
            <DataTable
              headers={["Method", "Signal followed", "Typical use", "Critical precaution"]}
              rows={[
                ["Titrimetric sampling", "volume of titrant", "acid/base or redox composition", "quench immediately after withdrawal"],
                ["Manometry", "partial or total pressure", "gas-phase reactions", "hold temperature and volume fixed"],
                ["Gasometry", "gas volume", "gas evolution/consumption", "usually hold pressure and temperature fixed"],
                ["Spectrophotometry", "absorbance", "coloured/UV-active species", <><K>{String.raw`A=\varepsilon bc`}</K> must remain linear</>],
                ["Polarimetry", "optical rotation", "sucrose inversion and chiral reactions", "rotation is additive and temperature-sensitive"],
                ["Conductometry", "conductance", "ionic reactions", "account for ionic mobility and dilution"],
                ["Mass change", "balance reading", "gas loss or uptake", "avoid evaporation and buoyancy errors"],
              ]}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Differential versus integral acquisition" tone="cyan">
                <p><strong className="text-white">Differential:</strong> estimate the local slope of a concentration-time curve. It is sensitive to noise.</p>
                <p><strong className="text-white">Integral:</strong> fit the full concentration-time data to a candidate integrated law. This usually uses information more efficiently.</p>
              </ConceptCard>
              <ConceptCard title="Initial-rate strategy" tone="violet">
                <p>Measure the earliest reliable slope before concentrations change appreciably. Repeat with different initial compositions to determine exponents in the rate law.</p>
                <p>This method avoids complications from products, reverse reaction and long-time side reactions.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Aliquot, quench and analyse" tone="amber">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Withdraw a small, representative sample at a known time.</li>
                <li>Stop or drastically slow the reaction by cooling, dilution, neutralisation or reagent removal.</li>
                <li>Analyse the quenched sample by titration or spectroscopy.</li>
                <li>Correct for any concentration change introduced by the quench.</li>
              </ol>
            </ConceptCard>
          </ChapterSection>
    </PartShell>
  );
}
