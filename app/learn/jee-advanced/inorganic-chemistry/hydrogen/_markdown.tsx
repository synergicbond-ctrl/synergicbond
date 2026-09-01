import { ChemistryMarkdown } from "@/components/notes/chemistryMarkdown";

/* ------------------------------------------------------------------ */
/*  Hydrogen chapter markdown renderer.                                */
/*                                                                    */
/*  Renders through the shared vivid multi-colour system               */
/*  (components/notes/chemistryMarkdown) so the Hydrogen & H₂O₂        */
/*  textbook matches the boron-family / carbon-family / s-block notes:  */
/*  cyan section headings, gold subsections, pink micro-headings,      */
/*  champagne equations, coral arrows and cyan-tinted compact tables.  */
/*                                                                    */
/*  The page shell already prints each section's `label` as the        */
/*  heading, so a leading `## …` title line that merely repeats it is   */
/*  dropped to keep one clean heading hierarchy.                        */
/* ------------------------------------------------------------------ */

function stripLeadingTitle(markdown: string): string {
  return markdown.replace(/^\s*##\s+[^\n]*(?:\n+|$)/, "");
}

// A few reaction lines are authored directly under a bold lead-in label with
// only a single newline, e.g. `**Self-decomposition:**\n2H₂O₂ → 2H₂O + O₂↑`.
// react-markdown then folds both into one paragraph and the equation loses the
// shared champagne/coral treatment. Promote the reaction to its own block so it
// renders as an <Equation> — a display fix only; the source content file is
// untouched.
function isolateLabelledReactions(markdown: string): string {
  return markdown.replace(
    /^(\*\*[^\n*]+:\*\*)\n(?=[A-Za-z0-9([][^\n]*(?:→|⟶|⇌|↔|⇋))/gm,
    "$1\n\n",
  );
}

export default function HydrogenMarkdown({ text }: { text: string }) {
  return <ChemistryMarkdown markdown={isolateLabelledReactions(stripLeadingTitle(text))} />;
}
