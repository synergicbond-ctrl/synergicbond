import Link from "next/link";
import katex from "katex";
import { saltAnalysisParts } from "./index";
import { SaltAnalysisStructure } from "./SaltAnalysisStructures";
import { SaltAnalysisVisual } from "./SaltAnalysisVisuals";
import { SaltAnalysisFigure } from "./SaltAnalysisFigures";

type Metadata = {
  part: number;
  title: string;
  chapter: string;
  exam: string;
};

const sfProFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const emphasisClasses = [
  "font-semibold text-cyan-300",
  "font-semibold text-sky-300",
  "font-semibold text-indigo-300",
  "font-semibold text-violet-300",
  "font-semibold text-fuchsia-300",
  "font-semibold text-rose-300",
  "font-semibold text-orange-300",
  "font-semibold text-amber-300",
  "font-semibold text-lime-300",
  "font-semibold text-emerald-300",
  "font-semibold text-teal-300",
];

const majorHeadingGradients = [
  "from-cyan-300 via-sky-300 to-violet-400",
  "from-emerald-300 via-cyan-300 to-blue-400",
  "from-violet-300 via-fuchsia-300 to-rose-300",
  "from-amber-300 via-orange-300 to-rose-300",
  "from-lime-300 via-emerald-300 to-cyan-300",
  "from-sky-300 via-indigo-300 to-fuchsia-300",
];

const minorHeadingGradients = [
  "from-cyan-300 to-sky-300",
  "from-emerald-300 to-lime-300",
  "from-violet-300 to-fuchsia-300",
  "from-amber-300 to-orange-300",
  "from-rose-300 to-pink-300",
  "from-teal-300 to-cyan-300",
];

const quoteThemes = [
  "border-cyan-400/80 bg-cyan-950/25 shadow-cyan-950/30",
  "border-violet-400/80 bg-violet-950/25 shadow-violet-950/30",
  "border-amber-400/80 bg-amber-950/20 shadow-amber-950/30",
  "border-emerald-400/80 bg-emerald-950/20 shadow-emerald-950/30",
  "border-rose-400/80 bg-rose-950/20 shadow-rose-950/30",
];

const markerThemes = [
  "marker:text-cyan-400",
  "marker:text-violet-400",
  "marker:text-amber-400",
  "marker:text-emerald-400",
  "marker:text-rose-400",
  "marker:text-sky-400",
];

const tableHeaderThemes = [
  "bg-cyan-950/60 text-cyan-200",
  "bg-violet-950/60 text-violet-200",
  "bg-amber-950/50 text-amber-200",
  "bg-emerald-950/50 text-emerald-200",
  "bg-rose-950/50 text-rose-200",
  "bg-sky-950/60 text-sky-200",
];

const tableCellHighlights = [
  "text-cyan-200",
  "text-violet-200",
  "text-amber-200",
  "text-emerald-200",
  "text-rose-200",
  "text-sky-200",
];

function colourIndex(value: string, size: number) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash % size;
}

function inlineMarkup(value: string) {
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\$([^$\n]+)\$/g, (_, latex) =>
      katex.renderToString(latex, { throwOnError: false })
    )
    .replace(/\*\*([^*]+)\*\*/g, (_, label) => {
      const className =
        emphasisClasses[colourIndex(label, emphasisClasses.length)];
      return `<strong class="${className}">${label}</strong>`;
    })
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded-md border border-fuchsia-400/20 bg-fuchsia-950/35 px-1.5 py-0.5 font-semibold text-fuchsia-200">$1</code>'
    );
}

function renderBlocks(markdown: string) {
  const lines = markdown.trim().split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let headingIndex = 0;
  let quoteIndex = 0;
  let tableIndex = 0;
  let listIndex = 0;
  let blockIndex = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") {
      i++;
      continue;
    }

    const structure = line.match(/^\[STRUCTURE:([a-z0-9-]+)\]$/);
    if (structure) {
      nodes.push(
        <div key={`structure-${blockIndex++}`} className="my-7">
          <SaltAnalysisStructure id={structure[1]} />
        </div>
      );
      i++;
      continue;
    }

    const visual = line.match(/^\[VISUAL:([a-z0-9-]+)\]$/);
    if (visual) {
      nodes.push(
        <div key={`visual-${blockIndex++}`} className="my-7">
          <SaltAnalysisVisual id={visual[1]} />
        </div>
      );
      i++;
      continue;
    }

    const figure = line.match(/^\[FIGURE:([a-z0-9-]+)\]$/);
    if (figure) {
      nodes.push(
        <div key={`figure-${blockIndex++}`} className="my-7">
          <SaltAnalysisFigure id={figure[1]} />
        </div>
      );
      i++;
      continue;
    }

    if (line.startsWith("$$")) {
      const equation: string[] = [line.replace(/^\$\$/, "")];
      while (
        !equation[equation.length - 1].endsWith("$$") &&
        ++i < lines.length
      ) {
        equation.push(lines[i].trim());
      }
      const latex = equation.join(" ").replace(/\$\$$/, "");
      nodes.push(
        <div
          key={`equation-${blockIndex++}`}
          className="my-5 rounded-lg bg-gradient-to-r from-cyan-400/60 via-violet-400/50 to-amber-400/60 p-px shadow-lg shadow-cyan-950/20"
        >
          <div
            className="overflow-x-auto rounded-[15px] bg-[#050b14] px-4 py-3 text-center text-slate-50"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(latex, {
                displayMode: true,
                throwOnError: false,
              }),
            }}
          />
        </div>
      );
      i++;
      continue;
    }

    if (/^#{1,4} /.test(line)) {
      const level = line.match(/^#+/)![0].length;
      const label = line.replace(/^#{1,4}\s+/, "");
      const Tag = level <= 2 ? "h2" : "h3";
      const isMajor = level <= 2;
      const gradient = isMajor
        ? majorHeadingGradients[headingIndex % majorHeadingGradients.length]
        : minorHeadingGradients[headingIndex % minorHeadingGradients.length];
      headingIndex++;

      nodes.push(
        <div
          key={`heading-${blockIndex++}`}
          className={isMajor ? "mb-5 mt-11" : "mb-3 mt-8"}
        >
          <Tag
            className={`${
              isMajor
                ? "text-2xl font-extrabold tracking-tight sm:text-3xl"
                : "text-lg font-bold sm:text-xl"
            } bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            dangerouslySetInnerHTML={{ __html: inlineMarkup(label) }}
          />
          <div
            className={`mt-2 h-[3px] rounded-full bg-gradient-to-r ${gradient} ${
              isMajor ? "w-28" : "w-16"
            }`}
          />
        </div>
      );
      i++;
      continue;
    }

    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      const theme = quoteThemes[quoteIndex % quoteThemes.length];
      quoteIndex++;
      nodes.push(
        <aside
          key={`quote-${blockIndex++}`}
          className={`my-6 rounded-r-2xl border-l-4 px-5 py-4 text-slate-100 shadow-lg ${theme}`}
          dangerouslySetInnerHTML={{
            __html: inlineMarkup(quote.join(" ")),
          }}
        />
      );
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i]
          .trim()
          .slice(1, -1)
          .split("|")
          .map((item) => item.trim());
        if (!row.every((item) => /^:?-+:?$/.test(item))) rows.push(row);
        i++;
      }
      const [head, ...rest] = rows;
      const currentTable = tableIndex++;
      nodes.push(
        <div
          key={`table-${blockIndex++}`}
          className="my-6 rounded-lg bg-gradient-to-r from-cyan-400/45 via-violet-400/40 to-amber-400/45 p-px shadow-xl shadow-black/20"
        >
          <div className="overflow-x-auto rounded-[15px] bg-[#050a12]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {head?.map((cell, columnIndex) => (
                    <th
                      key={columnIndex}
                      className={`border-b border-r border-slate-700/70 px-3 py-3 text-left font-bold last:border-r-0 ${
                        tableHeaderThemes[
                          (currentTable + columnIndex) % tableHeaderThemes.length
                        ]
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: inlineMarkup(cell),
                      }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {rest.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-800/80 bg-slate-950/35 odd:bg-slate-900/45 last:border-b-0 hover:bg-slate-800/45"
                  >
                    {row.map((cell, columnIndex) => (
                      <td
                        key={columnIndex}
                        className={`border-r border-slate-800/80 px-3 py-3 align-top leading-6 last:border-r-0 ${
                          columnIndex === 0
                            ? `font-semibold ${
                                tableCellHighlights[
                                  (currentTable + rowIndex) %
                                    tableCellHighlights.length
                                ]
                              }`
                            : "text-slate-200"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: inlineMarkup(cell),
                        }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      continue;
    }

    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (
        i < lines.length &&
        (ordered
          ? /^\d+\. /.test(lines[i].trim())
          : /^[-*] /.test(lines[i].trim()))
      ) {
        items.push(
          lines[i]
            .trim()
            .replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, "")
        );
        i++;
      }
      const Tag = ordered ? "ol" : "ul";
      const markerTheme = markerThemes[listIndex % markerThemes.length];
      listIndex++;
      nodes.push(
        <Tag
          key={`list-${blockIndex++}`}
          className={`my-5 space-y-2.5 pl-6 leading-7 text-slate-200 ${
            ordered ? "list-decimal" : "list-disc"
          } ${markerTheme}`}
        >
          {items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="pl-1"
              dangerouslySetInnerHTML={{ __html: inlineMarkup(item) }}
            />
          ))}
        </Tag>
      );
      continue;
    }

    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4} |\$\$|>|[-*] |\d+\. |\||---$)/.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    nodes.push(
      <p
        key={`paragraph-${blockIndex++}`}
        className="my-3.5 leading-7 text-slate-200 selection:bg-fuchsia-500/30 selection:text-white"
        dangerouslySetInnerHTML={{
          __html: inlineMarkup(para.join(" ")),
        }}
      />
    );
  }
  return nodes;
}

function PartNavigation({
  part,
  position,
}: {
  part: number;
  position: "top" | "bottom";
}) {
  const currentIndex = saltAnalysisParts.findIndex((item) => item.id === part);

  const previousPart =
    currentIndex > 0 ? saltAnalysisParts[currentIndex - 1] : null;

  const nextPart =
    currentIndex >= 0 && currentIndex < saltAnalysisParts.length - 1
      ? saltAnalysisParts[currentIndex + 1]
      : null;

  const backHref =
    previousPart?.href ?? "/learn/jee-advanced/salt-analysis";

  const nextHref = nextPart?.href ?? "/learn/jee-advanced/salt-analysis";

  const backTitle = previousPart
    ? `Previous: ${previousPart.title}`
    : "Salt Analysis overview";

  const nextTitle = nextPart
    ? `Next: ${nextPart.title}`
    : "Salt Analysis overview";

  const backLabel = previousPart
    ? `← ${String(previousPart.id).padStart(2, "0")} · Back`
    : "← Overview";

  const nextLabel = nextPart
    ? `Next · ${String(nextPart.id).padStart(2, "0")} →`
    : "Overview →";

  return (
    <nav
      aria-label={`${
        position === "top" ? "Top" : "Bottom"
      } Salt Analysis navigation`}
      className={`${
        position === "top"
          ? "mb-5"
          : "mt-9 border-t border-slate-700/60 pt-5"
      } flex items-center justify-between gap-3`}
    >
      <Link
        href={backHref}
        title={backTitle}
        aria-label={backTitle}
        className="inline-flex w-fit items-center whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400/70 via-sky-400/60 to-indigo-400/70 p-px text-xs font-bold transition hover:scale-[1.02] sm:text-sm"
      >
        <span className="rounded-full bg-[#050a12] px-3 py-1.5 text-cyan-200 transition hover:bg-cyan-950/55 hover:text-white">
          {backLabel}
        </span>
      </Link>

      <Link
        href={nextHref}
        title={nextTitle}
        aria-label={nextTitle}
        className="inline-flex w-fit items-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-400/70 via-fuchsia-400/60 to-orange-400/70 p-px text-xs font-bold transition hover:scale-[1.02] sm:text-sm"
      >
        <span className="rounded-full bg-[#050a12] px-3 py-1.5 text-violet-200 transition hover:bg-violet-950/55 hover:text-white">
          {nextLabel}
        </span>
      </Link>
    </nav>
  );
}

export function SaltAnalysisArticle({
  metadata,
  content,
}: {
  metadata: Metadata;
  content: string;
}) {
  return (
    <article
      className="relative mx-auto max-w-6xl overflow-hidden bg-[#050910] px-5 py-8 text-slate-100 sm:px-8 sm:py-10"
      style={{
        fontFamily: sfProFont,
        backgroundImage:
          "radial-gradient(circle at 8% 0%, rgba(34,211,238,0.10), transparent 27%), radial-gradient(circle at 92% 5%, rgba(168,85,247,0.10), transparent 28%), radial-gradient(circle at 50% 100%, rgba(251,146,60,0.07), transparent 32%)",
      }}
    >
      <header className="relative mb-7 border-b border-slate-700/70 pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
          <span className="text-cyan-300">{metadata.exam}</span>
          <span className="text-slate-600">•</span>
          <span className="text-violet-300">{metadata.chapter}</span>
          <span className="rounded-full border border-amber-400/25 bg-amber-950/25 px-2.5 py-1 text-amber-300">
            Part {String(metadata.part).padStart(2, "0")}
          </span>
        </div>

        <h1 className="max-w-5xl bg-clip-text text-3xl font-black leading-tight tracking-tight text-transparent sm:text-4xl lg:text-5xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #67e8f9 0%, #7dd3fc 16%, #a5b4fc 32%, #c4b5fd 48%, #f0abfc 64%, #fda4af 80%, #fdba74 100%)",
          }}>
          {metadata.title}
        </h1>

        <div className="mt-4 h-1 w-40 rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #22d3ee, #60a5fa, #8b5cf6, #d946ef, #fb7185, #f59e0b)",
          }} />
      </header>

      <PartNavigation part={metadata.part} position="top" />

      <section className="relative">{renderBlocks(content)}</section>

      <PartNavigation part={metadata.part} position="bottom" />
    </article>
  );
}
