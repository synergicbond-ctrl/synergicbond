"use client";

import { ChapterSection, ConceptCard, EnzymeFigure, ExamTrap, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, PartShell, ReferenceExpansion } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart09() {
  return (
    <PartShell part={9} title={"Enzyme Kinetics and Michaelis–Menten Analysis"} description={"Steady-state enzyme kinetics, saturation, limiting orders and linear representations."}>
      <ChapterSection id="enzyme-complete" index="09" eyebrow="Biochemical kinetics" title="Michaelis–Menten kinetics from mechanism to plots" intro={<>The source pages derive the enzyme rate law from a steady-state enzyme–substrate complex and then interpret the saturation curve. The key is to distinguish the total enzyme concentration from the concentration of free enzyme.</>}>
  <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Steady-state derivation"><KB>{String.raw`E+S\underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}}ES\overset{k_2}{\longrightarrow}E+P`}</KB><KB>{String.raw`v_0=\frac{V_{\max}[S]}{K_M+[S]},\qquad V_{\max}=k_2[E]_T,\qquad K_M=\frac{k_{-1}+k_2}{k_1}`}</KB></FormulaCard>
    <ConceptCard title="Limiting kinetic orders" tone="cyan"><p>When <K>{String.raw`[S]\ll K_M`}</K>, <K>{String.raw`v_0\approx(V_{\max}/K_M)[S]`}</K>: first order in substrate.</p><p>When <K>{String.raw`[S]\gg K_M`}</K>, <K>{String.raw`v_0\approx V_{\max}`}</K>: zero order in substrate because the enzyme is saturated.</p></ConceptCard>
  </div>
  <FigureFrame title="Enzyme saturation and linear analysis" caption="The same kinetic constants control the hyperbolic saturation curve and reciprocal linear forms."><EnzymeFigure /></FigureFrame>
  <ExamTrap><K>{String.raw`K_M`}</K> equals a dissociation constant only when product formation is much slower than ES dissociation. It is generally a composite kinetic constant.</ExamTrap>
</ChapterSection>
      <ReferenceExpansion sheets={[44]} />
      <IntegratedSourcePages start={121} end={125} />
    </PartShell>
  );
}
