import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 16,
  slug: "crystal-stoichiometry-and-atom-removal-problems",
  title: "Crystal Stoichiometry and Atom-Removal Problems",
} as const;

const data = {
  "part": 16,
  "slug": "crystal-stoichiometry-and-atom-removal-problems",
  "title": "Crystal Stoichiometry and Atom-Removal Problems",
  "sourcePages": "p. 21",
  "intro": "KOHINOOR gives a canonical unit-cell formula problem and then removes atoms along a face diagonal or from an entire face. Coordinate tracking is the safest method.",
  "sections": [
    {
      "title": "1. Base Cell",
      "blocks": [
        {
          "type": "p",
          "text": "Let A occupy all corners, B all face centres and C the body centre."
        },
        {
          "type": "formula",
          "latex": "A=8\\\\times\\\\frac18=1,\\\\quad B=6\\\\times\\\\frac12=3,\\\\quad C=1",
          "display": "A=1, B=3, C=1  ⇒  AB₃C."
        },
        {
          "type": "callout",
          "label": "Base result",
          "text": "Original effective formula = AB₃C.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "2. Remove Atoms Along One Face Diagonal",
      "blocks": [
        {
          "type": "p",
          "text": "Choose the face z=0 and diagonal y=x. The occupied positions on that diagonal are A at (0,0,0) and (1,1,0), and B at (1/2,1/2,0)."
        },
        {
          "type": "bullets",
          "items": [
            "A removed = 2×1/8 = 1/4, so A remaining = 3/4.",
            "B removed = one face-centre contribution = 1/2, so B remaining = 5/2.",
            "C remains 1."
          ]
        },
        {
          "type": "formula",
          "latex": "\\\\frac34:\\\\frac52:1=3:10:4",
          "display": "A:B:C = 3/4 : 5/2 : 1 = 3 : 10 : 4."
        },
        {
          "type": "callout",
          "label": "Result",
          "text": "Modified formula = A₃B₁₀C₄.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "3. Remove Atoms Along One Entire Face",
      "blocks": [
        {
          "type": "p",
          "text": "Again choose z=0. Remove four corner A contributions on that face and the B face-centre on that face."
        },
        {
          "type": "bullets",
          "items": [
            "A removed = 4×1/8 = 1/2 → A remaining = 1/2.",
            "B removed = 1/2 → B remaining = 5/2.",
            "C remains 1."
          ]
        },
        {
          "type": "formula",
          "latex": "\\\\frac12:\\\\frac52:1=1:5:2",
          "display": "A:B:C = 1/2 : 5/2 : 1 = 1 : 5 : 2."
        },
        {
          "type": "callout",
          "label": "Result",
          "text": "Modified formula = AB₅C₂.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "4. Coordinate-Tracking Algorithm",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Write the occupied fractional coordinates for every species.",
            "Write the geometrical equation of the removed line/plane/axis.",
            "Identify which occupied coordinates satisfy that equation.",
            "Subtract sharing-weighted contributions, not visible sphere counts.",
            "Only then reduce to the empirical ratio."
          ]
        }
      ]
    }
  ],
  "traps": [
    "“Remove a face” means remove contributions belonging to that specified boundary face, not every symmetry-equivalent face.",
    "A face diagonal can pass through a face-centred atom.",
    "Two corner atoms removed from one face diagonal reduce A by 2/8, not by 2 full atoms."
  ],
  "examples": [
    {
      "title": "Example 1 — Source reconstruction",
      "question": "For A(corners), B(face centres), C(body centre), remove one face diagonal.",
      "steps": [
        "A=1−2/8=3/4.",
        "B=3−1/2=5/2.",
        "C=1.",
        "Multiply by 4."
      ],
      "answer": "A₃B₁₀C₄."
    },
    {
      "title": "Example 2 — Plane removal",
      "question": "For the same cell, remove all atoms on one face.",
      "steps": [
        "A=1−4/8=1/2.",
        "B=3−1/2=5/2.",
        "C=1.",
        "Multiply by 2."
      ],
      "answer": "AB₅C₂."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart16() {
  return <SolidStatePartPage data={data} />;
}
