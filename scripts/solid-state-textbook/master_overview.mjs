// Prints the Master hub-card text (title, shortTitle, description) of the ten parts as JSON, read from the source data file.
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(process.cwd() + "/package.json");
const ts = require("typescript");
const src = fs.readFileSync("app/learn/solid-state/master/_content.ts", "utf8");
const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const m = { exports: {} }; new Function("module", "exports", "require", js)(m, m.exports, require);
const parts = m.exports.SOLID_STATE_PARTS;
process.stdout.write(JSON.stringify(parts.map((p) => ({ number: p.number, title: p.title, shortTitle: p.shortTitle, description: p.description }))));
