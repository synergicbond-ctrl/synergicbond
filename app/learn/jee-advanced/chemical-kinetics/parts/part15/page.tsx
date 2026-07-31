"use client";

import { ChapterSection, ConceptCard, FormulaCard, IntegratedSourcePages, KB, PartShell, ReferenceExpansion } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart15() {
  return (
    <PartShell part={15} title={"Reaction Dynamics, Photochemistry and Isotope Effects"} description={"Atkins-derived reaction-dynamics material, photochemical kinetics and kinetic isotope effects."}>
      <ChapterSection id="dynamics-photo-isotope" index="15" eyebrow="Reaction dynamics" title="Photochemical kinetics, isotope effects and molecular energy flow" intro={<>This source block extends conventional JEE kinetics into reaction dynamics: how energy is deposited, redistributed and channelled into products, and how isotopic substitution or light absorption changes the observed rate.</>}>
  <div className="grid gap-5 xl:grid-cols-3"><ConceptCard title="Photochemical initiation" tone="cyan"><p>Absorption creates an electronically excited state. The quantum yield counts specified events per photon absorbed and may exceed unity in chain reactions.</p></ConceptCard><ConceptCard title="Kinetic isotope effect" tone="violet"><p>A primary normal isotope effect supports involvement of the substituted bond in the rate-controlling coordinate, but it is evidence rather than unique proof.</p></ConceptCard><ConceptCard title="Energy disposal" tone="amber"><p>Translation, rotation, vibration and electronic excitation compete as repositories for reaction energy; product-state distributions can therefore reveal pathway information.</p></ConceptCard></div>
  <FormulaCard title="Primary isotope effect"><KB>{String.raw`\mathrm{KIE}=\frac{k_H}{k_D}`}</KB></FormulaCard>
</ChapterSection>
      <ReferenceExpansion sheets={[49]} />
      <IntegratedSourcePages start={190} end={204} />
    </PartShell>
  );
}
