// Downloads and interactive tools for the Isomerism chapter. Files live in
// content/isomerism-resources (NOT public/) and are served only through
// /learn/isomerism/files/..., which re-checks the same premium entitlement as
// the chapter layout.

export type IsomerismResource = {
  title: string;
  note: string;
  file: string; // path under content/isomerism-resources
  kind: "pdf" | "html";
};

export type IsomerismResourceGroup = { label: string; blurb: string; items: IsomerismResource[] };

export const ISOMERISM_RESOURCE_GROUPS: IsomerismResourceGroup[] = [
  {
    label: "1 · Structural isomerism",
    blurb: "Assignment with answer key at the end, plus the master notes.",
    items: [
      { title: "Structural Isomerism — Assignment", note: "Assignment-1 by Mrityunjay Shukla Sir (5 pages).", file: "pdf/Structural_Isomerism_Assignment.pdf", kind: "pdf" },
      { title: "Structural Isomerism — Master notes", note: "Complete JEE Main / Advanced theory with examples.", file: "pdf/STRUCTURAL_ISOMERISM_MASTER_FINAL.pdf", kind: "pdf" },
    ],
  },
  {
    label: "2 · Geometrical isomerism",
    blurb: "Exercises and the 40-question assignment.",
    items: [
      { title: "Geometrical Isomerism — Exercises", note: "Identify molecules that show geometrical isomerism.", file: "pdf/Geometrical_Isomerism_Exercises.pdf", kind: "pdf" },
      { title: "Geometrical Isomerism — 40-question assignment", note: "Image-based question pages.", file: "pdf/Geometrical_Isomerism_40_Questions.pdf", kind: "pdf" },
    ],
  },
  {
    label: "3 · Conformational isomerism",
    blurb: "40-question assignment on Newman, sawhorse and cyclic conformations.",
    items: [
      { title: "Conformational Isomerism — 40-question assignment", note: "Image-based question pages.", file: "pdf/Conformational_Isomerism_40_Questions.pdf", kind: "pdf" },
    ],
  },
  {
    label: "Structural + geometrical + conformational — combined",
    blurb: "One 128-question assignment (56 structural, 40 geometrical, 32 conformational); the answer key is at the end.",
    items: [
      { title: "Isomerism Assignment — 128 questions with answer key", note: "Tautomerism and optical isomerism are covered separately.", file: "pdf/Isomerism_Assignment_128_Questions.pdf", kind: "pdf" },
    ],
  },
  {
    label: "4 · Optical isomerism — questions, answer key, solutions",
    blurb: "118 questions for JEE Main / Advanced, in the order: questions → answer key → detailed solutions.",
    items: [
      { title: "Optical Isomerism — Question set with answer key", note: "118 questions; the answer key is at the end.", file: "pdf/OPTICAL_ISOMERISM_QUESTIONS.pdf", kind: "pdf" },
      { title: "Optical Isomerism — Detailed solutions", note: "Step-by-step solution for every question.", file: "pdf/OPTICAL_ISOMERISM_SOLUTIONS.pdf", kind: "pdf" },
      { title: "Animated solutions (all 118)", note: "Play, step and replay each solution; symmetry-element buttons included.", file: "animated-solutions/index.html", kind: "html" },
    ],
  },
  {
    label: "Optical isomerism — notes and worked examples",
    blurb: "Quick notes plus drawn examples in wedge-dash, Fischer, Newman and sawhorse.",
    items: [
      { title: "Enantiomers, diastereomers, meso and racemic mixtures", note: "Point-wise notes (2 pages).", file: "pdf/Enantiomers_Diastereomers.pdf", kind: "pdf" },
      { title: "Enantiomer examples in four projections", note: "Ten each in wedge-dash, Fischer, Newman and sawhorse.", file: "pdf/ENANTIOMER_EXAMPLES.pdf", kind: "pdf" },
      { title: "Stereoisomer relationship examples", note: "Enantiomers, diastereomers, meso, homomers and tricky look-alikes.", file: "pdf/STEREOISOMER_RELATIONSHIP_EXAMPLES.pdf", kind: "pdf" },
    ],
  },
  {
    label: "Interactive HTML tools",
    blurb: "Open in a new tab; they run in your browser.",
    items: [
      { title: "Turn it, twist it, see it!", note: "Fischer ⇄ zig-zag ⇄ sawhorse ⇄ Newman with 1–5 chiral carbons, rules lab and R/S naming.", file: "html/Projection_interconversion_animator.html", kind: "html" },
      { title: "Projection converter", note: "Fischer, wedge-dash, sawhorse and Newman side by side for named compounds.", file: "html/Stereo_projection_converter.html", kind: "html" },
      { title: "Fischer projection steps", note: "Eleven short lessons on reading, swapping and turning Fischer pictures.", file: "html/fischer-projection-steps.html", kind: "html" },
      { title: "Stereochemistry studio", note: "Interactive stereochemistry explorer.", file: "html/stereochemistry-studio-v2.html", kind: "html" },
      { title: "SN reaction animation", note: "Offline animation of substitution stereochemistry.", file: "html/Sn_animation_offline.html", kind: "html" },
    ],
  },
];

export const ISOMERISM_FILES_BASE = "/learn/isomerism/files";
