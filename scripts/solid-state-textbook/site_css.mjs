// Compiles the SITE'S OWN styling for the standalone textbook:
//   1. the theme tokens from app/globals.css (:root)
//   2. components/chapter-ui/reader.module.css with its class names given the hashed prefix the chapter HTML carries
//   3. Tailwind v4 utilities for exactly the classes the chapter uses (layers unwrapped so they beat the older element rules)
// usage (from the repository root): node scripts/solid-state-textbook/site_css.mjs <chapter.html>   -> CSS on stdout
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(path.resolve("package.json"));
const postcss = require("postcss");
const tailwind = require("@tailwindcss/postcss");
const html = fs.readFileSync(process.argv[2], "utf8");
const PREFIX = (html.match(/(reader-module__[A-Za-z0-9]+)__/) || [])[1];
if (!PREFIX) throw new Error("no reader-module class prefix found in the chapter HTML");

// 1. tokens: the first :root { ... } block of globals.css
const g = fs.readFileSync("app/globals.css", "utf8");
const i = g.indexOf(":root"); let depth = 0, j = g.indexOf("{", i);
for (let k = j; k < g.length; k++) { if (g[k] === "{") depth++; if (g[k] === "}" && --depth === 0) { j = k; break; } }
const tokens = g.slice(i, j + 1) + "\n:root { --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; --font-display: Georgia, 'Times New Roman', serif; --font-mono: ui-monospace, Menlo, Consolas, monospace; }\n";

// 2. reader module: prefix every class selector (keeps numbers like 0.92rem, which have a digit after the dot)
const reader = fs.readFileSync("components/chapter-ui/reader.module.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\.([A-Za-z_][\w-]*)/g, `.${PREFIX}__$1`);

// 3. Tailwind utilities for the classes in this HTML, with the cascade layers unwrapped
const input = `@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities) source(none);\n@source "${path.resolve(process.argv[2])}";\n`;
const unlayer = { postcssPlugin: "unlayer", AtRule: { layer(at) { if (at.nodes) at.replaceWith(at.nodes); else at.remove(); } } };
const out = await postcss([tailwind(), unlayer]).process(input, { from: path.resolve("app/globals.css") });
process.stderr.write(`prefix ${PREFIX} | tokens ${tokens.length} | reader ${reader.length} | utilities ${out.css.length} chars\n`);
process.stdout.write(tokens + "\n" + reader + "\n" + out.css);
