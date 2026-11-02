// Reads a JSON array of LaTeX strings on stdin, prints a JSON array of KaTeX HTML strings (same KaTeX version as the site).
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(process.cwd() + "/package.json");
const katex = require("katex");
const list = JSON.parse(fs.readFileSync(0, "utf8"));
process.stdout.write(JSON.stringify(list.map((l) => katex.renderToString(l, { throwOnError: false }))));
