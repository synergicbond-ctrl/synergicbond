"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { NoteBlock, SolutionPart, VisualKey } from "../_data/types";
import {
  SolutionParticlesFigure,
  HenryFigure,
  RaoultFigure,
  DeviationsFigure,
  PhaseEnvelopeFigure,
  TxYFigure,
  DistillationFigure,
  AzeotropeFigure,
  VapourLoweringFigure,
  OstwaldWalkerFigure,
  BoilingElevationFigure,
  FreezingDepressionFigure,
  OsmosisFigure,
  VantHoffFigure,
} from "./SolutionVisuals";

const visualMap: Record<VisualKey, () => ReactNode> = {
  "solution-particles": () => <SolutionParticlesFigure />,
  henry: () => <HenryFigure />,
  raoult: () => <RaoultFigure />,
  deviations: () => <DeviationsFigure />,
  "phase-envelope": () => <PhaseEnvelopeFigure />,
  txy: () => <TxYFigure />,
  distillation: () => <DistillationFigure />,
  azeotrope: () => <AzeotropeFigure />,
  "vapour-lowering": () => <VapourLoweringFigure />,
  "ostwald-walker": () => <OstwaldWalkerFigure />,
  "boiling-elevation": () => <BoilingElevationFigure />,
  "freezing-depression": () => <FreezingDepressionFigure />,
  osmosis: () => <OsmosisFigure />,
  "vant-hoff": () => <VantHoffFigure />,
};

function ChemText({ text }: { text: string }) {
  const pieces = text.split(/(_[A-Za-z0-9°]+|\^[A-Za-z0-9+\-]+)/g);
  return (
    <>
      {pieces.map((piece, index) => {
        if (piece.startsWith("_")) return <sub key={index}>{piece.slice(1)}</sub>;
        if (piece.startsWith("^")) return <sup key={index}>{piece.slice(1)}</sup>;
        return <span key={index}>{piece}</span>;
      })}
    </>
  );
}

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="ls-formula">
      {typeof children === "string" ? <ChemText text={children} /> : children}
    </div>
  );
}

function Visual({ visual }: { visual?: VisualKey }) {
  if (!visual) return null;
  const render = visualMap[visual];
  return <div className="ls-visual">{render()}</div>;
}

function Block({ block }: { block: NoteBlock }) {
  if (block.kind === "example") {
    return (
      <article className="ls-example">
        <div className="ls-example-head">
          <div>
            <span className="ls-example-kicker">SOLVED QUESTION {block.number}</span>
            <h3>{block.title}</h3>
          </div>
        </div>
        <p className="ls-question"><ChemText text={block.question} /></p>
        {block.given?.length ? (
          <div className="ls-given">
            {block.given.map((item) => <span key={item}><ChemText text={item} /></span>)}
          </div>
        ) : null}
        <ol className="ls-steps">
          {block.steps.map((step, index) => <li key={index}><ChemText text={step} /></li>)}
        </ol>
        <div className="ls-answer"><strong>Answer:</strong> <ChemText text={block.answer} /></div>
        {block.transformation ? <p className="ls-transform">Source-question transformation: {block.transformation}</p> : null}
        <Visual visual={block.visual} />
      </article>
    );
  }

  if (block.kind === "derivation") {
    return (
      <article className="ls-card ls-derivation">
        <div className="ls-card-head">
          <div>
            <span className="ls-card-kicker">DERIVATION</span>
            <h3>{block.title}</h3>
          </div>
        </div>
        {block.introduction ? <p><ChemText text={block.introduction} /></p> : null}
        <ol className="ls-steps">
          {block.steps.map((step, index) => <li key={index}><ChemText text={step} /></li>)}
        </ol>
        <Formula>{block.result}</Formula>
        {block.assumptions?.length ? (
          <div className="ls-assumptions">
            <strong>Assumptions and range:</strong>
            <ul>{block.assumptions.map((item) => <li key={item}><ChemText text={item} /></li>)}</ul>
          </div>
        ) : null}
        <Visual visual={block.visual} />
      </article>
    );
  }

  if (block.kind === "table") {
    return (
      <article className="ls-card ls-table-card">
        <div className="ls-card-head">
          <h3>{block.title}</h3>
        </div>
        <div className="ls-table-wrap">
          <table>
            <thead><tr>{block.headers.map((header) => <th key={header}><ChemText text={header} /></th>)}</tr></thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={`${i}-${j}`}><ChemText text={cell} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.note ? <p className="ls-table-note"><ChemText text={block.note} /></p> : null}
      </article>
    );
  }

  const className = [
    "ls-card",
    block.kind === "reference" ? "ls-reference" : "",
    block.kind === "checkpoint" ? "ls-checkpoint" : "",
    block.kind === "trap" ? "ls-trap" : "",
  ].filter(Boolean).join(" ");

  return (
    <article className={className}>
      <div className="ls-card-head">
        <div>
          <span className="ls-card-kicker">
            {block.kind === "reference" ? "REFERENCE DEPTH" :
             block.kind === "checkpoint" ? "CONCEPT CHECKPOINT" :
             block.kind === "trap" ? "JEE ADVANCED TRAP" : "CORE THEORY"}
          </span>
          <h3>{block.title}</h3>
        </div>
      </div>
      {block.paragraphs.map((paragraph, index) => <p key={index}><ChemText text={paragraph} /></p>)}
      {block.equations?.map((equation) => <Formula key={equation}>{equation}</Formula>)}
      {block.bullets?.length ? <ul className="ls-bullets">{block.bullets.map((item) => <li key={item}><ChemText text={item} /></li>)}</ul> : null}
      {block.sourceLabel ? <p className="ls-reference-label">{block.sourceLabel}</p> : null}
      <Visual visual={block.visual} />
    </article>
  );
}

export function SolutionsChapterShell({
  part,
  parts,
}: {
  part: SolutionPart;
  parts: SolutionPart[];
}) {
  const currentIndex = parts.findIndex((item) => item.slug === part.slug);
  const previous = currentIndex > 0 ? parts[currentIndex - 1] : null;
  const next = currentIndex < parts.length - 1 ? parts[currentIndex + 1] : null;

  return (
    <main className="ls-page">
      <style>{styles}</style>

      <header className="ls-hero">
        <div className="ls-hero-copy">
          <p className="ls-super-title">JEE ADVANCED PHYSICAL CHEMISTRY</p>
          <h1>Solution and Colligative Properties</h1>
          <p className="ls-part-line">Part {String(part.number).padStart(2, "0")} · {part.title}</p>
          <p className="ls-subtitle">{part.subtitle}</p>
          <div className="ls-meta-row">
            <span>77-page source reconstructed</span>
            <span>≈27 pages of added reference depth</span>
            <span>65 descriptive solved questions</span>
            <span>No objective-question blocks</span>
          </div>
        </div>
        <div className="ls-top-label">TOP CHAPTER NAVIGATION</div>
      </header>

      <nav className="ls-part-nav" aria-label="Liquid solutions chapter parts">
        <div className="ls-part-grid">
          {parts.map((item) => {
            const active = item.slug === part.slug;
            return (
              <Link
                key={item.slug}
                href={`/learn/jee-advanced/solutions/${item.slug}`}
                className={active ? "ls-part-pill active" : "ls-part-pill"}
                aria-current={active ? "page" : undefined}
              >
                <span>{String(item.number).padStart(2, "0")}</span>
                {item.shortTitle}
              </Link>
            );
          })}
        </div>
      </nav>

      <section className="ls-objectives">
        <div>
          <p className="ls-card-kicker">PART ROADMAP</p>
          <h2>{part.title}</h2>
        </div>
        <ul>{part.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
      </section>

      <div className="ls-content">
        {part.blocks.map((block, index) => <Block key={`${block.kind}-${index}-${block.title}`} block={block} />)}
      </div>

      <footer className="ls-footer-nav">
        {previous ? (
          <Link href={`/learn/jee-advanced/solutions/${previous.slug}`} className="ls-footer-link">
            <span>← Previous</span>
            <strong>{previous.shortTitle}</strong>
          </Link>
        ) : <span />}
        <Link href="/learn/jee-advanced/solutions" className="ls-index-link">All 17 parts</Link>
        {next ? (
          <Link href={`/learn/jee-advanced/solutions/${next.slug}`} className="ls-footer-link next">
            <span>Next →</span>
            <strong>{next.shortTitle}</strong>
          </Link>
        ) : <span />}
      </footer>
    </main>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    --bg: #071524;
    --panel: rgba(11, 29, 47, .92);
    --panel2: rgba(15, 37, 59, .88);
    --line: rgba(103, 232, 249, .22);
    --cyan: #58d9ef;
    --amber: #f7be45;
    --violet: #b8a0ff;
    --green: #6ee7b7;
    --rose: #fb8fb8;
    --text: #edf5ff;
    --muted: #adbed0;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .ls-page {
    min-height: 100vh;
    padding: 0 20px 72px;
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.72;
    background:
      radial-gradient(circle at 10% 0%, rgba(88,217,239,.12), transparent 30rem),
      radial-gradient(circle at 95% 16%, rgba(184,160,255,.10), transparent 34rem),
      linear-gradient(180deg, #0b2033 0%, #071524 38%, #05111d 100%);
  }
  .ls-hero, .ls-part-nav, .ls-objectives, .ls-content, .ls-footer-nav {
    width: min(1500px, 100%);
    margin-inline: auto;
  }
  .ls-hero {
    position: relative;
    padding: 34px 0 24px;
    border-bottom: 1px solid rgba(88,217,239,.18);
  }
  .ls-super-title, .ls-card-kicker, .ls-top-label, .ls-example-kicker {
    margin: 0;
    letter-spacing: .22em;
    font-size: 12px;
    font-weight: 900;
    color: var(--cyan);
  }
  .ls-hero h1 {
    margin: 8px 0 4px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(38px, 5vw, 70px);
    line-height: 1.03;
    letter-spacing: -.025em;
  }
  .ls-part-line {
    margin: 14px 0 0;
    color: var(--cyan);
    font-size: clamp(20px, 2.4vw, 32px);
    font-weight: 900;
  }
  .ls-subtitle {
    max-width: 980px;
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 17px;
  }
  .ls-top-label {
    position: absolute;
    right: 0;
    top: 28px;
    color: var(--amber);
  }
  .ls-meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
  }
  .ls-meta-row span {
    border: 1px solid rgba(88,217,239,.24);
    border-radius: 999px;
    padding: 5px 10px;
    color: #cad8e7;
    background: rgba(7,21,36,.62);
    font-size: 12px;
    font-weight: 750;
  }
  .ls-part-nav {
    padding: 24px 0 14px;
  }
  .ls-part-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .ls-part-pill {
    min-height: 54px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border: 2px solid #264b68;
    border-left: 7px solid var(--cyan);
    border-radius: 22px;
    color: #c6d3e1;
    background: rgba(10,28,45,.74);
    text-decoration: none;
    font-size: 15px;
    font-weight: 900;
    transition: transform .18s ease, border-color .18s ease, background .18s ease;
  }
  .ls-part-pill span {
    color: var(--cyan);
    font-size: 12px;
    letter-spacing: .08em;
  }
  .ls-part-pill:hover {
    transform: translateY(-2px);
    border-color: var(--cyan);
    background: rgba(17,46,70,.92);
  }
  .ls-part-pill.active {
    color: var(--amber);
    border-color: var(--amber);
    border-left-color: var(--amber);
    background: rgba(76,54,15,.25);
  }
  .ls-part-pill.active span { color: var(--amber); }
  .ls-objectives {
    display: grid;
    grid-template-columns: minmax(260px, .8fr) minmax(360px, 1.6fr);
    gap: 28px;
    margin-top: 22px;
    padding: 26px;
    border: 1px solid rgba(88,217,239,.22);
    border-radius: 28px;
    background: rgba(8,25,41,.75);
  }
  .ls-objectives h2 { margin: 4px 0 0; font-size: 28px; line-height: 1.2; }
  .ls-objectives ul { margin: 0; columns: 2; column-gap: 34px; padding-left: 22px; color: #cfdeeb; }
  .ls-objectives li { margin: 0 0 8px; break-inside: avoid; }
  .ls-content {
    display: grid;
    gap: 22px;
    margin-top: 26px;
  }
  .ls-card, .ls-example {
    padding: 26px;
    border: 1px solid rgba(129,162,190,.20);
    border-left: 6px solid var(--cyan);
    border-radius: 26px;
    background: linear-gradient(145deg, rgba(14,36,57,.94), rgba(7,23,39,.94));
    box-shadow: 0 18px 50px rgba(0,0,0,.18);
  }
  .ls-card h3, .ls-example h3 { margin: 3px 0 12px; font-size: clamp(22px, 2.5vw, 31px); line-height: 1.2; }
  .ls-card p, .ls-example p { color: #cbd9e7; }
  .ls-card-head, .ls-example-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
  .ls-reference { border-left-color: var(--violet); background: linear-gradient(145deg, rgba(39,31,72,.72), rgba(9,24,42,.95)); }
  .ls-reference .ls-card-kicker { color: var(--violet); }
  .ls-checkpoint { border-left-color: var(--green); }
  .ls-checkpoint .ls-card-kicker { color: var(--green); }
  .ls-trap { border-left-color: var(--rose); background: linear-gradient(145deg, rgba(72,24,46,.48), rgba(9,24,42,.95)); }
  .ls-trap .ls-card-kicker { color: var(--rose); }
  .ls-derivation { border-left-color: var(--violet); }
  .ls-example { border-left-color: var(--amber); }
  .ls-example-kicker { color: var(--amber); }
  .ls-question { padding: 16px 18px; border-radius: 16px; background: rgba(247,190,69,.08); color: #f3f7fb !important; font-size: 16px; }
  .ls-given { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0; }
  .ls-given span { padding: 6px 10px; border: 1px solid rgba(88,217,239,.22); border-radius: 10px; color: #d8e8f4; background: rgba(5,17,29,.62); font-size: 13px; }
  .ls-steps { padding-left: 26px; color: #d5e2ed; }
  .ls-steps li { margin: 9px 0; padding-left: 6px; }
  .ls-answer { margin-top: 18px; padding: 14px 16px; border: 1px solid rgba(110,231,183,.36); border-radius: 14px; background: rgba(16,185,129,.08); color: #d9fff0; }
  .ls-transform { margin-bottom: 0 !important; color: #8ca2b6 !important; font-size: 12px; font-style: italic; }
  .ls-formula {
    overflow-x: auto;
    margin: 14px 0;
    padding: 14px 16px;
    border: 1px solid rgba(184,160,255,.30);
    border-radius: 14px;
    color: #f3edff;
    background: rgba(89,65,160,.12);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 15px;
    white-space: pre-wrap;
  }
  .ls-bullets { padding-left: 24px; color: #cfdeeb; }
  .ls-bullets li { margin: 8px 0; }
  .ls-reference-label { color: #9b8bdb !important; font-size: 12px; font-weight: 800; }
  .ls-assumptions { margin-top: 16px; padding: 14px 16px; border-radius: 14px; background: rgba(184,160,255,.08); color: #d6caFF; }
  .ls-assumptions ul { margin-bottom: 0; }
  .ls-visual { margin-top: 20px; overflow: hidden; border: 1px solid rgba(88,217,239,.16); border-radius: 20px; background: #071524; }
  .ls-svg { display: block; width: 100%; height: auto; }
  .ls-table-wrap { width: 100%; overflow-x: auto; margin-top: 14px; }
  .ls-table-wrap table { width: 100%; min-width: 720px; border-collapse: collapse; }
  .ls-table-wrap th, .ls-table-wrap td { padding: 13px 14px; border: 1px solid rgba(129,162,190,.18); text-align: left; vertical-align: top; }
  .ls-table-wrap th { color: var(--cyan); background: rgba(88,217,239,.08); font-size: 12px; letter-spacing: .06em; text-transform: uppercase; }
  .ls-table-wrap td { color: #cad8e7; }
  .ls-table-note { color: #91a6ba !important; font-size: 13px; }
  .ls-footer-nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: stretch;
    gap: 14px;
    margin-top: 34px;
  }
  .ls-footer-link, .ls-index-link {
    padding: 16px 18px;
    border: 1px solid rgba(88,217,239,.22);
    border-radius: 18px;
    color: var(--text);
    background: rgba(8,25,41,.78);
    text-decoration: none;
  }
  .ls-footer-link { display: flex; flex-direction: column; }
  .ls-footer-link.next { align-items: flex-end; text-align: right; }
  .ls-footer-link span { color: var(--cyan); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .08em; }
  .ls-index-link { display: grid; place-items: center; color: var(--amber); font-weight: 900; }
  @media (max-width: 900px) {
    .ls-top-label { position: static; margin-top: 18px; }
    .ls-objectives { grid-template-columns: 1fr; }
    .ls-objectives ul { columns: 1; }
    .ls-part-grid {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 8px;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
    }
    .ls-part-pill { flex: 0 0 auto; scroll-snap-align: start; }
  }
  @media (max-width: 640px) {
    .ls-page { padding-inline: 12px; }
    .ls-hero { padding-top: 24px; }
    .ls-card, .ls-example, .ls-objectives { padding: 18px; border-radius: 20px; }
    .ls-card-head, .ls-example-head { flex-direction: column; gap: 8px; }
    .ls-footer-nav { grid-template-columns: 1fr 1fr; }
    .ls-index-link { grid-column: 1 / -1; grid-row: 1; }
    .ls-footer-link { grid-row: 2; min-width: 0; }
  }
  @media print {
    .ls-page { background: white; color: black; padding: 0; }
    .ls-part-nav, .ls-footer-nav, .ls-top-label { display: none; }
    .ls-card, .ls-example, .ls-objectives { break-inside: avoid; background: white; color: black; box-shadow: none; }
    .ls-card p, .ls-example p, .ls-table-wrap td, .ls-steps, .ls-bullets { color: #172033 !important; }
    .ls-hero h1, .ls-card h3, .ls-example h3 { color: #071524; }
  }
`;
