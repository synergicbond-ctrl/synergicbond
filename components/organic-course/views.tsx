import Link from "next/link";
import { notFound } from "next/navigation";
import ModuleFrame from "./ModuleFrame";
import { buildCourse } from "@/lib/organicCourse";
import { animationHtml, readChapter, readFragment, readStyles } from "@/lib/organicModules";

const wrap = { maxWidth: 960, margin: "24px auto", padding: "0 16px", color: "#111", fontFamily: "system-ui" } as const;

export function CourseIndexView({ base }: { base: string }) {
  const { chapters, undecided } = buildCourse();
  const total = chapters.reduce((a, c) => a + c.sections.length, 0);
  return (
    <main style={wrap}>
      <h1>JEE Advanced · Organic Chemistry</h1>
      <p>{total} sections in 23 chapters{undecided.length ? ` · ${undecided.length} sections awaiting placement` : ""}.</p>
      <ol>{chapters.map(c => (
        <li key={c.slug} style={{ margin: "6px 0" }}>
          <Link href={`${base}/chapter/${c.slug}`}>{c.name}</Link> — {c.sections.length} sections
          {c.sections.length === 0 ? <span style={{ color: "#b91c1c" }}> · material in preparation</span> : null}
        </li>))}</ol>
    </main>
  );
}

export function ChapterView({ base, slug }: { base: string; slug: string }) {
  const { chapters } = buildCourse();
  const ch = chapters.find(c => c.slug === slug);
  if (!ch) notFound();
  const i = chapters.indexOf(ch), prev = chapters[i - 1], next = chapters[i + 1];
  return (
    <main style={wrap}>
      <p><Link href={base}>← all 23 chapters</Link></p>
      <h1>{ch.n}. {ch.name}</h1>
      {ch.sections.length === 0 ? <p>Material for this chapter is in preparation.</p> : (
        <ol>{ch.sections.map(s => <li key={s.stem + s.section_dir}><Link href={`${base}/section/${s.stem}/${s.section_dir}`}>{s.title}</Link></li>)}</ol>)}
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        {prev ? <Link href={`${base}/chapter/${prev.slug}`}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`${base}/chapter/${next.slug}`}>{next.name} →</Link> : <span />}
      </nav>
    </main>
  );
}

export function SectionView({ base, stem, dir, animSrc }: { base: string; stem: string; dir: string; animSrc: string }) {
  const m = readChapter(stem), frag = readFragment(stem, dir);
  if (!m || frag === null) notFound();
  const i = m.sections.findIndex(s => s.dir === dir);
  const prev = i > 0 ? m.sections[i - 1] : null, next = i >= 0 && i < m.sections.length - 1 ? m.sections[i + 1] : null;
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${readStyles(stem)}<style>body{margin:0;padding:8px 12px;font-family:system-ui,sans-serif;color:#111;background:#fff}img,svg{max-width:100%;height:auto}</style></head><body>${frag}${animationHtml(stem, m.sections[i]?.title ?? null)}<script src="${animSrc}"></script></body></html>`;
  return (
    <main style={{ ...wrap, maxWidth: 1000, margin: "16px auto" }}>
      <p><Link href={base}>All chapters</Link></p>
      <ModuleFrame html={doc} title={m.sections[i]?.title ?? stem} />
      <nav style={{ display: "flex", justifyContent: "space-between", margin: "12px 0" }}>
        {prev ? <Link href={`${base}/section/${stem}/${prev.dir}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`${base}/section/${stem}/${next.dir}`}>{next.title} →</Link> : <span />}
      </nav>
    </main>
  );
}
