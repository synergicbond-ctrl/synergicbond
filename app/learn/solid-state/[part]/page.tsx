import { notFound } from "next/navigation";
import {
  ChapterLessonPager,
  ChapterPartStrip,
  ChapterShell,
  type LessonRef,
} from "@/components/notes/canonical";
import { SOLID_STATE_PARTS } from "../parts";

export function generateStaticParams() {
  return SOLID_STATE_PARTS.map((part) => ({ part: String(part.part) }));
}

function lessonRef(index: number): LessonRef | undefined {
  const item = SOLID_STATE_PARTS[index];
  if (!item) return undefined;
  return {
    href: `/learn/solid-state/${item.part}`,
    number: `Part ${String(item.part).padStart(2, "0")}`,
    title: item.title,
    meta: "KOHINOOR · JEE Advanced",
  };
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const item = SOLID_STATE_PARTS.find((entry) => entry.part === Number(part));
  if (!item) return {};
  return {
    title: `${item.title} — Solid State | Synergic Bond`,
    description: `JEE Advanced Solid State Part ${item.part}: ${item.title}.`,
  };
}

export default async function SolidStatePartRoute({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const number = Number(part);
  const currentIndex = SOLID_STATE_PARTS.findIndex((item) => item.part === number);
  if (!Number.isInteger(number) || currentIndex < 0) notFound();

  const definition = SOLID_STATE_PARTS[currentIndex];
  const module = await definition.load();
  const PartComponent = module.default;

  return (
    <ChapterShell
      kicker="JEE Advanced Physical Chemistry"
      subtitle="Solid State"
      headerTag="KOHINOOR sequence · 23 parts"
      tabs={[{ label: "All 23 parts", href: "/learn/solid-state" }]}
      bleed
    >
      <div className="sbnPartChrome">
        <ChapterPartStrip
          hubHref="/learn/solid-state"
          hubLabel="Solid State — all parts"
          positionLabel={`Part ${String(number).padStart(2, "0")} of ${SOLID_STATE_PARTS.length}`}
        />
      </div>
      <PartComponent />
      <div className="sbnPartChrome">
        <ChapterLessonPager
          prev={lessonRef(currentIndex - 1)}
          next={lessonRef(currentIndex + 1)}
          hubHref="/learn/solid-state"
          hubLabel="All 23 parts"
        />
      </div>
    </ChapterShell>
  );
}
