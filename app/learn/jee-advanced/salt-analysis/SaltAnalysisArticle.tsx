import katex from "katex";
import { SaltAnalysisStructure } from "./SaltAnalysisStructures";
import { SaltAnalysisVisual } from "./SaltAnalysisVisuals";
import { SaltAnalysisFigure } from "./SaltAnalysisFigures";

type Metadata = {
  part: number;
  title: string;
  chapter: string;
  exam: string;
};

function inlineMarkup(value: string) {
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\$([^$\n]+)\$/g, (_, latex) =>
      katex.renderToString(latex, { throwOnError: false })
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderBlocks(markdown: string) {
  const lines = markdown.trim().split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") { i++; continue; }

    const structure = line.match(/^\[STRUCTURE:([a-z0-9-]+)\]$/);
    if (structure) {
      nodes.push(<SaltAnalysisStructure id={structure[1]} />);
      i++; continue;
    }

    const visual = line.match(/^\[VISUAL:([a-z0-9-]+)\]$/);
    if (visual) {
      nodes.push(<SaltAnalysisVisual id={visual[1]} />);
      i++; continue;
    }

    const figure = line.match(/^\[FIGURE:([a-z0-9-]+)\]$/);
    if (figure) {
      nodes.push(<SaltAnalysisFigure id={figure[1]} />);
      i++; continue;
    }

    if (line.startsWith("$$")) {
      const equation: string[] = [line.replace(/^\$\$/, "")];
      while (!equation[equation.length - 1].endsWith("$$") && ++i < lines.length) {
        equation.push(lines[i].trim());
      }
      const latex = equation.join(" ").replace(/\$\$$/, "");
      nodes.push(
        <div className="my-4 overflow-x-auto rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 text-center"
          dangerouslySetInnerHTML={{ __html: katex.renderToString(latex, { displayMode: true, throwOnError: false }) }} />
      );
      i++; continue;
    }

    if (/^#{1,4} /.test(line)) {
      const level = line.match(/^#+/)![0].length;
      const label = line.replace(/^#{1,4}\s+/, "");
      const Tag = level <= 2 ? "h2" : "h3";
      nodes.push(<Tag className={level <= 2 ? "mt-10 mb-4 text-2xl font-bold text-cyan-200" : "mt-7 mb-3 text-lg font-semibold text-amber-200"}
        dangerouslySetInnerHTML={{ __html: inlineMarkup(label) }} />);
      i++; continue;
    }

    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, "")); i++;
      }
      nodes.push(<aside className="my-5 rounded-xl border-l-4 border-cyan-400 bg-cyan-950/30 px-5 py-4 text-slate-200"
        dangerouslySetInnerHTML={{ __html: inlineMarkup(quote.join(" ")) }} />);
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i].trim().slice(1, -1).split("|").map(x => x.trim());
        if (!row.every(x => /^:?-+:?$/.test(x))) rows.push(row);
        i++;
      }
      const [head, ...rest] = rows;
      nodes.push(<div className="my-5 overflow-x-auto"><table className="w-full border-collapse text-sm">
        <thead><tr>{head?.map((c, n) => <th key={n} className="border border-slate-700 bg-slate-800 px-3 py-2 text-left text-cyan-200" dangerouslySetInnerHTML={{__html:inlineMarkup(c)}} />)}</tr></thead>
        <tbody>{rest.map((r, n) => <tr key={n} className="odd:bg-slate-900/60">{r.map((c, m) => <td key={m} className="border border-slate-800 px-3 py-2 align-top" dangerouslySetInnerHTML={{__html:inlineMarkup(c)}} />)}</tr>)}</tbody>
      </table></div>);
      continue;
    }

    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i].trim()) : /^[-*] /.test(lines[i].trim()))) {
        items.push(lines[i].trim().replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, "")); i++;
      }
      const Tag = ordered ? "ol" : "ul";
      nodes.push(<Tag className={`my-4 space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"} marker:text-cyan-400`}>
        {items.map((item, n) => <li key={n} dangerouslySetInnerHTML={{__html:inlineMarkup(item)}} />)}
      </Tag>);
      continue;
    }

    const para: string[] = [line]; i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4} |\$\$|>|[-*] |\d+\. |\||---$)/.test(lines[i].trim())) {
      para.push(lines[i].trim()); i++;
    }
    nodes.push(<p className="my-3 leading-7 text-slate-200" dangerouslySetInnerHTML={{__html:inlineMarkup(para.join(" "))}} />);
  }
  return nodes;
}

export function SaltAnalysisArticle({ metadata, content }: { metadata: Metadata; content: string }) {
  return (
    <article className="mx-auto max-w-5xl bg-[#07111f] px-5 py-10 text-slate-100 sm:px-8">
      <header className="mb-8 border-b border-cyan-400/20 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">{metadata.exam} • {metadata.chapter}</p>
        <h1 className="mt-3 text-3xl font-bold text-white">{metadata.title}</h1>
      </header>
      {renderBlocks(content)}
    </article>
  );
}
