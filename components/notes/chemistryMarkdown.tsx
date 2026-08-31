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

function EqSegment({ seg, hue }: { seg: string; hue: string }) {
  const bits = seg.split(/(\[[^\]]+\])/).filter(Boolean);
  return (
    <>
      {bits.map((b, j) => {
        const m = /^\[([^\]]+)\]$/.exec(b);
        if (m && isConditionLabel(m[1])) {
          return (
            <span
              key={j}
              className="rounded-md px-2 py-0.5 text-[12px] font-bold"
              style={{ background: tint(C.gold, 0.16), border: `1px solid ${tint(C.gold, 0.35)}`, color: C.gold }}
            >
              {m[1].trim()}
            </span>
          );
        }
        const prev = bits[j - 1] ?? "";
        if (/^\d{0,2}[+−-]$/.test(b.trim()) && /[)\]]$/.test(prev.trim())) {
          return (
            <span key={j} className="font-semibold" style={{ color: hue }}>
              {toSup(b.trim())}
            </span>
          );
        }
        const s = formatChem(b).replace(/\s+/g, " ").trim();
        return s ? (
          <span key={j} className="font-semibold" style={{ color: hue }}>
            {s}
          </span>
        ) : null;
      })}
    </>
  );
}

function Equation({ raw }: { raw: string }) {
  const parts = raw.trim().split(ARROWS);
  const firstArrow = parts.findIndex((p) => ARROWS.test(p));
  return (
    <div
      className="my-5 overflow-x-auto rounded-xl px-4 py-3.5"
      style={{
        background: `linear-gradient(135deg, ${tint(C.teal, 0.1)}, ${tint(C.cyan, 0.06)})`,
        border: `1px solid ${tint(C.teal, 0.32)}`,
      }}
    >
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[15px] leading-relaxed sm:text-[15.5px]" style={{ color: C.ink }}>
        {parts.map((seg, i) =>
          ARROWS.test(seg) ? (
            <span key={i} className="mx-1.5 text-xl font-black" style={{ color: C.gold }}>
              {seg}
            </span>
          ) : (
            <Fragment key={i}>
              <EqSegment seg={seg} hue={firstArrow >= 0 && i > firstArrow ? C.lime : C.cyan} />
            </Fragment>
          ),
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

const components: Components = {
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
    const text = flattenText(children);
    if (isEquation(text)) return <Equation raw={text} />;
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
    const text = flattenText(children);
    const content = ARROWS.test(text) && !/[a-z]{4}/.test(text.replace(/\[[^\]]*\]/g, "")) ? formatChem(text) : children;
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
};

/** `\[ … \]` → `$$ … $$` and `\( … \)` → `$ … $` so KaTeX picks them up. */
function normaliseMath(markdown: string) {
  return markdown
    .replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_m, e: string) => `\n$$\n${e.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_m, e: string) => `$${e.trim()}$`);
}

export function ChemistryMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-4 [&_.katex]:text-[var(--chem-bond,#3fd0ee)] [&_tr>td:first-child]:font-semibold [&_tr>td:first-child]:text-[#f5f8fc]">
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


