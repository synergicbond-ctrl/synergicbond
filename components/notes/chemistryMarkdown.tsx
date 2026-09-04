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

export const C = {
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
export const tint = (hex: string, pct: number) => {
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

const CHARGE_END = /(?=$|[\s,;.()[\]]|·|⟶|→|⇌|↔|\+|"|'|—)/.source;
/** monatomic cations written with an explicit charge magnitude (Al3+, Ca2+, Tl3+) —
 *  as opposed to polyatomic anions where a lone digit is a subscript (HCO3-, NO3-) */
const CATION = "Al|Ga|In|Tl|Be|Mg|Ca|Sr|Ba|Li|Na|K|Rb|Cs|Fe|Cr|Mn|Co|Ni|Cu|Zn|Cd|Hg|Ag|Pb|Sn|Ti|Sc|La|Ce";
function formatChem(text: string): string {
  let t = text;
  t = t.replace(/([)\]A-Za-z0-9])\.(\s?\d*\s?[A-Z(])/g, "$1·$2"); // hydrate dot
  // 1. charge after a closing bracket — [AlF6]3-, [BF4]-, [Al(H2O)6]3+  (digits = magnitude)
  t = t.replace(new RegExp(/(\])(\d{0,2})([+-])/.source + CHARGE_END, "g"), (_m, b, d, s) => b + toSup((d || "") + s));
  // 2. monatomic cation with magnitude — Al3+, Ca2+, Tl3+
  t = t.replace(new RegExp("\\b(" + CATION + ")(\\d)([+-])" + CHARGE_END, "g"), (_m, b, d, s) => b + toSup(d + s));
  // 3. sign after subscript digits — SO42- (4 sub, 2 charge), Cr2O72-  (last digit = magnitude, rest = subscript)
  t = t.replace(new RegExp(/([A-Za-z])(\d)(\d)([+-])/.source + CHARGE_END, "g"), (_m, b, sub, mag, s) => b + toSub(sub) + toSup(mag + s));
  // 4. single digit then sign after ) or symbol — B(OH)4-, HCO3-, NO3-  (digit = subscript, sign only = charge)
  t = t.replace(new RegExp(/([)A-Za-z])(\d)([+-])/.source + CHARGE_END, "g"), (_m, b, d, s) => b + toSub(d) + toSup(s));
  // 5. bare sign — Na+, OH-, H3O+, F-
  t = t.replace(new RegExp(/([)\]A-Za-z])([+-])/.source + CHARGE_END, "g"), (_m, b, s) => b + toSup(s));
  // 6. remaining digit runs are subscripts
  t = t.replace(/([A-Za-z)\]])(\d+)/g, (_m, base, digits) => base + toSub(digits));
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

/** A bracketed segment is a *condition label* (goes on the arrow), not a
 *  chemical formula and not a prose aside. Definitions, procedural narration,
 *  observations and product descriptors are NOT conditions — they belong in a
 *  note below the whole equation, so they are rejected here. */
const NON_CONDITION =
  /[=]|\b(?:many metals|as feasible|schematic|net comparison|major volatile fraction|cautious aqueous work-?up|then\b.*work-?up|deposits? at|evolv\w* at|burns? brilliantly|product is a|see (?:section|above|below)|crystalline|amorphous|high purity|high-purity)\b/i;
const CONDITION_SIGNAL =
  /°|\b\d+\s?K\b|\b\d+(?:\s?[–-]\s?\d+)?\s?atm\b|\bbar\b|\bpressure\b|\b(?:silent )?electric discharge\b|\bdischarge\b|\bfilament\b|\bfurnace\b|\belectrolysis\b|\bfusion\b|\bignition\b|\bcatalyst\b|\bhν\b|\bΔ\b|\breflux\b|\bamalgam\w*\b/i;

function isConditionLabel(inner: string): boolean {
  const s = inner.trim();
  if (!s) return false;
  if (NON_CONDITION.test(s)) return false; //  "E = B, Al…", "filter …", "crystalline"
  if (CONDITION_SIGNAL.test(s)) return true; //  "450–750 atm", "hot W/Ta filament", "1273 K"
  if (/\(/.test(s)) return false; //  [Al(OH)4]
  if (/[a-z]{3,}/.test(s)) return true; //  a real word: "furnace", "dry ether", "warm"
  if (/\d/.test(s) && /[A-Z]/.test(s)) return false; //  [BF4] [GaCl4] [I3]
  if (/\s/.test(s)) return true; //  "hot concentrated"
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

/** Solvent, reaction medium, atmosphere → always sits BELOW the arrow (textbook
 *  convention), no matter which side of the arrow it was written on. */
const MEDIUM_RE =
  /\b(?:dry|anhydrous|aqueous|ether|Et2O|OEt2|diglyme|glyme|THF|hydrocarbon|benzene|toluene|melt|molten|solution|suspension|atmosphere|vacuum|inert|amalgam\w*)\b/i;
const HARD_RE =
  /°|\b\d+\s?K\b|\batm\b|\bbar\b|\bpressure\b|catalyst|filament|discharge|\bΔ\b|\bheat\b|heating|ignition|reflux|fusion|hν|electrolysis|red heat/i;
/** Solvent / medium / atmosphere → BELOW the arrow; heat / catalyst / pressure /
 *  light → ABOVE; a mixed or unclassifiable label stays where it was written. */
const slotFor = (label: string, fallback: "above" | "below"): "above" | "below" => {
  const medium = MEDIUM_RE.test(label);
  const hard = HARD_RE.test(label);
  if (hard && !medium) return "above";
  if (medium && !hard) return "below";
  return fallback;
};

export function Equation({ raw }: { raw: string }) {
  const parts = raw.trim().split(ARROWS);
  const arrowIdx = parts.map((p, i) => (ARROWS.test(p) ? i : -1)).filter((i) => i >= 0);
  const meta: { above: string[]; below: string[] }[] = parts.map(() => ({ above: [], below: [] }));

  // Pass 1 — conditions directly touching an arrow.
  for (const i of arrowIdx) {
    if (i > 0 && parts[i - 1] != null) {
      const { seg, label } = stripEdgeCondition(parts[i - 1], "before");
      if (label) { parts[i - 1] = seg; meta[i][slotFor(label, "above")].push(label); }
    }
    if (parts[i + 1] != null) {
      const { seg, label } = stripEdgeCondition(parts[i + 1], "after");
      if (label) { parts[i + 1] = seg; meta[i][slotFor(label, "below")].push(label); }
    }
  }
  // Pass 2 — any remaining bracketed segment: a real condition attaches to the
  // nearest arrow (before → above, after → below); a formula ion stays in the
  // equation; anything else (a stray observation / scope note) drops to a prose
  // line beneath the equation. Nothing is ever left as an inline pill.
  const trailingNotes: string[] = [];
  const looksLikeFormula = (t: string) =>
    !/\s/.test(t) &&
    /[A-Za-z]/.test(t) &&
    // allow Unicode sub/superscripts (₀-₉ ⁰-⁹ ⁺ ⁻) and the triple-bond glyph so
    // bracketed complex ions like [Be(OH)₄]²⁻ or [C≡C]²⁻ stay in the equation
    /^[A-Za-z0-9()[\]·.,'’+−\-µμΔ₀-ₜ⁰-ⁿ≡]+$/.test(t);
  for (let i = 0; i < parts.length; i++) {
    if (ARROWS.test(parts[i]) || !parts[i]) continue;
    parts[i] = parts[i].replace(COND_RE, (full, inner) => {
      const label = inner.trim();
      if (isConditionLabel(label)) {
        let best = arrowIdx[0] ?? -1;
        for (const a of arrowIdx) if (Math.abs(a - i) < Math.abs(best - i)) best = a;
        if (best >= 0) {
          meta[best][slotFor(label, i < best ? "above" : "below")].push(label);
          return " ";
        }
      }
      if (looksLikeFormula(label)) return full; //  [BF4]-, [Al(H2O)6]3+ — a species
      trailingNotes.push(label);
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
      {trailingNotes.length > 0 && (
        <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: C.faint }}>
          {trailingNotes.join("; ")}
        </p>
      )}
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
  img: ({ src, alt }) => {
    const caption = (alt ?? "").replace(/^Fig\.\s*/i, "");
    return (
      <figure className="my-7 overflow-hidden rounded-xl" style={{ border: `1px solid ${tint(C.cyan, 0.22)}`, background: "#0a0c11" }}>
        {/* Static schematic SVGs served from /public — next/image gives no benefit and needs dangerouslyAllowSVG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof src === "string" ? src : undefined}
          alt={alt ?? ""}
          loading="lazy"
          className="mx-auto block h-auto w-full max-w-[680px]"
        />
        {caption ? (
          <figcaption
            className="border-t px-4 py-2.5 text-[13px] leading-6"
            style={{ borderColor: tint(C.cyan, 0.18), color: C.faint, background: "rgba(255,255,255,0.02)" }}
          >
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  },
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


