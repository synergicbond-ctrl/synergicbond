"use client";

import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export function InlineMath({ math }: { math: string }) {
  try {
    const html = katex.renderToString(math, { throwOnError: false, displayMode: false });
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  } catch {
    return <span>{math}</span>;
  }
}

export function BlockMath({ math }: { math: string }) {
  try {
    const html = katex.renderToString(math, { throwOnError: false, displayMode: true });
    return <div dangerouslySetInnerHTML={{ __html: html }} className="my-2 overflow-x-auto" />;
  } catch {
    return <div className="my-2">{math}</div>;
  }
}
