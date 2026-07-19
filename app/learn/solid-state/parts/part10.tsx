import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 10,
  slug: "fourteen-bravais-lattices",
  title: "Fourteen Bravais Lattices",
} as const;

const data = {
  "part": 10,
  "slug": "fourteen-bravais-lattices",
  "title": "Fourteen Bravais Lattices",
  "sourcePages": "pp. 11–14",
  "intro": "After the seven crystal systems, KOHINOOR emphasizes that not every centring can be combined independently with every system. The standard result is exactly 14 Bravais lattices.",
  "sections": [
    {
      "title": "1. Allowed Bravais Types",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Crystal system",
            "Allowed Bravais lattices",
            "Count"
          ],
          "rows": [
            [
              "Cubic",
              "P, I, F",
              "3"
            ],
            [
              "Tetragonal",
              "P, I",
              "2"
            ],
            [
              "Orthorhombic",
              "P, C, I, F",
              "4"
            ],
            [
              "Monoclinic",
              "P, C",
              "2"
            ],
            [
              "Hexagonal",
              "P",
              "1"
            ],
            [
              "Rhombohedral",
              "R",
              "1"
            ],
            [
              "Triclinic",
              "P",
              "1"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "3+2+4+2+1+1+1=14",
          "display": "3 + 2 + 4 + 2 + 1 + 1 + 1 = 14 Bravais lattices."
        }
      ]
    },
    {
      "title": "2. Useful Counting Summary from the Source",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Primitive/basic lattices: one for each crystal system in school-level classification.",
            "Body-centred possibilities: cubic, tetragonal, orthorhombic.",
            "Face-centred possibilities: cubic and orthorhombic.",
            "End/base-centred possibilities: orthorhombic and monoclinic.",
            "Orthorhombic is the only system in this table with P, C, I and F variants.",
            "Triclinic is the least symmetric metric system."
          ]
        }
      ]
    },
    {
      "title": "3. Why Not 7 × 4 = 28?",
      "blocks": [
        {
          "type": "p",
          "text": "Some apparently different centred cells are translationally equivalent to another standard Bravais description or incompatible with the symmetry of the system. Bravais classification keeps only distinct translational lattices."
        },
        {
          "type": "callout",
          "label": "Exam focus",
          "text": "Memorize the allowed 14 combinations, but understand that centring is a property of translational equivalence, not merely a visual extra point.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "4. Structure-Type Index Shown in the Source",
      "blocks": [
        {
          "type": "p",
          "text": "The source also previews named structure types such as rock salt, CsCl, fluorite, antifluorite, sphalerite, wurtzite, rutile, perovskite, nickel arsenide and spinel. Their detailed chemistry is treated later; a structure type is not the same thing as a Bravais lattice."
        }
      ]
    }
  ],
  "traps": [
    "Do not multiply 7 systems by 4 centring types.",
    "CsCl-type is a structure type, not a BCC Bravais lattice.",
    "“Primitive” and “simple” describe lattice centring, not chemical simplicity."
  ],
  "examples": [
    {
      "title": "Example 1",
      "question": "Which crystal system permits all P, C, I and F lattices?",
      "steps": [
        "Read the allowed-centering table.",
        "Only orthorhombic contains all four."
      ],
      "answer": "Orthorhombic."
    },
    {
      "title": "Example 2 — Integer",
      "question": "How many of the 14 Bravais lattices are body-centred?",
      "steps": [
        "Cubic I.",
        "Tetragonal I.",
        "Orthorhombic I."
      ],
      "answer": "3 body-centred Bravais lattices."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart10() {
  return <SolidStatePartPage data={data} />;
}
