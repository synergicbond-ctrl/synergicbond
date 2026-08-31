import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/* ------------------------------------------------------------------ *
 * Shared chemistry notes renderer (p-block, boron-family, …).
 *
 * Vivid multi-colour system — a curated 8-hue palette applied boldly
 * across headings, call-outs, equations and tables. Colours are set
 * inline so the app's global `h1..h6 { color }` rule can't flatten
 * them, and every tinted surface uses the matching hue.
 * ------------------------------------------------------------------ */

const C = {
  ink: "#f6f9fd",
  body: "#dde5f0",
  faint: "#9db0c6",
  cyan: "#3fd0ee",
  teal: "#2fd9a6",
  lime: "#a3e14e",
  gold: "#f5b93c",
  coral: "#ff7a6b",
  pink: "#f472c0",
  violet: "#a98cff",
  blue: "#5b9dff",
  line: "rgba(255,255,255,0.09)",
  // reaction palette — deliberately NOT textbook blue/green:
  rxn: "#ecd9ac", // warm champagne — reactant + product formulae
  rxnProduct: "#f6e6b6", // a touch brighter for the product side
  rxnArrow: "#ff8f5e", // coral-orange arrows & conditions
} as const;

/** translucent tint of a hex colour, for call-out / card backgrounds */
const tint = (hex: string, pct: number) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${pct})`;
};

function flattenText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return flattenText((node as { props?: { children?: ReactNode } }).props?.children ?? "");
  }
  return "";
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (d) => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(d)] ?? d)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ---------- chemical-formula prettifier ---------------------------- */

const SUP: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "+": "⁺", "-": "⁻", "−": "⁻" };
const SUB: Record<string, string> = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
const toSup = (s: string) => s.replace(/./g, (c) => SUP[c] ?? c);
const toSub = (s: string) => s.replace(/\d/g, (c) => SUB[c] ?? c);

function formatChem(text: string): string {
  let t = text;
  t = t.replace(/([)\]A-Za-z0-9])\.(\s?\d*\s?[A-Z(])/g, "$1·$2"); // hydrate dot
  t = t.replace(/([)\]]|[A-Z][a-z]?)(\d{0,2})([+-])(?=$|[\s,;.)\]]|·|⟶|→|⇌|↔|\+|"|'|—)/g, (_m, base, digits, sign) => base + toSup((digits || "") + sign)); // charges
  t = t.replace(/([A-Za-z)\]])(\d+)/g, (_m, base, digits) => base + toSub(digits)); // subscripts
  return t;
}

const STOPWORDS = /\b(the|is|are|was|were|be|because|which|this|that|these|those|with|when|while|note|shows?|gives?|means?|then|for a|whereas|although|about|reaction|equation|describe[ds]?|represent(ed|s)?|behaves?|have|has|its|their|contains?|number|also|first|following|actual|see|hence|thus|both|each|either|used?|forms?)\b/i;

function isEquation(text: string): boolean {
  const t = text.trim();
  if (!/(⟶|→|⇌|↔|⇋)/.test(t)) return false;
  if (t.length > 260) return false;
  if (/\\[a-zA-Z]|[{}]|\$/.test(t)) return false; //  contains LaTeX — leave it to KaTeX
  if (/\.\s+[A-Z]/.test(t)) return false; //  "...⟶ X.  In these ions..."  => prose
  const stripped = t.replace(/\[[^\]]*\]/g, " ");
  if (STOPWORDS.test(stripped)) return false;
  return true;
}

/** Only intercept a paragraph as a plain-text reaction when it has NO child
 *  elements (a KaTeX span, a link, …) — otherwise flattenText would blend in
 *  hidden MathML annotations and produce garbage. */
function pureText(children: ReactNode): string | null {
  if (typeof children === "string") return children;
  if (Array.isArray(children) && children.every((c) => typeof c === "string" || typeof c === "number")) {
    return children.join("");
  }
  return null;
}

const ARROWS = /(⟶|→|⇌|↔|⇋)/;

/** A bracketed segment is a *condition label*, not a chemical formula. */
function isConditionLabel(inner: string): boolean {
  const s = inner.trim();
  if (!s) return false;
  if (/\(/.test(s)) return false; //  [Al(OH)4]
  if (/[a-z]{3,}/.test(s)) return true; //  a real word: "furnace", "about 2000 °C", "crystalline"
  if (/\d/.test(s) && /[A-Z]/.test(s)) return false; //  [BF4] [GaCl4] [I3]
  if (/\s/.test(s)) return true; //  "hot concentrated", "dry ether"
  return /^[a-zΔµμ°]/.test(s); //  fusion, excess, warm, Δ
}

/** Render one side of a reaction (a run of species + operators), splitting on
 *  ` + ` so each chemical species stays unbreakable. */
function EqSegment({ seg, hue }: { seg: string; hue: string }) {
  const species = formatChem(seg).replace(/\s+/g, " ").trim().split(/\s(?=\+)|(?<=\+)\s/);
  return (
    <>
      {species.map((sp, j) => {
        const t = sp.trim();
        if (!t) return null;
        if (t === "+") {
          return (
            <span key={j} className="mx-1 opacity-70" style={{ color: hue }}>
              +
            </span>
          );
        }
        return (
          <span key={j} className="whitespace-nowrap font-semibold" style={{ color: hue }}>
            {t}
          </span>
        );
      })}
    </>
  );
}

/** Long arrow glyph for a given arrow symbol (keep equilibrium arrows intact). */
function longArrow(sym: string): string {
  if (sym === "⇌" || sym === "⇋" || sym === "↔") return sym;
  return "⟶";
}

/** A reaction arrow with conditions stacked above (reagents / catalyst) and
 *  below (temperature / medium) — proper chemical-equation notation. */
function RxnArrow({ symbol, above, below }: { symbol: string; above?: string; below?: string }) {
  return (
    <span className="mx-1 inline-flex shrink-0 flex-col items-center justify-center self-center px-1 leading-none">
      {above ? (
        <span className="pb-[2px] text-center text-[10px] font-bold uppercase leading-tight tracking-wide" style={{ color: C.rxnArrow, maxWidth: "11rem" }}>
          {formatChem(above)}
        </span>
      ) : null}
      <span className="text-[17px] font-black leading-none" style={{ color: C.rxnArrow, transform: "scaleX(2)" }}>
        {longArrow(symbol)}
      </span>
      {below ? (
        <span className="pt-[2px] text-center text-[10px] font-medium leading-tight" style={{ color: tint(C.rxnArrow, 0.82), maxWidth: "11rem" }}>
          {formatChem(below)}
        </span>
      ) : null}
    </span>
  );
}

const COND_RE = /\[([^\]]+)\]/g;

/** Pull the condition label that touches an arrow off a species segment.
 *  `A [fusion] ⟶ [Δ] B` → "fusion" above, "Δ" below; also the dashed
 *  shorthand `A −strong heat ⟶ B`. */
function stripEdgeCondition(seg: string, side: "before" | "after"): { seg: string; label?: string } {
  if (side === "after") {
    const m = /^\s*\[([^\]]+)\]\s*/.exec(seg);
    if (m && isConditionLabel(m[1])) return { seg: seg.slice(m[0].length), label: m[1].trim() };
    return { seg };
  }
  const mBracket = /\s*\[([^\]]+)\]\s*$/.exec(seg);
  if (mBracket && isConditionLabel(mBracket[1])) {
    return { seg: seg.slice(0, mBracket.index), label: mBracket[1].trim() };
  }
  // dashed shorthand: `… −Δ ⟶` / `… —dry hydrocarbon; controlled temp ⟶`
  const mDash = /\s[–—−](\s?(?:[Δδ]|[a-z][^[\]⟶→⇌↔]*?))\s*$/.exec(seg);
  if (mDash) return { seg: seg.slice(0, mDash.index), label: mDash[1].trim() };
  return { seg };
}

function Equation({ raw }: { raw: string }) {
  const parts = raw.trim().split(ARROWS);
  const arrowIdx = parts.map((p, i) => (ARROWS.test(p) ? i : -1)).filter((i) => i >= 0);
  const meta: { above: string[]; below: string[] }[] = parts.map(() => ({ above: [], below: [] }));

  // Pass 1 — conditions directly touching an arrow.
  for (const i of arrowIdx) {
    if (i > 0 && parts[i - 1] != null) {
      const { seg, label } = stripEdgeCondition(parts[i - 1], "before");
      if (label) { parts[i - 1] = seg; meta[i].above.push(label); }
    }
    if (parts[i + 1] != null) {
      const { seg, label } = stripEdgeCondition(parts[i + 1], "after");
      if (label) { parts[i + 1] = seg; meta[i].below.push(label); }
    }
  }
  // Pass 2 — any remaining bracketed condition anywhere: attach to the nearest
  // arrow (before → above, after → below). Nothing is ever left as a pill.
  for (let i = 0; i < parts.length; i++) {
    if (ARROWS.test(parts[i]) || !parts[i]) continue;
    parts[i] = parts[i].replace(COND_RE, (full, inner) => {
      if (!isConditionLabel(inner)) return full;
      let best = arrowIdx[0] ?? -1;
      for (const a of arrowIdx) if (Math.abs(a - i) < Math.abs(best - i)) best = a;
      if (best < 0) return full;
      (i < best ? meta[best].above : meta[best].below).push(inner.trim());
      return " ";
    });
  }

  const firstArrow = arrowIdx[0] ?? -1;
  const plain = raw.replace(/\[[^\]]*\]/g, "").replace(/\s+/g, " ").trim();
  const size = plain.length > 130 ? "text-[11.5px] sm:text-[12.5px]" : plain.length > 90 ? "text-[13px] sm:text-[13.5px]" : "text-[14.5px] sm:text-[15px]";

  return (
    <div className="my-4 overflow-x-auto py-1" style={{ borderLeft: `2px solid ${tint(C.rxnArrow, 0.4)}`, paddingLeft: "0.85rem" }}>
      <div className={`flex flex-wrap items-center gap-x-1 gap-y-1.5 font-mono leading-relaxed ${size}`} style={{ color: C.rxn }}>
        {parts.map((seg, i) =>
          ARROWS.test(seg) ? (
            <RxnArrow key={i} symbol={seg} above={meta[i].above.join(" · ") || undefined} below={meta[i].below.join(" · ") || undefined} />
          ) : seg.trim() ? (
            <Fragment key={i}>
              <EqSegment seg={seg} hue={firstArrow >= 0 && i > firstArrow ? C.rxnProduct : C.rxn} />
            </Fragment>
          ) : null,
        )}
      </div>
    </div>
  );
}

/* ---------- typed call-out boxes ---------------------------------- */

type Variant = { key: string; label: string; icon: string; accent: string };
const VARIANTS: Variant[] = [
  { key: "jee trap", label: "JEE Trap", icon: "⚠", accent: C.coral },
  { key: "mot lens", label: "MOT Lens", icon: "◎", accent: C.violet },
  { key: "key point", label: "Key Point", icon: "★", accent: C.cyan },
  { key: "big picture", label: "Big Picture", icon: "◆", accent: C.blue },
  { key: "continuity map", label: "Continuity", icon: "▸", accent: C.blue },
  { key: "structural summary", label: "Summary", icon: "▤", accent: C.violet },
  { key: "analytical note", label: "Analytical Note", icon: "✎", accent: C.teal },
  { key: "hydration note", label: "Note", icon: "•", accent: C.teal },
  { key: "chemical note", label: "Note", icon: "•", accent: C.teal },
  { key: "oxide-character note", label: "Note", icon: "•", accent: C.teal },
  { key: "passivation", label: "Conditions", icon: "⚗", accent: C.gold },
  { key: "ordinary conditions", label: "Conditions", icon: "⚗", accent: C.gold },
  { key: "note", label: "Note", icon: "•", accent: C.teal },
];
const DEFAULT_VARIANT: Variant = { key: "", label: "Note", icon: "•", accent: C.teal };

function pickVariant(text: string): Variant {
  const head = text.trim().toLowerCase().replace(/^[*\s]+/, "").slice(0, 40);
  return VARIANTS.find((v) => head.startsWith(v.key)) ?? DEFAULT_VARIANT;
}

function Callout({ children }: { children: ReactNode }) {
  const v = pickVariant(flattenText(children));
  return (
    <div
      className="my-5 rounded-xl p-4 pl-5"
      style={{ borderLeft: `4px solid ${v.accent}`, background: tint(v.accent, 0.1) }}
    >
      <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em]" style={{ color: v.accent }}>
        <span aria-hidden className="text-[13px] leading-none">{v.icon}</span>
        {v.label}
      </p>
      <div className="space-y-2 text-[15px] leading-[1.75]" style={{ color: C.body }}>
        {children}
      </div>
    </div>
  );
}

/* ---------- markdown component map ------------------------------- */

const h = (style: CSSProperties): CSSProperties => ({ scrollMarginTop: "6rem", ...style });

const FIGURE_RE = /^::figure\s+([\w:-]+)::$/;

const makeComponents = (figureFor?: (key: string) => ReactNode): Components => ({
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <section className="mt-14 first:mt-0">
        <h2
          id={slugify(text)}
          className="w-fit pt-7 font-sans text-[1.9rem] font-black leading-tight tracking-tight sm:text-[2.25rem]"
          style={h({
            color: C.cyan,
            backgroundImage: `linear-gradient(100deg, ${C.cyan}, ${C.violet} 55%, ${C.pink})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderTop: `2px solid ${tint(C.cyan, 0.35)}`,
          })}
        >
          {children}
        </h2>
      </section>
    );
  },
  h2: ({ children }) => (
    <h3
      id={slugify(flattenText(children))}
      className="mt-2 inline-block border-b-2 pb-1 pt-8 font-sans text-[1.45rem] font-black leading-tight"
      style={h({ color: C.cyan, borderColor: tint(C.cyan, 0.4) })}
    >
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="pt-5 font-sans text-[1.15rem] font-black leading-tight" style={h({ color: C.gold })}>
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="pt-3 font-sans text-[13px] font-black uppercase tracking-[0.16em]" style={h({ color: C.pink })}>
      {children}
    </h5>
  ),
  p: ({ children }) => {
    const raw = pureText(children);
    if (raw !== null) {
      const fig = FIGURE_RE.exec(raw.trim());
      if (fig) {
        const node = figureFor?.(fig[1]);
        return node ? <div className="my-6">{node}</div> : null;
      }
      if (isEquation(raw)) return <Equation raw={raw} />;
    }
    return (
      <p className="max-w-[74ch] text-[16px] leading-[1.85]" style={{ color: C.body }}>
        {children}
      </p>
    );
  },
  ul: ({ children }) => (
    <ul className="my-3 ml-5 max-w-[74ch] list-disc space-y-2 marker:text-[#3fd0ee]" style={{ color: C.body }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 ml-6 max-w-[74ch] list-decimal space-y-2 marker:font-black marker:text-[#f5b93c]" style={{ color: C.body }}>
      {children}
    </ol>
  ),
  li: ({ children }) => {
    const raw = pureText(children);
    if (raw !== null && isEquation(raw)) {
      return (
        <li className="list-none">
          <Equation raw={raw} />
        </li>
      );
    }
    return <li className="pl-1 text-[15.5px] leading-[1.75]">{children}</li>;
  },
  strong: ({ children }) => (
    <strong className="font-black" style={{ color: C.gold }}>
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="font-semibold not-italic" style={{ color: C.violet }}>
      {children}
    </em>
  ),
  blockquote: ({ children }) => <Callout>{children}</Callout>,
  hr: () => (
    <hr
      className="my-10 h-[2px] border-0"
      style={{ background: `linear-gradient(to right, ${tint(C.cyan, 0.5)}, ${tint(C.violet, 0.5)}, ${tint(C.pink, 0.4)}, transparent)` }}
    />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl" style={{ border: `1px solid ${tint(C.cyan, 0.22)}` }}>
      <table className="min-w-full border-collapse text-left text-[14px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: `linear-gradient(135deg, ${tint(C.cyan, 0.18)}, ${tint(C.violet, 0.14)})` }}>{children}</thead>
  ),
  tbody: ({ children }) => <tbody className="[&>tr:nth-child(even)]:bg-white/[0.025]">{children}</tbody>,
  th: ({ children }) => (
    <th className="px-3.5 py-2.5 font-black" style={{ borderBottom: `1px solid ${tint(C.cyan, 0.3)}`, color: C.cyan }}>
      {children}
    </th>
  ),
  td: ({ children }) => {
    const raw = pureText(children);
    const content =
      raw !== null && ARROWS.test(raw) && !/\\[a-zA-Z]|[{}$]/.test(raw) && !/[a-z]{4}/.test(raw.replace(/\[[^\]]*\]/g, ""))
        ? formatChem(raw)
        : children;
    return (
      <td className="px-3.5 py-2.5 align-top leading-6" style={{ borderBottom: `1px solid ${C.line}`, color: C.body }}>
        {content}
      </td>
    );
  },
  a: ({ href, children }) => (
    <a href={href} className="font-bold underline underline-offset-4" style={{ color: C.cyan, textDecorationColor: tint(C.cyan, 0.45) }}>
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code
      className="rounded px-1.5 py-0.5 font-mono text-[0.88em]"
      style={{ border: `1px solid ${C.line}`, background: "rgba(255,255,255,0.05)", color: C.ink }}
    >
      {formatChem(flattenText(children))}
    </code>
  ),
});

/** `\[ … \]` → `$$ … $$` and `\( … \)` → `$ … $` so KaTeX picks them up. */
function normaliseMath(markdown: string) {
  return markdown
    .replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_m, e: string) => `\n$$\n${e.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_m, e: string) => `$${e.trim()}$`);
}

export function ChemistryMarkdown({
  markdown,
  figureFor,
}: {
  markdown: string;
  /** Resolve a `::figure KEY::` marker line to an inline visual. */
  figureFor?: (key: string) => ReactNode;
}) {
  const components = makeComponents(figureFor);
  return (
    <div className="space-y-4 [&_.katex-display]:my-4 [&_.katex-display]:overflow-x-auto [&_.katex-display]:rounded-xl [&_.katex-display]:border [&_.katex-display]:border-[#ecd9ac]/25 [&_.katex-display]:bg-[#ecd9ac]/[0.06] [&_.katex-display]:px-4 [&_.katex-display]:py-3 [&_.katex]:text-[#ecd9ac] [&_.katex_.mrel]:text-[#ff8f5e] [&_tr>td:first-child]:font-semibold [&_tr>td:first-child]:text-[#f5f8fc]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={components}
      >
        {normaliseMath(markdown)}
      </ReactMarkdown>
    </div>
  );
}


