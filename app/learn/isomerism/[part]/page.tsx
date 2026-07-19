import { notFound, redirect } from "next/navigation";
import { ChapterLessonPager, ChapterPartStrip, ChapterShell } from "@/components/notes/canonical";
import {
  IsomerismPartView,
  isomerismLessonRef,
  isomerismParts,
  isomerismTabs,
  legacyPartToMergedPart,
} from "../parts";

export function generateStaticParams() {
  return isomerismParts.map((part) => ({ part: String(part.number) }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const item = isomerismParts.find((entry) => entry.number === Number(part));
  if (!item) return {};
  return {
    title: `${item.title} — Isomerism | Synergic Bond`,
    description: `JEE Isomerism Part ${item.number}: ${item.title}.`,
  };
}

export default async function IsomerismPartRoute({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const number = Number(part);

  if (!Number.isInteger(number)) notFound();

  if (number > 40 && number <= 169) {
    const merged = legacyPartToMergedPart[number];
    if (merged) redirect(`/learn/isomerism/${merged}`);
  }

  const currentIndex = isomerismParts.findIndex((item) => item.number === number);
  if (currentIndex < 0) notFound();

  return (
    <ChapterShell
      kicker="JEE Organic Chemistry"
      subtitle="Isomerism"
      headerTag="40-part premium course"
      tabs={isomerismTabs(number)}
      bleed
    >
      <div className="sbnPartChrome">
        <ChapterPartStrip
          hubHref="/learn/isomerism"
          hubLabel="Isomerism — all parts"
          positionLabel={`Part ${number} of ${isomerismParts.length}`}
        />
      </div>
      <IsomerismPartView number={number} />
      <div className="sbnPartChrome">
        <ChapterLessonPager
          prev={isomerismLessonRef(currentIndex - 1)}
          next={isomerismLessonRef(currentIndex + 1)}
          hubHref="/learn/isomerism"
          hubLabel="All 40 parts"
        />
      </div>
    </ChapterShell>
  );
}
