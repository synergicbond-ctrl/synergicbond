import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

/* ------------------------------------------------------------------ *
 * Boron-family notes renderer.
 * Bright body text + a six-colour accent system. Colours are applied
 * with inline styles so the app's global `h1..h6 { color }` rule and
 * other cascade wins cannot flatten them back to one tone.
 * ------------------------------------------------------------------ */

const C = {
  ink: "var(--foreground)",
  body: "var(--text-body)",
  cyan: "var(--chem-bond)", //  #37c8f4
  amber: "var(--chem-energy)", // #e3b341
  violet: "var(--chem-orbital)", // #b376ff
  green: "var(--chem-rule)", // #50dc7b
  red: "var(--chem-trap)", // #ff775d
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
      className="my-5 overflow-x-auto rounded-xl px-4 py-3.5"
      style={{ border: `1px solid color-mix(in srgb, ${C.green} 32%, transparent)`, background: `color-mix(in srgb, ${C.green} 7%, transparent)` }}
    >
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[15px] leading-relaxed sm:text-base" style={{ color: C.ink }}>
        {parts.map((seg, i) => {
          if (ARROWS.test(seg)) {
            return (
              <span key={i} className="mx-1 text-lg font-black" style={{ color: C.amber }}>
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
                      className="rounded-md px-2 py-0.5 text-[12.5px] font-semibold"
                      style={{ background: `color-mix(in srgb, ${C.amber} 16%, transparent)`, color: C.amber }}
                    >
                      {m[1].trim()}
                    </span>
                  );
                }
                // a charge stranded after a "]" or ")" split boundary
                const prev = bits[j - 1] ?? "";
                if (/^\d{0,2}[+−-]$/.test(b.trim()) && /[)\]]$/.test(prev.trim())) {
                  return (
                    <span key={j} className="font-semibold" style={{ color: C.cyan }}>
                      {toSup(b.trim())}
                    </span>
                  );
                }
                const s = formatChem(b).replace(/\s+/g, " ").trim();
                return s ? (
                  <span key={j} className="font-semibold" style={{ color: C.cyan }}>
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
  { key: "jee trap", label: "JEE Trap", accent: C.red },
  { key: "mot lens", label: "MOT Lens", accent: C.violet },
  { key: "key point", label: "Key Point", accent: C.cyan },
  { key: "analytical note", label: "Analytical Note", accent: C.green },
  { key: "hydration note", label: "Note", accent: C.green },
  { key: "chemical note", label: "Note", accent: C.green },
  { key: "oxide-character note", label: "Note", accent: C.green },
  { key: "structural summary", label: "Summary", accent: C.violet },
  { key: "big picture", label: "Big Picture", accent: C.cyan },
  { key: "continuity map", label: "Continuity", accent: C.cyan },
  { key: "note", label: "Note", accent: C.amber },
  { key: "passivation", label: "Conditions", accent: C.amber },
  { key: "ordinary conditions", label: "Conditions", accent: C.amber },
  { key: "hydrogen", label: "Note", accent: C.cyan },
];
const DEFAULT_VARIANT: Variant = { key: "", label: "Note", accent: C.amber };

function pickVariant(text: string): Variant {
  const head = text.trim().toLowerCase().replace(/^[*\s]+/, "").slice(0, 40);
  return VARIANTS.find((v) => head.startsWith(v.key)) ?? DEFAULT_VARIANT;
}

function Callout({ children }: { children: ReactNode }) {
  const v = pickVariant(flattenText(children));
  return (
    <div
      className="my-5 rounded-xl p-4 pl-5"
      style={{ borderLeft: `4px solid ${v.accent}`, background: `color-mix(in srgb, ${v.accent} 9%, transparent)` }}
    >
      <p className="mb-1.5 text-[11px] font-black uppercase tracking-[0.18em]" style={{ color: v.accent }}>
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
          className="pt-8 font-sans text-[2rem] font-black leading-tight tracking-tight sm:text-[2.4rem]"
          style={h({ color: C.ink, borderTop: `2px solid color-mix(in srgb, ${C.cyan} 30%, transparent)` })}
        >
          {children}
        </h2>
      </section>
    );
  },
  h2: ({ children }) => (
    <h3 id={slugify(flattenText(children))} className="pt-8 font-sans text-[1.55rem] font-black leading-tight" style={h({ color: C.violet })}>
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="pt-5 font-sans text-xl font-black leading-tight" style={h({ color: C.amber })}>
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="pt-3 font-sans text-[15px] font-black uppercase tracking-wide" style={h({ color: C.green })}>
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
    <ul className="my-3 ml-5 max-w-[72ch] list-disc space-y-2" style={{ color: C.body }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 ml-6 max-w-[72ch] list-decimal space-y-2 marker:font-black" style={{ color: C.body }}>
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
    <strong className="font-black" style={{ color: C.ink }}>
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
    <hr className="my-10 h-px border-0" style={{ background: `linear-gradient(to right, transparent, color-mix(in srgb, ${C.cyan} 45%, transparent), transparent)` }} />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--border-strong)", background: "var(--surface)" }}>
      <table className="min-w-full border-collapse text-left text-[14.5px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: `color-mix(in srgb, ${C.cyan} 13%, transparent)`, color: C.ink }}>{children}</thead>
  ),
  tbody: ({ children }) => <tbody className="[&>tr:nth-child(even)]:bg-white/[0.02]">{children}</tbody>,
  th: ({ children }) => (
    <th className="px-4 py-3 font-black" style={{ borderBottom: "1px solid var(--border-strong)", color: C.cyan }}>
      {children}
    </th>
  ),
  td: ({ children }) => {
    const text = flattenText(children);
    const content = ARROWS.test(text) && !/[a-z]{4}/.test(text.replace(/\[[^\]]*\]/g, "")) ? formatChem(text) : children;
    return (
      <td className="px-4 py-3 align-top leading-6 first:font-semibold" style={{ borderBottom: "1px solid var(--border)", color: C.body }}>
        {content}
      </td>
    );
  },
  a: ({ href, children }) => (
    <a href={href} className="font-bold underline underline-offset-4" style={{ color: C.cyan, textDecorationColor: `color-mix(in srgb, ${C.cyan} 45%, transparent)` }}>
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code
      className="rounded-md px-1.5 py-0.5 font-mono text-[0.9em]"
      style={{ border: `1px solid color-mix(in srgb, ${C.cyan} 28%, transparent)`, background: `color-mix(in srgb, ${C.cyan} 11%, transparent)`, color: C.cyan }}
    >
      {formatChem(flattenText(children))}
    </code>
  ),
};

export function BoronFamilyMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-4 [&_td:first-child]:text-[var(--chem-energy)]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export { BoronFamilyMarkdown as HydrogenMarkdown };
