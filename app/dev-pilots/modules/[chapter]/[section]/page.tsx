import Link from "next/link";
import { notFound } from "next/navigation";
import { devOnly } from "../../../guard";
import ModuleFrame from "../../ModuleFrame";
import { animationHtml, readChapter, readFragment, readStyles } from "../../../../../lib/organicModules";
export default async function Page({ params }: { params: Promise<{ chapter: string; section: string }> }) {
  devOnly();
  const { chapter, section } = await params;
  const m = readChapter(chapter);
  const frag = readFragment(chapter, section);
  if (!m || frag === null) notFound();
  const i = m.sections.findIndex(s => s.dir === section);
  const prev = i > 0 ? m.sections[i - 1] : null, next = i >= 0 && i < m.sections.length - 1 ? m.sections[i + 1] : null;
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${readStyles(chapter)}<style>body{margin:0;padding:8px 12px;font-family:system-ui,sans-serif;color:#111;background:#fff}img,svg{max-width:100%;height:auto}</style></head><body>${frag}${animationHtml(chapter, m.sections[i]?.title ?? null)}<script src="/dev-pilots/sb-anim.js"></script></body></html>`;
  return (
    <main style={{ maxWidth: 1000, margin: "16px auto", padding: "0 16px", fontFamily: "system-ui" }}>
      <p><Link href="/dev-pilots/modules">all chapters</Link> · <Link href={`/dev-pilots/modules/${chapter}`}>{chapter}</Link></p>
      <ModuleFrame html={doc} title={m.sections[i]?.title ?? chapter} />
      <nav style={{ display: "flex", justifyContent: "space-between", margin: "12px 0" }}>
        {prev ? <Link href={`/dev-pilots/modules/${chapter}/${prev.dir}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/dev-pilots/modules/${chapter}/${next.dir}`}>{next.title} →</Link> : <span />}
      </nav>
    </main>
  );
}
