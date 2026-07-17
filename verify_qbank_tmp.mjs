import { createRequire } from "module";
const require = createRequire(import.meta.url);
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

async function main() {
  const mod = await import("./app/learn/periodic-table/PeriodicityQuestionBank.tsx");
  const Comp = mod.default.default ?? mod.default;

  // Render default (first tab) via full component tree using actual React state hooks won't switch tabs
  // in a static render, so instead we import internals by re-requiring the module source text isn't exposed.
  // Simplest robust check: render the component as-is (default active tab = history) and confirm no crash + katex present.
  const html = renderToStaticMarkup(React.createElement(Comp));
  console.log("Render OK. HTML length:", html.length);
  console.log("Contains katex:", html.includes("katex"));
  console.log("Contains raw \\\\text leakage outside annotation:", /\\\\text\{/.test(html.replace(/<annotation[\s\S]*?<\/annotation>/g, "")));
  console.log("Contains literal ** (unrendered bold):", html.includes("**"));
  console.log("Contains literal unrendered $ delimiter pairs:", /\$[A-Za-z\\]/.test(html));
  console.log("Tab buttons found:", (html.match(/qbankTabNum/g) || []).length);
}
main().catch((e) => { console.error("RENDER FAILED:", e); process.exit(1); });
