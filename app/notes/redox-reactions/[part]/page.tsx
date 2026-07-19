import { notFound } from "next/navigation";
import { ChapterShell, ChapterLessonPager, ChapterPartStrip } from "@/components/notes/canonical";
import { NotesContentCard, NumberedSectionHeader } from "@/components/notes/chemistry";
import { REDOX_LESSONS, redoxLessonRef, redoxTabs, type RedoxLessonMeta } from "../_chapter";
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
    <ChapterShell kicker="JEE Physical Chemistry" subtitle="Redox Reactions" tabs={redoxTabs(lesson.number)}>
      <ChapterPartStrip
        hubHref="/notes/redox-reactions"
        hubLabel="Redox Reactions — all lessons"
        positionLabel={`Lesson ${lesson.number} of ${REDOX_LESSONS.length}`}
      />
      <article className="mx-auto max-w-5xl space-y-6 text-white">
        <header
          style={{
            background: "#122232",
            border: "1px solid #24405c",
            borderLeft: "4px solid #5fd4ea",
            borderRadius: 13,
            padding: "18px 20px",
          }}
        >
          <p style={{ color: "#5fd4ea", fontSize: 11.5, fontWeight: 900, letterSpacing: ".14em", textTransform: "uppercase", fontFamily: "'SFMono-Regular',Consolas,'Liberation Mono',monospace" }}>
            Redox Reactions · {unitLabel} · Lesson {lesson.number}
          </p>
          <h1 style={{ marginTop: 8, color: "#eef3f8", fontSize: 30, fontWeight: 900, lineHeight: 1.15, fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>
            {lesson.title}
          </h1>
        </header>
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
        <ChapterLessonPager
          prev={redoxLessonRef(lesson.number - 1)}
          next={redoxLessonRef(lesson.number + 1)}
          hubHref="/notes/redox-reactions"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}
