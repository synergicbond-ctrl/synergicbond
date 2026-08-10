// SessionSummary — closing view of a retrieval run: per-item outcome plus a
// one-line takeaway. Presentational and server-safe; consumers compute the
// rows from RetrievalResults.

export interface SessionSummaryRow {
  itemId: string;
  label: string;
  correct: boolean;
  /** e.g. "sure & right", "sure but wrong" — calibration surface. */
  note?: string;
}

export function SessionSummary({
  tag = "Session summary",
  rows,
  takeaway,
}: {
  tag?: string;
  rows: SessionSummaryRow[];
  /** One line, one action — e.g. "2 of 3 recalled; the miss is queued." */
  takeaway?: string;
}) {
  const correctCount = rows.filter((r) => r.correct).length;
  return (
    <section className="sbrCard" style={{ borderLeftColor: "#E4B04A" }} aria-label={tag}>
      <span className="sbrTag" style={{ color: "#E4B04A" }}>
        {tag} · {correctCount}/{rows.length}
      </span>
      <div className="sbrSummary">
        {rows.map((row) => (
          <div key={row.itemId} className="sbrSummaryRow">
            <span
              className="sbrDot"
              style={{ background: row.correct ? "#5FBF8F" : "#E06E6E" }}
              role="img"
              aria-label={row.correct ? "correct" : "incorrect"}
            />
            <span>{row.label}</span>
            <span className="sbrStat">{row.note ?? (row.correct ? "recalled" : "queued")}</span>
          </div>
        ))}
      </div>
      {takeaway && (
        <p className="sbrExplain">
          <strong>{takeaway}</strong>
        </p>
      )}
    </section>
  );
}
