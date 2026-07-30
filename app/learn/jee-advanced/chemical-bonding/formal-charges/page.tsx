import katex from "katex";
import { formalChargeNotes } from "./formal-charge-notes";

export const metadata = {
  title: "Formal Charges | Chemical Bonding | JEE Advanced",
  description:
    "Complete JEE Advanced formal-charge notes with Lewis structures, resonance, worked examples, comparison tables, bond order and experimental applications.",
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
  | "paragraph";

type NoteBlock = {
  kind: BlockKind;
  raw: string;
  text: string;
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
  /^(?:Foundation:|Calculation Procedure|General Rules|Main Ranking Criteria|What the formal-charge sum can detect|Why the sum check|[A-H]\.\s|Additional examples - continued)/i;

const subheadingPattern =
  /^(?:Principle|Example(?:\s+\d+)?:|Example:|Structure [IVX]+:|Possibility [IVX]+:|Contributor [IVX]+:|Cyanate ion:|Fulminate ion:|Why cyanate is more stable|Stepwise procedure|Decision table|Octet-based electron-sharing shortcut|Three Different Electron-Assignment Models|Modern interpretation of hypervalent bonding|Procedure for obtaining an experimental bond order)/i;

const calloutPattern =
  /^(?:Significance:|Common mistake:|Important qualification:|Notation warning:|Priority rule:|Reason:|Exam rule:|Modern bonding note:|Modern caution:|Core idea:|Central conclusion:|Interpretation:|Lewis\/formal-charge conclusion:|Explosive behaviour:)/i;

const tableLeadPattern =
  /^(?:Step\s+What to do|Rule\s+Meaning|Contributor\s+|Representation\s+|Species\s+|Species \/ form|Species \/ resonance family|Quality for Al|Model\s+|Level of application|SO₄²⁻:|CO₃²⁻|NO₃⁻|N₂O [I|w]|Cyanate [A-C]|SCN⁻ [A-C]|CNO⁻ [A-C]|POF₃|SOF₄|SO₃F⁻|BF₃|NH₄⁺|PH₄⁺|PH₃|SF₄|H₂N|HNCS|HNCO|HOCN|S₂O|SNF₃|SO₂Cl₂|XeO₃|H₃PO|H₂SO₄|HSO₄⁻|PO₄³⁻|ClO₄⁻)/i;

const sfProStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif';

const inlineAccentPattern =
  /(formal charges?|charge separation|overall charge|negative charge|positive charge|electronegative|Lewis structures?|resonance|bond order|octets?|stable|stability|preferred|favourable|important)/gi;

function collapseLines(raw: string) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function readableTable(raw: string) {
  return raw
    .split(/\r?\n/)
    .map((line) =>
      line
        .trim()
        .replace(/\s{4,}/g, "  ")
        .replace(/\s+$/g, "")
    )
    .filter(Boolean)
    .join("\n");
}

function classify(raw: string): NoteBlock | null {
  const text = collapseLines(raw);
  if (!text || text === "Formal Charge") return null;

  if (majorHeadingPattern.test(text)) return { kind: "major", raw, text };
  if (sectionHeadingPattern.test(text)) return { kind: "section", raw, text };
  if (subheadingPattern.test(text)) return { kind: "subheading", raw, text };
  if (calloutPattern.test(text)) return { kind: "callout", raw, text };
  if (text.startsWith("•")) return { kind: "bullets", raw, text };

  const numberedItems = text.match(/(?:^|\s)(?:1[0-2]|[1-9])\.\s/g);
  if (numberedItems && numberedItems.length >= 2) {
    return { kind: "numbered", raw, text };
  }

  if (
    tableLeadPattern.test(text) ||
    (/\s{8,}/.test(raw) &&
      /(?:Formal charge|Assessment|Meaning|Key point|Average|bond order|Importance|Action)/i.test(
        text
      ))
  ) {
    return { kind: "table", raw, text };
  }

  if (
    /^(?:FC\(|FC =|Average formal-charge|Average O FC|Number of shared pairs|Formal bond order|Approximate ranking:|Ranking:|Preferred connectivity:)/i.test(
      text
    )
  ) {
    return { kind: "formula", raw, text };
  }

  return { kind: "paragraph", raw, text };
}

function parseNotes(source: string) {
  return source
    .replace(/\f/g, "")
    .split(/\n\s*\n+/)
    .map(classify)
    .filter((block): block is NoteBlock => Boolean(block));
}

function slugForHeading(text: string) {
  const application = text.match(/^Application (\d+)/i);
  if (application) return `application-${application[1]}`;

  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function MathFormula({ expression }: { expression: string }) {
  return (
    <span
      className="block overflow-x-auto py-1 text-center text-xl font-semibold text-[#eef8ff] sm:text-2xl"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expression, {
          displayMode: true,
          throwOnError: false,
          strict: false,
        }),
      }}
    />
  );
}

function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(inlineAccentPattern).map((part, index) => {
        const value = part.toLowerCase();
        let accent = "";

        if (
          /formal charge|charge separation|overall charge|negative charge|positive charge/.test(
            value
          )
        ) {
          accent = "font-semibold text-[#ffd166]";
        } else if (/resonance|bond order/.test(value)) {
          accent = "font-semibold text-[#c6a5ff]";
        } else if (/stable|stability|preferred|favourable|important/.test(value)) {
          accent = "font-semibold text-[#7cf6a3]";
        } else if (/electronegative|lewis structure|octet/.test(value)) {
          accent = "font-semibold text-[#6fe7f4]";
        }

        return accent ? (
          <span key={`${part}-${index}`} className={accent}>
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}

function BulletList({ text }: { text: string }) {
  const items = text
    .split(/(?=•)/)
    .map((item) => item.replace(/^•\s*/, "").trim())
    .filter(Boolean);

  return (
    <ul className="my-7 grid gap-x-12 gap-y-0 lg:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`${item.slice(0, 30)}-${index}`}
          className="flex gap-4 border-b border-[#152332] py-3.5 text-[17px] leading-[1.75] text-[#d7deea] sm:text-[18px]"
        >
          <span className="mt-[0.72rem] h-2 w-2 shrink-0 rounded-full bg-[#65e8f5] shadow-[0_0_14px_rgba(101,232,245,0.45)]" />
          <span>
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ text }: { text: string }) {
  const items = text
    .split(/(?=(?:^|\s)(?:1[0-2]|[1-9])\.\s)/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <ol className="my-7 grid gap-0">
      {items.map((item, index) => {
        const match = item.match(/^(\d+)\.\s*([\s\S]*)$/);
        const number = match?.[1] ?? String(index + 1);
        const body = match?.[2] ?? item;

        return (
          <li
            key={`${number}-${index}`}
            className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#152332] py-4 text-[17px] leading-[1.75] text-[#d7deea] sm:text-[18px]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4edbea]/35 bg-[#07131c] font-bold text-[#6fe7f4]">
              {number}
            </span>
            <span>
              <InlineText text={body} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function NoteBlockView({
  block,
  index,
}: {
  block: NoteBlock;
  index: number;
}) {
  if (block.kind === "major") {
    return (
      <div
        id={slugForHeading(block.text)}
        className="scroll-mt-24 border-b border-[#1a3549] pb-4 pt-20"
      >
        <h2 className="bg-gradient-to-r from-[#64e8f5] via-[#8ab9ff] to-[#c99fff] bg-clip-text text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-transparent sm:text-[40px] lg:text-[46px]">
          {block.text}
        </h2>
        <div className="mt-5 h-[3px] w-32 rounded-full bg-gradient-to-r from-[#43e6f3] via-[#9f7aea] to-[#ffad4d]" />
      </div>
    );
  }

  if (block.kind === "section") {
    return (
      <div
        id={slugForHeading(block.text)}
        className={`${index === 0 ? "pt-2" : "pt-14"} scroll-mt-24 border-b border-[#173047] pb-3`}
      >
        <h3 className="bg-gradient-to-r from-[#68e9f5] via-[#8cbcff] to-[#bb9cff] bg-clip-text text-[25px] font-bold leading-tight tracking-[-0.02em] text-transparent sm:text-[30px] lg:text-[34px]">
          {block.text}
        </h3>
        <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[#44e6f4] to-[#ffb24f]" />
      </div>
    );
  }

  if (block.kind === "subheading") {
    const text = block.text.toLowerCase();
    const color = text.startsWith("principle")
      ? "text-[#64e7f3]"
      : /example|procedure|cyanate|fulminate/.test(text)
        ? "text-[#7cf6a3]"
        : /structure|possibility|contributor|decision/.test(text)
          ? "text-[#ffd166]"
          : "text-[#c6a5ff]";

    return (
      <h4
        className={`mt-10 text-[21px] font-bold leading-snug tracking-[-0.015em] sm:text-[24px] ${color}`}
      >
        {block.text}
      </h4>
    );
  }

  if (block.kind === "callout") {
    const [label, ...rest] = block.text.split(":");
    return (
      <aside className="my-7 border-l-4 border-[#45e5f2] bg-[linear-gradient(90deg,rgba(7,21,34,0.96),rgba(4,10,18,0.7),rgba(4,8,13,0.2))] px-6 py-5 text-[17px] leading-[1.75] text-[#d9e0eb] sm:px-7 sm:text-[19px]">
        <strong className="text-[#ffd166]">{label}:</strong>
        {rest.length > 0 ? (
          <>
            {" "}
            <InlineText text={rest.join(":").trim()} />
          </>
        ) : (
          ""
        )}
      </aside>
    );
  }

  if (block.kind === "bullets") return <BulletList text={block.text} />;
  if (block.kind === "numbered") return <NumberedList text={block.text} />;

  if (block.kind === "table") {
    return (
      <div className="my-7 overflow-x-auto border-l-4 border-[#b899ff] bg-[linear-gradient(105deg,rgba(9,17,29,0.98),rgba(4,9,16,0.78))] px-5 py-5 sm:px-7">
        <pre className="min-w-0 whitespace-pre-wrap break-words font-sans text-[15px] leading-[1.75] text-[#d8dfeb] sm:text-[17px]">
          {readableTable(block.raw)}
        </pre>
      </div>
    );
  }

  if (block.kind === "formula") {
    return (
      <div className="my-7 border-y border-[#1b4259] bg-[#06101a] px-5 py-4 font-mono text-[16px] font-semibold leading-[1.8] text-[#ffd166] sm:px-7 sm:text-[18px]">
        {block.text}
      </div>
    );
  }

  return (
    <p
      key={`paragraph-${index}`}
      className="my-5 text-[17px] leading-[1.85] tracking-[-0.005em] text-[#d7deea] sm:text-[19px] lg:text-[20px]"
    >
      <InlineText text={block.text} />
    </p>
  );
}

export default function FormalChargesPage() {
  const blocks = parseNotes(formalChargeNotes);

  return (
    <main
      className="min-h-screen bg-[#020508] px-5 py-10 text-[#d8deea] sm:px-8 lg:px-12 xl:px-16"
      style={{ fontFamily: sfProStack }}
    >
      <article className="mx-auto max-w-[1520px]">
        <header className="relative overflow-hidden border-b border-[#173047] pb-12 pt-5 sm:pb-16 sm:pt-9">
          <div className="pointer-events-none absolute -right-40 -top-48 h-[460px] w-[460px] rounded-full bg-[#8d61ff]/10 blur-[130px]" />
          <div className="pointer-events-none absolute -left-48 top-0 h-[360px] w-[360px] rounded-full bg-[#2de5f3]/8 blur-[120px]" />
          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#63e7f4] sm:text-sm">
              JEE Advanced · Chemical Bonding
            </p>
            <h1 className="max-w-5xl bg-gradient-to-r from-[#5fe8f5] via-[#8dbbff] to-[#cda0ff] bg-clip-text text-[44px] font-bold leading-[1.02] tracking-[-0.05em] text-transparent sm:text-[64px] lg:text-[76px]">
              Formal Charge
            </h1>
            <p className="mt-6 max-w-5xl text-[18px] leading-[1.75] text-[#cbd3df] sm:text-[21px] lg:text-[22px]">
              Complete coverage of formal-charge bookkeeping, Lewis-structure
              selection, topology, resonance ranking, charge placement,
              fractional charge and bond order, experimental evidence,
              hypervalency, error detection and advanced reference examples.
            </p>

            <div className="mt-8 border-l-4 border-[#3be5f2] bg-[linear-gradient(90deg,rgba(7,20,32,0.95),rgba(5,10,17,0.25))] px-5 py-4 text-[14px] leading-7 text-[#cbd4e0] sm:text-[16px]">
              <strong className="text-[#ffd166]">Scope:</strong> all 16 source
              pages, 12 detailed applications, advanced reference groups A–H
              and every substantive example retained.
            </div>
          </div>

          <div className="relative mt-10 grid border-y border-[#18364c] sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-[#18364c] px-3 py-6 sm:border-r lg:border-b-0">
              <MathFormula expression={"FC=V-N-\\frac{B}{2}"} />
              <p className="mt-1 text-center text-sm text-[#8391a4]">
                General definition
              </p>
            </div>
            <div className="border-b border-[#18364c] px-3 py-6 lg:border-b-0 lg:border-r">
              <MathFormula expression={"FC=V-L-\\text{bond lines}"} />
              <p className="mt-1 text-center text-sm text-[#8391a4]">
                Bond-line shortcut
              </p>
            </div>
            <div className="border-b border-[#18364c] px-3 py-6 sm:border-b-0 sm:border-r">
              <MathFormula expression={"\\sum FC=q_{\\mathrm{overall}}"} />
              <p className="mt-1 text-center text-sm text-[#8391a4]">
                Charge-sum check
              </p>
            </div>
            <div className="px-3 py-6">
              <MathFormula
                expression={"\\text{shared pairs}=\\frac{S_o-N_t}{2}"}
              />
              <p className="mt-1 text-center text-sm text-[#8391a4]">
                Electron-sharing shortcut
              </p>
            </div>
          </div>
        </header>

        <nav
          aria-label="Formal-charge applications"
          className="border-b border-[#173047] py-12 sm:py-14"
        >
          <h2 className="bg-gradient-to-r from-[#64e8f5] via-[#8dbaff] to-[#c39eff] bg-clip-text text-[27px] font-bold tracking-[-0.025em] text-transparent sm:text-[34px]">
            Twelve applications covered
          </h2>
          <div className="mt-7 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((title, index) => (
              <a
                key={title}
                href={`#application-${index + 1}`}
                className="group flex gap-4 border-b border-[#152332] py-4 text-[15px] leading-6 text-[#bac5d3] transition-colors hover:text-white sm:text-[16px]"
              >
                <span className="font-bold text-[#63e7f4] transition-colors group-hover:text-[#ffd166]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </nav>

        <section className="pb-24 pt-12 sm:pb-32 sm:pt-16">
          {blocks.map((block, index) => (
            <NoteBlockView
              key={`${block.kind}-${block.text.slice(0, 48)}-${index}`}
              block={block}
              index={index}
            />
          ))}
        </section>
      </article>
    </main>
  );
}
