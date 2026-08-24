import { notFound, redirect } from "next/navigation";
import { AppShell } from "@/components/AppShell";
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

  const prevRef = isomerismLessonRef(currentIndex - 1);
  const nextRef = isomerismLessonRef(currentIndex + 1);

  return (
    <AppShell
      discipline="JEE Organic Chemistry"
      chapterTitle="Isomerism"
      chapterSlug="isomerism"
      description="40-part premium course on isomerism"
      free={false}
      tabs={isomerismTabs(number)}
      lessonNumber={`Part ${number} of ${isomerismParts.length}`}
      hubRef={{
        href: "/learn/isomerism",
        label: "All 40 parts",
      }}
      prevRef={prevRef ? { href: prevRef.href, label: `Part ${prevRef.number}` } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: `Part ${nextRef.number}` } : undefined}
    >
      <IsomerismPartView number={number} />
    </AppShell>
  );
}
