import Link from "next/link";
import { devOnly } from "../guard";
import { listChapterStems, readChapter, readMaster } from "../../../lib/organicModules";
export default function Page() {
  devOnly();
  const master = readMaster();
  const byChapter = new Map<string, number>();
  for (const r of master) byChapter.set(r.chapter, (byChapter.get(r.chapter) ?? 0) + 1);
  return (
    <main style={{ maxWidth: 960, margin: "24px auto", padding: "0 16px", fontFamily: "system-ui", color: "#111" }}>
      <h1>Organic modules (development only)</h1>
      <p>{master.length} sections from {listChapterStems().length} source files, assigned to {byChapter.size} chapters.</p>
      <h2>By 23-chapter structure</h2>
      <ul>{[...byChapter.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([c, n]) => <li key={c}>{c}: {n} sections</li>)}</ul>
      <h2>Source files</h2>
      <ul>{listChapterStems().map(s => { const m = readChapter(s); return <li key={s}><Link href={`/dev-pilots/modules/${s}`}>{s}</Link> — {m?.sections_total ?? 0} sections{m && !m.partition_reproduces_file_bytes ? " (partition mismatch!)" : ""}</li>; })}</ul>
    </main>
  );
}
