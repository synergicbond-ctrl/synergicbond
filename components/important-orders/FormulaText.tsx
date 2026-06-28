// Renders a verified order string with chemistry formatting:
//  • digit runs after a letter / ')' → subscript (e.g. Na2O2 → Na₂O₂)
//  • '^' introduces a superscript run of +, -, digits (e.g. O^2- → O²⁻)
// Operators (<, >, =, ≈, ≃, —) and everything else render verbatim — the
// source text is never altered, only typographically presented.

interface Props {
  text: string;
  className?: string;
}

type Token = { t: string; kind: "normal" | "sub" | "sup" };

function tokenize(text: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  while (i < text.length) {
    const ch = text[i];

    // explicit superscript: ^ then a run of + - digits
    if (ch === "^") {
      i++;
      let sup = "";
      while (i < text.length && /[0-9+\-]/.test(text[i])) {
        sup += text[i];
        i++;
      }
      if (sup) out.push({ t: sup, kind: "sup" });
      continue;
    }

    // digit run → subscript only if it directly follows a letter or ')'
    if (/[0-9]/.test(ch)) {
      const prev = out[out.length - 1];
      const prevChar = prev ? prev.t[prev.t.length - 1] : "";
      let digits = "";
      let j = i;
      while (j < text.length && /[0-9]/.test(text[j])) {
        digits += text[j];
        j++;
      }
      if (prev && prev.kind === "normal" && /[A-Za-z)\]]/.test(prevChar)) {
        out.push({ t: digits, kind: "sub" });
      } else {
        // standalone number (e.g. a coefficient or a value) → normal
        if (prev && prev.kind === "normal") prev.t += digits;
        else out.push({ t: digits, kind: "normal" });
      }
      i = j;
      continue;
    }

    // normal char — coalesce into the previous normal token
    const prev = out[out.length - 1];
    if (prev && prev.kind === "normal") prev.t += ch;
    else out.push({ t: ch, kind: "normal" });
    i++;
  }
  return out;
}

export default function FormulaText({ text, className }: Props) {
  const tokens = tokenize(text);
  return (
    <span className={className}>
      {tokens.map((tok, idx) => {
        if (tok.kind === "sub") return <sub key={idx}>{tok.t}</sub>;
        if (tok.kind === "sup") return <sup key={idx}>{tok.t}</sup>;
        return <span key={idx}>{tok.t}</span>;
      })}
    </span>
  );
}
