"use client";

import React from "react";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";

export type FormulaProps = {
  tex: string;
  block?: boolean;
  className?: string;
};

export type CardTone = "concept" | "formula" | "warning" | "advanced" | "example";

export type ConceptCardProps = {
  title: string;
  tone?: CardTone;
  children: React.ReactNode;
};

export type WorkedExampleProps = {
  number: number;
  title: string;
  question: React.ReactNode;
  steps: React.ReactNode[];
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

export const Formula = ({ tex, block = false, className = "" }: FormulaProps) => {
  const html = katex.renderToString(tex, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: false,
  });

  return (
    <span
      className={`${block ? "math mathBlock" : "math mathInline"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const ConceptCard = ({ title, tone = "concept", children }: ConceptCardProps) => (
  <article className={`conceptCard ${tone}`}>
    <div className="cardEyebrow">{title}</div>
    <div className="cardBody">{children}</div>
  </article>
);

export const SectionTitle = ({
  id,
  index,
  title,
  subtitle,
}: {
  id: string;
  index: string;
  title: string;
  subtitle: string;
}) => (
  <header className="sectionTitle" id={id}>
    <span className="sectionIndex">{index}</span>
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </header>
);

export const WorkedExample = ({
  number,
  title,
  question,
  steps,
  answer,
  defaultOpen = false,
}: WorkedExampleProps) => (
  <details className="workedExample" open={defaultOpen}>
    <summary>
      <span className="exampleNumber">{String(number).padStart(2, "0")}</span>
      <span>
        <strong>{title}</strong>
        <small>Modified data · original concept preserved</small>
      </span>
      <span className="expandMark" aria-hidden="true">+</span>
    </summary>
    <div className="exampleContent">
      <div className="questionBlock">
        <span className="miniLabel">Question</span>
        <div>{question}</div>
      </div>
      <ol className="solutionSteps">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div className="answerStrip">
        <span>Final answer</span>
        <strong>{answer}</strong>
      </div>
    </div>
  </details>
);


export const partDefinitions = [{"number": 1, "title": "Foundations and pressure measurement", "description": "State variables, absolute temperature, pressure units, hydrostatics and manometers.", "range": "Source pages 1–8"}, {"number": 2, "title": "Gas laws and ideal-gas equation", "description": "Boyle, Charles, Gay–Lussac, Avogadro, transformed graphs and gas density.", "range": "Source pages 9–26"}, {"number": 3, "title": "Mixtures, connected vessels and vapours", "description": "Dalton, Amagat, vapour pressure, humidity, dew point and effusion.", "range": "Source pages 27–40"}, {"number": 4, "title": "Kinetic theory of gases", "description": "Postulates, pressure derivation, energy and molecular degrees of freedom.", "range": "Source pages 41–80"}, {"number": 5, "title": "Molecular speeds and collisions", "description": "Maxwell distribution, characteristic speeds, collision frequency and mean free path.", "range": "Source pages 41–80"}, {"number": 6, "title": "Real gases and equations of state", "description": "Compressibility, van der Waals corrections, virial equations and Boyle temperature.", "range": "Source pages 81–103"}, {"number": 7, "title": "Liquefaction and criticality", "description": "Andrews isotherms, critical constants, corresponding states and Joule–Thomson effect.", "range": "Source pages 104–122"}, {"number": 8, "title": "Enrichment modules 1–10", "description": "Advanced textbook-grade extensions for core gas-state concepts.", "range": "Original enrichment"}, {"number": 9, "title": "Enrichment modules 11–20", "description": "State equations, mixtures, apparatus constraints and vapour systems.", "range": "Original enrichment"}, {"number": 10, "title": "Enrichment modules 21–30", "description": "Kinetic theory, molecular speeds, collisions and transport.", "range": "Original enrichment"}, {"number": 11, "title": "Enrichment modules 31–40", "description": "Real-gas behaviour, virial analysis and intermolecular effects.", "range": "Original enrichment"}, {"number": 12, "title": "Enrichment modules 41–50", "description": "Criticality, liquefaction, throttling and advanced exam strategy.", "range": "Original enrichment"}, {"number": 13, "title": "Dark visual laboratory I", "description": "Pressure, manometers, gas-law graphs, containers, mixtures, vapours and humidity.", "range": "Visual plates 1–9"}, {"number": 14, "title": "Dark visual laboratory II", "description": "Kinetic theory, molecular motion, potentials, real gases, throttling and coverage map.", "range": "Visual plates 10–17"}, {"number": 15, "title": "Solved examples 1–20", "description": "Modified problems on gas laws, vessels, pistons, balloons and process paths.", "range": "20 worked examples"}, {"number": 16, "title": "Solved examples 21–40", "description": "Modified problems on mixtures, vapours, humidity and phase equilibrium.", "range": "20 worked examples"}, {"number": 17, "title": "Solved examples 41–50", "description": "Modified problems on Clausius–Clapeyron, diffusion and successive effusion.", "range": "10 worked examples"}, {"number": 18, "title": "Forensic source archive", "description": "Searchable page-by-page audit retaining all 169 uploaded pages.", "range": "Pages 1–169"}] as const;

const chapterCss = `
        :root {
          color-scheme: dark;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .gasPage {
          --bg: #050914;
          --panel: rgba(15, 23, 42, 0.76);
          --panel-strong: #0d1629;
          --line: rgba(148, 163, 184, 0.18);
          --text: #e5eefb;
          --muted: #98a8bd;
          --cyan: #22d3ee;
          --violet: #a78bfa;
          --rose: #fb7185;
          --amber: #fbbf24;
          --green: #86efac;
          min-height: 100vh;
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background:
            radial-gradient(circle at 12% 5%, rgba(34, 211, 238, 0.12), transparent 30rem),
            radial-gradient(circle at 88% 4%, rgba(167, 139, 250, 0.12), transparent 34rem),
            linear-gradient(180deg, #07101f 0%, var(--bg) 32%, #030712 100%);
          position: relative;
          overflow: hidden;
        }
        .gasPage::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.26;
          background-image:
            linear-gradient(rgba(148,163,184,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.055) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
        }
        .shell { width: min(1180px, calc(100% - 32px)); margin: 0 auto; position: relative; z-index: 1; }
        .hero { padding: 88px 0 58px; }
        .heroGrid { display: grid; grid-template-columns: 1.18fr .82fr; gap: 30px; align-items: stretch; }
        .heroCopy, .heroPanel {
          border: 1px solid var(--line);
          background: linear-gradient(145deg, rgba(15,23,42,.88), rgba(7,13,26,.74));
          box-shadow: 0 24px 70px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.04);
          border-radius: 28px;
        }
        .heroCopy { padding: clamp(30px, 6vw, 68px); }
        .heroPanel { padding: 28px; display: flex; flex-direction: column; justify-content: space-between; }
        .pill { display: inline-flex; align-items: center; gap: 9px; border: 1px solid rgba(34,211,238,.28); border-radius: 999px; padding: 8px 13px; color: #a5f3fc; background: rgba(34,211,238,.07); font-size: 13px; font-weight: 760; letter-spacing: .08em; text-transform: uppercase; }
        .pill::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 18px var(--cyan); }
        h1 { font-size: clamp(44px, 7vw, 84px); line-height: .98; letter-spacing: -.055em; margin: 24px 0 22px; max-width: 820px; }
        .gradientText { background: linear-gradient(90deg, #f8fafc 10%, #67e8f9 52%, #c4b5fd 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .lead { font-size: clamp(17px, 2vw, 21px); line-height: 1.7; color: #bdcadb; max-width: 760px; margin: 0; }
        .heroMeta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .heroMeta span { padding: 9px 12px; border-radius: 12px; border: 1px solid var(--line); color: #cbd5e1; background: rgba(255,255,255,.025); font-size: 13px; }
        .heroPanel h3 { margin: 0 0 20px; font-size: 18px; color: #f8fafc; }
        .tocList { display: grid; gap: 10px; }
        .tocLink { display: grid; grid-template-columns: 40px 1fr auto; gap: 12px; align-items: center; padding: 13px 14px; border-radius: 14px; border: 1px solid transparent; color: #cbd5e1; text-decoration: none; transition: .2s ease; }
        .tocLink:hover { border-color: rgba(34,211,238,.25); background: rgba(34,211,238,.06); transform: translateX(3px); }
        .tocLink b { color: var(--cyan); font-size: 12px; letter-spacing: .1em; }
        .tocLink i { font-style: normal; color: #64748b; }
        .auditNote { margin-top: 24px; padding: 15px; border-radius: 14px; background: rgba(167,139,250,.08); border: 1px solid rgba(167,139,250,.2); color: #c4b5fd; line-height: 1.55; font-size: 13px; }
        .content { padding-bottom: 90px; }
        .section { margin-top: 34px; border: 1px solid var(--line); border-radius: 28px; padding: clamp(22px, 4vw, 48px); background: linear-gradient(145deg, rgba(13,22,41,.82), rgba(4,9,20,.78)); box-shadow: 0 22px 70px rgba(0,0,0,.28); }
        .sectionTitle { display: grid; grid-template-columns: 74px 1fr; gap: 20px; align-items: start; margin-bottom: 28px; scroll-margin-top: 28px; }
        .sectionIndex { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 18px; font-size: 18px; font-weight: 850; color: #06131b; background: linear-gradient(145deg, #67e8f9, #a5f3fc); box-shadow: 0 12px 30px rgba(34,211,238,.2); }
        .sectionTitle h2 { margin: 1px 0 7px; font-size: clamp(30px, 4vw, 46px); letter-spacing: -.035em; }
        .sectionTitle p { color: var(--muted); margin: 0; line-height: 1.6; font-size: 16px; }
        .grid2, .grid3 { display: grid; gap: 16px; }
        .grid2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .grid3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
        .conceptCard { border-radius: 18px; border: 1px solid var(--line); overflow: hidden; background: rgba(15,23,42,.7); min-width: 0; }
        .conceptCard.formula { border-color: rgba(34,211,238,.24); background: linear-gradient(145deg, rgba(8,47,73,.35), rgba(15,23,42,.78)); }
        .conceptCard.warning { border-color: rgba(251,113,133,.25); background: linear-gradient(145deg, rgba(76,5,25,.27), rgba(15,23,42,.78)); }
        .conceptCard.advanced { border-color: rgba(167,139,250,.27); background: linear-gradient(145deg, rgba(46,16,101,.24), rgba(15,23,42,.78)); }
        .conceptCard.example { border-color: rgba(251,191,36,.24); background: linear-gradient(145deg, rgba(69,26,3,.25), rgba(15,23,42,.78)); }
        .cardEyebrow { padding: 12px 16px; border-bottom: 1px solid var(--line); font-size: 12px; font-weight: 850; letter-spacing: .11em; text-transform: uppercase; color: #dbeafe; }
        .formula .cardEyebrow { color: #67e8f9; }
        .warning .cardEyebrow { color: #fda4af; }
        .advanced .cardEyebrow { color: #c4b5fd; }
        .example .cardEyebrow { color: #fde68a; }
        .cardBody { padding: 18px; color: #c8d5e5; line-height: 1.66; }
        .cardBody p { margin: 0 0 12px; }
        .cardBody p:last-child { margin-bottom: 0; }
        .cardBody ul, .cardBody ol { margin: 8px 0 0; padding-left: 21px; }
        .cardBody li { margin: 7px 0; }
        .math { color: #f8fafc; }
        .mathInline { white-space: nowrap; }
        .mathBlock { display: block; overflow-x: auto; padding: 10px 2px; }
        .mathBlock .katex-display { margin: 0; }
        .formulaRail { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; margin: 18px 0; }
        .formulaChip { border: 1px solid rgba(34,211,238,.2); border-radius: 15px; padding: 15px; background: rgba(2,132,199,.07); text-align: center; overflow-x: auto; }
        .formulaChip small { display: block; color: #94a3b8; margin-top: 6px; }
        .figure { margin: 18px 0; border-radius: 22px; border: 1px solid var(--line); background: linear-gradient(145deg, rgba(2,6,23,.68), rgba(15,23,42,.72)); padding: 16px; overflow: hidden; }
        .figureSvg { width: 100%; height: auto; display: block; }
        .figure figcaption { margin: 10px 6px 2px; color: #94a3b8; font-size: 13px; line-height: 1.55; }
        .dataTable { width: 100%; border-collapse: collapse; margin: 16px 0; overflow: hidden; border-radius: 14px; }
        .dataTable th, .dataTable td { padding: 12px 14px; border: 1px solid var(--line); text-align: left; vertical-align: top; }
        .dataTable th { color: #dbeafe; background: rgba(34,211,238,.07); font-size: 13px; }
        .dataTable td { color: #bdcadb; font-size: 14px; }
        .keyLine { margin: 20px 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(34,211,238,.35), transparent); }
        .note { padding: 14px 16px; border-left: 3px solid var(--amber); background: rgba(251,191,36,.07); border-radius: 0 12px 12px 0; color: #fef3c7; line-height: 1.6; margin: 15px 0; }
        .workedExample { border-radius: 18px; border: 1px solid var(--line); background: rgba(15,23,42,.68); overflow: hidden; margin: 12px 0; }
        .workedExample summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: 48px 1fr 28px; gap: 13px; align-items: center; padding: 16px; user-select: none; }
        .workedExample summary::-webkit-details-marker { display: none; }
        .workedExample summary:hover { background: rgba(34,211,238,.045); }
        .exampleNumber { width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; color: #07131e; background: linear-gradient(145deg, #fde68a, #fbbf24); font-weight: 900; font-size: 13px; }
        .workedExample summary strong { display: block; color: #f8fafc; font-size: 15px; }
        .workedExample summary small { display: block; color: #74849a; margin-top: 3px; }
        .expandMark { font-size: 24px; color: #67e8f9; transition: transform .2s ease; }
        .workedExample[open] .expandMark { transform: rotate(45deg); }
        .exampleContent { border-top: 1px solid var(--line); padding: 18px; }
        .questionBlock { padding: 15px; background: rgba(167,139,250,.07); border: 1px solid rgba(167,139,250,.18); border-radius: 14px; line-height: 1.65; color: #d8e1ef; }
        .miniLabel { display: block; color: #c4b5fd; font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 7px; }
        .solutionSteps { padding-left: 25px; color: #c5d1e1; line-height: 1.68; }
        .solutionSteps li { margin: 10px 0; padding-left: 5px; }
        .answerStrip { display: flex; justify-content: space-between; gap: 18px; align-items: center; padding: 14px 16px; border-radius: 13px; background: rgba(34,211,238,.085); border: 1px solid rgba(34,211,238,.22); }
        .answerStrip span { color: #67e8f9; font-size: 12px; text-transform: uppercase; letter-spacing: .1em; font-weight: 850; }
        .answerStrip strong { color: #ecfeff; text-align: right; }
        .subheading { margin: 30px 0 14px; font-size: 23px; letter-spacing: -.02em; color: #f8fafc; }
        .examplesGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; align-items: start; }
        .references { margin-top: 24px; padding: 20px; border-radius: 18px; border: 1px solid var(--line); color: #94a3b8; line-height: 1.65; background: rgba(2,6,23,.5); font-size: 13px; }
        .footerMark { text-align: center; color: #64748b; padding: 36px 0 60px; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; }
        @media (max-width: 920px) {
          .heroGrid, .grid3, .formulaRail { grid-template-columns: 1fr; }
          .grid2, .examplesGrid { grid-template-columns: 1fr; }
          .hero { padding-top: 28px; }
        }
        @media (max-width: 600px) {
          .shell { width: min(100% - 18px, 1180px); }
          .heroCopy, .heroPanel, .section { border-radius: 20px; }
          .heroCopy { padding: 27px 21px; }
          .heroPanel, .section { padding: 19px; }
          h1 { font-size: 43px; }
          .sectionTitle { grid-template-columns: 48px 1fr; gap: 12px; }
          .sectionIndex { width: 46px; height: 46px; border-radius: 13px; font-size: 14px; }
          .workedExample summary { grid-template-columns: 42px 1fr 20px; padding: 13px; }
          .answerStrip { align-items: flex-start; flex-direction: column; }
          .answerStrip strong { text-align: left; }
        }
      
        .partHero { padding: 46px 0 22px; }
        .partHeroCard { border: 1px solid var(--line); border-radius: 26px; padding: clamp(24px,4vw,44px); background: linear-gradient(145deg,rgba(15,23,42,.90),rgba(7,13,26,.78)); box-shadow: 0 22px 65px rgba(0,0,0,.34); }
        .partKicker { color: #67e8f9; font-size: 12px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
        .partHeroCard h1 { margin: 12px 0 10px; font-size: clamp(36px,5vw,62px); }
        .partHeroCard p { margin: 0; color: #aebed1; line-height: 1.65; max-width: 850px; }
        .partStrip { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); gap: 8px; margin: 16px 0 0; }
        .partStripLink { text-decoration: none; border: 1px solid var(--line); border-radius: 12px; padding: 10px 8px; text-align: center; color: #94a3b8; background: rgba(15,23,42,.55); font-size: 12px; transition: .18s ease; }
        .partStripLink:hover { color: #e2e8f0; border-color: rgba(34,211,238,.35); transform: translateY(-1px); }
        .partStripLink.active { color: #06131b; border-color: transparent; background: linear-gradient(145deg,#67e8f9,#a5f3fc); font-weight: 900; }
        .partPager { display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; align-items: center; padding: 8px 0 58px; }
        .pagerLink { text-decoration: none; color: #cbd5e1; border: 1px solid var(--line); border-radius: 14px; padding: 13px 15px; background: rgba(15,23,42,.62); }
        .pagerLink.next { text-align: right; }
        .pagerLink.disabled { opacity: .28; pointer-events: none; }
        .pagerHome { color: #67e8f9; text-decoration: none; font-weight: 800; }
        .hubHero { padding: 64px 0 26px; }
        .hubCard { border: 1px solid var(--line); border-radius: 28px; padding: clamp(28px,5vw,58px); background: linear-gradient(145deg,rgba(15,23,42,.90),rgba(7,13,26,.78)); }
        .hubCard h1 { margin: 16px 0; }
        .partsGrid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 14px; padding: 8px 0 70px; }
        .partCard { text-decoration: none; border: 1px solid var(--line); border-radius: 18px; padding: 20px; background: rgba(15,23,42,.68); transition: .2s ease; min-height: 160px; }
        .partCard:hover { transform: translateY(-3px); border-color: rgba(34,211,238,.35); background: rgba(8,47,73,.24); }
        .partCard b { color: #67e8f9; font-size: 12px; letter-spacing: .11em; }
        .partCard h2 { color: #f8fafc; margin: 12px 0 8px; font-size: 20px; }
        .partCard p { color: #94a3b8; margin: 0; line-height: 1.55; font-size: 14px; }
        .rangePill { display:inline-flex; margin-top:12px; padding:6px 9px; border-radius:999px; border:1px solid rgba(167,139,250,.22); color:#c4b5fd; font-size:11px; }
        @media (max-width: 920px) { .partStrip { grid-template-columns: repeat(3,minmax(0,1fr)); } .partsGrid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
        @media (max-width: 600px) { .partStrip { grid-template-columns: repeat(2,minmax(0,1fr)); } .partsGrid { grid-template-columns: 1fr; } .partPager { grid-template-columns: 1fr 1fr; } .pagerHome { grid-column: 1/-1; grid-row:1; text-align:center; } }
`;

export function PartShell({ part, children }: { part: number; children: React.ReactNode }) {
  const current = partDefinitions.find(item => item.number === part) ?? partDefinitions[0];
  const previous = part > 1 ? partDefinitions[part - 2] : null;
  const next = part < partDefinitions.length ? partDefinitions[part] : null;
  return (
    <main className="gasPage">
      <style>{chapterCss}</style>
      <div className="shell">
        <header className="partHero">
          <div className="partHeroCard">
            <div className="partKicker">JEE Advanced · Gaseous State · Part {String(part).padStart(2, "0")} of 18</div>
            <h1 className="gradientText">{current.title}</h1>
            <p>{current.description} <span className="rangePill">{current.range}</span></p>
            <nav className="partStrip" aria-label="Gaseous State parts">
              {partDefinitions.map(item => (
                <Link key={item.number} className={`partStripLink ${item.number === part ? "active" : ""}`} href={`/learn/gaseous-state/parts/part${String(item.number).padStart(2, "0")}`}>
                  {String(item.number).padStart(2, "0")}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="content">{children}</div>
        <nav className="partPager" aria-label="Previous and next part">
          {previous ? <Link className="pagerLink" href={`/learn/gaseous-state/parts/part${String(previous.number).padStart(2, "0")}`}>← {previous.title}</Link> : <span className="pagerLink disabled">← Previous</span>}
          <Link className="pagerHome" href="/learn/gaseous-state">All 18 parts</Link>
          {next ? <Link className="pagerLink next" href={`/learn/gaseous-state/parts/part${String(next.number).padStart(2, "0")}`}>{next.title} →</Link> : <span className="pagerLink next disabled">Next →</span>}
        </nav>
      </div>
    </main>
  );
}

export function ChapterHub() {
  return (
    <main className="gasPage">
      <style>{chapterCss}</style>
      <div className="shell">
        <header className="hubHero">
          <div className="hubCard">
            <span className="pill">JEE Advanced · Physical Chemistry</span>
            <h1 className="gradientText">Gaseous State</h1>
            <p className="lead">A complete 18-part master chapter built from all 169 uploaded pages, fifty original enrichment modules, seventeen dark visual plates and fifty modified solved examples.</p>
            <div className="heroMeta"><span>18 deployable parts</span><span>169-page source audit</span><span>50 enrichment modules</span><span>50 solved examples</span></div>
          </div>
        </header>
        <section className="partsGrid">
          {partDefinitions.map(item => (
            <Link className="partCard" key={item.number} href={`/learn/gaseous-state/parts/part${String(item.number).padStart(2, "0")}`}>
              <b>PART {String(item.number).padStart(2, "0")}</b>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="rangePill">{item.range}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
