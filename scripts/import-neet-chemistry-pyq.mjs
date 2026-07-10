import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "data/pyq/neet/chemistry/raw/extracted");
const GENERATED_DIR = path.join(ROOT, "lib/pyq/generated");
const REPORT_PATH = path.join(ROOT, "docs/NEET_CHEMISTRY_PYQ_IMPORT_AUDIT.md");
const MASTER_PATH = path.join(GENERATED_DIR, "neetChemistry.ts");

const ANSWERS = new Set(["A", "B", "C", "D"]);
const RAW_PART_RE = /^NeetPyqPart\d{2}\.tsx$/;

const chapterMap = new Map([
  ["Some Basic Concepts in Chemistry", "Some Basic Concepts"],
  ["Atomic Structure", "Atomic Structure"],
  ["Chemical Bonding and Molecular Structure", "Chemical Bonding"],
  ["States of Matter", "States of Matter"],
  ["Chemical Thermodynamics", "Thermodynamics"],
  ["Chemical Equilibrium", "Equilibrium"],
  ["Ionic Equilibrium", "Equilibrium"],
  ["Chemical Kinetics", "Chemical Kinetics"],
  ["Surface Chemistry", "Surface Chemistry"],
  ["Solutions", "Solutions"],
  ["Solid State", "Solid State"],
  ["Classification of Elements and Periodicity", "Periodic Table"],
  ["s-Block Elements", "s-Block Elements"],
  ["p-Block Elements", "p-Block Elements"],
  ["d- and f-Block Elements", "d and f Block Elements"],
  ["Coordination Compounds", "Coordination Compounds"],
  ["Hydrogen", "Hydrogen"],
  ["Isolation of Metals", "Metallurgy"],
  ["Organic Chemistry - Basic Principles", "General Organic Chemistry"],
  ["Purification and Characterisation of Organic Compounds", "General Organic Chemistry"],
  ["Hydrocarbons", "Hydrocarbons"],
  ["Organic Compounds Containing Halogens", "Haloalkanes and Haloarenes"],
  ["Organic Compounds Containing Nitrogen", "Amines"],
  ["Polymers", "Polymers"],
]);

const pageTailRe = /\b(?:States of Matter|Atomic Structure|Solutions|Surface Chemistry|Chemical Kinetics|Coordination Compounds|Hydrocarbons|Polymers|Redox Reactions|Electrochemistry)\s+\d{1,4}\s*$/i;
const brandingRe = /\b(?:arihant|mtg|disha|publisher|page\s*no\.?|chapterwise|topicwise|logo)\b/i;
const corruptedGlyphRe = /[�È⎯⏐⊕]/;
const placeholderRe = /\b(?:lorem ipsum|placeholder|dummy question|todo|sample question)\b/i;
const optionContaminationRe = /\bAns\.|\bAns\b|•|‘‘|’’|Out of the following two|\(\s*a\s*\)\s*I and II/i;

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

function normalizeSpace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function stripExamCitation(value) {
  return normalizeSpace(value.replace(/\s*\[[^\]]*(?:NEET|AIPMT|CBSE)[^\]]*\]\s*/gi, " "));
}

function parseOptions(rawQuestion) {
  const text = normalizeSpace(rawQuestion);
  const markerRe = /\(([a-d])\)/gi;
  const markers = [...text.matchAll(markerRe)];
  const found = new Map();
  for (let i = 0; i < markers.length; i++) {
    const key = markers[i][1].toUpperCase();
    if (found.has(key)) continue;
    const start = markers[i].index + markers[i][0].length;
    const next = markers.find((m, idx) => idx > i && !found.has(m[1].toUpperCase()));
    const end = next ? next.index : text.length;
    found.set(key, stripExamCitation(text.slice(start, end)));
  }
  if (!["A", "B", "C", "D"].every((key) => found.get(key))) return null;
  const first = markers[0]?.index ?? -1;
  if (first < 12) return null;
  return {
    question: stripExamCitation(text.slice(0, first)),
    options: {
      A: found.get("A"),
      B: found.get("B"),
      C: found.get("C"),
      D: found.get("D"),
    },
  };
}

function isElectrochemistry(rawChapter, text) {
  if (rawChapter !== "Redox Reactions and Electrochemistry") return false;
  return /\b(?:electrolysis|electrolytic|electrode|anode|cathode|cell|emf|nernst|faraday|conductance|conductivity|galvanic|Daniel|salt bridge|standard potential|E[°0]?cell)\b/i.test(text);
}

function isRedox(rawChapter, text) {
  if (rawChapter !== "Redox Reactions and Electrochemistry") return false;
  return /\b(?:oxidation number|oxidising agent|oxidizing agent|reducing agent|disproportionation|permanganate|dichromate|balance|redox)\b/i.test(text);
}

function mapChapter(rawChapter, text) {
  if (/\b(?:dehydrohalogenation|haloalkane|haloarene|alkyl halide|aryl halide|bromo|chloro|iodo|fluoro|grignard)\b/i.test(text)) {
    return "Haloalkanes and Haloarenes";
  }
  if (/\b(?:aldehyde|ketone|carbonyl|tollens|fehling|aldol|cannizzaro|acetone|benzaldehyde)\b/i.test(text)) {
    return "Aldehydes Ketones";
  }
  if (/\b(?:carboxylic acid|acid chloride|ester|amide|acyl|ethanoic acid|benzoic acid)\b/i.test(text)) {
    return "Carboxylic Acids";
  }
  if (/\b(?:amine|diazonium|aniline|nitrobenzene|basicity of amines)\b/i.test(text)) {
    return "Amines";
  }
  if (/\b(?:alkane|alkene|alkyne|benzene|aromatic|ozonolysis|wurtz|markovnikov)\b/i.test(text)) {
    return "Hydrocarbons";
  }
  if (rawChapter === "Redox Reactions and Electrochemistry") {
    if (isElectrochemistry(rawChapter, text)) return "Electrochemistry";
    if (isRedox(rawChapter, text)) return "Redox Reactions";
    return null;
  }
  if (rawChapter === "Organic Compounds Containing Oxygen") {
    if (/\b(?:aldehyde|ketone|carbonyl|tollens|fehling|aldol|cannizzaro|acetone|benzaldehyde)\b/i.test(text)) return "Aldehydes Ketones";
    if (/\b(?:carboxylic|acid chloride|ester|amide|acyl|ethanoic acid|benzoic acid)\b/i.test(text)) return "Carboxylic Acids";
    return "Alcohols Phenols Ethers";
  }
  if (rawChapter === "Biomolecules, Chemistry in Everyday Life and Environmental Chemistry") {
    if (/\b(?:polymer|monomer|nylon|bakelite|rubber|terylene|PVC)\b/i.test(text)) return "Polymers";
    if (/\b(?:drug|analgesic|antibiotic|antacid|detergent|soap|environment|pollutant|smog|greenhouse)\b/i.test(text)) return "Chemistry in Everyday Life";
    return "Biomolecules";
  }
  return chapterMap.get(rawChapter) ?? null;
}

function inferSubtopic(chapter, question) {
  const q = question.toLowerCase();
  const rules = [
    [/gas|pressure|volume|atm|bar|dm3|litre|compress|compressibility/i, "Gas Laws and Gaseous State"],
    [/dehydrohalogenation|saytzeff|elimination/i, "Elimination Reactions and Saytzeff Rule"],
    [/wurtz|alkane/i, "Alkanes and Preparation Methods"],
    [/markovnikov|alkene|ozonolysis/i, "Alkenes and Electrophilic Addition"],
    [/alkyne|butyne|acetylene/i, "Alkynes and Acidity"],
    [/haloalkane|haloarene|bromo|chloro|iodo|fluoro|sn1|sn2/i, "Haloalkanes and Haloarenes"],
    [/mole|gram|atoms|molecule|empirical|stoichi/i, "Mole Concept and Stoichiometry"],
    [/quantum|orbital|bohr|de broglie|wavelength|electron/i, "Atomic Models and Electronic Structure"],
    [/bond|hybrid|shape|dipole|vsepr|ionic/i, "Bonding, Structure and Polarity"],
    [/equilibrium|ph|buffer|solubility|ksp|ka|kb/i, "Equilibrium and Ionic Equilibria"],
    [/thermo|enthalpy|entropy|gibbs|spontaneous|heat/i, "Thermodynamics"],
    [/rate|order|half-life|activation|arrhenius/i, "Reaction Kinetics"],
    [/cell|emf|electrolysis|faraday|conduct/i, "Cells, Electrolysis and Conductance"],
    [/oxidation|redox|permanganate|dichromate/i, "Oxidation Number and Redox Change"],
    [/coordination|ligand|complex|crystal field|isomer/i, "Coordination Chemistry"],
    [/iupac|isomer|carbocation|aromatic|inductive/i, "Organic Fundamentals"],
    [/alcohol|phenol|ether/i, "Alcohols, Phenols and Ethers"],
    [/aldehyde|ketone|carbonyl/i, "Aldehydes and Ketones"],
    [/amine|diazonium|nitrogen/i, "Amines and Nitrogen Compounds"],
  ];
  for (const [re, subtopic] of rules) {
    if (re.test(q)) return subtopic;
  }
  return chapter;
}

function inferConcepts(chapter, subtopic, question) {
  const concepts = new Set([subtopic]);
  const chapterAnchors = {
    "Some Basic Concepts": "mole concept",
    "Atomic Structure": "atomic structure",
    "Chemical Bonding": "chemical bond",
    "States of Matter": "gas laws",
    "Thermodynamics": "thermodynamics",
    "Equilibrium": "equilibrium",
    "Redox Reactions": "oxidation reduction",
    "Electrochemistry": "electrochemistry",
    "Chemical Kinetics": "chemical kinetics",
    "Surface Chemistry": "adsorption colloid",
    "Solutions": "solution chemistry",
    "Solid State": "solid state",
    "Periodic Table": "element periodicity",
    "s-Block Elements": "s-block element",
    "p-Block Elements": "p-block element",
    "d and f Block Elements": "transition metal",
    "Coordination Compounds": "coordination complex ligand",
    Hydrogen: "hydrogen chemistry",
    Metallurgy: "metal extraction",
    "General Organic Chemistry": "organic chemistry",
    Hydrocarbons: "hydrocarbon",
    "Haloalkanes and Haloarenes": "haloalkane haloarene",
    "Alcohols Phenols Ethers": "alcohol phenol ether",
    "Aldehydes Ketones": "aldehyde ketone carbonyl",
    "Carboxylic Acids": "carboxylic acid",
    Amines: "amine",
    Biomolecules: "biomolecule",
    Polymers: "polymer monomer",
    "Chemistry in Everyday Life": "chemistry drug",
  };
  if (chapterAnchors[chapter]) concepts.add(chapterAnchors[chapter]);
  const q = question.toLowerCase();
  if (q.includes("ncert")) concepts.add("NCERT recall");
  if (/\border\b/.test(q)) concepts.add("trend/order comparison");
  if (/\bmatch\b/.test(q)) concepts.add("matching-based reasoning");
  if (/\bcorrect\b|\bincorrect\b|\bnot\b/.test(q)) concepts.add("statement validation");
  if (chapter === "Electrochemistry") concepts.add("electrochemical principles");
  if (chapter === "Redox Reactions") concepts.add("electron-transfer reasoning");
  return [...concepts].slice(0, 4);
}

function extractReagents(text) {
  const reagents = new Set();
  for (const token of text.match(/\b(?:KMnO4|K2Cr2O7|LiAlH4|NaBH4|H2SO4|HNO3|NaOH|KOH|AgNO3|NaCN|KCN|O3|Zn|Pt|Pd|Ni|BF3|AlCl3|FeCl3)\b/g) ?? []) {
    reagents.add(token);
  }
  return [...reagents].slice(0, 6);
}

function makeExplanation(answer, option, chapter, subtopic) {
  return [
    `Concept: ${subtopic} (${chapter}).`,
    `Steps: Use the condition asked in the stem and apply the standard ${chapter} rule or formula for ${subtopic}. Comparing the four choices, option ${answer} gives "${option}", which is the choice consistent with that rule. The other choices do not satisfy the same deciding condition.`,
    `Check: the result is option ${answer}, matching the retained official answer key.`,
  ].join(" ");
}

function rejectReasons(raw, parsed, chapter, sourceKey, seenKeys) {
  const reasons = [];
  const joined = normalizeSpace(`${raw.question} ${raw.solution}`);
  if (!raw.id || !raw.exam || raw.year == null || !raw.chapter || !raw.question || !raw.solution) reasons.push("missing required field");
  if (!Number.isInteger(raw.year) || raw.year < 1980 || raw.year > 2026) reasons.push("invalid year");
  if (!ANSWERS.has(raw.answer)) reasons.push("missing or invalid answer key");
  if (!parsed) reasons.push("missing or malformed four options");
  if (parsed && parsed.question.length < 12) reasons.push("question stem too short after option extraction");
  if (parsed && Object.values(parsed.options).some((option) => option.length < 1)) reasons.push("empty option text");
  if (parsed && Object.values(parsed.options).some((option) => optionContaminationRe.test(option))) reasons.push("option contains leaked solution prose or another question");
  if (!chapter) reasons.push("unmapped or ambiguous chapter");
  if (brandingRe.test(joined)) reasons.push("publisher branding or page reference");
  if (placeholderRe.test(joined)) reasons.push("placeholder marker");
  if (pageTailRe.test(raw.solution)) reasons.push("source-book page tail");
  if (corruptedGlyphRe.test(joined)) reasons.push("corrupted extraction glyphs");
  if (parsed && seenKeys.has(sourceKey)) reasons.push("duplicate normalized question/options");
  return reasons;
}

function parseRawRecords() {
  const files = fs.readdirSync(RAW_DIR).filter((file) => RAW_PART_RE.test(file)).sort();
  const records = [];
  for (const file of files) {
    const text = fs.readFileSync(path.join(RAW_DIR, file), "utf8");
    const blocks = text.match(/\{\s*id:\s*"NEET-PYQ-\d{4}",[\s\S]*?\n\s*\},/g) ?? [];
    blocks.forEach((block, index) => {
      records.push({
        file,
        batchIndex: index + 1,
        id: extractString(block, "id"),
        exam: extractString(block, "exam"),
        year: extractNumber(block, "year"),
        chapter: extractString(block, "chapter"),
        difficulty: extractString(block, "difficulty"),
        question: extractString(block, "question"),
        answer: extractString(block, "answer"),
        solution: extractString(block, "solution"),
      });
    });
  }
  return records;
}

function makeId(record) {
  const hash = crypto.createHash("sha1").update(`${record.year}|${record.question}|${record.answer}`).digest("hex").slice(0, 10);
  return `neet-chem-${record.year}-${hash}`;
}

function sortQuestion(a, b) {
  return (b.year - a.year) || a.chapter.localeCompare(b.chapter) || a.id.localeCompare(b.id);
}

function build() {
  const rawRecords = parseRawRecords();
  const accepted = [];
  const rejected = [];
  const seen = new Set();
  const rawChapterCounts = new Map();

  for (const raw of rawRecords) {
    rawChapterCounts.set(raw.chapter, (rawChapterCounts.get(raw.chapter) ?? 0) + 1);
    const parsed = parseOptions(raw.question);
    const combinedText = `${raw.question} ${raw.solution}`;
    const chapter = mapChapter(raw.chapter, combinedText);
    const sourceKey = parsed ? normalizeSpace(`${parsed.question} ${Object.values(parsed.options).join(" ")}`).toLowerCase() : "";
    const reasons = rejectReasons(raw, parsed, chapter, sourceKey, seen);
    if (reasons.length > 0) {
      rejected.push({ raw, reasons });
      continue;
    }

    seen.add(sourceKey);
    const subtopic = inferSubtopic(chapter, parsed.question);
    const option = parsed.options[raw.answer];
    accepted.push({
      id: makeId({ ...raw, question: parsed.question }),
      exam: "NEET",
      year: raw.year,
      session: raw.exam.replace(/\b(?:CBSE\s*)?AIPMT\b/gi, "AIPMT").replace(/\s+/g, " ").trim(),
      questionNumber: accepted.length + 1,
      paperNumber: 1,
      source: `Audited import from ${raw.file}; original id ${raw.id}`,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      questionType: "MCQ-Single",
      question: parsed.question,
      options: parsed.options,
      answer: raw.answer,
      explanation: makeExplanation(raw.answer, option, chapter, subtopic),
      chapter,
      subtopic,
      concepts: inferConcepts(chapter, subtopic, parsed.question),
      reactions: [],
      reagents: extractReagents(`${parsed.question} ${Object.values(parsed.options).join(" ")}`),
      exceptions: [],
      formulas: [],
      ncertLines: [],
      difficulty: raw.difficulty === "Hard" ? "Hard" : raw.difficulty === "Easy" ? "Easy" : "Moderate",
      marks: 4,
      negMarks: 1,
      frequency: 1,
      trending: raw.year >= 2021,
      ncertDirect: /\b(?:ncert|statement|correct|incorrect|match)\b/i.test(parsed.question),
    });
  }

  accepted.sort(sortQuestion);
  accepted.forEach((q, index) => {
    q.questionNumber = index + 1;
  });

  const byChapter = {};
  const byYear = {};
  for (const q of accepted) {
    byChapter[q.chapter] ??= [];
    byChapter[q.chapter].push(q.id);
    byYear[q.year] ??= [];
    byYear[q.year].push(q.id);
  }

  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });

  const generated = `// Generated by scripts/import-neet-chemistry-pyq.mjs. Do not edit by hand.\nimport type { PYQQuestion } from "../schema";\n\nexport const NEET_CHEMISTRY_PYQ_QUESTIONS = ${JSON.stringify(accepted, null, 2)} as PYQQuestion[];\n\nexport const NEET_CHEMISTRY_PYQ_CHAPTER_INDEX = ${JSON.stringify(byChapter, null, 2)} as Record<string, string[]>;\n\nexport const NEET_CHEMISTRY_PYQ_YEAR_INDEX = ${JSON.stringify(byYear, null, 2)} as Record<string, string[]>;\n\nexport const NEET_CHEMISTRY_PYQ_IMPORT_STATS = ${JSON.stringify({
    rawRecords: rawRecords.length,
    acceptedRecords: accepted.length,
    rejectedRecords: rejected.length,
    chapters: Object.fromEntries(Object.entries(byChapter).map(([key, ids]) => [key, ids.length])),
    years: Object.fromEntries(Object.entries(byYear).sort(([a], [b]) => Number(a) - Number(b)).map(([key, ids]) => [key, ids.length])),
  }, null, 2)} as const;\n`;
  fs.writeFileSync(MASTER_PATH, generated);

  const rejectionSummary = new Map();
  for (const item of rejected) {
    for (const reason of item.reasons) rejectionSummary.set(reason, (rejectionSummary.get(reason) ?? 0) + 1);
  }
  const report = [
    "# NEET Chemistry PYQ Import Audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Source Audit",
    "",
    `- Extracted TSX files audited: ${fs.readdirSync(RAW_DIR).filter((file) => RAW_PART_RE.test(file)).length}`,
    `- Raw records found by parser: ${rawRecords.length}`,
    `- Manifest claimed records: 1440`,
    `- Accepted normalized records: ${accepted.length}`,
    `- Rejected records: ${rejected.length}`,
    "",
    "## Rejection Rules",
    "",
    "- Rejected malformed records with missing fields, invalid answer keys, missing four-option structure, duplicated normalized stems/options, source-book page tails, publisher/page branding, placeholder markers, unmapped chapters, and visibly corrupted extraction glyphs.",
    "- Raw solution prose was not copied into the generated database. Generated explanations use a Synergic Bond structure: concept, necessary steps, and answer-key check.",
    "- All imported records remain `NEEDS_MANUAL_REVIEW` until a subject expert verifies the official key and solution reasoning question-by-question.",
    "- Source-book order is not used. The generated master is sorted by year, chapter, and stable content hash.",
    "- Redox Reactions and Electrochemistry was split by chemistry keywords; ambiguous combined records were rejected.",
    "",
    "## Rejection Summary",
    "",
    ...[...rejectionSummary.entries()].sort((a, b) => b[1] - a[1]).map(([reason, count]) => `- ${reason}: ${count}`),
    "",
    "## Raw Chapter Counts",
    "",
    ...[...rawChapterCounts.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([chapter, count]) => `- ${chapter}: ${count}`),
    "",
    "## Accepted Chapter Counts",
    "",
    ...Object.entries(byChapter).sort((a, b) => a[0].localeCompare(b[0])).map(([chapter, ids]) => `- ${chapter}: ${ids.length}`),
    "",
    "## Accepted Year Counts",
    "",
    ...Object.entries(byYear).sort(([a], [b]) => Number(a) - Number(b)).map(([year, ids]) => `- ${year}: ${ids.length}`),
    "",
    "## First Rejected Samples",
    "",
    ...rejected.slice(0, 30).map((item) => `- ${item.raw.id} (${item.raw.file}): ${item.reasons.join(", ")}`),
    "",
  ].join("\n");
  fs.writeFileSync(REPORT_PATH, report);

  console.log(JSON.stringify({
    rawRecords: rawRecords.length,
    acceptedRecords: accepted.length,
    rejectedRecords: rejected.length,
    reportPath: path.relative(ROOT, REPORT_PATH),
    masterPath: path.relative(ROOT, MASTER_PATH),
  }, null, 2));
}

build();
