import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 02 — Crystal Systems, Symmetry and Cubic Geometry | Synergic Bond", description: "Pages 10–20: dimensional lattices, seven crystal systems, fourteen Bravais lattices, cube symmetry, contact relations, neighbour distances and density." };

const data = {
  "part": 2,
  "title": "Crystal Systems, Symmetry and Cubic Geometry",
  "subtitle": "Pages 10–20: dimensional lattices, seven crystal systems, fourteen Bravais lattices, cube symmetry, contact relations, neighbour distances and density.",
  "sourcePages": "Pages 10–20",
  "overview": "This part rebuilds the entire geometrical spine of the chapter. Every relation is typeset and derived rather than shown as plain text.",
  "modules": [
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
    }
  ],
  "sourceSections": [
    {
      "title": "Seven crystal systems and fourteen Bravais lattices",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "System",
            "Axial relations",
            "Angular relations",
            "Allowed Bravais types"
          ],
          "rows": [
            [
              "Cubic",
              "$a=b=c$",
              "$\\alpha=\\beta=\\gamma=90^\\circ$",
              "P, I, F"
            ],
            [
              "Tetragonal",
              "$a=b\\ne c$",
              "$90^\\circ$",
              "P, I"
            ],
            [
              "Orthorhombic",
              "$a\\ne b\\ne c$",
              "$90^\\circ$",
              "P, I, F, C"
            ],
            [
              "Hexagonal",
              "$a=b\\ne c$",
              "$\\alpha=\\beta=90^\\circ,\\gamma=120^\\circ$",
              "P"
            ],
            [
              "Trigonal/rhombohedral",
              "$a=b=c$",
              "$\\alpha=\\beta=\\gamma\\ne90^\\circ$",
              "R"
            ],
            [
              "Monoclinic",
              "$a\\ne b\\ne c$",
              "$\\alpha=\\gamma=90^\\circ,\\beta\\ne90^\\circ$",
              "P, C"
            ],
            [
              "Triclinic",
              "$a\\ne b\\ne c$",
              "$\\alpha\\ne\\beta\\ne\\gamma$",
              "P"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Count check",
          "text": "The total is $3+2+4+1+1+2+1=14$ Bravais lattices.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "Symmetry elements of a cube",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Element",
            "Count",
            "Description"
          ],
          "rows": [
            [
              "Planes of symmetry",
              "9",
              "3 axial + 6 diagonal"
            ],
            [
              "Axes of symmetry",
              "13",
              "3 four-fold + 4 three-fold + 6 two-fold"
            ],
            [
              "Centre of inversion",
              "1",
              "One central point"
            ],
            [
              "Total listed in KOHINOOR",
              "23",
              "9 planes + 13 axes + 1 centre"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Notation",
          "text": "A four-fold axis gives an indistinguishable configuration after rotation by $90^\\circ$; a three-fold axis after $120^\\circ$; a two-fold axis after $180^\\circ$.",
          "tone": "info"
        }
      ]
    },
    {
      "title": "Contact geometry of cubic cells",
      "blocks": [
        {
          "type": "derivation",
          "title": "Simple cubic",
          "lines": [
            "a=2r"
          ],
          "result": "r=\\frac a2"
        },
        {
          "type": "derivation",
          "title": "Body-centred cubic",
          "lines": [
            "\\sqrt3a=4r"
          ],
          "result": "r=\\frac{\\sqrt3}{4}a"
        },
        {
          "type": "derivation",
          "title": "Face-centred cubic",
          "lines": [
            "\\sqrt2a=4r"
          ],
          "result": "r=\\frac{a}{2\\sqrt2}=\\frac{\\sqrt2}{4}a"
        }
      ]
    },
    {
      "title": "Nearest-neighbour distance and coordination",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Lattice",
            "Nearest-neighbour distance",
            "Coordination number",
            "$Z$"
          ],
          "rows": [
            [
              "SC",
              "$a$",
              "6",
              "1"
            ],
            [
              "BCC",
              "$\\sqrt3a/2$",
              "8",
              "2"
            ],
            [
              "FCC",
              "$a/\\sqrt2$",
              "12",
              "4"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Successive neighbour shells must be distinguished from the first coordination shell. In an FCC lattice, for example, 12 nearest neighbours occur at $a/\\sqrt2$, 6 next-nearest neighbours at $a$, and further shells occur at larger vector lengths."
        }
      ]
    },
    {
      "title": "Density derivation",
      "blocks": [
        {
          "type": "derivation",
          "title": "Mass divided by cell volume",
          "lines": [
            "m_{\\rm cell}=\\frac{ZM}{N_A}",
            "V_{\\rm cell}=a^3"
          ],
          "result": "\\rho=\\frac{ZM}{N_Aa^3}"
        },
        {
          "type": "callout",
          "label": "Unit discipline",
          "text": "Convert picometres to centimetres before cubing: $1\\,\\mathrm{pm}=10^{-10}\\,\\mathrm{cm}$.",
          "tone": "trap"
        }
      ]
    }
  ],
  "enrichments": [
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
    }
  ],
  "figures": [
    "dimensional-lattices",
    "seven-systems",
    "bravais-lattices",
    "cube-elements",
    "sc-contact",
    "bcc-contact",
    "fcc-contact",
    "neighbour-shells",
    "density-cell",
    "bragg"
  ],
  "examples": [
    {
      "title": "FCC radius from cell edge",
      "question": "Copper is FCC with $a=361\\,\\mathrm{pm}$. Calculate $r$.",
      "steps": [
        "For FCC, $4r=\\sqrt2a$.",
        "$r=361/(2\\sqrt2)\\,\\mathrm{pm}$."
      ],
      "answer": "$r=127.6\\,\\mathrm{pm}$."
    },
    {
      "title": "BCC density",
      "question": "A BCC metal has $a=320\\,\\mathrm{pm}$ and molar mass $52.0\\,\\mathrm{g\\,mol^{-1}}$. Find its density.",
      "steps": [
        "Use $Z=2$.",
        "Convert $a=3.20\\times10^{-8}\\,\\mathrm{cm}$.",
        "Substitute into $\\rho=ZM/(N_Aa^3)$."
      ],
      "answer": "$\\rho\\approx5.27\\,\\mathrm{g\\,cm^{-3}}$."
    },
    {
      "title": "Interplanar spacing",
      "question": "For a cubic crystal with $a=400\\,\\mathrm{pm}$, find $d_{211}$.",
      "steps": [
        "Use $d_{hkl}=a/\\sqrt{h^2+k^2+l^2}$.",
        "$d_{211}=400/\\sqrt6$."
      ],
      "answer": "$d_{211}=163.3\\,\\mathrm{pm}$."
    },
    {
      "title": "Allowed FCC reflection",
      "question": "Which of (100), (110), (111), (210) is an allowed first-order FCC reflection?",
      "steps": [
        "FCC reflections require $h,k,l$ all odd or all even.",
        "Only (111) has all odd indices."
      ],
      "answer": "(111) is allowed."
    }
  ],
  "ncertExamples": [
    {
      "title": "Atoms in conventional cells",
      "question": "State $Z$ for SC, BCC and FCC.",
      "steps": [
        "SC: $8\\times1/8=1$.",
        "BCC: $1+1=2$.",
        "FCC: $1+6\\times1/2=4$."
      ],
      "answer": "$Z_{SC}=1$, $Z_{BCC}=2$, $Z_{FCC}=4$."
    },
    {
      "title": "Density trend",
      "question": "Two metals have the same $a$ and molar mass; one is BCC and one FCC. Which is denser?",
      "steps": [
        "Density is proportional to $Z$ when $M$ and $a$ are fixed.",
        "$Z_{FCC}=4$ and $Z_{BCC}=2$."
      ],
      "answer": "The FCC metal is twice as dense under the stated conditions."
    }
  ],
  "pageAudit": [
    {
      "page": 10,
      "topic": "One-, two- and three-dimensional lattices; seven systems and fourteen Bravais lattices"
    },
    {
      "page": 11,
      "topic": "One-, two- and three-dimensional lattices; seven systems and fourteen Bravais lattices"
    },
    {
      "page": 12,
      "topic": "One-, two- and three-dimensional lattices; seven systems and fourteen Bravais lattices"
    },
    {
      "page": 13,
      "topic": "One-, two- and three-dimensional lattices; seven systems and fourteen Bravais lattices"
    },
    {
      "page": 14,
      "topic": "One-, two- and three-dimensional lattices; seven systems and fourteen Bravais lattices"
    },
    {
      "page": 15,
      "topic": "Cube symmetry elements and effective lattice-point count"
    },
    {
      "page": 16,
      "topic": "Cube symmetry elements and effective lattice-point count"
    },
    {
      "page": 17,
      "topic": "Cube symmetry elements and effective lattice-point count"
    },
    {
      "page": 18,
      "topic": "SC/BCC/FCC contact geometry, neighbour distance and density"
    },
    {
      "page": 19,
      "topic": "SC/BCC/FCC contact geometry, neighbour distance and density"
    },
    {
      "page": 20,
      "topic": "SC/BCC/FCC contact geometry, neighbour distance and density"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
