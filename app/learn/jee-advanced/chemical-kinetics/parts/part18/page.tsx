"use client";

import { PartShell, ChapterSection, ModifiedProblemAtlas } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart18() {
  return (
    <PartShell
      part={18}
      title={"Additional Modified Problem Bank"}
      description={"Ninety-six additional solved problems with altered numerical data and complete calculations."}
    >
<ChapterSection
            id="modified-bank"
            index="19"
            eyebrow="Complete numerical reinforcement"
            title="96 additional modified solved problems"
            intro={<>The source problem families are rebuilt with new numerical data and fully checked calculations. Together with the 35 worked examples above, this produces a 131-example bank spanning rate stoichiometry, integrated laws, order determination, Arrhenius analysis, complex reactions and enzyme kinetics.</>}
          >
            <ModifiedProblemAtlas />
          </ChapterSection>
    </PartShell>
  );
}
