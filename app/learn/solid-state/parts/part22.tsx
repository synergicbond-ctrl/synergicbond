import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 22,
  slug: "electrical-properties-of-solids",
  title: "Electrical Properties of Solids",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart22() {
  return <SolidStatePartPage data={data} />;
}
