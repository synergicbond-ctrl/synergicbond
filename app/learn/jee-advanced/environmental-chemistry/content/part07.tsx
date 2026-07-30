"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part07Data: PartData = {
  part: 7,
  title: "Particulate Pollution and Control Devices",
  subtitle: "Particle origin, morphology, size-dependent deposition, health effects, atmospheric behaviour and engineering capture.",
  goals: [
    "Distinguish dust, smoke, soot, fume, mist, fly ash and aerosol.",
    "Separate viable from non-viable particulates.",
    "Relate size, settling, lung penetration and atmospheric lifetime.",
    "Explain visibility and surface-area effects.",
    "Select a cyclone, ESP, baghouse or scrubber for a stated emission.",
    "Recognise pollution transfer and disposal requirements.",
  ],
  sourceNote: "Source coverage: NCERT pp. 411-412; Essential Sheet p. 5; Environmental Chemistry Theory p. 185 and p. 297. Engineering-control detail and the dark device cutaway are advanced additions.",
  heroImage: {
    src: "/environmental-chemistry/particulate-control.webp",
    alt: "Dark technical cutaway of cyclone, electrostatic precipitator, fabric filter and wet scrubber",
    caption: "Particle-control devices exploit different properties: inertia, electrical charge, filtration and gas-liquid contact. Device choice depends on size, loading, resistivity, moisture and gas conditions.",
  },
  sections: [
    {
      eyebrow: "Definition",
      title: "An aerosol is a system, not only a particle",
      paragraphs: [
        "Particulate pollution consists of solid particles or liquid droplets dispersed in air. The complete suspension is an aerosol; the dispersed phase may be dust, smoke, fume, soot, mist, biological material or secondary inorganic/organic particles. Particles may be emitted directly or form by gas-to-particle conversion.",
        "Primary particles include mechanically generated dust, soot from incomplete combustion and fly ash carried from a furnace. Secondary particles form when gases such as SO₂, NOₓ, NH₃ and VOC oxidation products generate low-volatility sulphate, nitrate, ammonium and organic material.",
        "The supplied text divides particles into viable and non-viable. Viable particulates are living organisms or biological units such as bacteria, fungal spores, moulds and algae. Non-viable particles are mineral, carbonaceous, metallic or liquid chemical matter.",
      ],
      table: {
        headers: ["Term", "Formation mechanism", "Examples"],
        rows: [
          ["Dust", "Mechanical crushing, grinding, abrasion, handling or wind erosion", "Cement, silica, coal, soil and sawdust"],
          ["Smoke", "Combustion of organic matter; mixture of solids and droplets", "Cigarette, biomass, oil and garbage smoke"],
          ["Soot", "Incomplete combustion; carbon-rich agglomerates", "Diesel and flame soot"],
          ["Fume", "Condensation of vapour, often followed by oxidation", "Metal and metal-oxide fumes from welding or smelting"],
          ["Mist", "Atomised liquid or condensation of vapour", "H₂SO₄ mist, spray droplets, pesticide mist"],
          ["Fly ash", "Fine mineral residue entrained in flue gas", "Coal-fired thermal power plant ash"],
          ["Bioaerosol", "Release and transport of biological material", "Pollen, bacteria, spores and fragments"],
        ],
      },
    },
    {
      eyebrow: "Size",
      title: "Aerodynamic diameter controls where particles travel",
      paragraphs: [
        "Particle behaviour depends on aerodynamic diameter, which combines physical size, density and shape into the diameter of a unit-density sphere with similar settling behaviour. Coarse particles settle or impact surfaces relatively quickly. Fine particles remain suspended longer, travel farther and enter smaller airways.",
        "PM₁₀ refers operationally to particles with aerodynamic diameter roughly 10 μm or less that pass a specified inlet. PM₂.₅ is the fine fraction roughly 2.5 μm or less. Ultrafine particles are commonly below 0.1 μm. These are regulatory size fractions, not sharp biological walls.",
        "The older NCERT wording about particles larger than 5 μm lodging in the nose and particles around 10 μm entering lungs is internally awkward. For exam fidelity, remember the source wording when quoted, but use the correct trend: decreasing aerodynamic diameter generally permits deeper penetration.",
      ],
      table: {
        headers: ["Approximate fraction", "Atmospheric behaviour", "Respiratory deposition tendency"],
        rows: [
          ["Coarse, >2.5 μm", "Shorter lifetime; settling and impaction important", "Nose, throat and larger conducting airways"],
          ["Fine, ≤2.5 μm", "Longer suspension and regional transport", "Can reach bronchioles and alveolar region"],
          ["Ultrafine, <0.1 μm", "Diffusion and coagulation dominate", "High number concentration; can deposit efficiently by diffusion"],
        ],
      },
      boxes: [
        {
          title: "Mass versus number",
          body: "A small number of coarse particles can dominate mass, while enormous numbers of ultrafine particles contribute little mass. Health interpretation may therefore require size distribution, number and composition, not only total mass.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Physical chemistry",
      title: "Settling, diffusion, coagulation and surface area",
      paragraphs: [
        "For a small spherical particle in the Stokes regime, terminal settling velocity increases with the square of particle diameter and with the difference between particle and air density. Large dense particles therefore settle much faster than small particles. At very small size, Brownian diffusion becomes important.",
        "Particles collide and coagulate, changing number and size without conserving particle count. Hygroscopic particles take up water as relative humidity rises and become larger, increasing light scattering. Low-volatility vapours condense on existing particles or nucleate new particles.",
        "For equal mass and density, subdividing material into smaller particles increases total surface area. A high surface-to-volume ratio enhances adsorption of metals and organic toxins and provides more area for heterogeneous reactions.",
      ],
      equations: [
        "Stokes settling: vₜ = [(ρₚ − ρₐ)gd²] / (18η)",
        "Surface area / volume for a sphere = 6/d",
        "Same mass, smaller d → larger total surface area and slower gravitational settling",
      ],
    },
    {
      eyebrow: "Composition",
      title: "Particle chemistry determines toxicity",
      bullets: [
        "Silica-rich dust can damage lungs through persistent mineral-particle inflammation.",
        "Soot and black carbon carry polycyclic aromatic hydrocarbons and absorb solar radiation.",
        "Fly ash can contain silica, aluminosilicates and trace metals; its exact composition depends on fuel and combustion.",
        "Acid sulphate and nitrate particles irritate respiratory tissue and alter aerosol water content.",
        "Metal fumes may contain highly reactive nanoscale oxides.",
        "Biological particles can cause allergy, infection or plant disease.",
      ],
      paragraphs: [
        "Two aerosols with the same PM₂.₅ mass can therefore have different hazards. Solubility, acidity, redox activity, particle shape, biological content and adsorbed chemicals modify response. Fine and ultrafine particles also penetrate more deeply and can generate oxidative stress.",
      ],
    },
    {
      eyebrow: "Atmospheric effects",
      title: "Visibility, clouds and radiation",
      paragraphs: [
        "Particles scatter and absorb light. Sulphate, nitrate and many organic particles scatter strongly and create whitish haze. Black carbon absorbs visible radiation and warms the air while darkening snow or ice after deposition. Dust can scatter and absorb depending on mineral composition.",
        "Some particles act as cloud-condensation nuclei or ice-nucleating particles. Changing their number and chemistry alters cloud droplet size, brightness, lifetime and precipitation. These effects are complex and should not be reduced to the statement that all particles cool or all warm.",
        "Visibility loss is strongest when particle size and refractive index efficiently scatter visible wavelengths; humidity amplifies haze by increasing particle water content.",
      ],
      boxes: [
        {
          title: "Particulate pollution is not one climate forcing",
          body: "Reflective sulphate tends to cool, black carbon tends to warm, and cloud interactions vary. Composition and location determine the sign and magnitude.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Health and materials",
      title: "From airway deposition to systemic effects",
      table: {
        headers: ["Pathway", "Mechanism", "Consequence"],
        rows: [
          ["Upper airway capture", "Impaction and interception of larger particles", "Irritation, mucus clearance and local inflammation"],
          ["Deep-lung deposition", "Sedimentation/diffusion of fine and ultrafine particles", "Alveolar inflammation and impaired gas exchange"],
          ["Chemical delivery", "Adsorbed metals and organics desorb or react", "Oxidative stress and toxic effects"],
          ["Cardiovascular pathway", "Inflammatory signalling and very small particle interactions", "Altered vascular and cardiac risk"],
          ["Material soiling", "Deposition on buildings, fabrics and leaves", "Discoloration, abrasion and blocked stomatal surfaces"],
        ],
      },
      paragraphs: [
        "Lead was formerly an important vehicle-derived particulate pollutant because tetraethyllead was added to petrol. Unleaded petrol greatly reduced that source. Lead interferes with haem synthesis and neurological development; it does not become harmless merely because it is attached to a particle.",
      ],
    },
    {
      eyebrow: "Control",
      title: "Mechanical and electrical collectors",
      table: {
        headers: ["Device", "Separation principle", "Best suited for", "Important limitation"],
        rows: [
          ["Settling chamber", "Reduce gas velocity so gravity removes large particles", "Very coarse high-loading dust; pre-cleaning", "Large area and poor fine-particle efficiency"],
          ["Cyclone", "Centrifugal inertia drives particles to wall and hopper", "Coarse/medium robust dust control", "Efficiency falls for very fine particles"],
          ["Electrostatic precipitator", "Charge particles and migrate them to oppositely charged plates", "High-volume flue gas and fine fly ash", "Performance depends on resistivity and electrical conditions"],
          ["Fabric filter / baghouse", "Particles are captured by fibres and the dust cake", "Very high fine-particle efficiency", "Temperature, moisture, pressure drop and fabric compatibility"],
        ],
      },
      paragraphs: [
        "A cyclone has no moving internal filter: gas enters tangentially, swirls, and particles with greater inertia strike the wall and fall. An electrostatic precipitator ionises the gas, charges particles and collects them on plates; rapping dislodges the dust into hoppers. A baghouse often becomes more efficient after a porous dust cake forms, but excessive cake increases pressure drop.",
      ],
    },
    {
      eyebrow: "Combined control",
      title: "Wet scrubbers and complete waste handling",
      paragraphs: [
        "A wet scrubber contacts gas with liquid droplets. Particles collide with droplets and soluble/reactive gases dissolve. Venturi scrubbers use high relative velocity and turbulence to capture fine particles, while packed absorbers are used more for soluble gases. The liquid phase may contain acids, metals and suspended solids.",
        "Control trains combine devices. A settling chamber or cyclone removes coarse high loading, an ESP or baghouse captures fine ash, and a scrubber removes soluble gases. Installing every device is not automatically optimal; pressure drop, temperature, corrosion, wastewater and energy must be evaluated.",
        "Collected dust must be enclosed, transported and reused or disposed safely. ESP capture does not destroy heavy metals in fly ash. Scrubbing transfers contaminants into water. A genuine control system includes residue management.",
      ],
      flow: [
        "Characterise particle size, loading and chemistry",
        "Select coarse pre-cleaning if needed",
        "Capture fine particles electrically or by filtration",
        "Absorb soluble gases if required",
        "Treat dust, sludge and wastewater",
        "Monitor outlet concentration and pressure drop",
      ],
    },
  ],
  examples: [
    {
      title: "Compare settling velocities",
      problem: "Under the same Stokes conditions, one spherical particle has twice the diameter of another. What is the settling-velocity ratio?",
      steps: [
        "Stokes law gives vₜ ∝ d² when density and gas properties are unchanged.",
        "Doubling diameter multiplies velocity by 2².",
      ],
      answer: "The larger particle settles four times faster.",
    },
    {
      title: "Choose fly-ash control",
      problem: "A thermal power plant has high gas flow and fine fly ash. Why is an ESP preferable to a cyclone alone?",
      steps: [
        "Cyclones rely on inertia and are best for coarser particles.",
        "An ESP charges particles and can collect fine ash at high gas flow.",
        "A cyclone may still serve as a pre-cleaner.",
      ],
      answer: "Use an ESP for fine-particle efficiency; use a cyclone only as coarse pre-cleaning if useful.",
    },
    {
      title: "Identify pollution transfer",
      problem: "A wet scrubber lowers stack particles and SO₂ but its water contains sulphite and metals. Is treatment complete?",
      steps: [
        "Air pollutants have moved to the liquid phase.",
        "Sulphite can be oxidised or treated, and metals/sludge must be separated.",
        "Untreated discharge would create water pollution.",
      ],
      answer: "No. The scrubber wastewater and sludge require treatment and safe reuse/disposal.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Classification",
      question: "Which is a liquid aerosol?",
      options: ["Dust", "Mist", "Fly ash", "Metal fume"],
      answer: "B",
      solution: "Mist consists of liquid droplets suspended in air. Dust, fly ash and most fumes are solid particles.",
    },
    {
      number: 2,
      tag: "Size",
      question: "For equal-density particles in the Stokes regime, decreasing diameter generally:",
      options: ["Increases settling speed", "Decreases settling speed", "Eliminates diffusion", "Removes surface area"],
      answer: "B",
      solution: "Settling velocity varies as d², so smaller particles settle more slowly and remain suspended longer.",
    },
    {
      number: 3,
      tag: "Device",
      question: "Which device uses charged plates?",
      options: ["Cyclone", "Settling chamber", "Electrostatic precipitator", "Compost pit"],
      answer: "C",
      solution: "An ESP electrically charges particles and attracts them to collection electrodes.",
    },
    {
      number: 4,
      tag: "Multiple correct",
      question: "Which are viable particulates?",
      options: ["Bacteria", "Fungal spores", "Fly ash", "Algae dispersed in air"],
      answer: "A, B and D",
      solution: "Bacteria, fungal spores and algae are biological/viable. Fly ash is non-viable mineral residue.",
    },
    {
      number: 5,
      tag: "Control",
      question: "A cyclone is most effective because particles:",
      options: ["Are dissolved in water", "Are driven to the wall by inertia in swirling gas", "Undergo radioactive decay", "Are converted to ozone"],
      answer: "B",
      solution: "Centrifugal motion and inertia separate coarse particles from the rotating gas stream.",
    },
    {
      number: 6,
      tag: "System boundary",
      question: "Captured fly ash containing metals should be considered:",
      options: ["Destroyed", "A managed solid residue", "Pure oxygen", "Automatically biodegradable"],
      answer: "B",
      solution: "Collection changes location, not elemental composition. Reuse or disposal must control leaching and exposure.",
    },
  ],
  recap: [
    "Aerosol includes suspended solid particles or liquid droplets and the surrounding gas.",
    "Dust is mechanical; fume condenses from vapour; mist is liquid; smoke forms in combustion.",
    "Smaller particles generally settle more slowly and penetrate deeper.",
    "Equal mass divided into smaller particles has greater total surface area.",
    "Particle toxicity depends on size, composition, shape and solubility.",
    "Cyclone uses inertia; ESP uses charge; baghouse filters; scrubber uses liquid contact.",
    "A device train may combine coarse and fine control.",
    "Collected dust, sludge and wastewater remain environmental materials requiring management.",
  ],
};

export default function Part07() {
  return <EnvironmentalChemistryPart data={part07Data} />;
}
