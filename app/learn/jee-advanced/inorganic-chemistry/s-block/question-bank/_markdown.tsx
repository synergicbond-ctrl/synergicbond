import { ChemistryMarkdown } from "@/components/notes/chemistryMarkdown";
import { sBlockQbFigure } from "./visuals";

/**
 * s-Block question-bank renderer — pass-through to the shared vivid
 * multi-colour system, like the boron-family question bank
 * (app/notes/boron-family/questionBank.ts + _markdown.tsx). The source
 * assignments carry their own heading / blockquote / table structure;
 * `::figure KEY::` marker lines resolve to the SVG reconstructions in
 * ./visuals.tsx.
 */
export function SBlockQuestionBankMarkdown({ markdown }: { markdown: string }) {
  return <ChemistryMarkdown markdown={markdown} figureFor={sBlockQbFigure} />;
}
