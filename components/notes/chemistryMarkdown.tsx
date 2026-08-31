import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

/* ------------------------------------------------------------------ *
 * Shared chemistry notes renderer (p-block, boron-family, …).
 *
 * Restrained accent system — every colour has ONE job:
 *   ink / body  neutral reading text (bright, not grey)
 *   sky         section headings, links, "Key Point"
 *   sand        sub-headings, reaction arrows, emphasis
 *   iris        deep-theory sub-sub-headings, "MOT Lens"
 *   mint        "Note" / "Summary" call-outs, equation edge
 *   coral       "JEE Trap"
 * Applied inline so the global `h1..h6 { color }` rule can't flatten it.
 * ------------------------------------------------------------------ */

const C = {
  ink: "#f5f8fc",
  body: "#d9e2ee",
  faint: "#9fb0c4",
  sky: "#6cc8ec",
  sand: "#e6c079",
  iris: "#b79bf0",
  mint: "#5fd1a8",
  coral: "#f18a6d",
  line: "rgba(255,255,255,0.10)",
  panel: "rgba(255,255,255,0.035)",
} as const;

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
  if (/\.\s+[A-Z]/.test(t)) return false; //  "...⟶ X.  In these ions..."  => prose
  const stripped = t.replace(/\[[^\]]*\]/g, " ");
  if (STOPWORDS.test(stripped)) return false;
  return true;
}

const ARROWS = /(⟶|→|⇌|↔|⇋)/;

/** A bracketed segment is a *condition label*, not a chemical formula. */
function isConditionLabel(inner: string): boolean {
  const s = inner.trim();
  if (!s) return false;
  if (/\(/.test(s)) return false; //  [Al(OH)4]
  if (/\d/.test(s) && /[A-Z]/.test(s)) return false; //  [BF4] [GaCl4] [I3]
  if (/\s/.test(s)) return true; //  "hot concentrated", "dry ether"
  return /^[a-zΔµμ°]/.test(s); //  fusion, excess, warm, Δ
}

function Equation({ raw }: { raw: string }) {
  const parts = raw.trim().split(ARROWS);
  return (
    <div
      className="my-5 overflow-x-auto rounded-lg px-4 py-3"
      style={{ background: C.panel, borderLeft: `3px solid ${C.mint}` }}
    >
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[15px] leading-relaxed sm:text-[15.5px]" style={{ color: C.ink }}>
        {parts.map((seg, i) => {
          if (ARROWS.test(seg)) {
            return (
              <span key={i} className="mx-1.5 text-lg font-black" style={{ color: C.sand }}>
                {seg}
              </span>
            );
          }
          const bits = seg.split(/(\[[^\]]+\])/).filter(Boolean);
          return (
            <Fragment key={i}>
              {bits.map((b, j) => {
                const m = /^\[([^\]]+)\]$/.exec(b);
                if (m && isConditionLabel(m[1])) {
                  return (
                    <span
                      key={j}
                      className="rounded px-1.5 py-0.5 text-[12px] font-semibold"
                      style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${C.line}`, color: C.faint }}
                    >
                      {m[1].trim()}
                    </span>
                  );
                }
                const prev = bits[j - 1] ?? "";
                if (/^\d{0,2}[+−-]$/.test(b.trim()) && /[)\]]$/.test(prev.trim())) {
                  return (
                    <span key={j} className="font-medium">
                      {toSup(b.trim())}
                    </span>
                  );
                }
                const s = formatChem(b).replace(/\s+/g, " ").trim();
                return s ? (
                  <span key={j} className="font-medium">
                    {s}
                  </span>
                ) : null;
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- typed call-out boxes ---------------------------------- */

type Variant = { key: string; label: string; accent: string };
const VARIANTS: Variant[] = [
  { key: "jee trap", label: "JEE Trap", accent: C.coral },
  { key: "mot lens", label: "MOT Lens", accent: C.iris },
  { key: "key point", label: "Key Point", accent: C.sky },
  { key: "big picture", label: "Big Picture", accent: C.sky },
  { key: "continuity map", label: "Continuity", accent: C.sky },
  { key: "structural summary", label: "Summary", accent: C.iris },
  { key: "analytical note", label: "Analytical Note", accent: C.mint },
  { key: "hydration note", label: "Note", accent: C.mint },
  { key: "chemical note", label: "Note", accent: C.mint },
  { key: "oxide-character note", label: "Note", accent: C.mint },
  { key: "passivation", label: "Conditions", accent: C.sand },
  { key: "ordinary conditions", label: "Conditions", accent: C.sand },
  { key: "note", label: "Note", accent: C.mint },
];
const DEFAULT_VARIANT: Variant = { key: "", label: "Note", accent: C.mint };

function pickVariant(text: string): Variant {
  const head = text.trim().toLowerCase().replace(/^[*\s]+/, "").slice(0, 40);
  return VARIANTS.find((v) => head.startsWith(v.key)) ?? DEFAULT_VARIANT;
}

function Callout({ children }: { children: ReactNode }) {
  const v = pickVariant(flattenText(children));
  return (
    <div
      className="my-5 rounded-lg p-4 pl-4"
      style={{ borderLeft: `3px solid ${v.accent}`, background: C.panel }}
    >
      <p className="mb-1.5 text-[10.5px] font-black uppercase tracking-[0.2em]" style={{ color: v.accent }}>
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

const components: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <section className="mt-14 first:mt-0">
        <h2
          id={slugify(text)}
          className="pt-7 font-sans text-[1.85rem] font-black leading-tight tracking-tight sm:text-[2.15rem]"
          style={h({ color: C.ink, borderTop: `1px solid ${C.line}` })}
        >
          {children}
        </h2>
      </section>
    );
  },
  h2: ({ children }) => (
    <h3 id={slugify(flattenText(children))} className="pt-8 font-sans text-[1.4rem] font-black leading-tight" style={h({ color: C.sky })}>
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="pt-5 font-sans text-[1.15rem] font-black leading-tight" style={h({ color: C.sand })}>
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="pt-3 font-sans text-[13px] font-black uppercase tracking-[0.14em]" style={h({ color: C.faint })}>
      {children}
    </h5>
  ),
  p: ({ children }) => {
    const text = flattenText(children);
    if (isEquation(text)) return <Equation raw={text} />;
    return (
      <p className="max-w-[72ch] text-[16px] leading-[1.85]" style={{ color: C.body }}>
        {children}
      </p>
    );
  },
  ul: ({ children }) => (
    <ul className="my-3 ml-5 max-w-[72ch] list-disc space-y-2 marker:text-[#6cc8ec]" style={{ color: C.body }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 ml-6 max-w-[72ch] list-decimal space-y-2 marker:font-black marker:text-[#e6c079]" style={{ color: C.body }}>
      {children}
    </ol>
  ),
  li: ({ children }) => {
    const text = flattenText(children);
    if (isEquation(text)) {
      return (
        <li className="list-none">
          <Equation raw={text} />
        </li>
      );
    }
    return <li className="pl-1 text-[15.5px] leading-[1.75]">{children}</li>;
  },
  strong: ({ children }) => (
    <strong className="font-bold" style={{ color: C.ink }}>
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="font-semibold not-italic" style={{ color: C.sand }}>
      {children}
    </em>
  ),
  blockquote: ({ children }) => <Callout>{children}</Callout>,
  hr: () => <hr className="my-10 h-px border-0" style={{ background: C.line }} />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg" style={{ border: `1px solid ${C.line}` }}>
      <table className="min-w-full border-collapse text-left text-[14px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: "rgba(255,255,255,0.04)" }}>{children}</thead>
  ),
  tbody: ({ children }) => <tbody className="[&>tr:nth-child(even)]:bg-white/[0.02]">{children}</tbody>,
  th: ({ children }) => (
    <th className="px-3.5 py-2.5 font-black" style={{ borderBottom: `1px solid ${C.line}`, color: C.sky }}>
      {children}
    </th>
  ),
  td: ({ children }) => {
    const text = flattenText(children);
    const content = ARROWS.test(text) && !/[a-z]{4}/.test(text.replace(/\[[^\]]*\]/g, "")) ? formatChem(text) : children;
    return (
      <td className="px-3.5 py-2.5 align-top leading-6" style={{ borderBottom: `1px solid ${C.line}`, color: C.body }}>
        {content}
      </td>
    );
  },
  a: ({ href, children }) => (
    <a href={href} className="font-semibold underline underline-offset-4" style={{ color: C.sky, textDecorationColor: "rgba(108,200,236,0.4)" }}>
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
};

export function ChemistryMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-4 [&_tr>td:first-child]:font-semibold [&_tr>td:first-child]:text-[#f5f8fc]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}


