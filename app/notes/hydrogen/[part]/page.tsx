import Image from "next/image";
import { notFound } from "next/navigation";
import { ChapterShell, ChapterLessonPager, ChapterPartStrip } from "@/components/notes/canonical";
import { HYDROGEN_PARTS, hydrogenPartBySlug, hydrogenPartMarkdown } from "../parts";
import { hydrogenLessonRef, hydrogenTabs, sectionRangeLabel } from "../_chapter";
import { HydrogenMarkdown } from "../_markdown";
import { HYDROGEN_VISUALS } from "../_visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return HYDROGEN_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = hydrogenPartBySlug(raw);
  if (!part) return {};
  return {
    title: `Hydrogen — ${part.title} | SYNERGIC BOND`,
    description: `Hydrogen chemistry, Lesson ${part.number}: ${part.title}.`,
  };
}

export default async function HydrogenPartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = hydrogenPartBySlug(raw);
  if (!part) notFound();

  const visuals = HYDROGEN_VISUALS[part.number] ?? [];

  return (
    <ChapterShell kicker="Chemistry" subtitle="Hydrogen" tabs={hydrogenTabs(part.number)}>
      <ChapterPartStrip
        hubHref="/notes/hydrogen"
        hubLabel="Hydrogen — all lessons"
        positionLabel={`Lesson ${part.number} of ${HYDROGEN_PARTS.length}`}
      />

      <article className="mx-auto max-w-[1480px] space-y-7 text-white">
        <header className="overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(91,63,168,.23),transparent_36%),linear-gradient(135deg,#07111f_0%,#0b192a_55%,#100a20_100%)] px-5 py-7 shadow-2xl shadow-black/30 sm:px-8 sm:py-9 lg:px-11">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.17em] text-cyan-300">
            <span>Hydrogen</span><span className="text-slate-600">•</span><span>Lesson {part.number}</span><span className="text-slate-600">•</span><span>{sectionRangeLabel(part)}</span>
          </div>
          <h1 className="mt-4 max-w-5xl bg-gradient-to-r from-cyan-200 via-violet-200 to-amber-200 bg-clip-text font-sans text-3xl font-black leading-tight text-transparent sm:text-4xl lg:text-5xl">
            {part.title}
          </h1>
        </header>

        <section aria-labelledby="visual-atlas-title" className="rounded-[28px] border border-cyan-300/15 bg-[#050b14] p-4 shadow-2xl shadow-black/25 sm:p-6 lg:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.17em] text-cyan-300">Concept diagrams</p>
              <h2 id="visual-atlas-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">Core visuals for this lesson</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">The diagrams introduce the structures, energy relationships and mechanisms developed below.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {visuals.map((visual, index) => (
              <figure key={`${visual.src}-${index}`} className="group overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#06101c,#0b1422)] shadow-xl shadow-black/25">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#030812]">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain transition duration-500 group-hover:scale-[1.015]"
                    priority={index === 0}
                    unoptimized
                  />
                </div>
                <figcaption className="border-t border-white/10 px-5 py-4 text-sm font-medium leading-6 text-slate-300">
                  <span className="mr-2 font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  {visual.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,19,33,.96),rgba(4,10,18,.98))] px-5 py-8 shadow-2xl shadow-black/25 sm:px-8 lg:px-12">
          <HydrogenMarkdown markdown={hydrogenPartMarkdown(part)} />
        </div>

        <ChapterLessonPager
          prev={hydrogenLessonRef(part.number - 1)}
          next={hydrogenLessonRef(part.number + 1)}
          hubHref="/notes/hydrogen"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}
