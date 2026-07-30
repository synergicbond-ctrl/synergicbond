import type { NoteBlock } from "../types";

export const part07Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Construction of the ideal P–x line",
    "paragraphs": [
      "At fixed temperature, bubble pressure is a linear function of liquid composition: P=p_B°+x_A(p_A°−p_B°). The straight line joins p_B° at x_A=0 to p_A° at x_A=1. Each point on this line is a liquid composition at which the first bubble of vapour appears.",
      "The partial-pressure lines p_A=x_Ap_A° and p_B=(1−x_A)p_B° are also straight. Their sum gives the total-pressure line. The source sketches the slopes and intercepts explicitly so that the graph can be reconstructed without memorisation."
    ],
    "equations": [
      "P_bubble(x_A)=p_B°+x_A(p_A°−p_B°)",
      "dP/dx_A=p_A°−p_B°"
    ],
    "sourcePages": "Pages 28–29",
    "visual": "phase-envelope"
  },
  {
    "kind": "theory",
    "title": "Construction of the ideal P–y curve",
    "paragraphs": [
      "The dew relation is written in terms of vapour composition: 1/P=y_A/p_A°+(1−y_A)/p_B°. Solving for P gives a curved function of y_A. It connects the same pure-component endpoints as the bubble line but lies below the bubble line when pressure is plotted upward and p_A°>p_B°.",
      "The region above the bubble line is single liquid, because pressure is high enough to condense all vapour. The region below the dew curve is single vapour. Between the curves, liquid and vapour coexist.",
      "A horizontal tie line at a chosen pressure intersects the bubble curve at x_A and the dew curve at y_A."
    ],
    "equations": [
      "P_dew(y_A)=1/[y_A/p_A°+(1−y_A)/p_B°]"
    ],
    "sourcePages": "Pages 29–31",
    "visual": "phase-envelope"
  },
  {
    "kind": "theory",
    "title": "Phase fields and movement during compression or expansion",
    "paragraphs": [
      "A vertical line represents fixed overall composition. Moving upward at constant temperature corresponds to compression. Starting in the vapour field, the path meets the dew curve, crosses the two-phase region and exits through the bubble line into the liquid field.",
      "Moving downward corresponds to expansion. A liquid first forms a bubble at the bubble line; progressive vaporisation follows through the two-phase region until the last liquid drop disappears at the dew curve.",
      "The source warns that phase compositions change along the two boundary curves even though overall composition remains fixed."
    ],
    "sourcePages": "Pages 30–31"
  },
  {
    "kind": "derivation",
    "title": "Lever rule from the component balance",
    "introduction": "The source diagram uses segment lengths on a horizontal tie line to determine the relative amounts of liquid and vapour.",
    "steps": [
      "Let z_A be overall composition, x_A the liquid composition and y_A the vapour composition at the chosen pressure.",
      "Write Fz_A=Lx_A+Vy_A and F=L+V.",
      "Substitute V=F−L and solve for L/F.",
      "The numerator and denominator are precisely the opposite and total tie-line segment lengths."
    ],
    "result": "L/F=(y_A−z_A)/(y_A−x_A),  V/F=(z_A−x_A)/(y_A−x_A)",
    "assumptions": [
      "Binary closed system.",
      "Both phases at equilibrium on one tie line.",
      "Compositions expressed on the same mole-fraction basis."
    ],
    "sourcePages": "Pages 31–32",
    "visual": "phase-envelope"
  },
  {
    "kind": "theory",
    "title": "Critical consistency checks on P–x–y diagrams",
    "paragraphs": [
      "For the more volatile component A, p_A°>p_B°. At any intermediate equilibrium, y_A>x_A. Therefore the dew-curve intersection must lie to the right of the bubble-line intersection when x_A and y_A are drawn on the same horizontal composition axis.",
      "At the pure-component endpoints x_A=y_A=0 or 1, bubble and dew curves meet. The two-phase width shrinks to zero because a pure substance has only one equilibrium vapour pressure at a fixed temperature.",
      "The source also notes that the phase amounts may change even at fixed overall composition and fixed temperature when pressure changes."
    ],
    "sourcePages": "Pages 30–32"
  }
];
