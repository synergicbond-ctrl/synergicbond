"use client";

import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";

type AdsorptionContentProps = {
  html: string;
};

export default function AdsorptionContent({
  html,
}: AdsorptionContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = contentRef.current;

    if (!root) {
      return;
    }

    renderMathInElement(root, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
      strict: false,
      trust: false,
      ignoredTags: [
        "script",
        "noscript",
        "style",
        "textarea",
        "pre",
        "code",
      ],
    });
  }, [html]);

  return (
    <article
      ref={contentRef}
      className="adsorption-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
