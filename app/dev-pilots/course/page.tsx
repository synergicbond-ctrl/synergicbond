import Link from "next/link";
import { devOnly } from "../guard";
import { buildCourse } from "../../../lib/organicCourse";
export default function Page() {
  devOnly();
  const { chapters, undecided } = buildCourse();
  const total = chapters.reduce((a, c) => a + c.sections.length, 0);
  return (
    <main style={{ maxWidth: 960, margin: "24px auto", padding: "0 16px", fontFamily: "system-ui", color: "#111" }}>
      <h1>JEE Advanced · Organic Chemistry — 23 chapters (development view)</h1>
      <p>{total} sections placed in the 23 chapters · {undecided.length} sections still need a decision.</p>
      <ol>{chapters.map(c => (
        <li key={c.slug} style={{ margin: "6px 0" }}>
          <Link href={`/dev-pilots/course/${c.slug}`}>{c.name}</Link> — {c.sections.length} sections
          {c.needsDecision ? <span style={{ color: "#b45309" }}> · {c.needsDecision} to confirm</span> : null}
          {c.sections.length === 0 ? <span style={{ color: "#b91c1c" }}> · no material yet</span> : null}
        </li>))}</ol>
      {undecided.length ? <p><Link href="/dev-pilots/course/needs-decision">Sections needing a decision ({undecided.length})</Link></p> : null}
    </main>
  );
}
