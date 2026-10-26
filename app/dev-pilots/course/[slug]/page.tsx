import Link from "next/link";
import { notFound } from "next/navigation";
import { devOnly } from "../../guard";
import { buildCourse } from "../../../../lib/organicCourse";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  devOnly();
  const { slug } = await params;
  const { chapters, undecided } = buildCourse();
  if (slug === "needs-decision") {
    return (
      <main style={{ maxWidth: 960, margin: "24px auto", padding: "0 16px", fontFamily: "system-ui", color: "#111" }}>
        <p><Link href="/dev-pilots/course">← course</Link></p>
        <h1>Sections that need a chapter decision</h1>
        <ul>{undecided.map(s => <li key={s.stem + s.section_dir}><Link href={`/dev-pilots/modules/${s.stem}/${s.section_dir}`}>{s.title}</Link> <small>({s.stem})</small></li>)}</ul>
      </main>
    );
  }
  const ch = chapters.find(c => c.slug === slug);
  if (!ch) notFound();
  const idx = chapters.indexOf(ch);
  const prev = chapters[idx - 1], next = chapters[idx + 1];
  return (
    <main style={{ maxWidth: 960, margin: "24px auto", padding: "0 16px", fontFamily: "system-ui", color: "#111" }}>
      <p><Link href="/dev-pilots/course">← all 23 chapters</Link></p>
      <h1>{ch.n}. {ch.name}</h1>
      <p>{ch.sections.length} sections{ch.needsDecision ? ` · ${ch.needsDecision} marked "to confirm"` : ""}</p>
      {ch.sections.length === 0 ? <p>No material has been assigned to this chapter yet.</p> : (
        <ol>{ch.sections.map(s => (
          <li key={s.stem + s.section_dir}>
            <Link href={`/dev-pilots/modules/${s.stem}/${s.section_dir}`}>{s.title}</Link>
            <small style={{ color: s.basis.startsWith("NEEDS") ? "#b45309" : "#6b7280" }}> · {s.basis}</small>
          </li>))}</ol>)}
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        {prev ? <Link href={`/dev-pilots/course/${prev.slug}`}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/dev-pilots/course/${next.slug}`}>{next.name} →</Link> : <span />}
      </nav>
    </main>
  );
}
