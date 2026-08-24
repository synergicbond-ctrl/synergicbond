import { notFound } from "next/navigation";
import { NotesContentCard, NumberedSectionHeader } from "@/components/notes/chemistry";
import { REDOX_LESSONS, redoxLessonRef, type RedoxLessonMeta } from "../_chapter";
import { RedoxLessonShell } from "../_lesson-helper";
import EquivalentConceptPart1 from "../equivalent-weight/part1";
import EquivalentConceptPart2 from "../equivalent-weight/part2";
import EquivalentConceptPart3 from "../equivalent-weight/part3";
import EquivalentConceptPart4 from "../equivalent-weight/part4";
import EquivalentConceptPart5 from "../equivalent-weight/part5";
import EquivalentConceptPart6 from "../equivalent-weight/part6";
import EquivalentConceptPart7 from "../equivalent-weight/part7";
import EquivalentConceptPart8 from "../equivalent-weight/part8";
import TitrationPart1 from "../titration/part1";
import TitrationPart2 from "../titration/part2";
import TitrationPart3 from "../titration/part3";
import TitrationPart4 from "../titration/part4";
import TitrationPart5 from "../titration/part5";
import TitrationPart6 from "../titration/part6";
import TitrationPart7 from "../titration/part7";

// The original 15 section bodies, untouched, keyed by unit + section number.
const SECTION_COMPONENTS: Record<RedoxLessonMeta["unit"], Record<number, React.ComponentType>> = {
  "equivalent-weight": {
    1: EquivalentConceptPart1, 2: EquivalentConceptPart2, 3: EquivalentConceptPart3,
    4: EquivalentConceptPart4, 5: EquivalentConceptPart5, 6: EquivalentConceptPart6,
    7: EquivalentConceptPart7, 8: EquivalentConceptPart8,
  },
  titration: {
    1: TitrationPart1, 2: TitrationPart2, 3: TitrationPart3, 4: TitrationPart4,
    5: TitrationPart5, 6: TitrationPart6, 7: TitrationPart7,
  },
};

export function generateStaticParams() {
  return REDOX_LESSONS.map((lesson) => ({ part: `part${lesson.number}` }));
}

export default async function RedoxLessonPage({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const lesson = REDOX_LESSONS.find((item) => `part${item.number}` === part);
  if (!lesson) notFound();

  const unitLabel = lesson.unit === "equivalent-weight"
    ? "Equivalent Weight and n-Factor"
    : "Titration and Volumetric Analysis";

  return (
    <RedoxLessonShell part={lesson.number}>
      <article className="mx-auto max-w-3xl space-y-6">
        <p className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">
          {unitLabel}
        </p>
        {lesson.sections.map((section) => {
          const Section = SECTION_COMPONENTS[lesson.unit][section.id];
          if (!Section) return null;
          return (
            <NotesContentCard key={`${lesson.unit}-${section.id}`}>
              <NumberedSectionHeader number={section.id} title={section.title} />
              <div className="space-y-6 pt-2">
                <Section />
              </div>
            </NotesContentCard>
          );
        })}
      </article>
    </RedoxLessonShell>
  );
}