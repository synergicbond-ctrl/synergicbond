import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "data/pyq/neet/chemistry/raw/extracted");
const REPORT_PATH = path.join(ROOT, "docs/NEET_CHEMISTRY_PYQ_LEGAL_SAFETY_REPORT.md");
const RAW_PART_RE = /^NeetPyqPart\d{2}\.tsx$/;

function extractString(block, field) {
  const re = new RegExp(`${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "s");
  const match = block.match(re);
  return match ? JSON.parse(`"${match[1]}"`) : "";
}

function extractNumber(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*(\\d+|null)`));
  if (!match || match[1] === "null") return null;
  return Number(match[1]);
}

function parseRawRecords() {
  if (!fs.existsSync(RAW_DIR)) return [];
  const files = fs.readdirSync(RAW_DIR).filter((file) => RAW_PART_RE.test(file)).sort();
  const records = [];
  for (const file of files) {
    const text = fs.readFileSync(path.join(RAW_DIR, file), "utf8");
    const blocks = text.match(/\{\s*id:\s*"NEET-PYQ-\d{4}",[\s\S]*?\n\s*\},/g) ?? [];
    blocks.forEach((block) => {
      records.push({
        rawId: extractString(block, "id"),
        file,
        exam: extractString(block, "exam"),
        year: extractNumber(block, "year"),
        rawChapter: extractString(block, "chapter"),
        verificationStatus: "UNVERIFIED",
        productionStatus: "EXCLUDED",
        reason: "No official examination-authority paper and final answer key verification recorded.",
      });
    });
  }
  return records;
}

function buildReport(records) {
  const yearCounts = new Map();
  for (const record of records) {
    const key = record.year == null ? "unknown" : String(record.year);
    yearCounts.set(key, (yearCounts.get(key) ?? 0) + 1);
  }

  return [
    "# NEET Chemistry PYQ Legal-Safety Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Decision",
    "",
    "- Production records imported from the 50-part extracted ZIP: 0",
    `- Staging checklist records found: ${records.length}`,
    `- Records lacking official-source verification: ${records.length}`,
    "- The extracted ZIP is untrusted staging material only. It must not be published, imported, adapted, or used as a production source dataset.",
    "- A record can enter production only after verification against an official NTA, CBSE, or other examination-authority paper and the corresponding official final answer key.",
    "- Arihant/source-book solutions, numbering, ordering, chapter arrangement, metadata, branding, page references, editorial notes, diagrams, and formatting are excluded from production.",
    "",
    "## Required Production Provenance",
    "",
    "Every future production PYQ record must carry: `officialSource`, `officialPaperCode`, `officialAnswerKeySource`, `verificationStatus`, and `verifiedAt`.",
    "",
    "## Unverified Checklist By Year",
    "",
    ...[...yearCounts.entries()].sort(([a], [b]) => Number(a) - Number(b)).map(([year, count]) => `- ${year}: ${count}`),
    "",
    "## Records Lacking Official-Source Verification",
    "",
    ...records.map((record) => `- ${record.rawId || "UNKNOWN"} | ${record.exam || "unknown exam"} | ${record.year ?? "unknown year"} | ${record.rawChapter || "unknown chapter"} | ${record.file} | ${record.verificationStatus} | ${record.productionStatus}`),
    "",
  ].join("\n");
}

const records = parseRawRecords();
fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, buildReport(records));
console.log(JSON.stringify({
  stagingRecords: records.length,
  productionImported: 0,
  reportPath: path.relative(ROOT, REPORT_PATH),
}, null, 2));
