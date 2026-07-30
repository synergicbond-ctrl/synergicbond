import type { SolutionPart } from "./types";
import { part01Source } from "./source/part01Source";
import { part01Reference } from "./reference/part01Reference";
import { part01ReferenceExtra } from "./referenceExtra/part01ReferenceExtra";

export const part01: SolutionPart = {
  "number": 1,
  "slug": "01-foundations-and-concentration",
  "shortTitle": "Foundations & Concentration",
  "title": "Foundations, Classification and Concentration Language",
  "subtitle": "The complete vocabulary of solutions: phase, component roles, nine physical-state combinations and every concentration unit required later.",
  "sourcePages": "1–3",
  "objectives": [
    "Define a solution at macroscopic and molecular levels.",
    "Distinguish solvent and solute without relying only on amount.",
    "Classify all nine solvent–solute state combinations.",
    "Convert between mole fraction, molarity, molality, mass percent and ppm.",
    "Recognise which concentration terms change with temperature."
  ],
  "blocks": [
    ...part01Source,
    {
      "kind": "theory",
      "title": "What a solution actually is",
      "paragraphs": [
        "A solution is a single homogeneous phase containing at least two chemical species. Homogeneous means that any macroscopic sample taken from the phase has the same composition, although molecules are continually moving and local microscopic fluctuations occur.",
        "The solvent is the component that normally determines the physical state of the final phase. The component present in larger amount is often, but not always, the solvent. In a 60% ethanol–water mixture, amount and phase criteria may both identify ethanol as solvent; in an aqueous salt solution the phase criterion identifies water unambiguously.",
        "A component can change role from one mixture to another. Thus water is not intrinsically a solvent and ethanol is not intrinsically a solute; the words describe their roles in a specified solution."
      ],
      "sourcePages": "1–2",
      "visual": "solution-particles"
    },
    {
      "kind": "table",
      "title": "Nine possible physical-state combinations",
      "headers": [
        "Solvent state",
        "Solute state",
        "Representative system",
        "Important remark"
      ],
      "rows": [
        [
          "Solid",
          "Solid",
          "Brass, bronze, substitutional alloys",
          "A single solid phase is required; a mechanical mixture is not a solution."
        ],
        [
          "Solid",
          "Liquid",
          "Amalgams and liquid metal dissolved in a solid metal",
          "The final state is solid, so the solid metal acts as solvent."
        ],
        [
          "Solid",
          "Gas",
          "Hydrogen absorbed in palladium",
          "Gas atoms occupy interstitial sites in the metallic lattice."
        ],
        [
          "Liquid",
          "Solid",
          "NaCl, glucose or iodine dissolved in a liquid",
          "Most common laboratory category."
        ],
        [
          "Liquid",
          "Liquid",
          "Ethanol–water, benzene–toluene",
          "May be ideal, non-ideal or partially miscible."
        ],
        [
          "Liquid",
          "Gas",
          "CO₂ in soda water, O₂ in water",
          "Pressure and temperature strongly affect solubility."
        ],
        [
          "Gas",
          "Solid",
          "Camphor or iodine vapour in air",
          "A true gaseous solution contains molecular vapour, not smoke particles."
        ],
        [
          "Gas",
          "Liquid",
          "Water vapour in air",
          "Fog is not a true gas solution because droplets form a dispersed phase."
        ],
        [
          "Gas",
          "Gas",
          "Air",
          "Gas mixtures are homogeneous when no condensation occurs."
        ]
      ],
      "sourcePages": "2–3"
    },
    {
      "kind": "theory",
      "title": "Concentration variables and their exact definitions",
      "paragraphs": [
        "Concentration may be expressed relative to total solution, solvent mass, solution volume or total amount of substance. Choosing the right variable is not cosmetic: colligative-property equations and vapour-pressure equations are derived in particular variables.",
        "Mole fraction is dimensionless and additive. Molality is based on solvent mass and therefore remains unchanged when temperature changes. Molarity is based on solution volume and changes when thermal expansion or contraction changes that volume."
      ],
      "equations": [
        "xᵢ = nᵢ / Σnⱼ ;  Σxᵢ = 1",
        "M = n(solute) / V(solution in L)",
        "m = n(solute) / mass(solvent in kg)",
        "mass % = 100 × mass(solute) / mass(solution)",
        "volume % = 100 × volume(solute) / volume(solution)",
        "ppm = 10⁶ × mass fraction  (for dilute aqueous solution, mg L⁻¹ is often numerically close)"
      ],
      "sourcePages": "2"
    },
    {
      "kind": "reference",
      "title": "Thermodynamic reason for preferring mole fraction and molality",
      "paragraphs": [
        "Mole fraction enters chemical-potential and activity expressions naturally because it measures the fractional population of a component. Molality is preferred for accurate colligative-property work because the reference quantity, solvent mass, is unaffected by temperature and pressure.",
        "Molarity remains useful in osmotic-pressure problems because the ideal van’t Hoff equation has the same form as the ideal-gas equation when concentration is expressed per unit solution volume."
      ],
      "bullets": [
        "Use mole fraction for Raoult’s law and Henry’s law.",
        "Use molality for ΔTᵦ and ΔT𝒇.",
        "Use molarity for π = CRT when the solution is dilute.",
        "Convert carefully when density is supplied."
      ],
      "sourceLabel": "Supplemental depth synthesised from standard physical-chemistry treatments."
    },
    {
      "kind": "example",
      "number": "1.1",
      "title": "Complete concentration conversion",
      "question": "A solution is prepared by dissolving 18.0 g glucose (M = 180 g mol⁻¹) in 162 g water. The final solution volume is 172 mL. Calculate mole fraction of glucose, molality, molarity and mass percent.",
      "steps": [
        "n(glucose) = 18.0/180 = 0.100 mol; n(water) = 162/18 = 9.00 mol.",
        "x(glucose) = 0.100/(9.00 + 0.100) = 0.01099.",
        "Molality = 0.100/0.162 = 0.617 mol kg⁻¹.",
        "Molarity = 0.100/0.172 = 0.581 mol L⁻¹.",
        "Mass percent = 100×18.0/(18.0+162) = 10.0%."
      ],
      "answer": "x(glucose)=0.01099; m=0.617 m; M=0.581 M; 10.0% w/w.",
      "sourcePages": "2",
      "transformation": "Numerical values and solute were altered while preserving the concentration-conversion structure."
    },
    {
      "kind": "example",
      "number": "1.2",
      "title": "Identify the solvent correctly",
      "question": "A homogeneous liquid contains 45 g water and 55 g methanol. Its physical behaviour is closer to methanol than to water. State the solvent and explain why amount alone is not a universal rule.",
      "steps": [
        "Methanol is present in the larger mass, but masses cannot be compared directly when molar masses differ.",
        "The mixture remains a single liquid phase, so either component could be chosen as a formal reference. In ordinary naming, the component that dominates amount and physical properties is treated as solvent.",
        "Because methanol is both the larger mass component and the dominant physical medium, methanol is the solvent here."
      ],
      "answer": "Methanol is the solvent; solvent identity is a role fixed by the chosen reference and the final phase, not an intrinsic label.",
      "sourcePages": "2",
      "transformation": "Converted a classification statement into a descriptive reasoning question."
    },
    {
      "kind": "reference",
      "title": "Components, phases and degrees of freedom",
      "paragraphs": [
        "A component is the minimum number of chemically independent species needed to describe the composition of every phase. In ordinary nonreacting binary solutions the number of components is two, but association, dissociation or reaction can reduce the number of independent composition variables.",
        "A phase is a physically homogeneous region separated by an interface. A clear liquid containing dissolved salt is one phase; a saturated solution in contact with crystals is two phases. This distinction becomes essential when applying phase rules and when deciding whether a fog, emulsion or suspension is a true solution.",
        "In JEE Advanced problems, count phases from physical regions, not from the number of chemical formulas written. Then count independent components after accounting for reactions or constraints."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Concentration conversion with density",
      "paragraphs": [
        "Density is the bridge between mass-based and volume-based concentration units. For a solution of density d g mL⁻¹, one litre has mass 1000d grams. Combining this with mass percent immediately gives solute mass, solvent mass and therefore molality.",
        "Conversely, a molality can be converted to molarity by choosing one kilogram of solvent, adding the calculated solute mass, and dividing the resulting total mass by density to obtain solution volume.",
        "A reliable derivation is better than memorising a conversion formula because the denominator changes with the chosen basis. Always state the basis explicitly before using density."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Mole fraction in multicomponent mixtures",
      "paragraphs": [
        "For a mixture of k components, the mole fractions satisfy Σxᵢ=1. This constraint means only k−1 mole fractions are independent. The same is true for vapour mole fractions yᵢ.",
        "When a trace gas or electrolyte is present, decide whether to count formula units or actual ionic species. Raoult’s law and Henry’s law use molecular or formula-unit composition in a specified standard-state convention; colligative particle count may require a van’t Hoff correction.",
        "Multicomponent bookkeeping is safest when all masses are first converted to moles and a single total is formed. Percentages should not be added directly unless they share the same basis."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "checkpoint",
      "title": "Fast checks before using any formula",
      "paragraphs": [
        "Always write what the denominator means. A common JEE Advanced error is to insert total solution mass where solvent mass is required, or solution volume where solvent volume was supplied."
      ],
      "bullets": [
        "Check whether temperature changes between preparation and measurement.",
        "Check whether density refers to pure solvent or final solution.",
        "Check whether percentage is w/w, w/v or v/v.",
        "Check whether the problem asks amount dissolved per amount of solvent or per amount of solution."
      ],
      "sourcePages": "2"
    },
    ...part01Reference,
    ...part01ReferenceExtra
  ]
};
