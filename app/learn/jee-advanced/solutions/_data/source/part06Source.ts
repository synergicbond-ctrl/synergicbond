import type { NoteBlock } from "../types";

export const part06Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Initial state of the source piston experiment",
    "paragraphs": [
      "The source follows an ideal binary system through slow isothermal compression. Initially only vapour is present, with a fixed overall composition z_A. At low pressure the gas remains single phase because the pressure is below the dew pressure corresponding to that vapour composition.",
      "The first liquid appears when the gas pressure reaches the dew pressure. At that instant the vapour composition is still the overall composition, y_A=z_A, because only an infinitesimal drop of liquid has formed. The liquid composition of that first drop is richer in the less volatile component."
    ],
    "equations": [
      "1/P_dew = z_A/p_A° + z_B/p_B°",
      "x_A(first drop)=z_AP_dew/p_A°"
    ],
    "sourcePages": "Pages 20–21",
    "visual": "phase-envelope"
  },
  {
    "kind": "theory",
    "title": "Dew point, first condensate and the meaning of incipient liquid",
    "paragraphs": [
      "At the dew point, the pressure is high enough for the specified vapour to coexist with an infinitesimal liquid phase. The source calculates P_dew from the vapour composition and then obtains the first-drop liquid composition by Raoult’s law.",
      "Because the less volatile component has the smaller pure vapour pressure, dividing y_iP by p_i° gives a larger liquid mole fraction for that component. This is the condensation counterpart of vapour enrichment during boiling.",
      "A frequent error is to use the bubble-pressure equation at the first-drop condition. Bubble pressure is based on a known liquid composition; dew pressure is based on a known vapour composition."
    ],
    "sourcePages": "Pages 20–22"
  },
  {
    "kind": "theory",
    "title": "Two-phase compression at constant temperature",
    "paragraphs": [
      "Further compression converts more vapour to liquid while both phases remain at equilibrium. Total pressure rises from the dew value toward the bubble value. At each intermediate pressure, the coexisting liquid composition x_A and vapour composition y_A are fixed by the tie line through the pressure–composition envelope.",
      "The overall composition z_A remains constant in a closed piston–cylinder system. Only the relative amounts of liquid and vapour change. The source emphasises that phase compositions move along different curves while the overall composition is represented by a fixed vertical line.",
      "The material balance is z_A=(L/F)x_A+(V/F)y_A with L+V=F. This becomes the lever rule."
    ],
    "equations": [
      "z_A = (Lx_A+Vy_A)/(L+V)",
      "L/F=(y_A−z_A)/(y_A−x_A)",
      "V/F=(z_A−x_A)/(y_A−x_A)"
    ],
    "sourcePages": "Pages 21–24",
    "visual": "phase-envelope"
  },
  {
    "kind": "theory",
    "title": "Last vapour bubble and complete condensation",
    "paragraphs": [
      "At the bubble pressure for the overall composition, almost the entire system is liquid and only an infinitesimal vapour bubble remains. The liquid composition therefore equals the overall composition, x_A=z_A. The composition of the last vapour bubble is calculated from y_A=x_Ap_A°/P_bubble.",
      "The source asks for the composition of this last vapour and for the pressure at which complete condensation occurs. The bubble pressure is P_bubble=z_Ap_A°+z_Bp_B°. Beyond this pressure, at the same temperature, the system is a compressed single liquid phase.",
      "The path from first drop to last bubble is reversible under quasistatic compression and traces the complete two-phase interval."
    ],
    "equations": [
      "P_bubble=z_Ap_A°+z_Bp_B°",
      "y_A(last bubble)=z_Ap_A°/P_bubble"
    ],
    "sourcePages": "Pages 22–25"
  },
  {
    "kind": "theory",
    "title": "Amounts of liquid and vapour from the source material balance",
    "paragraphs": [
      "The source introduces a numerical amount balance by assigning a total number of moles and expressing liquid and vapour amounts in terms of one unknown. If the total is F and liquid is L, vapour is F−L. Component balance gives Fz_A=Lx_A+(F−L)y_A.",
      "This method and the lever rule are algebraically identical. The explicit mole balance is useful when the question asks actual moles, whereas the geometric lever rule is faster when only fractions are required.",
      "Solved Questions 6.1 and 6.2 reproduce the entire compression path and phase-amount calculation with altered pure vapour pressures, overall composition and total moles."
    ],
    "equations": [
      "Fz_A=Lx_A+(F−L)y_A",
      "L=F(y_A−z_A)/(y_A−x_A)"
    ],
    "sourcePages": "Pages 23–26"
  },
  {
    "kind": "theory",
    "title": "Gas volume before condensation and volume collapse on liquefaction",
    "paragraphs": [
      "Before the dew point, the system is a single ideal-gas mixture and its volume is V=nRT/P. The source computes the volume at the initial low pressure and at the dew pressure, showing the inverse pressure dependence during isothermal compression.",
      "Once condensation begins, further compression changes both gas volume and phase amount. The liquid volume is usually neglected compared with vapour volume in introductory calculations, but the amount of vapour must be updated through the phase balance.",
      "At complete condensation the ideal-gas equation is no longer applicable to the total material. A common mistake is to continue using PV=nRT after the system has become liquid."
    ],
    "sourcePages": "Pages 21 and 26"
  },
  {
    "kind": "theory",
    "title": "Repeated condensate enrichment",
    "paragraphs": [
      "The source concludes this sequence with successive equilibrium contacts. A vapour is condensed, the condensate is used as the next liquid feed, and the process is repeated. For an ideal binary solution, each equilibrium step multiplies the component mole ratio by the relative volatility α=p_B°/p_A° in the appropriate direction.",
      "After k identical equilibrium stages, the ratio changes geometrically. This is the conceptual basis of a fractionating column, although a real column involves simultaneous countercurrent vapour and liquid flow rather than isolated complete condensation steps.",
      "Solved Question 5.5 retains the repeated-stage logic with a different initial composition and relative volatility."
    ],
    "equations": [
      "(y_B/y_A)=α(x_B/x_A)",
      "After k ideal enrichment stages: ratio_k=α^k ratio_0"
    ],
    "sourcePages": "Pages 27–28"
  }
];
