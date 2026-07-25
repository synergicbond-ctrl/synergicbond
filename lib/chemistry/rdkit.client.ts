export interface RDKitMolecule {
  delete(): void;
  get_new_coords(useCoordGen?: boolean): string;
  get_svg_with_highlights(details: string): string;
}

export interface RDKitModule {
  get_mol(source: string, details?: string): RDKitMolecule | null;
  prefer_coordgen(value: boolean): void;
  version(): string;
}

interface RDKitLoaderOptions {
  locateFile?: (requestedFile: string) => string;
}

type RDKitInitializer = (options?: RDKitLoaderOptions) => Promise<RDKitModule>;

declare global {
  interface Window {
    initRDKitModule?: RDKitInitializer;
  }
}

const SCRIPT_ID = "synergicbond-rdkit-minimal";
const SCRIPT_SOURCE = "/rdkit/RDKit_minimal.js";
const WASM_SOURCE = "/rdkit/RDKit_minimal.wasm";
const LOAD_TIMEOUT_MS = 30_000;

let scriptPromise: Promise<void> | null = null;
let rdkitPromise: Promise<RDKitModule> | null = null;

function loadRdkitScript(): Promise<void> {
  if (window.initRDKitModule) {
    return Promise.resolve();
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");
    let settled = false;

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };

    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      scriptPromise = null;
      reject(error);
    };

    const handleLoad = () => {
      script.dataset.loaded = "true";

      if (!window.initRDKitModule) {
        fail(new Error("RDKit script loaded without exposing initRDKitModule."));
        return;
      }

      if (settled) return;
      settled = true;
      cleanup();
      resolve();
    };

    const handleError = () => {
      fail(new Error(`Unable to load ${SCRIPT_SOURCE}.`));
    };

    const timeoutId = window.setTimeout(() => {
      fail(new Error(`Timed out while loading ${SCRIPT_SOURCE}.`));
    }, LOAD_TIMEOUT_MS);

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (existing) {
      if (existing.dataset.loaded === "true") {
        queueMicrotask(handleLoad);
      }
      return;
    }

    script.id = SCRIPT_ID;
    script.src = SCRIPT_SOURCE;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  });

  return scriptPromise;
}

/**
 * Returns the one RDKit WASM runtime shared by the entire browser session.
 */
export function getRDKit(): Promise<RDKitModule> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("RDKit can only be initialized in a browser."));
  }

  if (!rdkitPromise) {
    rdkitPromise = loadRdkitScript()
      .then(() => {
        const initialize = window.initRDKitModule;
        if (!initialize) {
          throw new Error("RDKit initializer is unavailable after script loading.");
        }

        return initialize({
          locateFile: (requestedFile) =>
            requestedFile.endsWith(".wasm") ? WASM_SOURCE : `/rdkit/${requestedFile}`,
        });
      })
      .then((rdkit) => {
        rdkit.prefer_coordgen(true);
        return rdkit;
      })
      .catch((error: unknown) => {
        rdkitPromise = null;
        throw error;
      });
  }

  return rdkitPromise;
}
