"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TOTAL_PARTS = 18;

function getPart(pathname: string): number | null {
  const match = pathname.match(/\/part(\d{2})\/?$/);
  if (!match) return null;

  const value = Number(match[1]);
  return value >= 1 && value <= TOTAL_PARTS ? value : null;
}

function partHref(part: number): string {
  return `/learn/chemical-equilibrium/part${String(part).padStart(2, "0")}`;
}

export function ChemicalEquilibriumHeader() {
  const pathname = usePathname();
  const part = getPart(pathname);

  const [topic, setTopic] = useState(
    part ? `Part ${String(part).padStart(2, "0")}` : "Complete Chapter",
  );

  useEffect(() => {
    const detectTopic = () => {
      const headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          "#chemical-equilibrium-content h1, " +
            "#chemical-equilibrium-content h2, " +
            "#chemical-equilibrium-content h3",
        ),
      );

      const title = headings
        .map((heading) => heading.textContent?.trim() ?? "")
        .find(
          (text) =>
            text.length > 2 &&
            !/^chemical equilibrium$/i.test(text) &&
            !/^part\s*\d+/i.test(text),
        );

      setTopic(
        title ||
          (part
            ? `Part ${String(part).padStart(2, "0")}`
            : "Complete Chapter"),
      );
    };

    detectTopic();
    const timer = window.setTimeout(detectTopic, 250);

    return () => window.clearTimeout(timer);
  }, [pathname, part]);

  return (
    <header className="ce-header">
      <div className="ce-header-inner">
        <p className="ce-breadcrumb">
          JEE Advanced · Chemistry · Physical Chemistry
        </p>

        <h1>Chemical Equilibrium</h1>

        <div className="ce-current-topic">
          <span>Current topic</span>
          <strong>{topic}</strong>
        </div>
      </div>
    </header>
  );
}

export function ChemicalEquilibriumFooter() {
  const pathname = usePathname();
  const router = useRouter();
  const part = getPart(pathname);

  return (
    <footer className="ce-footer">
      <p className="ce-footer-label">
        Chemical Equilibrium navigation
      </p>

      <nav className="ce-footer-nav" aria-label="Chapter navigation">
        <button
          type="button"
          className="ce-button ce-button-secondary"
          onClick={() => router.back()}
        >
          ← Back
        </button>

        <Link
          href="/learn/chemical-equilibrium"
          className="ce-button ce-button-secondary"
        >
          ⌂ Chapter contents
        </Link>

        {part && part > 1 ? (
          <Link
            href={partHref(part - 1)}
            className="ce-button ce-button-secondary"
          >
            ‹ Previous topic
          </Link>
        ) : null}

        {part && part < TOTAL_PARTS ? (
          <Link
            href={partHref(part + 1)}
            className="ce-button ce-button-primary"
          >
            Next topic ›
          </Link>
        ) : null}

        <Link
          href="/programs/jee-advanced/learn"
          className="ce-button ce-button-return"
        >
          Return to JEE Advanced ↗
        </Link>
      </nav>
    </footer>
  );
}
