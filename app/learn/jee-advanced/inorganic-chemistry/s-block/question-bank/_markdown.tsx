import { ChemistryMarkdown } from "@/components/notes/chemistryMarkdown";

/**
 * s-Block question-bank renderer — plain pass-through to the shared
 * vivid multi-colour system, exactly like the boron-family question bank
 * (app/notes/boron-family/questionBank.ts + _markdown.tsx). No callout or
 * reaction segmentation: the source assignments already carry their own
 * heading/blockquote/table structure.
 */
export function SBlockQuestionBankMarkdown({ markdown }: { markdown: string }) {
  return <ChemistryMarkdown markdown={markdown} />;
}
