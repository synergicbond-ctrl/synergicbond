import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 12,
  slug: "effective-number-of-atoms-per-unit-cell-z",
  title: "Effective Number of Atoms per Unit Cell (Z)",
} as const;

const data = {
  "part": 12,
  "slug": "effective-number-of-atoms-per-unit-cell-z",
  "title": "Effective Number of Atoms per Unit Cell (Z)",
  "sourcePages": "p. 17",
  "intro": "Immediately after symmetry, KOHINOOR calculates Z for simple cubic, face-centred cubic and body-centred cubic cells.",
  "sections": [
    {
      "title": "1. Simple Cubic (SC)",
      "blocks": [
        {
          "type": "formula",
          "latex": "Z=8\\\\left(\\\\frac18\\\\right)=1",
          "display": "Z = 8(1/8) = 1."
        }
      ]
    },
    {
      "title": "2. Face-Centred Cubic (FCC)",
      "blocks": [
        {
          "type": "formula",
          "latex": "Z=8\\\\left(\\\\frac18\\\\right)+6\\\\left(\\\\frac12\\\\right)=4",
          "display": "Z = 8(1/8) + 6(1/2) = 4."
        }
      ]
    },
    {
      "title": "3. Body-Centred Cubic (BCC)",
      "blocks": [
        {
          "type": "formula",
          "latex": "Z=8\\\\left(\\\\frac18\\\\right)+1=2",
          "display": "Z = 8(1/8) + 1 = 2."
        }
      ]
    },
    {
      "title": "4. Coordinate Sets",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Cell",
            "Independent fractional lattice positions in a conventional description"
          ],
          "rows": [
            [
              "SC",
              "(0,0,0)"
            ],
            [
              "BCC",
              "(0,0,0), (1/2,1/2,1/2)"
            ],
            [
              "FCC",
              "(0,0,0), (1/2,1/2,0), (1/2,0,1/2), (0,1/2,1/2)"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Important",
          "text": "Z may refer to atoms per unit cell for an elemental crystal or formula units per cell for an ionic/molecular crystal. Always read the context.",
          "tone": "info"
        }
      ]
    }
  ],
  "traps": [
    "Do not count visible sphere fragments as full atoms.",
    "For compounds, Z usually means formula units per crystallographic unit cell, not total number of ions.",
    "FCC has 4 lattice points, not 14 “atoms” simply because 8 corners + 6 faces are drawn."
  ],
  "examples": [
    {
      "title": "Example 1",
      "question": "Find Z for FCC.",
      "steps": [
        "Corner contribution = 1.",
        "Face-centre contribution = 3."
      ],
      "answer": "Z = 4."
    },
    {
      "title": "Example 2",
      "question": "A cell has A at all corners, B at all face centres and C at body centre. Find effective contents.",
      "steps": [
        "A = 1.",
        "B = 3.",
        "C = 1."
      ],
      "answer": "Effective composition = AB₃C."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart12() {
  return <SolidStatePartPage data={data} />;
}
