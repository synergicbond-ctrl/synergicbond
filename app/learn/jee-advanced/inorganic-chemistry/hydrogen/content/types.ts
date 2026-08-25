export type HydrogenBlock =
  | { kind: "md"; text: string }
  | { kind: "visual"; id: string };

export type HydrogenSection = {
  id: string;
  label: string;
  blocks: HydrogenBlock[];
};

export const md = (text: string): HydrogenBlock => ({ kind: "md", text: text.trim() });
export const visual = (id: string): HydrogenBlock => ({ kind: "visual", id });
