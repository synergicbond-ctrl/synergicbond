// P-block family assignments. Files live in content/assignments/<chapter>/
// (not public/) and are served by /notes/assignments/<chapter>/<file>, which
// applies the same Pro / privileged rule as the chapter layouts.

export type AssignmentFile = { title: string; note: string; file: string };

export type AssignmentChapter = "boron-family" | "carbon-family" | "nitrogen-family" | "oxygen-family" | "halogen-family";
export type AssignmentGroup = { title: string; blurb: string; items: AssignmentFile[] };

export const FAMILY_ASSIGNMENTS: Record<AssignmentChapter, AssignmentGroup> = {
  "boron-family": {
    title: "The Boron Family",
    blurb: "Group 13 statement assignment (Q1–Q90 and reactions).",
    items: [
      { title: "Question bank with answer key", note: "NCERT-statement questions, reaction questions, then the answer key.", file: "Boron_Family_Question_Bank_with_Key.pdf" },
      { title: "Detailed solutions", note: "Verified textbook answer key (1–155) and explanations.", file: "Boron_Family_Solutions.pdf" },
    ],
  },
  "carbon-family": {
    title: "The Carbon Family",
    blurb: "Group 14 statement and reaction assignment.",
    items: [
      { title: "Question bank with answer key", note: "Section A NCERT statements onward; answer key at the end.", file: "Carbon_Family_Question_Bank_with_Key.pdf" },
      { title: "Detailed solutions", note: "Worked reasons for the statements and reactions.", file: "Carbon_Family_Solutions.pdf" },
    ],
  },
  "nitrogen-family": {
    title: "The Nitrogen Family",
    blurb: "Group 15 master statement assignment.",
    items: [
      { title: "Assignment with answer key", note: "20 questions with 15 statements each; answer key at the end.", file: "Nitrogen_Family_Assignment_with_Key.pdf" },
    ],
  },
  "oxygen-family": {
    title: "The Oxygen Family",
    blurb: "Group 16 master statement assignment.",
    items: [
      { title: "Group 16 assignment with answer key", note: "Q1–Q27 statement questions, reaction bank and answer key.", file: "Oxygen_Family_Group16_Assignment_with_Key.pdf" },
    ],
  },
  "halogen-family": {
    title: "The Halogen Family",
    blurb: "Group 17 master statement assignment.",
    items: [
      { title: "Group 17 assignment with answer key", note: "Q28–Q53 statement questions, reaction bank and answer key.", file: "Halogen_Family_Group17_Assignment_with_Key.pdf" },
    ],
  },
};

export const isAssignmentChapter = (s: string): s is AssignmentChapter =>
  Object.prototype.hasOwnProperty.call(FAMILY_ASSIGNMENTS, s);
