import katex from "katex";
import { AppShell } from "@/components/AppShell";
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

// Content-scale rotation. Chemistry notes are allowed the --chem-* semantic
// scale (meaning only); chrome around them stays flat + single-accent. See
// app/globals.css "Two colour layers" note. Rotation is kept (not collapsed
// to one colour) so long-form structure still reads, but every stop is now
// one of the five design-system content tokens instead of an arbitrary hue.
const emphasisClasses = [
  "font-semibold text-[var(--chem-bond)]",
  "font-semibold text-[var(--chem-energy)]",
  "font-semibold text-[var(--chem-orbital)]",
  "font-semibold text-[var(--chem-rule)]",
  "font-semibold text-[var(--chem-trap)]",
];

const majorHeadingGradients = [
  "text-[var(--chem-bond)]",
  "text-[var(--chem-orbital)]",
  "text-[var(--chem-rule)]",
  "text-[var(--chem-energy)]",
];

const minorHeadingGradients = [
  "text-[var(--chem-bond)]",
  "text-[var(--chem-orbital)]",
  "text-[var(--chem-rule)]",
  "text-[var(--chem-energy)]",
];

const quoteThemes = [
  "border-[var(--chem-bond)] bg-[var(--surface)]",
  "border-[var(--chem-orbital)] bg-[var(--surface)]",
  "border-[var(--chem-energy)] bg-[var(--surface)]",
  "border-[var(--chem-rule)] bg-[var(--surface)]",
  "border-[var(--chem-trap)] bg-[var(--surface)]",
];

const markerThemes = [
  "marker:text-[var(--chem-bond)]",
  "marker:text-[var(--chem-orbital)]",
  "marker:text-[var(--chem-energy)]",
  "marker:text-[var(--chem-rule)]",
  "marker:text-[var(--chem-trap)]",
];

const tableHeaderThemes = [
  "bg-[var(--surface-2)] text-[var(--chem-bond)]",
  "bg-[var(--surface-2)] text-[var(--chem-orbital)]",
  "bg-[var(--surface-2)] text-[var(--chem-energy)]",
  "bg-[var(--surface-2)] text-[var(--chem-rule)]",
  "bg-[var(--surface-2)] text-[var(--chem-trap)]",
];

const tableCellHighlights = [
  "text-[var(--chem-bond)]",
  "text-[var(--chem-orbital)]",
  "text-[var(--chem-energy)]",
  "text-[var(--chem-rule)]",
  "text-[var(--chem-trap)]",
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
          className="my-5 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center text-[var(--foreground)]"
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(latex, {
              displayMode: true,
              throwOnError: false,
            }),
          }}
        />
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
            } ${gradient}`}
            dangerouslySetInnerHTML={{ __html: inlineMarkup(label) }}
          />
          <div
            className={`mt-2 h-[3px] rounded-full bg-current ${gradient} ${
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
          className={`my-6 rounded-r-lg border-l-4 px-5 py-4 text-[var(--text-body)] ${theme}`}
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
          className="my-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]"
        >
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {head?.map((cell, columnIndex) => (
                    <th
                      key={columnIndex}
                      className={`border-b border-r border-[var(--border)] px-3 py-3 text-left font-bold last:border-r-0 ${
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
                    className="border-b border-[var(--border)] odd:bg-[var(--surface-2)] last:border-b-0 hover:bg-[var(--surface-hover)]"
                  >
                    {row.map((cell, columnIndex) => (
                      <td
                        key={columnIndex}
                        className={`border-r border-[var(--border)] px-3 py-3 align-top leading-6 last:border-r-0 ${
                          columnIndex === 0
                            ? `font-semibold ${
                                tableCellHighlights[
                                  (currentTable + rowIndex) %
                                    tableCellHighlights.length
                                ]
                              }`
                            : "text-[var(--text-body)]"
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
          className={`my-5 space-y-2.5 pl-6 leading-7 text-[var(--text-body)] ${
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
        className="my-3.5 leading-7 text-[var(--text-body)]"
        dangerouslySetInnerHTML={{
          __html: inlineMarkup(para.join(" ")),
        }}
      />
    );
  }
  return nodes;
}


export function SaltAnalysisArticle({
  metadata,
  content,
}: {
  metadata: Metadata;
  content: string;
}) {
  const currentIndex = saltAnalysisParts.findIndex((item) => item.id === metadata.part);
  const previousPart = currentIndex > 0 ? saltAnalysisParts[currentIndex - 1] : null;
  const nextPart =
    currentIndex >= 0 && currentIndex < saltAnalysisParts.length - 1
      ? saltAnalysisParts[currentIndex + 1]
      : null;

  return (
    <AppShell
      discipline={`${metadata.exam} · Inorganic Chemistry`}
      chapterTitle="Salt Analysis"
      chapterSlug="salt-analysis"
      description="Systematic separation, selective reactions, confirmatory tests, ionic equilibria and analytical reasoning."
      free={false}
      lessonNumber={`Part ${String(metadata.part).padStart(2, "0")} of ${saltAnalysisParts.length}`}
      lessonTitle={metadata.title}
      hubRef={{ href: "/learn/jee-advanced/salt-analysis", label: "All parts" }}
      prevRef={previousPart ? { href: previousPart.href, label: `Part ${String(previousPart.id).padStart(2, "0")}` } : undefined}
      nextRef={nextPart ? { href: nextPart.href, label: `Part ${String(nextPart.id).padStart(2, "0")}` } : undefined}
    >
      <article className="mx-auto max-w-3xl">
        <section className="relative">{renderBlocks(content)}</section>
      </article>
    </AppShell>
  );
}
