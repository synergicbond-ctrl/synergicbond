import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 21,
  slug: "defects-in-solids",
  title: "Defects in Solids",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart21() {
  return <SolidStatePartPage data={data} />;
}
