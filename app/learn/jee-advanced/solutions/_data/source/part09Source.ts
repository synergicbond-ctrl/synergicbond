import type { NoteBlock } from "../types";

export const part09Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Distillation as repeated equilibrium enrichment",
    "paragraphs": [
      "Distillation separates or purifies volatile liquids by exploiting the fact that equilibrium vapour is richer in the more volatile component than the liquid from which it formed. Condensing that vapour creates a new liquid of enhanced volatile-component concentration. Repeating vaporisation and condensation produces progressive enrichment.",
      "The source illustrates the process on both P–x–y and T–x–y diagrams. On a T–x–y plot at constant pressure, a vertical heating step reaches the bubble curve, a horizontal tie line gives the first vapour composition, condensation transfers that composition back to the liquid scale, and the sequence repeats.",
      "The number of ideal equilibrium steps required depends on relative volatility and desired purity. When the two components have similar vapour pressures, many steps are needed."
    ],
    "sourcePages": "Pages 36–37",
    "visual": "distillation"
  },
  {
    "kind": "theory",
    "title": "Simple distillation and its limitation",
    "paragraphs": [
      "In simple distillation, vapour produced from the boiling flask is condensed once and collected. The distillate is richer in the more volatile component, while the residual liquid becomes richer in the less volatile component as distillation proceeds.",
      "Because the pot composition changes continuously, the vapour composition and boiling temperature also change. A single-stage simple distillation cannot produce high purity when the liquids have close boiling points. The source notes that a sufficiently large boiling-point difference, roughly several tens of degrees under ordinary conditions, makes simple distillation more effective.",
      "The distillate is not necessarily pure. Its composition is the time-integrated composition of vapour collected over the run."
    ],
    "sourcePages": "Pages 37–38",
    "visual": "distillation"
  },
  {
    "kind": "theory",
    "title": "Fractional distillation and the fractionating column",
    "paragraphs": [
      "Fractional distillation inserts a column between the boiling flask and condenser. Rising vapour repeatedly condenses and revaporises on packing or plates. Downflowing liquid contacts upflowing vapour, creating many near-equilibrium stages in one apparatus.",
      "At each stage, the vapour leaving upward is richer in the more volatile component than the liquid leaving downward. A temperature gradient is maintained: hotter near the reboiler and cooler near the top. Reflux returns part of the condensate, increasing the number of effective contacts and improving separation.",
      "The source figure shows simple distillation apparatus but explains that fractional distillation is preferred when boiling points are close."
    ],
    "sourcePages": "Page 38",
    "visual": "distillation"
  },
  {
    "kind": "theory",
    "title": "Vacuum distillation for high-boiling or heat-sensitive substances",
    "paragraphs": [
      "Reducing external pressure lowers the temperature at which vapour pressure equals the surroundings. Vacuum distillation therefore allows a high-boiling compound to distil at a lower temperature, preventing decomposition or oxidation.",
      "The source uses glycerol as the example. Glycerol has a very high normal boiling point and can decompose on strong heating. Under reduced pressure it boils at a much lower temperature and can be distilled more safely.",
      "The vapour–liquid equilibrium principle is unchanged; only the chosen pressure is lower. Apparatus must prevent air leakage and provide controlled pressure measurement."
    ],
    "sourcePages": "Pages 38–39"
  },
  {
    "kind": "theory",
    "title": "Steam distillation of water-immiscible volatile substances",
    "paragraphs": [
      "Steam distillation is used when an organic liquid is volatile with steam, substantially immiscible with water and often sensitive to high temperature. Because the two liquid phases are immiscible, each exerts nearly its own pure vapour pressure independently of the other.",
      "Boiling occurs when p_water°+p_organic°=P_ext. The sum can reach atmospheric pressure at a temperature below the normal boiling point of either component. This permits purification of essential oils and similar compounds without exposing them to their normal boiling temperature.",
      "The vapour mole ratio equals the ratio of pure vapour pressures. The distillate mass ratio additionally includes molar masses."
    ],
    "equations": [
      "P_ext=p_water°+p_org°",
      "n_org/n_water=p_org°/p_water°",
      "m_org/m_water=(p_org°M_org)/(p_water°M_water)"
    ],
    "sourcePages": "Pages 39–40"
  },
  {
    "kind": "theory",
    "title": "Steam-distillate composition calculation retained from the source",
    "paragraphs": [
      "The source asks for the percentage by mass of an organic liquid in the distillate when the steam-distillation temperature and the pure vapour pressure of water are known. The organic partial pressure is obtained by subtraction from total atmospheric pressure.",
      "Convert pressure ratio to mole ratio, then to mass ratio using molar masses. Finally divide organic mass by total condensate mass. Solved Question 9.1 rebuilds this exact sequence with changed organic compound, temperature and pressure data."
    ],
    "equations": [
      "p_org=P_total−p_water°",
      "mass % org=100[p_orgM_org]/[p_orgM_org+p_water°M_water]"
    ],
    "sourcePages": "Page 40"
  }
];
