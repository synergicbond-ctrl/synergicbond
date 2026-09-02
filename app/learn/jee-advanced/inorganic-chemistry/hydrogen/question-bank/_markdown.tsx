import { ChemistryMarkdown } from "@/components/notes/chemistryMarkdown";

/**
 * Hydrogen question-bank renderer — plain pass-through to the shared
 * vivid multi-colour system, like the s-block / boron-family question
 * banks. The source assignments carry their own heading / blockquote /
 * table structure.
 */
export function HydrogenQuestionBankMarkdown({ markdown }: { markdown: string }) {
  return <ChemistryMarkdown markdown={markdown} />;
}
