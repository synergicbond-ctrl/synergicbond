import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 23,
  slug: "magnetic-properties-of-solids",
  title: "Magnetic Properties of Solids",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart23() {
  return <SolidStatePartPage data={data} />;
}
