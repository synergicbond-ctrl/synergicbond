import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 20,
  slug: "important-crystal-structures",
  title: "Important Crystal Structures",
} as const;

const data = {
  "part": 20,
  "slug": "important-crystal-structures",
  "title": "Important Crystal Structures",
  "sourcePages": "pp. 52–53 and 64–73 (plus the structure-type index on p. 14)",
  "intro": "KOHINOOR treats the standard ionic structure types in detail and also includes diamond packing, corundum and a structure-type index. This part consolidates those source topics into coordinate-resolved JEE Advanced notes.",
  "sections": [
    {
      "title": "1. NaCl / Rock-Salt Type — 6:6",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Cl⁻ forms an FCC/CCP array.",
            "Na⁺ occupies all octahedral voids.",
            "Cations per cell = 4; anions per cell = 4; Z = 4 formula units.",
            "CN(Na⁺)=6 and CN(Cl⁻)=6.",
            "Tetrahedral-site occupancy = 0%; octahedral-site occupancy = 100%."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Species",
            "Representative fractional coordinates"
          ],
          "rows": [
            [
              "Cl⁻ (FCC)",
              "(0,0,0), (0,1/2,1/2), (1/2,0,1/2), (1/2,1/2,0)"
            ],
            [
              "Na⁺ (all OV)",
              "(1/2,0,0), (0,1/2,0), (0,0,1/2), (1/2,1/2,1/2)"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "r_++r_-=\\\\frac a2",
          "display": "Nearest unlike-ion contact: r₊ + r₋ = a/2."
        },
        {
          "type": "table",
          "headers": [
            "Neighbour shell around Cl⁻",
            "Species / count",
            "Distance"
          ],
          "rows": [
            [
              "1st",
              "6 Na⁺",
              "a/2"
            ],
            [
              "2nd",
              "12 Cl⁻",
              "a/√2"
            ],
            [
              "3rd",
              "8 Na⁺",
              "√3a/2"
            ],
            [
              "4th",
              "6 Cl⁻",
              "a"
            ]
          ]
        }
      ]
    },
    {
      "title": "2. CsCl Type — 8:8",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "One ion forms a simple-cubic array; the other occupies the cubic body-centre site.",
            "Z = 1 formula unit per conventional cubic cell.",
            "CN = 8:8."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Species",
            "Coordinate"
          ],
          "rows": [
            [
              "Cl⁻ (choice of origin)",
              "(0,0,0) + translations"
            ],
            [
              "Cs⁺",
              "(1/2,1/2,1/2)"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "r_++r_-=\\\\frac{\\\\sqrt3}{2}a",
          "display": "Nearest unlike-ion contact: r₊ + r₋ = (√3/2)a."
        },
        {
          "type": "callout",
          "label": "Critical distinction",
          "text": "CsCl is not a BCC Bravais lattice because corner and body-centre sites contain different chemical species.",
          "tone": "trap"
        }
      ]
    },
    {
      "title": "3. ZnS — Zinc Blende / Sphalerite — 4:4",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "S²⁻ forms FCC.",
            "Zn²⁺ occupies half of the tetrahedral voids in an alternating/non-adjacent set.",
            "Cations per cell = 4; anions per cell = 4; Z = 4.",
            "CN = 4:4; tetrahedral sites occupied = 50%; octahedral = 0%."
          ]
        },
        {
          "type": "table",
          "headers": [
            "S²⁻ FCC coordinates",
            "Zn²⁺ occupied TV coordinates"
          ],
          "rows": [
            [
              "(0,0,0)",
              "(1/4,1/4,1/4)"
            ],
            [
              "(0,1/2,1/2)",
              "(1/4,3/4,3/4)"
            ],
            [
              "(1/2,0,1/2)",
              "(3/4,1/4,3/4)"
            ],
            [
              "(1/2,1/2,0)",
              "(3/4,3/4,1/4)"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "r_++r_-=\\\\frac{\\\\sqrt3}{4}a",
          "display": "Nearest Zn–S distance = √3a/4."
        }
      ]
    },
    {
      "title": "4. Wurtzite ZnS — 4:4",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "S²⁻ forms an HCP array.",
            "Zn²⁺ occupies half of the tetrahedral voids.",
            "Conventional HCP description: 6 anions + 6 cations → 6 ZnS formula units.",
            "CN = 4:4; TV occupancy = 50%; OV occupancy = 0%."
          ]
        },
        {
          "type": "ascii",
          "text": "anion layers:   A      B      A      B ...\ncations:       selected tetrahedral sites between layers\ncoordination:  each Zn → 4 S; each S → 4 Zn",
          "title": "Wurtzite layer view"
        }
      ]
    },
    {
      "title": "5. Fluorite CaF₂ — 8:4",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Ca²⁺ forms FCC.",
            "F⁻ occupies all 8 tetrahedral sites.",
            "Ca per cell = 4; F per cell = 8; Z = 4 CaF₂.",
            "CN(Ca²⁺)=8; CN(F⁻)=4.",
            "All tetrahedral sites occupied; octahedral sites empty."
          ]
        },
        {
          "type": "p",
          "text": "F⁻ coordinates are the eight combinations (x,y,z) with x,y,z∈{1/4,3/4} relative to the FCC Ca framework."
        },
        {
          "type": "formula",
          "latex": "d_{Ca-F}=\\\\frac{\\\\sqrt3}{4}a",
          "display": "Nearest Ca–F distance = √3a/4."
        },
        {
          "type": "callout",
          "label": "Structural insight",
          "text": "The F⁻ sublattice can also be viewed as a simple-cubic arrangement with alternate cubic centres occupied by Ca²⁺. The anions are not required to touch each other in the real fluorite structure.",
          "tone": "info"
        }
      ]
    },
    {
      "title": "6. Antifluorite — Li₂O / Na₂O — 4:8",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "O²⁻ forms FCC.",
            "Li⁺/Na⁺ occupies all tetrahedral sites.",
            "Cations = 8, anions = 4, Z = 4 formula units.",
            "CN(cation)=4; CN(anion)=8.",
            "This is topologically the fluorite arrangement with cation/anion roles reversed."
          ]
        }
      ]
    },
    {
      "title": "7. Corundum Type",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Examples: Al₂O₃, Cr₂O₃, Fe₂O₃.",
            "O²⁻ forms approximately HCP.",
            "Cations occupy 2/3 of octahedral sites.",
            "Representative conventional count in the source: 4 cations + 6 anions = 2 A₂O₃ formula units.",
            "Tetrahedral occupancy = 0%; octahedral occupancy = 66.67%."
          ]
        }
      ]
    },
    {
      "title": "8. Diamond Cubic",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Carbon forms an FCC framework with half the tetrahedral sites occupied by identical carbon.",
            "Equivalent description: two interpenetrating FCC sublattices displaced by (1/4,1/4,1/4).",
            "Z = 8 atoms per conventional cubic cell; CN = 4 tetrahedral."
          ]
        },
        {
          "type": "table",
          "headers": [
            "FCC set",
            "Shifted set"
          ],
          "rows": [
            [
              "(0,0,0)",
              "(1/4,1/4,1/4)"
            ],
            [
              "(0,1/2,1/2)",
              "(1/4,3/4,3/4)"
            ],
            [
              "(1/2,0,1/2)",
              "(3/4,1/4,3/4)"
            ],
            [
              "(1/2,1/2,0)",
              "(3/4,3/4,1/4)"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "2r=\\\\frac{\\\\sqrt3}{4}a\\\\Rightarrow r=\\\\frac{\\\\sqrt3}{8}a",
          "display": "2r = √3a/4 ⇒ r = √3a/8."
        },
        {
          "type": "formula",
          "latex": "\\\\eta=\\\\frac{\\\\pi\\\\sqrt3}{16}\\\\approx34\\\\%",
          "display": "Packing efficiency of diamond ≈34%."
        }
      ]
    },
    {
      "title": "9. Spinel / Inverse Spinel — Source Index Enrichment",
      "blocks": [
        {
          "type": "p",
          "text": "The source’s structure-type table includes spinel examples such as MgAl₂O₄, ZnFe₂O₄ and related compounds. For JEE-level structural bookkeeping, O²⁻ forms a close-packed framework with cations distributed over tetrahedral and octahedral sites."
        },
        {
          "type": "bullets",
          "items": [
            "Normal spinel AB₂O₄: A cations occupy tetrahedral sites; B cations occupy octahedral sites.",
            "Inverse spinel: half of B occupies tetrahedral sites, while A and the remaining B share octahedral sites.",
            "Site preference depends on size, charge, crystal-field stabilization and covalency; radius ratio alone is insufficient."
          ]
        }
      ]
    },
    {
      "title": "10. Additional Structure-Type Index Shown in KOHINOOR",
      "blocks": [
        {
          "type": "p",
          "text": "The source also names nickel-arsenide, perovskite and rutile structure families alongside rock salt, CsCl, fluorite, antifluorite, sphalerite, spinel and wurtzite. These names are useful as a structure-type index even when the detailed geometry is not developed in the handwritten sequence."
        }
      ]
    },
    {
      "title": "11. Truncated-Octahedron JEE Geometry Sidebar",
      "blocks": [
        {
          "type": "p",
          "text": "The source includes a JEE problem on a truncated octahedron. A truncated octahedron has 14 faces: 8 regular hexagons and 6 squares."
        },
        {
          "type": "callout",
          "label": "JEE result",
          "text": "Number of hexagonal faces in a truncated octahedron = 8.",
          "tone": "result"
        }
      ]
    }
  ],
  "traps": [
    "NaCl: anions FCC + all OV occupied; CsCl: simple-cubic sublattice + body-centre basis — do not mix them.",
    "Zinc blende and wurtzite both have 4:4 coordination but differ in CCP/FCC versus HCP anion stacking.",
    "Fluorite has cation CN 8 and anion CN 4; antifluorite reverses the species roles.",
    "Diamond is not close-packed; its packing efficiency is only about 34%."
  ],
  "examples": [
    {
      "title": "Example 1 — Void occupancy to formula",
      "question": "An FCC array of X has all tetrahedral sites occupied by M. Find formula.",
      "steps": [
        "FCC host X count per cell = 4.",
        "Tetrahedral sites = 8 and all are occupied.",
        "M:X = 8:4 = 2:1."
      ],
      "answer": "Formula = M₂X (antifluorite topology)."
    },
    {
      "title": "Example 2 — Matrix match",
      "question": "Match NaCl, CsCl, ZnS(blende), CaF₂ with 6:6, 8:8, 4:4, 8:4 coordination.",
      "steps": [
        "NaCl → 6:6.",
        "CsCl → 8:8.",
        "ZnS blende → 4:4.",
        "CaF₂ → cation:anion = 8:4."
      ],
      "answer": "NaCl–6:6; CsCl–8:8; ZnS–4:4; CaF₂–8:4."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart20() {
  return <SolidStatePartPage data={data} />;
}
