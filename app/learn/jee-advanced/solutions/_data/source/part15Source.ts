import type { NoteBlock } from "../types";

export const part15Source: NoteBlock[] = [
  {
    "kind": "derivation",
    "title": "van’t Hoff osmotic equation from solvent chemical potential",
    "introduction": "The source states the gas-law form; the thermodynamic derivation shows why the same constant R appears.",
    "steps": [
      "At equilibrium across the membrane, μ₁*(p)=μ₁(solution,p+π).",
      "For an ideal solution, μ₁(solution,p)=μ₁*(p)+RTlnx₁.",
      "Increasing pressure on the solution raises solvent chemical potential by approximately V̄₁π.",
      "Therefore V̄₁π+RTlnx₁=0.",
      "For a dilute solution, −lnx₁≈x₂≈n₂/n₁ and n₁V̄₁≈V_solution."
    ],
    "result": "πV=n₂RT and π=CRT",
    "assumptions": [
      "Dilute ideal solution.",
      "Semipermeable membrane passes only solvent.",
      "Solvent partial molar volume approximately constant.",
      "Hydrostatic and concentration variations within each compartment are negligible."
    ],
    "sourcePages": "Pages 68–70",
    "visual": "osmosis"
  },
  {
    "kind": "theory",
    "title": "Direct osmotic-pressure calculation",
    "paragraphs": [
      "The source asks for osmotic pressure of a known mass percentage glucose solution at a specified temperature. Convert solute mass to moles and use the final solution volume, not solvent volume, to obtain molarity. If only mass and density are supplied, calculate solution volume from total mass divided by density.",
      "Because osmotic pressure can be several atmospheres even for modest concentrations, it is especially sensitive for determining high molar masses. A small concentration gives a readily measurable pressure while boiling-point and freezing-point changes may be too small.",
      "Solved Question 15.1 retains the direct calculation with changed concentration and temperature."
    ],
    "equations": [
      "π=(w₂/M₂V)RT"
    ],
    "sourcePages": "Page 70"
  },
  {
    "kind": "theory",
    "title": "Pressure needed to stop osmosis between two solutions",
    "paragraphs": [
      "When two solutions of different concentration are separated by a membrane permeable only to solvent, the net driving force corresponds to the difference in osmotic pressure. To prevent transfer, apply Δπ=RT(C_high−C_low) on the more concentrated side for ideal non-electrolytes.",
      "The source diagram gives two glucose solutions and asks on which side pressure should be applied and how much. The pressure is applied to the more concentrated solution because solvent would otherwise enter that side.",
      "If the solutes or temperatures differ, calculate each osmotic pressure separately and take the difference with the correct sign."
    ],
    "equations": [
      "Δπ=π₂−π₁=RT(C₂−C₁)"
    ],
    "sourcePages": "Page 70"
  },
  {
    "kind": "theory",
    "title": "Using osmotic pressure to infer vapour pressure",
    "paragraphs": [
      "The source links two colligative properties for a dilute solution. From π=CRT obtain solute molarity. Density and solvent molar mass then allow conversion to an approximate solute mole fraction, after which relative lowering of vapour pressure equals that mole fraction.",
      "The calculation requires a clear basis, commonly one litre of solution. The total solution mass is 1000ρ grams; subtract solute mass to obtain solvent mass, convert both to moles and evaluate x₂ exactly or approximately.",
      "This is a multi-step consistency problem rather than a new law."
    ],
    "sourcePages": "Pages 71–72"
  },
  {
    "kind": "theory",
    "title": "Polymer molar mass from osmometry",
    "paragraphs": [
      "A source problem dissolves a very small mass of polymer in a known solution volume and measures osmotic pressure. Rearranging πV=wRT/M gives molar mass directly. The method is suitable for macromolecules because π is proportional to number concentration rather than mass concentration.",
      "For real polymer solutions, the reduced osmotic pressure π/c is extrapolated to zero concentration: π/c=RT/M+B₂RTc+…. The intercept gives number-average molar mass. The source uses the ideal dilute limit only.",
      "Solved Question 15.3 changes polymer mass, volume, temperature and measured pressure while preserving the method."
    ],
    "equations": [
      "M=wRT/(πV)"
    ],
    "sourcePages": "Pages 71–72"
  },
  {
    "kind": "theory",
    "title": "Additivity of partial osmotic pressures",
    "paragraphs": [
      "For several independent, nonreacting dilute solutes, total osmotic pressure is the sum of their partial osmotic pressures because total particle molarity is the sum of component molarities. The source uses urea and glucose as two nonelectrolytes.",
      "If solutes associate, dissociate or react with each other, simple additivity must be corrected using actual particle concentrations. For ideal independent solutes, π_total=RTΣC_i.",
      "The same relation allows mixing two solutions: total solute moles are conserved, final volume is the sum if volume change is neglected, and final π follows from total concentration."
    ],
    "equations": [
      "π_total=Σπ_i=RTΣC_i"
    ],
    "sourcePages": "Pages 72–73"
  },
  {
    "kind": "theory",
    "title": "Mixing solutions specified only by osmotic pressures",
    "paragraphs": [
      "The source presents two aqueous solutions at the same temperature with different osmotic pressures and volumes, then asks for the final pressure after mixing. Since n_i=π_iV_i/RT, total solute moles are proportional to π_iV_i. Dividing by total volume gives the final osmotic pressure.",
      "Thus π_final=(π₁V₁+π₂V₂)/(V₁+V₂) for ideal nonreacting solutes at the same temperature. This is a volume-weighted average, not an arithmetic average unless the volumes are equal.",
      "Solved Question 15.5 rebuilds the source problem with changed volumes and pressures."
    ],
    "equations": [
      "π_final=(π₁V₁+π₂V₂)/(V₁+V₂)"
    ],
    "sourcePages": "Page 73"
  }
];
