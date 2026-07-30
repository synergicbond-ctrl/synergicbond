import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 07 — Important Ionic and Covalent Crystal Structures | Synergic Bond", description: "Pages 64–73: rock salt, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum, diamond and coordination polyhedra." };

const data = {
  "part": 7,
  "title": "Important Ionic and Covalent Crystal Structures",
  "subtitle": "Pages 64–73: rock salt, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum, diamond and coordination polyhedra.",
  "sourcePages": "Pages 64–73",
  "overview": "This part restores the complete structure tables: sublattice, occupied voids, formula units, both coordination numbers, neighbour shells and limiting contact equations.",
  "modules": [
    {
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
    }
  ],
  "sourceSections": [
    {
      "title": "Master structure table",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Structure type",
            "Host sublattice",
            "Occupied sites",
            "Formula units $Z$",
            "Coordination"
          ],
          "rows": [
            [
              "NaCl/rock salt",
              "Anions FCC",
              "All octahedral holes",
              "4",
              "6:6"
            ],
            [
              "CsCl",
              "One ion simple cubic",
              "Other ion at cubic hole/body centre",
              "1",
              "8:8"
            ],
            [
              "Zinc blende (sphalerite)",
              "Anions FCC",
              "Half of tetrahedral holes, alternate/non-adjacent",
              "4",
              "4:4"
            ],
            [
              "Wurtzite",
              "Anions HCP",
              "Half of tetrahedral holes",
              "6 in hexagonal conventional cell",
              "4:4"
            ],
            [
              "Fluorite $\\mathrm{CaF_2}$",
              "Cations FCC",
              "All tetrahedral holes occupied by anions",
              "4",
              "8:4"
            ],
            [
              "Antifluorite $\\mathrm{M_2X}$",
              "Anions FCC",
              "All tetrahedral holes occupied by cations",
              "4",
              "4:8"
            ],
            [
              "Corundum $\\mathrm{M_2O_3}$",
              "Anions approximately HCP",
              "Two-thirds of octahedral holes",
              "2",
              "6 around cation"
            ]
          ]
        }
      ]
    },
    {
      "title": "Rock-salt geometry and neighbours",
      "blocks": [
        {
          "type": "formula",
          "latex": "r_++r_-=\\frac a2",
          "display": ""
        },
        {
          "type": "table",
          "headers": [
            "Shell around $\\mathrm{Cl^-}$",
            "Species",
            "Distance",
            "Multiplicity"
          ],
          "rows": [
            [
              "1st",
              "$\\mathrm{Na^+}$",
              "$a/2$",
              "6"
            ],
            [
              "2nd",
              "$\\mathrm{Cl^-}$",
              "$a/\\sqrt2$",
              "12"
            ],
            [
              "3rd",
              "$\\mathrm{Na^+}$",
              "$\\sqrt3a/2$",
              "8"
            ],
            [
              "4th",
              "$\\mathrm{Cl^-}$",
              "$a$",
              "6"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Ideal contact choice",
          "text": "When ionic radii are not supplied, use the contact relation implied by the ideal structure. Do not force anion–anion contact and cation–anion contact simultaneously unless the limiting ratio requires both.",
          "tone": "trap"
        }
      ]
    },
    {
      "title": "Fluorite and antifluorite interpretation",
      "blocks": [
        {
          "type": "p",
          "text": "In fluorite, $\\mathrm{Ca^{2+}}$ ions form FCC and all eight tetrahedral holes are occupied by $\\mathrm{F^-}$. Each calcium is eight-coordinate and each fluoride is four-coordinate. Antifluorite reverses the roles: the anion forms FCC and cations fill all tetrahedral holes."
        },
        {
          "type": "formula",
          "latex": "r_{\\rm cation}+r_{\\rm anion}=\\frac{\\sqrt3}{4}a",
          "display": ""
        }
      ]
    },
    {
      "title": "Archimedean solid link",
      "blocks": [
        {
          "type": "p",
          "text": "The Wigner–Seitz cell of BCC is a truncated octahedron. It has 6 square faces and 8 hexagonal faces. The JEE question in the notes asks for the number of hexagonal faces: the answer is 8."
        },
        {
          "type": "formula",
          "latex": "V-E+F=2",
          "display": "Euler relation for a convex polyhedron"
        }
      ]
    }
  ],
  "enrichments": [
    {
      "id": "lattice-energy",
      "title": "Advanced Extension 7 — Structure, Madelung Attraction and Lattice Energy",
      "visual": "madelung",
      "intro": "Packing is not the only driving force in ionic crystals; the electrostatic energy of the entire array is decisive.",
      "paragraphs": [
        "Each ion interacts with many shells of oppositely and similarly charged ions. The net geometrical contribution is summarized by the Madelung constant, which depends on structure type. Shorter unlike-ion distances and larger charges generally strengthen lattice binding.",
        "A Born–Landé-type expression separates long-range Coulomb attraction from short-range repulsion. The nearest-neighbour distance is r₀ = r⁺ + r⁻ in the ideal contact model. Higher ionic charges have a much larger effect than modest changes in size because the Coulomb term contains z⁺z⁻.",
        "A structure that packs slightly less efficiently can still be preferred if it provides a more favourable electrostatic arrangement or better matches directional bonding. This is another reason not to use packing fraction as the sole stability criterion.",
        "Lattice energy links structure to melting point, hardness, solubility trends and defect formation, although hydration and entropy must also be considered for dissolution."
      ],
      "formulae": [
        "U ≈ −(Nₐ M z⁺z⁻e²)/(4πε₀r₀) × (1 − 1/n)",
        "r₀ ≈ r⁺ + r⁻",
        "larger |z⁺z⁻| and smaller r₀ → stronger lattice binding"
      ],
      "example": {
        "question": "Compare the dominant electrostatic factor for NaCl and MgO when nearest-neighbour distances are similar.",
        "steps": [
          "NaCl has |z⁺z⁻| = 1.",
          "MgO has |z⁺z⁻| = 4.",
          "The Coulomb term is therefore much larger for MgO before considering detailed distances and repulsion."
        ],
        "answer": "MgO is expected to have a far larger lattice energy magnitude."
      }
    }
  ],
  "figures": [
    "nacl-structure",
    "cscl-structure",
    "zincblende",
    "wurtzite",
    "fluorite",
    "antifluorite",
    "corundum",
    "diamond-structure",
    "truncated-octahedron",
    "structure-comparison"
  ],
  "examples": [
    {
      "title": "Rock-salt formula units",
      "question": "How many $\\mathrm{NaCl}$ formula units are in a conventional rock-salt cell?",
      "steps": [
        "The FCC anion array contains four anions.",
        "All four octahedral holes are occupied by cations."
      ],
      "answer": "There are $4$ $\\mathrm{NaCl}$ formula units, so $Z=4$."
    },
    {
      "title": "Zinc-blende occupancy",
      "question": "An FCC anion lattice contains 8 tetrahedral holes. If alternate four are occupied, find the formula.",
      "steps": [
        "Anions per FCC cell $=4$.",
        "Occupied tetrahedral holes $=4$."
      ],
      "answer": "Cation:anion $=1:1$, giving $\\mathrm{MX}$."
    },
    {
      "title": "Fluorite coordination",
      "question": "Determine the two coordination numbers in $\\mathrm{CaF_2}$.",
      "steps": [
        "Each $\\mathrm{Ca^{2+}}$ is surrounded by eight $\\mathrm{F^-}$ at cube corners.",
        "Each $\\mathrm{F^-}$ is tetrahedrally surrounded by four $\\mathrm{Ca^{2+}}$."
      ],
      "answer": "Coordination is $8:4$."
    },
    {
      "title": "Truncated octahedron",
      "question": "A truncated octahedron has 6 square faces and 8 hexagonal faces. Find total faces.",
      "steps": [
        "Add the two face types."
      ],
      "answer": "$F=14$."
    }
  ],
  "ncertExamples": [
    {
      "title": "AgBr defect duality",
      "question": "Why is $\\mathrm{AgBr}$ often listed under both Schottky and Frenkel defects?",
      "steps": [
        "Its lattice can develop paired vacancies.",
        "$\\mathrm{Ag^+}$ can also move to interstitial sites."
      ],
      "answer": "AgBr may show both defect types."
    },
    {
      "title": "Zinc sulfide structures",
      "question": "Compare zinc blende and wurtzite.",
      "steps": [
        "Both have 4:4 coordination and half tetrahedral occupancy.",
        "Zinc blende has FCC/CCP anion stacking; wurtzite has HCP stacking."
      ],
      "answer": "Same local tetrahedral coordination, different stacking/polytype."
    }
  ],
  "pageAudit": [
    {
      "page": 64,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 65,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 66,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 67,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 68,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 69,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 70,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 71,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 72,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    },
    {
      "page": 73,
      "topic": "NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and truncated octahedron"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
