"use client";

import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export function InlineMath({ math }: { math: string }) {
  let html: string | null = null;
  try {
    html = katex.renderToString(math, { throwOnError: false, displayMode: false });
  } catch {
    html = null;
  }
  if (html !== null) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <span>{math}</span>;
}

export function BlockMath({ math }: { math: string }) {
  let html: string | null = null;
  try {
    html = katex.renderToString(math, { throwOnError: false, displayMode: true });
  } catch {
    html = null;
  }
  if (html !== null) {
    return <div dangerouslySetInnerHTML={{ __html: html }} className="my-2 overflow-x-auto" />;
  }
  return <div className="my-2">{math}</div>;
}
