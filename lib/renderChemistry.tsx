import { Fragment, type ReactNode } from "react";

/**
 * Zero-dependency LaTeX/string interpreter for chemistry & light physics.
 * React does NOT render LaTeX natively, so this compiles stored strings
 * (e.g. "2SO_2 + O_2 \rightleftharpoons 2SO_3") into real symbols + <sub>/<sup>.
 * Shared contract used by BrainModeModal and SnapSolveResult.
 *
 * Note: source strings use double-backslashes for JSON escaping; at runtime
 * they arrive as single backslashes (e.g. "\rightarrow"), which is what the
 * regexes below match.
 */
export function renderChemistry(equation: string): ReactNode {
  // 1. macros → unicode
  let s = equation
    .replace(/\\rightleftharpoons|\\rightleftarrows/g, " ⇌ ")
    .replace(/\\xrightarrow|\\longrightarrow|\\rightarrow|\\to/g, " → ")
    .replace(/\\Leftrightarrow|\\leftrightarrow/g, " ↔ ")
    .replace(/\\leftarrow/g, " ← ")
    .replace(/\\Delta/g, "Δ")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β")
    .replace(/\\gamma/g, "γ")
    .replace(/\\lambda/g, "λ")
    .replace(/\\mu/g, "μ")
    .replace(/\\pi/g, "π")
    .replace(/\\theta/g, "θ")
    .replace(/\\cdot/g, "·")
    .replace(/\\times/g, "×")
    .replace(/\\div/g, "÷")
    .replace(/\\pm/g, "±")
    .replace(/\\leq/g, "≤")
    .replace(/\\geq/g, "≥")
    .replace(/\\approx/g, "≈")
    .replace(/\\neq/g, "≠")
    .replace(/\^\\circ|\\circ|\\degree/g, "°");

  // 2. structural macros (run before sub/sup tokenisation)
  s = s
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)")
    .replace(/\\sqrt\{([^{}]*)\}/g, "√($1)")
    .replace(/\\(?:text|mathrm|mathbf|mathit|operatorname)\{([^{}]*)\}/g, "$1")
    .replace(/\\,|\\ |\\;|\\!/g, " ")
    .replace(/\\\\/g, " ");

  // 3. tokenise sub/superscripts (_x / _{xyz} / ^x / ^{xyz})
  const out: ReactNode[] = [];
  let buf = "";
  let key = 0;
  const flush = () => {
    if (buf) { out.push(<Fragment key={key++}>{buf}</Fragment>); buf = ""; }
  };
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "_" || ch === "^") {
      flush();
      let content = "";
      i++;
      if (s[i] === "{") {
        i++;
        while (i < s.length && s[i] !== "}") content += s[i++];
      } else {
        content = s[i] ?? "";
      }
      out.push(
        ch === "^"
          ? <sup key={key++}>{content}</sup>
          : <sub key={key++}>{content}</sub>
      );
    } else {
      buf += ch;
    }
  }
  flush();
  return out;
}
