import katex from "katex";
import { formalChargeNotes } from "./formal-charge-notes";

export const metadata = {
  title: "Formal Charge | Chemical Bonding | JEE Advanced",
  description:
    "Complete textbook-style JEE Advanced formal-charge notes with Lewis structures, resonance, worked examples, comparison tables, bond order and experimental applications.",
};

type BlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "structure"
  | "paragraph";

type NoteBlock = {
  kind: BlockKind;
  text: string;
  raw?: string;
  items?: string[];
};

const applications = [
  "Choosing the Most Stable Lewis Structure",
  "Deciding the Atomic Arrangement or Central Atom",
  "Ranking Resonance Contributors",
  "Locating Positive and Negative Charge",
  "Comparing the Stability of Isomeric Ions",
  "Resonance Delocalisation and Fractional Charge",
  "Fractional Bond Order and Equivalent Bond Lengths",
  "Testing Structures with Experimental Bond Lengths",
  "Interpreting Dipole Moment and Polarity",
  "Expanded-Shell and Multiple-Bond Descriptions",
  "Formal Charge, Oxidation State and Actual Charge",
  "Checking Lewis Structures for Errors",
];

const majorHeadingPattern =
  /^(?:Application \d+|Extended Worked Examples|Integrated Examination Workflow|Final Integrated Understanding|Ultra-Short Revision Rules)/i;

const sectionHeadingPattern =
  /^(?:Foundation:|General Rules for Comparing|Calculation Procedure|Main Ranking Criteria|What the formal-charge sum can detect|Why the sum check|Additional examples - continued|[A-H]\.\s)/i;

const subheadingPattern =
  /^(?:Principle|Example(?:\s+\d+)?:|Example:|Structure [IVX]+:|Possibility [IVX]+:|Contributor [IVX]+:|Interpretation$|Cyanate versus fulminate|Cyanate ion:|Fulminate ion:|Why cyanate is more stable|Stepwise procedure|Decision table|Octet-based electron-sharing shortcut|Three Different Electron-Assignment Models|Modern interpretation of hypervalent bonding|Procedure for obtaining an experimental bond order|Formal charge on |Oxidation state of )/i;

const calloutPattern =
  /^(?:Priority rule:|Notation warning:|Modern bonding note:|Significance:|Reason:|Common mistake:|Important qualification:|Exam rule:|Meaning of a fractional value:|Do not say:|Experimental value as a guide:|Key conclusion:|Modern caution:|Central conclusion:|Lewis\/formal-charge conclusion:|Explosive behaviour:|High-value rule:|Exam distinction:|Exam caution:|Restriction:|Core idea:)/i;

const formulaPattern =
  /^(?:FC\(|FC =|Equivalent shortcut: FC|Average formal-charge|Average O FC|Number of shared pairs|Formal bond order|Average [A-Z]|Approximate ranking:|Ranking:|Preferred connectivity:|Propose contributors|C-O single bond length|All-single form:|Three S=O bonds:|\d+\(-?\d+\/\d+\)|C\(\d+,\d+\))/i;

const inlineAccentPattern =
  /(formal charges?|charge separation|Lewis structures?|electronegativity|resonance|bond order|preferred)/gi;

const sfProStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif';

function cleanWrappedApplicationHeadings(source: string) {
  return source
    .replace(
      /Application 6 - Resonance Delocalisation and Fractional Average\s*\n\s*Charge/g,
      "Application 6 - Resonance Delocalisation and Fractional Average Charge"
    )
    .replace(
      /Application 7 - Fractional Bond Order and Equivalent Bond\s*\n\s*Lengths/g,
      "Application 7 - Fractional Bond Order and Equivalent Bond Lengths"
    )
    .replace(
      /Application 8 - Using Experimental Bond Lengths to Test\s*\n\s*Resonance Ideas/g,
      "Application 8 - Using Experimental Bond Lengths to Test Resonance Ideas"
    )
    .replace(
      /Application 10 - Supporting Expanded-Shell and Multiple-Bond\s*\n\s*Lewis Descriptions/g,
      "Application 10 - Supporting Expanded-Shell and Multiple-Bond Lewis Descriptions"
    )
    .replace(
      /Application 11 - Distinguishing Formal Charge, Oxidation State\s*\n\s*and Actual Charge/g,
      "Application 11 - Distinguishing Formal Charge, Oxidation State and Actual Charge"
    );
}

function collapseLines(lines: string[]) {
  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function isAlignedTableRow(rawLine: string) {
  const text = rawLine.trim();
  return text.length > 0 && /\S\s{3,}\S/.test(text);
}

const structurePattern = /^\[STRUCTURE:([a-z0-9-]+)\]$/;

function lineKind(rawLine: string): BlockKind | "bullet-item" | "number-item" | null {
  const text = rawLine.trim();
  if (!text || text === "Formal Charge") return null;

  if (structurePattern.test(text)) return "structure";
  if (majorHeadingPattern.test(text)) return "major";
  if (sectionHeadingPattern.test(text) && text.length < 130) return "section";
  if (
    subheadingPattern.test(text) &&
    text.length < 120 &&
    !(/^Example:\s/i.test(text) && text.length > 72)
  ) {
    return "subheading";
  }
  if (calloutPattern.test(text)) return "callout";
  if (text.startsWith("•")) return "bullet-item";
  if (/^(?:1[0-2]|[1-9])\.\s+/.test(text)) return "number-item";
  if (isAlignedTableRow(rawLine)) return "table";
  if (formulaPattern.test(text)) return "formula";

  return null;
}

function collectListItems(lines: string[], marker: RegExp) {
  const items: string[] = [];

  for (const rawLine of lines) {
    const text = rawLine.trim();
    if (marker.test(text)) {
      items.push(text.replace(marker, "").trim());
    } else if (items.length > 0) {
      items[items.length - 1] = `${items[items.length - 1]} ${text}`.trim();
    }
  }

  return items;
}

function parseNotes(source: string): NoteBlock[] {
  const lines = cleanWrappedApplicationHeadings(source)
    .replace(/\f/g, "")
    .replace(/\r/g, "")
    .split("\n");

  const blocks: NoteBlock[] = [];
  let activeKind: "paragraph" | "callout" | "bullets" | "numbered" | "table" | null =
    null;
  let activeLines: string[] = [];

  const flush = () => {
    if (!activeKind || activeLines.length === 0) {
      activeKind = null;
      activeLines = [];
      return;
    }

    if (activeKind === "bullets") {
      const items = collectListItems(activeLines, /^•\s*/);
      blocks.push({ kind: "bullets", text: items.join(" "), items });
    } else if (activeKind === "numbered") {
      const items = collectListItems(activeLines, /^(?:1[0-2]|[1-9])\.\s+/);
      blocks.push({ kind: "numbered", text: items.join(" "), items });
    } else if (activeKind === "table") {
      blocks.push({
        kind: "table",
        text: collapseLines(activeLines),
        raw: activeLines.join("\n"),
      });
    } else {
      blocks.push({
        kind: activeKind,
        text: collapseLines(activeLines),
        raw: activeLines.join("\n"),
      });
    }

    activeKind = null;
    activeLines = [];
  };

  const nextNonEmptyLine = (start: number) => {
    for (let index = start; index < lines.length; index += 1) {
      if (lines[index].trim()) return lines[index];
    }
    return "";
  };

  lines.forEach((rawLine, index) => {
    const text = rawLine.trim();

    if (!text || text === "Formal Charge") {
      const nextLine = nextNonEmptyLine(index + 1);
      const nextIndent = nextLine.search(/\S/);
      const nextKind = nextLine ? lineKind(nextLine) : null;
      const nextIsStructural =
        nextKind === "major" ||
        nextKind === "section" ||
        nextKind === "subheading" ||
        nextKind === "callout" ||
        nextKind === "formula" ||
        nextKind === "structure";
      const canContinueTable =
        activeKind === "table" &&
        Boolean(nextLine) &&
        !nextIsStructural &&
        (isAlignedTableRow(nextLine) || nextIndent >= 5);
      const canContinueList =
        activeKind === "bullets" && nextLine.trim().startsWith("•");

      if (canContinueTable) {
        activeLines.push("");
      } else if (!canContinueList) {
        flush();
      }
      return;
    }

    const detected = lineKind(rawLine);

    if (detected === "structure") {
      flush();
      const match = text.match(structurePattern);
      blocks.push({ kind: "structure", text: match?.[1] ?? "" });
      return;
    }

    if (detected === "major" || detected === "section" || detected === "subheading") {
      flush();
      blocks.push({ kind: detected, text });
      return;
    }

    if (detected === "formula") {
      flush();
      blocks.push({ kind: "formula", text });
      return;
    }

    if (detected === "callout") {
      flush();
      activeKind = "callout";
      activeLines = [rawLine];
      return;
    }

    if (detected === "bullet-item") {
      if (activeKind !== "bullets") {
        flush();
        activeKind = "bullets";
      }
      activeLines.push(rawLine);
      return;
    }

    if (detected === "number-item") {
      if (activeKind === "table") {
        activeLines.push(rawLine);
        return;
      }
      if (activeKind !== "numbered") {
        flush();
        activeKind = "numbered";
      }
      activeLines.push(rawLine);
      return;
    }

    if (detected === "table") {
      if (activeKind !== "table") {
        flush();
        activeKind = "table";
      }
      activeLines.push(rawLine);
      return;
    }

    if (!activeKind) activeKind = "paragraph";
    activeLines.push(rawLine);
  });

  flush();
  return blocks;
}

function slugForHeading(text: string) {
  const application = text.match(/^Application (\d+)/i);
  if (application) return `application-${application[1]}`;

  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(inlineAccentPattern).map((part, index) => {
        const value = part.toLowerCase();
        let className = "";

        if (/formal charge|charge separation/.test(value)) {
          className = "font-semibold text-[#f4c96b]";
        } else if (/resonance|bond order/.test(value)) {
          className = "font-semibold text-[#bca7f7]";
        } else if (/lewis structure|electronegativity/.test(value)) {
          className = "font-semibold text-[#76dce8]";
        } else if (/preferred/.test(value)) {
          className = "font-semibold text-[#8be2a8]";
        }

        return className ? (
          <span key={`${part}-${index}`} className={className}>
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}

function MathFormula({
  expression,
  label,
}: {
  expression: string;
  label: string;
}) {
  return (
    <div className="px-5 py-6 text-center">
      <div
        className="overflow-x-auto text-xl font-semibold text-[#edf8ff] sm:text-2xl"
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(expression, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          }),
        }}
      />
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7f91a6]">
        {label}
      </p>
    </div>
  );
}

function tableSegments(line: string) {
  const pattern = /\S(?:.*?\S)?(?=\s{2,}|$)/g;
  const segments: Array<{ text: string; start: number; end: number }> = [];
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(line)) !== null) {
    segments.push({
      text: match[0].trim(),
      start: match.index ?? 0,
      end: (match.index ?? 0) + match[0].length,
    });
  }

  return segments;
}

function parseTableRows(raw: string) {
  const lines = raw.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => line.trim());
  if (headerIndex < 0) return [];

  const headerSegments = tableSegments(lines[headerIndex]);
  if (headerSegments.length < 2) {
    return lines
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => [line]);
  }

  const centers = headerSegments.map(
    (segment) => (segment.start + segment.end) / 2
  );
  const header = headerSegments.map((segment) => segment.text);
  const bodyLines = lines.slice(headerIndex + 1);
  const usesBlankRowSeparators = bodyLines.some((line) => !line.trim());
  const groups: string[][] = [];

  if (usesBlankRowSeparators) {
    let group: string[] = [];
    bodyLines.forEach((line) => {
      if (!line.trim()) {
        if (group.length > 0) groups.push(group);
        group = [];
      } else {
        group.push(line);
      }
    });
    if (group.length > 0) groups.push(group);
  } else {
    bodyLines.filter((line) => line.trim()).forEach((line) => groups.push([line]));
  }

  const rows = groups.map((group) => {
    const cells = Array.from({ length: header.length }, () => "");

    group.forEach((line) => {
      tableSegments(line).forEach((segment) => {
        const segmentCenter = (segment.start + segment.end) / 2;
        let column = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        centers.forEach((center, centerIndex) => {
          const distance = Math.abs(center - segmentCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            column = centerIndex;
          }
        });

        cells[column] = `${cells[column]} ${segment.text}`.trim();
      });
    });

    return cells;
  });

  return [header, ...rows];
}

function TextbookTable({ raw }: { raw: string }) {
  const rows = parseTableRows(raw);
  const firstRow = rows[0]?.join(" ") ?? "";
  const hasHeader =
    /^(?:Step|Rule|Contributor|Representation|Species|Property|Model|Level|Observed bond|Question|Formal-charge model)/i.test(
      firstRow
    );

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[#213449] bg-[#07101a] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <table className="w-full min-w-[760px] border-collapse text-left text-[15px] leading-[1.65] text-[#ced7e3] sm:text-[16px]">
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr
              key={`${cells.join("-").slice(0, 60)}-${rowIndex}`}
              className={
                rowIndex === 0 && hasHeader
                  ? "bg-[#102033] text-[#78e3ee]"
                  : "border-t border-[#1a2a3c] odd:bg-white/[0.012]"
              }
            >
              {cells.map((cell, cellIndex) => {
                const Cell = rowIndex === 0 && hasHeader ? "th" : "td";
                return (
                  <Cell
                    key={`${cell.slice(0, 36)}-${cellIndex}`}
                    className="min-w-[150px] px-5 py-3.5 align-top font-normal first:min-w-[120px] first:font-semibold first:text-[#e8edf4]"
                  >
                    <InlineText text={cell} />
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ text }: { text: string }) {
  const match = text.match(/^([^:]+):\s*(.*)$/);
  const label = match?.[1] ?? "Key idea";
  const body = match?.[2] ?? text;
  const warning = /warning|mistake|caution|restriction|do not/i.test(label);
  const border = warning ? "border-[#f1aa58]" : "border-[#42d8e7]";
  const labelColor = warning ? "text-[#ffc56f]" : "text-[#74e4ee]";

  return (
    <aside
      className={`my-8 border-l-4 ${border} bg-[linear-gradient(90deg,rgba(10,24,39,0.98),rgba(5,12,21,0.72))] px-6 py-5 sm:px-7`}
    >
      <p className={`text-[14px] font-bold uppercase tracking-[0.13em] ${labelColor}`}>
        {label}
      </p>
      {body ? (
        <p className="mt-2 text-[17px] leading-[1.75] text-[#d6deea] sm:text-[18px]">
          <InlineText text={body} />
        </p>
      ) : null}
    </aside>
  );
}

function FormalChargeStructure({ id }: { id: string }) {
  const entry = FORMAL_CHARGE_STRUCTURES[id];
  if (!entry) return null;

  return (
    <figure className="my-9 overflow-hidden rounded-2xl border border-[#213449] bg-[#050b14] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <div dangerouslySetInnerHTML={{ __html: entry.svg }} />
      <figcaption className="border-t border-[#213449] px-5 py-4 text-sm leading-6 text-[#9db0c4] sm:px-7">
        {entry.caption}
      </figcaption>
    </figure>
  );
}

const FORMAL_CHARGE_STRUCTURES: Record<string, { svg: string; caption: string }> = {
  "opcl3-comparison": {
    svg: `<svg viewBox="0 0 800 320" role="img" aria-label="Two Lewis structures of OPCl3 compared by formal charge" style="width:100%;height:auto;display:block"><rect x="4" y="4" width="792" height="312" rx="20" fill="#07131f" stroke="#213449"/>
<text x="200" y="40" text-anchor="middle" fill="#ffc56f" font-size="18" font-weight="700">Structure I &#8212; charge-separated</text>
<text x="600" y="40" text-anchor="middle" fill="#8be2a8" font-size="18" font-weight="700">Structure II &#8212; all formal charges zero</text>
<line x1="400" y1="55" x2="400" y2="290" stroke="#213449" stroke-dasharray="5 5"/>

<!-- Structure I -->
<text x="200" y="130" text-anchor="middle" fill="#d3dbe6" font-size="26" font-weight="700">P</text>
<text x="222" y="112" fill="#f4c96b" font-size="15" font-weight="700">+1</text>
<line x1="200" y1="140" x2="200" y2="85" stroke="#d3dbe6" stroke-width="2.5"/>
<text x="200" y="72" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<text x="222" y="62" fill="#f4c96b" font-size="15" font-weight="700">&#8722;1</text>
<circle cx="188" cy="50" r="1.8" fill="#76dce8"/><circle cx="188" cy="55" r="1.8" fill="#76dce8"/>
<circle cx="212" cy="50" r="1.8" fill="#76dce8"/><circle cx="212" cy="55" r="1.8" fill="#76dce8"/>
<circle cx="176" cy="65" r="1.8" fill="#76dce8"/><circle cx="181" cy="65" r="1.8" fill="#76dce8"/>
<line x1="200" y1="140" x2="140" y2="180" stroke="#d3dbe6" stroke-width="2"/>
<text x="122" y="195" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<line x1="200" y1="140" x2="260" y2="180" stroke="#d3dbe6" stroke-width="2"/>
<text x="278" y="195" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<line x1="200" y1="140" x2="200" y2="220" stroke="#d3dbe6" stroke-width="2"/>
<text x="200" y="245" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<text x="200" y="280" text-anchor="middle" fill="#7f91a6" font-size="13">FC(P) = 5&#8722;0&#8722;4 = +1 &#183; FC(O) = 6&#8722;6&#8722;1 = &#8722;1</text>

<!-- Structure II -->
<text x="600" y="130" text-anchor="middle" fill="#d3dbe6" font-size="26" font-weight="700">P</text>
<line x1="600" y1="140" x2="600" y2="85" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="608" y1="140" x2="608" y2="85" stroke="#d3dbe6" stroke-width="2.5"/>
<text x="600" y="72" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<circle cx="588" cy="50" r="1.8" fill="#76dce8"/><circle cx="588" cy="55" r="1.8" fill="#76dce8"/>
<circle cx="612" cy="50" r="1.8" fill="#76dce8"/><circle cx="612" cy="55" r="1.8" fill="#76dce8"/>
<line x1="600" y1="140" x2="540" y2="180" stroke="#d3dbe6" stroke-width="2"/>
<text x="522" y="195" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<line x1="600" y1="140" x2="660" y2="180" stroke="#d3dbe6" stroke-width="2"/>
<text x="678" y="195" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<line x1="600" y1="140" x2="600" y2="220" stroke="#d3dbe6" stroke-width="2"/>
<text x="600" y="245" text-anchor="middle" fill="#d3dbe6" font-size="20" font-weight="700">Cl</text>
<text x="600" y="280" text-anchor="middle" fill="#7f91a6" font-size="13">FC(P) = 5&#8722;0&#8722;5 = 0 &#183; FC(O) = 6&#8722;4&#8722;2 = 0</text>
</svg>`,
    caption: "Comparing the charge-separated single-bond structure with the neutral double-bond structure for OPCl3 — the lower-charge-separation structure is preferred.",
  },
  "n2o-skeleton-comparison": {
    svg: `<svg viewBox="0 0 800 300" role="img" aria-label="Two candidate skeletons for N2O compared by formal charge" style="width:100%;height:auto;display:block"><rect x="4" y="4" width="792" height="292" rx="20" fill="#07131f" stroke="#213449"/>
<text x="400" y="40" text-anchor="middle" fill="#d3dbe6" font-size="19" font-weight="700">Which skeleton does N&#8322;O actually have?</text>

<text x="130" y="110" text-anchor="middle" fill="#ffc56f" font-size="16" font-weight="700">Possibility I &#8212; N&#8211;O&#8211;N skeleton</text>
<text x="90" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<text x="200" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<text x="310" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<line x1="105" y1="160" x2="180" y2="160" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="105" y1="167" x2="180" y2="167" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="220" y1="160" x2="290" y2="160" stroke="#d3dbe6" stroke-width="2.5"/>
<line x1="220" y1="167" x2="290" y2="167" stroke="#d3dbe6" stroke-width="2.5"/>
<text x="200" y="210" text-anchor="middle" fill="#7f91a6" font-size="13">large formal charges on both terminal N atoms</text>
<text x="200" y="230" text-anchor="middle" fill="#ffc56f" font-size="13" font-weight="700">rejected: not the observed connectivity</text>

<line x1="400" y1="70" x2="400" y2="290" stroke="#213449" stroke-dasharray="5 5"/>

<text x="600" y="110" text-anchor="middle" fill="#8be2a8" font-size="16" font-weight="700">Possibility II &#8212; N&#8211;N&#8211;O skeleton</text>
<text x="500" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<text x="600" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<text x="700" y="165" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<line x1="515" y1="157" x2="580" y2="157" stroke="#d3dbe6" stroke-width="2"/>
<line x1="515" y1="163" x2="580" y2="163" stroke="#d3dbe6" stroke-width="2"/>
<line x1="515" y1="169" x2="580" y2="169" stroke="#d3dbe6" stroke-width="2"/>
<line x1="620" y1="163" x2="685" y2="163" stroke="#d3dbe6" stroke-width="2.5"/>
<text x="490" y="145" fill="#f4c96b" font-size="14" font-weight="700">&#8722;</text>
<text x="612" y="145" fill="#f4c96b" font-size="14" font-weight="700">+</text>
<text x="712" y="150" fill="#f4c96b" font-size="14" font-weight="700">&#8722;</text>
<text x="600" y="210" text-anchor="middle" fill="#7f91a6" font-size="13">N&#8801;N&#8314;&#8211;O&#8315; &#8212; charges of magnitude 1, terminal N</text>
<text x="600" y="230" text-anchor="middle" fill="#8be2a8" font-size="13" font-weight="700">preferred: matches the linear, asymmetric N&#8322;O molecule</text>
</svg>`,
    caption: "Formal charge reasoning rejects the symmetric N-O-N skeleton for N2O in favour of the observed asymmetric N-N-O skeleton.",
  },
  "cyanate-fulminate-comparison": {
    svg: `<svg viewBox="0 0 800 300" role="img" aria-label="Best Lewis structures of cyanate and fulminate compared" style="width:100%;height:auto;display:block"><rect x="4" y="4" width="792" height="292" rx="20" fill="#07131f" stroke="#213449"/>
<text x="200" y="40" text-anchor="middle" fill="#8be2a8" font-size="18" font-weight="700">Cyanate, OCN&#8315; &#8212; skeleton O&#8211;C&#8211;N</text>
<text x="600" y="40" text-anchor="middle" fill="#ffc56f" font-size="18" font-weight="700">Fulminate, CNO&#8315; &#8212; skeleton C&#8211;N&#8211;O</text>
<line x1="400" y1="55" x2="400" y2="290" stroke="#213449" stroke-dasharray="5 5"/>

<text x="120" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<text x="200" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">C</text>
<text x="280" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<line x1="135" y1="132" x2="180" y2="132" stroke="#d3dbe6" stroke-width="2"/>
<line x1="135" y1="138" x2="180" y2="138" stroke="#d3dbe6" stroke-width="2"/>
<line x1="220" y1="132" x2="265" y2="132" stroke="#d3dbe6" stroke-width="2"/>
<line x1="220" y1="138" x2="265" y2="138" stroke="#d3dbe6" stroke-width="2"/>
<text x="296" y="118" fill="#f4c96b" font-size="14" font-weight="700">&#8722;1</text>
<text x="200" y="185" text-anchor="middle" fill="#7f91a6" font-size="13">O=C=N&#8315;</text>
<text x="200" y="205" text-anchor="middle" fill="#7f91a6" font-size="13">all major contributors keep charge</text>
<text x="200" y="222" text-anchor="middle" fill="#7f91a6" font-size="13">magnitude &#8804; 1, on the more electronegative N</text>

<text x="530" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">C</text>
<text x="600" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">N</text>
<text x="680" y="140" text-anchor="middle" fill="#d3dbe6" font-size="24" font-weight="700">O</text>
<line x1="545" y1="132" x2="580" y2="132" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="545" y1="137" x2="580" y2="137" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="545" y1="142" x2="580" y2="142" stroke="#d3dbe6" stroke-width="1.5"/>
<line x1="618" y1="135" x2="662" y2="135" stroke="#d3dbe6" stroke-width="2.5"/>
<text x="512" y="118" fill="#f4c96b" font-size="14" font-weight="700">&#8722;1</text>
<text x="610" y="118" fill="#f4c96b" font-size="14" font-weight="700">+1</text>
<text x="696" y="118" fill="#f4c96b" font-size="14" font-weight="700">&#8722;1</text>
<text x="600" y="185" text-anchor="middle" fill="#7f91a6" font-size="13">&#8315;C&#8801;N&#8314;&#8211;O&#8315;</text>
<text x="600" y="205" text-anchor="middle" fill="#7f91a6" font-size="13">cannot avoid charge on carbon, which is</text>
<text x="600" y="222" text-anchor="middle" fill="#7f91a6" font-size="13">the least electronegative atom in the ion</text>

<text x="400" y="270" text-anchor="middle" fill="#bca7f7" font-size="14" font-weight="700">Lewis/formal-charge conclusion: cyanate is more favourably stabilised</text>
</svg>`,
    caption: "Cyanate keeps its formal negative charge on nitrogen, the more electronegative terminal atom; fulminate cannot avoid placing charge on the less electronegative carbon.",
  },
};

function NoteBlockView({
  block,
  index,
}: {
  block: NoteBlock;
  index: number;
}) {
  if (block.kind === "major") {
    const application = block.text.match(/^Application (\d+)\s*-\s*(.*)$/i);

    if (application) {
      return (
        <section
          id={`application-${application[1]}`}
          className="scroll-mt-28 border-t border-[#24425a] pb-3 pt-20 first:pt-0"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#69dfea]">
            Application {application[1]}
          </p>
          <h2 className="mt-3 max-w-5xl text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-[#edf4fb] sm:text-[40px] lg:text-[46px]">
            {application[2]}
          </h2>
          <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-[#4edeea] via-[#a78bfa] to-[#f6ae5c]" />
        </section>
      );
    }

    return (
      <section
        id={slugForHeading(block.text)}
        className="scroll-mt-28 border-t border-[#24425a] pb-3 pt-20"
      >
        <h2 className="max-w-5xl bg-gradient-to-r from-[#67e4ef] via-[#92baff] to-[#c6a6f7] bg-clip-text text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-transparent sm:text-[40px] lg:text-[46px]">
          {block.text}
        </h2>
        <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-[#4edeea] via-[#a78bfa] to-[#f6ae5c]" />
      </section>
    );
  }

  if (block.kind === "section") {
    return (
      <section
        id={slugForHeading(block.text)}
        className={`${index === 0 ? "pt-0" : "pt-14"} scroll-mt-28`}
      >
        <h3 className="border-b border-[#213d53] pb-4 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#84dce9] sm:text-[31px]">
          {block.text}
        </h3>
      </section>
    );
  }

  if (block.kind === "subheading") {
    const example = /^Example|^Structure|^Possibility|^Contributor/i.test(block.text);
    const principle = /^Principle$/i.test(block.text);
    const color = principle
      ? "text-[#75dfe9]"
      : example
        ? "text-[#99e5b1]"
        : "text-[#c7b2fa]";
    const dot = principle
      ? "bg-[#62d8e3]"
      : example
        ? "bg-[#74dda0]"
        : "bg-[#ad92ef]";

    return (
      <h4
        className={`mt-11 flex items-start gap-3 text-[21px] font-bold leading-snug tracking-[-0.015em] sm:text-[24px] ${color}`}
      >
        <span className={`mt-[0.48em] h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
        <span>{block.text}</span>
      </h4>
    );
  }

  if (block.kind === "callout") return <Callout text={block.text} />;

  if (block.kind === "bullets") {
    return (
      <ul className="my-7 grid gap-0 lg:grid-cols-2 lg:gap-x-12">
        {(block.items ?? []).map((item, itemIndex) => (
          <li
            key={`${item.slice(0, 42)}-${itemIndex}`}
            className="flex gap-4 border-b border-[#172839] py-3.5 text-[17px] leading-[1.72] text-[#d4dce7] sm:text-[18px]"
          >
            <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#67dce8]" />
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "numbered") {
    return (
      <ol className="my-7">
        {(block.items ?? []).map((item, itemIndex) => (
          <li
            key={`${item.slice(0, 42)}-${itemIndex}`}
            className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#172839] py-4 text-[17px] leading-[1.72] text-[#d4dce7] sm:text-[18px]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4edeea]/40 bg-[#081620] font-bold text-[#73e1eb]">
              {itemIndex + 1}
            </span>
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.kind === "table") {
    return <TextbookTable raw={block.raw ?? block.text} />;
  }

  if (block.kind === "formula") {
    return (
      <div className="my-7 overflow-x-auto rounded-lg border-y border-[#28516b] bg-[#07131f] px-5 py-4 text-center font-mono text-[17px] font-semibold leading-[1.7] text-[#f5ce77] sm:px-7 sm:text-[19px]">
        {block.text}
      </div>
    );
  }

  if (block.kind === "structure") {
    return <FormalChargeStructure key={`structure-${index}`} id={block.text} />;
  }

  return (
    <p
      key={`paragraph-${index}`}
      className="my-5 max-w-[1040px] text-[17px] leading-[1.82] tracking-[-0.004em] text-[#d3dbe6] sm:text-[18px] lg:text-[19px]"
    >
      <InlineText text={block.text} />
    </p>
  );
}

function ChapterNavigation() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 border-l border-[#234259] pl-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6edee9]">
          Chapter map
        </p>
        <ol className="mt-5 space-y-1">
          {applications.map((title, index) => (
            <li key={title}>
              <a
                href={`#application-${index + 1}`}
                className="group flex gap-3 py-2 text-[13px] leading-5 text-[#8594a7] transition hover:text-[#ecf5fb]"
              >
                <span className="font-bold text-[#4cbac6]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

export default function FormalChargesPage() {
  const blocks = parseNotes(formalChargeNotes);

  return (
    <main
      className="min-h-screen bg-[#03070b] px-5 py-10 text-[#d6deea] sm:px-8 lg:px-12 xl:px-16"
      style={{ fontFamily: sfProStack }}
    >
      <article className="mx-auto max-w-[1480px]">
        <header className="relative overflow-hidden border-b border-[#203b51] pb-14 pt-5 sm:pb-16 sm:pt-10">
          <div className="pointer-events-none absolute -right-32 -top-56 h-[520px] w-[520px] rounded-full bg-[#8357d8]/10 blur-[150px]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#68dfea] sm:text-sm">
              JEE Advanced · Chemical Bonding
            </p>
            <h1 className="mt-5 max-w-5xl bg-gradient-to-r from-[#68e2ed] via-[#8fb9f5] to-[#c2a5f3] bg-clip-text text-[43px] font-bold leading-[1.02] tracking-[-0.05em] text-transparent sm:text-[62px] lg:text-[72px]">
              Formal Charge
            </h1>
            <p className="mt-6 max-w-4xl text-[18px] leading-[1.7] text-[#b9c5d4] sm:text-[21px]">
              A complete textbook chapter on electron bookkeeping, Lewis
              structures, resonance, topology, charge distribution, bond order,
              experimental evidence and advanced JEE applications.
            </p>

            <div className="mt-9 border-l-4 border-[#55dce8] bg-[linear-gradient(90deg,rgba(8,25,39,0.98),rgba(4,10,17,0.25))] px-6 py-5">
              <p className="text-[17px] leading-[1.7] text-[#d3dce8] sm:text-[18px]">
                <strong className="text-[#f4c96b]">Central idea:</strong> formal
                charge is a Lewis-structure bookkeeping value. It helps compare
                structures, but it is not the measured charge on an atom.
              </p>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-xl border border-[#203d52] bg-[#07111b] sm:grid-cols-2 lg:grid-cols-4">
              <MathFormula
                expression={"FC=V-N-\\frac{B}{2}"}
                label="General definition"
              />
              <div className="border-t border-[#203d52] sm:border-l sm:border-t-0">
                <MathFormula
                  expression={"FC=V-L-\\text{bond lines}"}
                  label="Bond-line shortcut"
                />
              </div>
              <div className="border-t border-[#203d52] lg:border-l lg:border-t-0">
                <MathFormula
                  expression={"\\sum FC=q_{\\mathrm{overall}}"}
                  label="Charge-sum check"
                />
              </div>
              <div className="border-t border-[#203d52] sm:border-l lg:border-t-0">
                <MathFormula
                  expression={"\\text{shared pairs}=\\frac{S_o-N_t}{2}"}
                  label="Octet construction"
                />
              </div>
            </div>
          </div>
        </header>

        <nav
          aria-label="Formal-charge applications"
          className="border-b border-[#203b51] py-12 lg:hidden"
        >
          <h2 className="text-[27px] font-bold tracking-[-0.025em] text-[#e8f1f8]">
            Chapter map
          </h2>
          <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {applications.map((title, index) => (
              <a
                key={title}
                href={`#application-${index + 1}`}
                className="flex gap-4 border-b border-[#172839] py-3.5 text-[15px] leading-6 text-[#aebaca]"
              >
                <span className="font-bold text-[#61d4df]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-12 py-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterNavigation />
          <section className="min-w-0 pb-24">
            {blocks.map((block, index) => (
              <NoteBlockView
                key={`${block.kind}-${block.text.slice(0, 64)}-${index}`}
                block={block}
                index={index}
              />
            ))}
          </section>
        </div>
      </article>
    </main>
  );
}
