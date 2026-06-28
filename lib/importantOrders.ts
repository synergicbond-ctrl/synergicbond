// ---------------------------------------------------------------------------
// Important Orders — document-verified ordering sequences extracted from the
// uploaded PDFs ONLY. No content here is invented, summarised, or rewritten;
// every entry traces back to a source PDF (see `sourcePdf`).
//
// Categories: IOC = Inorganic, OC = Organic, PC = Physical chemistry.
// Per the content-governance decision, ALL uploaded content is inorganic, so
// everything below is category "IOC". OC and PC have no verified content yet
// and are intentionally left empty (the UI shows a "not verified" state).
//
// Sources:
//   PF  = "Periodic Table facts.pdf"  (Periodic Properties Facts and Orders)
//   IMP = "Increase and Decrease_Akal se Nakal se_Final.pdf" (Inorganic In My Pocket)
//   BND = "imp orders.pdf" (Chemical Bonding — Ch. 3)
// ---------------------------------------------------------------------------

export type OrderCategory = "IOC" | "OC" | "PC";

export interface ImportantOrder {
  id: string;
  category: OrderCategory;
  group: string;        // sub-grouping within the source (family / section)
  property: string;     // the characteristic being compared (title)
  order: string;        // the verified sequence (use ^ for charges, e.g. O^2-)
  note?: string;        // verbatim reasoning from the PDF, when present
  reference?: string;   // locator inside the PDF (Q-no / § / "NCERT")
  sourcePdf: string;
  verified: true;       // every entry is document-verified
}

export const CATEGORY_META: Record<OrderCategory, { label: string; full: string; emoji: string }> = {
  IOC: { label: "IOC", full: "Inorganic Chemistry", emoji: "🧪" },
  OC: { label: "OC", full: "Organic Chemistry", emoji: "🧬" },
  PC: { label: "PC", full: "Physical Chemistry", emoji: "📐" },
};

const PF = "Periodic Table facts.pdf";
const IMP = "Increase and Decrease_Akal se Nakal se_Final.pdf";
const BND = "imp orders.pdf";

let _seq = 0;
const nid = () => `io-${String(++_seq).padStart(3, "0")}`;

type Row = { property: string; order: string; note?: string; reference?: string };

function rows(category: OrderCategory, sourcePdf: string, group: string, items: Row[]): ImportantOrder[] {
  return items.map((it) => ({ id: nid(), category, group, sourcePdf, verified: true as const, ...it }));
}

// ===========================================================================
// PF — Periodic Properties Facts and Orders  (directions verified from images)
// ===========================================================================
const PF_ORDERS: ImportantOrder[] = [
  ...rows("IOC", PF, "Alkali Metals", [
    { property: "Ionisation Energy (I.E.)", order: "Li > Na > K > Rb > Cs" },
    { property: "Atomic Radius (A.R.)", order: "Li < Na < K < Rb < Cs" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "Li > Na > K > Rb > Cs" },
    { property: "Electronegativity (EN)", order: "Li > Na > K > Rb > Cs" },
    { property: "Melting Point (M.P.)", order: "Li > Na > K > Rb > Cs" },
    { property: "Boiling Point (B.P.)", order: "Li > Na > K > Rb > Cs", reference: "NCERT" },
    { property: "Density", order: "Li < K < Na < Rb < Cs" },
    { property: "Hydration Enthalpy", order: "Li > Na > K > Rb > Cs" },
    { property: "Standard Reduction Potential (SRP)", order: "Na > K > Rb > Cs > Li" },
    { property: "Reducing power in aqueous solution", order: "Na < K < Cs < Rb < Li" },
  ]),
  ...rows("IOC", PF, "Alkaline Earth Metals", [
    { property: "Ionisation Energy (I.E.)", order: "Be > Mg > Ca > Sr > Ra > Ba" },
    { property: "Atomic Radius (A.R.)", order: "Be < Mg < Ca < Sr < Ba" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "Be (48) > Mg (40) > Ca (2.37) > Sr (-5.023) > Ba (-13.954)", note: "Values in kJ/mol." },
    { property: "Electronegativity (EN)", order: "Be > Mg > Ca > Sr > Ba" },
    { property: "Melting Point (M.P.)", order: "Be > Ca > Sr > Ba > Ra > Mg" },
    { property: "Boiling Point (B.P.)", order: "Be > Ba > Ca > Sr > Mg" },
    { property: "Density", order: "Ca < Mg < Be < Sr < Ba" },
    { property: "Standard Reduction Potential (SRP)", order: "Be > Mg > Ca > Sr > Ba", note: "E° M^2+/M = -1.97, -2.36, -2.84, -2.89, -2.92 V." },
  ]),
  ...rows("IOC", PF, "Boron Family", [
    { property: "Ionisation Energy (I.E.)", order: "B > Tl > Ga > Al > In" },
    { property: "Atomic Radius (A.R.)", order: "B < Ga < Al < In < Tl" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "B (26.898) < Tl (36.4) < In (37.043) < Ga (41) < Al (41.762)" },
    { property: "Electronegativity (EN)", order: "B > Tl > In > Ga > Al" },
    { property: "Melting Point (M.P.)", order: "B > Al > Tl > In > Ga" },
    { property: "Boiling Point (B.P.)", order: "B > Al > Ga > In > Tl" },
    { property: "Density", order: "B < Al < Ga < In < Tl" },
  ]),
  ...rows("IOC", PF, "Carbon Family", [
    { property: "Ionisation Energy (I.E.)", order: "C > Si > Ge > Sn > Pb" },
    { property: "Atomic Radius (A.R.)", order: "C < Si < Ge < Sn < Pb" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "Si > C > Ge > Sn > Pb" },
    { property: "Electronegativity (EN)", order: "C > Pb > Si ≈ Ge ≈ Sn" },
    { property: "Melting Point (M.P.)", order: "C > Si > Ge > Pb > Sn" },
    { property: "Boiling Point (B.P.)", order: "C > Si > Ge > Sn > Pb" },
    { property: "Density", order: "Si < C < Ge < Sn < Pb" },
  ]),
  ...rows("IOC", PF, "Nitrogen Family", [
    { property: "Ionisation Energy (I.E.)", order: "N > P > As > Sb > Bi" },
    { property: "Atomic Radius (A.R.)", order: "N < P < As < Sb < Bi" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "N < P < As < Sb < Bi" },
    { property: "Electronegativity (EN)", order: "N > P > As > Sb ≈ Bi" },
    { property: "Melting Point (M.P.)", order: "N < P < Bi < Sb < As" },
    { property: "Boiling Point (B.P.)", order: "N < P < As < Bi < Sb" },
    { property: "Density", order: "N < P < As < Sb < Bi" },
  ]),
  ...rows("IOC", PF, "Oxygen Family", [
    { property: "Ionisation Energy (I.E.)", order: "O > S > Se > Te > Po" },
    { property: "Atomic Radius (A.R.)", order: "O < S < Se < Te < Po" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "S > Se > Te > Po > O" },
    { property: "Electronegativity (EN)", order: "O > S > Se > Te > Po" },
    { property: "Melting Point (M.P.)", order: "O < S < Se < Po < Te" },
    { property: "Boiling Point (B.P.)", order: "O < S < Se < Po < Te" },
    { property: "Density", order: "O < S < Se < Te" },
  ]),
  ...rows("IOC", PF, "Halogen Family", [
    { property: "Ionisation Energy (I.E.)", order: "F > Cl > Br > I" },
    { property: "Atomic Radius (A.R.)", order: "F < Cl < Br < I" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "Cl > F > Br > I" },
    { property: "Electronegativity (EN)", order: "F > Cl > Br > I" },
    { property: "Melting Point (M.P.)", order: "F < Cl < Br < I" },
    { property: "Boiling Point (B.P.)", order: "F < Cl < Br < I" },
    { property: "Density", order: "F < Cl < Br < I" },
    { property: "Hydration Enthalpy", order: "F > Cl > Br > I" },
    { property: "Bond Dissociation Enthalpy", order: "Cl2 > Br2 > F2 > I2" },
  ]),
  ...rows("IOC", PF, "Noble Gases", [
    { property: "Ionisation Energy (I.E.)", order: "He > Ne > Ar > Kr > Xe > Rn" },
    { property: "Atomic Radius (A.R.)", order: "He < Ne < Ar < Kr < Xe" },
    { property: "Electron Gain Enthalpy (E.G.E.)", order: "He < Xe < Ar = Kr < Ne", note: "Positive value of EGE (48, 77, 96, 96, 116)." },
    { property: "Melting Point (M.P.)", order: "He < Ne < Ar < Kr < Xe" },
    { property: "Boiling Point (B.P.)", order: "He < Ne < Ar < Kr < Xe" },
    { property: "Density", order: "He < Ne < Ar < Kr < Xe" },
  ]),
  ...rows("IOC", PF, "d-Block (3d-series)", [
    { property: "Atomic Radius (A.R.)", order: "Sc > Ti > Mn ≈ Zn > V > Cr > Cu > Fe > Co ≈ Ni", note: "Sc is the lightest in the 3d series (density)." },
    { property: "Ionisation Energy (IE1)", order: "Sc (631) < V (650) < Cr (653) < Ti (656) < Mn (717) < Ni (736) < Cu (745) < Co (758) < Fe (762) < Zn (906)" },
    { property: "Ionisation Energy — Zn vs Cu", order: "IE1: Zn > Cu  ;  IE2: Cu > Zn" },
    { property: "SRP (M^2+/M)", order: "Positive only for Cu, while negative for all 3d-series elements" },
    { property: "SRP (M^3+/M^2+)", order: "Mn = 1.57 V, Fe = 0.77 V, Co = 1.97 V" },
    { property: "Enthalpy of Atomisation", order: "V > Ti > Ni > Co > Fe > Cr > Cu > Sc > Mn > Zn", note: "Values in kJ/mol." },
    { property: "Enthalpy of Hydration", order: "Cu ≈ Ni > Zn > Co > Fe > Cr > Mn > V > Ti", note: "Values in kJ/mol." },
    { property: "Colour of Ions", order: "Sc^3+ colourless; Ti^4+ colourless; Ti^3+ purple; V^3+ green; V^2+ violet; Cr^3+ violet; Mn^3+ violet; Mn^2+ pink; Fe^3+ yellow; Fe^2+ green; Co^3+/Co^2+ blue-pink; Ni^2+ green; Cu^2+ blue; Zn^2+ colourless" },
  ]),
];

// ===========================================================================
// IMP — Inorganic In My Pocket  (74 ordering questions; answers verified)
// `property` = the characteristic asked; `order` = the verified answer.
// ===========================================================================
const IMP_ORDERS: ImportantOrder[] = rows("IOC", IMP, "Inorganic In My Pocket", [
  { property: "Decreasing ionic size", order: "O^2- > F^- > Na^+ > Mg^2+", note: "All four are isoelectronic (1s² 2s² 2p⁶); nuclear charge increases Mg > Na > F > O.", reference: "Q1" },
  { property: "Increasing acidic property", order: "Na2O2 < MgO < ZnO < P2O5", note: "Acidic character increases with electronegativity: Na < Mg < Zn < P.", reference: "Q2" },
  { property: "Increasing bond length", order: "N2 < O2 < F2 < Cl2", note: "N₂ triple bond, O₂ double bond, F₂ and Cl₂ single bonds.", reference: "Q3" },
  { property: "Increasing size", order: "Ca^2+ < Cl^- < S^2-", note: "Isoelectronic species; more protons → more attraction → smaller radius.", reference: "Q4" },
  { property: "Increasing acid strength", order: "HClO < HClO2 < HClO3 < HClO4", note: "More the oxidation number of the central atom, more acidic.", reference: "Q5" },
  { property: "Increasing oxidation number of iodine", order: "HI < I2 < ICl < HIO4", note: "Oxidation states of I are -1, 0, +1, +7 respectively.", reference: "Q6" },
  { property: "Increasing thermal stability", order: "HOCl < HOClO < HOClO2 < HOClO3", reference: "Q7" },
  { property: "Increasing bond enthalpy", order: "F2 < Cl2 < O2 < N2", note: "F₂ has lower bond enthalpy than Cl₂ due to greater non-bonding electron repulsion in F₂.", reference: "Q8" },
  { property: "Increasing acidic character", order: "SiO2 < CO2 < N2O5 < SO3", note: "Increasing electronegativity makes the oxide more acidic.", reference: "Q9" },
  { property: "Increasing ionic size", order: "Mg^2+ < Na^+ < F^- < O^2-", reference: "Q10" },
  { property: "Increasing strength of hydrogen bonding (H···H–X)", order: "S < Cl < N < O < F", note: "Negative charge on X increases with electronegativity, strengthening H-bonding.", reference: "Q11" },
  { property: "Increasing ionic radii in water", order: "Cs^+ < Rb^+ < K^+ < Na^+ < Li^+", note: "Smaller ions are more heavily hydrated, so hydrated size is larger.", reference: "Q12" },
  { property: "Increasing molar conductivity in water", order: "Li^+ < Na^+ < K^+ < Rb^+ < Cs^+", note: "Li⁺ heavily hydrated → lowest mobility; Cs⁺ least hydrated → highest mobility.", reference: "Q13" },
  { property: "Increasing reactivity with water", order: "Li < Na < K < Rb < Cs", note: "Reactivity increases down group 1.", reference: "Q14" },
  { property: "Increasing basic nature of hydroxides", order: "LiOH < NaOH < KOH < RbOH < CsOH", reference: "Q15" },
  { property: "Increasing covalent character", order: "LiCl < LiBr < LiI", note: "Smaller Li⁺ polarises the larger anion more → greater covalent character.", reference: "Q16" },
  { property: "Increasing ionic character", order: "BeCl2 < MgCl2 < CaCl2 < BaCl2 < SrCl2", reference: "Q17" },
  { property: "Increasing solubility", order: "BaCO3 < CaCO3 < MgCO3 < BeCO3", note: "Down the group, lattice energy changes little while hydration decreases, so solubility decreases.", reference: "Q18" },
  { property: "Increasing solubility", order: "Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Ba(OH)2", reference: "Q19" },
  { property: "Increasing basicity", order: "Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Ba(OH)2", reference: "Q20" },
  { property: "Increasing hydration of ions", order: "Ba^2+ < Sr^2+ < Ca^2+ < Mg^2+ < Be^2+", note: "Hydration decreases with increasing ionic size.", reference: "Q21" },
  { property: "Increasing reactivity with water", order: "Be < Mg < Ca < Sr < Ba", reference: "Q22" },
  { property: "Increasing reactivity towards air", order: "Be < Mg < Ca < Sr < Ba", reference: "Q23" },
  { property: "Increasing solubility", order: "BaSO4 < SrSO4 < CaSO4 < MgSO4 < BeSO4", note: "Hydration dominates over lattice energy.", reference: "Q24" },
  { property: "Increasing ionic character", order: "BCl3 < AlCl3 < GaCl3", reference: "Q25" },
  { property: "Increasing strength of Lewis acid", order: "BF3 < BCl3 < BBr3", note: "pπ-pπ back-bonding is maximum in BF₃ and falls to BBr₃, so acceptor tendency increases.", reference: "Q26" },
  { property: "Increasing strength of Lewis acid", order: "InCl3 < GaCl3 < AlCl3", reference: "Q27" },
  { property: "Increasing reducing power", order: "PbCl2 < SnCl2 < GeCl2", note: "Stability of +II increases up group 14 (inert-pair effect).", reference: "Q28" },
  { property: "Increasing oxidizing power", order: "GeCl4 < SnCl4 < PbCl4", note: "Stability of +IV decreases up group 14 (inert-pair effect).", reference: "Q29" },
  { property: "Increasing basic character", order: "SbH3 < AsH3 < PH3", reference: "Q30" },
  { property: "Increasing thermal stability", order: "SbH3 < AsH3 < PH3 < NH3", reference: "Q31" },
  { property: "Increasing acidic strength", order: "H3SbO4 < H3AsO4 < H3AsO3 < HNO3", reference: "Q32" },
  { property: "Increasing solubility in water", order: "H3SbO4 < H3AsO4 < H3AsO3 < HNO3", reference: "Q33" },
  { property: "Increasing order of +5 oxidation state", order: "Bi < Sb < As < P < N", reference: "Q34" },
  { property: "Increasing stability of hydrides", order: "H2Te < H2Se < H2S < H2O", reference: "Q35" },
  { property: "Increasing poisonous nature", order: "H2S < H2Se < H2Te < H2Po", reference: "Q36" },
  { property: "Increasing acidic strength", order: "H2O < H2S < H2Se < H2Te", note: "Larger X → weaker H–X bond → H⁺ lost more easily.", reference: "Q37" },
  { property: "Increasing strength of oxoacids", order: "H2TeO3 < H2SeO3 < H2SO3", reference: "Q38" },
  { property: "Increasing stability of oxoacids", order: "H2TeO3 < H2SeO3 < H2SO3", reference: "Q39" },
  { property: "Increasing stability of oxoacids", order: "H2TeO4 < H2SeO4 < H2SO4", reference: "Q40" },
  { property: "Increasing stability of oxoacids", order: "H2TeO4 < H2SeO4 < H2SO4", reference: "Q41" },
  { property: "Increasing electron affinity", order: "Cl > F > Br > I", reference: "Q42" },
  { property: "Increasing reducing power", order: "HF < HCl < HBr < HI", reference: "Q43" },
  { property: "Increasing affinity for hydrogen", order: "I2 < Br2 < Cl2 < F2", reference: "Q44" },
  { property: "Increasing acidity", order: "HF < HCl < HBr < HI", reference: "Q45" },
  { property: "Increasing boiling point", order: "HCl < HBr < HI < HF", note: "Anomalous behaviour of HF is due to hydrogen bonding.", reference: "Q46" },
  { property: "Increasing stability", order: "HFO3 < HClO3 < HBrO3 < HIO3", reference: "Q47" },
  { property: "Increasing covalent character", order: "TiCl2 < TiCl3 < TiCl4", note: "Higher oxidation state → more polarisation → more covalency.", reference: "Q48" },
  { property: "Increasing magnetic moment", order: "Zn^2+ < Ti^3+ < Ni^2+ < Co^2+ < Cr^2+", note: "Unpaired electrons: Ti³⁺ 1, Ni²⁺ 2, Co²⁺ 3, Cr²⁺ 4, Zn²⁺ 0.", reference: "Q49" },
  { property: "Increasing ionic character", order: "VCl4 < VCl3 < VCl2", note: "Decreasing oxidation state increases ionic character.", reference: "Q50" },
  { property: "Increasing basic characteristics", order: "CO2 < B2O3 < BeO < Li2O", reference: "Q51" },
  { property: "Increasing electronegativity", order: "As < P < S < Cl", reference: "Q52" },
  { property: "Increasing acidity", order: "HOI < HOBr < HOCl", reference: "Q53" },
  { property: "Increasing thermal stability", order: "HI < HBr < HCl < HF", reference: "Q54" },
  { property: "Increasing bond enthalpy", order: "F2 < Cl2 < O2 < N2", reference: "Q55" },
  { property: "Increasing melting point", order: "CaI2 < CaBr2 < CaCl2 < CaF2", reference: "Q56" },
  { property: "Increasing oxidizing power", order: "Te < Se < S < O", reference: "Q57" },
  { property: "Increasing oxidizing power", order: "I < Br < Cl < F", reference: "Q58" },
  { property: "Increasing single bond strength", order: "N—N < O—O < F—F", reference: "Q59" },
  { property: "Increasing stability of hydrides", order: "CsH < KH < NaH < LiH", reference: "Q60" },
  { property: "Increasing pH of aqueous solution", order: "LiCl > MgCl2 > BeCl2 > AlCl3", note: "Larger charge and smaller size favour more hydrolysis → more free H⁺ → lower pH.", reference: "Q61" },
  { property: "Increasing acidic oxide", order: "MgO < Al2O3 < SiO2 < P4O10", reference: "Q62" },
  { property: "Increasing basicity", order: "I^- < Br^- < Cl^- < F^-", note: "Stronger the acid, weaker its conjugate base.", reference: "Q63" },
  { property: "Increasing basic strength", order: "F^- < OH^- < NH2^- < CH3^-", note: "More electronegative the atom, lesser its tendency to donate a lone pair.", reference: "Q64" },
  { property: "Increasing thermal stability", order: "BeCO3 < MgCO3 < CaCO3 < BaCO3", note: "Larger cation → lower polarising power → more stable compound.", reference: "Q65" },
  { property: "Increasing paramagnetism", order: "Ca < Al < O < N", note: "Paramagnetism increases with number of unpaired electrons.", reference: "Q66" },
  { property: "Increasing ionic character", order: "LiBr < NaBr < KBr < RbBr < CsBr", note: "Greater electronegativity difference → greater ionic character.", reference: "Q67" },
  { property: "Increasing hydration energy", order: "Ba^2+ < Sr^2+ < Ca^2+ < Mg^2+ < Be^2+", note: "Smaller size → more hydration energy.", reference: "Q68" },
  { property: "Increasing bond angle", order: "AsH3 < PH3 < NH3", note: "Larger / less electronegative central atom decreases bond-pair repulsion.", reference: "Q69" },
  { property: "Increasing bond angle", order: "AsH3 < PH3 < NH3", reference: "Q70" },
  { property: "Increasing bond angle", order: "H2Se < H2S < H2O", reference: "Q71" },
  { property: "Increasing bond angle", order: "NF3 < NCl3", note: "Bond-pair repulsion in NF₃ is less than in NCl₃.", reference: "Q72" },
  { property: "Increasing bond angle", order: "NO2^+ < NO2 < NO2^-", reference: "Q73" },
  { property: "Increasing bond angle", order: "NF3 < NH3", note: "Lesser bond-pair repulsion in NF₃.", reference: "Q74" },
]);

// ===========================================================================
// BND — Chemical Bonding (Ch. 3): melting point, lattice energy, covalent
// character, solubility, thermal stability, acidic oxides, conductivity.
// ===========================================================================
const BND_ORDERS: ImportantOrder[] = [
  ...rows("IOC", BND, "Lattice Energy & Melting Point", [
    { property: "Lattice energy / Melting point / Hardness (same r, varying charge)", order: "NaF < MgO < ScN < TiC", reference: "§3.25" },
    { property: "Melting point (BeO–BaO series)", order: "MgO > CaO > BeO > SrO > BaO", reference: "§3.25" },
    { property: "Lattice energy (BeO–BaO series)", order: "BeO > MgO > CaO > SrO > BaO", reference: "§3.25" },
    { property: "Melting point (BeF2–BaF2 series)", order: "CaF2 > MgF2 > SrF2 > BaF2 > BeF2", reference: "§3.25" },
    { property: "Lattice energy (BeF2–BaF2 series)", order: "BeF2 > MgF2 > CaF2 > SrF2 > BaF2", reference: "§3.25" },
    { property: "Lattice energy (alkali halides)", order: "LiX > NaX > KX > RbX > CsX", note: "X = F, Cl, Br, I.", reference: "§3.25" },
    { property: "Melting point (alkali chlorides/bromides)", order: "NaX > KX > RbX > CsX > LiX", note: "X = Cl, Br.", reference: "§3.25" },
    { property: "Melting point (iodides)", order: "KI > NaI > RbI > CsI > LiI", reference: "§3.25" },
    { property: "Melting point (fluorides)", order: "NaF > KF > LiF > RbF > CsF", reference: "§3.25" },
    { property: "Lattice energy / Melting point (NaF, MgF2, AlF3)", order: "NaF < MgF2 < AlF3", note: "Melting points: 995, 1261, 1291 °C.", reference: "§3.25" },
    { property: "Covalent character (NaX, MgX2, AlX3)", order: "NaX < MgX2 < AlX3", note: "X = Cl, Br, I.", reference: "§3.25" },
    { property: "Melting point (NaX, MgX2, AlX3)", order: "NaX > MgX2 > AlX3", note: "X = Cl, Br, I.", reference: "§3.25" },
    { property: "Covalent character (BeX2–BaX2)", order: "BeX2 > MgX2 > CaX2 > SrX2 > BaX2", reference: "§3.25" },
    { property: "Melting point (BeX2–BaX2)", order: "BeX2 < MgX2 < CaX2 < SrX2 < BaX2", reference: "§3.25" },
    { property: "Covalent character (LiX–CsX)", order: "LiX > NaX > KX > RbX > CsX", note: "X = Cl, Br, I.", reference: "§3.25" },
    { property: "Covalent character (MF–MI)", order: "MF < MCl < MBr < MI", reference: "§3.25" },
    { property: "Melting point (MF–MI)", order: "MF > MCl > MBr > MI", reference: "§3.25" },
    { property: "Covalent character (AlF3–AlI3)", order: "AlF3 < AlCl3 < AlBr3 < AlI3", reference: "§3.25" },
    { property: "Melting point (AlF3–AlI3)", order: "AlF3 > AlCl3 > AlI3 > AlBr3", note: "Molecular weight raises m.p. for the covalent members.", reference: "§3.25" },
  ]),
  ...rows("IOC", BND, "Solubility of Ionic Compounds", [
    { property: "Solubility (silver halides, polar solvent)", order: "AgF > AgCl > AgBr > AgI", reference: "§3.26" },
    { property: "Solubility (lead halides, polar solvent)", order: "PbF2 > PbCl2 > PbBr2 > PbI2", reference: "§3.26" },
    { property: "Solubility (mercury(II) halides, polar solvent)", order: "HgF2 > HgCl2 > HgBr2 > HgI2", reference: "§3.26" },
    { property: "Solubility in non-polar solvent (acetone)", order: "NaCl < NaI ; KCl < KI", note: "More covalent character → higher solubility in non-polar solvent.", reference: "§3.26" },
    { property: "Solubility (perchlorates)", order: "LiClO4 > NaClO4 > KClO4 > RbClO4 > CsClO4", reference: "§3.26" },
    { property: "Solubility (nitrates)", order: "LiNO3 > NaNO3 > KNO3 > RbNO3 > CsNO3", reference: "§3.26" },
    { property: "Solubility (iodides)", order: "NaI > LiI > KI > RbI > CsI", note: "LiI deviates due to maximum polarisation.", reference: "§3.26" },
    { property: "Solubility (bromides)", order: "LiBr > NaBr > KBr > RbBr > CsBr", reference: "§3.26" },
    { property: "Solubility (chromates)", order: "CaCrO4 > SrCrO4 > BaCrO4", reference: "§3.26" },
    { property: "Solubility (alkaline-earth nitrates)", order: "Be(NO3)2 > Mg(NO3)2 > Ca(NO3)2 > Sr(NO3)2 > Ba(NO3)2", reference: "§3.26" },
    { property: "Solubility (carbonates)", order: "BeCO3 > MgCO3 > CaCO3 > SrCO3 > BaCO3", reference: "§3.26" },
    { property: "Solubility (sulphates)", order: "BeSO4 > MgSO4 > CaSO4 > SrSO4 > BaSO4", reference: "§3.26" },
    { property: "Solubility (sulphites)", order: "CaSO3 > SrSO3 > BaSO3", reference: "§3.26" },
    { property: "Solubility (thiosulphates)", order: "CaS2O3 > SrS2O3 > BaS2O3", reference: "§3.26" },
    { property: "Solubility (alkaline-earth halides)", order: "BeX2 > MgX2 > CaX2 > SrX2 > BaX2", note: "X = Cl, Br, I.", reference: "§3.26" },
    { property: "Solubility — exception (oxalates)", order: "CaC2O4 < SrC2O4 < BaC2O4 < BeC2O4", note: "BeC₂O₄ is the exception to the trend.", reference: "§3.26" },
    { property: "Solubility — exception (carbonates)", order: "Li2CO3 < Na2CO3 < K2CO3 < Rb2CO3 < Cs2CO3", reference: "§3.26" },
    { property: "Solubility — exception (bicarbonates)", order: "NaHCO3 < KHCO3 < RbHCO3 < CsHCO3", note: "LiHCO₃ does not exist in solid form.", reference: "§3.26" },
    { property: "Solubility (alkali fluorides)", order: "LiF < NaF < KF < RbF < CsF", reference: "§3.26" },
    { property: "Solubility (alkali hydroxides)", order: "LiOH < NaOH < KOH < RbOH < CsOH", reference: "§3.26" },
    { property: "Solubility (alkaline-earth hydroxides)", order: "Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2", reference: "§3.26" },
    { property: "Solubility (alkaline-earth fluorides)", order: "MgF2 < CaF2 < SrF2 < BaF2 < BeF2", note: "BeF₂ is the exception to the trend.", reference: "§3.26" },
    { property: "Solubility (chlorides, experimental)", order: "LiCl > CsCl > RbCl > NaCl > KCl", note: "Based on experimental data.", reference: "§3.26" },
  ]),
  ...rows("IOC", BND, "Electrical Conductivity & Colour", [
    { property: "Electrical conductivity", order: "LiCl > BeCl2", reference: "§3.27" },
    { property: "Electrical conductivity", order: "NaCl > MgCl2", reference: "§3.27" },
  ]),
  ...rows("IOC", BND, "Acidic Nature of Oxides", [
    { property: "Acidic nature of oxides", order: "Li2O < BeO < B2O3 < CO2 < N2O5", reference: "§3.28" },
    { property: "Acidic nature of oxides", order: "Na2O < MgO < Al2O3 < SiO2 < P2O5 < SO3 < Cl2O7", reference: "§3.28" },
    { property: "Acidic nature of oxides", order: "CO < CO2", reference: "§3.28" },
    { property: "Acidic nature of oxides", order: "SO2 < SO3", reference: "§3.28" },
    { property: "Acidic nature of oxides", order: "N2O < NO < N2O3 < NO2 < N2O5", reference: "§3.28" },
  ]),
  ...rows("IOC", BND, "Thermal Stability of Ionic Compounds", [
    { property: "Thermal stability (nitrides)", order: "Li3N > Na3N > K3N", reference: "§3.29" },
    { property: "Thermal stability (oxides)", order: "Li2O > Na2O > K2O > Rb2O > Cs2O", reference: "§3.29" },
    { property: "Thermal stability (alkali halides)", order: "LiX > NaX > KX > RbX > CsX", note: "X = F, Cl, Br, I.", reference: "§3.29" },
    { property: "Thermal stability (alkaline-earth halides)", order: "BeX2 > MgX2 > CaX2 > SrX2 > BaX2", note: "X = F, Cl, Br, I.", reference: "§3.29" },
    { property: "Thermal stability (nitrides)", order: "Be3N2 > Mg3N2 > Ca3N2 > Sr3N2 > Ba3N2", reference: "§3.29" },
    { property: "Thermal stability (oxides)", order: "BeO > MgO > CaO > SrO > BaO", reference: "§3.29" },
    { property: "Thermal stability (chlorates)", order: "LiClO3 < NaClO3 < KClO3 < RbClO3 < CsClO3", reference: "§3.29" },
    { property: "Thermal stability (nitrates)", order: "LiNO3 < NaNO3 < KNO3 < RbNO3 < CsNO3", reference: "§3.29" },
    { property: "Thermal stability (hydroxides)", order: "LiOH < NaOH < KOH < RbOH < CsOH", reference: "§3.29" },
    { property: "Thermal stability (carbonates)", order: "Li2CO3 < Na2CO3 < K2CO3 < Rb2CO3 < Cs2CO3", reference: "§3.29" },
    { property: "Thermal stability (alkaline-earth nitrates)", order: "Be(NO3)2 < Mg(NO3)2 < Ca(NO3)2 < Sr(NO3)2 < Ba(NO3)2", reference: "§3.29" },
    { property: "Thermal stability (carbonates)", order: "BeCO3 < MgCO3 < CaCO3 < SrCO3 < BaCO3", reference: "§3.29" },
    { property: "Thermal stability (hydroxides)", order: "Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2", reference: "§3.29" },
    { property: "Thermal stability (oxalates)", order: "BeC2O4 < MgC2O4 < CaC2O4 < SrC2O4 < BaC2O4", reference: "§3.29" },
    { property: "Thermal stability (sulphates)", order: "BeSO4 < MgSO4 < CaSO4 < SrSO4 < BaSO4", reference: "§3.29" },
  ]),
];

export const IMPORTANT_ORDERS: ImportantOrder[] = [...PF_ORDERS, ...IMP_ORDERS, ...BND_ORDERS];

/** Distinct source PDFs that contributed verified content (for filtering). */
export const SOURCE_PDFS: string[] = Array.from(new Set(IMPORTANT_ORDERS.map((o) => o.sourcePdf)));

/** Orders for a category (empty array = nothing verified for that category). */
export function ordersByCategory(cat: OrderCategory): ImportantOrder[] {
  return IMPORTANT_ORDERS.filter((o) => o.category === cat);
}
