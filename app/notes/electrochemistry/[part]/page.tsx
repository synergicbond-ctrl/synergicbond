import { notFound } from "next/navigation";
import { ChapterShell, ChapterLessonPager, ChapterPartStrip } from "@/components/notes/canonical";
import { electroParts } from "../parts";
import { electroLessonRef, electroTabs } from "../_chapter";

export function generateStaticParams() { return electroParts.map((part) => ({ part: `part${part.number}` })); }

export default async function ElectrochemistryPart({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = electroParts.find((item) => item.number === Number(raw.replace(/^part/, "")));
  if (!part) notFound();

  return (
    <ChapterShell
      kicker="JEE Physical Chemistry"
      subtitle="Electrochemistry"
      tabs={electroTabs(part.number)}
    >
      <ChapterPartStrip
        hubHref="/notes/electrochemistry"
        hubLabel="Electrochemistry — all lessons"
        positionLabel={`Lesson ${part.number} of ${electroParts.length}`}
      />
      <article className="mx-auto max-w-4xl space-y-6 text-white">
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
            Electrochemistry · Lesson {part.number}
          </p>
          <h1 style={{ marginTop: 8, color: "#eef3f8", fontSize: 30, fontWeight: 900, lineHeight: 1.15, fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>
            {part.title}
          </h1>
        </header>
        {part.body}
        <ChapterLessonPager
          prev={electroLessonRef(part.number - 1)}
          next={electroLessonRef(part.number + 1)}
          hubHref="/notes/electrochemistry"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}
