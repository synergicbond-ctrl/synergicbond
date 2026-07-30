import type { SolutionPart } from "./types";

export const part09: SolutionPart = {
  "number": 9,
  "slug": "09-distillation-methods",
  "shortTitle": "Distillation Methods",
  "title": "Simple, Fractional, Vacuum and Steam Distillation",
  "subtitle": "Separation logic, apparatus, repeated equilibration, pressure selection and steam-distillation mass composition.",
  "sourcePages": "36–40",
  "objectives": [
    "Explain simple and fractional distillation using x–y enrichment.",
    "Choose between atmospheric, vacuum and steam distillation.",
    "Understand the role of a fractionating column.",
    "Calculate steam-distillate composition.",
    "Recognise practical limitations caused by close boiling points and decomposition."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Simple distillation as one equilibrium enrichment",
      "paragraphs": [
        "When a liquid mixture boils, the vapour is richer in the more volatile component. Condensing that vapour gives a distillate enriched relative to the original liquid. A single evaporation–condensation event is therefore one equilibrium stage.",
        "Simple distillation is effective when one component is nonvolatile or when boiling points are widely separated. It does not normally produce high purity from close-boiling volatile liquids."
      ],
      "sourcePages": "36–38",
      "visual": "distillation"
    },
    {
      "kind": "theory",
      "title": "Fractional distillation as many equilibrium stages",
      "paragraphs": [
        "A fractionating column provides repeated condensation and revaporisation. Rising vapour transfers heat to descending liquid; at each contact, vapour becomes richer in the more volatile component and liquid becomes richer in the less volatile component.",
        "An ideal theoretical plate is a conceptual stage at which exiting liquid and vapour are in equilibrium. Real packing or trays approximate many such stages."
      ],
      "bullets": [
        "More stages increase separation.",
        "Higher reflux improves purity but reduces product rate.",
        "Relative volatility determines intrinsic difficulty.",
        "Column pressure changes component vapour pressures and may change relative volatility."
      ],
      "sourcePages": "36–38"
    },
    {
      "kind": "table",
      "title": "Selecting a distillation method",
      "headers": [
        "Method",
        "Best use",
        "Key condition",
        "Main limitation"
      ],
      "rows": [
        [
          "Simple distillation",
          "Volatile solvent from nonvolatile solute; widely separated boiling points",
          "No azeotrope in required range",
          "Limited purity for close-boiling liquids."
        ],
        [
          "Fractional distillation",
          "Two or more volatile liquids with moderate relative volatility",
          "Enough theoretical stages and reflux",
          "Energy intensive; α near 1 requires many stages."
        ],
        [
          "Vacuum distillation",
          "High-boiling or heat-sensitive liquid",
          "Reduced pressure lowers boiling temperature",
          "Leaks and pressure control become important."
        ],
        [
          "Steam distillation",
          "Water-immiscible, steam-volatile organic compound",
          "Sum of separate vapour pressures reaches external pressure",
          "Not suitable if compound reacts with water or has negligible vapour pressure."
        ]
      ],
      "sourcePages": "37–40"
    },
    {
      "kind": "theory",
      "title": "Vacuum distillation",
      "paragraphs": [
        "Reducing external pressure lowers the temperature at which vapour pressure equals that external pressure. This allows purification of compounds that would decompose at their atmospheric boiling points.",
        "The pressure must be low enough to reduce temperature but stable enough to avoid bumping, foaming and loss through the vacuum system."
      ],
      "sourcePages": "38–39"
    },
    {
      "kind": "derivation",
      "title": "Steam-distillation composition for immiscible liquids",
      "steps": [
        "Immiscible liquids exert their own pure vapour pressures independently because each liquid surface behaves as a pure phase.",
        "At boiling, P_external=p_water°+p_organic°.",
        "In the vapour, n_organic/n_water=p_organic°/p_water° by Dalton’s law.",
        "Convert mole ratio to mass ratio by multiplying by molar masses."
      ],
      "result": "m_organic/m_water = (p_organic°M_organic)/(p_water°M_water)",
      "assumptions": [
        "The two liquids are essentially immiscible.",
        "Vapour behaves ideally.",
        "Neither component reacts or decomposes.",
        "Pure vapour pressures are evaluated at the boiling temperature."
      ],
      "sourcePages": "39–40"
    },
    {
      "kind": "example",
      "number": "9.1",
      "title": "Composition of a steam distillate",
      "question": "At the steam-distillation temperature, an immiscible organic liquid X has p_X°=210 torr and water has p_w°=550 torr. If M_X=123 g mol⁻¹, calculate the mass percent of X in the condensed distillate.",
      "steps": [
        "n_X/n_w=p_X°/p_w°=210/550.",
        "m_X/m_w=(210×123)/(550×18)=2.609.",
        "Mass fraction X=2.609/(1+2.609)=0.7229."
      ],
      "answer": "The distillate contains 72.3% X by mass.",
      "sourcePages": "39–40",
      "transformation": "Organic vapour pressure and molar mass changed from the nitrobenzene-style source problem."
    },
    {
      "kind": "example",
      "number": "9.2",
      "title": "Steam-distillation boiling temperature condition",
      "question": "An immiscible organic liquid has vapour pressure 180 torr at 365 K while water has vapour pressure 580 torr. Will the pair boil at 1 atm at 365 K?",
      "steps": [
        "For immiscible liquids, total pressure is the sum of pure vapour pressures.",
        "P_total=180+580=760 torr.",
        "Since this equals 1 atm, the mixture boils at 365 K."
      ],
      "answer": "Yes. The combined immiscible system boils at 365 K under 1 atm.",
      "sourcePages": "39–40",
      "transformation": "New pressures and temperature."
    },
    {
      "kind": "example",
      "number": "9.3",
      "title": "Repeated simple distillation enrichment",
      "question": "A binary ideal liquid begins with x_B=0.30 and relative volatility α_BA=2.0. The equilibrium vapour is fully condensed and redistilled twice more. Find x_B in the third condensate.",
      "steps": [
        "Use composition ratio multiplication: (x_B/x_A)_3=(0.30/0.70)×2.0³=3.4286.",
        "x_B=3.4286/(1+3.4286)=0.7742."
      ],
      "answer": "Third condensate x_B=0.774.",
      "sourcePages": "36–38",
      "transformation": "Changed feed composition and relative volatility."
    },
    {
      "kind": "reference",
      "title": "Fenske equation at total reflux",
      "paragraphs": [
        "For a binary column at total reflux and nearly constant relative volatility, the minimum number of theoretical stages needed for a specified top and bottom separation follows from repeated ratio enrichment.",
        "The relation is a multistage extension of the source-note repeated condensation argument."
      ],
      "equations": [
        "N_min = ln[(x_D/(1−x_D))((1−x_B)/x_B)] / ln α"
      ],
      "sourceLabel": "Supplemental separation-science depth."
    },
    {
      "kind": "reference",
      "title": "Reflux and energy–purity trade-off",
      "paragraphs": [
        "Returning part of the condensate to the column supplies descending liquid and strengthens mass transfer. Infinite reflux gives the fewest stages but no net product; lower reflux increases the required number of stages.",
        "Industrial design balances column height, heat duty, product purity and throughput."
      ],
      "sourceLabel": "Supplemental reference-depth discussion."
    },
    {
      "kind": "reference",
      "title": "McCabe–Thiele interpretation",
      "paragraphs": [
        "For binary distillation at approximately constant molar overflow, a McCabe–Thiele diagram combines the equilibrium x–y curve with operating lines representing material and energy balances.",
        "Horizontal and vertical steps count ideal stages. The position of the feed line depends on feed thermal condition, while reflux ratio controls the rectifying operating line.",
        "This method extends the source-note repeated-equilibrium picture into an engineering design framework."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "HETP and packed columns",
      "paragraphs": [
        "Packed columns do not have discrete trays, so performance is described by height equivalent to a theoretical plate. Smaller HETP means more efficient mass transfer per unit height.",
        "Packing should provide large interfacial area with low pressure drop and good wetting. Flooding occurs when vapour flow prevents liquid from descending properly.",
        "These practical ideas explain why a mathematically adequate number of stages may still fail if contact hardware is poorly designed."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Vacuum-system safety and bumping",
      "paragraphs": [
        "Under reduced pressure, dissolved gases can escape rapidly and liquids may bump because nucleation is delayed. Boiling chips, stirring or controlled pressure reduction promote smooth boiling.",
        "Cold traps protect pumps from solvent vapour, and pressure-rated glassware is essential because external atmospheric pressure can implode weak vessels.",
        "The chemistry calculation may be simple, but safe apparatus design is part of real distillation practice."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Steam distillation is not Raoult’s law for a miscible solution",
      "paragraphs": [
        "For immiscible liquids, each phase contributes approximately its pure vapour pressure. Do not multiply by mole fraction as though the liquids formed one ideal liquid phase."
      ],
      "sourcePages": "39–40"
    }
  ]
};
