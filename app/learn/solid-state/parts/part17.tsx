import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 17,
  slug: "packing-in-solids",
  title: "Packing in Solids",
} as const;

const data = {
  "part": 17,
  "slug": "packing-in-solids",
  "title": "Packing in Solids",
  "sourcePages": "pp. 23–45 and 50–54",
  "intro": "KOHINOOR develops packing fraction, 1D and 2D arrangements, then 3D SC/BCC/HCP/CCP stacking and the ideal HCP geometry.",
  "sections": [
    {
      "title": "1. Packing Fraction / Efficiency",
      "blocks": [
        {
          "type": "formula",
          "latex": "\\\\eta=\\\\frac{Z\\\\left(\\\\frac43\\\\pi r^3\\\\right)}{V_{cell}}\\\\times100",
          "display": "Packing efficiency = [Z(4/3 πr³)/V_cell] × 100."
        },
        {
          "type": "table",
          "headers": [
            "Structure",
            "Z",
            "a–r relation",
            "Packing fraction",
            "Void fraction"
          ],
          "rows": [
            [
              "SC",
              "1",
              "a=2r",
              "π/6 ≈ 0.524",
              "≈47.6%"
            ],
            [
              "BCC",
              "2",
              "a=4r/√3",
              "√3π/8 ≈ 0.680",
              "≈32.0%"
            ],
            [
              "FCC/CCP",
              "4",
              "a=2√2r",
              "π/(3√2) ≈ 0.7405",
              "≈25.95%"
            ]
          ]
        }
      ]
    },
    {
      "title": "2. One-Dimensional Packing",
      "blocks": [
        {
          "type": "ascii",
          "text": "O—O—O—O—O—O",
          "title": "Only one linear close-packed arrangement"
        },
        {
          "type": "callout",
          "label": "Coordination",
          "text": "Each interior sphere touches two neighbours: CN = 2.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "3. Two-Dimensional Packing",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "2D packing",
            "CN",
            "Primitive area efficiency"
          ],
          "rows": [
            [
              "Square packing",
              "4",
              "π/4 ≈ 78.54%"
            ],
            [
              "Hexagonal/triangular close packing",
              "6",
              "π/(2√3) ≈ 90.69%"
            ]
          ]
        },
        {
          "type": "ascii",
          "text": "Square:              Hexagonal:\nO O O O              O O O O\nO O O O               O O O O\nO O O O              O O O O",
          "title": "2D layer archetypes"
        }
      ]
    },
    {
      "title": "4. Three-Dimensional Packing from Square Layers",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "AAA stacking of square layers gives simple cubic: CN 6, PE ≈52%.",
            "A shifted square-layer arrangement gives BCC-like ABAB stacking: CN 8, PE ≈68%."
          ]
        }
      ]
    },
    {
      "title": "5. Three-Dimensional Packing from Hexagonal Close-Packed Layers",
      "blocks": [
        {
          "type": "p",
          "text": "Place layer B so its spheres occupy one set of triangular depressions of layer A. Between A and B, tetrahedral and octahedral voids are created."
        },
        {
          "type": "p",
          "text": "For the third layer there are two key possibilities:"
        },
        {
          "type": "table",
          "headers": [
            "Third-layer choice",
            "Sequence",
            "3D structure",
            "CN",
            "PE"
          ],
          "rows": [
            [
              "Cover tetrahedral-hole positions so layer 3 repeats A",
              "ABAB…",
              "HCP",
              "12",
              "74.05%"
            ],
            [
              "Occupy the alternate set so layer 3 is new C",
              "ABCABC…",
              "CCP = FCC",
              "12",
              "74.05%"
            ]
          ]
        },
        {
          "type": "ascii",
          "text": "HCP: A → B → A → B → A ...\nCCP: A → B → C → A → B → C ...",
          "title": "Layer-sequence memory"
        }
      ]
    },
    {
      "title": "6. Ideal HCP c/a and Volume Derivation",
      "blocks": [
        {
          "type": "formula",
          "latex": "\\\\frac ca=\\\\sqrt{\\\\frac83}=1.633",
          "display": "Ideal HCP c/a = √(8/3) ≈ 1.633."
        },
        {
          "type": "p",
          "text": "For touching spheres a=2r and c=4r√(2/3). The regular-hexagon base area is (3√3/2)a²=6√3r²."
        },
        {
          "type": "formula",
          "latex": "V_{HCP}=6\\\\sqrt3r^2\\\\cdot4r\\\\sqrt{\\\\frac23}=24\\\\sqrt2r^3",
          "display": "V_HCP = 24√2 r³."
        },
        {
          "type": "p",
          "text": "The conventional HCP prism contains 6 atoms, so occupied volume = 6(4/3πr³)=8πr³."
        },
        {
          "type": "formula",
          "latex": "\\\\eta_{HCP}=\\\\frac{8\\\\pi}{24\\\\sqrt2}=\\\\frac{\\\\pi}{3\\\\sqrt2}=0.7405",
          "display": "η_HCP = π/(3√2) = 0.7405 = 74.05%."
        }
      ]
    },
    {
      "title": "7. Diamond Packing Fraction",
      "blocks": [
        {
          "type": "p",
          "text": "The source also evaluates diamond as an FCC framework with half the tetrahedral sites occupied by identical carbon atoms. Z=8 and nearest-neighbour contact gives r=√3a/8."
        },
        {
          "type": "formula",
          "latex": "\\\\eta_{diamond}=\\\\frac{\\\\pi\\\\sqrt3}{16}\\\\approx0.34",
          "display": "Diamond packing fraction = π√3/16 ≈ 0.34, so void space ≈66%."
        }
      ]
    }
  ],
  "traps": [
    "HCP and CCP have the same packing efficiency and CN but different stacking sequences.",
    "BCC is not a maximum close-packed structure despite its relatively high coordination.",
    "2D hexagonal packing efficiency (~90.7% area) must not be confused with 3D HCP packing efficiency (~74.05% volume)."
  ],
  "examples": [
    {
      "title": "Example 1 — Integer/ratio",
      "question": "Find the ratio of FCC packing fraction to SC packing fraction.",
      "steps": [
        "FCC = π/(3√2).",
        "SC = π/6.",
        "Divide: [π/(3√2)]/(π/6)=2/√2."
      ],
      "answer": "Ratio = √2."
    },
    {
      "title": "Example 2 — Multi-correct",
      "question": "Which are correct? (A) HCP=ABAB (B) CCP=ABCABC (C) both CN=12 (D) HCP packs more efficiently than CCP.",
      "steps": [
        "A true.",
        "B true.",
        "C true.",
        "D false; both are 74.05%."
      ],
      "answer": "Correct: A, B, C."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart17() {
  return <SolidStatePartPage data={data} />;
}
