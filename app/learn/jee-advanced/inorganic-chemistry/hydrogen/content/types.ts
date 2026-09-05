// `visual` blocks were removed: the type existed for a future figure kind that
// no content ever used (`HydrogenVisual` only ever rendered an unstyled
// "Visual: {id}" placeholder box — dead code with no reachable path, and a
// landmine for the moment anyone added a `visual()` call). This chapter's
// content is a redox rules/exceptions reference sheet with no structural
// discussion, so there was nothing here that actually called for a figure;
// re-add a real `{ kind: "visual" }` variant plus a real renderer if/when
// this chapter's content actually needs one.
export type HydrogenBlock = { kind: "md"; text: string };

export type HydrogenSection = {
  id: string;
  label: string;
  blocks: HydrogenBlock[];
};

export const md = (text: string): HydrogenBlock => ({ kind: "md", text: text.trim() });
