import { brotliDecompressSync } from "node:zlib";
import data01 from "./polymer-data-01";
import data02 from "./polymer-data-02";
import data03 from "./polymer-data-03";
import data04 from "./polymer-data-04";
import data05 from "./polymer-data-05";
import data06 from "./polymer-data-06";
import data07 from "./polymer-data-07";
import data08 from "./polymer-data-08";

export type Tone = "cyan" | "amber" | "violet" | "rose";
export type Block =
  | { kind: "p"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "formula"; latex: string; note?: string }
  | { kind: "callout"; tone: Tone; title: string; body: string }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "example"; title: string; question: string; answer: string }
  | { kind: "quiz"; questions: { q: string; a: string }[] };
export type PolymerSection = { id: string; title: string; subtitle: string; blocks: Block[] };

const encoded = [data01, data02, data03, data04, data05, data06, data07, data08].join("");
const json = brotliDecompressSync(Buffer.from(encoded, "base64")).toString("utf8");
export const polymerSections = JSON.parse(json) as PolymerSection[];
