import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 9,
  slug: "seven-crystal-systems",
  title: "Seven Crystal Systems",
} as const;

const data = {
  "part": 9,
  "slug": "seven-crystal-systems",
  "title": "Seven Crystal Systems",
  "sourcePages": "pp. 11–13",
  "intro": "The source then lists the seven 3D crystal systems, their edge/angle conditions, representative variations and examples.",
  "sections": [
    {
      "title": "1. Definitive Metric Table",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "System",
            "Edge relation",
            "Angle relation",
            "Typical examples from the source"
          ],
          "rows": [
            [
              "Cubic",
              "a=b=c",
              "α=β=γ=90°",
              "NaCl, zinc blende, Cu"
            ],
            [
              "Tetragonal",
              "a=b≠c",
              "α=β=γ=90°",
              "White Sn, SnO₂, TiO₂, CaSO₄"
            ],
            [
              "Orthorhombic",
              "a≠b≠c",
              "α=β=γ=90°",
              "Rhombic sulfur, KNO₃, BaSO₄"
            ],
            [
              "Monoclinic",
              "a≠b≠c",
              "α=γ=90°, β≠90°",
              "Monoclinic sulfur, Na₂SO₄·10H₂O"
            ],
            [
              "Hexagonal",
              "a=b≠c",
              "α=β=90°, γ=120°",
              "Graphite, ZnO, CdS"
            ],
            [
              "Rhombohedral / trigonal",
              "a=b=c",
              "α=β=γ≠90°",
              "Calcite, HgS (cinnabar)"
            ],
            [
              "Triclinic",
              "a≠b≠c",
              "α≠β≠γ; none required to be 90°",
              "K₂Cr₂O₇, CuSO₄·5H₂O, H₃BO₃"
            ]
          ]
        }
      ]
    },
    {
      "title": "2. Essential Symmetry Cue",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "System",
            "Characteristic symmetry cue"
          ],
          "rows": [
            [
              "Triclinic",
              "No required rotational axis beyond identity"
            ],
            [
              "Monoclinic",
              "One C₂ axis / equivalent symmetry"
            ],
            [
              "Orthorhombic",
              "Three mutually perpendicular C₂ axes"
            ],
            [
              "Rhombohedral",
              "One C₃ axis"
            ],
            [
              "Tetragonal",
              "One C₄ axis"
            ],
            [
              "Hexagonal",
              "One C₆ axis"
            ],
            [
              "Cubic",
              "Four C₃ axes in tetrahedral arrangement"
            ]
          ]
        }
      ]
    },
    {
      "title": "3. Unit-Cell Volume Formulas",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "System",
            "Volume"
          ],
          "rows": [
            [
              "Cubic",
              "a³"
            ],
            [
              "Tetragonal",
              "a²c"
            ],
            [
              "Orthorhombic",
              "abc"
            ],
            [
              "Hexagonal conventional prism",
              "(3√3/2)a²c"
            ],
            [
              "Monoclinic",
              "abc sinβ"
            ],
            [
              "Rhombohedral",
              "a³√(1−3cos²α+2cos³α)"
            ],
            [
              "Triclinic",
              "abc√(1+2cosαcosβcosγ−cos²α−cos²β−cos²γ)"
            ]
          ]
        }
      ]
    },
    {
      "title": "4. Geometry Blueprint",
      "blocks": [
        {
          "type": "ascii",
          "text": "Cubic:        a=b=c; all 90°\nTetragonal:   a=b≠c; all 90°\nOrthorhombic: a≠b≠c; all 90°\nHexagonal:    basal a=b, γ=120°, c ⟂ basal plane\nRhombohedral: a=b=c; α=β=γ≠90°\nMonoclinic:   one non-right angle\nTriclinic:    fully oblique",
          "title": "Metric-memory map"
        }
      ]
    }
  ],
  "traps": [
    "Hexagonal and rhombohedral are distinct crystal systems.",
    "Rhombohedral has equal edges but non-right equal angles; cubic has equal edges and all right angles.",
    "Monoclinic has only one non-right interaxial angle in the standard setting."
  ],
  "examples": [
    {
      "title": "Example 1",
      "question": "a=b=c and α=β=γ=78°. Identify the system.",
      "steps": [
        "All edges equal.",
        "All angles equal but not 90°."
      ],
      "answer": "Rhombohedral / trigonal."
    },
    {
      "title": "Example 2 — Matrix style",
      "question": "Match: (P) a=b≠c, all 90°; (Q) a≠b≠c, all 90°; (R) a=b≠c, γ=120°.",
      "steps": [
        "P → tetragonal.",
        "Q → orthorhombic.",
        "R → hexagonal."
      ],
      "answer": "P–Tetragonal, Q–Orthorhombic, R–Hexagonal."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart09() {
  return <SolidStatePartPage data={data} />;
}
