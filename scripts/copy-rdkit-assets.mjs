import { access, copyFile, mkdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const rdkitDistDirectory = path.join(
  projectRoot,
  "node_modules",
  "@rdkit",
  "rdkit",
  "dist",
);
const publicRdkitDirectory = path.join(projectRoot, "public", "rdkit");

const assets = ["RDKit_minimal.js", "RDKit_minimal.wasm"];

async function assertReadable(filePath) {
  try {
    await access(filePath, constants.R_OK);
  } catch {
    throw new Error(
      [
        "RDKit distribution asset was not found.",
        `Expected: ${filePath}`,
        "Install the pinned @rdkit/rdkit dependency before running this script.",
      ].join("\n"),
    );
  }
}

async function copyRdkitAssets() {
  await mkdir(publicRdkitDirectory, { recursive: true });

  for (const asset of assets) {
    const source = path.join(rdkitDistDirectory, asset);
    const destination = path.join(publicRdkitDirectory, asset);

    await assertReadable(source);
    await copyFile(source, destination);
    console.log(`✓ Copied ${asset} to public/rdkit`);
  }
}

copyRdkitAssets().catch((error) => {
  console.error("Failed to prepare the self-hosted RDKit assets.");
  console.error(error);
  process.exitCode = 1;
});
