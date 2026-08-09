import katex from "katex";
import { dipoleMomentBlocks, dipoleChapterMap, type DipoleBlock } from "./dipole-moment-notes";
import { DIPOLE_STRUCTURES } from "./dipole-structures";

export const metadata = {
  title: "Dipole Moment | Chemical Bonding | JEE Advanced",
  description:
    "Complete textbook-style JEE Advanced dipole moment notes: definition, vector addition, percentage ionic character, the Pauling and Hannay–Smyth equations, the eight contributions to molecular polarity, geometry prediction, and 30+ worked structural examples.",
};

const sfProStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif';

const inlineAccentPattern =
  /(dipole moment|lone[- ]pair|resonance|electronegativity|vector sum|induced dipole|group moment)/gi;

function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(inlineAccentPattern).map((part, index) => {
        const value = part.toLowerCase();
        let className = "";

        if (/dipole moment/.test(value)) {
          className = "font-semibold text-[#f4c96b]";
        } else if (/resonance|induced dipole/.test(value)) {
          className = "font-semibold text-[#bca7f7]";
        } else if (/electronegativity|vector sum/.test(value)) {
          className = "font-semibold text-[#76dce8]";
        } else if (/lone[- ]pair|group moment/.test(value)) {
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

function MathFormula({ expression, label }: { expression: string; label?: string }) {
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
      {label ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7f91a6]">
          {label}
        </p>
      ) : null}
    </div>
  );
}

function Callout({ text }: { text: string }) {
  const match = text.match(/^([^:]+):\s*(.*)$/);
  const label = match?.[1] ?? "Key idea";
  const body = match?.[2] ?? text;
  const warning = /warning|mistake|caution|limitation|do not/i.test(label);
  const border = warning ? "border-[#f1aa58]" : "border-[#42d8e7]";
  const labelColor = warning ? "text-[#ffc56f]" : "text-[#74e4ee]";

  return (
    <aside
      className={`my-8 border-l-4 ${border} bg-[linear-gradient(90deg,rgba(10,24,39,0.98),rgba(5,12,21,0.72))] px-6 py-5 sm:px-7`}
    >
      <p className={`text-[14px] font-bold uppercase tracking-[0.13em] ${labelColor}`}>{label}</p>
      {body ? (
        <p className="mt-2 text-[17px] leading-[1.75] text-[#d6deea] sm:text-[18px]">
          <InlineText text={body} />
        </p>
      ) : null}
    </aside>
  );
}

function TextbookTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[#213449] bg-[#07101a] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <table className="w-full min-w-[640px] border-collapse text-left text-[15px] leading-[1.65] text-[#ced7e3] sm:text-[16px]">
        <thead>
          <tr className="bg-[#102033] text-[#78e3ee]">
            {headers.map((h, i) => (
              <th
                key={`${h}-${i}`}
                className="min-w-[130px] px-5 py-3.5 align-top font-semibold first:min-w-[120px]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr
              key={`row-${rowIndex}-${cells[0]?.slice(0, 24)}`}
              className="border-t border-[#1a2a3c] odd:bg-white/[0.012]"
            >
              {cells.map((cell, cellIndex) => (
                <td
                  key={`cell-${cellIndex}-${cell.slice(0, 24)}`}
                  className="min-w-[130px] px-5 py-3.5 align-top font-normal first:min-w-[120px] first:font-semibold first:text-[#e8edf4]"
                >
                  <InlineText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DipoleStructureFigure({ id }: { id: string }) {
  const entry = DIPOLE_STRUCTURES[id];
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

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function NoteBlockView({ block, index }: { block: DipoleBlock; index: number }) {
  if (block.kind === "major") {
    const section = block.text?.match(/^Section (\d+)\s*-\s*(.*)$/i);
    const slug = slugForMajor(block.text ?? "");

    return (
      <section id={slug} className="scroll-mt-28 border-t border-[#24425a] pb-3 pt-20 first:border-t-0 first:pt-0">
        {section ? (
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#69dfea]">
            Section {section[1]}
          </p>
        ) : null}
        <h2 className="mt-3 max-w-5xl bg-gradient-to-r from-[#67e4ef] via-[#92baff] to-[#c6a6f7] bg-clip-text text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-transparent sm:text-[40px] lg:text-[46px]">
          {section ? section[2] : block.text}
        </h2>
        <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-[#4edeea] via-[#a78bfa] to-[#f6ae5c]" />
      </section>
    );
  }

  if (block.kind === "subheading") {
    return (
      <h4 className="mt-11 flex items-start gap-3 text-[21px] font-bold leading-snug tracking-[-0.015em] text-[#c7b2fa] sm:text-[24px]">
        <span className="mt-[0.48em] h-2.5 w-2.5 shrink-0 rounded-full bg-[#ad92ef]" />
        <span>{block.text}</span>
      </h4>
    );
  }

  if (block.kind === "callout") return <Callout text={block.text ?? ""} />;

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
    return <TextbookTable headers={block.headers ?? []} rows={block.rows ?? []} />;
  }

  if (block.kind === "formula") {
    return <MathFormula expression={block.text ?? ""} label={block.formulaLabel} />;
  }

  if (block.kind === "structure") {
    return <DipoleStructureFigure key={`structure-${index}`} id={block.structureId ?? ""} />;
  }

  return (
    <p
      key={`paragraph-${index}`}
      className="my-5 max-w-[1040px] text-[17px] leading-[1.82] tracking-[-0.004em] text-[#d3dbe6] sm:text-[18px] lg:text-[19px]"
    >
      <InlineText text={block.text ?? ""} />
    </p>
  );
}

function ChapterNavigation() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 border-l border-[#234259] pl-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6edee9]">Chapter map</p>
        <ol className="mt-5 space-y-1">
          {dipoleChapterMap.map((title, index) => (
            <li key={title}>
              <a
                href={`#section-${index + 1}`}
                className="group flex gap-3 py-2 text-[13px] leading-5 text-[#8594a7] transition hover:text-[#ecf5fb]"
              >
                <span className="font-bold text-[#4cbac6]">{String(index + 1).padStart(2, "0")}</span>
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

export default function DipoleMomentPage() {
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
              Dipole Moment
            </h1>
            <p className="mt-6 max-w-4xl text-[18px] leading-[1.7] text-[#b9c5d4] sm:text-[21px]">
              A complete textbook chapter on molecular polarity: vector addition,
              percentage ionic character, the eight contributions to a molecule&apos;s
              net dipole, geometry prediction, and every classic structural
              comparison worked through with a drawn structure.
            </p>

            <div className="mt-9 border-l-4 border-[#55dce8] bg-[linear-gradient(90deg,rgba(8,25,39,0.98),rgba(4,10,17,0.25))] px-6 py-5">
              <p className="text-[17px] leading-[1.7] text-[#d3dce8] sm:text-[18px]">
                <strong className="text-[#f4c96b]">Central idea:</strong> dipole
                moment is never a single readout of &ldquo;which atom is more
                electronegative.&rdquo; It is the vector resultant of bond polarity,
                geometry, lone-pair orientation, group additivity, dative/resonance
                charge separation and induced polarization — any one of which can
                dominate, reinforce, or cancel the others.
              </p>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-xl border border-[#203d52] bg-[#07111b] sm:grid-cols-2 lg:grid-cols-4">
              <MathFormula expression={"\\mu = q \\times d"} label="Definition" />
              <div className="border-t border-[#203d52] sm:border-l sm:border-t-0">
                <MathFormula
                  expression={"\\mu_R = \\sqrt{\\mu_1^2+\\mu_2^2+2\\mu_1\\mu_2\\cos\\theta}"}
                  label="Vector addition"
                />
              </div>
              <div className="border-t border-[#203d52] lg:border-l lg:border-t-0">
                <MathFormula
                  expression={"\\%\\text{ionic}=\\frac{\\mu_{obs}}{\\mu_{ionic}}\\times100"}
                  label="Ionic character"
                />
              </div>
              <div className="border-t border-[#203d52] sm:border-l lg:border-t-0">
                <MathFormula
                  expression={"16\\Delta\\chi+3.5(\\Delta\\chi)^2"}
                  label="Hannay–Smyth"
                />
              </div>
            </div>
          </div>
        </header>

        <nav aria-label="Dipole moment sections" className="border-b border-[#203b51] py-12 lg:hidden">
          <h2 className="text-[27px] font-bold tracking-[-0.025em] text-[#e8f1f8]">Chapter map</h2>
          <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {dipoleChapterMap.map((title, index) => (
              <a
                key={title}
                href={`#section-${index + 1}`}
                className="flex gap-4 border-b border-[#172839] py-3.5 text-[15px] leading-6 text-[#aebaca]"
              >
                <span className="font-bold text-[#61d4df]">{String(index + 1).padStart(2, "0")}</span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-12 py-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterNavigation />
          <section className="min-w-0 pb-24">
            {dipoleMomentBlocks.map((block, index) => (
              <NoteBlockView key={`${block.kind}-${(block.text ?? block.structureId ?? "").slice(0, 64)}-${index}`} block={block} index={index} />
            ))}
          </section>
        </div>
      </article>
    </main>
  );
}
