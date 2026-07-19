import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 4,
  slug: "classification-of-crystalline-solids",
  title: "Classification of Crystalline Solids",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart04() {
  return <SolidStatePartPage data={data} />;
}
