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
    label: "Assignment, answer key and solutions",
    blurb: "118 optical-isomerism questions for JEE Main / Advanced.",
    items: [
      { title: "Optical Isomerism — Question set with answer key", note: "118 questions; the answer key is at the end.", file: "pdf/OPTICAL_ISOMERISM_QUESTIONS.pdf", kind: "pdf" },
      { title: "Optical Isomerism — Detailed solutions", note: "Step-by-step solution for every question.", file: "pdf/OPTICAL_ISOMERISM_SOLUTIONS.pdf", kind: "pdf" },
      { title: "Animated solutions (all 118)", note: "Play, step and replay each solution; symmetry-element buttons included.", file: "animated-solutions/index.html", kind: "html" },
    ],
  },
  {
    label: "Notes and worked examples",
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
