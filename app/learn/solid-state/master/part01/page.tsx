import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 01 — Foundations, Classification and Unit Cells | Synergic Bond", description: "Complete source treatment of pages 1–9: order, anisotropy, solid classes, lattice terminology, unit-cell sharing and centred cells." };

const data = {
  "part": 1,
  "title": "Foundations, Classification and Unit Cells",
  "subtitle": "Complete source treatment of pages 1–9: order, anisotropy, solid classes, lattice terminology, unit-cell sharing and centred cells.",
  "sourcePages": "Pages 1–9",
  "overview": "This part replaces the compressed opening of the old master. It preserves the full handwritten comparison, all classification data and the geometrical meaning of every lattice position before numerical crystal geometry begins.",
  "modules": [
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
    }
  ],
  "sourceSections": [
    {
      "title": "Complete classification of solids",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Class",
            "Constituent species",
            "Dominant interaction",
            "General properties",
            "Representative examples"
          ],
          "rows": [
            [
              "Ionic",
              "Cations and anions",
              "Coulombic attraction",
              "Hard, brittle, high melting; solid generally non-conducting; molten/aqueous conducting",
              "$\\mathrm{NaCl,\\ KCl,\\ KNO_3}$"
            ],
            [
              "Polar molecular",
              "Polar molecules",
              "Dipole–dipole forces",
              "Soft; moderate melting; electrical insulator",
              "$\\mathrm{NH_3,\\ SO_2,\\ HCl}$"
            ],
            [
              "Hydrogen-bonded molecular",
              "Molecules capable of H bonding",
              "Hydrogen bonding",
              "Higher melting than comparable molecular solids; usually insulating",
              "$\\mathrm{H_2O(s),\\ HF(s)}$"
            ],
            [
              "Non-polar molecular",
              "Atoms or non-polar molecules",
              "London dispersion",
              "Soft, low melting, insulating",
              "$\\mathrm{Ar,\\ H_2,\\ S_8,\\ P_4}$"
            ],
            [
              "Metallic",
              "Metal kernels + delocalised electrons",
              "Metallic bonding",
              "Malleable, ductile, lustrous; electronic conductor",
              "Fe, Cu, Ag"
            ],
            [
              "Covalent/network",
              "Atoms linked throughout a network",
              "Directional covalent bonds",
              "Very hard, high melting; usually insulating except graphite/semiconducting cases",
              "$\\mathrm{SiO_2,\\ Si,\\ C(diamond),\\ SiC,\\ B_4C}$"
            ]
          ]
        }
      ]
    },
    {
      "title": "Lattice, basis, motif and unit cell",
      "blocks": [
        {
          "type": "p",
          "text": "A crystal lattice is an infinite periodic array of equivalent mathematical points. A basis or motif is attached to each point. The physical crystal is therefore described by $\\text{lattice}+\\text{basis}$. A point may represent one atom, one ion, a molecular centre or a multi-atom motif."
        },
        {
          "type": "formula",
          "latex": "\\mathbf r=n_1\\mathbf a+n_2\\mathbf b+n_3\\mathbf c,\\qquad n_i\\in\\mathbb Z",
          "display": "Translation vector of a three-dimensional lattice"
        },
        {
          "type": "callout",
          "label": "Precision",
          "text": "A unit cell is a repeating geometrical region, not automatically the smallest cluster of atoms. A primitive unit cell contains exactly one lattice point, while a conventional cell may contain more to display symmetry clearly.",
          "tone": "trap"
        }
      ]
    },
    {
      "title": "Cube inventory and sharing fractions",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Geometrical position",
            "Number in a cube",
            "Number of cells sharing the position",
            "Contribution to one cell"
          ],
          "rows": [
            [
              "Corner",
              "8",
              "8",
              "$1/8$"
            ],
            [
              "Edge centre",
              "12",
              "4",
              "$1/4$"
            ],
            [
              "Face centre",
              "6",
              "2",
              "$1/2$"
            ],
            [
              "Body centre",
              "1",
              "1",
              "$1$"
            ],
            [
              "Point wholly inside",
              "variable",
              "1",
              "$1$"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "Z=\\frac{N_c}{8}+\\frac{N_e}{4}+\\frac{N_f}{2}+N_b+N_i",
          "display": "General site-counting expression"
        }
      ]
    },
    {
      "title": "Primitive and centred cells",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Cell symbol",
            "Additional lattice points",
            "Effective lattice points"
          ],
          "rows": [
            [
              "P",
              "Corners only",
              "$1$"
            ],
            [
              "I",
              "Body centre",
              "$2$"
            ],
            [
              "F",
              "All face centres",
              "$4$"
            ],
            [
              "C/A/B",
              "Centres of one pair of opposite faces",
              "$2$"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Common error",
          "text": "The corner spheres in BCC and FCC do not touch one another along an edge. Contact occurs along the body diagonal in BCC and face diagonal in FCC.",
          "tone": "trap"
        }
      ]
    }
  ],
  "enrichments": [],
  "figures": [
    "crystalline-amorphous",
    "polycrystal",
    "solid-classes",
    "lattice-basis",
    "cube-elements",
    "sharing-fractions",
    "cell-types"
  ],
  "examples": [
    {
      "title": "Contribution from mixed positions",
      "question": "A unit cell has atoms at all 8 corners, all 12 edge centres and one body centre. Find the effective number of atoms.",
      "steps": [
        "Corner contribution: $8\\times\\frac18=1$.",
        "Edge contribution: $12\\times\\frac14=3$.",
        "Body-centre contribution: $1$."
      ],
      "answer": "$Z=1+3+1=5$ atoms."
    },
    {
      "title": "Identify the motif",
      "question": "A lattice point in solid methane is placed at the molecular centre. What does one lattice point represent?",
      "steps": [
        "The lattice point marks an equivalent translational position.",
        "The basis attached to it is the whole methane molecule."
      ],
      "answer": "One point represents one $\\mathrm{CH_4}$ molecular motif, not one carbon atom."
    },
    {
      "title": "End-centred cell count",
      "question": "A conventional cell has corner points and centres of two opposite faces. Calculate the number of lattice points.",
      "steps": [
        "Corners contribute $8/8=1$.",
        "Two face centres contribute $2/2=1$."
      ],
      "answer": "The cell contains $2$ lattice points."
    }
  ],
  "ncertExamples": [
    {
      "title": "Crystalline versus amorphous",
      "question": "A solid softens gradually and fractures irregularly. Which structural class is favoured?",
      "steps": [
        "A melting range indicates absence of one sharp lattice melting temperature.",
        "Irregular fracture indicates no fixed cleavage planes."
      ],
      "answer": "The observations favour an amorphous solid."
    },
    {
      "title": "Graphite exception",
      "question": "Why is graphite electrically conducting although it is a covalent solid?",
      "steps": [
        "Each carbon forms three $\\sigma$ bonds in a sheet.",
        "The remaining $p$ electron forms a delocalised $\\pi$ system."
      ],
      "answer": "Delocalised electrons move along the layers, so graphite conducts anisotropically."
    }
  ],
  "pageAudit": [
    {
      "page": 1,
      "topic": "Crystalline, amorphous and polycrystalline solids; anisotropy, melting and fracture diagrams"
    },
    {
      "page": 2,
      "topic": "Crystalline, amorphous and polycrystalline solids; anisotropy, melting and fracture diagrams"
    },
    {
      "page": 3,
      "topic": "Ionic, molecular, metallic and covalent solids; lattice and lattice-point definitions"
    },
    {
      "page": 4,
      "topic": "Ionic, molecular, metallic and covalent solids; lattice and lattice-point definitions"
    },
    {
      "page": 5,
      "topic": "Ionic, molecular, metallic and covalent solids; lattice and lattice-point definitions"
    },
    {
      "page": 6,
      "topic": "Unit-cell geometry, particle sharing and primitive/centred unit cells"
    },
    {
      "page": 7,
      "topic": "Unit-cell geometry, particle sharing and primitive/centred unit cells"
    },
    {
      "page": 8,
      "topic": "Unit-cell geometry, particle sharing and primitive/centred unit cells"
    },
    {
      "page": 9,
      "topic": "Unit-cell geometry, particle sharing and primitive/centred unit cells"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
