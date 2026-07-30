"use client";

import { PartShell, ChapterSection, TextbookExtensionAtlas } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart19() {
  return (
    <PartShell
      part={19}
      title={"Fifty Textbook Extension Sheets"}
      description={"Print-formatted advanced theory sheets with original dark-background visual systems."}
    >
<ChapterSection
            id="textbook-extension"
            index="20"
            eyebrow="Original advanced synthesis"
            title="Fifty print-formatted textbook extension sheets"
            intro={<>These sheets add an original, paraphrased layer of physical-chemistry depth corresponding to the advanced material represented in the uploaded compilation: rigorous assumptions, limiting cases, mechanism tests, reaction dynamics, catalysis, enzyme kinetics, photochemistry, isotope effects and electron transfer. Each sheet contains a dark-background SVG and is forced onto its own page in print/PDF output.</>}
          >
            <TextbookExtensionAtlas />
          </ChapterSection>
    </PartShell>
  );
}
