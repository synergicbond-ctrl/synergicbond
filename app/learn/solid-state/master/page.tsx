import type { ReactNode } from "react";

export const metadata = {
  title: "Solid State Master — JEE Advanced | Synergic Bond",
  description: "Coverage-complete, geometry-first Solid State master chapter mapped to all 89 source pages with advanced original enrichment.",
};

type Tone = "info" | "trap" | "result";
type Block =
  | { type: "p"; text: string }
  | { type: "formula"; latex: string; display: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "ascii"; title?: string; text: string }
  | { type: "callout"; label: string; text: string; tone?: Tone };

type Example = { title: string; question: string; steps: string[]; answer: string };
type Part = { part: number; slug: string; title: string; sourcePages: string; intro: string; sections: { title: string; blocks: Block[] }[]; traps: string[]; examples: Example[] };
type Enrichment = { id: string; title: string; visual: string; intro: string; paragraphs: string[]; formulae: string[]; example: { question: string; steps: string[]; answer: string } };

const CORE_PARTS = [
  {
    "part": 1,
    "slug": "introduction-to-solid-state",
    "title": "Introduction to Solid State",
    "sourcePages": "p. 1",
    "intro": "The chapter opens by classifying solids according to structural order. A structural point may represent an atom, ion, molecule or a repeating motif; therefore a lattice drawing is a geometrical description rather than a literal space-filling photograph.",
    "sections": [
      {
        "title": "1. Structural classification",
        "blocks": [
          {
            "type": "p",
            "text": "Solids are first divided into crystalline and amorphous classes. In a crystalline solid, equivalent structural points repeat periodically. In an amorphous solid, long-range translational periodicity is absent, although local neighbour relationships can remain well defined."
          },
          {
            "type": "table",
            "headers": [
              "Class",
              "Structural signature",
              "Order"
            ],
            "rows": [
              [
                "Crystalline",
                "Regular periodic arrangement of equivalent points",
                "Long-range"
              ],
              [
                "Amorphous",
                "No long-range periodic repetition",
                "Short-range only"
              ]
            ]
          },
          {
            "type": "callout",
            "label": "Meaning of a point",
            "text": "A point can stand for an atom, an ion, the centre of a molecule or an entire basis. Never equate one lattice point automatically with one atom.",
            "tone": "info"
          }
        ]
      },
      {
        "title": "2. The route through the chapter",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Structure and classification",
              "Lattice, basis and unit cell",
              "Seven crystal systems and fourteen Bravais lattices",
              "Cubic-cell geometry, density and coordination shells",
              "Packing, voids and radius-ratio geometry",
              "Important ionic and covalent structures",
              "Point defects, electrical behaviour and magnetic behaviour"
            ]
          }
        ]
      }
    ],
    "traps": [
      "A lattice is an abstract periodic array; it is not the same thing as the complete crystal structure.",
      "A structural point need not represent a single atom.",
      "Amorphous does not mean complete absence of all local order."
    ],
    "examples": [
      {
        "title": "Example 1 — Identify the description",
        "question": "A diagram shows identical motifs repeating after the same translation in three independent directions. What does the diagram establish?",
        "steps": [
          "Translation in three independent directions establishes three-dimensional periodicity.",
          "Identical motifs at equivalent positions establish a crystalline arrangement."
        ],
        "answer": "It represents a crystalline structure."
      },
      {
        "title": "Example 2 — Lattice point",
        "question": "In a molecular crystal, each point is drawn at the centre of a molecule. Does one point necessarily mean one atom?",
        "steps": [
          "The point was defined as the molecular centre.",
          "The molecule may contain many atoms."
        ],
        "answer": "No. One lattice point represents one molecular motif in this description."
      }
    ]
  },
  {
    "part": 2,
    "slug": "crystalline-and-amorphous-solids",
    "title": "Crystalline and Amorphous Solids",
    "sourcePages": "pp. 1–2",
    "intro": "The opening comparison links microscopic order with melting, fracture, heat of fusion and directional physical properties.",
    "sections": [
      {
        "title": "1. Complete comparison",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Property",
              "Crystalline solid",
              "Amorphous solid"
            ],
            "rows": [
              [
                "Arrangement",
                "Regular and periodic",
                "Non-periodic over long range"
              ],
              [
                "Order",
                "Long-range order",
                "Short-range order"
              ],
              [
                "Melting",
                "Sharp melting point for a pure crystal",
                "Softens over a range"
              ],
              [
                "Heat of fusion",
                "Definite and characteristic",
                "No single sharp characteristic value"
              ],
              [
                "Fracture",
                "May cleave along definite planes",
                "Usually irregular fracture"
              ],
              [
                "Traditional exam term",
                "True solid",
                "Pseudo-solid or supercooled-liquid-like"
              ],
              [
                "Directional behaviour",
                "Generally anisotropic in a single crystal",
                "Generally isotropic on a macroscopic scale"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Mechanical strength, refractive index, electrical conductivity and thermal expansion can be direction-dependent in a single crystal because different directions cut through different sequences and separations of particles."
          }
        ]
      },
      {
        "title": "2. Polycrystalline qualification",
        "blocks": [
          {
            "type": "p",
            "text": "A specimen made of many randomly oriented crystallites may be macroscopically isotropic even though every individual grain is crystalline and anisotropic. Preferred orientation, called texture, can restore measurable anisotropy."
          },
          {
            "type": "callout",
            "label": "Glass caution",
            "text": "The old phrase ‘supercooled liquid’ is useful as an examination label, but ordinary glass does not flow like a normal liquid on laboratory time scales at room temperature.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "3. Representative examples",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Crystalline",
              "Amorphous"
            ],
            "rows": [
              [
                "Quartz, NaCl, iron, sulfur, diamond",
                "Rubber, common glass, many plastics, wood, quartz glass"
              ]
            ]
          }
        ]
      }
    ],
    "traps": [
      "Macroscopic isotropy does not prove that a sample is amorphous.",
      "Not every property of every crystal must show large anisotropy.",
      "Cleavage is direction-specific; a crystal need not break smoothly in every direction."
    ],
    "examples": [
      {
        "title": "Example 1 — Evidence set",
        "question": "A solid softens over 30 K, fractures irregularly and has the same refractive index in all measured directions. Classify it.",
        "steps": [
          "A melting range favours amorphous behaviour.",
          "Irregular fracture indicates absence of fixed cleavage planes.",
          "Isotropy is consistent with amorphous order."
        ],
        "answer": "The evidence is most consistent with an amorphous solid."
      },
      {
        "title": "Example 2 — Polycrystal",
        "question": "An isotropic metal sample shows sharp diffraction peaks and many grains under microscopy. Is it amorphous?",
        "steps": [
          "Sharp diffraction peaks demonstrate periodic order.",
          "Many grains demonstrate a polycrystalline aggregate.",
          "Random grain orientations can average directional properties."
        ],
        "answer": "No. It is polycrystalline."
      }
    ]
  },
  {
    "part": 3,
    "slug": "polycrystalline-solids",
    "title": "Polycrystalline Solids",
    "sourcePages": "pp. 2–3",
    "intro": "KOHINOOR places polycrystalline solids immediately after the crystalline–amorphous comparison. The key idea is that a bulk specimen may be made of many tiny crystals with different orientations while each crystallite remains internally crystalline.",
    "sections": [
      {
        "title": "1. Crystallites, Grains and Grain Boundaries",
        "blocks": [
          {
            "type": "p",
            "text": "A polycrystalline solid is an aggregate of many small crystalline domains called grains or crystallites. Each grain possesses its own long-range periodic order and crystallographic orientation."
          },
          {
            "type": "p",
            "text": "Where two differently oriented crystallites meet, the periodic arrangements do not match perfectly. The interface is called a grain boundary."
          },
          {
            "type": "bullets",
            "items": [
              "Many ordinary metallic samples are polycrystalline.",
              "A grain is crystalline; a grain boundary is only the interfacial region between grains.",
              "A large visible piece can therefore contain an enormous number of microscopic crystals."
            ]
          }
        ]
      },
      {
        "title": "2. Orientation Averaging and Macroscopic Behaviour",
        "blocks": [
          {
            "type": "p",
            "text": "A single crystal can show direction-dependent properties. If a polycrystal contains very many randomly oriented grains, those directional effects may statistically average, making the bulk specimen approximately isotropic."
          },
          {
            "type": "callout",
            "label": "Precision",
            "text": "Polycrystalline does not mean amorphous. Long-range order exists inside every crystallite, although the orientation changes from grain to grain.",
            "tone": "result"
          }
        ]
      },
      {
        "title": "3. Spatial Map",
        "blocks": [
          {
            "type": "ascii",
            "text": "Grain A            Grain B\n////////// | \\\\\\\\\\\n////////// | \\\\\\\\\\\n-----------+-----------  ← grain boundary\n|||||||||| | /////////\n|||| Grain C /////////",
            "title": "Schematic orientation map"
          },
          {
            "type": "p",
            "text": "The line separating regions is a grain boundary; the stroke direction inside each region symbolizes a different crystallographic orientation."
          }
        ]
      }
    ],
    "traps": [
      "Polycrystalline ≠ amorphous.",
      "Macroscopic isotropy does not prove absence of crystallinity.",
      "A textured polycrystal can remain macroscopically anisotropic because the grain orientations are not random."
    ],
    "examples": [
      {
        "title": "Example 1 — Conceptual",
        "question": "A metal sample is isotropic in bulk but electron microscopy shows many ordered grains. Is the sample amorphous?",
        "steps": [
          "Ordered grains prove crystallinity inside each domain.",
          "Random orientation can average anisotropy at the macroscopic scale."
        ],
        "answer": "The sample is polycrystalline, not amorphous."
      },
      {
        "title": "Example 2 — Multi-correct",
        "question": "Select correct statements: (A) grain boundaries separate different orientations; (B) every polycrystal is isotropic; (C) each grain may be anisotropic; (D) polycrystals have no long-range order.",
        "steps": [
          "A is correct.",
          "B is false because texture can produce anisotropy.",
          "C is correct.",
          "D is false because each grain has long-range order."
        ],
        "answer": "Correct options: A and C."
      }
    ]
  },
  {
    "part": 4,
    "slug": "classification-of-crystalline-solids",
    "title": "Classification of Crystalline Solids",
    "sourcePages": "pp. 3–5",
    "intro": "KOHINOOR next classifies crystalline solids by the nature of their constituent particles and dominant bonding: ionic, molecular, metallic and covalent/network solids.",
    "sections": [
      {
        "title": "1. Master Classification Table",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Class",
              "Constituent particles",
              "Dominant interaction",
              "Melting / mechanical behaviour",
              "Electrical behaviour",
              "Examples"
            ],
            "rows": [
              [
                "Ionic",
                "Cations and anions",
                "Electrostatic attraction",
                "Generally hard, brittle, high melting",
                "Poor as solid; conduct when molten or in solution",
                "NaCl, KCl, KNO₃"
              ],
              [
                "Molecular — polar",
                "Polar molecules",
                "Dipole–dipole + dispersion",
                "Low to moderate melting, soft",
                "Insulators",
                "NH₃, hydrogen halides, SO₂"
              ],
              [
                "Molecular — H-bonded",
                "Molecules capable of H-bonding",
                "Hydrogen bonding",
                "Higher melting than comparable non-H-bonded molecular solids",
                "Insulators",
                "Ice"
              ],
              [
                "Molecular — non-polar",
                "Atoms/non-polar molecules",
                "London dispersion",
                "Low melting, soft",
                "Insulators",
                "Ar, H₂, S₈, P₄"
              ],
              [
                "Metallic",
                "Metal atoms/positive cores + delocalized electrons",
                "Metallic bonding",
                "Usually strong; malleable and ductile",
                "Good electronic conductors",
                "Fe, Cu, Ag"
              ],
              [
                "Covalent/network",
                "Atoms linked in an extended network",
                "Covalent bonds",
                "Very hard/high melting in many cases",
                "Usually poor conductors",
                "SiO₂, Si, diamond, SiC; graphite is an exception"
              ]
            ]
          }
        ]
      },
      {
        "title": "2. Ionic and Molecular Solids",
        "blocks": [
          {
            "type": "p",
            "text": "Ionic solids are held together by long-range Coulombic forces. Their brittleness follows from the fact that a sufficiently large displacement can bring like charges adjacent, producing strong repulsion and fracture."
          },
          {
            "type": "p",
            "text": "Molecular solids contain discrete molecules. Their properties depend on intermolecular forces rather than an extended ionic or covalent framework."
          }
        ]
      },
      {
        "title": "3. Metallic and Covalent/Network Solids",
        "blocks": [
          {
            "type": "p",
            "text": "Metallic solids possess delocalized valence electrons, allowing electronic conduction and non-directional bonding that supports plastic deformation."
          },
          {
            "type": "p",
            "text": "Network solids contain an extended covalent framework. Diamond and SiC are rigid three-dimensional networks. Graphite is a key exception to the simple “covalent solid = insulator” rule because electrons are delocalized within its layers."
          }
        ]
      },
      {
        "title": "4. Quick Visual",
        "blocks": [
          {
            "type": "ascii",
            "text": "IONIC                METALLIC\n[X] [O] [X] [O]      M⁺   M⁺   M⁺\n[O] [X] [O] [X]        e⁻ e⁻ e⁻\n[X] [O] [X] [O]      M⁺   M⁺   M⁺\n\nMOLECULAR            NETWORK\n(M)   (M)   (M)       A—A—A—A\n   weak forces        | | | |\n(M)   (M)   (M)       A—A—A—A",
            "title": "Bonding archetypes"
          }
        ]
      }
    ],
    "traps": [
      "Graphite is covalent/network but conducts along its layers.",
      "Ionic solids conduct by mobile ions only when ions can migrate; a rigid perfect ionic lattice is not an ordinary electronic conductor.",
      "Do not classify only by melting point; identify constituent particles and bonding."
    ],
    "examples": [
      {
        "title": "Example 1 — Classification",
        "question": "Classify K₂SO₄, solid CO₂, Cu and SiC.",
        "steps": [
          "K₂SO₄ contains ions → ionic.",
          "CO₂ contains discrete non-polar molecules → molecular non-polar.",
          "Cu → metallic.",
          "SiC → covalent/network."
        ],
        "answer": "Ionic; molecular; metallic; covalent/network."
      },
      {
        "title": "Example 2 — Multi-correct",
        "question": "Which may conduct electricity in the solid state? (A) Cu (B) graphite (C) NaCl crystal (D) diamond",
        "steps": [
          "Cu has mobile electrons.",
          "Graphite has delocalized electrons within layers.",
          "NaCl crystal lacks mobile charge carriers under ordinary conditions.",
          "Diamond has localized σ bonds."
        ],
        "answer": "Correct options: A and B."
      }
    ]
  },
  {
    "part": 5,
    "slug": "crystal-lattice-lattice-point-and-unit-cell",
    "title": "Crystal Lattice, Lattice Point and Unit Cell",
    "sourcePages": "pp. 5–6 and the unit-cell illustrations on pp. 28–30",
    "intro": "KOHINOOR defines the crystal/space lattice, lattice point and unit cell before moving into counting and cell classification.",
    "sections": [
      {
        "title": "1. Crystal Lattice / Space Lattice",
        "blocks": [
          {
            "type": "p",
            "text": "A crystal lattice is an infinite regular three-dimensional array of equivalent points. The points encode translational periodicity; they are geometrical entities, not automatically literal atoms."
          },
          {
            "type": "formula",
            "latex": "\\\\mathbf R=n_1\\\\mathbf a+n_2\\\\mathbf b+n_3\\\\mathbf c",
            "display": "R = n₁a + n₂b + n₃c, where n₁,n₂,n₃ are integers."
          },
          {
            "type": "p",
            "text": "A crystal structure is generated by attaching the same basis or motif to every lattice point."
          }
        ]
      },
      {
        "title": "2. Meaning of a Lattice Point",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Solid type",
              "What a lattice point may represent"
            ],
            "rows": [
              [
                "Metallic solid",
                "A metal atom or equivalent atomic motif"
              ],
              [
                "Ionic solid",
                "An equivalent ionic motif; a complete ionic crystal generally needs a multi-ion basis"
              ],
              [
                "Noble-gas solid",
                "A noble-gas atom"
              ],
              [
                "Molecular solid",
                "A molecular centre/orientation; e.g. centre of a CH₄ molecule"
              ]
            ]
          },
          {
            "type": "callout",
            "label": "Key identity",
            "text": "Crystal structure = lattice + basis (motif).",
            "tone": "result"
          }
        ]
      },
      {
        "title": "3. Unit Cell",
        "blocks": [
          {
            "type": "p",
            "text": "A unit cell is a repeating region which, by translation, generates the whole crystal. A useful unit cell must reproduce the full translational structure without gaps or overlaps."
          },
          {
            "type": "p",
            "text": "The choice of origin is not unique. Different-looking cells can describe the same structure if translation reproduces the identical motif. A conventional cell is often chosen to make symmetry obvious."
          }
        ]
      },
      {
        "title": "4. Cube Geometry Inventory",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Geometrical feature",
              "Number in a cube"
            ],
            "rows": [
              [
                "Corners",
                "8"
              ],
              [
                "Faces",
                "6"
              ],
              [
                "Edges",
                "12"
              ],
              [
                "Body centre",
                "1"
              ],
              [
                "Face diagonals",
                "12"
              ],
              [
                "Body diagonals",
                "4"
              ],
              [
                "Edge centres",
                "12"
              ],
              [
                "Face centres",
                "6"
              ]
            ]
          },
          {
            "type": "ascii",
            "text": "z=1     (0,1,1)------(1,1,1)\n         /|              /|\n        / |             / |\n(0,0,1)------(1,0,1)   |\n       |  |            |  |\n       | (0,1,0)-------|-(1,1,0)\n       | /             | /\n       |/              |/\nz=0  (0,0,0)------(1,0,0)",
            "title": "Fractional-coordinate frame"
          }
        ]
      }
    ],
    "traps": [
      "A lattice point is not necessarily one atom.",
      "A conventional unit cell need not be primitive.",
      "The smallest-looking drawn shape is not automatically a valid unit cell; translation must reproduce an identical environment everywhere."
    ],
    "examples": [
      {
        "title": "Example 1 — Basis logic",
        "question": "A primitive lattice carries an AB₂ motif at every lattice point. What is the chemical content associated with one primitive cell?",
        "steps": [
          "A primitive cell contains one lattice point.",
          "Each lattice point carries one AB₂ motif."
        ],
        "answer": "One primitive cell contains AB₂."
      },
      {
        "title": "Example 2 — Unit-cell validity",
        "question": "A proposed repeat unit alternates its top-right corner between Na and Cl after translation. Is it a valid unit cell?",
        "steps": [
          "Equivalent translated cells must be identical.",
          "Changing the identity at an equivalent corner violates translational equivalence."
        ],
        "answer": "No. The proposed repeat unit is invalid."
      }
    ]
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    "part": 11,
    "slug": "symmetry-of-a-cube",
    "title": "Symmetry Elements of a Cube",
    "sourcePages": "pp. 15–17",
    "intro": "KOHINOOR counts mirror planes, rotational axes and the centre of inversion of a cube, giving the classroom total of 23 geometrical symmetry elements.",
    "sections": [
      {
        "title": "1. Planes of Symmetry (POS): 9",
        "blocks": [
          {
            "type": "p",
            "text": "Take a cube 0≤x,y,z≤1. There are 3 central rectangular mirror planes and 6 diagonal mirror planes."
          },
          {
            "type": "bullets",
            "items": [
              "Central planes: x=1/2, y=1/2, z=1/2.",
              "Diagonal planes: x=y, x+y=1, y=z, y+z=1, z=x, z+x=1."
            ]
          },
          {
            "type": "formula",
            "latex": "3+6=9",
            "display": "Total planes of symmetry = 9."
          }
        ]
      },
      {
        "title": "2. Axes of Symmetry (AOS): 13",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Axis type",
              "Geometrical line",
              "Count"
            ],
            "rows": [
              [
                "C₄ / tetrad",
                "Through centres of opposite faces",
                "3"
              ],
              [
                "C₃ / triad",
                "Along body diagonals joining opposite corners",
                "4"
              ],
              [
                "C₂ / diad",
                "Through midpoints of opposite parallel edges",
                "6"
              ]
            ]
          },
          {
            "type": "formula",
            "latex": "3+4+6=13",
            "display": "Total rotational axes = 13."
          }
        ]
      },
      {
        "title": "3. Centre of Symmetry",
        "blocks": [
          {
            "type": "p",
            "text": "The inversion centre is the geometric centre of the cube: (1/2,1/2,1/2). Every point r relative to the centre maps to −r."
          },
          {
            "type": "formula",
            "latex": "9+13+1=23",
            "display": "Elementary geometrical-element count used in the notes: 9 + 13 + 1 = 23."
          }
        ]
      },
      {
        "title": "4. Coordinate Blueprint",
        "blocks": [
          {
            "type": "ascii",
            "text": "C₄ axes: x=1/2,y=1/2  (parallel z), and cyclic permutations\nC₃ axes: (t,t,t), (t,t,1−t), (t,1−t,t), (1−t,t,t)\nC₂ axes: lines through opposite edge midpoints\nMirror planes: x=1/2, y=1/2, z=1/2 and six diagonal planes\nInversion centre: (1/2,1/2,1/2)",
            "title": "Exact symmetry map"
          }
        ]
      }
    ],
    "traps": [
      "The “23” is an elementary count of geometrical symmetry elements used in the source, not the order (number of operations) of the full cubic point group.",
      "A body diagonal joins two opposite corners, so 8 corners give 4 body diagonals, not 8.",
      "A C₄ axis is counted as one axis even though 90°, 180° and 270° rotations are possible about it."
    ],
    "examples": [
      {
        "title": "Example 1 — Integer",
        "question": "How many C₃ axes does a cube possess?",
        "steps": [
          "C₃ axes lie along body diagonals.",
          "8 vertices pair into 4 opposite-vertex pairs."
        ],
        "answer": "4 C₃ axes."
      },
      {
        "title": "Example 2 — Total",
        "question": "Using the KOHINOOR geometrical-element convention, find the total symmetry elements.",
        "steps": [
          "Mirror planes = 9.",
          "Rotational axes = 13.",
          "Inversion centre = 1."
        ],
        "answer": "Total = 23."
      }
    ]
  },
  {
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
  },
  {
    "part": 13,
    "slug": "atomic-radius-edge-length-relations",
    "title": "Atomic Radius–Edge Length Relations",
    "sourcePages": "p. 18",
    "intro": "KOHINOOR next derives the contact geometry connecting cube edge length a and atomic radius r for SC, FCC and BCC.",
    "sections": [
      {
        "title": "1. Simple Cubic",
        "blocks": [
          {
            "type": "p",
            "text": "Nearest neighbours touch along an edge. One edge contains two radii."
          },
          {
            "type": "formula",
            "latex": "a=2r",
            "display": "a = 2r  ⇒  r = a/2."
          }
        ]
      },
      {
        "title": "2. Face-Centred Cubic",
        "blocks": [
          {
            "type": "p",
            "text": "Atoms touch along a face diagonal, not along an edge."
          },
          {
            "type": "formula",
            "latex": "d_{face}=\\\\sqrt{a^2+a^2}=a\\\\sqrt2",
            "display": "Face diagonal = a√2."
          },
          {
            "type": "formula",
            "latex": "4r=a\\\\sqrt2",
            "display": "4r = a√2  ⇒  a = 2√2 r  ⇒  r = a/(2√2)."
          },
          {
            "type": "ascii",
            "text": "corner ●───────● corner\n       ╲   ●   ╱\n        ╲ face╱\n         ╲ctr╱\ncontact chain along face diagonal: r + 2r + r = 4r",
            "title": "FCC contact line"
          }
        ]
      },
      {
        "title": "3. Body-Centred Cubic",
        "blocks": [
          {
            "type": "p",
            "text": "Atoms touch along the body diagonal."
          },
          {
            "type": "formula",
            "latex": "d_{body}=\\\\sqrt{a^2+(a\\\\sqrt2)^2}=a\\\\sqrt3",
            "display": "Body diagonal = a√3."
          },
          {
            "type": "formula",
            "latex": "4r=a\\\\sqrt3",
            "display": "4r = a√3  ⇒  a = 4r/√3  ⇒  r = (√3/4)a."
          },
          {
            "type": "ascii",
            "text": "(0,0,0)  ●────●  (1/2,1/2,1/2)  ────●  (1,1,1)",
            "title": "BCC body-diagonal contact"
          }
        ]
      }
    ],
    "traps": [
      "SC contact: edge; FCC contact: face diagonal; BCC contact: body diagonal.",
      "Corner atoms in FCC/BCC do not touch along the cube edge.",
      "Use centre-to-centre distances, not visible surface gaps, when deriving geometry."
    ],
    "examples": [
      {
        "title": "Example 1",
        "question": "A BCC metal has r=125 pm. Find a.",
        "steps": [
          "Use a=4r/√3.",
          "a=500/√3 pm."
        ],
        "answer": "a ≈ 288.7 pm."
      },
      {
        "title": "Example 2",
        "question": "An FCC face diagonal is 600 pm. Find r.",
        "steps": [
          "Along the face diagonal, total contact length = 4r.",
          "4r=600 pm."
        ],
        "answer": "r = 150 pm."
      }
    ]
  },
  {
    "part": 14,
    "slug": "coordination-number-and-neighbour-shells",
    "title": "Coordination Number and Neighbour Shells",
    "sourcePages": "pp. 19 and 21–23",
    "intro": "KOHINOOR first lists nearest-neighbour distances and then develops successive coordination shells for SC, FCC and BCC.",
    "sections": [
      {
        "title": "1. Distance from a Lattice Vector",
        "blocks": [
          {
            "type": "formula",
            "latex": "d=a\\\\sqrt{u^2+v^2+w^2}",
            "display": "For a cubic lattice vector a[u,v,w], d = a√(u²+v²+w²)."
          },
          {
            "type": "p",
            "text": "A coordination shell contains all equivalent neighbours at the same distance from the reference atom."
          }
        ]
      },
      {
        "title": "2. Simple Cubic — First Six Shells",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Shell",
              "Representative vector",
              "Distance",
              "Number"
            ],
            "rows": [
              [
                "1st",
                "[1,0,0]",
                "a",
                "6"
              ],
              [
                "2nd",
                "[1,1,0]",
                "√2 a",
                "12"
              ],
              [
                "3rd",
                "[1,1,1]",
                "√3 a",
                "8"
              ],
              [
                "4th",
                "[2,0,0]",
                "2a",
                "6"
              ],
              [
                "5th",
                "[2,1,0]",
                "√5 a",
                "24"
              ],
              [
                "6th",
                "[2,1,1]",
                "√6 a",
                "24"
              ]
            ]
          }
        ]
      },
      {
        "title": "3. FCC — Definitive Shell Table",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Shell",
              "Representative vector",
              "Distance",
              "Number"
            ],
            "rows": [
              [
                "1st",
                "[0,1/2,1/2]",
                "a/√2",
                "12"
              ],
              [
                "2nd",
                "[1,0,0]",
                "a",
                "6"
              ],
              [
                "3rd",
                "[1,1/2,1/2]",
                "√(3/2) a",
                "24"
              ],
              [
                "4th",
                "[1,1,0]",
                "√2 a",
                "12"
              ],
              [
                "5th",
                "[3/2,1/2,0]",
                "√(5/2) a",
                "24"
              ]
            ]
          },
          {
            "type": "p",
            "text": "The source also flags higher-shell multiplicities such as 48 and 72 for later shells; JEE problems are usually built from the first few shells."
          }
        ]
      },
      {
        "title": "4. BCC — First Six Shells",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Shell",
              "Representative vector",
              "Distance",
              "Number"
            ],
            "rows": [
              [
                "1st",
                "[1/2,1/2,1/2]",
                "(√3/2)a",
                "8"
              ],
              [
                "2nd",
                "[1,0,0]",
                "a",
                "6"
              ],
              [
                "3rd",
                "[1,1,0]",
                "√2 a",
                "12"
              ],
              [
                "4th",
                "[3/2,1/2,1/2]",
                "(√11/2)a",
                "24"
              ],
              [
                "5th",
                "[1,1,1]",
                "√3 a",
                "8"
              ],
              [
                "6th",
                "[2,0,0]",
                "2a",
                "6"
              ]
            ]
          }
        ]
      },
      {
        "title": "5. Coordination Number",
        "blocks": [
          {
            "type": "callout",
            "label": "First-shell CN",
            "text": "SC = 6, BCC = 8, FCC/CCP = 12. Coordination number normally means first-neighbour count unless a shell number is explicitly stated.",
            "tone": "result"
          }
        ]
      }
    ],
    "traps": [
      "Do not add different-distance shells together when asked for coordination number.",
      "For FCC, the nearest-neighbour distance is a/√2, not a.",
      "For BCC, nearest neighbours are the body-centre/corner pairs at √3 a/2."
    ],
    "examples": [
      {
        "title": "Example 1 — Source-style",
        "question": "An FCC metal has third-neighbour distance 400 pm. Find atomic radius.",
        "steps": [
          "d₃=√(3/2)a=400 pm.",
          "For FCC, a=2√2 r.",
          "Thus d₃=√(3/2)(2√2 r)=2√3 r.",
          "r=400/(2√3)."
        ],
        "answer": "r = 200/√3 ≈ 115.5 pm."
      },
      {
        "title": "Example 2 — Multi-correct",
        "question": "For BCC, identify correct pairs: (A) 1st shell 8 at √3a/2; (B) 2nd shell 6 at a; (C) 3rd shell 12 at √2a; (D) CN=12.",
        "steps": [
          "A, B and C match the shell table.",
          "Coordination number is first-shell count = 8."
        ],
        "answer": "Correct: A, B, C."
      }
    ]
  },
  {
    "part": 15,
    "slug": "density-of-unit-cell",
    "title": "Density of Unit Cell",
    "sourcePages": "p. 20",
    "intro": "KOHINOOR derives the theoretical density formula and combines it with a BCC surface-gap calculation.",
    "sections": [
      {
        "title": "1. Density Derivation",
        "blocks": [
          {
            "type": "p",
            "text": "Mass of one formula unit or atom of molar mass M is M/N_A. If a cell contains Z formula units/atoms, its mass is ZM/N_A."
          },
          {
            "type": "formula",
            "latex": "m_{cell}=\\\\frac{ZM}{N_A}",
            "display": "m_cell = ZM/N_A."
          },
          {
            "type": "p",
            "text": "For a cubic cell V=a³."
          },
          {
            "type": "formula",
            "latex": "\\\\rho=\\\\frac{ZM}{N_Aa^3}",
            "display": "ρ = ZM/(N_A a³)."
          }
        ]
      },
      {
        "title": "2. BCC Interfacial Separation Along an Edge",
        "blocks": [
          {
            "type": "p",
            "text": "In BCC, corner atoms do not touch along the edge. The surface-to-surface gap between adjacent corner atoms is a−2r."
          },
          {
            "type": "formula",
            "latex": "r=\\\\frac{\\\\sqrt3}{4}a",
            "display": "For BCC, r = (√3/4)a."
          },
          {
            "type": "formula",
            "latex": "a-2r=a\\\\left(1-\\\\frac{\\\\sqrt3}{2}\\\\right)\\\\approx0.134a",
            "display": "Edge gap = a(1−√3/2) ≈ 0.134a."
          }
        ]
      },
      {
        "title": "3. Unit Discipline",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "1 pm = 10⁻¹⁰ cm.",
              "1 Å = 10⁻⁸ cm.",
              "Use molar mass in g mol⁻¹ to obtain density in g cm⁻³ when a is converted to cm."
            ]
          }
        ]
      }
    ],
    "traps": [
      "Use Z for the same chemical unit whose molar mass M is used.",
      "Never insert a in pm directly into a formula expecting cm³.",
      "In BCC, edge gap is not zero; contact is along the body diagonal."
    ],
    "examples": [
      {
        "title": "Example 1 — KOHINOOR numerical",
        "question": "A BCC metal has adjacent-corner surface gap 60.3 pm and atomic mass 48. Find density.",
        "steps": [
          "0.134a≈60.3 pm ⇒ a≈450 pm.",
          "Convert a=4.50×10⁻⁸ cm.",
          "Use Z=2 and ρ=ZM/(N_Aa³)."
        ],
        "answer": "ρ ≈ 1.75 g cm⁻³."
      },
      {
        "title": "Example 2",
        "question": "An FCC metal has M=108 g mol⁻¹ and a=408 pm. Estimate density.",
        "steps": [
          "Z=4.",
          "a=4.08×10⁻⁸ cm.",
          "Substitute in ρ=4M/(N_Aa³)."
        ],
        "answer": "ρ ≈ 10.6 g cm⁻³."
      }
    ]
  },
  {
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
  },
  {
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
  },
  {
    "part": 18,
    "slug": "voids-in-crystal-packing",
    "title": "Voids in Crystal Packing",
    "sourcePages": "pp. 33–50 and 55–57",
    "intro": "The source next counts tetrahedral and octahedral voids, locates them in FCC and HCP, and tracks them layer by layer.",
    "sections": [
      {
        "title": "1. Universal Close-Packing Count",
        "blocks": [
          {
            "type": "p",
            "text": "For N close-packed spheres:"
          },
          {
            "type": "formula",
            "latex": "N_{OV}=N,\\\\qquad N_{TV}=2N",
            "display": "Number of octahedral voids = N; tetrahedral voids = 2N."
          }
        ]
      },
      {
        "title": "2. FCC / CCP Void Locations",
        "blocks": [
          {
            "type": "p",
            "text": "An FCC conventional cell contains 4 close-packed spheres, therefore 4 octahedral voids and 8 tetrahedral voids."
          },
          {
            "type": "table",
            "headers": [
              "Void",
              "Fractional coordinates / location",
              "Effective number"
            ],
            "rows": [
              [
                "Octahedral",
                "Body centre (1/2,1/2,1/2) + 12 edge centres shared by 4 cells",
                "1 + 12/4 = 4"
              ],
              [
                "Tetrahedral",
                "All 8 combinations (x,y,z) with x,y,z ∈ {1/4,3/4}",
                "8"
              ]
            ]
          },
          {
            "type": "ascii",
            "text": "z=1/4:  T       T\n\n          T       T\n\nz=1/2:        O  at (1/2,1/2,1/2)\n\nz=3/4:  T       T\n\n          T       T",
            "title": "FCC fractional-height void slices"
          }
        ]
      },
      {
        "title": "3. How the Voids Arise Between Two Close-Packed Layers",
        "blocks": [
          {
            "type": "p",
            "text": "A tetrahedral void is surrounded by 4 spheres. An octahedral void is surrounded by 6 spheres. A triangular hole is a 2D depression; it becomes a 3D tetrahedral or octahedral void only after the next layer is added."
          }
        ]
      },
      {
        "title": "4. HCP Void Count and Layer Locations",
        "blocks": [
          {
            "type": "p",
            "text": "The conventional HCP cell contains 6 spheres, so it contains 12 tetrahedral and 6 octahedral voids."
          },
          {
            "type": "bullets",
            "items": [
              "Three effective octahedral voids occur between the lower A and middle B layers, and three between B and upper A.",
              "A careful boundary count gives 6 effective tetrahedral voids in each A–B interval, hence 12 total.",
              "The source tracks void planes at fractional heights such as h/8, 2h/8, 3h/8, …, 7h/8 to visualize alternating tetrahedral and octahedral sites."
            ]
          }
        ]
      },
      {
        "title": "5. Occupancy-to-Formula Method",
        "blocks": [
          {
            "type": "p",
            "text": "If a close-packed array contains N host anions, then it provides N octahedral and 2N tetrahedral sites. Multiply those counts by the occupied fractions to obtain cation number and hence the formula."
          }
        ]
      }
    ],
    "traps": [
      "A triangular hole is not the same as a tetrahedral void.",
      "FCC edge-centred octahedral voids contribute 1/4 each.",
      "“N tetrahedral voids” is wrong for a close-packed array; there are 2N."
    ],
    "examples": [
      {
        "title": "Example 1",
        "question": "A CCP anion array contains 200 anions. How many TV and OV are available?",
        "steps": [
          "TV=2N.",
          "OV=N."
        ],
        "answer": "TV=400; OV=200."
      },
      {
        "title": "Example 2 — Formula",
        "question": "A close-packed X array has 25% of TV and 50% of OV occupied by M. Find M:X.",
        "steps": [
          "TV contribution = 0.25×2N = 0.5N.",
          "OV contribution = 0.50×N = 0.5N.",
          "Total M=N."
        ],
        "answer": "M:X = 1:1, so MX."
      }
    ]
  },
  {
    "part": 19,
    "slug": "radius-ratio-and-limiting-geometry",
    "title": "Radius Ratio and Limiting Geometry",
    "sourcePages": "pp. 60–64",
    "intro": "KOHINOOR introduces the classical radius-ratio rule as a geometrical guide to the coordination environment of an ionic solid, then extends the idea to additional ideal polyhedra.",
    "sections": [
      {
        "title": "1. Classical Radius-Ratio Table",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "r⁺/r⁻ range",
              "Ideal coordination",
              "Geometry / void"
            ],
            "rows": [
              [
                "<0.155",
                "2",
                "Linear"
              ],
              [
                "0.155–0.225",
                "3",
                "Triangular"
              ],
              [
                "0.225–0.414",
                "4",
                "Tetrahedral"
              ],
              [
                "0.414–0.732",
                "6",
                "Octahedral"
              ],
              [
                "0.732–1.000",
                "8",
                "Cubic"
              ]
            ]
          }
        ]
      },
      {
        "title": "2. CN=3 Triangular Limit",
        "blocks": [
          {
            "type": "p",
            "text": "Three anions of radius R touch at the vertices of an equilateral triangle of side 2R. The centroid-to-vertex distance is 2R/√3."
          },
          {
            "type": "formula",
            "latex": "R+r=\\\\frac{2R}{\\\\sqrt3}",
            "display": "R + r = 2R/√3."
          },
          {
            "type": "formula",
            "latex": "\\\\frac rR=\\\\frac2{\\\\sqrt3}-1=0.1547",
            "display": "r/R = 2/√3 − 1 = 0.1547 ≈ 0.155."
          }
        ]
      },
      {
        "title": "3. CN=4 Tetrahedral Limit",
        "blocks": [
          {
            "type": "p",
            "text": "Four anion centres form a regular tetrahedron of edge 2R. The tetrahedral circumradius is (√6/4)(2R)=R√(3/2)."
          },
          {
            "type": "formula",
            "latex": "\\\\frac rR=\\\\sqrt{\\\\frac32}-1=0.2247",
            "display": "r/R = √(3/2) − 1 = 0.2247 ≈ 0.225."
          }
        ]
      },
      {
        "title": "4. CN=6 Octahedral Limit",
        "blocks": [
          {
            "type": "p",
            "text": "Use the square cross-section through four surrounding anions. The square side is 2R and diagonal is 2R√2."
          },
          {
            "type": "formula",
            "latex": "2R+2r=2R\\\\sqrt2",
            "display": "2R + 2r = 2R√2."
          },
          {
            "type": "formula",
            "latex": "\\\\frac rR=\\\\sqrt2-1=0.4142",
            "display": "r/R = √2 − 1 = 0.4142."
          }
        ]
      },
      {
        "title": "5. CN=8 Cubic Limit",
        "blocks": [
          {
            "type": "p",
            "text": "Eight anions occupy cube corners; a central cation touches along the body diagonal. If the cube edge is 2R, the body diagonal is 2R√3."
          },
          {
            "type": "formula",
            "latex": "2R+2r=2R\\\\sqrt3",
            "display": "2R + 2r = 2R√3."
          },
          {
            "type": "formula",
            "latex": "\\\\frac rR=\\\\sqrt3-1=0.732",
            "display": "r/R = √3 − 1 = 0.732."
          }
        ]
      },
      {
        "title": "6. Extended Ideal Geometries Listed in the Source",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Coordination polyhedron",
              "CN",
              "Approx. limiting ratio"
            ],
            "rows": [
              [
                "Trigonal prism",
                "6",
                "0.528"
              ],
              [
                "Pentagonal bipyramid",
                "7",
                "0.592"
              ],
              [
                "Dodecahedral environment",
                "8",
                "0.668"
              ],
              [
                "Icosahedral",
                "12",
                "0.902"
              ],
              [
                "Cuboctahedral / equal spheres",
                "12",
                "1.000"
              ]
            ]
          },
          {
            "type": "callout",
            "label": "Caution",
            "text": "These values are hard-sphere geometric limits. Real crystal structures also depend on electrostatics, polarization/covalency, lattice energy, pressure and temperature. Radius ratio is a guide, not an absolute law.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "7. Coordination Number and Stoichiometry Contact Count",
        "blocks": [
          {
            "type": "p",
            "text": "For AₓBᵧ, counting A–B contacts from both species gives x·CN(A)=y·CN(B)."
          },
          {
            "type": "formula",
            "latex": "x\\\\,CN_A=y\\\\,CN_B",
            "display": "x·CN_A = y·CN_B."
          }
        ]
      }
    ],
    "traps": [
      "At an exact boundary such as 0.414, the simple radius-ratio model is at a limiting geometry; real structure selection needs energetic information.",
      "A larger coordination number is generally favoured by a larger cation/anion radius ratio, but radius ratio alone is not a universal predictor.",
      "Do not confuse ionic radii used in the rule with covalent or metallic radii."
    ],
    "examples": [
      {
        "title": "Example 1",
        "question": "r⁺=72 pm and r⁻=180 pm. Predict the classical coordination.",
        "steps": [
          "Ratio=72/180=0.400.",
          "0.225<0.400<0.414."
        ],
        "answer": "Tetrahedral coordination, CN≈4."
      },
      {
        "title": "Example 2 — Contact counting",
        "question": "In A₂B₃, each A has 6 B neighbours. Find CN of B.",
        "steps": [
          "xCN_A=yCN_B.",
          "2×6=3×CN_B."
        ],
        "answer": "CN_B=4."
      }
    ]
  },
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
  },
  {
    "part": 21,
    "slug": "defects-in-solids",
    "title": "Defects in Solids",
    "sourcePages": "pp. 74–80",
    "intro": "KOHINOOR classifies defects, then develops vacancy/interstitial, Schottky, Frenkel, non-stoichiometric metal excess/deficiency and impurity defects with charge-compensation logic.",
    "sections": [
      {
        "title": "1. Classification",
        "blocks": [
          {
            "type": "ascii",
            "text": "Defects in solids\n├─ Point / atomic defects  ← focus here\n├─ Line defects\n└─ Volume defects\n\nPoint defects\n├─ Stoichiometric / intrinsic\n│  ├─ Vacancy\n│  ├─ Interstitial\n│  ├─ Schottky\n│  └─ Frenkel\n├─ Non-stoichiometric\n│  ├─ Metal excess\n│  └─ Metal deficiency\n└─ Impurity defects",
            "title": "Defect map"
          }
        ]
      },
      {
        "title": "2. Vacancy and Interstitial Defects",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Vacancy defect: a normally occupied site is empty; mass per crystal volume generally decreases, so density decreases.",
              "Interstitial defect: an extra constituent occupies an interstitial site; for a simple added-particle model density increases.",
              "Thermal defect concentration increases strongly with temperature."
            ]
          }
        ]
      },
      {
        "title": "3. Schottky Defect",
        "blocks": [
          {
            "type": "p",
            "text": "In an ionic solid, equal stoichiometric numbers of cations and anions are missing so electrical neutrality and overall stoichiometry are preserved."
          },
          {
            "type": "bullets",
            "items": [
              "Favoured when cation and anion sizes are comparable and coordination is relatively high.",
              "Density decreases.",
              "Typical textbook examples: NaCl, KCl, CsCl; AgBr can show both Schottky and Frenkel character."
            ]
          },
          {
            "type": "formula",
            "latex": "\\\\frac nN\\\\approx e^{-E_s/(2k_BT)}",
            "display": "Dilute pair concentration: n/N ≈ exp[−E_s/(2k_BT)]."
          },
          {
            "type": "callout",
            "label": "Correction guardrail",
            "text": "A Schottky defect by itself does not automatically mean “p-type electronic semiconductor”. Keep ionic vacancy formation separate from electronic p/n-type classification.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "4. Frenkel Defect",
        "blocks": [
          {
            "type": "p",
            "text": "A smaller ion, usually a cation, leaves its normal site and occupies an interstitial site. A vacancy–interstitial pair is created without loss of material."
          },
          {
            "type": "bullets",
            "items": [
              "Density is essentially unchanged.",
              "Favoured when cation and anion sizes differ greatly and the smaller ion can fit interstitially.",
              "Examples: ZnS, AgCl, AgBr, AgI."
            ]
          },
          {
            "type": "formula",
            "latex": "n\\\\approx\\\\sqrt{NN_i}e^{-E_f/(2k_BT)}",
            "display": "Dilute Frenkel count: n ≈ √(NN_i) exp[−E_f/(2k_BT)]."
          }
        ]
      },
      {
        "title": "5. Thermodynamic View",
        "blocks": [
          {
            "type": "p",
            "text": "Defect creation usually has positive enthalpy but also increases configurational entropy. At finite temperature the free-energy minimum therefore contains a non-zero equilibrium defect population."
          },
          {
            "type": "formula",
            "latex": "\\\\Delta G=\\\\Delta H-T\\\\Delta S",
            "display": "ΔG = ΔH − TΔS."
          },
          {
            "type": "p",
            "text": "Hence equilibrium defect concentration rises rapidly with temperature."
          }
        ]
      },
      {
        "title": "6. Metal Excess — Anion Vacancy / F-Centre",
        "blocks": [
          {
            "type": "p",
            "text": "When an alkali halide is heated in metal vapour, anion vacancies can be created and electrons become trapped at those vacant anion sites. Such electron-containing anion vacancies are F-centres."
          },
          {
            "type": "bullets",
            "items": [
              "Colour develops because trapped electrons absorb visible light.",
              "Electronic conductivity can increase.",
              "Unpaired trapped electrons can contribute paramagnetism.",
              "The crystal remains electrically neutral overall."
            ]
          }
        ]
      },
      {
        "title": "7. Metal Excess — Interstitial-Cation Model / ZnO",
        "blocks": [
          {
            "type": "p",
            "text": "On heating ZnO, oxygen can be lost and the solid becomes zinc-rich/non-stoichiometric. The conventional school model represents excess Zn²⁺ in interstitial positions accompanied by electrons, producing n-type behaviour and yellow colour on heating."
          },
          {
            "type": "callout",
            "label": "Density caution",
            "text": "Do not memorize a universal density sign from the phrase “metal excess”. Actual density depends on which atoms/ions are removed or added and on volume change.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "8. Metal Deficiency — Fe₁₋ₓO",
        "blocks": [
          {
            "type": "p",
            "text": "Some cation sites are vacant and charge neutrality is maintained by oxidizing some remaining lower-valent cations to a higher oxidation state."
          },
          {
            "type": "bullets",
            "items": [
              "FeO commonly exists as Fe₁₋ₓO rather than exact FeO.",
              "Fe²⁺ vacancies are compensated by formation of Fe³⁺.",
              "Density generally decreases; hole-type/p-type electronic behaviour can arise."
            ]
          }
        ]
      },
      {
        "title": "9. Impurity Defects and Charge Compensation",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Doping situation",
              "Charge-compensation result"
            ],
            "rows": [
              [
                "NaCl doped with CaCl₂ or SrCl₂",
                "Each M²⁺ replacing Na⁺ requires one Na-site vacancy per M²⁺ in the 2Na⁺ → M²⁺ + vacancy bookkeeping."
              ],
              [
                "NaCl doped with AlCl₃",
                "One Al³⁺ on a Na⁺ site requires two Na⁺ vacancies per Al³⁺."
              ],
              [
                "NaCl doped with LiCl",
                "Li⁺ is isovalent with Na⁺, so no charge-compensating cation vacancy is required purely by valence."
              ],
              [
                "NiO doped with Li₂O",
                "Li⁺ substitution for Ni²⁺ is compensated by oxidation of some Ni²⁺ to Ni³⁺ / hole creation, giving p-type behaviour."
              ]
            ]
          }
        ]
      }
    ],
    "traps": [
      "Schottky lowers density; Frenkel leaves density essentially unchanged.",
      "AgBr is a standard exception that can show both Schottky and Frenkel defects.",
      "F-centre means an electron trapped in an anion vacancy, not simply any vacancy.",
      "Always enforce electrical neutrality in impurity-defect counting."
    ],
    "examples": [
      {
        "title": "Example 1 — Doping stoichiometry",
        "question": "NaCl contains 10⁶ Na⁺ sites and 1000 Ca²⁺ ions substitute into Na sites. How many Na-site vacancies are required for charge compensation?",
        "steps": [
          "2Na⁺ sites are replaced by one Ca²⁺ plus one vacancy.",
          "Thus each Ca²⁺ substitution requires one Na-site vacancy in the bookkeeping."
        ],
        "answer": "1000 Na-site vacancies."
      },
      {
        "title": "Example 2 — Defect identification",
        "question": "A cation leaves its normal site and occupies an interstitial without changing composition. Identify defect and density effect.",
        "steps": [
          "Vacancy + interstitial pair of same species → Frenkel.",
          "No particle is lost from crystal."
        ],
        "answer": "Frenkel defect; density essentially unchanged."
      }
    ]
  },
  {
    "part": 22,
    "slug": "electrical-properties-of-solids",
    "title": "Electrical Properties of Solids",
    "sourcePages": "pp. 81–85",
    "intro": "The final KOHINOOR source section on electrical behaviour uses band ideas to distinguish metallic conductors, insulators, semiconductors and superconductors, then treats intrinsic/extrinsic doping and p–n junctions.",
    "sections": [
      {
        "title": "1. Temperature Signature",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Class",
              "Electrical signature with temperature"
            ],
            "rows": [
              [
                "Metallic conductor",
                "Conductivity generally decreases as temperature rises because scattering increases."
              ],
              [
                "Semiconductor",
                "Conductivity increases as temperature rises because carrier concentration increases."
              ],
              [
                "Insulator",
                "Very low conductivity because the band gap is too large for appreciable carrier excitation under ordinary conditions."
              ],
              [
                "Superconductor",
                "Below critical temperature T_c, dc electrical resistance vanishes."
              ]
            ]
          }
        ]
      },
      {
        "title": "2. Band Picture of Metallic Conduction",
        "blocks": [
          {
            "type": "p",
            "text": "When many atomic orbitals combine in a solid, they form closely spaced energy bands. A partially filled band, or overlapping filled/empty bands, provides nearby unoccupied states into which electrons can respond to an applied electric field."
          },
          {
            "type": "callout",
            "label": "Core criterion",
            "text": "Metallic conduction requires available electronic states near the Fermi level; a completely filled isolated band cannot carry a net current by simple redistribution.",
            "tone": "result"
          }
        ]
      },
      {
        "title": "3. Valence Band, Conduction Band and Band Gap",
        "blocks": [
          {
            "type": "ascii",
            "text": "Energy ↑\nConduction band  ─────────────\n                 ↑ thermal excitation\n          E_g    │ band gap\nValence band     ─────────────\n(full at T≈0 in an ideal intrinsic semiconductor)",
            "title": "Semiconductor band picture"
          },
          {
            "type": "p",
            "text": "At higher temperature, some electrons are promoted to the conduction band, leaving holes in the valence band. Both electrons and holes contribute to conduction."
          }
        ]
      },
      {
        "title": "4. Intrinsic Semiconductor",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Pure semiconductor: carrier generation arises from thermal excitation across E_g.",
              "Examples in the source: Si, Ge; compound semiconductors include GaN and CdS.",
              "For intrinsic excitation, electrons and holes are generated in equal numbers."
            ]
          }
        ]
      },
      {
        "title": "5. Extrinsic Semiconductor — p-Type",
        "blocks": [
          {
            "type": "p",
            "text": "Doping Group 14 Si with a Group 13 dopant creates electron-deficient acceptor states. Valence-band electrons can occupy these acceptor levels, leaving mobile holes."
          },
          {
            "type": "bullets",
            "items": [
              "Majority carriers: holes.",
              "Acceptor levels lie just above the valence-band edge.",
              "Example concept: In-doped Si → p-type."
            ]
          }
        ]
      },
      {
        "title": "6. Extrinsic Semiconductor — n-Type",
        "blocks": [
          {
            "type": "p",
            "text": "A Group 15 dopant contributes an extra electron. Donor levels lie just below the conduction-band edge and can thermally donate electrons to the conduction band."
          },
          {
            "type": "bullets",
            "items": [
              "Majority carriers: electrons.",
              "Example concept: P-doped Si → n-type."
            ]
          }
        ]
      },
      {
        "title": "7. p–n Junction",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Bias",
              "Connection / effect"
            ],
            "rows": [
              [
                "Reverse bias",
                "p-side toward negative electrode and n-side toward positive in the source convention; carriers are pulled away from the junction and current is strongly suppressed."
              ],
              [
                "Forward bias",
                "Carrier injection across the junction is favoured; substantial current flows."
              ]
            ]
          },
          {
            "type": "p",
            "text": "A p–n junction therefore acts as a rectifying element. The source also notes that combinations of junctions form transistor devices capable of current amplification."
          }
        ]
      },
      {
        "title": "8. Fermi–Dirac Source Extension",
        "blocks": [
          {
            "type": "formula",
            "latex": "f(E)=\\\\frac1{e^{(E-E_F)/(k_BT)}+1}",
            "display": "f(E) = 1 / {exp[(E−E_F)/(k_BT)] + 1}."
          },
          {
            "type": "p",
            "text": "At E=E_F, f=1/2. This is useful background for band occupancy but is beyond the usual computational depth required in JEE Advanced chemistry."
          }
        ]
      },
      {
        "title": "9. Superconductivity",
        "blocks": [
          {
            "type": "p",
            "text": "A superconductor has zero dc resistance below a critical temperature T_c. The source discusses low-temperature superconductors, high-T_c cuprates and the Cooper-pair picture for conventional superconductivity."
          },
          {
            "type": "bullets",
            "items": [
              "Hg becomes superconducting below about 4.2 K.",
              "Conventional low-T_c pairing is mediated by electron–lattice interactions in the BCS picture.",
              "High-T_c cuprates have more complex pairing physics and layered Cu–O structural motifs."
            ]
          }
        ]
      }
    ],
    "traps": [
      "Do not classify a material as semiconductor merely because its conductivity is “small”; the temperature dependence and band structure matter.",
      "p-type does not mean the crystal is positively charged; the bulk remains electrically neutral.",
      "n-type majority carriers are electrons, but donor atoms are incorporated as neutral/ionized dopants with overall charge neutrality."
    ],
    "examples": [
      {
        "title": "Example 1",
        "question": "Si is doped with P. Identify type, majority carrier and dopant level.",
        "steps": [
          "P has one more valence electron than Si.",
          "It creates donor states near the conduction band.",
          "Electrons become majority carriers."
        ],
        "answer": "n-type semiconductor; majority carriers electrons; donor level just below conduction band."
      },
      {
        "title": "Example 2 — Multi-correct",
        "question": "Which statements are correct? (A) metallic conductivity usually decreases with T; (B) semiconductor conductivity usually increases with T; (C) p-type bulk carries net positive charge; (D) a superconductor has zero dc resistance below T_c.",
        "steps": [
          "A true.",
          "B true.",
          "C false; bulk neutrality is maintained.",
          "D true."
        ],
        "answer": "Correct: A, B, D."
      }
    ]
  },
  {
    "part": 23,
    "slug": "magnetic-properties-of-solids",
    "title": "Magnetic Properties of Solids",
    "sourcePages": "pp. 86–89",
    "intro": "KOHINOOR closes with magnetic susceptibility, permanent and induced moments, Curie behaviour, cooperative ferro/antiferromagnetic ordering and magnetic properties of superconductors. Ferrimagnetism is included as the JEE-standard companion classification.",
    "sections": [
      {
        "title": "1. Magnetization and Susceptibility",
        "blocks": [
          {
            "type": "formula",
            "latex": "M=\\\\chi H",
            "display": "M = χH."
          },
          {
            "type": "formula",
            "latex": "\\\\chi_m=\\\\chi V_m",
            "display": "Molar susceptibility: χ_m = χV_m."
          },
          {
            "type": "table",
            "headers": [
              "Behaviour",
              "Sign / microscopic origin"
            ],
            "rows": [
              [
                "Diamagnetic",
                "χ<0; all electrons paired in the simple picture; induced response opposes applied field."
              ],
              [
                "Paramagnetic",
                "χ>0; one or more unpaired electrons provide permanent magnetic moments that partially align in a field."
              ]
            ]
          }
        ]
      },
      {
        "title": "2. Spin Magnetic Moment",
        "blocks": [
          {
            "type": "p",
            "text": "For total spin S, the spin magnetic moment magnitude is proportional to √[S(S+1)]. For many JEE problems using n unpaired electrons, the spin-only effective moment is:"
          },
          {
            "type": "formula",
            "latex": "\\\\mu_{eff}=\\\\sqrt{n(n+2)}\\\\,\\\\mu_B",
            "display": "μ_eff = √[n(n+2)] μ_B."
          },
          {
            "type": "p",
            "text": "The source gives the more general spin form m = g_e√[S(S+1)] μ_B."
          }
        ]
      },
      {
        "title": "3. Curie Law",
        "blocks": [
          {
            "type": "formula",
            "latex": "\\\\chi_m=\\\\frac CT",
            "display": "χ_m = C/T."
          },
          {
            "type": "p",
            "text": "For an ideal paramagnet, increasing temperature randomizes spin orientations, so susceptibility decreases approximately as 1/T."
          }
        ]
      },
      {
        "title": "4. Cooperative Magnetic Ordering",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Type",
              "Spin arrangement",
              "Net magnetization"
            ],
            "rows": [
              [
                "Ferromagnetic",
                "Parallel alignment within domains",
                "Large non-zero spontaneous magnetization below Curie temperature"
              ],
              [
                "Antiferromagnetic",
                "Equal antiparallel sublattices",
                "Moments cancel ideally; ordering below Néel temperature"
              ],
              [
                "Ferrimagnetic",
                "Antiparallel but unequal sublattice moments",
                "Non-zero net magnetization"
              ]
            ]
          },
          {
            "type": "ascii",
            "text": "Paramagnetic:     ↑  ↙  →  ↓  ↗  (random without field)\nFerromagnetic:    ↑  ↑  ↑  ↑  ↑\nAntiferromagnetic:↑  ↓  ↑  ↓  ↑  ↓\nFerrimagnetic:    ↑↑ ↓ ↑↑ ↓  (opposed but unequal)",
            "title": "Spin-order cartoons"
          }
        ]
      },
      {
        "title": "5. Curie and Néel Temperatures",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Ferromagnetic order is lost above the Curie temperature T_C.",
              "Antiferromagnetic order is lost above the Néel temperature T_N.",
              "Above the ordering temperature, many such materials revert to paramagnetic-like behaviour."
            ]
          }
        ]
      },
      {
        "title": "6. Temperature-Independent Contributions",
        "blocks": [
          {
            "type": "p",
            "text": "All materials possess an induced diamagnetic contribution. The source also notes temperature-independent paramagnetism in special cases where low-lying excited electronic states contribute orbital response. This is enrichment beyond standard JEE calculations."
          }
        ]
      },
      {
        "title": "7. Magnetic Behaviour of Superconductors",
        "blocks": [
          {
            "type": "p",
            "text": "Type-I superconductors expel magnetic flux below the critical field: the Meissner effect. The source gives an empirical critical-field relation:"
          },
          {
            "type": "formula",
            "latex": "H_c(T)=H_c(0)\\\\left[1-\\\\left(\\\\frac{T}{T_c}\\\\right)^2\\\\right]",
            "display": "H_c(T) = H_c(0)[1 − (T/T_c)²]."
          },
          {
            "type": "p",
            "text": "Type-II superconductors allow partial flux penetration in a mixed state between two critical fields; high-T_c cuprates are Type II."
          }
        ]
      },
      {
        "title": "8. Measurement Context",
        "blocks": [
          {
            "type": "p",
            "text": "The source mentions the Gouy balance and SQUID magnetometry. For JEE, the essential takeaway is the sign/magnitude of susceptibility and the spin arrangement; instrumental details are usually qualitative."
          }
        ]
      }
    ],
    "traps": [
      "Diamagnetic does not mean “no magnetic response”; it means the induced susceptibility is negative.",
      "Paramagnetic materials need not retain magnetization after removing the field.",
      "Antiferromagnetic and ferrimagnetic both involve antiparallel sublattices, but only ferrimagnetic order has unequal opposing moments and a net magnetization.",
      "Meissner effect is magnetic-flux expulsion, not merely zero resistance."
    ],
    "examples": [
      {
        "title": "Example 1 — Magnetic moment",
        "question": "An ion has 3 unpaired electrons. Find spin-only magnetic moment.",
        "steps": [
          "Use μ_eff=√[n(n+2)] μ_B.",
          "For n=3: √(3×5)=√15."
        ],
        "answer": "μ_eff = √15 ≈ 3.87 μ_B."
      },
      {
        "title": "Example 2 — Classification",
        "question": "A solid has two antiparallel magnetic sublattices of unequal moment. What magnetic order is expected?",
        "steps": [
          "Antiparallel alignment rules out ferromagnetic.",
          "Unequal opposing moments do not cancel completely."
        ],
        "answer": "Ferrimagnetic order."
      }
    ]
  }
] satisfies Part[];

const PAGE_AUDIT = [
  {
    "page": 1,
    "topic": "Crystalline and amorphous solids: arrangement, melting, fracture, heat of fusion, anisotropy and isotropy"
  },
  {
    "page": 2,
    "topic": "Polycrystalline solids, grains, orientations and bulk isotropy"
  },
  {
    "page": 3,
    "topic": "Classification of ionic, molecular, metallic and covalent/network solids; examples and properties"
  },
  {
    "page": 4,
    "topic": "Classification of ionic, molecular, metallic and covalent/network solids; examples and properties"
  },
  {
    "page": 5,
    "topic": "Classification of ionic, molecular, metallic and covalent/network solids; examples and properties"
  },
  {
    "page": 6,
    "topic": "Lattice points, unit cells, sharing fractions, primitive and centred cells"
  },
  {
    "page": 7,
    "topic": "Lattice points, unit cells, sharing fractions, primitive and centred cells"
  },
  {
    "page": 8,
    "topic": "Lattice points, unit cells, sharing fractions, primitive and centred cells"
  },
  {
    "page": 9,
    "topic": "Lattice points, unit cells, sharing fractions, primitive and centred cells"
  },
  {
    "page": 10,
    "topic": "One- and two-dimensional lattices: square, rectangular, hexagonal, rhombic and oblique"
  },
  {
    "page": 11,
    "topic": "Three-dimensional crystal systems, lattice parameters, Bravais lattices and structure-type index"
  },
  {
    "page": 12,
    "topic": "Three-dimensional crystal systems, lattice parameters, Bravais lattices and structure-type index"
  },
  {
    "page": 13,
    "topic": "Three-dimensional crystal systems, lattice parameters, Bravais lattices and structure-type index"
  },
  {
    "page": 14,
    "topic": "Three-dimensional crystal systems, lattice parameters, Bravais lattices and structure-type index"
  },
  {
    "page": 15,
    "topic": "Planes, axes and centre of symmetry of a cube; counting particles per unit cell"
  },
  {
    "page": 16,
    "topic": "Planes, axes and centre of symmetry of a cube; counting particles per unit cell"
  },
  {
    "page": 17,
    "topic": "Planes, axes and centre of symmetry of a cube; counting particles per unit cell"
  },
  {
    "page": 18,
    "topic": "SC, FCC and BCC edge-length–radius contact geometry"
  },
  {
    "page": 19,
    "topic": "Nearest-neighbour distances and a modified FCC numerical"
  },
  {
    "page": 20,
    "topic": "Unit-cell density and BCC surface-gap numerical"
  },
  {
    "page": 21,
    "topic": "Formula from site occupancy, atom-removal problems and coordination counting"
  },
  {
    "page": 22,
    "topic": "Successive neighbour shells; packing efficiency of SC, FCC and BCC"
  },
  {
    "page": 23,
    "topic": "Successive neighbour shells; packing efficiency of SC, FCC and BCC"
  },
  {
    "page": 24,
    "topic": "Successive neighbour shells; packing efficiency of SC, FCC and BCC"
  },
  {
    "page": 25,
    "topic": "One- and two-dimensional packing; square and hexagonal layers; area and volume fractions"
  },
  {
    "page": 26,
    "topic": "One- and two-dimensional packing; square and hexagonal layers; area and volume fractions"
  },
  {
    "page": 27,
    "topic": "One- and two-dimensional packing; square and hexagonal layers; area and volume fractions"
  },
  {
    "page": 28,
    "topic": "Choice of repeat unit and two-/three-dimensional NaCl representations"
  },
  {
    "page": 29,
    "topic": "Choice of repeat unit and two-/three-dimensional NaCl representations"
  },
  {
    "page": 30,
    "topic": "Choice of repeat unit and two-/three-dimensional NaCl representations"
  },
  {
    "page": 31,
    "topic": "Three-dimensional packing from square layers: simple cubic and body-centred cubic"
  },
  {
    "page": 32,
    "topic": "Three-dimensional packing from square layers: simple cubic and body-centred cubic"
  },
  {
    "page": 33,
    "topic": "Tetrahedral/octahedral holes; HCP and CCP stacking sequences"
  },
  {
    "page": 34,
    "topic": "Tetrahedral/octahedral holes; HCP and CCP stacking sequences"
  },
  {
    "page": 35,
    "topic": "Tetrahedral/octahedral holes; HCP and CCP stacking sequences"
  },
  {
    "page": 36,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 37,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 38,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 39,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 40,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 41,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 42,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 43,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 44,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 45,
    "topic": "Layer projections, {111} close-packed planes, FCC–CCP equivalence and HCP–FCC comparison"
  },
  {
    "page": 46,
    "topic": "Locations and exact counting of tetrahedral and octahedral voids in FCC and HCP"
  },
  {
    "page": 47,
    "topic": "Locations and exact counting of tetrahedral and octahedral voids in FCC and HCP"
  },
  {
    "page": 48,
    "topic": "Locations and exact counting of tetrahedral and octahedral voids in FCC and HCP"
  },
  {
    "page": 49,
    "topic": "Locations and exact counting of tetrahedral and octahedral voids in FCC and HCP"
  },
  {
    "page": 50,
    "topic": "Geometrical derivation of ideal HCP packing fraction"
  },
  {
    "page": 51,
    "topic": "Body-centred tetragonal geometry"
  },
  {
    "page": 52,
    "topic": "Diamond cubic structure, coordination and packing fraction"
  },
  {
    "page": 53,
    "topic": "Diamond cubic structure, coordination and packing fraction"
  },
  {
    "page": 54,
    "topic": "Ideal HCP c/a ratio"
  },
  {
    "page": 55,
    "topic": "Fractional heights and layer-wise locations of HCP voids"
  },
  {
    "page": 56,
    "topic": "Fractional heights and layer-wise locations of HCP voids"
  },
  {
    "page": 57,
    "topic": "Fractional heights and layer-wise locations of HCP voids"
  },
  {
    "page": 58,
    "topic": "Relationship between cubic close packing and the FCC conventional cell"
  },
  {
    "page": 59,
    "topic": "Relationship between cubic close packing and the FCC conventional cell"
  },
  {
    "page": 60,
    "topic": "Radius-ratio rules, limiting ratios, trigonal-prismatic hole and general unit-cell volumes"
  },
  {
    "page": 61,
    "topic": "Radius-ratio rules, limiting ratios, trigonal-prismatic hole and general unit-cell volumes"
  },
  {
    "page": 62,
    "topic": "Radius-ratio rules, limiting ratios, trigonal-prismatic hole and general unit-cell volumes"
  },
  {
    "page": 63,
    "topic": "Radius-ratio rules, limiting ratios, trigonal-prismatic hole and general unit-cell volumes"
  },
  {
    "page": 64,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 65,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 66,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 67,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 68,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 69,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 70,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 71,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 72,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 73,
    "topic": "NaCl, CsCl, zinc blende, wurtzite, fluorite, antifluorite, corundum and coordination polyhedra"
  },
  {
    "page": 74,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 75,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 76,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 77,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 78,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 79,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 80,
    "topic": "Point-defect classification; vacancy, interstitial, Schottky, Frenkel, metal excess/deficiency and impurity defects"
  },
  {
    "page": 81,
    "topic": "Electrical properties: bands, Fermi level, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity"
  },
  {
    "page": 82,
    "topic": "Electrical properties: bands, Fermi level, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity"
  },
  {
    "page": 83,
    "topic": "Electrical properties: bands, Fermi level, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity"
  },
  {
    "page": 84,
    "topic": "Electrical properties: bands, Fermi level, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity"
  },
  {
    "page": 85,
    "topic": "Electrical properties: bands, Fermi level, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity"
  },
  {
    "page": 86,
    "topic": "Magnetic susceptibility, Curie law, cooperative magnetism, TIP, Meissner effect and critical field"
  },
  {
    "page": 87,
    "topic": "Magnetic susceptibility, Curie law, cooperative magnetism, TIP, Meissner effect and critical field"
  },
  {
    "page": 88,
    "topic": "Magnetic susceptibility, Curie law, cooperative magnetism, TIP, Meissner effect and critical field"
  },
  {
    "page": 89,
    "topic": "Magnetic susceptibility, Curie law, cooperative magnetism, TIP, Meissner effect and critical field"
  }
] as const;

const ENRICHMENT = [
  {
    "id": "lattice-basis",
    "title": "Advanced Extension 1 — Lattice, Basis and Fractional Coordinates",
    "visual": "fractional",
    "intro": "A crystal structure is most cleanly written as a Bravais lattice plus a basis. This distinction prevents many counting errors and makes complicated structures manageable.",
    "paragraphs": [
      "A Bravais lattice is the infinite set of points generated by integer translations R = n₁a + n₂b + n₃c. Every lattice point has an identical environment. The basis is the atom, ion or group of atoms attached to each lattice point. The full structure is obtained by placing the same basis at every R.",
      "Atomic positions are usually expressed as fractional coordinates (x, y, z), meaning r = xa + yb + zc. Coordinates differing by an integer are translationally equivalent: (1,0,0) and (0,0,0) describe equivalent positions in neighbouring cells. Boundary sharing must therefore be handled geometrically rather than by merely counting coordinate entries.",
      "A conventional cell is chosen to display symmetry clearly; it need not have the smallest possible volume. A primitive cell contains exactly one lattice point. FCC and BCC conventional cells contain four and two lattice points respectively, yet each has a smaller primitive cell.",
      "The choice of origin can interchange labels in an ordered binary structure without changing the physical arrangement. For rock salt, choosing an anion or cation as the origin produces equivalent coordinate descriptions."
    ],
    "formulae": [
      "R = n₁a + n₂b + n₃c,  n₁,n₂,n₃ ∈ ℤ",
      "rⱼ = xⱼa + yⱼb + zⱼc",
      "crystal structure = Bravais lattice + basis"
    ],
    "example": {
      "question": "An FCC lattice has a two-atom basis A at (0,0,0) and B at (¼,¼,¼). How many A and B atoms occur in the conventional cubic cell?",
      "steps": [
        "The FCC conventional cell contains four lattice points.",
        "The same two-atom basis is attached to each lattice point.",
        "Therefore the conventional cell contains 4 A and 4 B atoms."
      ],
      "answer": "A₄B₄, corresponding to AB and Z = 4."
    }
  },
  {
    "id": "miller",
    "title": "Advanced Extension 2 — Crystal Planes and Miller Indices",
    "visual": "miller",
    "intro": "Plane notation turns three-dimensional geometry into a compact set of integers and connects crystal structure with diffraction, cleavage and surface density.",
    "paragraphs": [
      "To obtain Miller indices, find the intercepts of a plane on the crystallographic axes in units of a, b and c; take reciprocals; then clear fractions to the smallest integers. A plane parallel to an axis has an infinite intercept and therefore a zero index. A negative intercept is written with a bar over the corresponding index.",
      "The notation (hkl) denotes one plane orientation, whereas {hkl} denotes the full symmetry-equivalent family. Direction [uvw] and family ⟨uvw⟩ are distinct from plane notation. In a cubic crystal only, the direction [hkl] is normal to the plane (hkl); this convenient equivalence does not hold for every crystal system.",
      "For a cubic lattice, the interplanar spacing decreases as h²+k²+l² increases. This result is central to indexing powder diffraction peaks and comparing planes such as (100), (110) and (111).",
      "Planar density and packing depend on which atoms have their centres in the chosen plane. The close-packed planes of FCC are {111}; the densest direction within such a plane is ⟨110⟩."
    ],
    "formulae": [
      "dₕₖₗ = a / √(h² + k² + l²)  for cubic crystals",
      "intercepts: a/h, b/k, c/l",
      "(hkl) = one orientation; {hkl} = symmetry family"
    ],
    "example": {
      "question": "A cubic crystal has a = 420 pm. Find d₂₁₀ and compare it with d₁₁₁.",
      "steps": [
        "d₂₁₀ = 420/√5 = 187.8 pm.",
        "d₁₁₁ = 420/√3 = 242.5 pm.",
        "The plane with larger h²+k²+l² has smaller spacing."
      ],
      "answer": "d₂₁₀ ≈ 188 pm and d₁₁₁ ≈ 243 pm; therefore d₂₁₀ < d₁₁₁."
    }
  },
  {
    "id": "diffraction",
    "title": "Advanced Extension 3 — Bragg Diffraction and Structural Evidence",
    "visual": "bragg",
    "intro": "Diffraction is the experimental bridge between a periodic lattice and measurable angles.",
    "paragraphs": [
      "When monochromatic X-rays strike parallel lattice planes, waves scattered from successive planes travel different distances. Constructive interference occurs when the path difference equals an integral number of wavelengths. The resulting Bragg peaks reveal interplanar spacings rather than a direct photograph of atoms.",
      "Powder diffraction samples many randomly oriented crystallites, so some grains satisfy the Bragg condition for each allowed plane family. Peak positions depend mainly on lattice geometry; intensities depend on the basis through the structure factor.",
      "Systematic absences identify centring. For a monatomic BCC lattice, reflections occur only when h+k+l is even. For a monatomic FCC lattice, h, k and l must be all even or all odd. These selection rules are powerful JEE Advanced deductions.",
      "A broad diffuse halo is characteristic of short-range order, whereas sharp peaks arise from long coherent periodicity. A polycrystalline solid still gives sharp powder lines because each grain is crystalline."
    ],
    "formulae": [
      "nλ = 2d sinθ",
      "BCC: h+k+l even",
      "FCC: h,k,l all even or all odd"
    ],
    "example": {
      "question": "The first allowed peak of a BCC crystal is observed at θ = 20.0° using λ = 154 pm. Determine a.",
      "steps": [
        "The first BCC reflection is (110), because 1+1+0 is even.",
        "For first order, d₁₁₀ = λ/(2sinθ) = 154/[2sin20°] = 225.1 pm.",
        "For cubic crystals, d₁₁₀ = a/√2."
      ],
      "answer": "a = √2 d₁₁₀ ≈ 318 pm."
    }
  },
  {
    "id": "packing-polytypes",
    "title": "Advanced Extension 4 — Close Packing, Polytypes and Eutactic Arrays",
    "visual": "stacking",
    "intro": "HCP and CCP are the two simplest close-packed stackings, but the layer language also explains more complex real structures.",
    "paragraphs": [
      "A close-packed layer has six in-plane neighbours. Placing a second layer in one set of triangular depressions produces an AB pair. The third layer can return above A, producing ABAB… HCP, or occupy a new C position, producing ABCABC… CCP.",
      "Every sphere in ideal HCP or CCP has twelve touching neighbours: six in its own layer, three above and three below. The packing fraction is identical, π/(3√2), because the local contact geometry is identical even though the long-range stacking differs.",
      "Longer periodic sequences such as ABAC or ABCACB are called polytypes. They have the same composition and similar local coordination but differ in stacking order. Zinc sulfide illustrates this: sphalerite uses a cubic anion sequence, whereas wurtzite uses a hexagonal sequence.",
      "In many ionic structures the anions retain the topology of close packing but are pushed apart by cations. It is then safer to say that the array is close-packed-like or eutactic rather than claiming that every neighbouring anion touches."
    ],
    "formulae": [
      "HCP: ABAB…",
      "CCP/FCC: ABCABC…",
      "CN = 6 + 3 + 3 = 12",
      "packing fraction = π/(3√2) ≈ 0.7405"
    ],
    "example": {
      "question": "A stacking sequence is ABACABAC…. Is it HCP or CCP?",
      "steps": [
        "HCP requires strict AB repetition.",
        "CCP requires strict ABC repetition.",
        "ABAC has a four-layer repeat distinct from both."
      ],
      "answer": "It is a close-packed polytype, not ideal HCP or CCP."
    }
  },
  {
    "id": "polyhedra",
    "title": "Advanced Extension 5 — Coordination Polyhedra and Site Connectivity",
    "visual": "polyhedra",
    "intro": "Unit cells are useful for counting; coordination polyhedra are often better for understanding connectivity and chemical behaviour.",
    "paragraphs": [
      "A coordination polyhedron joins the centres of the nearest neighbours around a selected ion. CN 4 commonly gives a tetrahedron, CN 6 an octahedron and CN 8 a cube or another eight-coordinate polyhedron. The same coordination number can correspond to different geometries, so CN alone does not uniquely determine structure.",
      "Polyhedra can share corners, edges or faces. Sharing more vertices brings central cations closer and often increases electrostatic repulsion. This qualitative idea helps explain why many highly charged cations favour corner-sharing frameworks.",
      "Rock salt can be viewed as an edge-sharing network of MX₆ octahedra. Zinc blende is a framework of corner-sharing MX₄ tetrahedra. Fluorite is naturally described using cation-centred eight-coordinate cubes or anion-centred tetrahedra.",
      "Site connectivity also governs migration. A high number of connected vacant sites can create pathways for ionic conduction, whereas isolated holes do not necessarily allow long-range transport."
    ],
    "formulae": [
      "CN 4 → often tetrahedral",
      "CN 6 → often octahedral",
      "CN 8 → cubic or related polyhedron"
    ],
    "example": {
      "question": "Two solids both have cation CN = 6. One contains isolated octahedra and the other a three-dimensional edge-sharing network. Must their properties be similar?",
      "steps": [
        "CN specifies only the number of nearest neighbours.",
        "Connectivity changes cation–cation distances, dimensionality and transport paths."
      ],
      "answer": "No. Coordination number alone is insufficient; polyhedral connectivity matters."
    }
  },
  {
    "id": "radius-limit",
    "title": "Advanced Extension 6 — Radius Ratio: Derivation, Use and Limitations",
    "visual": "radius",
    "intro": "The radius-ratio rule is a geometrical limiting model, not an inviolable law of crystal structure.",
    "paragraphs": [
      "At the limiting ratio, surrounding anions touch one another and the central cation just touches every anion. Geometry then gives thresholds such as 0.225 for tetrahedral coordination, √2−1 ≈ 0.414 for octahedral coordination and √3−1 ≈ 0.732 for cubic coordination.",
      "The model assumes rigid spherical ions, purely ionic bonding, a single radius for each ion and no polarization. Real ionic radii depend on oxidation state, coordination number and bonding environment. Covalency, directional bonding and lattice-energy competition can stabilize structures outside simple radius-ratio predictions.",
      "A ratio inside a range suggests that a coordination is geometrically possible; it does not prove that it is the thermodynamic ground state. Pressure can favour higher coordination because it rewards denser packing. Temperature may stabilize structures with greater vibrational entropy.",
      "Use the rule as a first filter, then verify stoichiometry, site availability, charge balance, known structure type and whether the proposed arrangement allows reasonable contacts."
    ],
    "formulae": [
      "tetrahedral limit: r⁺/r⁻ = √(3/2) − 1 ≈ 0.225",
      "octahedral limit: r⁺/r⁻ = √2 − 1 ≈ 0.414",
      "cubic limit: r⁺/r⁻ = √3 − 1 ≈ 0.732"
    ],
    "example": {
      "question": "For r⁺/r⁻ = 0.40, which coordination is suggested by the simple rule, and what caution is required?",
      "steps": [
        "0.40 lies between 0.225 and 0.414.",
        "The simple table therefore suggests tetrahedral CN 4.",
        "The prediction assumes hard spheres and does not include polarization or competing lattice energies."
      ],
      "answer": "CN 4 is the geometrical prediction, not an absolute structural proof."
    }
  },
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
  },
  {
    "id": "defect-thermo",
    "title": "Advanced Extension 8 — Thermodynamics of Defects and Ionic Transport",
    "visual": "transport",
    "intro": "A perfect crystal at finite temperature is an idealization. Equilibrium defects increase entropy and can dominate conductivity.",
    "paragraphs": [
      "Creating a vacancy or a Frenkel pair costs enthalpy but increases configurational entropy. The equilibrium concentration follows an exponential temperature dependence. Consequently defect populations are small at low temperature and rise rapidly on heating.",
      "For a Schottky pair in a 1:1 crystal, equal numbers of cation and anion vacancies preserve stoichiometry and electrical neutrality. Density decreases because particles are missing while the macroscopic cell volume changes comparatively little.",
      "For a Frenkel defect, a particle leaves its normal site and occupies an interstitial site. The total number of particles and approximate density remain unchanged, but vacancy–interstitial pairs create possible hopping steps.",
      "Ionic conductivity requires both mobile charge carriers and connected pathways. Its temperature dependence combines carrier concentration with migration mobility, so an Arrhenius plot can reflect both defect formation and migration energies."
    ],
    "formulae": [
      "defect fraction ∝ exp(−ΔG_f/2RT) for paired defects",
      "σ = nqμ",
      "σT ≈ A exp(−Eₐ/RT)  in a simple hopping model"
    ],
    "example": {
      "question": "Why does an ionic solid often conduct much better at high temperature?",
      "steps": [
        "Heating raises the equilibrium concentration of vacancies/interstitials.",
        "Heating also increases the probability of ions overcoming migration barriers.",
        "Both carrier number and mobility can rise."
      ],
      "answer": "Thermally generated defects and faster hopping increase ionic conductivity."
    }
  },
  {
    "id": "nonstoich",
    "title": "Advanced Extension 9 — Non-stoichiometry, Colour Centres and Mixed Valence",
    "visual": "defects",
    "intro": "Defects can change composition while preserving overall charge neutrality through electrons, holes or variable oxidation states.",
    "paragraphs": [
      "An anion vacancy containing a trapped electron is an F-centre. The localized electron can absorb visible light, producing colour. The missing anion lowers mass and may increase electronic conductivity.",
      "Metal excess can also arise when extra cations occupy interstitial sites and accompanying electrons provide charge compensation. Heated zinc oxide is a classic model: oxygen loss leaves electrons and produces n-type behaviour and a colour change.",
      "Metal deficiency is common when a metal has accessible higher oxidation states. Missing lower-valent cations are compensated by oxidation of some remaining cations. Iron oxide is therefore often written Fe₁₋ₓO rather than as a perfectly stoichiometric compound.",
      "Aliovalent doping creates controlled vacancies or carriers. Replacing two Na⁺ sites by one Ca²⁺ in NaCl requires one cation vacancy for charge neutrality; replacing Ni²⁺ by Li⁺ in NiO can create holes through oxidation of some Ni²⁺ to Ni³⁺."
    ],
    "formulae": [
      "anion vacancy + trapped e⁻ → F-centre",
      "2Na⁺ sites ↔ Ca²⁺ + one Na⁺ vacancy",
      "3Fe²⁺ ↔ 2Fe³⁺ + one Fe-site vacancy"
    ],
    "example": {
      "question": "A NaCl crystal contains 0.50 mol% CaCl₂ substitutionally. Estimate the mole fraction of vacant Na sites introduced, neglecting all other defects.",
      "steps": [
        "Each Ca²⁺ replaces two Na⁺ charges but occupies one cation site.",
        "One Na-site vacancy is required per Ca²⁺ dopant.",
        "Therefore the vacancy fraction is approximately the Ca²⁺ fraction on the cation sublattice."
      ],
      "answer": "Approximately 0.50 mol% of the cation sites are vacancies under the stated approximation."
    }
  },
  {
    "id": "band",
    "title": "Advanced Extension 10 — From Atomic Orbitals to Bands",
    "visual": "bands",
    "intro": "Band formation explains why electron count and band filling, not merely the presence of electrons, determine conductivity.",
    "paragraphs": [
      "When N equivalent atoms approach, each atomic orbital generates N closely spaced molecular orbitals. In a macroscopic crystal the spacing becomes so small that the levels are treated as an energy band. The allowed energies are separated by forbidden gaps.",
      "A partially filled band can conduct because nearby empty states are available when an electric field changes electron momentum. A completely filled band gives no net current because contributions from opposite wave vectors cancel.",
      "Metals have a partially filled band or overlapping valence and conduction bands. Insulators have a large band gap. Semiconductors have a smaller gap, so thermal excitation creates conduction-band electrons and valence-band holes.",
      "Conductivity is σ = nqμ. In metals, n is already large and increasing temperature mainly reduces mobility through lattice scattering. In intrinsic semiconductors, the exponential increase in n usually dominates the mobility decrease, so conductivity rises with temperature."
    ],
    "formulae": [
      "σ = nqμ",
      "nᵢ ∝ exp(−E_g/2kT)",
      "ρ = 1/σ"
    ],
    "example": {
      "question": "Two intrinsic semiconductors have gaps 1.0 eV and 2.0 eV at the same temperature. Which has more thermally generated carriers?",
      "steps": [
        "nᵢ depends exponentially on −E_g/(2kT).",
        "The smaller gap gives a much less negative exponent."
      ],
      "answer": "The 1.0 eV semiconductor has far more intrinsic carriers."
    }
  },
  {
    "id": "devices",
    "title": "Advanced Extension 11 — Doping, Junctions, Zone Refining and LCD Materials",
    "visual": "junction",
    "intro": "Solid-state chemistry becomes technology when defects and electronic levels are deliberately controlled.",
    "paragraphs": [
      "Donor dopants introduce occupied levels just below the conduction band and readily supply electrons, giving n-type material. Acceptor dopants introduce empty levels just above the valence band and generate holes, giving p-type material. The majority carrier changes, but the crystal remains electrically neutral overall.",
      "At a p–n junction, electrons and holes diffuse and recombine near the interface, leaving fixed charged dopant ions. This creates a depletion region and an internal potential barrier. Forward bias lowers the barrier; reverse bias raises it.",
      "Semiconductor-grade material requires extreme purity. In zone refining, a narrow molten zone travels along a bar. Impurities that prefer the liquid move with the zone and become concentrated at one end, which is removed.",
      "Liquid-crystal displays exploit anisotropic, field-responsive molecules. In a twisted-nematic arrangement the molecular orientation rotates polarization; an applied field changes the orientation and therefore light transmission through crossed polarizers."
    ],
    "formulae": [
      "n-type: donor level → conduction band",
      "p-type: valence band → acceptor level",
      "forward bias lowers junction barrier"
    ],
    "example": {
      "question": "Silicon is doped with a small amount of phosphorus. Identify the majority carrier and dopant type.",
      "steps": [
        "Phosphorus has one more valence electron than silicon.",
        "The extra electron is weakly bound and can enter the conduction band."
      ],
      "answer": "Phosphorus is a donor; electrons are the majority carriers, so the material is n-type."
    }
  },
  {
    "id": "magnetic",
    "title": "Advanced Extension 12 — Curie–Weiss Behaviour, Ferrimagnetism and Hysteresis",
    "visual": "magnetism",
    "intro": "The source classification becomes deeper when spin interactions and domains are included.",
    "paragraphs": [
      "Diamagnetism is an induced response present in all matter and gives negative susceptibility. Spin paramagnetism from unpaired electrons gives positive susceptibility and commonly follows Curie behaviour when moments are independent.",
      "Interactions modify the Curie law to the Curie–Weiss form χ = C/(T−θ). A positive θ signals dominant ferromagnetic interactions; a negative θ signals dominant antiferromagnetic interactions. Actual ordering occurs near a Curie or Néel temperature.",
      "Ferromagnets contain domains with parallel moments. Antiferromagnets have equal antiparallel sublattices and nearly zero net moment. Ferrimagnets also have antiparallel sublattices, but unequal moments leave a non-zero magnetization; many spinels show this behaviour.",
      "A hysteresis loop records the lag of magnetization behind the applied field. Retentivity is the residual magnetization at zero field; coercivity is the reverse field required to reduce magnetization to zero. Soft magnets have low coercivity; permanent magnets require substantial coercivity and remanence."
    ],
    "formulae": [
      "χ = C/T  (Curie)",
      "χ = C/(T−θ)  (Curie–Weiss)",
      "μ_so = √[n(n+2)] μ_B"
    ],
    "example": {
      "question": "A paramagnetic solid gives a straight line when 1/χ is plotted against T, intercepting the temperature axis at −35 K. What interaction is suggested?",
      "steps": [
        "Curie–Weiss gives 1/χ = (T−θ)/C.",
        "The temperature-axis intercept is θ.",
        "θ = −35 K is negative."
      ],
      "answer": "Dominant antiferromagnetic interactions are suggested."
    }
  },
  {
    "id": "superconduct",
    "title": "Advanced Extension 13 — Superconductivity, Critical Fields and the Meissner State",
    "visual": "superconductor",
    "intro": "Zero resistance and perfect flux exclusion are distinct defining features of the superconducting state.",
    "paragraphs": [
      "Below a critical temperature, a superconductor can sustain current without ordinary resistive loss. In conventional superconductors, electrons form correlated Cooper pairs through lattice-mediated interactions and condense into a coherent quantum state.",
      "The Meissner effect is the expulsion of magnetic flux from the bulk when the material enters the superconducting state. A hypothetical perfect conductor that merely traps existing flux would not show the same thermodynamic behaviour; therefore zero resistance alone is not a complete definition.",
      "Type I superconductors remain in a complete Meissner state up to one critical field and then lose superconductivity abruptly. Type II materials have lower and upper critical fields; between them quantized vortices penetrate while superconductivity survives around the vortex cores.",
      "Thermal agitation and strong magnetic fields break the ordered state. The empirical critical-field relation for a Type I material decreases to zero as T approaches T_c."
    ],
    "formulae": [
      "H_c(T) = H_c(0)[1 − (T/T_c)²]",
      "T < T_c and H < H_c are required for the Type I state",
      "Meissner state: B ≈ 0 in the bulk"
    ],
    "example": {
      "question": "A Type I superconductor has T_c = 8.0 K and H_c(0) = 80 kA m⁻¹. Find H_c at 6.0 K.",
      "steps": [
        "T/T_c = 6/8 = 0.75.",
        "1 − (0.75)² = 0.4375.",
        "H_c = 80 × 0.4375 kA m⁻¹."
      ],
      "answer": "H_c(6.0 K) = 35 kA m⁻¹."
    }
  },
  {
    "id": "formula-unification",
    "title": "Advanced Extension 14 — Unified Geometry and Formula Strategy",
    "visual": "strategy",
    "intro": "Most difficult numerical questions reduce to a small sequence of geometric and stoichiometric decisions.",
    "paragraphs": [
      "First identify the lattice and the exact contact direction. In SC contact is along an edge, in BCC along a body diagonal and in FCC along a face diagonal. Do not use a memorized a–r formula until the contact line has been verified for the stated structure.",
      "Second count particles with sharing fractions, but distinguish number of lattice points, number of atoms and number of formula units. A basis can multiply the atom count without changing the Bravais lattice.",
      "Third convert every length to a consistent unit before applying density. The formula ρ = ZM/(N_A V_cell) uses molar mass per mole and cell volume in compatible units. For non-cubic cells use the correct geometrical volume.",
      "Fourth treat void occupancy algebraically. If N anions form a close-packed array, there are N octahedral and 2N tetrahedral holes. Occupying a fraction f_o and f_t gives cations N(f_o + 2f_t), from which stoichiometry follows immediately."
    ],
    "formulae": [
      "SC: a = 2r",
      "BCC: √3a = 4r",
      "FCC: √2a = 4r",
      "ρ = ZM/(N_A V_cell)",
      "close-packed N anions → N O-holes and 2N T-holes"
    ],
    "example": {
      "question": "Anions form CCP. Cations occupy 25% of tetrahedral holes and 50% of octahedral holes. Find the cation:anion ratio.",
      "steps": [
        "For N anions, tetrahedral holes = 2N and occupied tetrahedral holes = 0.25×2N = 0.5N.",
        "Octahedral holes = N and occupied octahedral holes = 0.50N.",
        "Total cations = N."
      ],
      "answer": "Cation:anion = 1:1, so the empirical type is MX."
    }
  }
] satisfies Enrichment[];

const VISUAL_FOR_PART: Record<number, string> = {"1": "lattice", "2": "lattice", "3": "polycrystal", "4": "bonding", "5": "unitcell", "6": "sharing", "7": "unitcell", "8": "dimensions", "9": "bravais", "10": "bravais", "11": "symmetry", "12": "cubic", "13": "cubic", "14": "neighbours", "15": "density", "16": "stoich", "17": "packing", "18": "voids", "19": "radius", "20": "structures", "21": "defects", "22": "bands", "23": "magnetism"};

const toneClass: Record<Tone, string> = {
  info: "border-cyan-400/25 bg-cyan-400/[0.055]",
  trap: "border-rose-400/25 bg-rose-400/[0.055]",
  result: "border-emerald-400/25 bg-emerald-400/[0.055]",
};

function Formula({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-center font-mono text-sm leading-7 text-zinc-100 md:text-base">{children}</div>;
}

function SectionCard({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#111827]/90 p-5 shadow-[0_18px_60px_rgba(0,0,0,.25)] md:p-7">
      <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "formula") return <Formula>{block.display}</Formula>;
  if (block.type === "bullets") return <ul className="list-disc space-y-2 pl-5 marker:text-cyan-300">{block.items.map((x) => <li key={x}>{x}</li>)}</ul>;
  if (block.type === "table") return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[700px] border-collapse text-left text-sm">
        <thead className="bg-white/[0.05] text-zinc-100"><tr>{block.headers.map((h) => <th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr></thead>
        <tbody className="divide-y divide-white/10">{block.rows.map((row, r) => <tr key={`${r}-${row.join("|")}`}>{row.map((c, i) => <td key={`${i}-${c}`} className={`px-3 py-3 align-top ${i === 0 ? "font-medium text-white" : "text-zinc-300"}`}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
  if (block.type === "ascii") return <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] p-4">{block.title ? <h3 className="mb-3 font-semibold text-violet-200">{block.title}</h3> : null}<pre className="overflow-x-auto whitespace-pre font-mono text-xs leading-6 text-zinc-200 md:text-sm">{block.text}</pre></div>;
  const tone = block.tone ?? "info";
  return <div className={`rounded-2xl border p-4 ${toneClass[tone]}`}><div className="text-xs font-black uppercase tracking-[0.18em] text-white/75">{block.label}</div><p className="mt-2 text-sm leading-7 text-zinc-200">{block.text}</p></div>;
}

function ExampleCard({ example, index }: { example: Example; index: number }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/25 p-4 md:p-5">
      <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-sm font-black text-emerald-200">{index}</span><div><h3 className="font-semibold text-white">{example.title}</h3><p className="mt-2 text-zinc-300">{example.question}</p></div></div>
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-zinc-400">{example.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-3 text-sm font-semibold text-emerald-100">{example.answer}</div>
    </article>
  );
}

const cyan = "#00f5d4";
const blue = "#38bdf8";
const violet = "#a78bfa";
const amber = "#fbbf24";
const rose = "#fb7185";
const zinc = "#cbd5e1";

function VisualFrame({ title, children }: { title: string; children: ReactNode }) {
  return <figure className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#08121d] p-4 md:p-5"><figcaption className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{title}</figcaption>{children}</figure>;
}

function CubeWire({ x=150, y=70, s=150, d=55, stroke=cyan }: { x?: number; y?: number; s?: number; d?: number; stroke?: string }) {
  const p=[[x,y],[x+s,y],[x+s,y+s],[x,y+s],[x+d,y-d],[x+s+d,y-d],[x+s+d,y+s-d],[x+d,y+s-d]];
  const edges=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  return <>{edges.map(([a,b],i)=><line key={i} x1={p[a][0]} y1={p[a][1]} x2={p[b][0]} y2={p[b][1]} stroke={stroke} strokeWidth="2" opacity={i>3&&i<8?.55:1}/>)}</>;
}

function GeometryVisual({ kind }: { kind: string }) {
  const base = { viewBox: "0 0 720 360", className: "h-auto w-full", role: "img" as const, "aria-label": `${kind} solid-state geometry` };
  if (kind === "lattice") return <VisualFrame title="Long-range order versus short-range order"><svg {...base}>{[0,1].map(side => <g key={side} transform={`translate(${side*360},0)`}><text x="180" y="32" textAnchor="middle" fill={side?amber:cyan} fontSize="17" fontWeight="700">{side?"Amorphous":"Crystalline"}</text>{Array.from({length:30},(_,i)=>{const r=Math.floor(i/6),c=i%6;const j=side?((i*37)%17-8):0,k=side?((i*29)%15-7):0;return <circle key={i} cx={65+c*48+j} cy={75+r*48+k} r="9" fill={side?amber:cyan} opacity={.9}/>})}{!side&&Array.from({length:11},(_,i)=><line key={i} x1={55+(i%6)*48} y1={66+Math.floor(i/6)*192} x2={55+(i%6)*48} y2="278" stroke={cyan} opacity=".15"/>)}<text x="180" y="330" textAnchor="middle" fill={zinc} fontSize="13">{side?"No translational periodicity over long distances":"Equivalent points repeat by translation"}</text></g>)}</svg></VisualFrame>;
  if (kind === "polycrystal") return <VisualFrame title="Polycrystal: ordered grains, different orientations"><svg {...base}><rect x="70" y="45" width="580" height="260" rx="20" fill="#0f1d2a" stroke={cyan} opacity=".95"/>{[[100,70,170,110,0],[280,65,170,120,18],[470,70,145,105,-14],[95,190,200,90,12],[310,205,155,80,-10],[480,185,145,105,25]].map((g,gi)=><g key={gi} transform={`rotate(${g[4]} ${g[0]+g[2]/2} ${g[1]+g[3]/2})`}><rect x={g[0]} y={g[1]} width={g[2]} height={g[3]} rx="10" fill={gi%2?"#172554":"#102a2b"} stroke={gi%2?violet:cyan}/>{Array.from({length:12},(_,i)=><circle key={i} cx={g[0]+22+(i%4)*38} cy={g[1]+22+Math.floor(i/4)*30} r="5" fill={gi%2?violet:cyan}/>)}</g>)}<text x="360" y="335" textAnchor="middle" fill={zinc} fontSize="14">Grain boundaries separate crystallites with different orientations</text></svg></VisualFrame>;
  if (kind === "bonding") return <VisualFrame title="Constituent particles and dominant interactions"><svg {...base}>{[{x:90,t:"Ionic",a:"+",b:"−",c:cyan},{x:260,t:"Molecular",a:"δ+",b:"δ−",c:violet},{x:430,t:"Metallic",a:"M⁺",b:"e⁻",c:blue},{x:600,t:"Network",a:"A",b:"A",c:amber}].map((o,i)=><g key={o.t}><text x={o.x} y="42" textAnchor="middle" fill={o.c} fontWeight="700">{o.t}</text><circle cx={o.x-35} cy="145" r="30" fill="none" stroke={o.c} strokeWidth="3"/><circle cx={o.x+35} cy="145" r="30" fill="none" stroke={o.c} strokeWidth="3"/><text x={o.x-35} y="151" textAnchor="middle" fill={zinc}>{o.a}</text><text x={o.x+35} y="151" textAnchor="middle" fill={zinc}>{o.b}</text><line x1={o.x-5} y1="145" x2={o.x+5} y2="145" stroke={o.c} strokeWidth={i===3?"6":"2"} strokeDasharray={i<2?"5 5":undefined}/><text x={o.x} y="250" textAnchor="middle" fill={zinc} fontSize="12">{["Coulomb attraction","Intermolecular forces","Delocalized electrons","Directional covalent bonds"][i]}</text></g>)}</svg></VisualFrame>;
  if (["unitcell","sharing","dimensions"].includes(kind)) return <VisualFrame title="Unit cell, boundary sharing and translation"><svg {...base}><CubeWire/><g>{[[150,70],[300,70],[300,220],[150,220],[205,15],[355,15],[355,165],[205,165]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="10" fill={cyan}/>)}</g><circle cx="252.5" cy="117.5" r="12" fill={violet}/><circle cx="225" cy="45" r="9" fill={amber}/><text x="500" y="90" fill={cyan} fontWeight="700">Corner: 1/8</text><text x="500" y="130" fill={amber} fontWeight="700">Face centre: 1/2</text><text x="500" y="170" fill={violet} fontWeight="700">Body centre: 1</text><line x1="115" y1="285" x2="385" y2="285" stroke={blue} strokeWidth="3"/><path d="M385 285 l-15 -8 v16 z" fill={blue}/><text x="250" y="320" textAnchor="middle" fill={zinc}>Translation reproduces the cell</text></svg></VisualFrame>;
  if (kind === "bravais") return <VisualFrame title="Seven metric systems and allowed centring"><svg {...base}>{["Cubic","Tetragonal","Orthorhombic","Hexagonal","Trigonal","Monoclinic","Triclinic"].map((t,i)=>{const x=70+(i%4)*170,y=50+Math.floor(i/4)*150;return <g key={t} transform={`translate(${x},${y})`}><path d={i===3?"M10 65 L40 15 L95 15 L125 65 L95 115 L40 115 Z":i>=5?"M15 105 L25 20 L105 5 L125 90 Z":"M15 105 L15 25 L100 25 L100 105 Z"} fill="none" stroke={[cyan,blue,violet,amber,rose,cyan,violet][i]} strokeWidth="2"/><text x="70" y="135" textAnchor="middle" fill={zinc} fontSize="12">{t}</text></g>})}</svg></VisualFrame>;
  if (kind === "symmetry") return <VisualFrame title="Symmetry elements of a cube"><svg {...base}><CubeWire x={210} y={95} s={170} d={60} stroke={violet}/><polygon points="210,95 380,95 440,35 270,35" fill={cyan} opacity=".16" stroke={cyan}/><polygon points="210,95 380,265 440,205 270,35" fill={rose} opacity=".13" stroke={rose}/><line x1="325" y1="5" x2="325" y2="310" stroke={amber} strokeWidth="3" strokeDasharray="8 6"/><circle cx="325" cy="150" r="8" fill={cyan}/><text x="535" y="75" fill={amber}>C₄ axes: 3</text><text x="535" y="115" fill={cyan}>Mirror planes: 9</text><text x="535" y="155" fill={rose}>C₃ axes: 4</text><text x="535" y="195" fill={violet}>C₂ axes: 6</text><text x="535" y="235" fill={zinc}>Inversion centre: 1</text></svg></VisualFrame>;
  if (["cubic","density","stoich"].includes(kind)) return <VisualFrame title="SC, BCC and FCC contact geometry"><svg {...base}>{[0,1,2].map((cell,i)=><g key={i} transform={`translate(${40+i*235},20) scale(.62)`}><CubeWire x={45} y={120} s={190} d={65} stroke={[cyan,violet,amber][i]}/>{[[45,120],[235,120],[235,310],[45,310],[110,55],[300,55],[300,245],[110,245]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="13" fill={[cyan,violet,amber][i]}/>)}{i===1&&<circle cx="172" cy="182" r="17" fill={rose}/>} {i===2&&[[140,120],[235,215],[140,310],[45,215],[205,55],[300,150],[205,245],[110,150]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="16" fill={rose}/>)}<text x="170" y="360" textAnchor="middle" fill={zinc} fontSize="24">{["SC: a=2r","BCC: √3a=4r","FCC: √2a=4r"][i]}</text></g>)}</svg></VisualFrame>;
  if (kind === "neighbours") return <VisualFrame title="Successive coordination shells"><svg {...base}><circle cx="260" cy="180" r="16" fill={rose}/>{[[0,1],[1,0],[0,-1],[-1,0]].map((q,i)=><circle key={i} cx={260+q[0]*70} cy={180+q[1]*70} r="13" fill={cyan}/>)}{[[1,1],[1,-1],[-1,1],[-1,-1]].map((q,i)=><circle key={i} cx={260+q[0]*70} cy={180+q[1]*70} r="12" fill={violet}/>)}<circle cx="260" cy="180" r="72" fill="none" stroke={cyan} strokeDasharray="5 6"/><circle cx="260" cy="180" r="100" fill="none" stroke={violet} strokeDasharray="5 6"/><text x="480" y="135" fill={cyan}>First shell: shortest vectors</text><text x="480" y="180" fill={violet}>Second shell: next distance</text><text x="480" y="225" fill={zinc}>Count all symmetry-equivalent sites</text></svg></VisualFrame>;
  if (kind === "packing") return <VisualFrame title="Square and hexagonal packing"><svg {...base}>{[0,1].map(side=><g key={side} transform={`translate(${side*360},0)`}><text x="180" y="35" textAnchor="middle" fill={side?amber:cyan} fontWeight="700">{side?"Hexagonal layer":"Square layer"}</text>{Array.from({length:30},(_,i)=>{const r=Math.floor(i/6),c=i%6;return <circle key={i} cx={55+c*50+(side&&r%2?25:0)} cy={80+r*50} r="23" fill="none" stroke={side?amber:cyan} strokeWidth="2"/>})}<text x="180" y="335" textAnchor="middle" fill={zinc}>{side?"CN=6, area fraction π/(2√3)":"CN=4, area fraction π/4"}</text></g>)}</svg></VisualFrame>;
  if (kind === "stacking") return <VisualFrame title="ABAB and ABCABC close-packed sequences"><svg {...base}>{[0,1].map(side=><g key={side} transform={`translate(${side*360},0)`}>{[0,1,2,3].map((layer,l)=><g key={l}>{Array.from({length:5},(_,i)=><circle key={i} cx={70+i*52+((l%2)*26)+(side&&l===2?26:0)} cy={280-l*58} r="23" fill="none" stroke={[cyan,violet,side?rose:cyan,side?violet:violet][l]} strokeWidth="3"/>)}<text x="35" y={287-l*58} fill={[cyan,violet,side?rose:cyan,side?violet:violet][l]}>{side?["A","B","C","A"][l]:["A","B","A","B"][l]}</text></g>)}<text x="180" y="35" textAnchor="middle" fill={side?rose:cyan} fontWeight="700">{side?"CCP / FCC":"HCP"}</text></g>)}</svg></VisualFrame>;
  if (kind === "voids") return <VisualFrame title="Tetrahedral and octahedral holes"><svg {...base}><g transform="translate(65,50)">{[[130,25],[45,190],[215,190],[130,135]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="28" fill="none" stroke={cyan} strokeWidth="3"/>)}{[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]].map(([a,b],i)=>{const p=[[130,25],[45,190],[215,190],[130,135]];return <line key={i} x1={p[a][0]} y1={p[a][1]} x2={p[b][0]} y2={p[b][1]} stroke={cyan} opacity=".5"/>})}<circle cx="130" cy="125" r="10" fill={rose}/><text x="130" y="260" textAnchor="middle" fill={zinc}>Tetrahedral hole: CN 4</text></g><g transform="translate(395,35)">{[[130,15],[130,235],[20,125],[240,125],[65,65],[195,185]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="25" fill="none" stroke={violet} strokeWidth="3"/>)}<circle cx="130" cy="125" r="11" fill={amber}/><text x="130" y="280" textAnchor="middle" fill={zinc}>Octahedral hole: CN 6</text></g></svg></VisualFrame>;
  if (kind === "radius") return <VisualFrame title="Limiting radius ratios"><svg {...base}>{[{x:130,n:3,r:"0.155"},{x:300,n:4,r:"0.225"},{x:470,n:6,r:"0.414"},{x:630,n:8,r:"0.732"}].map((o,idx)=><g key={o.n}><circle cx={o.x} cy="170" r={10+idx*4} fill={rose}/>{Array.from({length:o.n},(_,i)=>{const a=2*Math.PI*i/o.n;return <circle key={i} cx={o.x+70*Math.cos(a)} cy={170+70*Math.sin(a)} r="24" fill="none" stroke={[cyan,violet,amber,blue][idx]} strokeWidth="2"/>})}<text x={o.x} y="285" textAnchor="middle" fill={zinc}>CN {o.n}</text><text x={o.x} y="315" textAnchor="middle" fill={[cyan,violet,amber,blue][idx]}>{o.r}</text></g>)}</svg></VisualFrame>;
  if (kind === "structures") return <VisualFrame title="Canonical structure types"><svg {...base}>{["NaCl 6:6","CsCl 8:8","ZnS 4:4","CaF₂ 8:4"].map((t,i)=><g key={t} transform={`translate(${30+i*175},25) scale(.45)`}><CubeWire x={45} y={150} s={220} d={70} stroke={[cyan,violet,amber,blue][i]}/>{[[45,150],[265,150],[265,370],[45,370],[115,80],[335,80],[335,300],[115,300]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="18" fill={[cyan,violet,amber,blue][i]}/>)}{i===1&&<circle cx="190" cy="225" r="23" fill={rose}/>} {i===0&&[[155,150],[265,260],[155,370],[45,260],[225,80],[335,190],[225,300],[115,190],[190,225]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="16" fill={rose}/>)}{i===2&&[[100,135],[210,135],[100,245],[210,245]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="18" fill={rose}/>)}{i===3&&[[100,135],[210,135],[100,245],[210,245],[155,190],[265,190],[155,300],[265,300]].map((p,j)=><circle key={j} cx={p[0]} cy={p[1]} r="16" fill={rose}/>)}<text x="190" y="435" textAnchor="middle" fill={zinc} fontSize="28">{t}</text></g>)}</svg></VisualFrame>;
  if (kind === "defects") return <VisualFrame title="Vacancy, interstitial and charge-compensating defects"><svg {...base}>{Array.from({length:35},(_,i)=>{const r=Math.floor(i/7),c=i%7;const missing=i===17;return missing?null:<circle key={i} cx={90+c*58} cy={70+r*55} r="16" fill={(r+c)%2?cyan:violet} opacity=".9"/>})}<circle cx="500" cy="160" r="12" fill={amber}/><circle cx="264" cy="180" r="22" fill="none" stroke={rose} strokeDasharray="5 4"/><text x="500" y="195" textAnchor="middle" fill={amber}>interstitial</text><text x="264" y="220" textAnchor="middle" fill={rose}>vacancy</text><circle cx="610" cy="105" r="24" fill="none" stroke={cyan}/><text x="610" y="111" textAnchor="middle" fill={zinc}>e⁻</text><text x="610" y="155" textAnchor="middle" fill={cyan}>F-centre</text></svg></VisualFrame>;
  if (kind === "bands") return <VisualFrame title="Bands, gaps and dopant levels"><svg {...base}><rect x="90" y="55" width="210" height="70" rx="8" fill={blue} opacity=".35"/><rect x="90" y="235" width="210" height="70" rx="8" fill={violet} opacity=".4"/><text x="195" y="95" textAnchor="middle" fill={zinc}>Conduction band</text><text x="195" y="275" textAnchor="middle" fill={zinc}>Valence band</text><line x1="65" y1="125" x2="65" y2="235" stroke={amber} strokeWidth="3"/><text x="45" y="185" textAnchor="middle" fill={amber} transform="rotate(-90 45 185)">E_g</text><path d="M195 230 Q250 180 195 130" fill="none" stroke={rose} strokeWidth="3" markerEnd="url(#arr)"/><rect x="420" y="205" width="190" height="16" fill={rose}/><rect x="420" y="140" width="190" height="16" fill={cyan}/><text x="515" y="125" textAnchor="middle" fill={cyan}>donor level</text><text x="515" y="250" textAnchor="middle" fill={rose}>acceptor level</text><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={rose}/></marker></defs></svg></VisualFrame>;
  if (kind === "magnetism") return <VisualFrame title="Spin arrangements"><svg {...base}>{["Paramagnetic","Ferromagnetic","Antiferromagnetic","Ferrimagnetic"].map((t,i)=><g key={t} transform={`translate(${15+i*175},0)`}><text x="85" y="35" textAnchor="middle" fill={[cyan,rose,violet,amber][i]} fontWeight="700" fontSize="13">{t}</text>{Array.from({length:16},(_,j)=>{const r=Math.floor(j/4),c=j%4;const up=i===0?((j*7)%3!==0):i===1?true:i===2?((r+c)%2===0):((r+c)%2===0);const len=i===3&&!up?18:30;return <g key={j}><circle cx={30+c*37} cy={75+r*55} r="9" fill="none" stroke={[cyan,rose,violet,amber][i]}/><line x1={30+c*37} y1={75+r*55} x2={30+c*37} y2={75+r*55+(up?-len:len)} stroke={[cyan,rose,violet,amber][i]} strokeWidth="2"/><path d={up?`M${25+c*37},${50+r*55} L${30+c*37},${42+r*55} L${35+c*37},${50+r*55}`:`M${25+c*37},${100+r*55} L${30+c*37},${108+r*55} L${35+c*37},${100+r*55}`} fill="none" stroke={[cyan,rose,violet,amber][i]}/></g>})}</g>)}</svg></VisualFrame>;
  if (kind === "fractional") return <VisualFrame title="Fractional coordinates inside a unit cell"><svg {...base}><CubeWire x={170} y={100} s={210} d={70} stroke={cyan}/><circle cx="170" cy="100" r="10" fill={amber}/><circle cx="292.5" cy="187.5" r="13" fill={rose}/><line x1="170" y1="100" x2="292.5" y2="187.5" stroke={rose} strokeDasharray="6 5"/><text x="145" y="90" fill={amber}>(0,0,0)</text><text x="305" y="182" fill={rose}>(¼,¼,¼)</text><text x="495" y="115" fill={zinc}>r = xa + yb + zc</text><text x="495" y="160" fill={cyan}>integer shifts are equivalent</text><text x="495" y="205" fill={violet}>basis repeats at every lattice point</text></svg></VisualFrame>;
  if (kind === "miller") return <VisualFrame title="Miller plane construction"><svg {...base}><CubeWire x={180} y={100} s={210} d={70} stroke={cyan}/><polygon points="180,250 390,145 460,75 250,180" fill={violet} opacity=".25" stroke={violet} strokeWidth="2"/><line x1="150" y1="300" x2="500" y2="300" stroke={amber}/><line x1="150" y1="300" x2="85" y2="215" stroke={amber}/><line x1="150" y1="300" x2="150" y2="45" stroke={amber}/><text x="515" y="305" fill={amber}>x</text><text x="70" y="210" fill={amber}>y</text><text x="145" y="35" fill={amber}>z</text><text x="535" y="120" fill={zinc}>intercepts → reciprocals</text><text x="535" y="165" fill={violet}>clear fractions → (hkl)</text></svg></VisualFrame>;
  if (kind === "bragg") return <VisualFrame title="Bragg path difference"><svg {...base}>{[100,180,260].map((y,i)=><line key={i} x1="70" y1={y} x2="650" y2={y} stroke={violet} strokeWidth="2"/>)}<line x1="80" y1="20" x2="320" y2="180" stroke={cyan} strokeWidth="3"/><line x1="320" y1="180" x2="610" y2="20" stroke={cyan} strokeWidth="3"/><line x1="190" y1="20" x2="430" y2="180" stroke={amber} strokeWidth="3"/><line x1="430" y1="180" x2="670" y2="45" stroke={amber} strokeWidth="3"/><line x1="320" y1="100" x2="320" y2="180" stroke={rose} strokeDasharray="5 4"/><text x="340" y="145" fill={rose}>d</text><text x="365" y="80" fill={zinc}>path difference = 2d sinθ</text><text x="365" y="320" textAnchor="middle" fill={cyan} fontWeight="700">nλ = 2d sinθ</text></svg></VisualFrame>;
  if (kind === "polyhedra") return <VisualFrame title="Coordination polyhedra and connectivity"><svg {...base}><g transform="translate(55,30)">{[[120,20],[30,185],[210,185],[120,120]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="12" fill={cyan}/>)}{[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]].map(([a,b],i)=>{const p=[[120,20],[30,185],[210,185],[120,120]];return <line key={i} x1={p[a][0]} y1={p[a][1]} x2={p[b][0]} y2={p[b][1]} stroke={cyan}/>})}<circle cx="120" cy="115" r="8" fill={rose}/><text x="120" y="245" textAnchor="middle" fill={zinc}>MX₄ tetrahedron</text></g><g transform="translate(360,30)">{[[120,15],[120,215],[20,115],[220,115],[55,50],[185,180]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="12" fill={violet}/>)}{[[0,2],[0,3],[0,4],[2,5],[3,4],[1,2],[1,3],[1,5]].map(([a,b],i)=>{const p=[[120,15],[120,215],[20,115],[220,115],[55,50],[185,180]];return <line key={i} x1={p[a][0]} y1={p[a][1]} x2={p[b][0]} y2={p[b][1]} stroke={violet}/>})}<circle cx="120" cy="115" r="8" fill={amber}/><text x="120" y="245" textAnchor="middle" fill={zinc}>MX₆ octahedron</text></g></svg></VisualFrame>;
  if (kind === "madelung") return <VisualFrame title="Alternating electrostatic shells"><svg {...base}>{Array.from({length:49},(_,i)=>{const r=Math.floor(i/7),c=i%7;const plus=(r+c)%2===0;return <g key={i}><circle cx={120+c*70} cy={50+r*45} r="17" fill="none" stroke={plus?cyan:rose}/><text x={120+c*70} y={56+r*45} textAnchor="middle" fill={plus?cyan:rose}>{plus?"+":"−"}</text></g>})}<circle cx="330" cy="185" r="28" fill="#08121d" stroke={amber} strokeWidth="3"/><text x="330" y="191" textAnchor="middle" fill={amber}>M</text><text x="600" y="70" fill={zinc}>Unlike-ion shells attract</text><text x="600" y="115" fill={zinc}>Like-ion shells repel</text><text x="600" y="160" fill={amber}>Madelung sum gives net geometry</text></svg></VisualFrame>;
  if (kind === "transport") return <VisualFrame title="Vacancy-assisted hopping pathway"><svg {...base}>{Array.from({length:40},(_,i)=>{const r=Math.floor(i/8),c=i%8;const missing=i===20;return missing?null:<circle key={i} cx={75+c*72} cy={65+r*55} r="17" fill={(r+c)%2?cyan:violet}/>})}<circle cx="75+3*72" cy={65+2*55} r="25" fill="none" stroke={rose} strokeDasharray="5 4"/><path d="M219 175 C245 140 265 140 291 175" fill="none" stroke={amber} strokeWidth="4" markerEnd="url(#hop)"/><defs><marker id="hop" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={amber}/></marker></defs><text x="500" y="310" fill={zinc}>connected vacancies enable long-range migration</text></svg></VisualFrame>;
  if (kind === "junction") return <VisualFrame title="p–n junction and depletion region"><svg {...base}><rect x="70" y="60" width="250" height="230" rx="12" fill={rose} opacity=".16" stroke={rose}/><rect x="400" y="60" width="250" height="230" rx="12" fill={cyan} opacity=".16" stroke={cyan}/><rect x="320" y="60" width="80" height="230" fill={amber} opacity=".15"/><text x="190" y="40" textAnchor="middle" fill={rose} fontWeight="700">p-type: holes</text><text x="525" y="40" textAnchor="middle" fill={cyan} fontWeight="700">n-type: electrons</text>{Array.from({length:10},(_,i)=><text key={`h${i}`} x={105+(i%5)*40} y={105+Math.floor(i/5)*100} fill={rose} fontSize="24">○</text>)}{Array.from({length:10},(_,i)=><text key={`e${i}`} x={435+(i%5)*40} y={105+Math.floor(i/5)*100} fill={cyan} fontSize="20">−</text>)}<text x="360" y="185" textAnchor="middle" fill={amber} transform="rotate(-90 360 185)">depletion region</text></svg></VisualFrame>;
  if (kind === "superconductor") return <VisualFrame title="Meissner flux exclusion"><svg {...base}>{Array.from({length:11},(_,i)=>{const x=70+i*58;return <path key={i} d={`M${x} 30 C${x-50} 110 ${x-50} 250 ${x} 330`} fill="none" stroke={blue} opacity=".65"/>})}<circle cx="360" cy="180" r="105" fill="#102a2b" stroke={cyan} strokeWidth="4"/><path d="M260 95 C180 125 180 235 260 265" fill="none" stroke={blue} strokeWidth="4"/><path d="M460 95 C540 125 540 235 460 265" fill="none" stroke={blue} strokeWidth="4"/><text x="360" y="185" textAnchor="middle" fill={cyan} fontWeight="700">B ≈ 0</text><text x="360" y="320" textAnchor="middle" fill={zinc}>magnetic field bends around the superconducting bulk</text></svg></VisualFrame>;
  return <VisualFrame title="Problem-solving map"><svg {...base}>{["Identify lattice","Locate contact line","Count particles / holes","Apply geometry","Check units & neutrality"].map((t,i)=><g key={t}><rect x={45+i*133} y="125" width="112" height="80" rx="14" fill="none" stroke={[cyan,blue,violet,amber,rose][i]} strokeWidth="2"/><text x={101+i*133} y="158" textAnchor="middle" fill={zinc} fontSize="12"><tspan x={101+i*133}>{t.split(" ").slice(0,2).join(" ")}</tspan><tspan x={101+i*133} dy="18">{t.split(" ").slice(2).join(" ")}</tspan></text>{i<4&&<path d={`M${157+i*133} 165 L${174+i*133} 165`} stroke={zinc} markerEnd="url(#sarr)"/>}</g>)}<defs><marker id="sarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={zinc}/></marker></defs></svg></VisualFrame>;
}

function CorePart({ part }: { part: Part }) {
  return (
    <article id={`part-${part.part}`} className="scroll-mt-24 space-y-6 border-t border-white/10 pt-12">
      <header className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-violet-400/[0.04] to-transparent p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Core {String(part.part).padStart(2,"0")}</span><span className="text-xs text-zinc-400">Source mapping: {part.sourcePages}</span></div>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">{part.title}</h2>
        <p className="mt-4 max-w-4xl leading-7 text-zinc-300">{part.intro}</p>
      </header>
      <GeometryVisual kind={VISUAL_FOR_PART[part.part]} />
      {part.sections.map((s) => <SectionCard key={s.title} title={s.title}>{s.blocks.map((b,i)=><BlockView key={`${s.title}-${i}`} block={b}/>)}</SectionCard>)}
      <SectionCard title="JEE Advanced traps and edge cases"><ul className="list-disc space-y-2 pl-5 marker:text-rose-300">{part.traps.map((t)=><li key={t}>{t}</li>)}</ul></SectionCard>
      <SectionCard title="Modified solved examples"><div className="space-y-4">{part.examples.map((e,i)=><ExampleCard key={e.title} example={e} index={i+1}/>)}</div></SectionCard>
    </article>
  );
}

function EnrichmentPart({ item, index }: { item: Enrichment; index: number }) {
  return (
    <article id={item.id} className="scroll-mt-24 space-y-6 border-t border-white/10 pt-12">
      <header className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-400/10 via-cyan-400/[0.035] to-transparent p-6 md:p-8"><span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-violet-200">Advanced extension {index+1}</span><h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">{item.title.replace(/^Advanced Extension \d+ — /,"")}</h2><p className="mt-4 max-w-4xl leading-7 text-zinc-300">{item.intro}</p></header>
      <GeometryVisual kind={item.visual}/>
      <SectionCard title="Deep theory">{item.paragraphs.map((p)=><p key={p}>{p}</p>)}</SectionCard>
      <SectionCard title="Key equations and structural statements">{item.formulae.map((f)=><Formula key={f}>{f}</Formula>)}</SectionCard>
      <SectionCard title="Original worked example"><ExampleCard index={1} example={{title:"Advanced worked example",...item.example}}/></SectionCard>
    </article>
  );
}

function SourceCoverage() {
  return (
    <SectionCard title="89-page source coverage audit" id="source-audit">
      <p>Every page is assigned to a core module. The detailed paraphrased treatment appears in the module itself; this audit prevents silent page loss.</p>
      <details className="rounded-2xl border border-white/10 bg-black/20 p-4"><summary className="cursor-pointer font-semibold text-cyan-200">Open page-by-page map (1–89)</summary><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{PAGE_AUDIT.map((x)=><div key={x.page} className="rounded-xl border border-white/10 bg-white/[0.025] p-3"><div className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Page {x.page}</div><p className="mt-1 text-xs leading-5 text-zinc-400">{x.topic}</p></div>)}</div></details>
    </SectionCard>
  );
}

export default function SolidStateMasterJEEAdvanced() {
  const coreExampleCount = CORE_PARTS.reduce((n,p)=>n+p.examples.length,0);
  return (
    <main data-master-solid-state="89-plus-advanced" className="min-h-screen bg-[radial-gradient(circle_at_15%_0%,rgba(0,245,212,.10),transparent_28%),radial-gradient(circle_at_85%_8%,rgba(155,93,229,.12),transparent_30%),linear-gradient(#0b0f19,#080b12)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <header className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#0d1724]/95 p-7 shadow-[0_28px_90px_rgba(0,0,0,.38)] md:p-12">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:32px_32px]"/>
          <div className="relative"><p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Synergic Bond · JEE Advanced Physical Chemistry</p><h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">Solid State — Coverage-Complete Geometry Master</h1><p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300 md:text-lg">A single deployable chapter that follows all 89 source pages, preserves every major derivation, table, structure, defect model and property sequence, and adds an original advanced extension built from authoritative solid-state chemistry and physical-chemistry concepts.</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["89","source pages mapped"],[String(CORE_PARTS.length),"core modules"],[String(coreExampleCount+ENRICHMENT.length),"worked examples"],["24+","inline geometry figures"]].map(([a,b])=><div key={b} className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="text-2xl font-black text-cyan-200">{a}</div><div className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{b}</div></div>)}</div><div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-4 text-sm leading-7 text-zinc-300"><strong className="text-amber-200">Editorial standard:</strong> source material is rewritten and corrected rather than reproduced verbatim. The advanced extension is independently authored; printed page count will vary with viewport and browser print settings.</div></div>
        </header>

        <nav className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#0b0f19]/90 p-3 backdrop-blur-xl"><div className="flex min-w-max gap-2"><a href="#source-audit" className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-cyan-400/30 hover:text-cyan-200">89-page audit</a>{CORE_PARTS.map((p)=><a key={p.part} href={`#part-${p.part}`} className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-cyan-400/30 hover:text-cyan-200">{p.part}</a>)}<a href="#advanced-extension" className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-2 text-xs font-semibold text-violet-200">Advanced extension</a></div></nav>

        <div className="mt-8 space-y-8"><SourceCoverage/><SectionCard title="How to use this master chapter"><div className="grid gap-4 md:grid-cols-3">{[["First pass","Read theory and inspect every geometry figure."],["Second pass","Re-derive contact equations, packing fractions, void counts and density relations without looking."],["Third pass","Solve the modified examples, then audit traps and edge cases."]].map(([h,p])=><div key={h} className="rounded-2xl border border-white/10 bg-black/20 p-4"><h3 className="font-semibold text-white">{h}</h3><p className="mt-2 text-sm text-zinc-400">{p}</p></div>)}</div></SectionCard></div>

        <div className="mt-14 space-y-14">{CORE_PARTS.map((p)=><CorePart key={p.part} part={p}/>)}</div>

        <section id="advanced-extension" className="mt-20 scroll-mt-24 rounded-[2rem] border border-violet-400/20 bg-violet-400/[0.055] p-7 md:p-10"><p className="text-xs font-black uppercase tracking-[0.25em] text-violet-200">Original textbook-depth expansion</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Advanced Structural Chemistry Extension</h2><p className="mt-4 max-w-4xl leading-8 text-zinc-300">These modules go beyond the source sequence while remaining connected to JEE Advanced problem solving. They include diffraction, fractional coordinates, polyhedral descriptions, defect thermodynamics, semiconductor technology and deeper magnetic reasoning.</p></section>
        <div className="mt-14 space-y-14">{ENRICHMENT.map((e,i)=><EnrichmentPart key={e.id} item={e} index={i}/>)}</div>

        <section className="mt-16 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.045] p-7 md:p-10"><h2 className="text-3xl font-black tracking-tight text-white">Final master checklist</h2><div className="mt-6 grid gap-3 md:grid-cols-2">{["All 89 source pages assigned and represented","Crystalline/amorphous/polycrystalline classification","Lattice, basis, unit cell, crystal systems and Bravais lattices","Cube symmetry, Z, neighbour shells and density","SC/BCC/FCC contact geometry and packing","HCP/CCP stacking, void locations and counts","Radius-ratio derivations and limitations","NaCl, CsCl, ZnS, wurtzite, fluorite, antifluorite, corundum and diamond","Stoichiometric, non-stoichiometric and impurity defects","Bands, doping, p–n junctions and superconductivity","Diamagnetism, paramagnetism, ferro/antiferro/ferrimagnetism","Miller indices, Bragg law and structural evidence"].map((x)=><div key={x} className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-zinc-300"><span className="text-emerald-300">✓</span><span>{x}</span></div>)}</div></section>
      </div>
    </main>
  );
}
