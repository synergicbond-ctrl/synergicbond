import { ALL_PYQ_QUESTIONS } from "../lib/pyq";
import { PYQChapterSchema } from "../lib/pyq/schema";

// Get list of all chapters
const chapters = PYQChapterSchema.options;

console.log("Analyzing PYQ distribution...");

// We will categorize chapters by Chemistry type
const physicalChapters = [
  "Some Basic Concepts",
  "Atomic Structure",
  "Chemical Bonding",
  "States of Matter",
  "Thermodynamics",
  "Equilibrium",
  "Redox Reactions",
  "Electrochemistry",
  "Chemical Kinetics",
  "Surface Chemistry",
  "Solutions",
  "Solid State",
  "Nuclear Chemistry",
];

const inorganicChapters = [
  "Periodic Table",
  "s-Block Elements",
  "p-Block Elements",
  "d and f Block Elements",
  "Coordination Compounds",
  "Hydrogen",
  "Metallurgy",
  "Qualitative Analysis",
];

const organicChapters = [
  "General Organic Chemistry",
  "Hydrocarbons",
  "Haloalkanes and Haloarenes",
  "Alcohols Phenols Ethers",
  "Aldehydes Ketones",
  "Carboxylic Acids",
  "Amines",
  "Biomolecules",
  "Polymers",
  "Chemistry in Everyday Life",
];

const auditChapter = (chapterName: string) => {
  const qs = ALL_PYQ_QUESTIONS.filter((q) => q.chapter === chapterName);
  const totalCount = qs.length;
  const neetCount = qs.filter((q) => q.exam === "NEET").length;
  const jmCount = qs.filter((q) => q.exam === "JEE Main").length;
  const jaCount = qs.filter((q) => q.exam === "JEE Advanced").length;

  const years = Array.from(new Set(qs.map((q) => q.year))).sort((a, b) => a - b);
  
  // Missing years (considering standard range e.g. 2015-2024 for relevance, or full 2005-2024)
  const fullYearsRange = Array.from({ length: 20 }, (_, i) => 2005 + i); // 2005 to 2024
  const missingYears = fullYearsRange.filter((y) => !years.includes(y));

  return {
    chapterName,
    totalCount,
    neetCount,
    jmCount,
    jaCount,
    years,
    missingYears,
  };
};

import * as fs from "fs";
const reportPath = new URL("./audit_report.json", import.meta.url);
fs.writeFileSync(reportPath, JSON.stringify({
  physical: physicalChapters.map(auditChapter),
  inorganic: inorganicChapters.map(auditChapter),
  organic: organicChapters.map(auditChapter),
}, null, 2));

console.log("Report written to:", reportPath.pathname);
