import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { HYDROGEN_QUESTION_BANK_MARKDOWN } from "../content/questionBank";
import { HydrogenQuestionBankMarkdown } from "./_markdown";

export const metadata: Metadata = {
  title: "Hydrogen — JEE Question Bank | Synergic Bond",
  description:
    "JEE Advanced hydrogen question bank: single- and multiple-correct, comprehension, assertion-reason, matrix match, integer and NCERT statement-analysis questions with full answer keys and worked solutions.",
};

const TABS = [
  { label: "Chapter", href: "/learn/jee-advanced/inorganic-chemistry/hydrogen" },
  { label: "Question Bank", href: "/learn/jee-advanced/inorganic-chemistry/hydrogen/question-bank", active: true },
];

export default function HydrogenQuestionBankPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="Inorganic Chemistry"
      chapterTitle="Hydrogen — Question Bank"
      chapterSlug="hydrogen"
      description="Two JEE assignments — 80 + 25 questions with answer keys and worked solutions"
      free={false}
      tabs={TABS}
    >
      <article className="mx-auto min-w-0 max-w-3xl space-y-10">
        <HydrogenQuestionBankMarkdown markdown={HYDROGEN_QUESTION_BANK_MARKDOWN} />
      </article>
    </CanonicalChapterPage>
  );
}
