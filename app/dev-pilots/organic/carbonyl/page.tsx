import data from "./questions.json";
import { devOnly } from "../../guard";
type Q = { id: string; stem_marked: string; figure_count: number; answer_key: string; solution_steps: string[]; corrected_solution_steps?: string[] | null; flags: string[]; review: { status: string; note: string; corrected_key: string } };
function Rich({ text }: { text: string }) {
  // turns _{...} into subscript and ^{...} into superscript, as React nodes (no raw HTML)
  const parts = text.split(/(_\{[^}]*\}|\^\{[^}]*\})/g);
  return <>{parts.map((p, i) =>
    p.startsWith("_{") ? <sub key={i}>{p.slice(2, -1)}</sub>
    : p.startsWith("^{") ? <sup key={i}>{p.slice(2, -1)}</sup>
    : <span key={i}>{p}</span>)}</>;
}
export default function Page() {
  devOnly();
  const qs = data as Q[];
  return (
    <main style={{ maxWidth: 860, margin: "24px auto", padding: "0 16px", color: "#111", fontFamily: "system-ui" }}>
      <h1>Carbonyl — practice items (pilot)</h1>
      <p>Chemistry status: AI-reviewed only. {qs.filter(q => q.review.status === "VERIFIED-BY-REASONING").length} verified by reasoning, {qs.filter(q => q.review.status === "ERROR").length} key errors, {qs.filter(q => q.review.status === "NEEDS-DECISION").length} needs a decision. A human chemist must sign off before publication.</p>
      {qs.map(q => (
        <details key={q.id} style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 12, margin: "10px 0" }}>
          <summary><b>{q.id}</b> — <Rich text={q.stem_marked} /></summary>
          <p>Figures: {q.figure_count}. Key in source: <b>{q.answer_key}</b>. Review: <b>{q.review.status}</b>{q.review.status !== "VERIFIED-BY-REASONING" ? <> — corrected key: <b>{q.review.corrected_key}</b></> : null}</p>
          {q.review.status !== "VERIFIED-BY-REASONING" ? <p style={{ background: "#fff7ed", border: "1px solid #fdba74", padding: 8, borderRadius: 6 }}>{q.review.note}</p> : null}
          {q.corrected_solution_steps ? (<><p><b>Corrected solution:</b></p><ol>{q.corrected_solution_steps.map((s, i) => <li key={i}><Rich text={s} /></li>)}</ol><p style={{ color: "#6b7280" }}><b>Original (superseded):</b></p><ol style={{ color: "#6b7280" }}>{q.solution_steps.map((s, i) => <li key={i}><Rich text={s} /></li>)}</ol></>) : <ol>{q.solution_steps.map((s, i) => <li key={i}><Rich text={s} /></li>)}</ol>}
        </details>
      ))}
    </main>
  );
}
