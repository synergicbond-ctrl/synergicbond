import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 08 — Defects, Non-Stoichiometry and NCERT Defect Chemistry | Synergic Bond", description: "Pages 74–80: vacancy, Schottky, interstitial, Frenkel, F-centres, metal excess/deficiency and impurity defects." };

const data = {
  "part": 8,
  "title": "Defects, Non-Stoichiometry and NCERT Defect Chemistry",
  "subtitle": "Pages 74–80: vacancy, Schottky, interstitial, Frenkel, F-centres, metal excess/deficiency and impurity defects.",
  "sourcePages": "Pages 74–80",
  "overview": "The full defect classification and every NCERT example in the notes are retained. Incorrect shorthand statements are replaced by charge-balanced defect chemistry while the source sequence is preserved.",
  "modules": [
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
    }
  ],
  "sourceSections": [
    {
      "title": "Defect classification",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Class",
            "Composition change?",
            "Examples"
          ],
          "rows": [
            [
              "Stoichiometric/intrinsic point defects",
              "No",
              "Vacancy, interstitial, Schottky, Frenkel"
            ],
            [
              "Non-stoichiometric defects",
              "Yes",
              "Metal excess, metal deficiency"
            ],
            [
              "Impurity defects",
              "Host composition modified by dopant",
              "Aliovalent substitution and compensating vacancies/carriers"
            ]
          ]
        }
      ]
    },
    {
      "title": "Schottky and Frenkel thermodynamics",
      "blocks": [
        {
          "type": "derivation",
          "title": "Schottky pairs",
          "lines": [
            "n\\approx N\\exp\\left(-\\frac{E_s}{2kT}\\right)"
          ],
          "result": "\\frac nN\\approx\\exp\\left(-\\frac{E_s}{2kT}\\right)"
        },
        {
          "type": "derivation",
          "title": "Frenkel pairs",
          "lines": [
            "n\\approx\\sqrt{NN_i}\\exp\\left(-\\frac{E_f}{2kT}\\right)"
          ],
          "result": "n\\propto e^{-E_f/(2kT)}"
        },
        {
          "type": "p",
          "text": "Defect formation has positive enthalpy but also increases configurational entropy. At finite temperature, equilibrium follows $\\Delta G=\\Delta H-T\\Delta S$."
        }
      ]
    },
    {
      "title": "NCERT examples",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Defect",
            "Representative examples in the notes",
            "Density effect"
          ],
          "rows": [
            [
              "Schottky",
              "$\\mathrm{NaCl,\\ KCl,\\ CsCl,\\ AgBr}$",
              "Decreases"
            ],
            [
              "Frenkel",
              "$\\mathrm{ZnS,\\ AgCl,\\ AgBr,\\ AgI}$",
              "Approximately unchanged"
            ],
            [
              "F-centre/anion vacancy",
              "$\\mathrm{NaCl}$ heated in Na vapour",
              "Mass decreases; electronic conduction and colour increase"
            ],
            [
              "Cation interstitial/metal excess",
              "$\\mathrm{ZnO}$ on heating",
              "May show n-type conduction and yellow colour"
            ],
            [
              "Metal deficiency",
              "$\\mathrm{Fe_{1-x}O}$, NiO-type oxides",
              "Density decreases; p-type holes/mixed valence"
            ]
          ]
        }
      ]
    },
    {
      "title": "Charge compensation in impurity defects",
      "blocks": [
        {
          "type": "p",
          "text": "When $\\mathrm{CaCl_2}$ dissolves in $\\mathrm{NaCl}$, each $\\mathrm{Ca^{2+}}$ replacing two $\\mathrm{Na^+}$ charges requires one vacant sodium site. For $\\mathrm{Al^{3+}}$, two cation vacancies are created per $\\mathrm{Al^{3+}}$ replacing three sodium sites."
        },
        {
          "type": "formula",
          "latex": "\\mathrm{CaCl_2\\ in\\ NaCl}:\\quad Ca_{Na}^{\\bullet}+V_{Na}^{\\prime}",
          "display": ""
        },
        {
          "type": "formula",
          "latex": "\\mathrm{AlCl_3\\ in\\ NaCl}:\\quad Al_{Na}^{\\bullet\\bullet}+2V_{Na}^{\\prime}",
          "display": ""
        }
      ]
    },
    {
      "title": "F-centres and non-stoichiometry",
      "blocks": [
        {
          "type": "p",
          "text": "An F-centre is an electron trapped at an anion vacancy. The electron occupies a lattice-cavity state and can absorb visible radiation, causing coloration."
        },
        {
          "type": "formula",
          "latex": "\\mathrm{Na(g)\\rightarrow Na^+_{lattice}+e^-_{F-centre}}",
          "display": ""
        },
        {
          "type": "p",
          "text": "In $\\mathrm{Fe_{1-x}O}$, cation vacancies are compensated by oxidation of some $\\mathrm{Fe^{2+}}$ to $\\mathrm{Fe^{3+}}$."
        },
        {
          "type": "formula",
          "latex": "3\\,\\mathrm{Fe^{2+}}\\longrightarrow2\\,\\mathrm{Fe^{3+}}+V_{Fe}^{\\prime\\prime}",
          "display": ""
        }
      ]
    }
  ],
  "enrichments": [
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
    }
  ],
  "figures": [
    "defect-tree",
    "vacancy-defect",
    "schottky",
    "frenkel",
    "f-center",
    "zno-defect",
    "metal-deficiency",
    "aliovalent-doping",
    "defect-thermo"
  ],
  "examples": [
    {
      "title": "Schottky concentration",
      "question": "A crystal has $N=10^{23}$ cation sites and $E_s/(2kT)=12$. Estimate the number of Schottky pairs.",
      "steps": [
        "Use $n=N e^{-12}$.",
        "$e^{-12}=6.14\\times10^{-6}$."
      ],
      "answer": "$n\\approx6.14\\times10^{17}$ pairs."
    },
    {
      "title": "CaCl2-doped NaCl",
      "question": "For every 5000 Na sites, 20 are occupied by $\\mathrm{Ca^{2+}}$. How many Na vacancies are required?",
      "steps": [
        "One Na vacancy is needed per $\\mathrm{Ca^{2+}}$ substitution in the simple charge-counting model."
      ],
      "answer": "20 Na-site vacancies are required."
    },
    {
      "title": "FeO mixed valence",
      "question": "Three $\\mathrm{Fe^{2+}}$ sites are involved in one cation-vacancy compensation event. How many become $\\mathrm{Fe^{3+}}$?",
      "steps": [
        "Removal of one $\\mathrm{Fe^{2+}}$ leaves two units of negative effective charge.",
        "Oxidising two $\\mathrm{Fe^{2+}}$ to $\\mathrm{Fe^{3+}}$ supplies two positive units."
      ],
      "answer": "Two ions become $\\mathrm{Fe^{3+}}$."
    },
    {
      "title": "F-centre colour",
      "question": "Why does NaCl become coloured after heating in sodium vapour?",
      "steps": [
        "Sodium supplies electrons and sodium ions.",
        "Electrons occupy chloride vacancies as F-centres.",
        "Their allowed optical transitions absorb visible light."
      ],
      "answer": "Colour arises from F-centre absorption."
    }
  ],
  "ncertExamples": [
    {
      "title": "Density effects",
      "question": "State the density change for Schottky and Frenkel defects.",
      "steps": [
        "Schottky removes ions from the crystal, lowering mass at nearly fixed volume.",
        "Frenkel only relocates an ion inside the crystal."
      ],
      "answer": "Schottky decreases density; Frenkel leaves it approximately unchanged."
    },
    {
      "title": "ZnO on heating",
      "question": "Write the idealised defect reaction for heated ZnO.",
      "steps": [
        "Oxygen leaves the lattice as $\\mathrm{O_2}$.",
        "Electrons remain and zinc interstitials/oxygen vacancies contribute to n-type behaviour."
      ],
      "answer": "$\\mathrm{ZnO\\rightarrow Zn^{2+}_{interstitial}+\tfrac12O_2+2e^-}$ is the simplified source model."
    }
  ],
  "pageAudit": [
    {
      "page": 74,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 75,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 76,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 77,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 78,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 79,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    },
    {
      "page": 80,
      "topic": "Stoichiometric, non-stoichiometric and impurity defects with NCERT examples"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
