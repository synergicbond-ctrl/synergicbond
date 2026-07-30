import type { SolutionPart } from "./types";
import { part05Source } from "./source/part05Source";
import { part05Reference } from "./reference/part05Reference";
import { part05ReferenceExtra } from "./referenceExtra/part05ReferenceExtra";

export const part05: SolutionPart = {
  "number": 5,
  "slug": "05-vapour-composition",
  "shortTitle": "Vapour Composition",
  "title": "Liquid–Vapour Composition and Reconstruction Problems",
  "subtitle": "Use x–y–P relations to recover pure vapour pressures, identify the more volatile component and solve repeated enrichment stages.",
  "sourcePages": "15–20",
  "objectives": [
    "Convert between liquid and vapour compositions.",
    "Solve pure-vapour-pressure reconstruction problems.",
    "Use relative volatility and composition ratios.",
    "Identify bubble and dew states from the information supplied.",
    "Handle repeated equilibrium vaporisation and condensation."
  ],
  "blocks": [
    ...part05Source,
    {
      "kind": "theory",
      "title": "Why the vapour is compositionally different",
      "paragraphs": [
        "In an ideal binary mixture, the vapour contribution of each component equals xᵢpᵢ°. The component with the larger pure vapour pressure contributes disproportionately, so its mole fraction in vapour exceeds its mole fraction in liquid.",
        "The relation is most transparent in ratio form. It separates composition from volatility and becomes the foundation for multistage distillation."
      ],
      "equations": [
        "y_A/y_B = (x_A/x_B)(p_A°/p_B°)",
        "α_AB = p_A°/p_B°  (ideal relative volatility)",
        "y_A = αx_A/[1+(α−1)x_A]"
      ],
      "sourcePages": "15–19"
    },
    {
      "kind": "example",
      "number": "5.1",
      "title": "Vapour composition from liquid composition",
      "question": "An ideal solution has x_A=0.38. At the working temperature p_A°=54 kPa and p_B°=96 kPa. Find total pressure and vapour composition.",
      "steps": [
        "x_B=0.62.",
        "p_A=0.38×54=20.52 kPa and p_B=0.62×96=59.52 kPa.",
        "P=80.04 kPa.",
        "y_A=20.52/80.04=0.2564 and y_B=0.7436."
      ],
      "answer": "P=80.04 kPa; y_A=0.256 and y_B=0.744.",
      "sourcePages": "15–16",
      "transformation": "Liquid composition and pure vapour pressures changed."
    },
    {
      "kind": "example",
      "number": "5.2",
      "title": "Infer liquid composition from vapour composition",
      "question": "At equilibrium, the vapour contains y_A=0.30. Pure vapour pressures are p_A°=45 kPa and p_B°=90 kPa. Calculate the equilibrium liquid composition and total pressure.",
      "steps": [
        "Use y_A/y_B=(x_A/x_B)(p_A°/p_B°).",
        "0.30/0.70=(x_A/(1−x_A))(45/90).",
        "x_A/(1−x_A)=0.85714, giving x_A=0.4615.",
        "P=x_Ap_A°+(1−x_A)p_B°=69.23 kPa."
      ],
      "answer": "x_A=0.4615 and P=69.23 kPa.",
      "sourcePages": "16–18",
      "transformation": "Reframed the source x–y relation with different data."
    },
    {
      "kind": "example",
      "number": "5.3",
      "title": "Recover two pure vapour pressures",
      "question": "A liquid has x_A=0.40 and its equilibrium vapour has y_A=0.25 at P=72 kPa. Find p_A° and p_B°.",
      "steps": [
        "p_A=y_AP=0.25×72=18 kPa; p_A°=18/0.40=45 kPa.",
        "p_B=(1−0.25)×72=54 kPa.",
        "x_B=0.60; p_B°=54/0.60=90 kPa."
      ],
      "answer": "p_A°=45 kPa and p_B°=90 kPa.",
      "sourcePages": "17–19",
      "transformation": "Values changed while retaining the source reconstruction method."
    },
    {
      "kind": "example",
      "number": "5.4",
      "title": "Add one component and determine new pressure",
      "question": "An ideal solution initially contains 3 mol A and 2 mol B. At the temperature used, p_A°=80 kPa and p_B°=50 kPa. Two additional moles of B are added. Calculate the total pressure before and after addition and the new vapour composition.",
      "steps": [
        "Initially x_A=3/5=0.60, so P₁=0.60×80+0.40×50=68 kPa.",
        "After addition, x_A=3/7 and x_B=4/7.",
        "P₂=(3/7)80+(4/7)50=62.86 kPa.",
        "y_A=(3/7×80)/62.86=0.5455."
      ],
      "answer": "P₁=68.0 kPa; P₂=62.86 kPa; new y_A=0.5455.",
      "sourcePages": "15–18",
      "transformation": "New component amounts and vapour pressures replace the source data."
    },
    {
      "kind": "derivation",
      "title": "Repeated equilibrium enrichment",
      "steps": [
        "For one ideal equilibrium stage, the vapour ratio is y_B/y_A=(x_B/x_A)(p_B°/p_A°).",
        "If the entire vapour is condensed without loss, the condensate has the same composition as that vapour and becomes the liquid feed to the next stage.",
        "After N identical equilibrium stages, the composition ratio is multiplied by the relative-volatility ratio N times."
      ],
      "result": "(x_B/x_A)_N = (x_B/x_A)_0 (p_B°/p_A°)^N",
      "assumptions": [
        "Pure vapour pressures remain constant from stage to stage.",
        "Each stage reaches equilibrium.",
        "The vapour is completely condensed before the next stage.",
        "No material is lost."
      ],
      "sourcePages": "27–28"
    },
    {
      "kind": "example",
      "number": "5.5",
      "title": "Three-stage condensate enrichment",
      "question": "A liquid feed has x_B=0.40 and p_B°/p_A°=1.60. The equilibrium vapour is completely condensed and used as the next feed. Find x_B after three stages.",
      "steps": [
        "Initial ratio x_B/x_A=0.40/0.60=2/3.",
        "After three stages, ratio=(2/3)(1.60)³=2.7307.",
        "x_B=2.7307/(1+2.7307)=0.7319."
      ],
      "answer": "The third condensate contains x_B=0.732.",
      "sourcePages": "27–28",
      "transformation": "Initial composition, volatility ratio and wording changed."
    },
    {
      "kind": "reference",
      "title": "Relative volatility in real separation calculations",
      "paragraphs": [
        "For nonideal liquids and nonideal vapours, relative volatility is more generally α_AB=(γ_Ap_A°)/(γ_Bp_B°), with fugacity corrections at high pressure. A nearly constant α permits compact x–y equations; α close to unity indicates difficult separation.",
        "The number of ideal stages needed for a target enrichment grows rapidly as α approaches 1. This explains why similar-boiling hydrocarbons require tall fractionating columns."
      ],
      "equations": [
        "α_AB = (y_A/x_A)/(y_B/x_B)"
      ],
      "sourceLabel": "Supplemental separation-science depth."
    },
    {
      "kind": "reference",
      "title": "x–y equilibrium curves",
      "paragraphs": [
        "For constant relative volatility α, the equilibrium relation y=αx/[1+(α−1)x] is curved above the diagonal when A is more volatile. The distance from the diagonal measures the enrichment produced by one ideal stage.",
        "As α approaches one, the curve approaches y=x and separation becomes difficult. Large α gives strong curvature and rapid enrichment.",
        "Graphical stage constructions used in distillation are repeated applications of this equilibrium relation combined with material balances."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Volatility and boiling-point order",
      "paragraphs": [
        "At a fixed temperature, the component with higher pure vapour pressure is more volatile. At a fixed external pressure, that component normally has the lower boiling point.",
        "The words 'more volatile' must always refer to the same temperature and pressure regime. Nonideal activity coefficients can reverse relative volatility at some compositions, particularly near azeotropes.",
        "In simple ideal problems, p_A°/p_B° is sufficient; in real mixtures, γ_A/γ_B must also be considered."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Stagewise versus differential distillation",
      "paragraphs": [
        "The repeated-condensation model assumes discrete equilibrium stages and complete condensation between stages. Differential or Rayleigh distillation instead continuously removes infinitesimal vapour from a changing liquid residue.",
        "Rayleigh’s equation integrates the changing equilibrium relation and is appropriate for batch distillation with continuous vapour removal.",
        "Distinguishing these models prevents using a simple power of relative volatility in a process where liquid composition changes continuously without complete stagewise resetting."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Do not interchange x and y",
      "paragraphs": [
        "Liquid mole fractions are denoted x and vapour mole fractions y. In a dew-point calculation y is known first; in a bubble-point calculation x is known first. Many wrong solutions use Raoult’s law directly with y."
      ],
      "bullets": [
        "Raoult: pᵢ=xᵢpᵢ°.",
        "Dalton: pᵢ=yᵢP.",
        "At equilibrium combine them: yᵢP=xᵢpᵢ°."
      ],
      "sourcePages": "15–20"
    },
    ...part05Reference,
    ...part05ReferenceExtra
  ]
};
