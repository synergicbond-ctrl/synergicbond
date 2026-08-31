import { md, type SBlockSection } from "./types";

export const USES_SECTIONS: SBlockSection[] = [
  {
    id: "uses-compendium",
    label: "21. Compendium of Uses",
    blocks: [
      md(String.raw`
Uses questions are asked directly and as distractors inside assertion–reason and match-the-column items. This section collects every s-block use worth knowing, organised by element and then by compound, so nothing has to be hunted through earlier sections.

## The metals themselves

| Metal | Principal uses |
|-------|---|
| **Lithium** | Li–Pb white-metal bearing alloys; Li–Al alloys for aircraft parts; anode in high-energy-density Li-ion and Li-primary batteries; thermonuclear (fusion) fuel as ⁶Li; lithium carbonate in psychiatric medicine to treat bipolar disorder. |
| **Sodium** | Reducing agent in extraction of Ti, Zr (Na-reduction route); Na–Pb alloy historically made PbEt₄/PbMe₄ antiknock petrol additives; liquid Na coolant in fast-breeder nuclear reactors; sodium-vapour lamps for street lighting; laboratory drying agent (Na wire) for inert solvents. |
| **Potassium** | Essential macronutrient — KCl and K₂SO₄ are major fertilisers; KOH manufactures soft soap and absorbs CO₂/acid gases; K and Na together maintain nerve/muscle electrophysiology. |
| **Rubidium / Caesium** | Very low ionisation enthalpy makes Cs (with K) the classic photoelectric-cell metal; ¹³³Cs defines the SI second in atomic clocks. |
| **Beryllium** | Cu–Be alloys for non-sparking, high-strength springs and tools; window material for X-ray tubes (low atomic number, high transparency to X-rays); moderator/reflector in some nuclear reactors. |
| **Magnesium** | Mg–Al–Zn–Mn alloys for lightweight aircraft and automotive parts; ribbon/powder in flash photography, flares, incendiary bombs and fireworks (dazzling white light); Grignard-reagent chemistry (organic synthesis) built on magnesium metal. |
| **Calcium** | Reducing agent for extracting metals whose oxides resist carbon reduction (Cr, Th, U from their halides); Ca and Ba as "getters" to scavenge residual O₂/N₂ from vacuum tubes. |
| **Radium** | Radiotherapy — historically used to treat cancer via ionising radiation, now largely superseded by other isotopes. |

## Sodium and potassium compounds

| Compound | Uses |
|----------|------|
| **Na₂O₂** | Preparing H₂O₂ and O₂ in the lab; oxygenating air and scrubbing CO₂ in submarines/space capsules; bleaching agent (via benzoyl peroxide route) and laboratory oxidising agent. |
| **KO₂** | Air purifier in submarines, spacecraft and breathing apparatus — absorbs CO₂ and moisture while releasing O₂. |
| **NaOH** (caustic soda) | Manufacture of soap, paper, rayon (artificial silk) and dyes; petroleum refining; bauxite purification (Bayer process); mercerising cotton textiles; laboratory reagent. |
| **KOH** (caustic potash) | Soft soap manufacture; absorbing CO₂/SO₂/NO gases (preferred over NaOH because KHCO₃ is soluble); alcoholic KOH is the classic organic-chemistry reagent for dehydrohalogenation/elimination. |
| **Na₂CO₃** (washing soda) | Water softening, laundering; manufacture of glass, soap, borax and caustic soda; paper, paint and textile industries; primary/secondary standard in acid–base titrations. |
| **NaHCO₃** (baking soda) | Leavening agent in baking (releases CO₂ on heating/with acid); mild antiseptic; component of dry-powder fire extinguishers and ORS (oral rehydration) formulations; antacid. |
| **K₂CO₃** (pearl ash) | Glass manufacture (potash glass); soft-soap manufacture. |
| **NaCl** | Table/food salt; feedstock for NaOH, Na₂CO₃, Na₂O₂ and Cl₂ manufacture; freezing-mixture component (ice–salt, down to −23 °C); road de-icing. |
| **KCl** | Fertiliser; source of potassium in KOH/K₂CO₃ manufacture. |
| **Na₂SO₄** (Glauber's salt) | Manufacture of glass, dyes and detergents; mild laxative; kraft (paper-pulping) process. |
| **K₂SO₄** | Fertiliser (tobacco, wheat — chloride-sensitive crops); potassium alum manufacture. |

## Magnesium and calcium compounds

| Compound | Uses |
|----------|------|
| **MgO** | Refractory bricks/linings for furnaces (very high m.p.); basic flux removing acidic Si/P/S impurities during steel-making. |
| **Mg(OH)₂** | "Milk of magnesia" — antacid and mild laxative in medicine. |
| **MgCO₃** | Ingredient of toothpaste (mild abrasive/antacid); with MgO forms Sorel cement (magnesium oxychloride), used in dental fillings and flooring. |
| **MgSO₄·7H₂O** (Epsom salt) | Medicinal purgative/laxative; bath salts; mordant in dyeing and tanning; magnesia mixtures. |
| **CaO** (quicklime) | Manufacturing cement and Na₂CO₃ (Gossage/causticisation route); sugar purification; dye manufacture; drying agent; lime-light illumination. |
| **Ca(OH)₂** (slaked lime) | Mortar (with sand); whitewash (disinfectant); glass-making; tanning; sugar-refining; bleaching powder manufacture; water softening (lime-soda process). |
| **CaCO₃** | Building material (marble/limestone); quicklime and cement manufacture; flux in iron extraction; antacid; mild toothpaste abrasive; cosmetics, paints, distempers, chewing gum filler. |
| **CaSO₄·½H₂O** (plaster of Paris) | Surgical/orthopaedic casts; dentistry; statues, moulds and decorative casts; blackboard chalk. |
| **CaCl₂** | Laboratory/industrial drying agent for gases and solvents (not NH₃ or alcohols); road de-icing; refrigeration brine. |
| **CaOCl₂** (bleaching powder) | Bleaching textiles, wood pulp and paper; disinfecting water supplies and sewage; laboratory oxidant; chloroform manufacture. |
| **CaC₂** | Acetylene (C₂H₂) manufacture and, via nitrogen-fixation route, calcium cyanamide (CaCN₂) fertiliser. |
`),
    ],
  },
];
