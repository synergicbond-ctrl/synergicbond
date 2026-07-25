import type { MoleculeSpec, MoleculeTheme } from "./molecule-types";
import { getRDKit, type RDKitMolecule } from "./rdkit.client";

const BASE_DRAW_OPTIONS = Object.freeze({
  clearBackground: false,
  prepareMolsBeforeDrawing: true,
  centreMoleculesBeforeDrawing: true,
  bondLineWidth: 1.0,
  scaleBondWidth: false,
  multipleBondOffset: 0.18,
  additionalAtomLabelPadding: 0.08,
  padding: 0.06,
  fixedBondLength: 34,
  minFontSize: 12,
  maxFontSize: 21,
  explicitMethyl: false,
  addAtomIndices: false,
  addBondIndices: false,
  addStereoAnnotation: false,
});

const MAX_CACHE_ENTRIES = 320;
const svgCache = new Map<string, string>();

function createCacheKey(spec: MoleculeSpec): string {
  return JSON.stringify({
    structure: spec.structure,
    explicitMethyl: spec.explicitMethyl ?? false,
    showStereoAnnotation: spec.showStereoAnnotation ?? false,
    rotate: spec.rotate ?? 0,
    theme: spec.theme ?? "dark",
  });
}

function cacheSvg(key: string, svg: string): void {
  if (svgCache.has(key)) {
    svgCache.delete(key);
  }

  svgCache.set(key, svg);

  if (svgCache.size > MAX_CACHE_ENTRIES) {
    const oldestKey = svgCache.keys().next().value as string | undefined;
    if (oldestKey) svgCache.delete(oldestKey);
  }
}

function sanitizeSvg(svg: SVGSVGElement): void {
  svg
    .querySelectorAll("script, foreignObject, iframe, object, embed")
    .forEach((node) => node.remove());

  svg.querySelectorAll<SVGElement>("*").forEach((element) => {
    for (const attribute of Array.from(element.attributes)) {
      const name = attribute.name.toLowerCase();

      if (name.startsWith("on")) {
        element.removeAttribute(attribute.name);
        continue;
      }

      if (
        (name === "href" || name === "xlink:href") &&
        /^\s*javascript:/i.test(attribute.value)
      ) {
        element.removeAttribute(attribute.name);
      }
    }
  });
}

function applyDarkThemeColours(svg: SVGSVGElement): void {
  const neutralDarkColours = new Set([
    "#000000",
    "#000",
    "#191919",
    "rgb(0,0,0)",
    "rgb(0, 0, 0)",
  ]);
  const foreground = "#E9EEF7";

  svg.querySelectorAll<SVGElement>("*").forEach((element) => {
    for (const property of ["stroke", "fill"] as const) {
      const value = element.getAttribute(property);
      if (value && neutralDarkColours.has(value.toLowerCase())) {
        element.setAttribute(property, foreground);
      }
    }

    const style = element.getAttribute("style");
    if (style) {
      element.setAttribute(
        "style",
        style
          .replace(/#000000/gi, foreground)
          .replace(/#191919/gi, foreground)
          .replace(/rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi, foreground),
      );
    }
  });
}

function normalizeSvg(rawSvg: string, theme: MoleculeTheme): string {
  const documentNode = new DOMParser().parseFromString(rawSvg, "image/svg+xml");

  if (documentNode.querySelector("parsererror")) {
    throw new Error("RDKit produced invalid SVG markup.");
  }

  const root = documentNode.documentElement;
  if (root.tagName.toLowerCase() !== "svg") {
    throw new Error("RDKit output did not contain an SVG root.");
  }

  const svg = root as unknown as SVGSVGElement;
  sanitizeSvg(svg);

  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  if (theme === "dark") {
    applyDarkThemeColours(svg);
  }

  return new XMLSerializer().serializeToString(svg);
}

/**
 * Renders one molecular specification into a normalized SVG.
 *
 * RDKit objects wrap allocations in the C++/WASM heap. Every object allocated
 * here is explicitly destroyed in the finally block; JavaScript garbage
 * collection is not sufficient.
 */
export async function renderMoleculeSvg(spec: MoleculeSpec): Promise<string> {
  const cacheKey = createCacheKey(spec);
  const cachedSvg = svgCache.get(cacheKey);

  if (cachedSvg) {
    svgCache.delete(cacheKey);
    svgCache.set(cacheKey, cachedSvg);
    return cachedSvg;
  }

  const rdkit = await getRDKit();
  let sourceMol: RDKitMolecule | null = null;
  let drawingMol: RDKitMolecule | null = null;

  try {
    sourceMol = rdkit.get_mol(spec.structure.value);
    if (!sourceMol) {
      throw new Error(`RDKit could not parse molecule "${spec.id}".`);
    }

    if (spec.structure.kind === "smiles") {
      const molBlockWith2DCoordinates = sourceMol.get_new_coords(true);
      if (!molBlockWith2DCoordinates) {
        throw new Error(`RDKit could not generate 2D coordinates for "${spec.id}".`);
      }

      drawingMol = rdkit.get_mol(molBlockWith2DCoordinates);
      if (!drawingMol) {
        throw new Error(`RDKit could not create a drawable molecule for "${spec.id}".`);
      }
    } else {
      drawingMol = sourceMol;
    }

    const rawSvg = drawingMol.get_svg_with_highlights(
      JSON.stringify({
        ...BASE_DRAW_OPTIONS,
        explicitMethyl: spec.explicitMethyl ?? BASE_DRAW_OPTIONS.explicitMethyl,
        addStereoAnnotation:
          spec.showStereoAnnotation ?? BASE_DRAW_OPTIONS.addStereoAnnotation,
        rotate: spec.rotate ?? 0,
      }),
    );

    if (!rawSvg.trim()) {
      throw new Error(`RDKit returned empty SVG for "${spec.id}".`);
    }

    const normalizedSvg = normalizeSvg(rawSvg, spec.theme ?? "dark");
    cacheSvg(cacheKey, normalizedSvg);
    return normalizedSvg;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to render molecule "${spec.id}": ${message}`, {
      cause: error,
    });
  } finally {
    if (drawingMol && drawingMol !== sourceMol) {
      drawingMol.delete();
    }

    if (sourceMol) {
      sourceMol.delete();
    }
  }
}

export function clearMoleculeSvgCache(): void {
  svgCache.clear();
}

export function getMoleculeSvgCacheSize(): number {
  return svgCache.size;
}
