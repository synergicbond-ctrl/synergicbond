import type { NoteBlock } from "../types";

export const part10Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Non-ideal pressure–composition curves",
    "paragraphs": [
      "For a non-ideal binary solution, partial pressures no longer follow straight Raoult lines. Positive deviation bends the total-pressure curve upward; negative deviation bends it downward. The corresponding dew curve changes as well, but both curves still meet at the pure-component endpoints.",
      "The source distinguishes small deviation, which does not create an extremum, from sufficiently large deviation, which can create a maximum or minimum in total pressure. An extremum is the condition for an azeotrope.",
      "The composition at the pressure extremum has the same liquid and vapour composition. This follows from the Gibbs–Duhem relation and is expressed empirically by Konovalov’s rule."
    ],
    "sourcePages": "Pages 40–42",
    "visual": "azeotrope"
  },
  {
    "kind": "theory",
    "title": "Konovalov’s first rule and vapour enrichment",
    "paragraphs": [
      "Away from an azeotrope, the vapour is enriched in the component whose addition increases the total vapour pressure of the liquid. If increasing x_A raises P at fixed temperature, then y_A>x_A. If increasing x_A lowers P, then y_A<x_A.",
      "This rule generalises the ideal-solution result to non-ideal systems. It predicts the direction in which simple or fractional distillation changes the residue and distillate compositions.",
      "At an extremum dP/dx_A=0, neither component is preferentially enriched; x_A=y_A and the mixture distils at constant composition."
    ],
    "sourcePages": "Page 42"
  },
  {
    "kind": "theory",
    "title": "Minimum-boiling azeotrope from positive deviation",
    "paragraphs": [
      "A large positive deviation can generate a maximum in total vapour pressure at fixed temperature. The same composition appears as a minimum in boiling temperature at fixed pressure because higher vapour pressure means the external pressure is reached at a lower temperature.",
      "At the azeotropic composition, x_A=y_A. Vapour formed has exactly the same composition as the liquid, so condensation and revaporisation cannot change composition. The mixture behaves like a pure substance during boiling even though it contains two components.",
      "On either side of the azeotrope, distillation drives one stream toward the azeotrope and the other toward an appropriate pure-component limit. The azeotropic composition cannot be crossed by ordinary fractional distillation."
    ],
    "equations": [
      "At positive-deviation azeotrope: P_az>P_A°,P_B° at that T",
      "T_b,az<T_b,A,T_b,B at that P",
      "x_A,az=y_A,az"
    ],
    "sourcePages": "Pages 42–44",
    "visual": "azeotrope"
  },
  {
    "kind": "theory",
    "title": "Maximum-boiling azeotrope from negative deviation",
    "paragraphs": [
      "A large negative deviation can generate a minimum in total vapour pressure and therefore a maximum in boiling temperature. Strong unlike interactions stabilise the liquid most at the azeotropic composition.",
      "At the maximum-boiling azeotrope the vapour and liquid compositions are equal. Distillation cannot produce a composition on the opposite side of the azeotrope. Depending on the initial mixture, the residue may approach the azeotrope while the distillate becomes richer in one pure component.",
      "The source diagrams show that the directions of enrichment reverse on opposite sides of the extremum."
    ],
    "equations": [
      "At negative-deviation azeotrope: P_az<P_A°,P_B° at that T",
      "T_b,az>T_b,A,T_b,B at that P",
      "x_A,az=y_A,az"
    ],
    "sourcePages": "Pages 44–45",
    "visual": "azeotrope"
  },
  {
    "kind": "theory",
    "title": "Why a small deviation need not produce an azeotrope",
    "paragraphs": [
      "A real solution may deviate from Raoult’s law without forming any composition where dP/dx=0. If the pressure curve remains monotonic between the two pure-component vapour pressures, liquid and vapour compositions are unequal at every intermediate composition.",
      "Such a mixture can in principle be separated by sufficiently efficient fractional distillation, although a small relative volatility may require many theoretical plates. The source explicitly contrasts this with the large-deviation cases that form azeotropes.",
      "Therefore ‘non-ideal’ and ‘azeotropic’ are not synonyms. Azeotropy requires an extremum, not merely curvature."
    ],
    "sourcePages": "Pages 41 and 46"
  }
];
