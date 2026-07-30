import type { SolutionPart } from "./types";
import { part10Source } from "./source/part10Source";
import { part10Reference } from "./reference/part10Reference";
import { part10ReferenceExtra } from "./referenceExtra/part10ReferenceExtra";

export const part10: SolutionPart = {
  "number": 10,
  "slug": "10-azeotropes",
  "shortTitle": "Azeotropes",
  "title": "Azeotropes, Konovalov’s Rules and Separation Limits",
  "subtitle": "Pressure extrema, temperature extrema, equal phase compositions and why ordinary fractional distillation stops at the azeotropic composition.",
  "sourcePages": "40–46",
  "objectives": [
    "Define an azeotrope thermodynamically and compositionally.",
    "Relate pressure extrema to boiling extrema.",
    "Distinguish minimum- and maximum-boiling azeotropes.",
    "Apply Konovalov’s qualitative rules.",
    "Explain why fractional distillation cannot cross an azeotrope."
  ],
  "blocks": [
    ...part10Source,
    {
      "kind": "theory",
      "title": "What an azeotrope is",
      "paragraphs": [
        "An azeotrope is a mixture that boils at constant composition under a specified pressure. At the azeotropic point, liquid and vapour compositions are equal: xᵢ=yᵢ for every component.",
        "Because the vapour is not compositionally different from the liquid, an equilibrium vaporisation–condensation stage produces no enrichment at that composition."
      ],
      "equations": [
        "At azeotrope: x_A=y_A and x_B=y_B"
      ],
      "sourcePages": "40–46",
      "visual": "azeotrope"
    },
    {
      "kind": "theory",
      "title": "Minimum-boiling azeotrope",
      "paragraphs": [
        "A strong positive deviation raises vapour pressure above ideal behaviour. If the total-pressure curve develops a maximum at fixed temperature, the corresponding boiling-temperature curve at fixed pressure develops a minimum.",
        "Such a mixture boils below the boiling points of both pure components at the selected pressure. Ethanol–water is the standard qualitative example."
      ],
      "bullets": [
        "Positive deviation.",
        "Maximum in P–composition at fixed T.",
        "Minimum in T–composition at fixed P.",
        "Called a minimum-boiling azeotrope."
      ],
      "sourcePages": "40–44"
    },
    {
      "kind": "theory",
      "title": "Maximum-boiling azeotrope",
      "paragraphs": [
        "A strong negative deviation can produce a minimum in total pressure at fixed temperature. The corresponding fixed-pressure temperature curve has a maximum.",
        "The azeotropic mixture then boils above the boiling points of both pure components. Strong acid–water systems are common textbook examples."
      ],
      "bullets": [
        "Negative deviation.",
        "Minimum in P–composition at fixed T.",
        "Maximum in T–composition at fixed P.",
        "Called a maximum-boiling azeotrope."
      ],
      "sourcePages": "42–45"
    },
    {
      "kind": "derivation",
      "title": "Why x equals y at a pressure extremum",
      "steps": [
        "For a binary vapour–liquid equilibrium at fixed temperature, Gibbs–Duhem consistency links changes in component activities.",
        "At an extremum of total pressure with composition, the first derivative dP/dx vanishes.",
        "Combining the equilibrium equations and Gibbs–Duhem relation gives equality of liquid and vapour composition at the extremum."
      ],
      "result": "dP/dx=0  ⇒  xᵢ=yᵢ at the azeotropic composition",
      "assumptions": [
        "Two-component, nonreacting system.",
        "Stable vapour–liquid equilibrium.",
        "Fixed temperature for the pressure extremum."
      ],
      "sourcePages": "40–45"
    },
    {
      "kind": "table",
      "title": "Konovalov-type qualitative rules",
      "headers": [
        "Observation",
        "Interpretation"
      ],
      "rows": [
        [
          "Vapour is richer in one component than the liquid",
          "That component is relatively more volatile at that composition."
        ],
        [
          "Total pressure has a maximum",
          "Liquid and vapour compositions become equal at that maximum."
        ],
        [
          "Total pressure has a minimum",
          "Liquid and vapour compositions become equal at that minimum."
        ],
        [
          "Boiling-temperature curve has a minimum",
          "Corresponds to maximum pressure and positive deviation."
        ],
        [
          "Boiling-temperature curve has a maximum",
          "Corresponds to minimum pressure and negative deviation."
        ]
      ],
      "sourcePages": "40–45"
    },
    {
      "kind": "example",
      "number": "10.1",
      "title": "Identify azeotrope type from data",
      "question": "A binary mixture has pure-component boiling points 351 K and 372 K. Its boiling-temperature curve has a minimum of 344 K at x_A=0.62. Classify the deviation and azeotrope.",
      "steps": [
        "The mixture boils below both pure components, so it is a minimum-boiling azeotrope.",
        "A minimum in boiling temperature corresponds to a maximum in vapour pressure.",
        "Vapour pressure above ideal behaviour indicates positive deviation."
      ],
      "answer": "Positive deviation and a minimum-boiling azeotrope at x_A=0.62.",
      "sourcePages": "40–44",
      "transformation": "New boiling temperatures and composition."
    },
    {
      "kind": "example",
      "number": "10.2",
      "title": "Distillation direction around a minimum-boiling azeotrope",
      "question": "A minimum-boiling azeotrope occurs at x_A=0.70. A feed has x_A=0.40. State whether the distillate or residue approaches the azeotrope during fractional distillation.",
      "steps": [
        "On the A-poor side, the vapour is enriched toward the more volatile azeotropic composition.",
        "Repeated condensation drives the overhead distillate toward x_A=0.70.",
        "The residue moves away from the azeotrope toward the less volatile pure component on that side."
      ],
      "answer": "Distillate approaches the azeotrope; residue approaches the less volatile pure component.",
      "sourcePages": "43–46",
      "transformation": "Converted the source separation-limit discussion into a directional reasoning problem."
    },
    {
      "kind": "example",
      "number": "10.3",
      "title": "Why the azeotropic composition cannot be crossed",
      "question": "A column feed is exactly at an azeotropic composition. Explain the composition of vapour leaving every ideal stage.",
      "steps": [
        "At the azeotrope, x_A=y_A.",
        "Condensing the vapour reproduces the same liquid composition.",
        "Each subsequent equilibrium stage therefore receives and produces the same composition.",
        "No composition gradient can develop through ordinary equilibrium stages."
      ],
      "answer": "Every stage remains at the azeotropic composition; ordinary fractional distillation cannot cross it.",
      "sourcePages": "43–46",
      "transformation": "Descriptive reformulation of the source limitation."
    },
    {
      "kind": "reference",
      "title": "Pressure-swing distillation",
      "paragraphs": [
        "Azeotropic composition generally changes with pressure because activity coefficients and pure vapour pressures are pressure- and temperature-dependent. If the shift is large enough, two columns operating at different pressures can move material around the azeotropic barrier.",
        "This technique is useful only for pressure-sensitive azeotropes and requires additional energy and equipment."
      ],
      "sourceLabel": "Supplemental industrial separation depth."
    },
    {
      "kind": "reference",
      "title": "Azeotrope breaking by entrainers and molecular sieves",
      "paragraphs": [
        "An entrainer may alter relative volatility or create a new heterogeneous azeotrope that enables phase separation. Alternatively, selective adsorption can remove one component; drying ethanol with molecular sieves is conceptually different from simply redistilling the azeotrope.",
        "These methods do not violate equilibrium limits; they change the thermodynamic system or add a selective separation mechanism."
      ],
      "sourceLabel": "Supplemental reference-depth treatment."
    },
    {
      "kind": "reference",
      "title": "Azeotropic thermodynamics",
      "paragraphs": [
        "At an azeotrope, relative volatility equals one because y_A/x_A=y_B/x_B. This does not require pure-component vapour pressures to be equal; activity coefficients compensate for their difference.",
        "The condition can be written γ_Ap_A°=γ_Bp_B° for an ideal vapour. It is therefore composition- and temperature-dependent.",
        "This equation explains why changing pressure or adding an entrainer can shift or remove an azeotropic condition."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Heterogeneous azeotropes",
      "paragraphs": [
        "Some systems form an azeotropic vapour that condenses into two immiscible liquid phases. The decanter can separate those phases, enabling process routes not available to a homogeneous azeotrope.",
        "Heterogeneous azeotropic distillation combines vapour–liquid equilibrium with liquid–liquid equilibrium and requires careful phase-split material balances.",
        "The existence of two liquid phases changes the degrees of freedom and cannot be represented by a simple single-liquid x–y curve."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Distillation boundaries in multicomponent systems",
      "paragraphs": [
        "In ternary and higher systems, azeotropes and saddle points create residue-curve maps. Distillation trajectories are constrained by separatrices called distillation boundaries.",
        "A feed and desired product lying in different regions may be impossible to connect by ordinary distillation at fixed pressure.",
        "This advanced picture generalises the binary statement that an azeotrope cannot be crossed."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Constant boiling does not mean a pure substance",
      "paragraphs": [
        "An azeotrope distils at constant temperature and composition, but it remains a mixture. Its composition changes when external pressure changes, unlike the fixed stoichiometry of a pure compound."
      ],
      "sourcePages": "40–46"
    },
    ...part10Reference,
    ...part10ReferenceExtra
  ]
};
