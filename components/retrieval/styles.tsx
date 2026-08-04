// components/retrieval/styles.tsx — scoped styles for the retrieval library.
// Same server-safe pattern as components/notes/canonical.tsx (a <style> block
// with prefixed class names, tokens from NT). Rendered once per page by
// RetrievalStyles; canonical.tsx is intentionally NOT modified.

import { NT } from "@/components/notes/canonical";

const RETRIEVAL_CSS = `
.sbrCard {
  min-width: 0;
  border: 1px solid ${NT.border}; border-left: 3px solid ${NT.cyan};
  border-radius: 13px; background: ${NT.surface};
  padding: 15px 18px 16px; margin: 18px 0;
}
.sbrTag {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: ${NT.mono}; font-size: 10px; font-weight: 900;
  letter-spacing: .15em; text-transform: uppercase; color: ${NT.cyan};
  margin-bottom: 9px;
}
.sbrPrompt { color: ${NT.text}; font-family: ${NT.sans}; font-size: 14.5px; line-height: 1.6; margin: 0 0 12px; overflow-wrap: anywhere; }
.sbrOptions { display: flex; flex-direction: column; gap: 8px; border: 0; padding: 0; margin: 0; }
.sbrOptions legend { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
.sbrOpt {
  display: grid; grid-template-columns: 26px minmax(0,1fr); gap: 10px; align-items: start;
  width: 100%; text-align: left; background: ${NT.bg};
  border: 1px solid ${NT.borderSoft}; border-radius: 10px;
  padding: 10px 13px; font-family: ${NT.sans}; font-size: 13.5px;
  color: ${NT.textDim}; cursor: pointer;
  transition: border-color .15s ease, background .15s ease; min-height: 44px;
}
.sbrOpt:hover { border-color: ${NT.cyan}; }
.sbrOpt > span:last-child { overflow-wrap: anywhere; min-width: 0; }
.sbrOpt:focus-visible { outline: 2px solid ${NT.cyan}; outline-offset: 2px; }
.sbrOpt[disabled] { cursor: default; }
.sbrOptKey {
  font-family: ${NT.mono}; font-size: 11px; font-weight: 900; color: ${NT.textFaint};
  border: 1px solid ${NT.border}; border-radius: 6px; width: 22px; height: 22px;
  display: flex; align-items: center; justify-content: center;
}
.sbrOptRight { border-color: #5FBF8F; background: rgba(95,191,143,.12); color: ${NT.text}; }
.sbrOptRight .sbrOptKey { color: #5FBF8F; border-color: #5FBF8F; }
.sbrOptWrong { border-color: #E06E6E; background: rgba(224,110,110,.11); }
.sbrOptWrong .sbrOptKey { color: #E06E6E; border-color: #E06E6E; }
.sbrExplain {
  border-top: 1px dashed ${NT.border}; margin-top: 12px; padding-top: 11px;
  color: ${NT.textDim}; font-family: ${NT.sans}; font-size: 12.5px; line-height: 1.6;
}
.sbrBtn {
  font-family: ${NT.sans}; font-size: 12.5px; font-weight: 700; color: ${NT.cyan};
  background: rgba(95,212,234,.1); border: 1px solid transparent; border-radius: 8px;
  padding: 9px 14px; cursor: pointer; min-height: 44px;
  transition: border-color .15s ease;
}
.sbrBtn:hover { border-color: ${NT.cyan}; }
.sbrBtn:focus-visible { outline: 2px solid ${NT.cyan}; outline-offset: 2px; }
.sbrBtnRow { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.sbrConf { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 10px 0 2px; }
.sbrConfLabel { font-family: ${NT.mono}; font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: ${NT.textFaint}; }
.sbrConfBtn {
  font-family: ${NT.sans}; font-size: 12px; font-weight: 700; color: ${NT.textDim};
  background: ${NT.bg}; border: 1px solid ${NT.border}; border-radius: 999px;
  padding: 7px 14px; cursor: pointer; min-height: 36px;
  transition: border-color .15s ease, color .15s ease;
}
.sbrConfBtn:hover { border-color: ${NT.cyan}; color: ${NT.text}; }
.sbrConfBtn:focus-visible { outline: 2px solid ${NT.cyan}; outline-offset: 2px; }
.sbrConfBtn[aria-pressed="true"] { border-color: ${NT.gold}; color: ${NT.gold}; background: rgba(232,184,75,.12); }
.sbrReveal { margin-top: 10px; }
.sbrModelAnswer {
  margin-top: 10px; padding: 11px 14px; border-radius: 9px;
  background: rgba(95,191,143,.1); border: 1px solid rgba(95,191,143,.4);
  color: ${NT.text}; font-family: ${NT.sans}; font-size: 13.5px; line-height: 1.6;
}
.sbrModelAnswer b { display: block; font-family: ${NT.mono}; font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase; color: #5FBF8F; margin-bottom: 4px; }
.sbrReflect { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
.sbrReflect textarea {
  background: ${NT.bg}; color: ${NT.text}; border: 1px solid ${NT.border};
  border-radius: 9px; padding: 10px 12px; font-family: ${NT.sans}; font-size: 13px;
  min-height: 64px; resize: vertical;
}
.sbrReflect textarea:focus-visible { outline: 2px solid ${NT.cyan}; outline-offset: 1px; }
.sbrSummary { display: flex; flex-direction: column; gap: 10px; }
.sbrSummaryRow {
  display: grid; grid-template-columns: 20px minmax(0,1fr) auto; gap: 10px; align-items: baseline;
  border-bottom: 1px solid ${NT.borderSoft}; padding-bottom: 9px;
  color: ${NT.textDim}; font-family: ${NT.sans}; font-size: 13px;
}
.sbrSummaryRow:last-child { border-bottom: none; }
.sbrDot { width: 10px; height: 10px; border-radius: 50%; align-self: center; }
.sbrStat { font-family: ${NT.mono}; font-size: 11px; color: ${NT.textFaint}; white-space: nowrap; }
@media (pointer: coarse) {
  .sbrConfBtn { min-height: 44px; padding: 9px 16px; }
  .sbrBtn { min-height: 48px; }
}
@media (prefers-reduced-motion: reduce) {
  .sbrCard *, .sbrCard { transition: none !important; }
}
`;

export function RetrievalStyles() {
  return <style>{RETRIEVAL_CSS}</style>;
}
