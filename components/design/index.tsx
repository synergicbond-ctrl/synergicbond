// Owned here rather than left to each page: `Formula` emits KaTeX markup, so
// the module that emits it also guarantees the stylesheet. Pages that forget
// this import were rendering maths in the UI sans-serif with broken metrics.
import "katex/dist/katex.min.css";
import katex from "katex";
import { Fragment, type ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Synergic Bond — content design system.
//
// The visual idea is bonding as STRUCTURE, not decoration: a hairline that
// connects rather than divides. Section numbers bond into their titles along a
// rule; long-form notes run down a valence gutter whose nodes mark each
// section. Depth is expressed with hairlines and flat surfaces — there is no
// blur, glow, gradient fill or backdrop-filter anywhere in this file, by
// design, and none should be added.
//
// Colour obeys a hard split, enforced by convention:
//   • chrome  — near-black surfaces + the single gold --accent, interaction only
//   • content — the --chem-* scale below, meaning only
// A chemistry hue must never style navigation or buttons; the gold accent must
// never encode chemical meaning.
//
// Server-component safe: no hooks, no state, no "use client". Presentation
// only — never import content or access-control code here.
// ─────────────────────────────────────────────────────────────────────────────

/** Semantic roles for content colour. Maps 1:1 onto the --chem-* tokens. */
export type TermKind = "bond" | "energy" | "orbital" | "trap" | "rule";

const TERM_COLOR: Record<TermKind, string> = {
  bond: "var(--chem-bond)",
  energy: "var(--chem-energy)",
  orbital: "var(--chem-orbital)",
  trap: "var(--chem-trap)",
  rule: "var(--chem-rule)",
};

// ── Inline terminology ───────────────────────────────────────────────────────

/**
 * A page supplies its own vocabulary, so highlighting stays meaningful per
 * chapter instead of hardcoding one chapter's words into the design system.
 */
export type TermLexicon = ReadonlyArray<{
  match: readonly string[];
  kind: TermKind;
}>;

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Regexes are rebuilt per lexicon at most once, not per string rendered.
const lexiconCache = new WeakMap<object, RegExp | null>();

function lexiconRegex(lexicon: TermLexicon): RegExp | null {
  const cached = lexiconCache.get(lexicon);
  if (cached !== undefined) return cached;

  // Longest first, so "induced dipole" wins over "dipole".
  const phrases = lexicon
    .flatMap((entry) => entry.match)
    .sort((a, b) => b.length - a.length)
    .map(escapeRe);

  const re = phrases.length
    ? new RegExp(`(${phrases.join("|")})`, "gi")
    : null;
  lexiconCache.set(lexicon, re);
  return re;
}

function kindFor(token: string, lexicon: TermLexicon): TermKind | null {
  const needle = token.toLowerCase();
  for (const entry of lexicon) {
    if (entry.match.some((phrase) => phrase.toLowerCase() === needle)) {
      return entry.kind;
    }
  }
  return null;
}

/** A single highlighted term. Weight carries as much of the emphasis as hue,
 *  so meaning survives for colour-blind readers and in print. */
export function Term({
  kind,
  children,
}: {
  kind: TermKind;
  children: ReactNode;
}) {
  return (
    <span className="font-medium" style={{ color: TERM_COLOR[kind] }}>
      {children}
    </span>
  );
}

/** Runs a string through the lexicon, colouring recognised terminology. */
export function InlineTerms({
  text,
  lexicon,
}: {
  text: string;
  lexicon?: TermLexicon;
}) {
  const re = lexicon && lexicon.length ? lexiconRegex(lexicon) : null;
  if (!re || !lexicon) return <>{text}</>;

  return (
    <>
      {text.split(re).map((part, i) => {
        const kind = part ? kindFor(part, lexicon) : null;
        return kind ? (
          <Term key={i} kind={kind}>
            {part}
          </Term>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}

// ── Structural marks ─────────────────────────────────────────────────────────

/** The node: a lattice point where hairlines meet. The brand's smallest mark. */
function Node({ active = true }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      className="block h-[5px] w-[5px] shrink-0 rotate-45"
      style={{
        background: active ? "var(--accent)" : "transparent",
        border: active ? "none" : "1px solid var(--text-faint)",
      }}
    />
  );
}

/** Small mono label. Used for section numbering, units and metadata. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * The bond rule: node → label → hairline running out across the column, with
 * the title bonded beneath it. This is the page's primary recurring signature.
 */
export function SectionHeading({
  id,
  index,
  eyebrow,
  children,
}: {
  id?: string;
  index?: number;
  eyebrow?: string;
  children: ReactNode;
}) {
  const label =
    eyebrow ??
    (index !== undefined ? `Section ${String(index).padStart(2, "0")}` : null);

  return (
    <header id={id} className="scroll-mt-28 pt-20 first:pt-0">
      <div className="flex items-center gap-3">
        <Node />
        {label ? <Eyebrow>{label}</Eyebrow> : null}
        <span
          aria-hidden
          className="h-px flex-1"
          style={{ background: "var(--border)" }}
        />
      </div>
      <h2 className="font-display mt-4 max-w-[24ch] text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--foreground)] sm:max-w-[30ch] sm:text-[38px]">
        {children}
      </h2>
    </header>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-12 flex items-baseline gap-3 text-[20px] font-semibold leading-snug tracking-[-0.01em] text-[var(--foreground)] sm:text-[23px]">
      <span
        aria-hidden
        className="mt-[0.55em] h-px w-4 shrink-0 self-start"
        style={{ background: "var(--accent-dim)" }}
      />
      <span>{children}</span>
    </h3>
  );
}

// ── Prose ────────────────────────────────────────────────────────────────────

/** Body copy, held to a comfortable measure for long study sessions. */
export function Prose({
  text,
  lexicon,
  children,
}: {
  text?: string;
  lexicon?: TermLexicon;
  children?: ReactNode;
}) {
  return (
    <p className="my-5 max-w-[var(--measure)] text-[17px] leading-[1.8] text-[var(--text-body)] sm:text-[18px]">
      {children ?? <InlineTerms text={text ?? ""} lexicon={lexicon} />}
    </p>
  );
}

// ── Callouts ─────────────────────────────────────────────────────────────────

export type CalloutTone = "insight" | "trap" | "rule";

const CALLOUT_COLOR: Record<CalloutTone, string> = {
  insight: "var(--chem-bond)",
  trap: "var(--chem-trap)",
  rule: "var(--chem-rule)",
};

/** Infers tone from the callout's own label, so authored content needs no
 *  extra markup to get the right treatment. */
export function toneFromLabel(label: string): CalloutTone {
  if (/warning|mistake|caution|limitation|trap|do not|pitfall|error/i.test(label)) {
    return "trap";
  }
  if (/rule|remember|law|principle|convention|definition/i.test(label)) {
    return "rule";
  }
  return "insight";
}

export function Callout({
  label,
  tone,
  text,
  lexicon,
  children,
}: {
  label?: string;
  tone?: CalloutTone;
  text?: string;
  lexicon?: TermLexicon;
  children?: ReactNode;
}) {
  const resolved = tone ?? toneFromLabel(label ?? "");
  const color = CALLOUT_COLOR[resolved];

  return (
    <aside
      className="my-8 max-w-[var(--measure)] py-1 pl-5"
      style={{ borderLeft: `2px solid ${color}` }}
    >
      {label ? (
        <span
          className="font-data text-[11px] uppercase tracking-[0.18em]"
          style={{ color }}
        >
          {label}
        </span>
      ) : null}
      <div className="mt-2 text-[16px] leading-[1.75] text-[var(--text-body)] sm:text-[17px]">
        {children ?? <InlineTerms text={text ?? ""} lexicon={lexicon} />}
      </div>
    </aside>
  );
}

// ── Lists ────────────────────────────────────────────────────────────────────

export function BulletList({
  items,
  lexicon,
}: {
  items: readonly string[];
  lexicon?: TermLexicon;
}) {
  return (
    <ul className="my-6 max-w-[var(--measure)]">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-4 py-3 text-[17px] leading-[1.75] text-[var(--text-body)]"
          style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)" }}
        >
          <span
            aria-hidden
            className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rotate-45"
            style={{ background: "var(--text-faint)" }}
          />
          <span>
            <InlineTerms text={item} lexicon={lexicon} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({
  items,
  lexicon,
}: {
  items: readonly string[];
  lexicon?: TermLexicon;
}) {
  return (
    <ol className="my-6 max-w-[var(--measure)]">
      {items.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[2rem_1fr] gap-4 py-3 text-[17px] leading-[1.75] text-[var(--text-body)]"
          style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)" }}
        >
          <span className="font-data pt-[0.15em] text-[13px] text-[var(--accent)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>
            <InlineTerms text={item} lexicon={lexicon} />
          </span>
        </li>
      ))}
    </ol>
  );
}

// ── Tables ───────────────────────────────────────────────────────────────────

/** Data tables carry their own horizontal scroll so the page body never does. */
export function DataTable({
  headers,
  rows,
  lexicon,
  caption,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  lexicon?: TermLexicon;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="overflow-x-auto"
        style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}
      >
        <table className="w-full min-w-[600px] border-collapse text-left text-[15px] leading-[1.6]">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className="font-data px-4 py-3 align-bottom text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--border-strong)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((cells, r) => (
              <tr key={r}>
                {cells.map((cell, c) => (
                  <td
                    key={c}
                    className={`px-4 py-3 align-top ${
                      c === 0
                        ? "font-medium text-[var(--foreground)]"
                        : "text-[var(--text-body)]"
                    }`}
                    style={{
                      borderTop: r === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <InlineTerms text={cell} lexicon={lexicon} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-6 text-[var(--text-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

// ── Mathematics ──────────────────────────────────────────────────────────────

/**
 * Display maths. KaTeX renders in its own metric-matched faces — globals.css
 * deliberately keeps the UI mono off `.katex` so glyph metrics stay correct.
 */
export function Formula({
  expression,
  label,
  bare = false,
}: {
  expression: string;
  label?: string;
  /** Drop the frame when the caller already supplies one (e.g. a formula grid). */
  bare?: boolean;
}) {
  const html = katex.renderToString(expression, {
    displayMode: true,
    throwOnError: false,
    strict: false,
  });

  return (
    <div
      className={bare ? "px-5 py-6" : "my-8 max-w-[var(--measure)] px-5 py-6"}
      style={
        bare
          ? undefined
          : {
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              background: "var(--surface-2)",
            }
      }
    >
      <div
        className="overflow-x-auto text-[var(--foreground)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {label ? (
        <div className="mt-3 text-center">
          <Eyebrow>{label}</Eyebrow>
        </div>
      ) : null}
    </div>
  );
}

/** Inline maths for use mid-sentence. */
export function InlineFormula({ expression }: { expression: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expression, {
          displayMode: false,
          throwOnError: false,
          strict: false,
        }),
      }}
    />
  );
}

// ── Figures ──────────────────────────────────────────────────────────────────

/**
 * Frames an authored SVG structure. The `sb-figure` class knocks out the card
 * each legacy SVG draws for itself (see globals.css) so the frame here is the
 * only one — the chemistry files themselves stay untouched.
 */
export function Figure({
  svg,
  caption,
}: {
  svg: string;
  caption?: string;
}) {
  return (
    <figure
      className="sb-figure my-8 max-w-[var(--measure)] overflow-hidden"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface)",
      }}
    >
      <div
        className="overflow-x-auto px-4 py-5"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption ? (
        <figcaption
          className="px-4 py-3 text-[13px] leading-6 text-[var(--text-muted)]"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

// ── Navigation ───────────────────────────────────────────────────────────────

/**
 * The valence gutter: a vertical hairline with a node per section. It is the
 * bond chain of the document — structure made visible — and doubles as the
 * chapter map.
 */
export function ChapterRail({
  items,
  label = "Chapter map",
  hrefForIndex = (i: number) => `#section-${i + 1}`,
}: {
  items: readonly string[];
  label?: string;
  hrefForIndex?: (i: number) => string;
}) {
  return (
    <nav aria-label={label} className="hidden lg:block">
      <div className="sticky top-24">
        <Eyebrow>{label}</Eyebrow>
        <ol
          className="mt-4"
          style={{ borderLeft: "1px solid var(--border)" }}
        >
          {items.map((title, i) => (
            <li key={title} className="relative">
              <a
                href={hrefForIndex(i)}
                className="group flex items-start gap-3 py-2 pl-4 text-[13px] leading-5 text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.85em] h-[5px] w-[5px] -translate-x-1/2 rotate-45 transition-colors"
                  style={{ background: "var(--text-faint)" }}
                />
                <span className="font-data text-[11px] text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

/** Compact chapter map for viewports too narrow for the gutter. */
export function ChapterIndex({
  items,
  label = "Chapter map",
  hrefForIndex = (i: number) => `#section-${i + 1}`,
}: {
  items: readonly string[];
  label?: string;
  hrefForIndex?: (i: number) => string;
}) {
  return (
    <nav aria-label={label} className="py-10 lg:hidden">
      <Eyebrow>{label}</Eyebrow>
      <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-10">
        {items.map((title, i) => (
          <a
            key={title}
            href={hrefForIndex(i)}
            className="flex gap-3 py-3 text-[15px] leading-6 text-[var(--text-body)]"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span className="font-data text-[11px] text-[var(--accent)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
