import Link from "next/link";
import { notFound } from "next/navigation";
import { devOnly } from "../../guard";
import { readChapter } from "../../../../lib/organicModules";
export default async function Page({ params }: { params: Promise<{ chapter: string }> }) {
  devOnly();
  const { chapter } = await params;
  const m = readChapter(chapter);
  if (!m) notFound();
  return (
    <main style={{ maxWidth: 960, margin: "24px auto", padding: "0 16px", fontFamily: "system-ui", color: "#111" }}>
      <p><Link href="/dev-pilots/modules">← all chapters</Link></p>
      <h1>{chapter}</h1>
      <p>{m.sections_total} sections · lossless check {m.sections_passed}/{m.sections_total} · whole file reproduced: {String(m.partition_reproduces_file_bytes)}</p>
      <ol>{m.sections.map(s => <li key={s.dir}><Link href={`/dev-pilots/modules/${chapter}/${s.dir}`}>{s.title ?? "(untitled)"}</Link> <small>({s.blocks} blocks, {s.svg} figures)</small></li>)}</ol>
    </main>
  );
}
