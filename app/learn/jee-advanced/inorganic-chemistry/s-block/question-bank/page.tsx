import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { C, tint } from "@/components/notes/chemistryMarkdown";
import {
  ALKALI_METALS_QUESTION_BANK_MARKDOWN,
  ALKALINE_EARTH_METALS_QUESTION_BANK_MARKDOWN,
} from "../content/questionBank";
import { SBlockQuestionBankMarkdown } from "./_markdown";

export const metadata: Metadata = {
  title: "s-Block Question Bank — Alkali & Alkaline Earth Metals | Synergic Bond",
  description:
    "JEE Advanced practice for Group 1 and Group 2: single-correct, multiple-correct, matrix-match, comprehension, integer and numerical-response questions with full answer keys and detailed solutions.",
};

const TABS = [
  { label: "Textbook", href: "/learn/jee-advanced/inorganic-chemistry/s-block" },
  { label: "Question Bank", href: "/learn/jee-advanced/inorganic-chemistry/s-block/question-bank", active: true },
];

// Group heading — the same shared boron-family H1 treatment used for the
// textbook's "Part A / Part B" titles, so the question bank reads as the
// same textbook system.
function GroupHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 w-fit pt-7 font-sans text-[1.9rem] font-black leading-tight tracking-tight sm:text-[2.25rem]"
      style={{
        color: C.cyan,
        backgroundImage: `linear-gradient(100deg, ${C.cyan}, ${C.violet} 55%, ${C.pink})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        borderTop: `2px solid ${tint(C.cyan, 0.35)}`,
      }}
    >
      {children}
    </h2>
  );
}

export default function SBlockQuestionBankPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced Chemistry"
      chapterTitle="s-Block Question Bank"
      chapterSlug="s-block"
      description="Alkali Metals Assignment-1 and the Alkaline Earth Metals assignment bank — full JEE Advanced question sets with answer keys and detailed solutions."
      free={false}
      tabs={TABS}
    >
      <article className="mx-auto min-w-0 max-w-3xl space-y-12">
        <section aria-labelledby="qb-alkali-metals">
          <GroupHeading id="qb-alkali-metals">Alkali Metals — Assignment-1</GroupHeading>
          <div className="mt-4">
            <SBlockQuestionBankMarkdown markdown={ALKALI_METALS_QUESTION_BANK_MARKDOWN} />
          </div>
        </section>

        <section aria-labelledby="qb-alkaline-earth-metals">
          <GroupHeading id="qb-alkaline-earth-metals">Alkaline Earth Metals — Assignment-2</GroupHeading>
          <div className="mt-4">
            <SBlockQuestionBankMarkdown markdown={ALKALINE_EARTH_METALS_QUESTION_BANK_MARKDOWN} />
          </div>
        </section>
      </article>
    </CanonicalChapterPage>
  );
}
