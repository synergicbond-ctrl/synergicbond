export type SBlockBlock =
  | { kind: "md"; text: string }
  | { kind: "visual"; id: string };

export type SBlockSection = {
  id: string;
  label: string;
  blocks: SBlockBlock[];
};

export const md = (text: string): SBlockBlock => ({ kind: "md", text: text.trim() });
export const visual = (id: string): SBlockBlock => ({ kind: "visual", id });
