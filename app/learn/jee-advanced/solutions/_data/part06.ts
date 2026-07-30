import type { SolutionPart } from "./types";
import { part06Source } from "./source/part06Source";
import { part06Reference } from "./reference/part06Reference";
import { part06ReferenceExtra } from "./referenceExtra/part06ReferenceExtra";

export const part06: SolutionPart = {
  "number": 6,
  "slug": "06-compression-and-phase-amounts",
  "shortTitle": "Compression & Phase Amounts",
  "title": "Isothermal Compression, First Condensate and Phase Amounts",
  "subtitle": "A full treatment of the source piston problem: dew pressure, first-drop composition, two-phase evolution, bubble pressure and material balance.",
  "sourcePages": "20–27",
  "objectives": [
    "Follow an isothermal compression path from vapour to liquid.",
    "Calculate dew and bubble pressures.",
    "Find the composition of the first liquid drop and last vapour bubble.",
    "Determine liquid and vapour amounts by material balance.",
    "Interpret pressure–volume behaviour inside the two-phase region."
  ],
  "blocks": [
    ...part06Source,
    {
      "kind": "theory",
      "title": "The isothermal compression sequence",
      "paragraphs": [
        "Begin with a homogeneous vapour of overall composition z. At low pressure the system is entirely vapour, so z=y. Compression raises pressure until the dew pressure is reached and the first infinitesimal liquid drop appears.",
        "Further compression converts vapour into liquid. Inside the two-phase region, liquid composition x and vapour composition y are different and both change with pressure. The total composition z remains fixed for a closed system.",
        "At the bubble pressure corresponding to z, the last infinitesimal vapour bubble disappears. Beyond this point the system is a compressed liquid."
      ],
      "sourcePages": "20–27",
      "visual": "phase-envelope"
    },
    {
      "kind": "derivation",
      "title": "Dew-pressure equation for an ideal binary",
      "steps": [
        "At the dew point the known overall composition equals vapour composition: zᵢ=yᵢ.",
        "Equilibrium requires yᵢP=xᵢpᵢ°.",
        "Thus xᵢ=yᵢP/pᵢ°.",
        "Because Σxᵢ=1, sum the expressions over all components."
      ],
      "result": "1/P_dew = Σ(yᵢ/pᵢ°)",
      "assumptions": [
        "Ideal gas vapour.",
        "Ideal liquid solution.",
        "Fixed temperature."
      ],
      "sourcePages": "20–22"
    },
    {
      "kind": "derivation",
      "title": "Bubble-pressure equation for an ideal binary",
      "steps": [
        "At the bubble point the known overall composition equals liquid composition: zᵢ=xᵢ.",
        "Raoult’s law gives pᵢ=xᵢpᵢ°.",
        "Dalton’s law gives total pressure as the sum of partial pressures."
      ],
      "result": "P_bubble = Σ(xᵢpᵢ°)",
      "assumptions": [
        "Ideal gas vapour.",
        "Ideal liquid solution.",
        "Fixed temperature."
      ],
      "sourcePages": "20–22"
    },
    {
      "kind": "example",
      "number": "6.1",
      "title": "Complete compression path",
      "question": "A closed vapour mixture has z_A=0.35. At 330 K, p_A°=0.60 atm and p_B°=1.20 atm. Find: (a) dew pressure, (b) composition of the first liquid drop, (c) bubble pressure at which the last vapour disappears, and (d) composition of that last vapour bubble.",
      "steps": [
        "Dew pressure: 1/P_d=0.35/0.60+0.65/1.20=1.125, so P_d=0.8889 atm.",
        "First liquid: x_A=y_AP_d/p_A°=0.35×0.8889/0.60=0.5185.",
        "At final bubble point, x_A=z_A=0.35. P_b=0.35×0.60+0.65×1.20=0.990 atm.",
        "Last vapour: y_A=x_Ap_A°/P_b=0.35×0.60/0.990=0.2121."
      ],
      "answer": "P_dew=0.8889 atm; first-drop x_A=0.5185; P_bubble=0.990 atm; last-bubble y_A=0.2121.",
      "sourcePages": "20–26",
      "transformation": "Rebuilt the long source piston problem using new composition and vapour pressures."
    },
    {
      "kind": "theory",
      "title": "Material balance in the two-phase region",
      "paragraphs": [
        "Let n be total moles, L liquid moles and V vapour moles. For component A, nz_A=Lx_A+Vy_A and n=L+V.",
        "Solving these two balances gives the lever rule. On a horizontal tie line, the amount of one phase is proportional to the length of the segment on the opposite side of the overall-composition point."
      ],
      "equations": [
        "V/n = (z_A−x_A)/(y_A−x_A)",
        "L/n = (y_A−z_A)/(y_A−x_A)",
        "V/L = (z_A−x_A)/(y_A−z_A)"
      ],
      "sourcePages": "24–27"
    },
    {
      "kind": "example",
      "number": "6.2",
      "title": "Liquid and vapour amounts during compression",
      "question": "For the system in Question 6.1, the pressure is 0.94 atm and the total amount is 10.0 mol. Determine x_A, y_A, L and V.",
      "steps": [
        "At a specified pressure, x_A=(p_B°−P)/(p_B°−p_A°)=(1.20−0.94)/(1.20−0.60)=0.4333.",
        "y_A=x_Ap_A°/P=0.4333×0.60/0.94=0.2766.",
        "V/n=(z−x)/(y−x)=(0.35−0.4333)/(0.2766−0.4333)=0.5316.",
        "V=5.316 mol and L=4.684 mol."
      ],
      "answer": "x_A=0.4333, y_A=0.2766, V=5.32 mol and L=4.68 mol.",
      "sourcePages": "23–27",
      "transformation": "Pressure and total moles changed from the source phase-amount calculation."
    },
    {
      "kind": "example",
      "number": "6.3",
      "title": "Volume change before first condensation",
      "question": "Five moles of the vapour in Question 6.1 are initially at 0.40 atm and 330 K. Assuming ideal-gas behaviour, calculate the volume initially and at the dew point just before condensation begins.",
      "steps": [
        "Initial volume V₁=nRT/P₁=5×0.082057×330/0.40=338.5 L.",
        "At dew pressure 0.8889 atm, V_d=5×0.082057×330/0.8889=152.4 L.",
        "The vapour volume falls continuously until the first drop appears."
      ],
      "answer": "V_initial=338.5 L and V_at dew=152.4 L.",
      "sourcePages": "20–23",
      "transformation": "New pressure, mole amount and temperature."
    },
    {
      "kind": "reference",
      "title": "Why pressure need not remain constant during binary condensation",
      "paragraphs": [
        "For a pure substance at fixed temperature, liquid and vapour coexist at one saturation pressure. For a binary mixture, composition of each phase changes as condensation proceeds, so equilibrium pressure moves between the dew and bubble limits.",
        "The pressure–volume curve therefore has a sloping two-phase segment rather than the flat plateau of a pure substance."
      ],
      "sourceLabel": "Supplemental phase-rule interpretation."
    },
    {
      "kind": "reference",
      "title": "Gibbs phase rule for the binary two-phase region",
      "paragraphs": [
        "The reduced phase rule at fixed temperature and pressure conditions clarifies the available degrees of freedom. For a nonreacting binary at fixed temperature, specifying pressure fixes the two equilibrium phase compositions; only phase amounts remain to be set by total composition.",
        "At a fixed temperature and pressure inside the two-phase region, x and y are tie-line endpoints, not adjustable independent variables."
      ],
      "equations": [
        "F = C − P + 2; at fixed T, F = C − P + 1"
      ],
      "sourceLabel": "Supplemental phase-equilibrium depth."
    },
    {
      "kind": "reference",
      "title": "Flash equilibrium formulation",
      "paragraphs": [
        "A flash calculation determines phase amounts and compositions when a feed of known overall composition reaches equilibrium at specified temperature and pressure. The unknown vapour fraction β is found from component K-values.",
        "For each component, yᵢ=Kᵢxᵢ and zᵢ=(1−β)xᵢ+βyᵢ. Eliminating xᵢ leads to the Rachford–Rice equation.",
        "The binary lever rule is the geometric special case of this general multicomponent flash balance."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Rachford–Rice equation",
      "paragraphs": [
        "For multicomponent equilibrium, Σ zᵢ(Kᵢ−1)/[1+β(Kᵢ−1)]=0 determines the vapour fraction. A physically valid root lies between zero and one.",
        "If the function has no root in that interval, the feed is entirely liquid or entirely vapour at the specified conditions.",
        "This advanced extension shows that phase-amount problems are systematic material balances, not diagram tricks."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Pressure–volume path and compressibility",
      "paragraphs": [
        "Before condensation, ideal-gas volume varies inversely with pressure. Inside the two-phase region, pressure changes more slowly because compression converts vapour into dense liquid.",
        "After complete condensation, further volume reduction requires compressing a liquid and pressure rises sharply because liquid compressibility is small.",
        "A qualitative P–V sketch therefore has three regimes and helps verify whether a calculated state lies before, within or after condensation."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Overall composition does not equal either phase composition inside the envelope",
      "paragraphs": [
        "Only at the dew boundary is z equal to y, and only at the bubble boundary is z equal to x. Between them, z lies between x and y and determines phase amounts."
      ],
      "sourcePages": "20–27"
    },
    ...part06Reference,
    ...part06ReferenceExtra
  ]
};
