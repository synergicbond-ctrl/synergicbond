import type { ReactNode } from "react";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";
import { AppShell } from "@/components/AppShell";
import type { Block, PartData, Tone } from "./_types";
import { parts } from "./_content";
import { partSlug } from "./_meta";
import { Visual } from "./_visuals";

export function Formula({ tex, block = false }: { tex: string; block?: boolean }) {
  const html = katex.renderToString(tex, {
    displayMode: block,
    throwOnError: true,
    strict: "warn",
    trust: false,
  });
  return <span className={block ? "mathBlock" : "mathInline"} dangerouslySetInnerHTML={{ __html: html }} />;
}

function RichText({ text }: { text: string }) {
  const segments = text.split(/(\$[^$]+\$)/g).filter(Boolean);
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.startsWith("$") && segment.endsWith("$")) {
          return <Formula key={index} tex={segment.slice(1, -1)} />;
        }
        return <span key={index}>{segment}</span>;
      })}
    </>
  );
}

function ToneBadge({ tone }: { tone: Tone }) {
  const labels: Record<Tone, string> = {
    concept: "Concept",
    formula: "Formula",
    warning: "Exam trap",
    reference: "Deeper reference",
    exam: "JEE Advanced lens",
    correction: "Source correction",
  };
  return <span className={`toneBadge ${tone}`}>{labels[tone]}</span>;
}

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "paragraph") {
    return <p className="bodyParagraph"><RichText text={block.text} /></p>;
  }
  if (block.type === "formula") {
    return (
      <div className="formulaPanel">
        <Formula tex={block.tex} block />
        {block.caption ? <p><RichText text={block.caption} /></p> : null}
      </div>
    );
  }
  if (block.type === "equationSet") {
    return (
      <div className="equationSet">
        <h4>{block.title}</h4>
        <div className="equationGrid">
          {block.equations.map((equation, index) => (
            <div className="equationItem" key={index}>
              <Formula tex={equation.tex} block />
              <p><RichText text={equation.note} /></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "bullets") {
    return (
      <ul className="contentList">
        {block.items.map((item, index) => <li key={index}><RichText text={item} /></li>)}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <div className="tableWrap">
        <table>
          <thead><tr>{block.headers.map((header) => <th key={header}><RichText text={header} /></th>)}</tr></thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><RichText text={cell} /></td>)}</tr>
            ))}
          </tbody>
        </table>
        {block.caption ? <p className="tableCaption"><RichText text={block.caption} /></p> : null}
      </div>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className={`callout ${block.tone}`}>
        <div className="calloutHeader"><ToneBadge tone={block.tone} /><h4>{block.title}</h4></div>
        <p><RichText text={block.text} /></p>
      </aside>
    );
  }
  if (block.type === "visual") {
    return (
      <figure className="visualCard">
        <div className="visualHeading"><span>Visual model</span><h4>{block.title}</h4></div>
        <Visual id={block.id} />
        <figcaption><RichText text={block.caption} /></figcaption>
      </figure>
    );
  }
  if (block.type === "derivation") {
    return (
      <div className="derivationCard">
        <div className="derivationTitle"><span>Derivation</span><h4>{block.title}</h4></div>
        {block.intro ? <p className="derivationIntro"><RichText text={block.intro} /></p> : null}
        <ol>
          {block.steps.map((step, index) => (
            <li key={index}>
              <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <b>{step.label}</b>
                {step.text ? <p><RichText text={step.text} /></p> : null}
                {step.tex ? <Formula tex={step.tex} block /> : null}
              </div>
            </li>
          ))}
        </ol>
        {block.result ? <div className="derivationResult"><span>Result</span><Formula tex={block.result} block /></div> : null}
      </div>
    );
  }
  if (block.type === "example") {
    const displayNumber = block.number <= 50
      ? String(block.number).padStart(2, "0")
      : block.number <= 55
        ? `A${block.number - 50}`
        : `I${block.number - 55}`;
    return (
      <details className="workedExample">
        <summary>
          <span className="exampleNumber">{displayNumber}</span>
          <div><b>{block.title}</b></div>
          <span className="expandIcon">+</span>
        </summary>
        <div className="exampleBody">
          <div className="questionBox"><span>Question</span><p><RichText text={block.question} /></p></div>
          <ol className="solutionList">
            {block.steps.map((step, index) => <li key={index}><span>{index + 1}</span><p><RichText text={step} /></p></li>)}
          </ol>
          <div className="finalAnswer"><span>Final answer</span><p><RichText text={block.answer} /></p></div>
        </div>
      </details>
    );
  }
  return null;
}


export function PartPage({ data }: { data: PartData }) {
  const previous = parts.find((part) => part.number === data.number - 1);
  const next = parts.find((part) => part.number === data.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Gaseous State"
      chapterSlug="gaseous-state"
      description="Complete JEE Advanced Gaseous State textbook chapter"
      free={false}
      lessonNumber={`Part ${String(data.number).padStart(2, "0")} of ${parts.length}`}
      lessonTitle={data.title}
      hubRef={{ href: "/learn/gaseous-state", label: "All parts" }}
      prevRef={previous ? { href: `/learn/gaseous-state/parts/${partSlug(previous.number)}`, label: previous.title } : undefined}
      nextRef={next ? { href: `/learn/gaseous-state/parts/${partSlug(next.number)}`, label: next.title } : undefined}
    >
      <div className="gasPage">
        <ChapterStyles />
        <div className="mx-auto max-w-3xl">
          {data.sections.map((section, index) => (
            <section className="chapterSection" id={section.id} key={section.id}>
              <header className="sectionHeader">
                <span className="sectionIndex">{String(index + 1).padStart(2, "0")}</span>
                <div><small>{section.eyebrow}</small><h2>{section.title}</h2><p>{section.lead}</p></div>
              </header>
              <div className="sectionBlocks">
                {section.blocks.map((block, blockIndex) => <BlockRenderer block={block} key={blockIndex} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

export function ChapterStyles() {
  return <style dangerouslySetInnerHTML={{ __html: chapterCss }} />;
}

const chapterCss = `
:root { color-scheme: dark; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
.gasPage {
  --bg: #030711;
  --surface: rgba(11, 19, 35, .86);
  --surface2: rgba(15, 26, 47, .74);
  --line: rgba(148, 163, 184, .18);
  --text: #eef6ff;
  --muted: #9eafc4;
  --cyan: #22d3ee;
  --blue: #60a5fa;
  --violet: #a78bfa;
  --rose: #fb7185;
  --amber: #fbbf24;
  --green: #86efac;
  position: relative;
  color: var(--text);
  font-family: inherit;
  background: transparent;
}
.ambientGrid { display: none; }
.shell { width: min(1180px, calc(100% - 32px)); margin-inline: auto; position: relative; z-index: 1; }
a { color: inherit; }
.kicker { display: inline-flex; align-items: center; gap: 9px; padding: 8px 13px; border: 1px solid rgba(34,211,238,.28); border-radius: 999px; color: #a5f3fc; background: rgba(34,211,238,.07); font-size: 12px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
.kicker::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 16px var(--cyan); }
.hubHero { padding: 84px 0 56px; display: grid; grid-template-columns: 1.16fr .84fr; gap: 28px; align-items: stretch; }
.hubHeroCopy, .hubOrbit, .partHeroGrid { border: 1px solid var(--line); background: linear-gradient(145deg, rgba(15,25,45,.91), rgba(5,10,22,.82)); box-shadow: 0 30px 80px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.04); border-radius: 30px; }
.hubHeroCopy { padding: clamp(30px, 5vw, 62px); }
.hubHero h1, .partHero h1 { margin: 24px 0 20px; font-size: clamp(46px, 7vw, 84px); line-height: .98; letter-spacing: -.055em; background: linear-gradient(90deg, #fff 6%, #67e8f9 55%, #c4b5fd 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.heroLead { margin: 0; max-width: 780px; color: #bdcadb; font-size: clamp(17px, 2vw, 21px); line-height: 1.72; }
.metricStrip { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.metricStrip span { display: inline-flex; align-items: center; gap: 7px; padding: 10px 13px; border: 1px solid var(--line); border-radius: 13px; background: rgba(255,255,255,.025); color: #cbd5e1; font-size: 13px; }
.metricStrip b { color: var(--cyan); }
.heroFormula { margin-top: 28px; padding: 19px; border: 1px solid rgba(167,139,250,.22); border-radius: 18px; background: rgba(167,139,250,.07); display: grid; grid-template-columns: minmax(180px,.42fr) 1fr; gap: 18px; align-items: center; }
.heroFormula p { color: #c4b5fd; line-height: 1.55; margin: 0; }
.hubOrbit { min-height: 480px; position: relative; display: grid; place-items: center; overflow: hidden; }
.orbit { position: absolute; border: 1px solid rgba(34,211,238,.24); border-radius: 50%; }
.orbitOne { width: 310px; height: 310px; animation: spin 18s linear infinite; }
.orbitTwo { width: 210px; height: 210px; transform: rotate(54deg); border-color: rgba(167,139,250,.28); animation: spinReverse 12s linear infinite; }
.orbit span { width: 15px; height: 15px; border-radius: 50%; position: absolute; left: 50%; top: -8px; background: var(--cyan); box-shadow: 0 0 24px var(--cyan); }
.orbitTwo span { background: var(--violet); box-shadow: 0 0 22px var(--violet); }
.orbitCore { width: 132px; height: 132px; display: grid; place-items: center; text-align: center; border-radius: 50%; border: 1px solid rgba(255,255,255,.15); background: radial-gradient(circle, rgba(34,211,238,.14), rgba(8,15,30,.96)); font-weight: 850; color: #e0f2fe; letter-spacing: .08em; box-shadow: 0 0 60px rgba(34,211,238,.14); }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes spinReverse { from { transform: rotate(54deg); } to { transform: rotate(-306deg); } }
.hubContent { padding: 20px 0 96px; }
.hubHeading { max-width: 780px; margin-bottom: 30px; }
.hubHeading span { color: var(--cyan); font-size: 12px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.hubHeading h2 { font-size: clamp(30px, 5vw, 52px); line-height: 1.08; letter-spacing: -.04em; margin: 12px 0; }
.hubHeading p { color: var(--muted); line-height: 1.65; }
.partGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.partCard { text-decoration: none; min-height: 245px; padding: 23px; display: flex; flex-direction: column; border: 1px solid var(--line); border-radius: 21px; background: linear-gradient(145deg, rgba(15,25,44,.84), rgba(6,11,23,.78)); transition: .22s ease; box-shadow: inset 0 1px 0 rgba(255,255,255,.03); }
.partCard:hover { transform: translateY(-5px); border-color: rgba(34,211,238,.35); box-shadow: 0 20px 50px rgba(0,0,0,.28); }
.partTopline { display: flex; justify-content: space-between; align-items: center; }
.partTopline span { color: var(--cyan); font-weight: 900; letter-spacing: .08em; }
.partTopline i { font-style: normal; padding: 5px 9px; border-radius: 999px; background: rgba(167,139,250,.1); color: #c4b5fd; font-size: 10px; text-transform: uppercase; letter-spacing: .1em; }
.partCard h3 { margin: 22px 0 11px; font-size: 22px; line-height: 1.18; }
.partCard p { margin: 0; color: var(--muted); line-height: 1.58; }
.partFoot { display: flex; justify-content: flex-end; gap: 12px; align-items: end; margin-top: auto; padding-top: 24px; color: #7f90a8; font-size: 12px; }
.partFoot b { color: #a5f3fc; }
.partHero { padding: 62px 0 32px; }
.backLink { display: inline-block; text-decoration: none; color: #8ca0ba; margin-bottom: 18px; font-size: 13px; }
.backLink:hover { color: var(--cyan); }
.partHeroGrid { padding: clamp(28px, 5vw, 58px); display: grid; grid-template-columns: 1fr .48fr; gap: 32px; }
.partHero h1 { font-size: clamp(40px, 6vw, 70px); }
.miniToc { display: flex; flex-direction: column; gap: 7px; padding-left: 22px; border-left: 1px solid var(--line); }
.miniToc > span { color: #7dd3fc; font-size: 11px; font-weight: 850; letter-spacing: .11em; text-transform: uppercase; margin-bottom: 8px; }
.miniToc a { text-decoration: none; color: #a9b7ca; font-size: 13px; line-height: 1.4; padding: 7px 8px; border-radius: 9px; display: grid; grid-template-columns: 30px 1fr; gap: 7px; }
.miniToc a:hover { color: #e6f8ff; background: rgba(34,211,238,.06); }
.miniToc b { color: #4f6b85; font-size: 10px; letter-spacing: .08em; }
.readingShell { max-width: 1040px; padding: 30px 0 72px; }
.chapterSection { scroll-margin-top: 24px; padding: 50px 0; border-bottom: 1px solid var(--line); }
.chapterSection:first-child { padding-top: 20px; }
.sectionHeader { display: grid; grid-template-columns: 56px 1fr; gap: 20px; margin-bottom: 28px; }
.sectionIndex { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 15px; border: 1px solid rgba(34,211,238,.28); background: rgba(34,211,238,.07); color: var(--cyan); font-size: 12px; font-weight: 900; letter-spacing: .08em; }
.sectionHeader small { color: #7dd3fc; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.sectionHeader h2 { margin: 7px 0 9px; font-size: clamp(30px, 4vw, 46px); line-height: 1.08; letter-spacing: -.035em; }
.sectionHeader p { color: var(--muted); margin: 0; max-width: 790px; line-height: 1.65; font-size: 16px; }
.sectionBlocks { display: grid; gap: 18px; }
.bodyParagraph { margin: 0; color: #c8d4e4; line-height: 1.82; font-size: 16px; }
.mathInline { display: inline-block; margin-inline: .08em; color: #eaf8ff; }
.mathBlock { display: block; overflow-x: auto; padding: 3px 0; color: #f6fbff; }
.formulaPanel { border: 1px solid rgba(34,211,238,.24); border-radius: 18px; padding: 21px; background: linear-gradient(135deg, rgba(34,211,238,.085), rgba(10,19,35,.74)); text-align: center; }
.formulaPanel p { color: #9fc5d1; margin: 10px auto 0; max-width: 760px; line-height: 1.55; font-size: 13px; }
.equationSet { border: 1px solid var(--line); border-radius: 20px; padding: 22px; background: var(--surface); }
.equationSet h4 { margin: 0 0 16px; font-size: 18px; }
.equationGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
.equationItem { padding: 16px; border-radius: 15px; background: rgba(255,255,255,.025); border: 1px solid rgba(148,163,184,.12); }
.equationItem p { color: var(--muted); margin: 8px 0 0; line-height: 1.5; font-size: 13px; text-align: center; }
.contentList { margin: 0; padding: 19px 24px 19px 42px; display: grid; gap: 10px; border: 1px solid var(--line); border-radius: 18px; background: rgba(11,19,35,.66); color: #c8d4e4; line-height: 1.7; }
.contentList li::marker { color: var(--cyan); }
.tableWrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 18px; background: rgba(9,16,30,.78); }
table { width: 100%; min-width: 650px; border-collapse: collapse; }
th, td { padding: 14px 16px; text-align: left; border-bottom: 1px solid rgba(148,163,184,.12); vertical-align: top; line-height: 1.55; }
th { color: #b9f4ff; background: rgba(34,211,238,.055); font-size: 12px; letter-spacing: .04em; }
td { color: #c2cfdf; font-size: 14px; }
tr:last-child td { border-bottom: 0; }
.tableCaption { margin: 0; padding: 13px 16px; color: #8296ae; font-size: 12px; line-height: 1.55; border-top: 1px solid var(--line); }
.callout { border-radius: 20px; padding: 22px; border: 1px solid var(--line); background: var(--surface); }
.calloutHeader { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; }
.callout h4 { margin: 0; font-size: 18px; }
.callout p { margin: 0; color: #c5d1e1; line-height: 1.78; }
.toneBadge { flex: none; padding: 6px 9px; border-radius: 999px; font-size: 9px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
.toneBadge.concept { color: #a5f3fc; background: rgba(34,211,238,.1); }
.toneBadge.formula { color: #bfdbfe; background: rgba(96,165,250,.12); }
.toneBadge.warning { color: #fde68a; background: rgba(251,191,36,.12); }
.toneBadge.reference { color: #ddd6fe; background: rgba(167,139,250,.14); }
.toneBadge.exam { color: #bbf7d0; background: rgba(134,239,172,.12); }
.toneBadge.correction { color: #fecdd3; background: rgba(251,113,133,.12); }
.callout.reference { border-color: rgba(167,139,250,.28); background: linear-gradient(145deg, rgba(167,139,250,.09), rgba(10,17,32,.84)); }
.callout.warning { border-color: rgba(251,191,36,.26); background: linear-gradient(145deg, rgba(251,191,36,.075), rgba(10,17,32,.84)); }
.callout.correction { border-color: rgba(251,113,133,.28); background: linear-gradient(145deg, rgba(251,113,133,.07), rgba(10,17,32,.84)); }
.callout.exam { border-color: rgba(134,239,172,.25); background: linear-gradient(145deg, rgba(134,239,172,.07), rgba(10,17,32,.84)); }
.visualCard { margin: 0; border: 1px solid var(--line); border-radius: 22px; padding: 20px; background: linear-gradient(145deg, rgba(11,20,38,.9), rgba(3,8,18,.88)); overflow: hidden; }
.visualHeading span { color: var(--cyan); font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
.visualHeading h4 { margin: 6px 0 14px; font-size: 19px; }
.visualCard svg { width: 100%; height: auto; min-height: 290px; display: block; border-radius: 15px; background: radial-gradient(circle at 50% 20%, rgba(34,211,238,.055), transparent 62%), #050a14; }
.visualCard figcaption { color: #91a4bb; line-height: 1.62; font-size: 13px; margin-top: 14px; }
.derivationCard { border: 1px solid rgba(96,165,250,.24); border-radius: 22px; padding: 22px; background: linear-gradient(145deg, rgba(59,130,246,.07), rgba(8,15,29,.86)); }
.derivationTitle { display: flex; align-items: center; gap: 11px; }
.derivationTitle span { color: #93c5fd; font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; padding: 6px 9px; border-radius: 999px; background: rgba(96,165,250,.12); }
.derivationTitle h4 { margin: 0; font-size: 20px; }
.derivationIntro { color: var(--muted); line-height: 1.65; }
.derivationCard ol { list-style: none; padding: 0; margin: 20px 0 0; display: grid; gap: 12px; }
.derivationCard li { display: grid; grid-template-columns: 42px 1fr; gap: 13px; padding: 15px; border-radius: 15px; border: 1px solid rgba(148,163,184,.12); background: rgba(255,255,255,.024); }
.stepNumber { width: 34px; height: 34px; border-radius: 11px; display: grid; place-items: center; background: rgba(96,165,250,.1); color: #93c5fd; font-size: 10px; font-weight: 900; }
.derivationCard li b { color: #e5efff; }
.derivationCard li p { margin: 6px 0 0; color: #aebed2; line-height: 1.65; }
.derivationResult { margin-top: 15px; border-radius: 15px; padding: 16px; background: rgba(34,211,238,.075); border: 1px solid rgba(34,211,238,.22); text-align: center; }
.derivationResult > span { display: block; color: var(--cyan); font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; }
.workedExample { border: 1px solid var(--line); border-radius: 20px; overflow: hidden; background: rgba(8,14,27,.82); }
.workedExample summary { cursor: pointer; list-style: none; display: grid; grid-template-columns: 52px 1fr 24px; gap: 14px; align-items: center; padding: 18px; }
.workedExample summary::-webkit-details-marker { display: none; }
.exampleNumber { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: #bbf7d0; background: rgba(134,239,172,.08); border: 1px solid rgba(134,239,172,.18); font-size: 11px; font-weight: 900; }
.workedExample summary b { display: block; font-size: 16px; }
.workedExample summary small { display: block; color: #71859f; margin-top: 5px; }
.expandIcon { color: var(--cyan); font-size: 22px; transition: .2s; }
.workedExample[open] .expandIcon { transform: rotate(45deg); }
.exampleBody { border-top: 1px solid var(--line); padding: 18px; display: grid; gap: 14px; }
.questionBox, .finalAnswer { border-radius: 15px; padding: 16px; }
.questionBox { background: rgba(96,165,250,.065); border: 1px solid rgba(96,165,250,.18); }
.finalAnswer { background: rgba(134,239,172,.065); border: 1px solid rgba(134,239,172,.18); }
.questionBox span, .finalAnswer span { color: #93c5fd; font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
.finalAnswer span { color: #86efac; }
.questionBox p, .finalAnswer p { margin: 8px 0 0; color: #d7e2ef; line-height: 1.68; }
.solutionList { list-style: none; padding: 0; margin: 0; display: grid; gap: 9px; }
.solutionList li { display: grid; grid-template-columns: 32px 1fr; gap: 11px; align-items: start; padding: 13px; border-radius: 13px; background: rgba(255,255,255,.022); }
.solutionList li > span { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 9px; background: rgba(167,139,250,.1); color: #c4b5fd; font-size: 10px; font-weight: 900; }
.solutionList p { margin: 2px 0 0; color: #b8c6d7; line-height: 1.65; }
.partNav { padding: 26px 0 86px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.navButton { min-height: 92px; text-decoration: none; padding: 17px 19px; border: 1px solid var(--line); border-radius: 18px; background: rgba(10,18,33,.8); display: flex; flex-direction: column; justify-content: center; gap: 7px; transition: .2s; }
.navButton:hover { border-color: rgba(34,211,238,.3); transform: translateY(-2px); }
.navButton span { color: #70839d; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; }
.navButton b { color: #dce9f7; }
.navButton.next { text-align: right; }
@media (max-width: 900px) {
  .hubHero, .partHeroGrid { grid-template-columns: 1fr; }
  .hubOrbit { min-height: 330px; }
  .partGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .miniToc { border-left: 0; padding-left: 0; border-top: 1px solid var(--line); padding-top: 20px; }
}
@media (max-width: 620px) {
  .shell { width: min(100% - 22px, 1180px); }
  .hubHero { padding-top: 38px; }
  .hubHeroCopy, .hubOrbit, .partHeroGrid { border-radius: 22px; }
  .hubHeroCopy, .partHeroGrid { padding: 24px; }
  .partGrid { grid-template-columns: 1fr; }
  .heroFormula { grid-template-columns: 1fr; }
  .sectionHeader { grid-template-columns: 42px 1fr; gap: 13px; }
  .sectionIndex { width: 40px; height: 40px; }
  .equationGrid { grid-template-columns: 1fr; }
  .partNav { grid-template-columns: 1fr; }
  .visualCard { padding: 13px; }
  .visualCard svg { min-height: 230px; }
}
`;
