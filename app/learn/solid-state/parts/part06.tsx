import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 6,
  slug: "contribution-and-sharing-of-particles-in-unit-cells",
  title: "Contribution and Sharing of Particles in Unit Cells",
} as const;

const data = {
  "part": 6,
  "slug": "contribution-and-sharing-of-particles-in-unit-cells",
  "title": "Contribution and Sharing of Particles in Unit Cells",
  "sourcePages": "pp. 6–9",
  "intro": "KOHINOOR next develops the fractional contribution of boundary particles. This is the counting language used throughout unit-cell stoichiometry.",
  "sections": [
    {
      "title": "1. Sharing Fractions",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Position",
            "Number of cells sharing the point",
            "Contribution to one cell"
          ],
          "rows": [
            [
              "Corner",
              "8",
              "1/8"
            ],
            [
              "Edge centre",
              "4",
              "1/4"
            ],
            [
              "Face centre",
              "2",
              "1/2"
            ],
            [
              "Body-centre / any strictly interior point",
              "1",
              "1"
            ]
          ]
        },
        {
          "type": "p",
          "text": "The fraction is determined by how many adjacent unit cells share that geometrical point."
        }
      ]
    },
    {
      "title": "2. Representative Fractional Coordinates",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Corner: (0,0,0) and translated equivalents.",
            "Edge centre: (1/2,0,0), (0,1/2,0), (0,0,1/2), etc.",
            "Face centre: (1/2,1/2,0), (1/2,0,1/2), (0,1/2,1/2), etc.",
            "Body centre: (1/2,1/2,1/2)."
          ]
        },
        {
          "type": "ascii",
          "text": "corner  o---------o\n        /|        /|\n       / |   F   / |\n      o---------o  |\n      |  |  B   |  |\n      |  o------|--o\n      | /   E   | /\n      |/        |/\n      o---------o\nF = face-centre, E = edge-centre, B = body-centre",
          "title": "Sharing positions"
        }
      ]
    },
    {
      "title": "3. General Counting Rule",
      "blocks": [
        {
          "type": "formula",
          "latex": "N_{\\\\rm eff}=\\\\sum_i N_i f_i",
          "display": "N_eff = Σ (number at a position × sharing fraction)."
        },
        {
          "type": "p",
          "text": "Apply this species-by-species. Never reduce the chemical formula until every contribution and every removal has been accounted for."
        }
      ]
    }
  ],
  "traps": [
    "A visible corner sphere is not one full atom of that unit cell.",
    "A face-centred particle contributes 1/2, while an edge-centred particle contributes 1/4.",
    "A particle lying strictly inside the cell contributes 1 even if it lies on a body diagonal."
  ],
  "examples": [
    {
      "title": "Example 1 — Mixed positions",
      "question": "A unit cell has atoms at 8 corners, all 12 edge centres and one body centre. Find the effective number.",
      "steps": [
        "Corners: 8×1/8 = 1.",
        "Edges: 12×1/4 = 3.",
        "Body centre: 1."
      ],
      "answer": "Total effective particles = 5."
    },
    {
      "title": "Example 2 — Two species",
      "question": "A occupies all corners and B all face centres. Find the simplest formula.",
      "steps": [
        "A = 8×1/8 = 1.",
        "B = 6×1/2 = 3."
      ],
      "answer": "Formula = AB₃."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart06() {
  return <SolidStatePartPage data={data} />;
}
