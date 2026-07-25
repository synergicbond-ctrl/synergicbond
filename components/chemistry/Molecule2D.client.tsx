"use client";

import { useEffect, useRef, useState } from "react";
import type { MoleculeSpec } from "@/lib/chemistry/molecule-types";
import { renderMoleculeSvg } from "@/lib/chemistry/render-molecule.client";
import styles from "./Molecule2D.module.css";

export interface Molecule2DClientProps {
  readonly molecule: MoleculeSpec;
  readonly className?: string;
  readonly priority?: boolean;
}

type RenderResult =
  | Readonly<{
      key: string;
      status: "ready";
      svg: string;
      error: null;
    }>
  | Readonly<{
      key: string;
      status: "error";
      svg: null;
      error: string;
    }>;

function fitSvgBoundingBox(container: HTMLDivElement): void {
  const svg = container.querySelector<SVGSVGElement>("svg");
  if (!svg) return;

  try {
    const box = svg.getBBox();
    const values = [box.x, box.y, box.width, box.height];

    if (values.some((value) => !Number.isFinite(value))) return;
    if (box.width <= 0 || box.height <= 0) return;

    const longestDimension = Math.max(box.width, box.height);
    const padding = Math.max(longestDimension * 0.055, 2);

    svg.setAttribute(
      "viewBox",
      [
        box.x - padding,
        box.y - padding,
        box.width + padding * 2,
        box.height + padding * 2,
      ].join(" "),
    );
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Molecule2D] Bounding-box fitting failed.", error);
    }
  }
}

function createMoleculeKey(molecule: MoleculeSpec): string {
  return JSON.stringify({
    id: molecule.id,
    structure: molecule.structure,
    explicitMethyl: molecule.explicitMethyl,
    showStereoAnnotation: molecule.showStereoAnnotation,
    rotate: molecule.rotate,
    theme: molecule.theme,
  });
}

export function Molecule2DClient({
  molecule,
  className = "",
  priority = false,
}: Molecule2DClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [renderResult, setRenderResult] = useState<RenderResult | null>(null);

  const moleculeKey = createMoleculeKey(molecule);
  const shouldRender = priority || isNearViewport;

  useEffect(() => {
    if (priority) return;

    const element = containerRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      let cancelled = false;

      queueMicrotask(() => {
        if (!cancelled) setIsNearViewport(true);
      });

      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "500px 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  useEffect(() => {
    if (!shouldRender) return;

    let cancelled = false;

    void renderMoleculeSvg(molecule)
      .then((svg) => {
        if (cancelled) return;

        setRenderResult({
          key: moleculeKey,
          status: "ready",
          svg,
          error: null,
        });
      })
      .catch((error: unknown) => {
        if (cancelled) return;

        const message = error instanceof Error ? error.message : String(error);
        console.error(`[Molecule2D] Failed to render "${molecule.id}".`, error);

        setRenderResult({
          key: moleculeKey,
          status: "error",
          svg: null,
          error: message,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [molecule, moleculeKey, shouldRender]);

  const currentResult = renderResult?.key === moleculeKey ? renderResult : null;
  const readySvg = currentResult?.status === "ready" ? currentResult.svg : null;
  const currentError =
    currentResult?.status === "error" ? currentResult.error : null;

  useEffect(() => {
    if (!readySvg) return;

    const container = containerRef.current;
    if (!container) return;

    let secondFrame: number | null = null;

    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        fitSvgBoundingBox(container);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);

      if (secondFrame !== null) {
        cancelAnimationFrame(secondFrame);
      }
    };
  }, [readySvg]);

  const figureClassName = [styles.figure, className].filter(Boolean).join(" ");
  const isLoading = readySvg === null && currentError === null;

  return (
    <figure className={figureClassName} role="img" aria-label={molecule.alt}>
      <div
        ref={containerRef}
        className={styles.viewport}
        data-molecule-id={molecule.id}
      >
        {isLoading && <div className={styles.skeleton} aria-hidden="true" />}

        {currentError && (
          <div className={styles.error} role="status" title={currentError}>
            Structure unavailable
          </div>
        )}

        {readySvg && (
          <div
            className={styles.svg}
            dangerouslySetInnerHTML={{ __html: readySvg }}
          />
        )}
      </div>

      {molecule.label && (
        <figcaption className={styles.caption}>{molecule.label}</figcaption>
      )}
    </figure>
  );
}
