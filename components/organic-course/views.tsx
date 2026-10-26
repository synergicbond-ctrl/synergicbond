import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import OrganicAnimBoot from "./OrganicAnimBoot";
import "./organic-content.css";
import { buildCourse, type CourseChapter } from "@/lib/organicCourse";
import { animationHtml, readChapter, readFragment, scopedSvgStyles } from "@/lib/organicModules";

const DISCIPLINE = "JEE Advanced · Organic Chemistry";

const card = "group flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]/40";
const badge = "flex shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] px-3 py-2 font-mono text-sm font-bold text-[var(--accent)]";

export function CourseIndexView({ base }: { base: string }) {
  const { chapters } = buildCourse();
  const total = chapters.reduce((a, c) => a + c.sections.length, 0);
  return (
    <AppShell
      discipline={DISCIPLINE}
      chapterTitle="Organic Chemistry — Complete Course"
      chapterSlug="organic-course"
      description={`${chapters.length} chapters and ${total} sections: theory, drawn structures, mechanism animations and solved practice problems, from IUPAC nomenclature to biomolecules and practical organic chemistry.`}
      free={false}
    >
      <div className="mx-auto grid max-w-4xl gap-3">
        {chapters.map((c) => (
          <Link key={c.slug} href={`${base}/chapter/${c.slug}`} className={card}>
            <span className={badge}>{String(c.n).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-[var(--foreground)]">{c.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {c.sections.length ? `${c.sections.length} sections` : "Material in preparation"}
              </p>
            </div>
            <span className="flex shrink-0 text-[var(--text-muted)]">→</span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

function neighbours(chapters: CourseChapter[], i: number, base: string) {
  const prev = chapters[i - 1], next = chapters[i + 1];
  return {
    prevRef: prev ? { href: `${base}/chapter/${prev.slug}`, label: prev.name } : undefined,
    nextRef: next ? { href: `${base}/chapter/${next.slug}`, label: next.name } : undefined,
  };
}

export function ChapterView({ base, slug }: { base: string; slug: string }) {
  const { chapters } = buildCourse();
  const i = chapters.findIndex(c => c.slug === slug);
  if (i < 0) notFound();
  const ch = chapters[i];
  return (
    <AppShell
      discipline={DISCIPLINE}
      chapterTitle={`${ch.n}. ${ch.name}`}
      chapterSlug="organic-course"
      description={ch.sections.length ? `${ch.sections.length} sections` : "Material for this chapter is in preparation."}
      free={false}
      lessonNumber={`Chapter ${ch.n} of ${chapters.length}`}
      hubRef={{ href: base, label: "All chapters" }}
      {...neighbours(chapters, i, base)}
    >
      <div className="mx-auto grid max-w-4xl gap-3">
        {ch.sections.map((s, k) => (
          <Link key={s.stem + s.section_dir} href={`${base}/section/${s.stem}/${s.section_dir}`} className={card}>
            <span className={badge}>{String(k + 1).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-[var(--foreground)]">{s.title}</h3>
            </div>
            <span className="flex shrink-0 text-[var(--text-muted)]">→</span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

export function SectionView({ base, stem, dir, animSrc }: { base: string; stem: string; dir: string; animSrc: string }) {
  const m = readChapter(stem), frag = readFragment(stem, dir);
  if (!m || frag === null) notFound();
  const { chapters } = buildCourse();
  const ci = chapters.findIndex(c => c.sections.some(s => s.stem === stem && s.section_dir === dir));
  if (ci < 0) notFound();
  const ch = chapters[ci];
  const si = ch.sections.findIndex(s => s.stem === stem && s.section_dir === dir);
  const sec = ch.sections[si];
  const prev = ch.sections[si - 1], next = ch.sections[si + 1];
  const link = (s: typeof sec) => ({ href: `${base}/section/${s.stem}/${s.section_dir}`, label: s.title });
  const scope = `ocs-${stem.replace(/[^A-Za-z0-9]/g, "")}`;
  const css = scopedSvgStyles(stem, scope);
  return (
    <AppShell
      discipline={DISCIPLINE}
      chapterTitle={`${ch.n}. ${ch.name}`}
      chapterSlug="organic-course"
      free={false}
      lessonNumber={`Section ${si + 1} of ${ch.sections.length}`}
      lessonTitle={sec.title}
      hubRef={{ href: `${base}/chapter/${ch.slug}`, label: ch.name }}
      prevRef={prev ? link(prev) : undefined}
      nextRef={next ? link(next) : undefined}
    >
      {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
      <div className={`oc-content ${scope}`}>
        <div dangerouslySetInnerHTML={{ __html: frag }} />
        <div dangerouslySetInnerHTML={{ __html: animationHtml(stem, sec.title) }} />
      </div>
      <OrganicAnimBoot src={animSrc} sectionKey={`${stem}/${dir}`} />
    </AppShell>
  );
}
