import { AppShell } from "@/components/AppShell";
import { BORON_FAMILY_QUESTION_BANK_MARKDOWN } from "../parts";
import { boronFamilyTabs } from "../_chapter";
import { BoronFamilyMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "The Boron Family — JEE Question Bank | SYNERGIC BOND",
  description:
    "Group 13 question bank: Q1–Q90 across NCERT statement sets, single- and multiple-correct, matrix match, statement-count, numerical and integrated questions, 155 reactions, full answer key and section-wise solutions.",
};

export default function BoronFamilyQuestionBankPage() {
  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="The Boron Family"
      chapterSlug="boron-family"
      description="Group 13 JEE question bank — Q1–Q90, 155 reactions, answer key and solutions"
      free={false}
      tabs={boronFamilyTabs(undefined, true)}
      hubRef={{ href: "/notes/boron-family", label: "All lessons" }}
      lessonNumber="Question bank · Q1–Q90 + reactions + answer key"
      lessonTitle="JEE question bank"
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <BoronFamilyMarkdown markdown={BORON_FAMILY_QUESTION_BANK_MARKDOWN} />
        </div>
      </article>
    </AppShell>
  );
}
