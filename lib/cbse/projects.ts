// ─────────────────────────────────────────────────────────────────────────────
// CBSE Chemistry Investigatory Projects SSOT — the standard, well-established
// CBSE Class 11/12 investigatory project topics plus the official report
// structure. This is real curriculum reference content (not fabricated); each
// topic is a genuine, commonly-prescribed CBSE chemistry project. The report
// template mirrors the standard sections a CBSE project file must contain.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectTopic {
  id: string;
  title: string;
  category: string;
  /** Suggested class (both are valid; 12 is where the project is examined). */
  level: "Class 11" | "Class 12" | "Class 11–12";
  aim: string;
  materials: string[];
  outline: string[];
}

export const PROJECT_TOPICS: ProjectTopic[] = [
  {
    id: "oxalate-guava", title: "Oxalate Ions in Guava at Different Stages of Ripening",
    category: "Food & Titrimetric", level: "Class 12",
    aim: "To study the presence and amount of oxalate ions in guava fruit at different stages of ripening by titration against KMnO₄.",
    materials: ["Guava (raw, ripe, over-ripe)", "0.1 N KMnO₄", "Dil. H₂SO₄", "Burette, pipette, flasks", "Pestle & mortar"],
    outline: ["Extract juice/pulp of each stage in dilute H₂SO₄ and filter.", "Titrate a fixed volume against standard KMnO₄ (hot).", "Compute oxalate content per stage.", "Conclude how oxalate concentration changes with ripening."],
  },
  {
    id: "juice-acidity", title: "Analysis of Acidity of Fruit & Vegetable Juices",
    category: "Food & Titrimetric", level: "Class 12",
    aim: "To determine the acid content (acidity) of different fruit and vegetable juices by titration against standard NaOH.",
    materials: ["Assorted juices", "0.1 N NaOH", "Phenolphthalein", "Burette, pipette, flasks"],
    outline: ["Filter each juice.", "Titrate a measured volume against NaOH using phenolphthalein.", "Express acidity as g of citric/tartaric acid per 100 mL.", "Compare and rank the juices."],
  },
  {
    id: "casein-milk", title: "Study of Casein Content in Different Milk Samples",
    category: "Food & Colloids", level: "Class 12",
    aim: "To determine the amount of casein (a milk protein) present in different samples of milk.",
    materials: ["Milk samples (cow, buffalo, toned, packaged)", "1% acetic acid", "Filter paper", "Balance"],
    outline: ["Warm milk to ~40 °C, add acetic acid to precipitate casein.", "Filter, dry and weigh the casein.", "Compute % casein for each sample.", "Compare across milk types."],
  },
  {
    id: "food-adulterants", title: "Study of Common Food Adulterants",
    category: "Food Safety", level: "Class 11–12",
    aim: "To detect adulterants in common food items (fats & oils, sugar, turmeric, chilli powder, milk, tea).",
    materials: ["Food samples", "Conc. HCl", "Iodine solution", "Test tubes", "Common reagents"],
    outline: ["Perform standard qualitative tests for each adulterant (e.g. metanil yellow in turmeric, starch in milk).", "Record positive/negative results.", "Tabulate which samples are adulterated.", "Discuss health implications."],
  },
  {
    id: "cold-drinks-acidity", title: "Analysis of Acidity/Additives in Cold Drinks",
    category: "Food & Titrimetric", level: "Class 12",
    aim: "To study the presence of phosphoric acid / acidity and other constituents in commercially available cold drinks.",
    materials: ["Cold drink samples", "0.1 N NaOH", "pH paper", "Indicators"],
    outline: ["Remove dissolved CO₂ by warming/stirring.", "Measure pH and titrate for acidity.", "Test for phosphate and caffeine qualitatively.", "Compare across brands."],
  },
  {
    id: "cement-setting", title: "Study of the Setting of Cement",
    category: "Materials", level: "Class 11–12",
    aim: "To study the rate of setting of cement and the effect of additives (gypsum, sand) on setting time.",
    materials: ["Cement samples", "Water", "Additives", "Stopwatch", "Moulds"],
    outline: ["Prepare cement paste of standard consistency.", "Measure initial and final setting times.", "Vary water/additive ratio and record effect.", "Conclude optimum conditions."],
  },
  {
    id: "rate-vs-conc", title: "Effect of Concentration & Temperature on Reaction Rate",
    category: "Physical Chemistry", level: "Class 12",
    aim: "To study how concentration and temperature affect the rate of the Na₂S₂O₃–HCl reaction.",
    materials: ["Sodium thiosulphate", "Dilute HCl", "Stopwatch", "Thermometer", "Flasks"],
    outline: ["Vary thiosulphate concentration at fixed temperature; time the cross disappearing.", "Repeat at different temperatures.", "Plot rate (1/time) vs concentration and vs temperature.", "Interpret using collision theory."],
  },
  {
    id: "tea-caffeine", title: "Determination of Caffeine in Tea Samples",
    category: "Extraction", level: "Class 12",
    aim: "To extract and estimate the caffeine content of different tea samples.",
    materials: ["Tea samples", "Water", "Lead acetate", "Chloroform", "Separating funnel"],
    outline: ["Boil tea, precipitate tannins with lead acetate and filter.", "Extract caffeine into chloroform using a separating funnel.", "Evaporate and weigh the caffeine.", "Compare caffeine across teas."],
  },
  {
    id: "soybean-milk", title: "Preparation of Soybean Milk & Comparison with Natural Milk",
    category: "Food & Colloids", level: "Class 11–12",
    aim: "To prepare soybean milk and compare its properties (pH, protein) with natural milk.",
    materials: ["Soybeans", "Cow milk", "pH paper", "Biuret reagent", "Muslin cloth"],
    outline: ["Soak, grind and filter soybeans to obtain soy milk.", "Compare pH, taste and protein (Biuret) with cow milk.", "Prepare tofu by curdling to show protein content.", "Tabulate the comparison."],
  },
  {
    id: "green-chem-alum", title: "Preparation of Potash Alum from Scrap Aluminium",
    category: "Green Chemistry / Preparation", level: "Class 12",
    aim: "To prepare potash alum from waste aluminium (foil/cans) — an example of recycling.",
    materials: ["Scrap aluminium", "KOH", "Dil. H₂SO₄", "Beakers, funnel"],
    outline: ["Dissolve aluminium in KOH; filter.", "Neutralise with dilute H₂SO₄ and add K₂SO₄ equivalent.", "Crystallise the alum slowly.", "Report yield and discuss recycling value."],
  },
];

export function getProjectTopics(): ProjectTopic[] { return PROJECT_TOPICS; }

// Standard CBSE investigatory project report structure.
export const PROJECT_TEMPLATE: { section: string; note: string }[] = [
  { section: "Cover Page", note: "Title, student name, class/section, roll no., school, session." },
  { section: "Certificate", note: "Signed by subject teacher, external examiner and principal." },
  { section: "Acknowledgement", note: "Thanks to teacher, lab staff, principal and family." },
  { section: "Index / Contents", note: "Numbered list of sections with page numbers." },
  { section: "Introduction", note: "Background and relevance of the chosen topic." },
  { section: "Aim / Objective", note: "The precise objective of the investigation." },
  { section: "Theory", note: "Chemical principles, equations and definitions involved." },
  { section: "Materials & Apparatus", note: "Chemicals, glassware and instruments used." },
  { section: "Procedure", note: "Step-by-step experimental method, in past passive voice." },
  { section: "Observations", note: "Tabulated readings and qualitative observations." },
  { section: "Calculations & Result", note: "Worked calculations and the final result/inference." },
  { section: "Precautions & Sources of Error", note: "Care taken and possible errors." },
  { section: "Conclusion", note: "What the investigation established." },
  { section: "Bibliography", note: "Books, NCERT and web references used." },
];
