"use client";

import React from "react";
import { Formula } from "./_core";
import { enrichmentModules, sourcePages, type EnrichmentModuleData } from "./_data";

export const EnrichmentModule = ({ module }: { module: EnrichmentModuleData }) => (
  <details className="enrichmentModule">
    <summary><span className="moduleNo">{String(module.no).padStart(2,"0")}</span><span><strong>{module.title}</strong><small>Source pages {module.sourcePages}</small></span><b>+</b></summary>
    <div className="moduleBody">
      {module.summary.map((paragraph,index)=><p key={index}>{paragraph}</p>)}
      <div className="moduleFormulaRow">{module.formulas.map(tex=><span key={tex}><Formula tex={tex}/></span>)}</div>
      <div className="examLens"><strong>JEE Advanced lens</strong><span>{module.exam}</span></div>
    </div>
  </details>
);

export const SourceArchive = () => (
  <div className="sourceArchive">
    {sourcePages.map(item=><details key={item.page} className="sourcePage"><summary><span>Page {String(item.page).padStart(3,"0")}</span><small>{item.text === "[Blank source page]" ? "Blank in uploaded PDF" : "Extracted source-text audit"}</small><b>+</b></summary><p>{item.text}</p></details>)}
  </div>
);

export { enrichmentModules };
