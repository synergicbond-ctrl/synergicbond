import { notFound, redirect } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import type { LessonRef } from "@/components/notes/canonical";
import { SOLID_STATE_PARTS } from "../parts";
import { solidStateReader } from "../parts/readerData";

export function generateStaticParams() {
  // numbers are the pages; slugs are kept so older links redirect to them
  return SOLID_STATE_PARTS.flatMap((part) => [{ part: String(part.part) }, { part: part.slug }]);
}

function lessonRef(index: number): LessonRef | undefined {
  const item = SOLID_STATE_PARTS[index];
  if (!item) return undefined;
  return {
    href: `/learn/solid-state/${item.part}`,
    number: `Part ${String(item.part).padStart(2, "0")}`,
    title: item.title,
    meta: "JEE Advanced",
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
  // older links use the part slug (e.g. /learn/solid-state/seven-crystal-systems): send them to the part
  const bySlug = SOLID_STATE_PARTS.find((item) => item.slug === part);
  if (bySlug) redirect(`/learn/solid-state/${bySlug.part}`);
  const currentIndex = SOLID_STATE_PARTS.findIndex((item) => item.part === number);
  if (!Number.isInteger(number) || currentIndex < 0) notFound();

  const definition = SOLID_STATE_PARTS[currentIndex];
  const loaded = await definition.load();
  const PartComponent = loaded.default;

  const prevRef = lessonRef(currentIndex - 1);
  const nextRef = lessonRef(currentIndex + 1);

  return (
    <AppShell
      discipline="JEE Advanced Physical Chemistry"
      chapterTitle="Solid State"
      chapterSlug="solid-state"
      description="Complete sequence · 23 parts"
      free={true}
      lessonNumber={`Part ${String(number).padStart(2, "0")} of ${SOLID_STATE_PARTS.length}`}
      lessonTitle={definition.title}
      hubRef={{ href: "/learn/solid-state", label: "All 23 parts" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
      reader={{ ...solidStateReader, part: number }}
    >
      <div className="mx-auto max-w-3xl">
        <PartComponent />
      </div>
    </AppShell>
  );
}
