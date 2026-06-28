// Compound → colour reference, transcribed from the uploaded salt-analysis
// colour sheet (zxcvbnm.pdf). Organised so the UI can present compounds
// grouped BY colour ("Colour of Compounds" view).

export interface CompoundColour {
  name: string;
  color: string;
}

export const COMPOUND_COLOURS: CompoundColour[] = [
  // ── White ──
  { name: "Pb(OH)₂·2PbCO₃", color: "White" },
  { name: "ZnCO₃·3Zn(OH)₂", color: "White" },
  { name: "Mg(OH)₂·4MgCO₃·6H₂O", color: "White" },
  { name: "Ag₂SO₃", color: "White" },
  { name: "AgNO₂", color: "White (crystalline)" },
  { name: "CH₃CO₂Ag", color: "White" },
  { name: "HCO₂Ag", color: "White" },
  { name: "Ag₂C₂O₄", color: "White" },
  { name: "Hg₂Cl₂", color: "White" },
  { name: "CaC₂O₄", color: "White" },
  { name: "SrC₂O₄", color: "White" },
  { name: "BaC₂O₄", color: "White" },
  { name: "(HCO₂)₂Hg", color: "White" },
  { name: "AgCl", color: "White" },
  { name: "PbCl₂", color: "White" },
  { name: "PbBr₂", color: "White" },
  { name: "CuI", color: "White" },
  { name: "BaHPO₄", color: "White" },
  { name: "Mg(NH₄)PO₄", color: "White" },
  { name: "CaCO₃", color: "White" },
  { name: "SrCO₃", color: "White" },
  { name: "BaCO₃", color: "White" },
  { name: "AgCN", color: "White" },
  { name: "Pb(CN)₂", color: "White" },
  { name: "Cu(CN)", color: "White" },
  { name: "Cd(CN)₂", color: "White" },
  { name: "Zn₃[Fe(CN)₆]₂", color: "White" },
  { name: "K₂Fe[Fe(CN)₆]", color: "White" },
  { name: "Pb₃(PO₄)₂", color: "White" },
  { name: "Hg₂HPO₄", color: "White" },
  { name: "AlPO₄", color: "White" },
  { name: "Zn₃(PO₄)₂", color: "White" },
  { name: "Ba₃(PO₄)₂", color: "White" },
  { name: "Mg(OH)₂", color: "White" },
  { name: "K₂Ca[Fe(CN)₆]", color: "White" },
  { name: "KHC₄H₄O₆", color: "White" },
  { name: "(NH₄)HC₄H₄O₆", color: "White" },
  { name: "KClO₄", color: "White" },
  { name: "Zn[Hg(SCN)₄]", color: "White" },
  { name: "CuSCN", color: "White" },
  { name: "CuSO₄·H₂O", color: "Bluish white" },

  // ── Yellow ──
  { name: "CdS", color: "Yellow" },
  { name: "AgI", color: "Yellow" },
  { name: "PbI₂", color: "Yellow" },
  { name: "AgBr", color: "Pale yellow" },
  { name: "Ag₃PO₄", color: "Yellow" },
  { name: "HgSO₄·2HgO", color: "Yellow" },
  { name: "SrCrO₄", color: "Yellow" },
  { name: "BaCrO₄", color: "Yellow" },
  { name: "PbCrO₄", color: "Yellow" },
  { name: "K₂CrO₄ (CrO₄²⁻)", color: "Yellow" },
  { name: "FePO₄", color: "Yellow" },
  { name: "K₃[Co(NO₂)₆]", color: "Yellow" },
  { name: "(NH₄)₃[Co(NO₂)₆]", color: "Yellow" },
  { name: "K₂[PtCl₆]", color: "Yellow" },
  { name: "(NH₄)₂[PtCl₆]", color: "Yellow" },
  { name: "KZn[Co(CN)₆]", color: "Yellow" },
  { name: "Cu(CN)₂", color: "Yellow" },
  { name: "(NH₄)₃[P(Mo₃O₁₀)₄]", color: "Canary yellow" },
  { name: "Bi(C₆H₃O₃) (bismuth pyrogallate)", color: "Yellow" },
  { name: "Fluorescein", color: "Yellow" },
  { name: "PbO (Massicot)", color: "Yellow" },
  { name: "ZnO (hot)", color: "Yellow" },

  // ── Black ──
  { name: "Ag₂S", color: "Black" },
  { name: "PbS", color: "Black" },
  { name: "FeS", color: "Black" },
  { name: "NiS", color: "Black" },
  { name: "CoS", color: "Black" },
  { name: "MnO(OH)₂", color: "Black" },
  { name: "Hg (free metal)", color: "Black" },
  { name: "Cu(SCN)₂", color: "Black" },
  { name: "CuO", color: "Black" },
  { name: "Ag₂O", color: "Brownish black" },
  { name: "BiI₃", color: "Brownish black" },

  // ── Brown ──
  { name: "HgO·Hg(NH₂)I", color: "Brown" },
  { name: "Fe(CN)₂", color: "Yellowish brown" },
  { name: "Fe(CN)₃", color: "Reddish brown" },
  { name: "Ag₂Cr₂O₇", color: "Reddish brown" },
  { name: "Cu₂[Fe(CN)₆]", color: "Chocolate brown" },
  { name: "Fe[Fe(CN)₆]", color: "Brown colouration" },
  { name: "KI₃", color: "Dark brown" },
  { name: "[Co(NH₃)₆]²⁺ (solution)", color: "Brownish yellow" },

  // ── Red ──
  { name: "Fe(SCN)₃", color: "Blood red" },
  { name: "Fe(OH)₂(CH₃CO₂)", color: "Red" },
  { name: "Fe(OH)₂(HCO₂)", color: "Red" },
  { name: "[Mn(C₂O₄)₃]³⁻", color: "Red colouration" },
  { name: "Ag₂CrO₄", color: "Brick red" },
  { name: "Hg₂CrO₄", color: "Brick red" },
  { name: "CrO₃", color: "Dark red (crystals)" },
  { name: "HgI₂", color: "Scarlet red" },
  { name: "Eosin (tetrabromofluorescein)", color: "Red" },
  { name: "Ni(DMG)₂", color: "Rosy red" },
  { name: "[Fe(dipy)₃]²⁺", color: "Red colouration" },
  { name: "[Fe(C₁₂H₈N₂)₃]²⁺", color: "Red colouration" },
  { name: "PbO (Litharge)", color: "Red" },

  // ── Pink ──
  { name: "CoCl₂·6H₂O", color: "Pink" },
  { name: "CoCl₂·4H₂O", color: "Pink" },
  { name: "Co(OH)₂", color: "Pink" },
  { name: "[Co(NH₃)₆]³⁺ (solution)", color: "Pink" },
  { name: "Mn₃(PO₄)₂", color: "Pink" },

  // ── Orange ──
  { name: "K₂Cr₂O₇ (Cr₂O₇²⁻)", color: "Orange" },
  { name: "Trichromate (Cr₃O₁₀²⁻)", color: "Orange-red" },
  { name: "Tetrachromate (Cr₄O₁₃²⁻)", color: "Dark red" },
  { name: "[BiI₄]⁻ (solution)", color: "Orange to yellow" },

  // ── Green ──
  { name: "Cu(OH)₂·CuCO₃", color: "Green" },
  { name: "Hg₂I₂", color: "Green" },
  { name: "[Cr(OH)₄]⁻ (solution)", color: "Green" },
  { name: "Cu₃[Fe(CN)₆]₂", color: "Green" },
  { name: "CoO·ZnO / Co[ZnO₂] (Rinmann's green)", color: "Green" },
  { name: "Cr₂O₃", color: "Green" },
  { name: "FeSO₄·7H₂O (green vitriol)", color: "Green" },

  // ── Blue ──
  { name: "I₂ + starch", color: "Deep blue" },
  { name: "CuSO₄·5H₂O (blue vitriol)", color: "Blue" },
  { name: "CoCl₂ (anhydrous)", color: "Blue" },
  { name: "[Ni(NH₃)₆]²⁺ (solution)", color: "Deep blue" },
  { name: "Fe₄[Fe(CN)₆]₃ (Prussian blue)", color: "Blue" },
  { name: "Fe₃[Fe(CN)₆]₂ (Turnbull's blue)", color: "Blue" },

  // ── Violet ──
  { name: "[Ni(en)₃]S₂O₃", color: "Violet" },
  { name: "Cu[Hg(SCN)₄]·Zn[Hg(SCN)₄]", color: "Violet" },
  { name: "CoCl₂·2H₂O", color: "Red violet" },

  // ── Grey ──
  { name: "Hg + HgO", color: "Grey" },

  // ── Transition metal ions (aqueous) ──
  { name: "Sc³⁺", color: "Colourless" },
  { name: "Ti⁴⁺", color: "Colourless" },
  { name: "Ti³⁺", color: "Purple" },
  { name: "V⁴⁺", color: "Blue" },
  { name: "V³⁺", color: "Green" },
  { name: "V²⁺", color: "Violet" },
  { name: "Cr³⁺", color: "Violet" },
  { name: "Mn³⁺", color: "Violet" },
  { name: "Cr²⁺", color: "Blue" },
  { name: "Mn²⁺", color: "Pink" },
  { name: "Fe³⁺", color: "Yellow" },
  { name: "Fe²⁺", color: "Green" },
  { name: "Co³⁺ / Co²⁺", color: "Blue-pink" },
  { name: "Ni²⁺", color: "Green" },
  { name: "Cu²⁺", color: "Blue" },
  { name: "Zn²⁺", color: "Colourless" },

  // ── Colourless soluble complexes ──
  { name: "[HgS₂]²⁻", color: "Colourless" },
  { name: "[PbI₄]²⁻", color: "Colourless" },
  { name: "[HgI₄]²⁻", color: "Colourless" },
  { name: "[Ag(CN)₂]⁻", color: "Colourless" },
  { name: "[Cd(CN)₄]²⁻", color: "Colourless" },
  { name: "[Cu(CN)₄]³⁻", color: "Colourless" },
  { name: "[Cu(SCN)₄]³⁻", color: "Colourless" },
  { name: "[FeF₆]³⁻", color: "Colourless" },
];

// Display order + heading swatch for each colour family.
export const COLOUR_FAMILIES: { key: string; hex: string }[] = [
  { key: "White", hex: "#f8fafc" },
  { key: "Yellow", hex: "#fde047" },
  { key: "Black", hex: "#1f2937" },
  { key: "Brown", hex: "#92400e" },
  { key: "Red", hex: "#dc2626" },
  { key: "Pink", hex: "#f472b6" },
  { key: "Orange", hex: "#fb923c" },
  { key: "Green", hex: "#22c55e" },
  { key: "Blue", hex: "#2563eb" },
  { key: "Violet", hex: "#a855f7" },
  { key: "Grey", hex: "#9ca3af" },
  { key: "Colourless", hex: "#cbd5e1" },
];

// Bucket a colour string into one of the families above.
export function familyOf(color: string): string {
  const s = color.toLowerCase();
  if (/colourless|colorless/.test(s)) return "Colourless";
  if (/bluish white/.test(s)) return "White";
  if (/brownish[ -]?black/.test(s)) return "Black";
  if (/purple|red[ -]?violet|violet/.test(s)) return "Violet";
  if (/reddish[ -]?brown|yellowish[ -]?brown|chocolate|dark brown|brownish|\bbrown\b/.test(s)) return "Brown";
  if (/grey|gray/.test(s)) return "Grey";
  if (/pink/.test(s)) return "Pink";
  if (/orange/.test(s)) return "Orange";
  if (/green/.test(s)) return "Green";
  if (/blue/.test(s)) return "Blue";
  if (/scarlet|blood|brick|crimson|rosy|carmine|\bred\b/.test(s)) return "Red";
  if (/yellow/.test(s)) return "Yellow";
  if (/white/.test(s)) return "White";
  if (/black/.test(s)) return "Black";
  return "Other";
}

// Group all compounds by colour family, in display order.
export function groupByColour(): { family: string; hex: string; items: CompoundColour[] }[] {
  return COLOUR_FAMILIES.map(({ key, hex }) => ({
    family: key,
    hex,
    items: COMPOUND_COLOURS.filter((c) => familyOf(c.color) === key),
  })).filter((g) => g.items.length > 0);
}
