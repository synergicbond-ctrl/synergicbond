import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { FIGURES } from "../app/notes/d-block/visualManifest";

const root = process.cwd();
const failures: string[] = [];
const sources = new Map<string, number>();
const renderedAnchors = new Set<string>();

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

for (let part = 1; part <= 10; part += 1) {
  const pagePath = resolve(root, `app/notes/d-block/part${part}/page.tsx`);
  const source = readFileSync(pagePath, "utf8");
  const headingMatches = source.matchAll(/^#{2,3}\s+(.+)$/gm);

  for (const match of headingMatches) {
    renderedAnchors.add(`p${part}-${slug(match[1])}`);
  }
}

for (const figure of FIGURES) {
  sources.set(figure.src, (sources.get(figure.src) ?? 0) + 1);
  if (!existsSync(resolve(root, "public", figure.src.slice(1)))) {
    failures.push(`Missing public asset: ${figure.src}`);
  }

  if (!renderedAnchors.has(figure.anchor)) {
    failures.push(`Missing rendered heading anchor: ${figure.anchor}`);
  }

  const figurePart = Number(figure.anchor.match(/^p(\d+)-/)?.[1]);
  const filenamePart = figure.src.match(/part[-_ ]?(\d+)/i)?.[1];
  if (filenamePart && Number(filenamePart) !== figurePart) {
    failures.push(`Part mismatch: ${figure.src} is assigned to ${figure.anchor}`);
  }
}

for (const [src, count] of sources) {
  if (count > 1) failures.push(`Duplicate figure source: ${src}`);
}

for (const [anchor, count] of FIGURES.reduce((counts, figure) => counts.set(figure.anchor, (counts.get(figure.anchor) ?? 0) + 1), new Map<string, number>())) {
  if (count > 2) failures.push(`Too many figures at ${anchor}: ${count}`);
}

const forbidden = ["FLOW_RULES", "keywords", "scoreRule", "createPortal", "useEffect", "querySelector", "insertAdjacentElement"];
const visualLayerFiles = [
  "app/notes/d-block/AnchoredFigures.tsx",
  "app/notes/d-block/AnchoredMarkdown.tsx",
  "app/notes/d-block/visualManifest.ts",
  ...Array.from({ length: 10 }, (_, index) => `app/notes/d-block/part${index + 1}/page.tsx`),
];

for (const relativePath of visualLayerFiles) {
  const source = readFileSync(resolve(root, relativePath), "utf8");
  for (const term of forbidden) {
    if (source.includes(term)) failures.push(`Forbidden runtime-placement term ${term} in ${relativePath}`);
  }
}

if (failures.length) {
  console.error("D-block figure validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`D-block figure validation passed (${FIGURES.length} figures, ${renderedAnchors.size} anchors).`);
