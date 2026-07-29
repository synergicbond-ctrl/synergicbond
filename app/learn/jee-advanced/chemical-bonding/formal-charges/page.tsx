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
      className="block overflow-x-auto py-1 text-center text-lg text-white sm:text-xl"
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

function BulletList({ text }: { text: string }) {
  const items = text
    .split(/(?=•)/)
    .map((item) => item.replace(/^•\s*/, "").trim())
    .filter(Boolean);

  return (
    <ul className="my-4 grid gap-2 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`${item.slice(0, 30)}-${index}`}
          className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-[15px] leading-7 text-slate-200"
        >
          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
          <span>{item}</span>
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
    <ol className="my-4 grid gap-2">
      {items.map((item, index) => {
        const match = item.match(/^(\d+)\.\s*([\s\S]*)$/);
        const number = match?.[1] ?? String(index + 1);
        const body = match?.[2] ?? item;

        return (
          <li
            key={`${number}-${index}`}
            className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 text-[15px] leading-7 text-slate-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 font-semibold text-cyan-200">
              {number}
            </span>
            <span>{body}</span>
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
      <h2
        id={slugForHeading(block.text)}
        className="scroll-mt-24 border-t border-cyan-300/15 pt-10 text-2xl font-bold text-white sm:text-3xl"
      >
        {block.text}
      </h2>
    );
  }

  if (block.kind === "section") {
    return (
      <h3
        id={slugForHeading(block.text)}
        className="mt-8 text-xl font-semibold text-cyan-200 sm:text-2xl"
      >
        {block.text}
      </h3>
    );
  }

  if (block.kind === "subheading") {
    return (
      <h4 className="mt-6 text-lg font-semibold text-white">{block.text}</h4>
    );
  }

  if (block.kind === "callout") {
    const [label, ...rest] = block.text.split(":");
    return (
      <aside className="my-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.055] px-5 py-4 text-[15px] leading-7 text-slate-200">
        <strong className="text-cyan-200">{label}:</strong>
        {rest.length > 0 ? ` ${rest.join(":").trim()}` : ""}
      </aside>
    );
  }

  if (block.kind === "bullets") return <BulletList text={block.text} />;
  if (block.kind === "numbered") return <NumberedList text={block.text} />;

  if (block.kind === "table") {
    return (
      <div className="my-4 rounded-xl border border-purple-300/15 bg-purple-300/[0.035] p-4 sm:p-5">
        <pre className="whitespace-pre-wrap break-words font-sans text-[14px] leading-7 text-slate-200">
          {readableTable(block.raw)}
        </pre>
      </div>
    );
  }

  if (block.kind === "formula") {
    return (
      <div className="my-4 rounded-xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 font-mono text-[15px] leading-7 text-cyan-100">
        {block.text}
      </div>
    );
  }

  return (
    <p
      key={`paragraph-${index}`}
      className="my-3 text-[15.5px] leading-8 text-slate-200"
    >
      {block.text}
    </p>
  );
}

export default function FormalChargesPage() {
  const blocks = parseNotes(formalChargeNotes);

  return (
    <main className="min-h-screen bg-[#0b0f19] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/30">
          <div className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(155,93,229,0.18),transparent_34%),radial-gradient(circle_at_top_left,rgba(0,245,212,0.15),transparent_40%)] px-6 py-9 sm:px-10 sm:py-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
              JEE Advanced · Chemical Bonding
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Formal Charges
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
              Complete coverage of formal-charge bookkeeping, Lewis-structure
              selection, topology, resonance ranking, charge placement,
              fractional charge and bond order, experimental evidence,
              hypervalency, error detection and advanced reference examples.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["16", "source pages covered"],
                ["12", "detailed applications"],
                ["A-H", "advanced reference groups"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                >
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-4">
            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4">
              <MathFormula expression={"FC=V-N-\\frac{B}{2}"} />
              <p className="text-center text-xs text-slate-400">
                General definition
              </p>
            </div>
            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4">
              <MathFormula expression={"FC=V-L-\\text{bond lines}"} />
              <p className="text-center text-xs text-slate-400">
                Bond-line shortcut
              </p>
            </div>
            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4">
              <MathFormula expression={"\\sum FC=q_{\\mathrm{overall}}"} />
              <p className="text-center text-xs text-slate-400">
                Charge-sum check
              </p>
            </div>
            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4">
              <MathFormula
                expression={"\\text{shared pairs}=\\frac{S_o-N_t}{2}"}
              />
              <p className="text-center text-xs text-slate-400">
                Electron-sharing shortcut
              </p>
            </div>
          </div>
        </header>

        <nav
          aria-label="Formal-charge applications"
          className="my-8 rounded-2xl border border-white/8 bg-[#111827] p-5 sm:p-7"
        >
          <h2 className="text-lg font-semibold text-white">
            Twelve applications covered
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((title, index) => (
              <a
                key={title}
                href={`#application-${index + 1}`}
                className="group flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-300 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-white"
              >
                <span className="font-semibold text-cyan-300">
                  {index + 1}
                </span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </nav>

        <section className="rounded-2xl border border-white/8 bg-[#111827] px-5 py-7 sm:px-8 sm:py-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            {blocks.map((block, index) => (
              <NoteBlockView
                key={`${block.kind}-${block.text.slice(0, 48)}-${index}`}
                block={block}
                index={index}
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
