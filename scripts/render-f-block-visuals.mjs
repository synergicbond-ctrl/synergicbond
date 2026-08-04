import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const out = path.join(root, "public/images/f-block");
const source = path.join(out, "source");

const accurateRoot = "/Users/mritunjayshukla/Documents/Codex/2026-08-03/us/outputs/F_Block_Accurate_Dark_Visuals";
const premiumRoot = "/Users/mritunjayshukla/Documents/Codex/2026-08-03/us/outputs/F_Block_Premium_Content_Visuals";

const exact = [
  ["01_exact_f_block_placement.svg", "01-f-block-periodic-placement"],
  ["02_configuration_to_property.svg", "02-configuration-to-property"],
  ["03_4f_5f_radial_shielding.svg", "04-4f-5f-radial-shielding"],
  ["05_actinoid_oxidation_state_matrix.svg", "08-actinoid-oxidation-state-matrix"],
  ["08_uranyl_neptunyl_plutonyl.svg", "13-actinyl-ion-structures"],
  ["09_lanthanoids_vs_actinoids.svg", "14-lanthanoids-vs-actinoids"],
];

const premium = [
  ["01_f_block_master_overview.png", "00-f-block-master-overview"],
  ["02_lanthanoid_contraction.png", "05-lanthanoid-contraction"],
  ["05_f0_f7_f14_exceptions.png", "09-f0-f7-f14-exceptions"],
  ["06_lanthanoid_separation.png", "15-lanthanoid-separation"],
  ["07_exam_safe_applications.png", "19-f-block-applications"],
];

const generated = [
  ["03-aufbau-filling-and-exceptions.svg", "03-aufbau-filling-and-exceptions"],
  ["06-contraction-consequences.svg", "06-contraction-consequences"],
  ["07-lanthanoid-oxidation-state-map.svg", "07-lanthanoid-oxidation-state-map"],
  ["10-lanthanoid-colour-mechanism.svg", "10-lanthanoid-colour-mechanism"],
  ["11-lanthanoid-magnetism.svg", "11-lanthanoid-magnetism"],
  ["12-actinoid-colour-and-magnetism.svg", "12-actinoid-colour-and-magnetism"],
  ["16-important-compounds-and-reactions.svg", "16-important-compounds-and-reactions"],
  ["17-hydroxide-basicity-trend.svg", "17-hydroxide-basicity-trend"],
  ["18-complex-formation.svg", "18-complex-formation"],
  ["20-jee-exception-trap-map.svg", "20-jee-exception-trap-map"],
];

await fs.mkdir(source, { recursive: true });

for (const [filename, stem] of exact) {
  const from = path.join(accurateRoot, filename);
  const to = path.join(source, `${stem}.svg`);
  await fs.copyFile(from, to);
  await sharp(from, { density: 96 }).resize(1600, 900, { fit: "fill" }).webp({ quality: 91, effort: 3 }).toFile(path.join(out, `${stem}.webp`));
}

for (const [filename, stem] of generated) {
  const from = path.join(source, filename);
  const to = path.join(source, `${stem}.svg`);
  if (from !== to) await fs.rename(from, to);
  await sharp(to, { density: 96 }).resize(1600, 900, { fit: "fill" }).webp({ quality: 91, effort: 3 }).toFile(path.join(out, `${stem}.webp`));
}

for (const [filename, stem] of premium) {
  const from = path.join(premiumRoot, filename);
  await sharp(from).resize(1600, 900, { fit: "cover", position: "centre" }).webp({ quality: 91, effort: 3 }).toFile(path.join(out, `${stem}.webp`));
}

console.log(`Rendered ${exact.length + generated.length + premium.length} F-block visuals to ${out}`);
