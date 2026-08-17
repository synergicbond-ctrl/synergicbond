import Link from "next/link";
import type { ReactNode } from "react";

export function LearningObjectives({ items }: { items: string[] }) {
  return (
    <aside
      aria-label="Learning objectives"
      style={{
        borderLeft: "3px solid var(--chem-bond)",
        paddingLeft: "1rem",
        marginBottom: "0.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "9px",
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--chem-bond)",
          marginBottom: "0.7rem",
        }}
      >
        By the end, you can
      </p>
      <ul style={{ display: "grid", gap: "0.35rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", gap: "0.45rem", fontSize: "0.875rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
            <span aria-hidden="true" style={{ color: "var(--chem-bond)", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ConceptCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      style={{
        borderLeft: "3px solid var(--chem-bond)",
        paddingLeft: "1rem",
        paddingTop: "0.15rem",
      }}
    >
      <h2
        style={{ fontSize: "1rem", fontWeight: 700, color: "var(--chem-bond)", marginBottom: "0.5rem" }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>
        {children}
      </div>
    </section>
  );
}

export function DefinitionCard({ term, children }: { term: string; children: ReactNode }) {
  return <section className="rounded-lg border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.09] to-slate-950/20 p-5"><p className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-200">Key definition</p><h2 className="mt-1 text-xl font-black text-white">{term}</h2><div className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">{children}</div></section>;
}

export function FormulaCard({ label, children }: { label: string; children: ReactNode }) {
  return <section className="border-l-2 border-violet-300/40 pl-4"><div className="text-[11px] font-black uppercase tracking-[0.15em] text-violet-200">{label}</div><div className="overflow-x-auto text-cyan-100 [&_.katex-display]:my-1">{children}</div></section>;
}

export function ComparisonTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return <section aria-label="Comparison" className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/45"><table className="min-w-[38rem] w-full text-left text-sm sm:text-base"><thead className="bg-cyan-300/[0.08] text-cyan-100"><tr>{headers.map((header) => <th key={String(header)} scope="col" className="px-4 py-3 font-black">{header}</th>)}</tr></thead><tbody className="divide-y divide-white/10 text-slate-200">{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-4 align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody></table></section>;
}

export function WorkedExample({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-lg border border-amber-300/20 bg-amber-300/[0.045] p-5"><p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-200">Worked example</p><h2 className="mt-1 text-lg font-black text-white">{title}</h2><div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base">{children}</div></section>;
}

export function DerivationPanel({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-l-2 border-fuchsia-300/40 pl-4"><h2 className="text-base font-black text-fuchsia-100">{title}</h2><div className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-100 sm:text-base [&_.katex-display]:my-1">{children}</div></section>;
}

export function FigureCaption({ children }: { children: ReactNode }) {
  return <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-slate-300">{children}</p>;
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return <aside className="rounded-xl border-l-4 border-amber-300 bg-amber-300/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-50"><p className="font-bold text-amber-200">{title}</p><div className="mt-1">{children}</div></aside>;
}

export function PracticeQuestion({ prompt, answer }: { prompt: ReactNode; answer?: ReactNode }) {
  return (
    <section
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--chem-orbital)",
        borderLeftWidth: "3px",
        padding: "1rem 1.1rem",
        background: "rgba(179, 118, 255, 0.04)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "9px",
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--chem-orbital)",
          marginBottom: "0.5rem",
        }}
      >
        Check your understanding
      </p>
      <div style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--foreground)" }}>{prompt}</div>
      {answer ? (
        <div
          style={{
            marginTop: "0.75rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid var(--border)",
            fontSize: "0.875rem",
            color: "var(--chem-rule)",
          }}
        >
          <span style={{ fontWeight: 700 }}>Answer: </span>
          <span style={{ color: "var(--text-body)" }}>{answer}</span>
        </div>
      ) : null}
    </section>
  );
}

export function SummaryStrip({ items }: { items: string[] }) {
  return (
    <section
      aria-label="Quick recap"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1px",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        background: "var(--border)",
      }}
    >
      {items.map((item, index) => (
        <div key={item} style={{ background: "var(--surface)", padding: "1rem 1.1rem" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "9px",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--chem-bond)",
              marginBottom: "0.4rem",
            }}
          >
            0{index + 1}
          </p>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-body)" }}>{item}</p>
        </div>
      ))}
    </section>
  );
}

export function PartNavigator({ previous, next }: { previous?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return <nav aria-label="Continue through Atomic Structure" className="flex items-stretch justify-between gap-3 border-t border-white/10 pt-6">{previous ? <Link href={previous.href} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">← {previous.label}</Link> : <span />}{next ? <Link href={next.href} className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">{next.label} →</Link> : null}</nav>;
}
