import { ChemistryMarkdown } from "@/components/notes/chemistryMarkdown";
import { boronFigure } from "./visuals";

export function BoronFamilyMarkdown({ markdown }: { markdown: string }) {
  return <ChemistryMarkdown markdown={markdown} figureFor={boronFigure} />;
}
