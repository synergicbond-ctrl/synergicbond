type Ore = {
  name: string;
  aliases?: string;
  formula: string;
  significance: string;
  color: string;
};

type OreGroup = {
  category: string;
  subtitle: string;
  ores: Ore[];
};

const oreGroups: OreGroup[] = [
  {
    category: "Native / elemental",
    subtitle: "Metals occurring naturally in the free or nearly free state",
    ores: [
      { name: "Gold", aliases: "native gold", formula: "Au", significance: "Gold", color: "#D4AF37" },
      { name: "Silver", aliases: "native silver", formula: "Ag", significance: "Silver", color: "#C9CED6" },
      { name: "Platinum", aliases: "native platinum", formula: "Pt", significance: "Platinum-group metal", color: "#AEB6C1" },
      { name: "Native copper", formula: "Cu", significance: "Copper", color: "#B66A3C" },
    ],
  },
  {
    category: "Sulphides",
    subtitle: "High-yield sulphide ores and important sulphide minerals",
    ores: [
      { name: "Galena", aliases: "lead glance", formula: "PbS", significance: "Lead", color: "#6E737A" },
      { name: "Cinnabar", formula: "HgS", significance: "Mercury", color: "#C9362B" },
      { name: "Sphalerite", aliases: "zinc blende · blackjack", formula: "ZnS", significance: "Zinc", color: "#5A4030" },
      { name: "Chalcocite", aliases: "copper glance", formula: "Cu₂S", significance: "Copper", color: "#33373D" },
      { name: "Chalcopyrite", aliases: "copper pyrite", formula: "CuFeS₂", significance: "Copper", color: "#C3A33A" },
      { name: "Iron pyrite", aliases: "fool’s gold", formula: "FeS₂", significance: "Iron-bearing mineral; not a preferred iron ore", color: "#D0B13C" },
      { name: "Argentite", aliases: "silver glance", formula: "Ag₂S", significance: "Silver", color: "#2D3034" },
      { name: "Stromeyerite", aliases: "copper–silver sulphide", formula: "AgCuS", significance: "Copper · Silver", color: "#4C5054" },
      { name: "Pyrargyrite", aliases: "ruby silver", formula: "Ag₃SbS₃", significance: "Silver", color: "#8D2030" },
      { name: "Bornite", aliases: "peacock ore", formula: "Cu₅FeS₄", significance: "Copper", color: "#7657A8" },
      { name: "Stibnite", formula: "Sb₂S₃", significance: "Antimony", color: "#747B82" },
      { name: "Molybdenite", formula: "MoS₂", significance: "Molybdenum", color: "#66717D" },
    ],
  },
  {
    category: "Halides & hydroxyhalides",
    subtitle: "Chloride and fluoride minerals, plus important mixed halide ores",
    ores: [
      { name: "Rock salt", aliases: "halite", formula: "NaCl", significance: "Sodium", color: "#EEF2F5" },
      { name: "Sylvite", formula: "KCl", significance: "Potassium", color: "#E9A3B4" },
      { name: "Fluorite", aliases: "fluorspar", formula: "CaF₂", significance: "Fluorine mineral · metallurgical flux", color: "#8A6ADF" },
      { name: "Cryolite", formula: "Na₃AlF₆", significance: "Aluminium metallurgy electrolyte/flux component", color: "#E7F0F2" },
      { name: "Chlorargyrite", aliases: "horn silver", formula: "AgCl", significance: "Silver", color: "#B9B9AA" },
      { name: "Carnallite", formula: "KCl·MgCl₂·6H₂O", significance: "Magnesium · Potassium", color: "#E5B4A7" },
      { name: "Sylvinite", aliases: "natural KCl + NaCl mixture", formula: "KCl + NaCl", significance: "Potassium · Sodium", color: "#D7A0AA" },
      { name: "Atacamite", formula: "Cu₂Cl(OH)₃", significance: "Copper", color: "#159667" },
    ],
  },
  {
    category: "Oxides & hydrated oxides",
    subtitle: "Major oxide ores, mixed oxides and hydrated oxide minerals",
    ores: [
      { name: "Haematite", formula: "Fe₂O₃", significance: "Iron", color: "#8B342B" },
      { name: "Magnetite", formula: "Fe₃O₄", significance: "Iron", color: "#202326" },
      { name: "Limonite", aliases: "brown iron ore", formula: "FeO(OH)·nH₂O", significance: "Iron", color: "#9B692C" },
      { name: "Cuprite", aliases: "ruby copper", formula: "Cu₂O", significance: "Copper", color: "#A52A24" },
      { name: "Pyrolusite", formula: "MnO₂", significance: "Manganese", color: "#383B3F" },
      { name: "Cassiterite", aliases: "tinstone", formula: "SnO₂", significance: "Tin", color: "#5A4637" },
      { name: "Rutile", formula: "TiO₂", significance: "Titanium", color: "#7D3D2E" },
      { name: "Chromite", formula: "FeCr₂O₄", significance: "Chromium", color: "#1D2023" },
      { name: "Uraninite", aliases: "pitchblende family", formula: "UO₂+x / U₃O₈-rich", significance: "Uranium", color: "#17191A" },
      { name: "Ilmenite", formula: "FeTiO₃", significance: "Titanium", color: "#232629" },
      { name: "Zincite", formula: "ZnO", significance: "Zinc", color: "#D45532" },
      { name: "Bauxite", aliases: "hydrated alumina ore mixture", formula: "Al₂O₃·xH₂O", significance: "Principal aluminium ore", color: "#A15336" },
      { name: "Diaspore", formula: "AlO(OH)", significance: "Aluminium", color: "#D5D1C8" },
      { name: "Gibbsite", formula: "Al(OH)₃", significance: "Aluminium", color: "#EEEDE8" },
      { name: "Corundum", formula: "Al₂O₃", significance: "Aluminium oxide mineral", color: "#7D8188" },
      { name: "Spinel", formula: "MgAl₂O₄", significance: "Magnesium · Aluminium mineral", color: "#7D3E55" },
    ],
  },
  {
    category: "Carbonates",
    subtitle: "Carbonate and basic-carbonate minerals used in extraction chemistry",
    ores: [
      { name: "Limestone", aliases: "calcite-rich rock", formula: "CaCO₃", significance: "Calcium · flux source", color: "#DEDCD3" },
      { name: "Magnesite", formula: "MgCO₃", significance: "Magnesium", color: "#E8E7E1" },
      { name: "Dolomite", formula: "CaMg(CO₃)₂", significance: "Calcium · Magnesium", color: "#E3D0D1" },
      { name: "Siderite", aliases: "spathic iron ore", formula: "FeCO₃", significance: "Iron", color: "#9A744C" },
      { name: "Smithsonite", aliases: "calamine", formula: "ZnCO₃", significance: "Zinc", color: "#9AC7B4" },
      { name: "Malachite", formula: "Cu₂CO₃(OH)₂", significance: "Copper", color: "#17A568" },
      { name: "Azurite", formula: "Cu₃(CO₃)₂(OH)₂", significance: "Copper", color: "#245EB8" },
      { name: "Cerussite", formula: "PbCO₃", significance: "Lead", color: "#E3E4DF" },
      { name: "Strontianite", formula: "SrCO₃", significance: "Strontium", color: "#D9E0D8" },
    ],
  },
  {
    category: "Sulphates",
    subtitle: "Important sulphate minerals and naturally occurring sulphate salts",
    ores: [
      { name: "Gypsum", formula: "CaSO₄·2H₂O", significance: "Calcium sulphate mineral", color: "#EFEDE7" },
      { name: "Epsomite", aliases: "Epsom salt", formula: "MgSO₄·7H₂O", significance: "Magnesium", color: "#EDF2F2" },
      { name: "Anglesite", formula: "PbSO₄", significance: "Lead", color: "#E4E2D8" },
      { name: "Barite", aliases: "barytes", formula: "BaSO₄", significance: "Barium", color: "#E7E1D4" },
      { name: "Mirabilite", aliases: "Glauber salt", formula: "Na₂SO₄·10H₂O", significance: "Sodium sulphate mineral", color: "#EAF0F1" },
      { name: "Celestite", aliases: "celestine", formula: "SrSO₄", significance: "Strontium", color: "#AFC8D7" },
      { name: "Potash alum", formula: "KAl(SO₄)₂·12H₂O", significance: "Aluminium · Potassium salt", color: "#EEF2F5" },
      { name: "Kainite", formula: "KMg(SO₄)Cl·3H₂O", significance: "Magnesium · Potassium", color: "#C99A79" },
      { name: "Kieserite", formula: "MgSO₄·H₂O", significance: "Magnesium", color: "#D7D8D2" },
    ],
  },
  {
    category: "Borates",
    subtitle: "Naturally occurring borate minerals and salts",
    ores: [
      { name: "Borax", aliases: "tincal", formula: "Na₂B₄O₇·10H₂O", significance: "Boron", color: "#EFF3F5" },
      { name: "Colemanite", formula: "Ca₂B₆O₁₁·5H₂O", significance: "Boron", color: "#DAD9D3" },
    ],
  },
  {
    category: "Nitrates",
    subtitle: "Natural nitrate deposits of high industrial importance",
    ores: [
      { name: "Indian saltpetre", aliases: "nitre", formula: "KNO₃", significance: "Potassium nitrate", color: "#F2F2EE" },
      { name: "Chile saltpetre", aliases: "soda nitre", formula: "NaNO₃", significance: "Sodium nitrate", color: "#F1F1ED" },
    ],
  },
  {
    category: "Silicates",
    subtitle: "Silicate minerals important in metallurgy and mineral chemistry",
    ores: [
      { name: "Beryl", formula: "Be₃Al₂Si₆O₁₈", significance: "Beryllium", color: "#70BFA7" },
      { name: "Kaolinite", aliases: "china-clay mineral", formula: "Al₂Si₂O₅(OH)₄", significance: "Aluminium silicate clay", color: "#E9E3D8" },
      { name: "Chrysotile", aliases: "major asbestos mineral", formula: "Mg₃Si₂O₅(OH)₄", significance: "Fibrous magnesium silicate", color: "#7F9182" },
    ],
  },
  {
    category: "Chromates & tungstates",
    subtitle: "Distinctive chromate and tungsten-bearing minerals",
    ores: [
      { name: "Crocoite", formula: "PbCrO₄", significance: "Lead · Chromium mineral", color: "#D85B1A" },
      { name: "Wolframite", formula: "(Fe,Mn)WO₄", significance: "Tungsten", color: "#352F2B" },
      { name: "Scheelite", formula: "CaWO₄", significance: "Tungsten", color: "#D7C98D" },
    ],
  },
];

export default function OreClassificationGrid() {
  return (
    <section className="ore-classification" aria-label="Classification of important ores and minerals">
      <div className="ore-legend">
        <span><i className="ore-dot ore-dot-sample" />Dot = typical specimen colour</span>
        <span>Natural colour can vary with crystal habit, impurities and weathering.</span>
      </div>
      {oreGroups.map((group) => (
        <section className="ore-category" key={group.category}>
          <div className="ore-category-heading">
            <h3>{group.category}</h3>
            <p>{group.subtitle}</p>
          </div>
          <div className="ore-grid">
            {group.ores.map((ore) => (
              <article className="ore-card" key={`${group.category}-${ore.name}`}>
                <div className="ore-name-line">
                  <span className="ore-dot" style={{ backgroundColor: ore.color }} aria-label={`Typical colour of ${ore.name}`} title="Representative natural colour; specimens can vary" />
                  <div className="ore-name-stack">
                    <strong>{ore.name}</strong>
                    {ore.aliases ? <span className="ore-alias">{ore.aliases}</span> : null}
                  </div>
                </div>
                <div className="ore-meta-line">
                  <span className="ore-formula">{ore.formula}</span>
                  <span className="ore-meta-separator">•</span>
                  <span>{ore.significance}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
