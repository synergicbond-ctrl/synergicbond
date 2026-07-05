// ─────────────────────────────────────────────────────────────────────────────
// Student registration option lists — SSOT shared by the registration form
// (components/StudentDetailsForm.tsx), the profile editor
// (components/dashboard/ProfileEditForm.tsx) and server pages that need to
// render the stored values as labels. Pure data, safe on server and client.
// Values are what profiles.class_standard / profiles.board_program store.
// ─────────────────────────────────────────────────────────────────────────────

export const CLASS_OPTIONS = [
  { value: "class-11", label: "Class 11" },
  { value: "class-12", label: "Class 12" },
  { value: "dropper", label: "Dropper / Repeater" },
] as const;

export const BOARD_OPTIONS = [
  { value: "cbse", label: "CBSE" },
  { value: "isc", label: "ISC / ICSE" },
  { value: "state-boards", label: "State Board" },
  { value: "neet", label: "NEET" },
  { value: "jee-main", label: "JEE Main" },
  { value: "jee-advanced", label: "JEE Advanced" },
] as const;

export function classLabel(value: string | null | undefined): string | null {
  return CLASS_OPTIONS.find((c) => c.value === value)?.label ?? value ?? null;
}

export function boardLabel(value: string | null | undefined): string | null {
  return BOARD_OPTIONS.find((b) => b.value === value)?.label ?? value ?? null;
}
