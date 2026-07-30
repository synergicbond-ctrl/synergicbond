import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 10 — Magnetic Properties of Solids | Synergic Bond", description: "Pages 86–89: susceptibility, magnetic moment, Curie law, Gouy/SQUID methods, cooperative spin order and magnetic behaviour of superconductors." };

const data = {
  "part": 10,
  "title": "Magnetic Properties of Solids",
  "subtitle": "Pages 86–89: susceptibility, magnetic moment, Curie law, Gouy/SQUID methods, cooperative spin order and magnetic behaviour of superconductors.",
  "sourcePages": "Pages 86–89",
  "overview": "The final part reproduces the complete equation set and both worked illustrations with corrected notation. It also adds ferrimagnetism and hysteresis for JEE Advanced depth.",
  "modules": [
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
  ],
  "sourceSections": [
    {
      "title": "Magnetization and susceptibility",
      "blocks": [
        {
          "type": "formula",
          "latex": "M=\\chi H",
          "display": ""
        },
        {
          "type": "formula",
          "latex": "\\chi_m=\\chi V_m",
          "display": ""
        },
        {
          "type": "table",
          "headers": [
            "Response",
            "Sign of $\\chi$",
            "Microscopic origin",
            "Field behaviour"
          ],
          "rows": [
            [
              "Diamagnetic",
              "$\\chi<0$",
              "Induced currents oppose applied field",
              "Weakly expelled"
            ],
            [
              "Paramagnetic",
              "$\\chi>0$",
              "Permanent moments from unpaired electrons",
              "Weakly attracted"
            ],
            [
              "Ferromagnetic",
              "Large, nonlinear",
              "Parallel domain order",
              "Strong attraction and remanence"
            ],
            [
              "Antiferromagnetic",
              "Small net moment",
              "Antiparallel equal sublattices",
              "Net cancellation"
            ],
            [
              "Ferrimagnetic",
              "Non-zero net moment",
              "Antiparallel unequal sublattices",
              "Permanent magnetization possible"
            ]
          ]
        }
      ]
    },
    {
      "title": "Spin-only magnetic moment and Curie law",
      "blocks": [
        {
          "type": "formula",
          "latex": "\\mu_{\\rm eff}=g\\sqrt{S(S+1)}\\,\\mu_B",
          "display": ""
        },
        {
          "type": "formula",
          "latex": "\\mu_{\\rm eff}\\approx\\sqrt{n(n+2)}\\,\\mu_B",
          "display": ""
        },
        {
          "type": "derivation",
          "title": "Molar susceptibility from spin",
          "lines": [
            "\\chi_m=\\frac{N_Ag^2\\mu_0\\mu_B^2S(S+1)}{3kT}"
          ],
          "result": "\\chi_m=\\frac CT"
        },
        {
          "type": "p",
          "text": "Curie behaviour decreases as $1/T$ because thermal agitation randomizes moments. In interacting materials the Curie–Weiss form $\\chi=C/(T-\\theta)$ is often more appropriate."
        }
      ]
    },
    {
      "title": "Measurement: Gouy and SQUID",
      "blocks": [
        {
          "type": "p",
          "text": "In a Gouy balance, a paramagnetic sample is drawn into the stronger field and appears heavier; a diamagnetic sample is expelled and appears lighter. A SQUID uses flux quantization and Josephson tunnelling to detect extremely small magnetic flux changes."
        },
        {
          "type": "callout",
          "label": "Units",
          "text": "Volume susceptibility is dimensionless in SI; molar susceptibility has units $\\mathrm{m^3\\,mol^{-1}}$.",
          "tone": "info"
        }
      ]
    },
    {
      "title": "Magnetic properties of superconductors",
      "blocks": [
        {
          "type": "p",
          "text": "A Type-I superconductor completely excludes magnetic field below $H_c$ (apart from a thin penetration depth). Type-II materials admit quantized flux vortices between lower and upper critical fields."
        },
        {
          "type": "formula",
          "latex": "H_c(T)=H_c(0)\\left[1-\\left(\\frac{T}{T_c}\\right)^2\\right]",
          "display": ""
        },
        {
          "type": "callout",
          "label": "Meissner distinction",
          "text": "Perfect conductivity would preserve an initially trapped field; the Meissner state expels field on cooling through $T_c$.",
          "tone": "trap"
        }
      ]
    }
  ],
  "enrichments": [
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
    }
  ],
  "figures": [
    "dia-para-lines",
    "gouy",
    "squid",
    "spin-moment",
    "curie-law",
    "spin-orders",
    "hysteresis",
    "meissner",
    "critical-field"
  ],
  "examples": [
    {
      "title": "Spin-only moment",
      "question": "Find the spin-only moment for three unpaired electrons.",
      "steps": [
        "Use $\\mu=\\sqrt{n(n+2)}\\mu_B$.",
        "$n=3$."
      ],
      "answer": "$\\mu=\\sqrt{15}\\mu_B=3.87\\mu_B$."
    },
    {
      "title": "Curie ratio",
      "question": "A paramagnet obeys Curie law. Find $\\chi_m(600\\,K)/\\chi_m(300\\,K)$.",
      "steps": [
        "$\\chi_m=C/T$.",
        "The temperature doubles."
      ],
      "answer": "The ratio is $1/2$."
    },
    {
      "title": "Critical field of lead-like sample",
      "question": "For $T_c=7.2\\,K$ and $H_c(0)=64\\,kA\\,m^{-1}$, calculate $H_c$ at $6.0\\,K$.",
      "steps": [
        "$H_c=64[1-(6/7.2)^2]$.",
        "$1-(0.8333)^2=0.3056$."
      ],
      "answer": "$H_c\\approx19.6\\,kA\\,m^{-1}$."
    },
    {
      "title": "Susceptibility from molar data",
      "question": "A solid has $\\chi_m=8.0\\times10^{-8}\\,m^3mol^{-1}$ and $V_m=6.4\\times10^{-5}\\,m^3mol^{-1}$. Find $\\chi$.",
      "steps": [
        "Use $\\chi=\\chi_m/V_m$."
      ],
      "answer": "$\\chi=1.25\\times10^{-3}$."
    }
  ],
  "ncertExamples": [
    {
      "title": "Dia versus para",
      "question": "How can paired and unpaired electrons distinguish diamagnetic and paramagnetic substances?",
      "steps": [
        "Paired spin moments cancel.",
        "Unpaired electrons give a permanent spin moment."
      ],
      "answer": "All-paired systems are generally diamagnetic; systems with unpaired electrons are paramagnetic unless cooperative order dominates."
    },
    {
      "title": "Ferromagnetism versus antiferromagnetism",
      "question": "Compare the spin arrangements.",
      "steps": [
        "Ferromagnets align neighbouring moments parallel in domains.",
        "Antiferromagnets align equal moments antiparallel."
      ],
      "answer": "Ferromagnets have non-zero spontaneous magnetization; ideal antiferromagnets cancel."
    }
  ],
  "pageAudit": [
    {
      "page": 86,
      "topic": "Magnetic susceptibility, Curie law, spin ordering, SQUID and Meissner effect"
    },
    {
      "page": 87,
      "topic": "Magnetic susceptibility, Curie law, spin ordering, SQUID and Meissner effect"
    },
    {
      "page": 88,
      "topic": "Magnetic susceptibility, Curie law, spin ordering, SQUID and Meissner effect"
    },
    {
      "page": 89,
      "topic": "Magnetic susceptibility, Curie law, spin ordering, SQUID and Meissner effect"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
