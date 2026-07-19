import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 8,
  slug: "dimensional-development-of-crystal-lattices",
  title: "Dimensional Development of Crystal Lattices",
} as const;

const data = {
  "part": 8,
  "slug": "dimensional-development-of-crystal-lattices",
  "title": "Dimensional Development of Crystal Lattices",
  "sourcePages": "pp. 10–11",
  "intro": "KOHINOOR moves from one-dimensional repetition to five two-dimensional lattice geometries and then to three-dimensional crystal systems described by six lattice parameters.",
  "sections": [
    {
      "title": "1. One-Dimensional Lattice",
      "blocks": [
        {
          "type": "formula",
          "latex": "\\\\mathbf R=n\\\\mathbf a",
          "display": "R = n a"
        },
        {
          "type": "ascii",
          "text": "o---o---o---o---o---o",
          "title": "1D periodic array"
        }
      ]
    },
    {
      "title": "2. Two-Dimensional Lattice Geometries",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "2D geometry",
            "Metric condition"
          ],
          "rows": [
            [
              "Square",
              "a = b, θ = 90°"
            ],
            [
              "Rectangle",
              "a ≠ b, θ = 90°"
            ],
            [
              "Hexagonal / triangular net",
              "a = b, θ = 60° or equivalently 120° by basis choice"
            ],
            [
              "Rhombic / centred-rectangular primitive form",
              "a = b, θ ≠ 90°"
            ],
            [
              "Oblique / parallelogram",
              "a ≠ b, θ ≠ 90°"
            ]
          ]
        }
      ]
    },
    {
      "title": "3. Three-Dimensional Description",
      "blocks": [
        {
          "type": "p",
          "text": "A 3D unit cell requires three edge lengths and three interaxial angles."
        },
        {
          "type": "formula",
          "latex": "a,b,c,\\\\alpha,\\\\beta,\\\\gamma",
          "display": "Six lattice parameters: a, b, c, α, β, γ."
        },
        {
          "type": "bullets",
          "items": [
            "α = angle between b and c.",
            "β = angle between a and c.",
            "γ = angle between a and b."
          ]
        },
        {
          "type": "ascii",
          "text": "          c (z)\n          ↑\n          |\n          O────→ b (x)\n         /\n        / a (y)\nAngles: α=∠(b,c), β=∠(a,c), γ=∠(a,b)",
          "title": "Crystallographic axes"
        }
      ]
    },
    {
      "title": "4. Standard Result",
      "blocks": [
        {
          "type": "callout",
          "label": "Exam-standard statement",
          "text": "Three-dimensional crystals are classified into 7 crystal systems and 14 Bravais lattices. The handwritten source uses a classroom heuristic before arriving at the same standard 7-system/14-lattice result; use the standard crystallographic result in problems.",
          "tone": "result"
        }
      ]
    }
  ],
  "traps": [
    "The 2D hexagonal net may be described with a primitive angle of 60° or 120°; do not treat those as different lattices.",
    "The six lattice parameters describe cell geometry, not the chemical basis.",
    "Do not confuse “crystal system” with “Bravais lattice”."
  ],
  "examples": [
    {
      "title": "Example 1 — Identify 2D net",
      "question": "A 2D primitive cell has a=b and θ=90°. Identify it.",
      "steps": [
        "Equal edge lengths.",
        "Right angle."
      ],
      "answer": "Square lattice."
    },
    {
      "title": "Example 2 — Parameter count",
      "question": "How many independent metric parameters are needed to describe a completely general triclinic cell?",
      "steps": [
        "Three edge lengths are required.",
        "Three interaxial angles are required."
      ],
      "answer": "Six parameters."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart08() {
  return <SolidStatePartPage data={data} />;
}
