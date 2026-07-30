import type { NoteBlock } from "../types";

export const part08Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Boiling point as the temperature of vapour-pressure equality",
    "paragraphs": [
      "A liquid boils when its equilibrium vapour pressure equals the external pressure. The normal boiling point is therefore the temperature at which vapour pressure is 1 atm or 1.01325 bar. Lower external pressure lowers the boiling temperature; higher external pressure raises it.",
      "For a solution, the bubble temperature is the temperature at which the first vapour bubble appears at the specified pressure. It depends on liquid composition because each component contributes a partial vapour pressure.",
      "The source begins with an ideal binary numerical in which pure-component vapour pressures at a reference temperature are supplied and total pressure is calculated from composition."
    ],
    "equations": [
      "P_ext=P_vap at boiling",
      "P=x_Ap_A°(T)+x_Bp_B°(T)"
    ],
    "sourcePages": "Pages 32–33"
  },
  {
    "kind": "derivation",
    "title": "Integrated Clausius–Clapeyron relation used in the notes",
    "introduction": "The source uses a constant enthalpy of vaporisation approximation to move pure-component vapour pressures between temperatures.",
    "steps": [
      "For liquid–vapour equilibrium, dlnp/dT=ΔH_vap/(RT²) when vapour is ideal and liquid molar volume is neglected.",
      "Assume ΔH_vap is constant over the temperature interval.",
      "Integrate from (p₁,T₁) to (p₂,T₂).",
      "Use natural logarithms and absolute temperatures."
    ],
    "result": "ln(p₂/p₁)=−(ΔH_vap/R)(1/T₂−1/T₁)=(ΔH_vap/R)(1/T₁−1/T₂)",
    "assumptions": [
      "Constant ΔH_vap over the interval.",
      "Ideal vapour.",
      "Liquid molar volume negligible relative to vapour molar volume."
    ],
    "sourcePages": "Pages 33–35"
  },
  {
    "kind": "theory",
    "title": "Finding the normal boiling point of an ideal mixture",
    "paragraphs": [
      "The source applies Clausius–Clapeyron separately to A and B, then inserts the temperature-dependent pure vapour pressures into Raoult’s law. The boiling temperature is the root of x_Ap_A°(T)+x_Bp_B°(T)=P_ext.",
      "Because both pure vapour pressures rise rapidly with temperature, the equation is normally solved by trial, iteration or numerical root finding. The source numerical arrives at a temperature between the pure-component boiling points, as an ideal mixture must.",
      "A useful bracket is T_b,A<T_b,mix<T_b,B when A is more volatile and both components are present."
    ],
    "sourcePages": "Pages 33–34"
  },
  {
    "kind": "theory",
    "title": "T–x–y diagram at fixed pressure",
    "paragraphs": [
      "At fixed external pressure, the lower boundary is the bubble-temperature curve and the upper boundary is the dew-temperature curve. Below the bubble curve the system is entirely liquid; above the dew curve it is entirely vapour; between them both phases coexist.",
      "When the more volatile component A is added, both bubble and dew temperatures decrease from the boiling point of pure B toward that of pure A. At a horizontal tie line, the vapour is richer in A than the liquid, so y_A>x_A.",
      "Heating a liquid of fixed overall composition first reaches the bubble curve, then produces more vapour while phase compositions move along the boundaries, and finally reaches the dew curve where the last liquid disappears."
    ],
    "sourcePages": "Pages 35–36",
    "visual": "txy"
  },
  {
    "kind": "theory",
    "title": "Relation between P–x–y and T–x–y constructions",
    "paragraphs": [
      "A pressure diagram is drawn at constant temperature, whereas a temperature diagram is drawn at constant pressure. Increasing pressure at fixed temperature favours liquid, but increasing temperature at fixed pressure favours vapour. This reverses the vertical ordering of the single-phase fields.",
      "The source uses corresponding lever-rule geometry in both diagrams. At any tie line, the phase fraction is proportional to the length of the opposite segment, provided x, z and y are on the same composition scale.",
      "The start of distillation is then introduced as repeated movement between the bubble and dew curves."
    ],
    "sourcePages": "Page 36"
  }
];
