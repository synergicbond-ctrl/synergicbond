import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 7,
  slug: "primitive-and-centred-unit-cells",
  title: "Primitive and Centred Unit Cells",
} as const;

const data = {
  "part": 7,
  "slug": "primitive-and-centred-unit-cells",
  "title": "Primitive and Centred Unit Cells",
  "sourcePages": "pp. 7–9",
  "intro": "KOHINOOR classifies unit cells as primitive/simple or centred: body-centred, face-centred and base/end-centred.",
  "sections": [
    {
      "title": "1. Primitive / Simple Cell (P)",
      "blocks": [
        {
          "type": "p",
          "text": "A primitive cell contains lattice points only at corners. The total lattice-point contribution is one."
        },
        {
          "type": "formula",
          "latex": "8\\\\times\\\\frac18=1",
          "display": "8 × 1/8 = 1 lattice point per primitive conventional cell."
        }
      ]
    },
    {
      "title": "2. Body-Centred Cell (I)",
      "blocks": [
        {
          "type": "p",
          "text": "Corner lattice points plus one equivalent lattice point at the body centre."
        },
        {
          "type": "bullets",
          "items": [
            "Representative centring translation: (1/2,1/2,1/2).",
            "Total lattice points in the conventional cell: 2."
          ]
        },
        {
          "type": "ascii",
          "text": "z=0                 z=1/2                 z=1\no---------o              •                o---------o\n|         |                               |         |\no---------o                               o---------o",
          "title": "Body-centred slicing"
        }
      ]
    },
    {
      "title": "3. Face-Centred Cell (F)",
      "blocks": [
        {
          "type": "p",
          "text": "Corner points plus the centres of all six faces."
        },
        {
          "type": "bullets",
          "items": [
            "Independent centring translations: (1/2,1/2,0), (1/2,0,1/2), (0,1/2,1/2).",
            "Total lattice points per conventional cell: 4."
          ]
        }
      ]
    },
    {
      "title": "4. Base / End-Centred Cell (C or E)",
      "blocks": [
        {
          "type": "p",
          "text": "Corner points plus centres of one pair of opposite faces."
        },
        {
          "type": "bullets",
          "items": [
            "Representative centring translation: (1/2,1/2,0), depending on the chosen centred-face pair.",
            "Total lattice points per conventional cell: 2."
          ]
        }
      ]
    },
    {
      "title": "5. Hard-Sphere Contact Caveat",
      "blocks": [
        {
          "type": "p",
          "text": "In the simple cubic equal-sphere model, corner spheres touch along the edge. In BCC and FCC, corner spheres do not touch along the cube edge; contact occurs along the body diagonal and face diagonal respectively. This is a packing statement, not the definition of centring."
        }
      ]
    }
  ],
  "traps": [
    "Do not define BCC or FCC by “atoms touching” — centring is a translational lattice concept.",
    "A CsCl crystal has a corner ion and a body-centre ion but is not a BCC Bravais lattice because the two sites are chemically different.",
    "Face-centred and base-centred are not interchangeable."
  ],
  "examples": [
    {
      "title": "Example 1 — Lattice-point count",
      "question": "Find lattice points per conventional FCC cell.",
      "steps": [
        "Corners contribute 1.",
        "Six face centres contribute 6×1/2 = 3."
      ],
      "answer": "FCC conventional cell contains 4 lattice points."
    },
    {
      "title": "Example 2 — End-centred",
      "question": "A cell has corner points and centres on only top and bottom faces. What is the centring type and count?",
      "steps": [
        "This is one pair of opposite centred faces → base/end-centred.",
        "Count = 1 from corners + 2×1/2 = 2."
      ],
      "answer": "End-centred (C/E), 2 lattice points."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart07() {
  return <SolidStatePartPage data={data} />;
}
