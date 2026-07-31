export type NoteTone = "concept" | "exam" | "trap" | "result";

export type SolidStateBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "formula"; latex: string; note?: string }
  | { kind: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { kind: "note"; title: string; text: string; tone: NoteTone }
  | { kind: "derivation"; title: string; steps: { latex: string; text: string }[]; result: string }
  | { kind: "example"; title: string; question: string; steps: string[]; answer: string }
  | { kind: "figure"; id: string; caption: string };

export interface SolidStateSection { title: string; blocks: SolidStateBlock[] }
export interface SolidStatePart {
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  sections: SolidStateSection[];
  review: string[];
  practice: string[];
}

export const SOLID_STATE_PARTS: SolidStatePart[] = [
  {
    "number": 1,
    "title": "Nature of Solids, Crystal Lattices and Unit Cells",
    "shortTitle": "Foundations: Solids and Lattices",
    "description": "Structural order, classification of solids, anisotropy, lattice–basis language and the meaning of a unit cell.",
    "sections": [
      {
        "title": "1.1 The solid state and structural order",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A solid has a definite volume and resists shear because its constituent particles occupy positions around which only limited thermal motion is possible. The word constituent is deliberately broad: the repeating entities may be atoms, ions, molecules or extended covalent fragments. Solid-state chemistry therefore begins with the spatial order of these entities, not merely with the chemical formula."
          },
          {
            "kind": "figure",
            "id": "order",
            "caption": "Long-range translational order in a crystal compared with short-range order in an amorphous solid."
          },
          {
            "kind": "paragraph",
            "text": "In a crystalline solid, equivalent environments recur by translation through macroscopic distances. In an amorphous solid, the nearest-neighbour arrangement may be reproducible over a few interatomic distances, but no translation reproduces the entire structure over long range."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "Crystalline solid",
              "Amorphous solid"
            ],
            "rows": [
              [
                "Order",
                "Long-range periodic order",
                "Short-range order only"
              ],
              [
                "External form",
                "May develop regular faces when growth is unhindered",
                "No necessary geometrical form"
              ],
              [
                "Melting",
                "Sharp melting temperature for a pure, well-ordered crystal",
                "Softens through a temperature range"
              ],
              [
                "Heat of fusion",
                "Definite at the melting point",
                "No single sharply defined value"
              ],
              [
                "Cleavage",
                "Often along definite crystallographic planes",
                "Irregular fracture"
              ],
              [
                "X-ray diffraction",
                "Sharp Bragg reflections",
                "Broad diffuse maxima"
              ],
              [
                "Directional properties",
                "May be anisotropic",
                "Macroscopically isotropic in the ordinary case"
              ]
            ],
            "caption": "Macroscopic behaviour follows from microscopic order."
          },
          {
            "kind": "note",
            "title": "Do not confuse rigidity with crystallinity",
            "text": "Glass is rigid on an ordinary time scale but lacks long-range translational periodicity. Calling glass a ‘supercooled liquid’ is a historical simplification; for examination purposes, classify it as an amorphous solid.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "1.2 Anisotropy, isotropy and polycrystalline materials",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A physical property is anisotropic when its measured value depends on crystallographic direction. Electrical conductivity, refractive index, thermal expansion and mechanical strength may differ along different axes because the arrangement and bonding of particles differ with direction."
          },
          {
            "kind": "formula",
            "latex": "P_{[uvw]}\\neq P_{[u'v'w']}",
            "note": "A directional property $P$ can have different values along two crystal directions."
          },
          {
            "kind": "paragraph",
            "text": "A single crystal can display anisotropy clearly. A polycrystalline specimen contains many small crystallites or grains. If those grains are randomly oriented, their directional responses average out and the bulk specimen may appear isotropic. If processing produces preferred orientation, or texture, the bulk material can remain anisotropic."
          },
          {
            "kind": "table",
            "headers": [
              "Material",
              "Microscopic description",
              "Typical macroscopic response"
            ],
            "rows": [
              [
                "Single crystal",
                "One continuous orientation",
                "Anisotropy can be measured directly"
              ],
              [
                "Random polycrystal",
                "Many randomly oriented grains",
                "Approximately isotropic average"
              ],
              [
                "Textured polycrystal",
                "Many grains with preferred orientation",
                "Directional bulk properties"
              ],
              [
                "Amorphous solid",
                "No long-range periodic axes",
                "Usually isotropic"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Recognising polycrystalline averaging",
            "question": "A metal foil consists of many cubic crystallites with random orientations. One crystallite is elastically anisotropic. Must the foil show the same anisotropy?",
            "steps": [
              "The response of each grain depends on its orientation.",
              "Random orientations sample all directions statistically.",
              "The measured bulk response is therefore an orientational average, unless the foil has texture."
            ],
            "answer": "No. A random polycrystal may be macroscopically isotropic even though every grain is anisotropic."
          }
        ]
      },
      {
        "title": "1.3 Classification of crystalline solids by bonding",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The traditional classification identifies the particles at lattice sites and the dominant force that holds the crystal together. Real solids can have mixed bonding, so the categories are models rather than impermeable compartments."
          },
          {
            "kind": "table",
            "headers": [
              "Class",
              "Constituent particles",
              "Dominant interaction",
              "Characteristic properties",
              "Examples"
            ],
            "rows": [
              [
                "Ionic",
                "Cations and anions",
                "Electrostatic attraction",
                "Hard, brittle, high melting; insulating as solids but conducting when molten or dissolved",
                "NaCl, MgO, CaF$_2$"
              ],
              [
                "Molecular—non-polar",
                "Molecules or atoms",
                "London dispersion",
                "Soft, low melting, volatile",
                "Ar, I$_2$, solid CO$_2$"
              ],
              [
                "Molecular—polar",
                "Polar molecules",
                "Dipole–dipole forces",
                "Moderate melting; electrical insulators",
                "SO$_2$, HCl"
              ],
              [
                "Hydrogen-bonded molecular",
                "Molecules",
                "Hydrogen bonding",
                "Higher melting than comparable molecular solids",
                "Ice, urea"
              ],
              [
                "Covalent network",
                "Atoms connected throughout the lattice",
                "Directional covalent bonds",
                "Very hard, very high melting; usually non-conducting",
                "Diamond, SiC, SiO$_2$"
              ],
              [
                "Metallic",
                "Metal kernels and delocalised electrons",
                "Metallic bonding",
                "Malleable, ductile, lustrous, conducting",
                "Cu, Fe, Na"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Graphite is an important exception",
            "text": "Graphite is a covalent solid that conducts strongly within its layers because $\\pi$ electrons are delocalised. Its conductivity and mechanical properties are highly anisotropic.",
            "tone": "exam"
          },
          {
            "kind": "example",
            "title": "Bonding model from properties",
            "question": "A solid is soft, melts near room temperature and does not conduct in either the solid or liquid state. Which broad class is most likely?",
            "steps": [
              "Low melting and softness exclude a three-dimensional ionic or covalent network.",
              "Failure to conduct in the melt argues against a simple ionic solid.",
              "Weak intermolecular attractions are consistent with a molecular crystal."
            ],
            "answer": "A molecular solid is the most likely classification."
          }
        ]
      },
      {
        "title": "1.4 Lattice, basis and crystal structure",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A space lattice is an infinite periodic array of equivalent geometrical points. Every lattice point has the same surroundings as every other lattice point. A lattice point is not automatically an atom: it may represent an ion, a molecule, or the reference point of a multi-particle motif."
          },
          {
            "kind": "formula",
            "latex": "\\text{crystal structure}=\\text{lattice}+\\text{basis}",
            "note": "Attach the same basis, in the same orientation, to every lattice point."
          },
          {
            "kind": "paragraph",
            "text": "The basis or motif is the atom or group of atoms associated with each lattice point. Two crystals can possess the same Bravais lattice but different bases and therefore different structures. Conversely, a drawing that contains a point at the body centre is not necessarily a body-centred Bravais lattice; the corner and centre sites must be translationally equivalent."
          },
          {
            "kind": "figure",
            "id": "lattice-basis",
            "caption": "An abstract lattice point becomes a crystal structure only after a chemical basis is attached."
          },
          {
            "kind": "note",
            "title": "The CsCl test",
            "text": "In CsCl, a Cs$^+$ ion and a Cl$^-$ ion occupy corner and body-centre positions. Because the two positions are chemically different, translation by $(\\tfrac12,\\tfrac12,\\tfrac12)$ does not reproduce an equivalent point. CsCl is therefore not a BCC Bravais lattice.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "1.5 Unit cell and lattice parameters",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A unit cell is a finite region whose translations generate the entire lattice without gaps or overlaps. A primitive cell contains exactly one lattice point in total. A conventional cell may contain more than one lattice point because it is chosen to display symmetry more clearly."
          },
          {
            "kind": "paragraph",
            "text": "A three-dimensional unit cell is described by edge lengths $a$, $b$, $c$ and interaxial angles $\\u0007lpha$, $\\beta$, $\\gamma$. By convention, $\\u0007lpha$ is the angle between $b$ and $c$, $\\beta$ between $a$ and $c$, and $\\gamma$ between $a$ and $b$."
          },
          {
            "kind": "formula",
            "latex": "V_{cell}=abc\\sqrt{1+2\\cos\\alpha\\cos\\beta\\cos\\gamma-\\cos^2\\alpha-\\cos^2\\beta-\\cos^2\\gamma}"
          },
          {
            "kind": "paragraph",
            "text": "For an orthogonal cell, $\\u0007lpha=\\beta=\\gamma=90^\\circ$ and the volume reduces to $abc$. For a cubic cell, $a=b=c$, so $V=a^3$."
          },
          {
            "kind": "table",
            "headers": [
              "Term",
              "Meaning"
            ],
            "rows": [
              [
                "Lattice point",
                "A geometrical point with an environment equivalent to every other lattice point"
              ],
              [
                "Basis or motif",
                "Chemical content attached to each lattice point"
              ],
              [
                "Primitive cell",
                "A cell containing one lattice point in total"
              ],
              [
                "Conventional cell",
                "A symmetry-revealing cell that may contain several lattice points"
              ],
              [
                "Unit-cell parameters",
                "$a,b,c,\\u0007lpha,\\beta,\\gamma$"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Primitive cell versus one atom",
            "question": "A primitive cell of a molecular crystal contains one lattice point. The basis at each point is a molecule containing 12 atoms. How many atoms are associated with the primitive cell?",
            "steps": [
              "A primitive cell contains one lattice point, not necessarily one atom.",
              "Each point carries one 12-atom molecular basis."
            ],
            "answer": "The primitive cell contains one molecule, hence 12 atoms."
          }
        ]
      }
    ],
    "review": [
      "Crystalline order is long-range and translational; amorphous order is local.",
      "A randomly oriented polycrystal can be macroscopically isotropic.",
      "Crystal structure equals Bravais lattice plus basis.",
      "A primitive cell contains one lattice point, not necessarily one chemical particle.",
      "The six lattice parameters are $a,b,c,\\u0007lpha,\\beta,\\gamma$."
    ],
    "practice": [
      "Explain why an amorphous solid gives diffuse X-ray scattering rather than sharp Bragg peaks.",
      "Distinguish a lattice point, a basis and an atom using one molecular-crystal example.",
      "Why can a textured polycrystal be anisotropic?",
      "Classify NaCl, diamond, iodine and copper by the dominant bonding model.",
      "State the condition under which a body-centre position makes a true BCC Bravais lattice."
    ]
  },
  {
    "number": 2,
    "title": "Unit-Cell Counting, Crystal Systems and Bravais Lattices",
    "shortTitle": "Unit Cells and Bravais Lattices",
    "description": "Fractional sharing, centred cells, dimensional lattices, seven crystal systems, fourteen Bravais lattices and cube symmetry.",
    "sections": [
      {
        "title": "2.1 Fractional contribution of boundary particles",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A particle exactly on a unit-cell boundary is shared by neighbouring cells. Its contribution to one selected cell equals the fraction of its surrounding space that lies inside that cell."
          },
          {
            "kind": "figure",
            "id": "sharing",
            "caption": "Sharing of corner, edge, face and body-centre positions in a conventional unit cell."
          },
          {
            "kind": "table",
            "headers": [
              "Position",
              "Number of equivalent cells sharing the position",
              "Contribution to one cell"
            ],
            "rows": [
              [
                "Corner",
                "8",
                "$1/8$"
              ],
              [
                "Edge centre",
                "4",
                "$1/4$"
              ],
              [
                "Face centre",
                "2",
                "$1/2$"
              ],
              [
                "Body centre",
                "1",
                "$1$"
              ],
              [
                "Completely internal site",
                "1",
                "$1$"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "N_{cell}=\\frac{N_c}{8}+\\frac{N_e}{4}+\\frac{N_f}{2}+N_b+N_i"
          },
          {
            "kind": "paragraph",
            "text": "The formula counts any specified species. Apply it separately to each chemically distinct atom or ion when determining the formula of a unit cell."
          },
          {
            "kind": "example",
            "title": "Counting a mixed cell",
            "question": "Species A occupies all corners and all face centres; species B occupies all edge centres and one body centre. Determine the formula.",
            "steps": [
              "A: $8(1/8)+6(1/2)=1+3=4$.",
              "B: $12(1/4)+1=3+1=4$.",
              "The ratio A:B is $4:4=1:1$."
            ],
            "answer": "The empirical formula is AB."
          }
        ]
      },
      {
        "title": "2.2 Primitive and centred conventional cells",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Centring describes additional lattice points in a conventional cell. The added points must be equivalent to the corner points under lattice translation."
          },
          {
            "kind": "table",
            "headers": [
              "Symbol",
              "Name",
              "Additional lattice points",
              "Lattice points per conventional cell"
            ],
            "rows": [
              [
                "P",
                "Primitive",
                "Corners only",
                "1"
              ],
              [
                "I",
                "Body-centred",
                "One body centre",
                "2"
              ],
              [
                "F",
                "Face-centred",
                "Centres of all six faces",
                "4"
              ],
              [
                "C (or A/B)",
                "Base-centred",
                "Centres of one pair of opposite faces",
                "2"
              ]
            ]
          },
          {
            "kind": "bullets",
            "items": [
              "Representative I-centring translation: $(\\tfrac12,\\tfrac12,\\tfrac12)$.",
              "Independent F-centring translations: $(\\tfrac12,\\tfrac12,0)$, $(\\tfrac12,0,\\tfrac12)$ and $(0,\\tfrac12,\\tfrac12)$.",
              "A base-centred cell has only one opposite pair of centred faces; it is not face-centred."
            ]
          },
          {
            "kind": "note",
            "title": "Centring is not a contact rule",
            "text": "SC, BCC and FCC names specify translational equivalence. Sphere contact along an edge, body diagonal or face diagonal is a separate hard-sphere model used later.",
            "tone": "trap"
          },
          {
            "kind": "example",
            "title": "Lattice-point count",
            "question": "How many lattice points are contained in an F-centred conventional cell?",
            "steps": [
              "Corners contribute $8\\times 1/8=1$.",
              "Face centres contribute $6\\times 1/2=3$."
            ],
            "answer": "An F-centred conventional cell contains 4 lattice points."
          }
        ]
      },
      {
        "title": "2.3 From one-dimensional lattices to three dimensions",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In one dimension there is only one Bravais lattice: equally spaced points on a line. In two dimensions there are five Bravais lattices. Extending periodicity into three dimensions produces seven metric crystal systems and fourteen distinct Bravais lattices."
          },
          {
            "kind": "table",
            "headers": [
              "Two-dimensional lattice",
              "Metric condition",
              "Centring possibilities"
            ],
            "rows": [
              [
                "Oblique",
                "$a\\neq b$, $\\gamma\\neq90^\\circ$",
                "Primitive"
              ],
              [
                "Rectangular",
                "$a\\neq b$, $\\gamma=90^\\circ$",
                "Primitive and centred"
              ],
              [
                "Square",
                "$a=b$, $\\gamma=90^\\circ$",
                "Primitive"
              ],
              [
                "Hexagonal",
                "$a=b$, $\\gamma=120^\\circ$",
                "Primitive"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The common statement ‘five two-dimensional lattices’ counts primitive rectangular and centred rectangular separately. A centred square net can be redrawn as a smaller primitive square net rotated by $45^\\circ$, so it is not a new lattice."
          },
          {
            "kind": "figure",
            "id": "2d-lattices",
            "caption": "The five two-dimensional Bravais lattices and their primitive translations."
          }
        ]
      },
      {
        "title": "2.4 Seven crystal systems",
        "blocks": [
          {
            "kind": "figure",
            "id": "systems",
            "caption": "Metric relations defining the seven crystal systems."
          },
          {
            "kind": "table",
            "headers": [
              "Crystal system",
              "Edge relations",
              "Angle relations",
              "Typical example"
            ],
            "rows": [
              [
                "Cubic",
                "$a=b=c$",
                "$\\u0007lpha=\\beta=\\gamma=90^\\circ$",
                "NaCl, Cu"
              ],
              [
                "Tetragonal",
                "$a=b\\neq c$",
                "$\\u0007lpha=\\beta=\\gamma=90^\\circ$",
                "White Sn, TiO$_2$"
              ],
              [
                "Orthorhombic",
                "$a\\neq b\\neq c$",
                "$\\u0007lpha=\\beta=\\gamma=90^\\circ$",
                "Rhombic S"
              ],
              [
                "Hexagonal",
                "$a=b\\neq c$",
                "$\\u0007lpha=\\beta=90^\\circ$, $\\gamma=120^\\circ$",
                "Graphite, Zn"
              ],
              [
                "Trigonal (rhombohedral)",
                "$a=b=c$",
                "$\\u0007lpha=\\beta=\\gamma\\neq90^\\circ$",
                "Calcite"
              ],
              [
                "Monoclinic",
                "$a\\neq b\\neq c$",
                "$\\u0007lpha=\\gamma=90^\\circ$, $\\beta\\neq90^\\circ$",
                "Monoclinic S"
              ],
              [
                "Triclinic",
                "$a\\neq b\\neq c$",
                "$\\u0007lpha\\neq\\beta\\neq\\gamma$, none necessarily $90^\\circ$",
                "CuSO$_4\\cdot5$H$_2$O"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Hexagonal angle convention",
            "text": "The two equal basal vectors are separated by $120^\\circ$ in the conventional hexagonal cell. A $60^\\circ$ choice can describe the same net with oppositely directed basis vectors, but exam tables use $120^\\circ$.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "2.5 Fourteen Bravais lattices",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Not every centring type creates a distinct lattice in every crystal system. Some centred descriptions can be transformed into a smaller primitive cell of another allowed type. After eliminating equivalent descriptions, exactly fourteen three-dimensional Bravais lattices remain."
          },
          {
            "kind": "table",
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
                "Hexagonal",
                "P",
                "1"
              ],
              [
                "Trigonal",
                "R",
                "1"
              ],
              [
                "Monoclinic",
                "P, C",
                "2"
              ],
              [
                "Triclinic",
                "P",
                "1"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "3+2+4+1+1+2+1=14"
          },
          {
            "kind": "bullets",
            "items": [
              "Orthorhombic is the only system that has P, C, I and F forms.",
              "There are three body-centred Bravais lattices: cubic I, tetragonal I and orthorhombic I.",
              "A structure type such as CsCl, NaCl or perovskite is not a Bravais-lattice name."
            ]
          },
          {
            "kind": "example",
            "title": "Bravais-lattice integer",
            "question": "How many of the fourteen Bravais lattices are non-primitive?",
            "steps": [
              "Cubic contributes I and F: 2.",
              "Tetragonal contributes I: 1.",
              "Orthorhombic contributes C, I and F: 3.",
              "Monoclinic contributes C: 1."
            ],
            "answer": "There are $2+1+3+1=7$ non-primitive Bravais lattices."
          }
        ]
      },
      {
        "title": "2.6 Symmetry elements of a cube",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The cube belongs to the highest-symmetry common crystal system. A geometrical symmetry element is a line, plane or point about which a symmetry operation can be performed."
          },
          {
            "kind": "table",
            "headers": [
              "Element",
              "Number",
              "Description"
            ],
            "rows": [
              [
                "$C_4$ axes",
                "3",
                "Through centres of opposite faces"
              ],
              [
                "$C_3$ axes",
                "4",
                "Along body diagonals"
              ],
              [
                "$C_2$ axes",
                "6",
                "Through midpoints of opposite edges"
              ],
              [
                "Mirror planes",
                "9",
                "3 axial planes and 6 diagonal planes"
              ],
              [
                "Centre of inversion",
                "1",
                "At the cube centre"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "3+4+6+9+1=23",
            "note": "This classroom count refers to geometrical elements, not the total number of symmetry operations."
          },
          {
            "kind": "note",
            "title": "Axes versus operations",
            "text": "A single $C_4$ axis permits several rotations ($90^\\circ$, $180^\\circ$, $270^\\circ$). Do not equate the number of axes with the number of rotational operations.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "2.7 Fractional coordinates, directions and planes",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Atomic positions are usually written as fractional coordinates $(x,y,z)$, meaning $\\mathbf r=x\\mathbf a+y\\mathbf b+z\\mathbf c$. Coordinates differing by integers describe translationally equivalent positions. For example, $(1,0,0)$ is equivalent to $(0,0,0)$ in a periodic lattice."
          },
          {
            "kind": "table",
            "headers": [
              "Notation",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "$[uvw]$",
                "One crystallographic direction",
                "$[110]$ is a face diagonal in a cubic cell"
              ],
              [
                "$\\langle uvw\\rangle$",
                "Family of symmetry-equivalent directions",
                "$\\langle100\\rangle$ contains the cubic edge directions"
              ],
              [
                "$(hkl)$",
                "One plane orientation",
                "$(111)$ is one body-diagonal-normal plane"
              ],
              [
                "$\\{hkl\\}$",
                "Family of symmetry-equivalent planes",
                "$\\{100\\}$ contains the six cube-face orientations"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "To obtain a direction index, subtract the fractional coordinates of the initial point from those of the final point, then clear fractions to the smallest integers. Direction indices describe a vector; they are not obtained by taking reciprocals."
          },
          {
            "kind": "example",
            "title": "Direction from two points",
            "question": "Find the direction from $(1/4,0,1/2)$ to $(3/4,1/2,1/2)$.",
            "steps": [
              "Displacement is $(3/4-1/4,1/2-0,1/2-1/2)=(1/2,1/2,0)$.",
              "Clear fractions by multiplying by 2."
            ],
            "answer": "The direction is $[110]$."
          }
        ]
      },
      {
        "title": "2.8 Miller indices and interplanar spacing",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Miller indices encode the orientation of a family of parallel lattice planes. Find the intercepts of a plane on the $a,b,c$ axes in lattice units, take reciprocals, and clear fractions. An infinite intercept gives reciprocal zero; a negative intercept is written with a bar."
          },
          {
            "kind": "bullets",
            "items": [
              "Intercepts $(a,\\infty,\\infty)$ give $(100)$.",
              "Intercepts $(a,b,\\infty)$ give $(110)$.",
              "Intercepts $(a,b,c)$ give $(111)$.",
              "A plane through the origin is replaced by a parallel plane before taking intercepts."
            ]
          },
          {
            "kind": "derivation",
            "title": "Cubic interplanar spacing",
            "steps": [
              {
                "latex": "|\\mathbf G_{hkl}|=\\frac{2\\pi}{a}\\sqrt{h^2+k^2+l^2}",
                "text": "The reciprocal-lattice vector is normal to the $(hkl)$ planes."
              },
              {
                "latex": "d_{hkl}=\\frac{2\\pi}{|\\mathbf G_{hkl}|}",
                "text": "Adjacent planes differ in phase by one full reciprocal period."
              }
            ],
            "result": "d_{hkl}=\\frac{a}{\\sqrt{h^2+k^2+l^2}}"
          },
          {
            "kind": "example",
            "title": "Compare cubic plane spacings",
            "question": "For a cubic crystal with $a=420\\ \\mathrm{pm}$, calculate $d_{210}$ and $d_{111}$.",
            "steps": [
              "$d_{210}=420/\\sqrt5=187.8\\ \\mathrm{pm}$.",
              "$d_{111}=420/\\sqrt3=242.5\\ \\mathrm{pm}$.",
              "The larger value of $h^2+k^2+l^2$ gives the smaller spacing."
            ],
            "answer": "$d_{210}=187.8\\ \\mathrm{pm}$ and $d_{111}=242.5\\ \\mathrm{pm}$."
          }
        ]
      },
      {
        "title": "2.9 Bragg diffraction and systematic absences",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "X-ray wavelengths are comparable with interatomic spacings. Waves scattered from successive parallel planes interfere constructively when their path difference is an integral multiple of the wavelength."
          },
          {
            "kind": "derivation",
            "title": "Bragg's law",
            "steps": [
              {
                "latex": "\\text{path difference}=2d\\sin\\theta",
                "text": "One ray travels an additional distance $d\\sin\\theta$ on entering and another $d\\sin\\theta$ on leaving."
              },
              {
                "latex": "2d\\sin\\theta=n\\lambda",
                "text": "Constructive interference requires an integral number of wavelengths."
              }
            ],
            "result": "n\\lambda=2d_{hkl}\\sin\\theta"
          },
          {
            "kind": "paragraph",
            "text": "Powder diffraction contains many randomly oriented crystallites, so some crystallites satisfy the Bragg condition for each allowed plane family. Peak positions reveal $d$ spacings; peak intensities depend on the basis and atomic scattering factors."
          },
          {
            "kind": "table",
            "headers": [
              "Monatomic cubic lattice",
              "Allowed reflections"
            ],
            "rows": [
              [
                "Primitive cubic",
                "All integer $hkl$"
              ],
              [
                "BCC",
                "$h+k+l$ even"
              ],
              [
                "FCC",
                "$h,k,l$ all even or all odd"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Selection rules assume an identical monatomic basis",
            "text": "Adding different atoms to the basis changes the structure factor. The simple BCC/FCC extinction rules must not be applied blindly to ordered binary structures.",
            "tone": "trap"
          },
          {
            "kind": "example",
            "title": "Index a BCC reflection",
            "question": "Which of $(100)$, $(110)$, $(111)$ and $(200)$ are allowed for a monatomic BCC lattice?",
            "steps": [
              "Apply $h+k+l$ even.",
              "$(100)$: 1, forbidden; $(110)$: 2, allowed.",
              "$(111)$: 3, forbidden; $(200)$: 2, allowed."
            ],
            "answer": "The allowed reflections are $(110)$ and $(200)$."
          }
        ]
      }
    ],
    "review": [
      "Boundary contributions are $1/8$, $1/4$, $1/2$ and $1$ for corner, edge, face and internal sites.",
      "P, I, F and C describe primitive, body-centred, face-centred and base-centred cells.",
      "Seven metric systems generate fourteen distinct Bravais lattices.",
      "Orthorhombic alone has P, C, I and F variants.",
      "The common geometrical-element count for a cube is 23.",
      "Fractional coordinates are defined modulo integer lattice translations.",
      "Miller indices use reciprocal intercepts; cubic spacing is $d_{hkl}=a/\\sqrt{h^2+k^2+l^2}$.",
      "Bragg diffraction obeys $n\\lambda=2d\\sin\\theta$ and centring produces systematic absences."
    ],
    "practice": [
      "Derive the contribution of an atom at an edge centre.",
      "A unit cell has X at corners and Y at face centres. Determine its formula.",
      "List all body-centred Bravais lattices.",
      "Explain why a centred square net is not a sixth two-dimensional Bravais lattice.",
      "Distinguish a symmetry axis from a symmetry operation.",
      "Determine the Miller indices of a plane with intercepts $2a,3b,\\infty$.",
      "For a cubic cell, compare $d_{200}$ and $d_{220}$.",
      "List the first three allowed BCC reflections in increasing $h^2+k^2+l^2$."
    ]
  },
  {
    "number": 3,
    "title": "Cubic Unit Cells: Geometry, Coordination, Density and Stoichiometry",
    "shortTitle": "Cubic Geometry and Density",
    "description": "SC, BCC and FCC counting; contact relations; coordination shells; density; formula and atom-removal problems.",
    "sections": [
      {
        "title": "3.1 Effective number of particles in cubic cells",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Cell",
              "Corner contribution",
              "Additional contribution",
              "$Z$ for a monatomic lattice"
            ],
            "rows": [
              [
                "Simple cubic (SC)",
                "$8\\times1/8=1$",
                "0",
                "1"
              ],
              [
                "Body-centred cubic (BCC)",
                "1",
                "$1$ body centre",
                "2"
              ],
              [
                "Face-centred cubic (FCC)",
                "1",
                "$6\\times1/2=3$",
                "4"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Here $Z$ denotes the number of atoms per conventional unit cell for a monatomic crystal. In an ionic crystal, $Z$ usually denotes formula units per cell and must be obtained by counting each species."
          },
          {
            "kind": "note",
            "title": "Do not transfer monatomic $Z$ blindly",
            "text": "The geometry ‘FCC’ tells you the number of lattice points in the conventional cell. The number of chemical formula units depends on the basis attached to those points.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "3.2 Contact directions and radius–edge relations",
        "blocks": [
          {
            "kind": "figure",
            "id": "cubic-contact",
            "caption": "Hard-sphere contact in SC, BCC and FCC cells."
          },
          {
            "kind": "paragraph",
            "text": "In the equal-sphere model, the line joining centres of touching spheres determines the relation between atomic radius $r$ and cube edge $a$."
          },
          {
            "kind": "derivation",
            "title": "Simple cubic",
            "steps": [
              {
                "latex": "a=2r",
                "text": "Nearest corner atoms touch along a cube edge."
              }
            ],
            "result": "r=\\frac{a}{2}"
          },
          {
            "kind": "derivation",
            "title": "Body-centred cubic",
            "steps": [
              {
                "latex": "\\text{body diagonal}=\\sqrt3a",
                "text": "The body diagonal passes through corner–centre–corner."
              },
              {
                "latex": "\\sqrt3a=4r",
                "text": "Four radii span the complete body diagonal."
              }
            ],
            "result": "r=\\frac{\\sqrt3}{4}a"
          },
          {
            "kind": "derivation",
            "title": "Face-centred cubic",
            "steps": [
              {
                "latex": "\\text{face diagonal}=\\sqrt2a",
                "text": "A face diagonal passes through corner–face centre–corner."
              },
              {
                "latex": "\\sqrt2a=4r",
                "text": "Four radii span the complete face diagonal."
              }
            ],
            "result": "r=\\frac{a}{2\\sqrt2}"
          },
          {
            "kind": "table",
            "headers": [
              "Cell",
              "Contact direction",
              "Relation"
            ],
            "rows": [
              [
                "SC",
                "Edge",
                "$a=2r$"
              ],
              [
                "BCC",
                "Body diagonal",
                "$\\sqrt3a=4r$"
              ],
              [
                "FCC",
                "Face diagonal",
                "$\\sqrt2a=4r$"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Atomic radius from density-independent geometry",
            "question": "Copper is treated as FCC with $a=361.5\\ \\mathrm{pm}$. Calculate its metallic radius.",
            "steps": [
              "For FCC, $r=a/(2\\sqrt2)$.",
              "$r=361.5/(2\\sqrt2)=127.8\\ \\mathrm{pm}$."
            ],
            "answer": "The metallic radius is approximately $128\\ \\mathrm{pm}$."
          }
        ]
      },
      {
        "title": "3.3 Coordination number and neighbour shells",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The coordination number of an atom in a monatomic crystal is the number of nearest neighbours at the shortest centre-to-centre distance. Successive neighbour shells occur at larger discrete distances."
          },
          {
            "kind": "table",
            "headers": [
              "Lattice",
              "First shell",
              "Second shell",
              "Third shell"
            ],
            "rows": [
              [
                "SC",
                "6 at $a$",
                "12 at $\\sqrt2a$",
                "8 at $\\sqrt3a$"
              ],
              [
                "BCC",
                "8 at $\\sqrt3a/2$",
                "6 at $a$",
                "12 at $\\sqrt2a$"
              ],
              [
                "FCC",
                "12 at $a/\\sqrt2$",
                "6 at $a$",
                "24 at $a\\sqrt{3/2}$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The FCC and HCP lattices both have coordination number 12 and the same maximum packing fraction, but they differ in the stacking sequence of close-packed layers."
          },
          {
            "kind": "example",
            "title": "Nearest-neighbour distance in BCC",
            "question": "A BCC metal has edge length $a=300\\ \\mathrm{pm}$. Find its nearest-neighbour distance.",
            "steps": [
              "A corner atom's nearest neighbours are body-centre atoms in adjacent cells.",
              "The distance is half a body diagonal: $d=\\sqrt3a/2$.",
              "$d=259.8\\ \\mathrm{pm}$."
            ],
            "answer": "The nearest-neighbour distance is about $260\\ \\mathrm{pm}$."
          }
        ]
      },
      {
        "title": "3.4 Density of a unit cell",
        "blocks": [
          {
            "kind": "derivation",
            "title": "General density expression",
            "steps": [
              {
                "latex": "m_{cell}=\\frac{ZM}{N_A}",
                "text": "A cell containing $Z$ formula units has this mass."
              },
              {
                "latex": "\\rho=\\frac{m_{cell}}{V_{cell}}",
                "text": "Density is mass divided by cell volume."
              }
            ],
            "result": "\\rho=\\frac{ZM}{N_AV_{cell}}"
          },
          {
            "kind": "paragraph",
            "text": "For a cubic cell, $V_{cell}=a^3$. Use consistent units: if $a$ is in centimetres and $M$ in grams per mole, $\\rho$ is obtained in $\\mathrm{g\\,cm^{-3}}$."
          },
          {
            "kind": "formula",
            "latex": "\\rho=\\frac{ZM}{N_Aa^3}"
          },
          {
            "kind": "example",
            "title": "Identify a cubic lattice from density",
            "question": "A metal of molar mass $55.85\\ \\mathrm{g\\,mol^{-1}}$ has $a=286.7\\ \\mathrm{pm}$ and density $7.87\\ \\mathrm{g\\,cm^{-3}}$. Estimate $Z$.",
            "steps": [
              "Convert $a$: $286.7\\ \\mathrm{pm}=2.867\\times10^{-8}\\ \\mathrm{cm}$.",
              "Use $Z=\\rho N_Aa^3/M$.",
              "Substitution gives $Z\\u0007pprox2.00$."
            ],
            "answer": "The conventional cell contains two atoms; the metal is consistent with BCC."
          },
          {
            "kind": "note",
            "title": "Experimental density can reveal defects",
            "text": "If the measured density differs from the ideal value, vacancies, interstitials, impurities, porosity or a wrong structural assignment may be responsible.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "3.5 Formula determination from fractional occupancy",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Count every species independently. Site occupancy means the fraction of a set of crystallographically equivalent sites that is actually occupied."
          },
          {
            "kind": "formula",
            "latex": "N_X=\\sum_s n_s f_s q_s",
            "note": "For species X, $n_s$ is the number of sites of type $s$ per cell, $f_s$ the boundary contribution and $q_s$ the occupancy fraction."
          },
          {
            "kind": "example",
            "title": "Occupancy problem",
            "question": "A cubic cell has A on all corners, B on all face centres, and C on one-half of the twelve edge centres. Determine the formula.",
            "steps": [
              "A: $8(1/8)=1$.",
              "B: $6(1/2)=3$.",
              "C: $12(1/4)(1/2)=3/2$.",
              "Ratio $1:3:1.5$; multiply by 2."
            ],
            "answer": "The empirical formula is $\\mathrm{A_2B_6C_3}$."
          }
        ]
      },
      {
        "title": "3.6 Atom-removal and surface-counting problems",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "When a geometric operation removes atoms from a finite conventional cell, count only the fractions originally belonging to that cell. A line or plane can include corners, edge centres, face centres and internal sites."
          },
          {
            "kind": "example",
            "title": "Removing an FCC face",
            "question": "All atoms lying on one complete face of an FCC conventional cell are removed from that cell. What is the decrease in the atom count assigned to the cell?",
            "steps": [
              "The chosen face has four corner atoms, each contributing $1/8$ to the selected three-dimensional cell.",
              "It has one face-centre atom contributing $1/2$.",
              "Decrease $=4(1/8)+1/2=1$."
            ],
            "answer": "The cell's assigned atom count decreases by 1, from 4 to 3."
          },
          {
            "kind": "note",
            "title": "Finite object versus periodic crystal",
            "text": "Removing one face from a drawn cell is a bookkeeping exercise. In an infinite periodic lattice, the same boundary sites are shared with neighbouring cells, so the physical operation must be defined carefully.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "3.7 Surface gaps and coordinate-tracking algorithm",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In BCC, corner atoms do not touch along an edge. The centre-to-centre edge separation is $a$, while each sphere has diameter $2r=\\sqrt3a/2$. The surface gap is therefore positive."
          },
          {
            "kind": "formula",
            "latex": "g_{edge}=a-2r=a\\left(1-\\frac{\\sqrt3}{2}\\right)"
          },
          {
            "kind": "paragraph",
            "text": "For atom-removal problems, first write the fractional coordinates of every occupied site on the specified line or plane. Then subtract only the contribution that each removed boundary site originally made to the selected conventional cell."
          },
          {
            "kind": "bullets",
            "items": [
              "Identify the geometric object: edge, face diagonal, body diagonal or plane.",
              "List occupied coordinates lying exactly on it.",
              "Apply corner/edge/face/internal sharing fractions.",
              "Subtract species separately and reduce the final ratio."
            ]
          },
          {
            "kind": "example",
            "title": "Remove one face diagonal",
            "question": "A cell has A at all corners, B at all face centres and C at the body centre. Remove the sites lying on one face diagonal. Find the remaining A:B:C ratio.",
            "steps": [
              "Initially A=1, B=3, C=1.",
              "The chosen face diagonal contains two corner A sites and one face-centre B site.",
              "Remaining A $=1-2(1/8)=3/4$; B $=3-1/2=5/2$; C $=1$.",
              "Multiply by 4."
            ],
            "answer": "The remaining ratio is A:B:C $=3:10:4$."
          }
        ]
      }
    ],
    "review": [
      "$Z=1,2,4$ for monatomic SC, BCC and FCC conventional cells.",
      "Contact occurs along the edge, body diagonal and face diagonal in SC, BCC and FCC.",
      "Coordination numbers are 6, 8 and 12 respectively.",
      "For a cubic cell, $\\rho=ZM/(N_Aa^3)$.",
      "Determine a formula by counting each species and multiplying by site occupancy."
    ],
    "practice": [
      "Derive the BCC radius–edge relation.",
      "Calculate the packing-independent nearest-neighbour distance in FCC in terms of $a$.",
      "A cubic metal has $Z=4$ and $a=400$ pm. Express its radius in pm.",
      "Explain why $Z=4$ for an FCC Bravais lattice does not guarantee four formula units for every FCC-based structure.",
      "Design a site-occupancy pattern that gives formula AB$_2$."
    ]
  },
  {
    "number": 4,
    "title": "Packing of Equal Spheres in One, Two and Three Dimensions",
    "shortTitle": "Packing and Close-Packed Structures",
    "description": "Packing fraction, square and hexagonal layers, SC/BCC packing, HCP/CCP stacking and ideal close-packed geometry.",
    "sections": [
      {
        "title": "4.1 Packing fraction and empty space",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Packing fraction is the fraction of cell volume occupied by hard spheres. Packing efficiency is the same quantity expressed as a percentage; void fraction is the unoccupied remainder."
          },
          {
            "kind": "formula",
            "latex": "\\eta=\\frac{Z\\left(\\frac43\\pi r^3\\right)}{V_{cell}}"
          },
          {
            "kind": "formula",
            "latex": "\\%\\,empty=100(1-\\eta)"
          },
          {
            "kind": "note",
            "title": "Hard-sphere model",
            "text": "Packing fractions compare geometrical models. Electron density is not bounded by a sharp classical sphere, so the model is structural rather than a literal map of all occupied space.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "4.2 One- and two-dimensional packing",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In one dimension, each sphere touches two neighbours and the coordination number is 2. In two dimensions, equal circles form either a square arrangement or a triangular (hexagonal) arrangement."
          },
          {
            "kind": "figure",
            "id": "packing-2d",
            "caption": "Square and triangular packing of equal spheres in two dimensions."
          },
          {
            "kind": "table",
            "headers": [
              "2D arrangement",
              "Coordination number",
              "Area fraction"
            ],
            "rows": [
              [
                "Square",
                "4",
                "$\\pi/4=0.7854$"
              ],
              [
                "Triangular/hexagonal",
                "6",
                "$\\pi/(2\\sqrt3)=0.9069$"
              ]
            ]
          },
          {
            "kind": "derivation",
            "title": "Triangular-layer area fraction",
            "steps": [
              {
                "latex": "A_{cell}=2\\sqrt3r^2",
                "text": "A primitive rhombus has side $2r$ and angle $60^\\circ$."
              },
              {
                "latex": "A_{circle}=\\pi r^2",
                "text": "The primitive cell contains one circle in total."
              }
            ],
            "result": "\\eta_{2D}=\\frac{\\pi}{2\\sqrt3}=0.9069"
          },
          {
            "kind": "paragraph",
            "text": "The depressions in a triangular layer form two alternating sets, commonly labelled B and C. A second layer can occupy one set, leading to close-packed three-dimensional stacking."
          }
        ]
      },
      {
        "title": "4.3 Simple-cubic packing",
        "blocks": [
          {
            "kind": "derivation",
            "title": "SC packing efficiency",
            "steps": [
              {
                "latex": "Z=1",
                "text": "One atom belongs to the conventional cell."
              },
              {
                "latex": "a=2r",
                "text": "Spheres touch along the edge."
              },
              {
                "latex": "\\eta=\\frac{\\frac43\\pi r^3}{(2r)^3}",
                "text": "Substitute into the packing formula."
              }
            ],
            "result": "\\eta_{SC}=\\frac{\\pi}{6}=0.5236"
          },
          {
            "kind": "table",
            "headers": [
              "Property",
              "SC value"
            ],
            "rows": [
              [
                "Coordination number",
                "6"
              ],
              [
                "Atoms per conventional cell",
                "1"
              ],
              [
                "Packing efficiency",
                "52.36%"
              ],
              [
                "Void fraction",
                "47.64%"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Empty space in SC",
            "question": "What percentage of an SC hard-sphere model is empty?",
            "steps": [
              "SC packing efficiency is $\\pi/6=0.5236$.",
              "Empty fraction $=1-0.5236=0.4764$."
            ],
            "answer": "The empty space is $47.64\\%$."
          }
        ]
      },
      {
        "title": "4.4 Body-centred-cubic packing",
        "blocks": [
          {
            "kind": "derivation",
            "title": "BCC packing efficiency",
            "steps": [
              {
                "latex": "Z=2",
                "text": "Two atoms belong to the conventional cell."
              },
              {
                "latex": "\\sqrt3a=4r\\Rightarrow a=\\frac{4r}{\\sqrt3}",
                "text": "Spheres touch along the body diagonal."
              },
              {
                "latex": "\\eta=\\frac{2(\\frac43\\pi r^3)}{(4r/\\sqrt3)^3}",
                "text": "Substitute and simplify."
              }
            ],
            "result": "\\eta_{BCC}=\\frac{\\sqrt3\\pi}{8}=0.6802"
          },
          {
            "kind": "table",
            "headers": [
              "Property",
              "BCC value"
            ],
            "rows": [
              [
                "Coordination number",
                "8"
              ],
              [
                "Atoms per conventional cell",
                "2"
              ],
              [
                "Packing efficiency",
                "68.02%"
              ],
              [
                "Void fraction",
                "31.98%"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "BCC is denser than SC but is not a close-packed structure. No plane in the BCC lattice has the triangular arrangement that characterises close packing."
          }
        ]
      },
      {
        "title": "4.5 Close-packed layers: HCP and CCP",
        "blocks": [
          {
            "kind": "figure",
            "id": "stacking",
            "caption": "AAA, ABAB and ABCABC stacking sequences."
          },
          {
            "kind": "paragraph",
            "text": "Begin with a triangular A layer. A second layer placed in one set of triangular depressions is B. For the third layer there are two choices: place it above A to form ABAB… hexagonal close packing, or occupy the remaining C depressions to form ABCABC… cubic close packing."
          },
          {
            "kind": "table",
            "headers": [
              "Stacking",
              "Structure",
              "Conventional description",
              "Coordination number"
            ],
            "rows": [
              [
                "AAA…",
                "Simple hexagonal",
                "Layers directly eclipsed",
                "8 in ideal equal-sphere simple hexagonal packing"
              ],
              [
                "ABAB…",
                "HCP",
                "Hexagonal unit cell",
                "12"
              ],
              [
                "ABCABC…",
                "CCP = FCC",
                "Cubic F-centred cell",
                "12"
              ]
            ]
          },
          {
            "kind": "derivation",
            "title": "FCC/CCP packing efficiency",
            "steps": [
              {
                "latex": "Z=4",
                "text": "Four atoms belong to the FCC conventional cell."
              },
              {
                "latex": "a=2\\sqrt2r",
                "text": "Contact occurs along a face diagonal."
              },
              {
                "latex": "\\eta=\\frac{4(\\frac43\\pi r^3)}{(2\\sqrt2r)^3}",
                "text": "Substitute and simplify."
              }
            ],
            "result": "\\eta_{FCC}=\\frac{\\pi}{3\\sqrt2}=0.7405"
          },
          {
            "kind": "paragraph",
            "text": "HCP and CCP have the same local coordination and packing efficiency because both are built from identical close-packed layers. Their difference first appears in the third layer and affects longer-range symmetry."
          },
          {
            "kind": "example",
            "title": "Stacking identification",
            "question": "A close-packed solid has layer sequence ABACABAC…. Is it ideal HCP or ideal CCP?",
            "steps": [
              "Ideal HCP repeats every two layers as ABAB….",
              "Ideal CCP repeats every three layers as ABCABC….",
              "ABAC has a four-layer repeat and contains stacking faults relative to both ideals."
            ],
            "answer": "It is neither perfect HCP nor perfect CCP; it is a faulted/polytypic close-packed sequence."
          }
        ]
      },
      {
        "title": "4.6 Ideal HCP geometry",
        "blocks": [
          {
            "kind": "derivation",
            "title": "Ideal axial ratio",
            "steps": [
              {
                "latex": "h_{tet}=\\sqrt{(2r)^2-\\left(\\frac{2r}{\\sqrt3}\\right)^2}=2r\\sqrt{\\frac23}",
                "text": "Height between an A layer and the adjacent B layer follows from a tetrahedron."
              },
              {
                "latex": "c=2h_{tet}=4r\\sqrt{\\frac23}",
                "text": "The conventional HCP cell spans A–B–A."
              },
              {
                "latex": "a=2r",
                "text": "Spheres touch within a basal layer."
              }
            ],
            "result": "\\frac{c}{a}=\\sqrt{\\frac83}=1.633"
          },
          {
            "kind": "paragraph",
            "text": "Real HCP metals can deviate from the ideal $c/a$ ratio because metallic bonding is not an exact hard-sphere interaction."
          },
          {
            "kind": "table",
            "headers": [
              "Quantity",
              "Ideal HCP value"
            ],
            "rows": [
              [
                "Atoms per conventional hexagonal cell",
                "6"
              ],
              [
                "Coordination number",
                "12"
              ],
              [
                "Packing efficiency",
                "74.05%"
              ],
              [
                "$c/a$",
                "$\\sqrt{8/3}=1.633$"
              ]
            ]
          }
        ]
      },
      {
        "title": "4.7 Comparative summary",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Packing",
              "$Z$",
              "CN",
              "Contact relation",
              "Efficiency"
            ],
            "rows": [
              [
                "SC",
                "1",
                "6",
                "$a=2r$",
                "52.36%"
              ],
              [
                "BCC",
                "2",
                "8",
                "$\\sqrt3a=4r$",
                "68.02%"
              ],
              [
                "FCC/CCP",
                "4",
                "12",
                "$\\sqrt2a=4r$",
                "74.05%"
              ],
              [
                "HCP",
                "6 in conventional hexagonal cell",
                "12",
                "$a=2r$, ideal $c/a=1.633$",
                "74.05%"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Maximum equal-sphere packing",
            "text": "Kepler's theorem establishes that no arrangement of congruent spheres in three-dimensional Euclidean space exceeds the HCP/CCP density $\\pi/(3\\sqrt2)$.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "4.8 Polytypes, stacking faults and eutactic arrays",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Close-packed layer notation extends beyond ideal HCP and CCP. Longer periodic sequences such as ABAC, ABCACB or mixed cubic–hexagonal sequences are polytypes: they have the same composition and closely related local coordination but differ in stacking order."
          },
          {
            "kind": "table",
            "headers": [
              "Sequence",
              "Description"
            ],
            "rows": [
              [
                "ABAB…",
                "Ideal hexagonal close packing"
              ],
              [
                "ABCABC…",
                "Ideal cubic close packing"
              ],
              [
                "ABAC…",
                "Four-layer polytype"
              ],
              [
                "Local repetition error",
                "Stacking fault"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "In many ionic structures, the larger anions preserve the topology of a close-packed array but are pushed apart by cations. Such an arrangement is often called eutactic rather than strictly close packed, because the anions need not remain in mutual contact."
          },
          {
            "kind": "note",
            "title": "Local versus long-range identity",
            "text": "HCP and CCP have identical first-neighbour coordination. Diffraction or longer-range layer tracing is needed to distinguish their stacking.",
            "tone": "exam"
          }
        ]
      }
    ],
    "review": [
      "Packing efficiency is occupied sphere volume divided by cell volume.",
      "Triangular 2D packing is denser than square packing.",
      "SC, BCC and FCC efficiencies are 52.36%, 68.02% and 74.05%.",
      "HCP is ABAB; CCP/FCC is ABCABC.",
      "The ideal HCP axial ratio is $\\sqrt{8/3}=1.633$."
    ],
    "practice": [
      "Derive the BCC packing efficiency from first principles.",
      "Why do HCP and CCP have the same packing fraction but different symmetry?",
      "Calculate empty space in FCC.",
      "A close-packed sequence is ABCACB. Identify whether it contains a stacking fault.",
      "Derive the ideal HCP $c/a$ ratio using tetrahedral geometry."
    ]
  },
  {
    "number": 5,
    "title": "Voids, Interstitial Sites and Diamond Geometry",
    "shortTitle": "Voids and Interstitial Sites",
    "description": "Tetrahedral, octahedral and cubic holes; coordinates and counts; partial occupancy; HCP and diamond geometry.",
    "sections": [
      {
        "title": "5.1 Meaning of a void",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A void is an interstitial region enclosed by neighbouring packed particles. It is not an empty lattice point in the Bravais sense. The size and coordination of a void depend on the geometry of the surrounding spheres."
          },
          {
            "kind": "table",
            "headers": [
              "Void",
              "Number of surrounding spheres",
              "Coordination geometry"
            ],
            "rows": [
              [
                "Triangular void",
                "3",
                "Planar triangle"
              ],
              [
                "Tetrahedral void",
                "4",
                "Tetrahedron"
              ],
              [
                "Octahedral void",
                "6",
                "Octahedron"
              ],
              [
                "Cubic void",
                "8",
                "Cube"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Void count is tied to packed-particle count",
            "text": "For a close-packed array containing $N$ host particles, there are $N$ octahedral and $2N$ tetrahedral holes. This statement is independent of whether the close packing is HCP or CCP.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "5.2 Formation of tetrahedral and octahedral holes",
        "blocks": [
          {
            "kind": "figure",
            "id": "voids",
            "caption": "Tetrahedral and octahedral holes formed between close-packed layers."
          },
          {
            "kind": "paragraph",
            "text": "When a B-layer sphere covers a triangular depression in an A layer, the enclosed region between the three A spheres and one B sphere is a tetrahedral hole. When an upward triangular depression in one layer lies opposite a downward depression in the next, six spheres enclose an octahedral hole."
          },
          {
            "kind": "formula",
            "latex": "N_{tet}=2N,\\qquad N_{oct}=N"
          },
          {
            "kind": "derivation",
            "title": "Void count from one close-packed layer",
            "steps": [
              {
                "latex": "\\text{triangular depressions}=2N",
                "text": "A large triangular layer of $N$ spheres has approximately $2N$ triangular depressions, boundary effects neglected."
              },
              {
                "latex": "N\\text{ depressions are covered by the next layer}",
                "text": "Each covered depression produces one tetrahedral hole on that side."
              },
              {
                "latex": "N\\text{ opposite pairs form octahedral holes across layers}",
                "text": "Layer stacking gives the final 2:1 tetrahedral-to-octahedral count."
              }
            ],
            "result": "N_{tet}:N_{oct}=2:1"
          },
          {
            "kind": "example",
            "title": "Hole counting",
            "question": "A close-packed anion array contains 240 anions. How many tetrahedral and octahedral holes are available?",
            "steps": [
              "Tetrahedral holes $=2N=480$.",
              "Octahedral holes $=N=240$."
            ],
            "answer": "There are 480 tetrahedral and 240 octahedral holes."
          }
        ]
      },
      {
        "title": "5.3 Holes in an FCC conventional cell",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An FCC conventional cell contains four host particles. Hence it contains four octahedral holes and eight tetrahedral holes in total."
          },
          {
            "kind": "table",
            "headers": [
              "Site",
              "Coordinates in the FCC conventional cell",
              "Count belonging to cell"
            ],
            "rows": [
              [
                "Octahedral—body centre",
                "$(1/2,1/2,1/2)$",
                "1"
              ],
              [
                "Octahedral—edge centres",
                "12 edge centres",
                "$12\\times1/4=3$"
              ],
              [
                "Tetrahedral",
                "All combinations of $(1/4,1/4,1/4)$ and $(3/4,3/4,3/4)$ coordinates",
                "8, all internal"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "N_{oct}=1+12\\left(\\frac14\\right)=4,\\qquad N_{tet}=8"
          },
          {
            "kind": "example",
            "title": "Partial tetrahedral occupancy",
            "question": "Anions form an FCC array and cations occupy $3/8$ of all tetrahedral holes. Find the cation:anion ratio.",
            "steps": [
              "FCC cell has 4 anions and 8 tetrahedral holes.",
              "Occupied holes $=(3/8)(8)=3$ cations.",
              "Ratio cation:anion $=3:4$."
            ],
            "answer": "The composition is $\\mathrm{M_3X_4}$."
          }
        ]
      },
      {
        "title": "5.4 Hole occupancy and stoichiometry",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "If $N$ anions form a close-packed host, let fractions $f_t$ and $f_o$ of tetrahedral and octahedral holes be occupied by cations. Then the cation count is $2Nf_t+Nf_o$."
          },
          {
            "kind": "formula",
            "latex": "\\frac{N_{cation}}{N_{anion}}=2f_t+f_o"
          },
          {
            "kind": "table",
            "headers": [
              "Occupancy pattern",
              "Cation:anion ratio",
              "Representative structure type"
            ],
            "rows": [
              [
                "All octahedral holes",
                "1:1",
                "NaCl, NiAs"
              ],
              [
                "Half tetrahedral holes",
                "1:1",
                "ZnS"
              ],
              [
                "All tetrahedral holes",
                "2:1",
                "Antifluorite"
              ],
              [
                "One-half octahedral holes",
                "1:2",
                "Rutile-type counting is not a simple close-packed ideal but gives MO$_2$ stoichiometry"
              ],
              [
                "Two-thirds octahedral holes",
                "2:3",
                "Corundum, M$_2$O$_3$"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Mixed-hole occupancy",
            "question": "Anions are close packed. Cations occupy one-quarter of tetrahedral holes and one-half of octahedral holes. Determine the formula.",
            "steps": [
              "Cation/anion $=2(1/4)+(1/2)=1$.",
              "Thus cation and anion numbers are equal."
            ],
            "answer": "The ideal formula is MX."
          }
        ]
      },
      {
        "title": "5.5 Sizes of interstitial holes",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The largest sphere that fits a hole while touching all host spheres has a limiting radius. For host radius $R$ and interstitial radius $r$, the classical values follow from regular polyhedral geometry."
          },
          {
            "kind": "table",
            "headers": [
              "Hole",
              "Limiting $r/R$",
              "Derivation result"
            ],
            "rows": [
              [
                "Triangular",
                "0.155",
                "$2/\\sqrt3-1$"
              ],
              [
                "Tetrahedral",
                "0.225",
                "$\\sqrt{3/2}-1$"
              ],
              [
                "Octahedral",
                "0.414",
                "$\\sqrt2-1$"
              ],
              [
                "Cubic",
                "0.732",
                "$\\sqrt3-1$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "These are geometrical lower limits for a cation to maintain contact with surrounding anions without forcing them apart. They are not exact universal boundaries for real ionic compounds."
          },
          {
            "kind": "note",
            "title": "Distortion and covalency",
            "text": "Polarisation, directional covalent bonding, unequal compressibility and temperature can stabilise a coordination number outside the simple radius-ratio prediction.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "5.6 Diamond structure",
        "blocks": [
          {
            "kind": "figure",
            "id": "diamond",
            "caption": "FCC lattice with a two-atom basis producing the diamond network."
          },
          {
            "kind": "paragraph",
            "text": "Diamond can be described as an FCC lattice with the basis $(0,0,0)$ and $(1/4,1/4,1/4)$. Equivalently, one carbon sublattice is displaced from another by one-quarter of a body diagonal. Each carbon is tetrahedrally bonded to four neighbours."
          },
          {
            "kind": "table",
            "headers": [
              "Property",
              "Diamond"
            ],
            "rows": [
              [
                "Conventional-cell atom count",
                "8"
              ],
              [
                "Coordination number",
                "4"
              ],
              [
                "Nearest-neighbour distance",
                "$\\sqrt3a/4$"
              ],
              [
                "Radius relation in a touching-sphere representation",
                "$2r=\\sqrt3a/4$"
              ],
              [
                "Packing efficiency",
                "$\\pi\\sqrt3/16\\u0007pprox34.0\\%$"
              ],
              [
                "Hybridisation",
                "$sp^3$"
              ]
            ]
          },
          {
            "kind": "derivation",
            "title": "Diamond packing efficiency",
            "steps": [
              {
                "latex": "Z=8",
                "text": "Eight carbon atoms belong to the conventional cubic cell."
              },
              {
                "latex": "r=\\frac{\\sqrt3a}{8}",
                "text": "Nearest neighbours touch along one-quarter of a body diagonal."
              },
              {
                "latex": "\\eta=\\frac{8(\\frac43\\pi r^3)}{a^3}",
                "text": "Substitute $r$."
              }
            ],
            "result": "\\eta_{diamond}=\\frac{\\pi\\sqrt3}{16}=0.340"
          },
          {
            "kind": "paragraph",
            "text": "Diamond is exceptionally hard because every atom participates in a continuous three-dimensional covalent network, not because it is closely packed."
          },
          {
            "kind": "example",
            "title": "Diamond nearest-neighbour distance",
            "question": "Diamond has $a=356.7\\ \\mathrm{pm}$. Find the C–C distance.",
            "steps": [
              "For diamond, $d=\\sqrt3a/4$.",
              "$d=154.5\\ \\mathrm{pm}$."
            ],
            "answer": "The nearest C–C distance is about $154\\ \\mathrm{pm}$."
          }
        ]
      },
      {
        "title": "5.7 Interstitial sites in the conventional HCP cell",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The conventional HCP prism contains six host atoms. The universal close-packing rule therefore gives twelve tetrahedral and six octahedral holes. These sites occur in alternating planes between the lower A, middle B and upper A layers."
          },
          {
            "kind": "formula",
            "latex": "N_{tet}=2(6)=12,\\qquad N_{oct}=6"
          },
          {
            "kind": "paragraph",
            "text": "Layer-by-layer sketches often mark interstitial planes at fractional heights such as $h/8$, $2h/8$, $3h/8$ and so on. Those labels are a visual bookkeeping device; the invariant result is the total count and coordination of the holes."
          },
          {
            "kind": "example",
            "title": "HCP hole occupancy",
            "question": "An HCP anion cell contains six anions. If one-third of its octahedral holes and one-quarter of its tetrahedral holes are occupied, how many cations belong to the cell?",
            "steps": [
              "Octahedral cations $=(1/3)(6)=2$.",
              "Tetrahedral cations $=(1/4)(12)=3$.",
              "Total cations $=5$."
            ],
            "answer": "The cell contains 5 cations for 6 anions."
          }
        ]
      }
    ],
    "review": [
      "Close packing gives $2N$ tetrahedral and $N$ octahedral holes for $N$ host particles.",
      "An FCC conventional cell contains 8 tetrahedral and 4 octahedral holes.",
      "Hole occupancy directly determines stoichiometry.",
      "Limiting hole ratios are 0.225 (tetrahedral), 0.414 (octahedral) and 0.732 (cubic).",
      "Diamond is an open $sp^3$ network with 8 atoms per conventional cell and about 34% packing."
    ],
    "practice": [
      "Locate all tetrahedral holes in an FCC conventional cell using fractional coordinates.",
      "An FCC anion array has one-half of its octahedral holes occupied. Find the formula.",
      "Derive the tetrahedral-hole radius ratio.",
      "Why is diamond hard despite its low packing efficiency?",
      "Compare a lattice vacancy with an interstitial void."
    ]
  },
  {
    "number": 6,
    "title": "Radius-Ratio Rules and Coordination Polyhedra",
    "shortTitle": "Radius Ratio and Coordination",
    "description": "Geometrical critical ratios, coordination ranges, derivations, limitations and links between polyhedra and ionic structures.",
    "sections": [
      {
        "title": "6.1 Purpose of the radius-ratio model",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "For an ionic solid approximated by rigid spheres, the cation-to-anion radius ratio $r_+/r_-$ indicates whether a cation can fit a particular hole while maintaining contact with surrounding anions. At the limiting ratio, the anions just touch one another and the cation simultaneously touches every coordinating anion."
          },
          {
            "kind": "formula",
            "latex": "\\lambda=\\frac{r_+}{r_-}"
          },
          {
            "kind": "paragraph",
            "text": "If $\\lambda$ falls below a critical value for a proposed geometry, the cation is too small to support that coordination shell in the undistorted hard-sphere model. The anions would collapse toward one another, favouring lower coordination."
          },
          {
            "kind": "figure",
            "id": "radius-ratio",
            "caption": "Critical geometries used in the classical radius-ratio rule."
          }
        ]
      },
      {
        "title": "6.2 Coordination number 3: triangular hole",
        "blocks": [
          {
            "kind": "derivation",
            "title": "Triangular critical ratio",
            "steps": [
              {
                "latex": "\\text{distance from triangle centre to vertex}=\\frac{2r_-}{\\sqrt3}",
                "text": "The equilateral-triangle side is $2r_-$."
              },
              {
                "latex": "r_++r_-=\\frac{2r_-}{\\sqrt3}",
                "text": "At the limit, the central cation touches all three anions."
              }
            ],
            "result": "\\frac{r_+}{r_-}=\\frac{2}{\\sqrt3}-1=0.1547"
          },
          {
            "kind": "paragraph",
            "text": "Ratios below 0.155 are commonly assigned coordination number 2; ratios from about 0.155 to 0.225 are associated with triangular coordination number 3 in the simplified chart."
          }
        ]
      },
      {
        "title": "6.3 Coordination number 4: tetrahedral hole",
        "blocks": [
          {
            "kind": "derivation",
            "title": "Tetrahedral critical ratio",
            "steps": [
              {
                "latex": "a=2r_-",
                "text": "The four anions form a regular tetrahedron of edge $a$."
              },
              {
                "latex": "R_{tet}=\\frac{\\sqrt6}{4}a=\\frac{\\sqrt6}{2}r_-",
                "text": "The centre-to-vertex distance is the tetrahedral circumradius."
              },
              {
                "latex": "r_++r_-=R_{tet}",
                "text": "The cation touches all four anions."
              }
            ],
            "result": "\\frac{r_+}{r_-}=\\sqrt{\\frac32}-1=0.2247"
          },
          {
            "kind": "paragraph",
            "text": "The usual radius-ratio interval for tetrahedral coordination is approximately $0.225\\le r_+/r_-<0.414$. Examples include Zn$^{2+}$ in zinc blende and Be$^{2+}$ in many tetrahedral environments."
          },
          {
            "kind": "note",
            "title": "Square-planar coordination",
            "text": "A square hole also has coordination number 4 but its limiting ratio is $\\sqrt2-1=0.414$. Square-planar coordination is usually controlled by electronic structure and directional bonding rather than the elementary ionic radius-ratio chart.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "6.4 Coordination number 6: octahedral hole",
        "blocks": [
          {
            "kind": "derivation",
            "title": "Octahedral critical ratio",
            "steps": [
              {
                "latex": "a=2r_-",
                "text": "Four anions in an equatorial square touch along the square edges."
              },
              {
                "latex": "\\text{centre-to-corner distance}=\\frac{a}{\\sqrt2}=\\sqrt2r_-",
                "text": "This equals $r_++r_-$."
              }
            ],
            "result": "\\frac{r_+}{r_-}=\\sqrt2-1=0.4142"
          },
          {
            "kind": "paragraph",
            "text": "The classical octahedral range is $0.414\\le r_+/r_-<0.732$. Rock-salt structures place each ion in six-coordinate octahedral surroundings."
          },
          {
            "kind": "example",
            "title": "Predicting a coordination number",
            "question": "Using the elementary radius-ratio rule, predict the likely coordination number for $r_+/r_-=0.52$.",
            "steps": [
              "0.52 is greater than the octahedral lower limit 0.414.",
              "It is less than the cubic lower limit 0.732."
            ],
            "answer": "The model predicts coordination number 6."
          }
        ]
      },
      {
        "title": "6.5 Coordination number 8: cubic hole",
        "blocks": [
          {
            "kind": "derivation",
            "title": "Cubic critical ratio",
            "steps": [
              {
                "latex": "a=2r_-",
                "text": "Adjacent corner anions touch along a cube edge."
              },
              {
                "latex": "\\text{half body diagonal}=\\frac{\\sqrt3a}{2}=\\sqrt3r_-",
                "text": "This is the centre-to-corner distance."
              },
              {
                "latex": "r_++r_-=\\sqrt3r_-",
                "text": "The central cation touches all eight anions."
              }
            ],
            "result": "\\frac{r_+}{r_-}=\\sqrt3-1=0.7321"
          },
          {
            "kind": "paragraph",
            "text": "Ratios from about 0.732 to 1 are assigned coordination number 8 in the simple chart. CsCl-type structures are the standard example."
          },
          {
            "kind": "example",
            "title": "Structure choice by ratio",
            "question": "Two MX salts have radius ratios 0.38 and 0.80. Which is geometrically more compatible with ZnS-type and CsCl-type coordination?",
            "steps": [
              "0.38 lies in the tetrahedral interval 0.225–0.414.",
              "0.80 lies in the cubic interval 0.732–1."
            ],
            "answer": "The 0.38 salt is compatible with ZnS-type CN 4; the 0.80 salt with CsCl-type CN 8."
          }
        ]
      },
      {
        "title": "6.6 Radius-ratio summary",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Radius ratio $r_+/r_-$",
              "Predicted CN",
              "Ideal geometry",
              "Common structure association"
            ],
            "rows": [
              [
                "0–0.155",
                "2",
                "Linear",
                "Rare simple ionic solids"
              ],
              [
                "0.155–0.225",
                "3",
                "Triangular",
                "Planar three-coordinate"
              ],
              [
                "0.225–0.414",
                "4",
                "Tetrahedral",
                "ZnS type"
              ],
              [
                "0.414–0.732",
                "6",
                "Octahedral",
                "NaCl type"
              ],
              [
                "0.732–1.000",
                "8",
                "Cubic",
                "CsCl type"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Boundary values",
            "text": "At an exact limiting value, two geometries can be geometrically competitive. Real structure selection depends on lattice energy, polarisation, covalency, pressure and temperature.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "6.7 Why the rule is not absolute",
        "blocks": [
          {
            "kind": "bullets",
            "items": [
              "Ionic radii depend on oxidation state, coordination number and the radius convention used.",
              "Ions are not incompressible spheres; electron clouds deform and overlap.",
              "Covalent character introduces directional bonding that the model omits.",
              "The anion framework need not remain in mutual contact.",
              "Pressure can stabilise higher coordination by favouring denser structures.",
              "Lattice-energy differences involve the entire crystal, not only nearest-neighbour fit."
            ]
          },
          {
            "kind": "paragraph",
            "text": "Use the radius-ratio rule as a first geometrical guide, not as a proof. When experimental structural data conflict with the chart, the structure is authoritative."
          },
          {
            "kind": "note",
            "title": "Connection with Fajans' rules",
            "text": "A small, highly charged cation can strongly polarise a large anion. Increased covalent character may favour coordination and geometry different from a rigid-sphere prediction.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "6.8 Coordination polyhedra and connectivity",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Polyhedron",
              "CN",
              "Typical site",
              "Possible connections in extended solids"
            ],
            "rows": [
              [
                "Tetrahedron",
                "4",
                "ZnS, silicates",
                "Corner-, edge- or face-sharing"
              ],
              [
                "Octahedron",
                "6",
                "NaCl, rutile, perovskite B site",
                "Corner-, edge- or face-sharing"
              ],
              [
                "Cube",
                "8",
                "CsCl, Ca site in fluorite",
                "Three-dimensional cage"
              ],
              [
                "Cuboctahedron",
                "12",
                "Close-packed metals, perovskite A site",
                "Close-packed coordination shell"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The way polyhedra share corners, edges or faces affects cation–cation separation. For highly charged cations, face sharing often produces strong electrostatic repulsion and is less favourable than corner sharing, an idea related to Pauling's rules."
          }
        ]
      },
      {
        "title": "6.9 Coordination-number contact balance",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In a binary structure A$_x$B$_y$, every A–B nearest-neighbour contact can be counted from either sublattice. Counting from A gives $x\\,\\mathrm{CN}(A)$ contacts per formula set; counting from B gives $y\\,\\mathrm{CN}(B)$. The two counts must be equal."
          },
          {
            "kind": "formula",
            "latex": "x\\,\\mathrm{CN}(A)=y\\,\\mathrm{CN}(B)"
          },
          {
            "kind": "example",
            "title": "Find the second coordination number",
            "question": "In A$_2$B$_3$, each A has six B nearest neighbours. Find the coordination number of B with respect to A.",
            "steps": [
              "Use $x\\mathrm{CN}(A)=y\\mathrm{CN}(B)$.",
              "$2\\times6=3\\mathrm{CN}(B)$."
            ],
            "answer": "$\\mathrm{CN}(B)=4$."
          }
        ]
      },
      {
        "title": "6.10 Madelung energy and structural stability",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Radius fit describes local geometry, but an ionic crystal is stabilised by Coulomb interactions with many shells. The dimensionless Madelung constant $A$ summarises the geometry of the infinite electrostatic sum for a chosen structure type."
          },
          {
            "kind": "formula",
            "latex": "U_{Coul}=-\\frac{N_A A z_+z_-e^2}{4\\pi\\varepsilon_0 r_0}"
          },
          {
            "kind": "paragraph",
            "text": "A short-range repulsion prevents collapse. In the Born–Landé model, the lattice energy per mole is"
          },
          {
            "kind": "formula",
            "latex": "U=-\\frac{N_A A z_+z_-e^2}{4\\pi\\varepsilon_0 r_0}\\left(1-\\frac1n\\right)",
            "note": "$n$ is the Born repulsion exponent and $r_0$ the nearest unlike-ion distance."
          },
          {
            "kind": "bullets",
            "items": [
              "Higher ionic charges strongly increase lattice-energy magnitude.",
              "Smaller nearest-neighbour distance generally strengthens attraction.",
              "The Madelung constant depends on structure, so coordination topology matters.",
              "Lattice energy contributes to melting point, hardness, defect formation and phase stability, but hydration and entropy also control solubility."
            ]
          },
          {
            "kind": "note",
            "title": "Born–Haber versus Born–Landé",
            "text": "A Born–Haber cycle obtains lattice enthalpy from thermochemical data. Born–Landé estimates it from an electrostatic structural model.",
            "tone": "exam"
          },
          {
            "kind": "example",
            "title": "Charge effect",
            "question": "Compare the electrostatic factor $z_+z_-/r_0$ for NaCl and MgO if their nearest-neighbour distances were equal.",
            "steps": [
              "NaCl has $|z_+z_-|=1$.",
              "MgO has $|z_+z_-|=4$."
            ],
            "answer": "The Coulomb factor for MgO would be four times as large in magnitude."
          }
        ]
      }
    ],
    "review": [
      "Critical ratios arise from regular-polyhedron geometry.",
      "The key lower limits are 0.155, 0.225, 0.414 and 0.732.",
      "The elementary chart maps these to CN 3, 4, 6 and 8.",
      "Exact boundaries do not guarantee a unique structure.",
      "Radius ratio is a guide; covalency, polarisation, pressure and lattice energy also matter."
    ],
    "practice": [
      "Derive the critical ratio for an octahedral hole.",
      "A cation/anion radius ratio is 0.21. What coordination does the simple model predict?",
      "Why can a compound violate the radius-ratio rule?",
      "Compare tetrahedral and square-planar coordination number 4.",
      "Explain why pressure commonly favours higher coordination numbers."
    ]
  },
  {
    "number": 7,
    "title": "Important Crystal Structures and Their Stoichiometry",
    "shortTitle": "Named Crystal Structures",
    "description": "Rock salt, CsCl, ZnS, fluorite, antifluorite, NiAs, rutile, perovskite, spinel, corundum, diamond and graphite.",
    "sections": [
      {
        "title": "7.1 A method for analysing any structure",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "For every named crystal structure, answer the same questions in order: Which species forms the host lattice? Which holes are occupied? What fraction of those holes is occupied? What is the formula? What are the coordination numbers? How many formula units occur in the conventional cell? What nearest-neighbour geometry connects ionic radii to cell dimensions?"
          },
          {
            "kind": "bullets",
            "items": [
              "Step 1: identify the Bravais lattice and basis, not just the visual positions.",
              "Step 2: count each species using boundary fractions.",
              "Step 3: determine coordination by actual nearest neighbours.",
              "Step 4: derive the nearest-neighbour distance from fractional coordinates.",
              "Step 5: check that the counted composition matches charge neutrality."
            ]
          },
          {
            "kind": "note",
            "title": "Structure type versus chemical identity",
            "text": "Many compounds adopt the same structure type. ‘NaCl type’ describes topology and coordination, not the requirement that Na and Cl be present.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "7.2 Rock-salt or NaCl structure",
        "blocks": [
          {
            "kind": "figure",
            "id": "rocksalt",
            "caption": "Interpenetrating FCC sublattices in the rock-salt structure."
          },
          {
            "kind": "paragraph",
            "text": "Cl$^-$ ions may be taken as an FCC array, with Na$^+$ ions occupying all octahedral holes. The reverse description is equally valid because both ions form interpenetrating FCC sublattices."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "NaCl type"
            ],
            "rows": [
              [
                "Host and holes",
                "FCC anions; all octahedral holes occupied"
              ],
              [
                "Formula",
                "MX"
              ],
              [
                "Coordination",
                "6:6"
              ],
              [
                "Formula units per conventional cell",
                "$Z=4$"
              ],
              [
                "Nearest M–X distance",
                "$a/2$"
              ],
              [
                "Radius relation",
                "$r_++r_-=a/2$"
              ],
              [
                "Examples",
                "NaCl, KCl, MgO, CaO"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Rock-salt density",
            "question": "An MX crystal has NaCl structure, molar mass $M_f$ and edge $a$. Write its density.",
            "steps": [
              "NaCl type has four formula units per conventional cell.",
              "Cell mass is $4M_f/N_A$.",
              "Cell volume is $a^3$."
            ],
            "answer": "$\\rho=4M_f/(N_Aa^3)$."
          }
        ]
      },
      {
        "title": "7.3 CsCl structure",
        "blocks": [
          {
            "kind": "figure",
            "id": "cscl",
            "caption": "Eight-coordinate CsCl structure: one ion at cube corners and the other at the body centre."
          },
          {
            "kind": "paragraph",
            "text": "One ion occupies the corners of a primitive cubic cell and the other occupies the cubic hole at the body centre. The two chemical sites form a basis on a primitive cubic Bravais lattice."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "CsCl type"
            ],
            "rows": [
              [
                "Bravais description",
                "Primitive cubic with a two-ion basis"
              ],
              [
                "Formula",
                "MX"
              ],
              [
                "Coordination",
                "8:8"
              ],
              [
                "Formula units per cell",
                "$Z=1$"
              ],
              [
                "Nearest M–X distance",
                "$\\sqrt3a/2$"
              ],
              [
                "Radius relation",
                "$r_++r_-=\\sqrt3a/2$"
              ],
              [
                "Examples",
                "CsCl, CsBr, CsI, TlCl at suitable conditions"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Why it is not BCC",
            "text": "A BCC Bravais lattice requires corner and body-centre lattice points to be equivalent. In CsCl they carry different ions, so the Bravais lattice is primitive cubic.",
            "tone": "trap"
          },
          {
            "kind": "example",
            "title": "Cell edge from radii",
            "question": "For a CsCl-type solid, $r_+=181$ pm and $r_-=167$ pm. Estimate $a$.",
            "steps": [
              "Use $r_++r_-=\\sqrt3a/2$.",
              "$a=2(348)/\\sqrt3=401.8$ pm."
            ],
            "answer": "The estimated edge length is $402$ pm."
          }
        ]
      },
      {
        "title": "7.4 Zinc blende and wurtzite",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Both ZnS polymorphs have tetrahedral 4:4 coordination and half of the tetrahedral holes occupied. They differ in anion stacking: zinc blende uses CCP (ABC), while wurtzite uses HCP (AB)."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "Zinc blende (sphalerite)",
              "Wurtzite"
            ],
            "rows": [
              [
                "Anion packing",
                "CCP/FCC",
                "HCP"
              ],
              [
                "Occupied holes",
                "Half tetrahedral",
                "Half tetrahedral"
              ],
              [
                "Coordination",
                "4:4",
                "4:4"
              ],
              [
                "Formula",
                "MX",
                "MX"
              ],
              [
                "Formula units",
                "4 per cubic conventional cell",
                "2 per primitive hexagonal cell"
              ],
              [
                "Nearest M–X distance",
                "$\\sqrt3a/4$",
                "Set by hexagonal internal parameter"
              ],
              [
                "Examples",
                "ZnS, cubic SiC",
                "ZnS, ZnO, hexagonal SiC polytypes"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "In zinc blende, the occupied tetrahedral sites may be represented by coordinates such as $(1/4,1/4,1/4)$ relative to the FCC anion cell. Only four of the eight tetrahedral holes are occupied."
          },
          {
            "kind": "example",
            "title": "Hole fraction",
            "question": "Anions form CCP and the compound has formula MX with cations only in tetrahedral holes. What fraction of tetrahedral holes is occupied?",
            "steps": [
              "For $N$ anions, there are $2N$ tetrahedral holes.",
              "Formula MX requires $N$ cations.",
              "Occupied fraction $=N/(2N)=1/2$."
            ],
            "answer": "One-half of the tetrahedral holes is occupied."
          }
        ]
      },
      {
        "title": "7.5 Fluorite and antifluorite",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Feature",
              "Fluorite, MX$_2$",
              "Antifluorite, M$_2$X"
            ],
            "rows": [
              [
                "Host lattice",
                "M cations FCC",
                "X anions FCC"
              ],
              [
                "Hole occupancy",
                "X anions occupy all tetrahedral holes",
                "M cations occupy all tetrahedral holes"
              ],
              [
                "Coordination",
                "M: 8; X: 4",
                "M: 4; X: 8"
              ],
              [
                "Formula units per FCC cell",
                "4",
                "4"
              ],
              [
                "Examples",
                "CaF$_2$, SrF$_2$, UO$_2$",
                "Li$_2$O, Na$_2$O, K$_2$S"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "For the ideal cubic fluorite cell, the nearest cation–anion separation is $\\sqrt3a/4$. The structure has an open anion sublattice that can support fast ion motion in some fluorite oxides at elevated temperature."
          },
          {
            "kind": "example",
            "title": "Coordination accounting",
            "question": "In CaF$_2$, how many nearest Ca$^{2+}$ neighbours surround each F$^-$, and how many F$^-$ surround each Ca$^{2+}$?",
            "steps": [
              "Fluoride occupies a tetrahedral site in the Ca FCC array, so it has 4 Ca neighbours.",
              "Each Ca is surrounded by the eight tetrahedral-site fluorides at cube-corner directions."
            ],
            "answer": "F$^-$ has CN 4; Ca$^{2+}$ has CN 8."
          }
        ]
      },
      {
        "title": "7.6 NiAs and rutile structures",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In NiAs, As atoms form an HCP array and Ni atoms occupy all octahedral holes. Each Ni is octahedrally surrounded by six As, while each As is surrounded by six Ni in a trigonal-prismatic arrangement."
          },
          {
            "kind": "table",
            "headers": [
              "Structure",
              "Packing/site model",
              "Coordination",
              "Formula"
            ],
            "rows": [
              [
                "NiAs",
                "HCP As; all octahedral holes filled by Ni",
                "Ni 6 (octahedral), As 6 (trigonal prismatic)",
                "MX"
              ],
              [
                "Rutile TiO$_2$",
                "Distorted chains of edge-sharing TiO$_6$ octahedra",
                "Ti 6, O 3",
                "MO$_2$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Rutile is tetragonal. Its TiO$_6$ octahedra are distorted and share edges along one direction and corners between chains. The structure cannot be understood completely as a simple ideal close-packed-hole occupancy."
          },
          {
            "kind": "note",
            "title": "Same CN does not mean same polyhedron",
            "text": "Both ions in NiAs have coordination number 6, but Ni sees an octahedron whereas As sees a trigonal prism.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "7.7 Perovskite structure",
        "blocks": [
          {
            "kind": "figure",
            "id": "perovskite",
            "caption": "Ideal cubic ABO$_3$ perovskite with corner A, body-centre B and face-centre O sites."
          },
          {
            "kind": "paragraph",
            "text": "In the ideal cubic perovskite ABO$_3$, A occupies cube corners, B the body centre, and O the six face centres. Counting gives one A, one B and three O per cell. B is octahedrally coordinated by oxygen; A occupies a 12-coordinate cuboctahedral cavity."
          },
          {
            "kind": "table",
            "headers": [
              "Feature",
              "Ideal cubic perovskite"
            ],
            "rows": [
              [
                "Formula units per cell",
                "1"
              ],
              [
                "B-site coordination",
                "6, BO$_6$ octahedron"
              ],
              [
                "A-site coordination",
                "12"
              ],
              [
                "Connectivity",
                "Corner-sharing BO$_6$ octahedra"
              ],
              [
                "Examples",
                "CaTiO$_3$, SrTiO$_3$, BaTiO$_3$"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "t=\\frac{r_A+r_O}{\\sqrt2(r_B+r_O)}",
            "note": "Goldschmidt tolerance factor; $t\\u0007pprox1$ favours an undistorted cubic perovskite."
          },
          {
            "kind": "paragraph",
            "text": "Values below unity often produce tilting of BO$_6$ octahedra; off-centre displacement can produce ferroelectricity, as in BaTiO$_3$. The tolerance factor is empirical and uses coordination-dependent radii."
          },
          {
            "kind": "example",
            "title": "Perovskite counting",
            "question": "Count the particles in the ideal cubic ABO$_3$ cell.",
            "steps": [
              "A at 8 corners: $8(1/8)=1$.",
              "B at body centre: 1.",
              "O at 6 face centres: $6(1/2)=3$."
            ],
            "answer": "The cell contains one ABO$_3$ formula unit."
          }
        ]
      },
      {
        "title": "7.8 Spinel and inverse spinel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In a spinel AB$_2$O$_4$, oxide ions form an approximately CCP array. Per 32 O$^{2-}$ conventional spinel cell there are 64 tetrahedral and 32 octahedral holes; only 8 tetrahedral and 16 octahedral sites are occupied by cations."
          },
          {
            "kind": "table",
            "headers": [
              "Type",
              "Tetrahedral sites",
              "Octahedral sites",
              "Example"
            ],
            "rows": [
              [
                "Normal spinel",
                "A cations",
                "B cations",
                "MgAl$_2$O$_4$"
              ],
              [
                "Inverse spinel",
                "Half of B cations",
                "A plus remaining half of B",
                "Fe$_3$O$_4$ represented as Fe$^{3+}$[Fe$^{2+}$Fe$^{3+}$]O$_4$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Square brackets are often used for octahedral-site cations. Site preference depends on crystal-field stabilisation, ionic size, charge and synthesis conditions."
          },
          {
            "kind": "note",
            "title": "Occupancy fractions",
            "text": "Relative to all holes in the oxygen CCP array, a spinel occupies $1/8$ of tetrahedral holes and $1/2$ of octahedral holes.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "7.9 Corundum, diamond and graphite",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Structure",
              "Essential description",
              "Coordination"
            ],
            "rows": [
              [
                "Corundum, Al$_2$O$_3$",
                "O approximately HCP; Al occupies $2/3$ of octahedral holes",
                "Al 6; O 4"
              ],
              [
                "Diamond",
                "FCC lattice with $(0,0,0)$ and $(1/4,1/4,1/4)$ basis; 3D $sp^3$ network",
                "C 4"
              ],
              [
                "Graphite",
                "Hexagonal sheets of fused $sp^2$ carbon rings; weak interlayer forces",
                "C 3 within a layer"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Graphite's strong in-plane covalent bonds and weak interlayer interactions explain its anisotropic conductivity, easy cleavage and lubricating behaviour. Diamond's three-dimensional network explains hardness and high thermal conductivity."
          },
          {
            "kind": "note",
            "title": "Coordination versus bond count",
            "text": "In graphite, each carbon has three nearest covalent neighbours, while the delocalised $\\pi$ system extends over the layer. Coordination number 3 does not imply three localised single bonds only.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "7.10 Comparative structure table",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Type",
              "Host/occupied site",
              "Formula",
              "CN cation:anion",
              "$Z$"
            ],
            "rows": [
              [
                "NaCl",
                "FCC anion; all octa holes",
                "MX",
                "6:6",
                "4"
              ],
              [
                "CsCl",
                "Primitive cubic + cubic-hole basis",
                "MX",
                "8:8",
                "1"
              ],
              [
                "ZnS blende",
                "FCC anion; half tetra holes",
                "MX",
                "4:4",
                "4"
              ],
              [
                "Fluorite",
                "FCC cation; all tetra sites by anion",
                "MX$_2$",
                "8:4",
                "4"
              ],
              [
                "Antifluorite",
                "FCC anion; all tetra sites by cation",
                "M$_2$X",
                "4:8",
                "4"
              ],
              [
                "NiAs",
                "HCP anion; all octa holes",
                "MX",
                "6:6",
                "2 in primitive hexagonal cell"
              ],
              [
                "Perovskite",
                "A corners, B body, O faces",
                "ABO$_3$",
                "B 6, A 12",
                "1"
              ]
            ]
          }
        ]
      },
      {
        "title": "7.11 Wigner–Seitz cell and truncated-octahedron geometry",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A Wigner–Seitz cell is the region closer to one lattice point than to any other. It is constructed by drawing perpendicular bisector planes to vectors joining a chosen lattice point to its neighbours. For the BCC lattice, the Wigner–Seitz cell is a truncated octahedron."
          },
          {
            "kind": "table",
            "headers": [
              "Truncated-octahedron feature",
              "Value"
            ],
            "rows": [
              [
                "Total faces",
                "14"
              ],
              [
                "Regular hexagonal faces",
                "8"
              ],
              [
                "Square faces",
                "6"
              ],
              [
                "Edges",
                "36"
              ],
              [
                "Vertices",
                "24"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Why it appears in crystallography",
            "text": "The Wigner–Seitz cell is always primitive: it contains one lattice point. Its shape need not resemble the conventional cubic cell.",
            "tone": "exam"
          }
        ]
      }
    ],
    "review": [
      "Analyse structures by host lattice, hole occupancy, stoichiometry, coordination, $Z$ and nearest-neighbour geometry.",
      "NaCl is 6:6 with all octahedral holes occupied; CsCl is 8:8 on a primitive cubic lattice with basis.",
      "Zinc blende and wurtzite both have tetrahedral 4:4 coordination but different stacking.",
      "Fluorite and antifluorite reverse which species forms the FCC host.",
      "Perovskite, spinel and corundum are best understood through coordination polyhedra and site occupancy."
    ],
    "practice": [
      "Prove that CsCl is not a BCC Bravais lattice.",
      "Find the occupied fraction of octahedral holes in corundum.",
      "Compare zinc blende and wurtzite in one table.",
      "For a normal spinel, identify cations in tetrahedral and octahedral sites.",
      "Derive the nearest-neighbour distance in zinc blende."
    ]
  },
  {
    "number": 8,
    "title": "Crystal Defects, Non-Stoichiometry and Colour Centres",
    "shortTitle": "Defects and Non-Stoichiometry",
    "description": "Point defects, Schottky and Frenkel disorder, impurity compensation, metal excess/deficiency, colour centres and defect equilibria.",
    "sections": [
      {
        "title": "8.1 Perfect crystals and real crystals",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A perfect crystal is an ideal reference in which every lattice site has its prescribed occupant and the periodic arrangement extends without interruption. At any temperature above absolute zero, real crystals contain thermodynamically generated point defects. Additional defects arise during growth, deformation, irradiation and doping."
          },
          {
            "kind": "table",
            "headers": [
              "Dimensionality",
              "Defect class",
              "Examples"
            ],
            "rows": [
              [
                "0D",
                "Point defect",
                "Vacancy, interstitial, substitutional impurity"
              ],
              [
                "1D",
                "Line defect",
                "Edge and screw dislocations"
              ],
              [
                "2D",
                "Planar defect",
                "Grain boundary, stacking fault, twin boundary"
              ],
              [
                "3D",
                "Volume defect",
                "Pore, inclusion, precipitate"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "The elementary chemistry chapter concentrates on point defects because they directly affect stoichiometry, density, colour and electrical behaviour."
          }
        ]
      },
      {
        "title": "8.2 Stoichiometric intrinsic defects",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A stoichiometric defect preserves the overall cation:anion ratio of the ideal compound."
          },
          {
            "kind": "table",
            "headers": [
              "Defect",
              "Microscopic event",
              "Density effect",
              "Typical conditions/examples"
            ],
            "rows": [
              [
                "Vacancy defect in an elemental solid",
                "An atom is absent from a normal site",
                "Decreases",
                "High temperature"
              ],
              [
                "Interstitial defect in an elemental solid",
                "An extra atom occupies an interstitial site",
                "Increases",
                "Small atoms/open structures"
              ],
              [
                "Schottky defect",
                "Equal stoichiometric numbers of cations and anions are missing",
                "Decreases",
                "High coordination, similar ion sizes: NaCl, KCl, CsCl"
              ],
              [
                "Frenkel defect",
                "A smaller ion leaves its site and occupies an interstitial position",
                "Approximately unchanged",
                "Large size difference, lower CN: AgCl, AgBr, ZnS"
              ]
            ]
          },
          {
            "kind": "figure",
            "id": "defects",
            "caption": "Schottky vacancy pair and Frenkel vacancy–interstitial pair."
          },
          {
            "kind": "formula",
            "latex": "\\rho_{defective}<\\rho_{ideal}\\quad\\text{for Schottky disorder}"
          },
          {
            "kind": "formula",
            "latex": "\\rho_{defective}\\approx\\rho_{ideal}\\quad\\text{for Frenkel disorder}"
          },
          {
            "kind": "note",
            "title": "AgBr can show both",
            "text": "Silver bromide can exhibit both Schottky and Frenkel disorder. Lists of ‘typical examples’ are trends, not exclusive laws.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "8.3 Thermodynamics of defect formation",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Creating a defect costs enthalpy but increases configurational entropy. The equilibrium concentration therefore increases with temperature."
          },
          {
            "kind": "formula",
            "latex": "n\\approx N\\exp\\left(-\\frac{\\Delta H_f}{kT}\\right)",
            "note": "Schematic dependence for independent point defects; exact prefactors and exponents depend on the defect reaction."
          },
          {
            "kind": "derivation",
            "title": "Schottky-pair scaling",
            "steps": [
              {
                "latex": "K_S\\propto\\left(\\frac{n}{N}\\right)^2",
                "text": "A neutral pair contains one cation vacancy and one anion vacancy."
              },
              {
                "latex": "K_S=\\exp\\left(-\\frac{\\Delta G_S}{kT}\\right)",
                "text": "Equilibrium follows the free energy of pair formation."
              }
            ],
            "result": "\\frac{n}{N}\\propto\\exp\\left(-\\frac{\\Delta G_S}{2kT}\\right)"
          },
          {
            "kind": "paragraph",
            "text": "JEE questions usually test the qualitative trend: defect concentration rises exponentially with temperature and falls as formation energy increases."
          }
        ]
      },
      {
        "title": "8.4 Impurity defects and charge compensation",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A substitutional impurity of different charge requires compensation to preserve macroscopic electroneutrality. Compensation can occur through vacancies, interstitials or changes in oxidation state."
          },
          {
            "kind": "example",
            "title": "SrCl$_2$ doped NaCl",
            "question": "A crystal contains $10^{-3}$ mol SrCl$_2$ substitutionally dissolved in 1 mol NaCl. Neglect other defects. How many Na$^+$ vacancies are created?",
            "steps": [
              "Each Sr$^{2+}$ occupies one Na$^+$ site but supplies one extra positive charge relative to Na$^+$.",
              "One Na$^+$ vacancy, carrying one effective negative charge, compensates each Sr$^{2+}$ substitution.",
              "Therefore moles of Na vacancies equal moles of SrCl$_2$."
            ],
            "answer": "$10^{-3}$ mol of Na$^+$ vacancies are created."
          },
          {
            "kind": "formula",
            "latex": "\\mathrm{SrCl_2\\ in\\ NaCl}:\\quad [V_{Na}]=[Sr_{Na}^{\\bullet}]",
            "note": "Effective-charge notation is shown schematically."
          },
          {
            "kind": "note",
            "title": "Vacancy count, not missing pairs",
            "text": "One divalent cation replacing a monovalent cation creates one monovalent-cation vacancy per dopant, not one anion vacancy.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "8.5 Metal-excess defects",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A metal-excess solid contains effectively more metal than required by the ideal stoichiometric ratio, usually because negative charge is stored as electrons."
          },
          {
            "kind": "table",
            "headers": [
              "Mechanism",
              "Description",
              "Example/effect"
            ],
            "rows": [
              [
                "Anion vacancy with trapped electron",
                "An anion leaves; an electron occupies the vacancy to maintain neutrality. The electron-containing vacancy is an F-centre.",
                "NaCl heated in Na vapour; yellow colour"
              ],
              [
                "Interstitial cation plus electron",
                "Extra metal ions enter interstitial sites and electrons occupy nearby interstitial regions or conduction states.",
                "ZnO on heating loses O$_2$ and becomes yellow, n-type"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "\\mathrm{O_O\\rightarrow\\tfrac12O_2(g)+V_O^{\\bullet\\bullet}+2e^-}"
          },
          {
            "kind": "paragraph",
            "text": "F-centres absorb visible light because the trapped electron has quantised states in the vacancy potential. The absorbed wavelength and observed colour depend on the host lattice."
          },
          {
            "kind": "figure",
            "id": "f-centre",
            "caption": "An electron trapped in an anion vacancy forms a colour centre."
          },
          {
            "kind": "example",
            "title": "Stoichiometry of oxygen-deficient ZnO",
            "question": "Write the qualitative formula of zinc oxide after slight oxygen loss.",
            "steps": [
              "Oxygen vacancies reduce the oxygen content below one per zinc.",
              "Electrons left behind preserve charge balance and produce n-type conductivity."
            ],
            "answer": "The composition is written $\\mathrm{ZnO_{1-x}}$ with $x>0$."
          }
        ]
      },
      {
        "title": "8.6 Metal-deficiency defects",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Metal deficiency commonly occurs when a metal can adopt more than one oxidation state. Some lower-valent cation sites are vacant, while other cations oxidise to maintain electroneutrality."
          },
          {
            "kind": "paragraph",
            "text": "In wüstite, often written Fe$_{1-x}$O, some Fe$^{2+}$ sites are vacant and a corresponding fraction of Fe$^{2+}$ ions becomes Fe$^{3+}$."
          },
          {
            "kind": "example",
            "title": "Fe$_{0.95}$O oxidation-state fraction",
            "question": "Assume oxide is O$^{2-}$. In Fe$_{0.95}$O, let $y$ mol of iron per formula be Fe$^{3+}$ and the rest Fe$^{2+}$. Find $y$.",
            "steps": [
              "Charge balance: $3y+2(0.95-y)=2$.",
              "$3y+1.90-2y=2$.",
              "$y=0.10$."
            ],
            "answer": "Per Fe$_{0.95}$O, 0.10 Fe is Fe$^{3+}$ and 0.85 Fe is Fe$^{2+}$; about 10.53% of occupied Fe sites are Fe$^{3+}$."
          }
        ]
      },
      {
        "title": "8.7 Density changes caused by defects",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The theoretical density formula can be modified by replacing the ideal cell mass with the actual mass after defects. Cell-volume change is often neglected in elementary problems unless stated."
          },
          {
            "kind": "formula",
            "latex": "\\rho'=\\frac{m_{ideal}-m_{missing}+m_{added}}{V_{cell}}"
          },
          {
            "kind": "example",
            "title": "Schottky fraction from density",
            "question": "A crystal has ideal density $\\rho_0$ and measured density $0.99\\rho_0$. Assume the cell volume is unchanged and only whole formula units are missing through Schottky defects. Estimate the fraction of formula units missing.",
            "steps": [
              "Density is proportional to mass per cell when volume is unchanged.",
              "$\\rho/\\rho_0=0.99$ means 99% of ideal mass remains.",
              "Missing fraction is 1%."
            ],
            "answer": "Approximately 1% of formula units are absent."
          }
        ]
      },
      {
        "title": "8.8 Extended defects and mechanical behaviour",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dislocations allow plastic deformation at stresses far below those required to shear an entire perfect plane simultaneously. Grain boundaries interrupt periodicity and can impede dislocation motion, which is why reducing grain size often strengthens metals."
          },
          {
            "kind": "table",
            "headers": [
              "Defect",
              "Structural idea",
              "Important consequence"
            ],
            "rows": [
              [
                "Edge dislocation",
                "Extra half-plane of atoms",
                "Plastic slip"
              ],
              [
                "Screw dislocation",
                "Helical mismatch around a line",
                "Plastic slip and crystal growth"
              ],
              [
                "Stacking fault",
                "Incorrect local layer sequence",
                "Changes close-packed polytype/local energy"
              ],
              [
                "Grain boundary",
                "Interface between orientations",
                "Diffusion path; can strengthen or embrittle"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Scope",
            "text": "Detailed dislocation theory is beyond the standard JEE syllabus, but recognising the link between defects and real mechanical properties prevents the false idea that defects are merely imperfections with no function.",
            "tone": "concept"
          }
        ]
      }
    ],
    "review": [
      "Schottky disorder removes stoichiometric ion pairs and lowers density.",
      "Frenkel disorder moves an ion to an interstitial site and leaves density nearly unchanged.",
      "Aliovalent doping requires charge compensation.",
      "F-centres are electrons trapped in anion vacancies.",
      "Metal deficiency is commonly balanced by oxidation of some remaining cations."
    ],
    "practice": [
      "Compare Schottky and Frenkel defects in a table.",
      "Explain the colour of NaCl heated in sodium vapour.",
      "Calculate the Fe$^{3+}$ fraction in Fe$_{0.90}$O.",
      "Why does SrCl$_2$ doping create Na$^+$ vacancies in NaCl?",
      "Predict the temperature dependence of intrinsic vacancy concentration."
    ]
  },
  {
    "number": 9,
    "title": "Electrical Properties, Semiconductors and Superconductivity",
    "shortTitle": "Electrical Properties and Semiconductors",
    "description": "Band theory, metallic and ionic conduction, intrinsic/extrinsic semiconductors, p–n junctions and superconductivity.",
    "sections": [
      {
        "title": "9.1 From atomic orbitals to energy bands",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "When a very large number of atoms forms a solid, each atomic orbital splits into an enormous number of closely spaced crystal orbitals. These levels merge into allowed energy bands separated by forbidden energy gaps."
          },
          {
            "kind": "figure",
            "id": "bands",
            "caption": "Valence bands, conduction bands and band gaps in conductors, semiconductors and insulators."
          },
          {
            "kind": "table",
            "headers": [
              "Term",
              "Meaning"
            ],
            "rows": [
              [
                "Valence band",
                "Highest band occupied at absolute zero in an ordinary semiconductor or insulator"
              ],
              [
                "Conduction band",
                "Higher band whose mobile carriers can transport charge"
              ],
              [
                "Band gap $E_g$",
                "Forbidden energy interval between valence- and conduction-band edges"
              ],
              [
                "Fermi level $E_F$",
                "Chemical potential for electrons; at 0 K it separates occupied and unoccupied states"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Electrical conduction requires both mobile charge carriers and nearby unoccupied states into which they can move under an electric field."
          }
        ]
      },
      {
        "title": "9.2 Conductors, semiconductors and insulators",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Class",
              "Band picture",
              "Temperature dependence of conductivity"
            ],
            "rows": [
              [
                "Metal",
                "Partially filled band or overlapping bands",
                "Usually decreases as temperature rises because lattice scattering increases"
              ],
              [
                "Semiconductor",
                "Small band gap, typically of order electron-volts or less",
                "Increases strongly with temperature as carriers are generated"
              ],
              [
                "Insulator",
                "Large band gap",
                "Remains very low under ordinary conditions"
              ]
            ]
          },
          {
            "kind": "formula",
            "latex": "\\sigma=nq\\mu",
            "note": "For one carrier type: number density $n$, charge magnitude $q$, mobility $\\mu$."
          },
          {
            "kind": "paragraph",
            "text": "In a metal, carrier density is already large and temperature mainly changes mobility. In a semiconductor, thermal excitation changes carrier density dramatically, often dominating the mobility decrease."
          },
          {
            "kind": "example",
            "title": "Temperature trend",
            "question": "Why does the resistance of a pure semiconductor usually fall on heating while that of a metal rises?",
            "steps": [
              "Heating a semiconductor promotes many more electrons across the band gap, increasing carrier density.",
              "Heating a metal mainly increases phonon scattering, reducing mobility.",
              "The dominant effects therefore have opposite signs."
            ],
            "answer": "Semiconductor conductivity rises; metallic conductivity usually falls with temperature."
          }
        ]
      },
      {
        "title": "9.3 Intrinsic semiconductors",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An intrinsic semiconductor is chemically pure in the ideal model. Thermal excitation creates an electron in the conduction band and a corresponding hole in the valence band."
          },
          {
            "kind": "formula",
            "latex": "n=p=n_i"
          },
          {
            "kind": "formula",
            "latex": "\\sigma_i=q n_i(\\mu_e+\\mu_h)"
          },
          {
            "kind": "formula",
            "latex": "n_i\\propto T^{3/2}\\exp\\left(-\\frac{E_g}{2kT}\\right)"
          },
          {
            "kind": "paragraph",
            "text": "A hole is not a separate positive particle in vacuum; it is a convenient description of the collective motion of missing valence electrons. Under an electric field, electron and hole currents add to the conventional current."
          },
          {
            "kind": "note",
            "title": "Fermi level",
            "text": "For a symmetric ideal intrinsic semiconductor, $E_F$ lies near the middle of the gap. Different electron and hole effective masses shift it slightly.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "9.4 Extrinsic semiconductors",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Controlled substitutional doping introduces shallow energy levels and greatly increases carrier density without destroying the crystal lattice."
          },
          {
            "kind": "table",
            "headers": [
              "Type",
              "Dopant in Si/Ge",
              "Majority carrier",
              "Minority carrier",
              "Fermi-level shift"
            ],
            "rows": [
              [
                "n-type",
                "Group 15 donor: P, As, Sb",
                "Electrons",
                "Holes",
                "Toward conduction band"
              ],
              [
                "p-type",
                "Group 13 acceptor: B, Al, Ga",
                "Holes",
                "Electrons",
                "Toward valence band"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "In n-type material, donor atoms contribute electrons but become fixed positively charged donor ions after ionisation. The crystal remains electrically neutral overall. Similarly, ionised acceptors are fixed negative centres in p-type material."
          },
          {
            "kind": "note",
            "title": "n-type is not negatively charged",
            "text": "The labels n and p identify the majority mobile carrier. They do not mean the bulk solid carries net negative or positive charge.",
            "tone": "trap"
          },
          {
            "kind": "example",
            "title": "Dopant choice",
            "question": "Which dopant converts silicon into p-type material: phosphorus or boron? Explain.",
            "steps": [
              "Silicon has four valence electrons.",
              "Boron has three and leaves one unsatisfied bond that acts as an acceptor level.",
              "Thermal excitation fills the acceptor and leaves a mobile hole."
            ],
            "answer": "Boron produces p-type silicon."
          }
        ]
      },
      {
        "title": "9.5 The p–n junction",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "When p-type and n-type regions meet, majority carriers diffuse across the interface and recombine. Fixed ionised donors and acceptors remain, creating a depletion region and an internal electric field that opposes further diffusion."
          },
          {
            "kind": "figure",
            "id": "pn",
            "caption": "Depletion region and band bending across a p–n junction."
          },
          {
            "kind": "table",
            "headers": [
              "Bias",
              "Effect on barrier/depletion width",
              "Current"
            ],
            "rows": [
              [
                "Forward bias",
                "Reduces barrier and narrows depletion region",
                "Large majority-carrier current"
              ],
              [
                "Reverse bias",
                "Raises effective barrier and widens depletion region",
                "Small minority-carrier current until breakdown"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Rectification follows because the junction conducts much more readily in forward bias than in reverse bias. Light can generate electron–hole pairs, enabling photodiodes and solar cells."
          },
          {
            "kind": "example",
            "title": "Forward-bias identification",
            "question": "For a silicon diode, which terminal should be connected to the p side for forward bias?",
            "steps": [
              "Forward bias must lower the junction barrier.",
              "Connect the p region to the positive terminal and the n region to the negative terminal."
            ],
            "answer": "Positive to p and negative to n gives forward bias."
          }
        ]
      },
      {
        "title": "9.6 Ionic and mixed conduction",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In ionic solids, charge can be transported by ions moving through vacancies or interstitial pathways. Ionic conductivity therefore depends strongly on defect concentration, migration energy and temperature."
          },
          {
            "kind": "formula",
            "latex": "\\sigma_{ion}\\propto n_{defect}\\exp\\left(-\\frac{E_m}{kT}\\right)"
          },
          {
            "kind": "paragraph",
            "text": "Fast-ion conductors such as stabilised zirconia, beta-alumina and some fluorite oxides have connected pathways and abundant mobile defects. Some materials conduct both ions and electrons and are called mixed conductors."
          },
          {
            "kind": "note",
            "title": "Solid ionic conductors exist",
            "text": "The elementary rule ‘ionic solids do not conduct’ means ordinary defect-poor crystals conduct poorly at room temperature. It is not an absolute statement for all solids and temperatures.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "9.7 Superconductivity",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A superconductor below its critical temperature exhibits zero dc electrical resistance and expels magnetic flux from its interior, the Meissner effect. Perfect conductivity alone does not define superconductivity; magnetic flux expulsion is essential."
          },
          {
            "kind": "figure",
            "id": "superconductivity",
            "caption": "Resistance transition and Meissner-state field exclusion."
          },
          {
            "kind": "table",
            "headers": [
              "Quantity",
              "Meaning"
            ],
            "rows": [
              [
                "Critical temperature $T_c$",
                "Highest temperature for the superconducting state at specified field/current"
              ],
              [
                "Critical field $H_c$ or $H_{c1},H_{c2}$",
                "Magnetic-field limits of the superconducting state"
              ],
              [
                "Critical current density $J_c$",
                "Current-density limit before superconductivity is destroyed"
              ],
              [
                "Meissner effect",
                "Expulsion of magnetic flux on cooling through $T_c$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Type I superconductors show one critical field and complete flux exclusion below it. Type II superconductors have a mixed vortex state between lower and upper critical fields and are more useful in high-field magnets."
          },
          {
            "kind": "note",
            "title": "BCS and high-$T_c$ materials",
            "text": "Conventional superconductors are described by Cooper pairing mediated by lattice vibrations. Cuprate high-$T_c$ superconductors are more complex; detailed microscopic theory is outside the JEE syllabus.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "9.8 Numerical relations and diagnostic plots",
        "blocks": [
          {
            "kind": "example",
            "title": "Intrinsic carrier ratio",
            "question": "Two intrinsic semiconductors at the same temperature have gaps 1.0 eV and 1.4 eV. Ignoring prefactors, find the ratio $n_{i,1}/n_{i,2}$ at 300 K, where $kT\\u0007pprox0.0259$ eV.",
            "steps": [
              "$n_i\\propto\\exp[-E_g/(2kT)]$.",
              "Ratio $=\\exp[(1.4-1.0)/(2\\times0.0259)]$.",
              "Exponent $\\u0007pprox7.72$, so ratio $\\u0007pprox2.25\\times10^3$."
            ],
            "answer": "The smaller-gap semiconductor has roughly $2.3\\times10^3$ times the intrinsic carrier density."
          },
          {
            "kind": "paragraph",
            "text": "A plot of $\\ln\\sigma$ or $\\ln n_i$ against $1/T$ is approximately linear in an activated regime. The slope can be used to estimate an activation energy or half the band gap, depending on the measured quantity and assumptions."
          }
        ]
      },
      {
        "title": "9.9 Fermi–Dirac occupancy",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The probability that an available one-electron state of energy $E$ is occupied at temperature $T$ is given by the Fermi–Dirac distribution."
          },
          {
            "kind": "formula",
            "latex": "f(E)=\\frac{1}{1+\\exp[(E-E_F)/(kT)]}"
          },
          {
            "kind": "bullets",
            "items": [
              "At $E=E_F$, $f=1/2$ at every non-zero temperature.",
              "At 0 K, states below $E_F$ are occupied and those above are empty.",
              "Thermal broadening occurs over an energy scale of order $kT$."
            ]
          },
          {
            "kind": "note",
            "title": "Band occupancy is not carrier density by itself",
            "text": "Carrier concentration also depends on the density of available states. The Fermi function supplies the occupation probability.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "9.10 Purification and liquid-crystal materials",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Semiconductor devices require extremely pure material. In zone refining, a narrow molten zone moves along a solid bar. When an impurity has distribution coefficient $k=C_{solid}/C_{liquid}<1$, it prefers the melt and is swept toward one end through repeated passes."
          },
          {
            "kind": "paragraph",
            "text": "Liquid crystals combine fluidity with orientational order. Nematic phases possess average molecular alignment without layered positional order; smectic phases possess layers; cholesteric phases show a helical director. Their optical anisotropy can be controlled by electric fields."
          },
          {
            "kind": "table",
            "headers": [
              "Phase",
              "Orientational order",
              "Layering"
            ],
            "rows": [
              [
                "Nematic",
                "Yes",
                "No"
              ],
              [
                "Smectic",
                "Yes",
                "Yes"
              ],
              [
                "Cholesteric",
                "Locally nematic with helical twist",
                "No simple equally spaced layers required"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "LCD principle",
            "text": "A twisted-nematic display uses field-controlled molecular orientation to change the polarisation state and transmitted intensity of light between polarisers.",
            "tone": "exam"
          }
        ]
      }
    ],
    "review": [
      "Bands arise from splitting of atomic levels in a periodic solid.",
      "Metals have available nearby states; semiconductors have a small gap; insulators a large gap.",
      "Intrinsic semiconductors satisfy $n=p$.",
      "Donors create n-type and acceptors p-type material without net bulk charge.",
      "Superconductivity requires zero resistance and the Meissner effect."
    ],
    "practice": [
      "Explain why a filled valence band cannot conduct by itself.",
      "Derive the intrinsic conductivity expression.",
      "Distinguish majority carriers, minority carriers and fixed dopant ions.",
      "Sketch how forward bias changes a p–n junction depletion region.",
      "Why is zero resistance alone insufficient to define a superconductor?"
    ]
  },
  {
    "number": 10,
    "title": "Magnetic Properties of Solids and Integrated Revision",
    "shortTitle": "Magnetism and Integrated Problems",
    "description": "Atomic magnetic moments, susceptibility, dia/para/ferro/antiferro/ferrimagnetism, Curie laws, hysteresis and integrated JEE Advanced applications.",
    "sections": [
      {
        "title": "10.1 Origin of magnetic moments",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Magnetism arises mainly from electron orbital motion and electron spin. In many transition-metal and lanthanide compounds, partially filled shells carry permanent moments. In closed-shell species, applied fields induce small opposing currents that produce diamagnetism."
          },
          {
            "kind": "formula",
            "latex": "\\boldsymbol{\\mu}= -g\\mu_B\\frac{\\mathbf{J}}{\\hbar}"
          },
          {
            "kind": "paragraph",
            "text": "For many first-row transition-metal ions in complexes where orbital angular momentum is substantially quenched, the spin-only approximation is useful."
          },
          {
            "kind": "formula",
            "latex": "\\mu_{so}=\\sqrt{n(n+2)}\\,\\mu_B",
            "note": "$n$ is the number of unpaired electrons."
          },
          {
            "kind": "example",
            "title": "Spin-only moment",
            "question": "Calculate the spin-only magnetic moment of a high-spin $d^5$ ion.",
            "steps": [
              "A high-spin $d^5$ ion has five unpaired electrons.",
              "$\\mu=\\sqrt{5(5+2)}\\mu_B=\\sqrt{35}\\mu_B$."
            ],
            "answer": "$\\mu\\u0007pprox5.92\\,\\mu_B$."
          }
        ]
      },
      {
        "title": "10.2 Magnetic field quantities and susceptibility",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Magnetisation $M$ is magnetic dipole moment per unit volume. In a linear material, it is proportional to applied magnetic field strength $H$."
          },
          {
            "kind": "formula",
            "latex": "M=\\chi H"
          },
          {
            "kind": "formula",
            "latex": "B=\\mu_0(H+M)=\\mu_0(1+\\chi)H"
          },
          {
            "kind": "table",
            "headers": [
              "Response",
              "Sign/magnitude of $\\chi$",
              "Field behaviour"
            ],
            "rows": [
              [
                "Diamagnetic",
                "Small negative",
                "Weakly repelled; induced moment opposes field"
              ],
              [
                "Paramagnetic",
                "Small positive",
                "Weakly attracted; permanent moments partially align"
              ],
              [
                "Ferromagnetic",
                "Very large positive below $T_C$",
                "Spontaneous magnetisation and domains"
              ],
              [
                "Antiferromagnetic",
                "Ordered opposing moments below $T_N$",
                "Net moment ideally zero"
              ],
              [
                "Ferrimagnetic",
                "Opposing unequal sublattice moments",
                "Non-zero spontaneous magnetisation"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "All matter is diamagnetic at some level",
            "text": "Paramagnetism or cooperative ordering usually dominates when unpaired electrons are present. Diamagnetism remains as a smaller background contribution.",
            "tone": "concept"
          }
        ]
      },
      {
        "title": "10.3 Diamagnetism and paramagnetism",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Diamagnetic substances contain no required permanent net moment in zero field and develop an induced moment opposite to the applied field. Their susceptibility is nearly temperature independent. Paramagnets contain permanent moments that are randomly oriented without a field and partially align when a field is applied."
          },
          {
            "kind": "formula",
            "latex": "\\chi=\\frac{C}{T}",
            "note": "Curie's law for an ideal paramagnet."
          },
          {
            "kind": "formula",
            "latex": "\\mu_{eff}=2.828\\sqrt{\\chi_MT}\\,\\mu_B",
            "note": "Common cgs relation when molar susceptibility is in $\\mathrm{cm^3\\,mol^{-1}}$."
          },
          {
            "kind": "table",
            "headers": [
              "Class",
              "Examples"
            ],
            "rows": [
              [
                "Diamagnetic",
                "NaCl, ZnO with Zn$^{2+}$ $d^{10}$, H$_2$O, diamond"
              ],
              [
                "Paramagnetic",
                "O$_2$, Fe$^{3+}$ salts, Cu$^{2+}$ salts, many transition-metal ions"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Unpaired electrons from moment",
            "question": "A compound has a spin-only moment close to $3.87\\,\\mu_B$. Estimate the number of unpaired electrons.",
            "steps": [
              "Compare with $\\sqrt{n(n+2)}$.",
              "For $n=3$, $\\sqrt{15}=3.87$."
            ],
            "answer": "The ion has three unpaired electrons."
          }
        ]
      },
      {
        "title": "10.4 Ferromagnetism and domains",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In a ferromagnet, exchange interactions favour parallel alignment of neighbouring moments below the Curie temperature $T_C$. A macroscopic specimen divides into domains to reduce magnetostatic energy. In an unmagnetised sample, domain magnetisations can cancel even though each domain is internally ordered."
          },
          {
            "kind": "figure",
            "id": "magnetic-order",
            "caption": "Parallel, antiparallel and unequal antiparallel magnetic ordering."
          },
          {
            "kind": "paragraph",
            "text": "An applied field moves domain walls and rotates domain moments. After the field is removed, some magnetisation can remain, producing hysteresis."
          },
          {
            "kind": "table",
            "headers": [
              "Hysteresis term",
              "Meaning",
              "Material implication"
            ],
            "rows": [
              [
                "Saturation",
                "All accessible domains aligned",
                "Maximum magnetisation"
              ],
              [
                "Remanence",
                "Magnetisation at zero field after saturation",
                "High for permanent magnets"
              ],
              [
                "Coercive field",
                "Reverse field required to reduce $M$ to zero",
                "Low for transformer cores; high for permanent magnets"
              ],
              [
                "Loop area",
                "Energy dissipated per magnetic cycle",
                "Small for soft magnetic materials"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "Above $T_C$, thermal disorder destroys long-range ferromagnetic order and the material becomes paramagnetic, often following a Curie–Weiss law."
          },
          {
            "kind": "formula",
            "latex": "\\chi=\\frac{C}{T-\\theta}"
          },
          {
            "kind": "paragraph",
            "text": "For a ferromagnet, $\\theta$ is generally positive and close to $T_C$."
          },
          {
            "kind": "example",
            "title": "Soft versus hard magnet",
            "question": "Which material is preferred for a transformer core: one with a narrow or wide hysteresis loop?",
            "steps": [
              "The core is magnetised and demagnetised every ac cycle.",
              "Energy loss per cycle equals the loop area.",
              "A narrow loop also implies low coercivity."
            ],
            "answer": "A soft magnetic material with a narrow hysteresis loop is preferred."
          }
        ]
      },
      {
        "title": "10.5 Antiferromagnetism and ferrimagnetism",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In an antiferromagnet, neighbouring sublattice moments align antiparallel with equal magnitude, giving zero ideal net magnetisation below the Néel temperature $T_N$. In a ferrimagnet, sublattice moments are antiparallel but unequal, so a net moment remains."
          },
          {
            "kind": "table",
            "headers": [
              "Order",
              "Sublattice relation",
              "Net moment",
              "Examples"
            ],
            "rows": [
              [
                "Ferromagnetic",
                "Parallel",
                "Large",
                "Fe, Co, Ni"
              ],
              [
                "Antiferromagnetic",
                "Antiparallel and equal",
                "Ideally zero",
                "MnO, NiO, Cr$_2$O$_3$"
              ],
              [
                "Ferrimagnetic",
                "Antiparallel and unequal",
                "Non-zero",
                "Fe$_3$O$_4$, ferrites MFe$_2$O$_4$"
              ]
            ]
          },
          {
            "kind": "paragraph",
            "text": "In magnetite, Fe$^{3+}$ moments on tetrahedral and octahedral sites largely cancel, while Fe$^{2+}$ moments on octahedral sites produce the net ferrimagnetic moment in the simplified ionic picture."
          },
          {
            "kind": "note",
            "title": "Paramagnetic does not mean non-interacting forever",
            "text": "A material can be paramagnetic above an ordering temperature and become ferro-, antiferro- or ferrimagnetic below it.",
            "tone": "exam"
          }
        ]
      },
      {
        "title": "10.6 Temperature laws and magnetic ordering",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Regime",
              "Typical relation",
              "Interpretation"
            ],
            "rows": [
              [
                "Ideal paramagnet",
                "$\\chi=C/T$",
                "Independent moments"
              ],
              [
                "Curie–Weiss paramagnet",
                "$\\chi=C/(T-\\theta)$",
                "Mean-field interactions"
              ],
              [
                "Ferromagnet above $T_C$",
                "$\\theta>0$",
                "Predominantly parallel correlations"
              ],
              [
                "Antiferromagnet above $T_N$",
                "Often $\\theta<0$",
                "Predominantly antiparallel correlations"
              ]
            ]
          },
          {
            "kind": "example",
            "title": "Curie-law comparison",
            "question": "At fixed field, an ideal paramagnet has magnetisation $M_1$ at 300 K. What is its magnetisation at 600 K if the Curie-law low-field regime applies?",
            "steps": [
              "$M=\\chi H=(C/T)H$.",
              "Doubling $T$ halves $M$ at fixed $H$."
            ],
            "answer": "$M_2=M_1/2$."
          }
        ]
      },
      {
        "title": "10.7 Magnetic behaviour from electronic configuration",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "For isolated first-row transition-metal ions, count unpaired d electrons after considering oxidation state and, where relevant, ligand-field splitting. In solids, exchange coupling can then create cooperative order."
          },
          {
            "kind": "table",
            "headers": [
              "Ion/configuration",
              "Unpaired electrons in common high-spin case",
              "Spin-only moment"
            ],
            "rows": [
              [
                "Ti$^{3+}$, $d^1$",
                "1",
                "1.73 $\\mu_B$"
              ],
              [
                "V$^{3+}$, $d^2$",
                "2",
                "2.83 $\\mu_B$"
              ],
              [
                "Cr$^{3+}$, $d^3$",
                "3",
                "3.87 $\\mu_B$"
              ],
              [
                "Mn$^{2+}$, high-spin $d^5$",
                "5",
                "5.92 $\\mu_B$"
              ],
              [
                "Fe$^{2+}$, high-spin $d^6$",
                "4",
                "4.90 $\\mu_B$"
              ],
              [
                "Co$^{2+}$, high-spin $d^7$",
                "3",
                "3.87 $\\mu_B$ spin-only; orbital contribution often important"
              ],
              [
                "Ni$^{2+}$, $d^8$ octahedral",
                "2",
                "2.83 $\\mu_B$ spin-only"
              ],
              [
                "Cu$^{2+}$, $d^9$",
                "1",
                "1.73 $\\mu_B$ spin-only"
              ],
              [
                "Zn$^{2+}$, $d^{10}$",
                "0",
                "Diamagnetic"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Spin-only limitations",
            "text": "Co$^{2+}$ and many heavier ions can show substantial orbital contributions. Lanthanide moments generally require the full $L$, $S$, $J$ treatment rather than simple unpaired-electron counting.",
            "tone": "trap"
          }
        ]
      },
      {
        "title": "10.8 Integrated Solid State problems",
        "blocks": [
          {
            "kind": "example",
            "title": "Structure, density and coordination",
            "question": "An MX solid has $Z=4$, 6:6 coordination and nearest unlike-neighbour distance $a/2$. Identify the structure type and write its density formula.",
            "steps": [
              "$Z=4$, 6:6 coordination and $d_{MX}=a/2$ identify rock salt.",
              "Cell mass is $4(M_M+M_X)/N_A$.",
              "Divide by $a^3$."
            ],
            "answer": "NaCl type; $\\rho=4(M_M+M_X)/(N_Aa^3)$."
          },
          {
            "kind": "example",
            "title": "Defect plus magnetism",
            "question": "Fe$_{1-x}$O contains Fe$^{2+}$ and Fe$^{3+}$. Why does increasing $x$ alter both conductivity and magnetism?",
            "steps": [
              "More cation vacancies require more Fe$^{3+}$ for charge balance.",
              "Electron hopping between Fe$^{2+}$/Fe$^{3+}$ changes electronic transport.",
              "The two oxidation states have different d-electron counts and magnetic moments."
            ],
            "answer": "Non-stoichiometry simultaneously changes carrier transport and the population/coupling of magnetic ions."
          },
          {
            "kind": "example",
            "title": "Packing and holes",
            "question": "Anions are CCP and cations fill all octahedral holes. State the formula, cation coordination, $Z$, and packing efficiency of the anion framework.",
            "steps": [
              "All $N$ octahedral holes are filled by $N$ cations, giving MX.",
              "Octahedral cation coordination is 6.",
              "The FCC conventional cell contains 4 anions and 4 cations, so $Z=4$.",
              "The host CCP framework has 74.05% equal-sphere packing efficiency."
            ],
            "answer": "MX, cation CN 6, $Z=4$, host packing efficiency 74.05%."
          },
          {
            "kind": "example",
            "title": "Semiconductor and defect chemistry",
            "question": "Oxygen-deficient ZnO is commonly n-type. Connect the defect reaction to its conductivity.",
            "steps": [
              "Oxygen loss creates oxygen vacancies and leaves electrons.",
              "The electrons enter donor-like/conduction states.",
              "Electrons become majority carriers."
            ],
            "answer": "Oxygen vacancies generate electrons, producing n-type conductivity."
          },
          {
            "kind": "example",
            "title": "Radius ratio and pressure",
            "question": "A salt changes from NaCl-type to CsCl-type under high pressure. Explain the coordination change.",
            "steps": [
              "NaCl type has CN 6; CsCl type has CN 8.",
              "High pressure favours structures with higher coordination and often higher density.",
              "The rigid ambient-pressure radius-ratio chart cannot alone describe compressed ions."
            ],
            "answer": "Pressure stabilises the denser 8-coordinate CsCl-type arrangement."
          }
        ]
      },
      {
        "title": "10.9 Final comparison and examination traps",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Topic",
              "Correct statement",
              "Common error"
            ],
            "rows": [
              [
                "Lattice",
                "Abstract array of equivalent points",
                "Calling every drawn atomic array a Bravais lattice"
              ],
              [
                "CsCl",
                "Primitive cubic lattice plus two-ion basis",
                "Calling it BCC"
              ],
              [
                "HCP/CCP",
                "Same local packing, different stacking",
                "Treating CCP and HCP as identical crystals"
              ],
              [
                "Frenkel defect",
                "Mass remains in crystal; density nearly unchanged",
                "Assuming every defect lowers density"
              ],
              [
                "n-type semiconductor",
                "Electron majority carriers, neutral bulk",
                "Calling the crystal negatively charged"
              ],
              [
                "Ferromagnetism",
                "Domains may cancel in zero field",
                "Assuming every ferromagnetic specimen is permanently magnetised"
              ],
              [
                "Radius ratio",
                "Geometrical guide",
                "Treating it as an exact law"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Revision strategy",
            "text": "For any numerical problem, first identify the structural model and write one geometrical relation, one counting relation and one physical-property relation. Most difficult-looking questions reduce to a controlled combination of these three.",
            "tone": "result"
          }
        ]
      },
      {
        "title": "10.10 Critical fields and magnetic measurement",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "For an ideal Type I superconductor, a commonly used empirical temperature dependence of the thermodynamic critical field is"
          },
          {
            "kind": "formula",
            "latex": "H_c(T)=H_c(0)\\left[1-\\left(\\frac{T}{T_c}\\right)^2\\right]"
          },
          {
            "kind": "paragraph",
            "text": "Type II superconductors instead possess lower and upper critical fields $H_{c1}$ and $H_{c2}$, with quantised vortices in the mixed state between them."
          },
          {
            "kind": "table",
            "headers": [
              "Method",
              "What it measures"
            ],
            "rows": [
              [
                "Gouy balance",
                "Force on a sample in a non-uniform magnetic field; used to estimate susceptibility"
              ],
              [
                "Faraday balance",
                "Magnetic force on a small sample in a field gradient"
              ],
              [
                "SQUID magnetometer",
                "Extremely sensitive magnetic flux and moment using superconducting quantum interference"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Measurement sign",
            "text": "Diamagnetic samples are driven toward weaker field; paramagnetic samples toward stronger field in a field gradient.",
            "tone": "exam"
          }
        ]
      }
    ],
    "review": [
      "Magnetic moments arise from spin and orbital motion; spin-only $\\mu=\\sqrt{n(n+2)}\\mu_B$ is often useful for first-row ions.",
      "Diamagnets have small negative $\\chi$; ideal paramagnets follow $\\chi=C/T$.",
      "Ferro-, antiferro- and ferrimagnetism differ in sublattice alignment and net moment.",
      "Hysteresis distinguishes soft and hard magnetic materials.",
      "Integrated solid-state questions combine geometry, stoichiometry, defects and properties."
    ],
    "practice": [
      "Calculate the spin-only moment for high-spin Fe$^{3+}$.",
      "Distinguish antiferromagnetism from ferrimagnetism using sublattice moments.",
      "Why can a ferromagnet show zero macroscopic magnetisation before field treatment?",
      "Explain the signs of Curie–Weiss temperature for dominant ferro- and antiferromagnetic interactions.",
      "Create a four-step solution plan for a density-plus-defect unit-cell problem."
    ]
  }
];

export function getSolidStatePart(number: number) {
  return SOLID_STATE_PARTS.find((part) => part.number === number);
}
