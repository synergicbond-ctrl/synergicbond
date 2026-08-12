// SSOT for the Exam Center directory. All display strings are pre-computed here
// (fallbacks like "TBD" / "Free" / "N/A" baked in) so the UI does ZERO mapping
// or fallback logic — it only renders these final values.

export type CapIcon = "users" | "award";

export interface ExamDirectoryEntry {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  accent: string; // hex
  tag: string;
  dateStr: string;
  feeStr: string;
  capStr: string;
  capIcon: CapIcon;
}

export const EXAM_DIRECTORY: ExamDirectoryEntry[] = [
  {
    id: "neet",
    name: "NEET 2026",
    subtitle: "National Eligibility cum Entrance Test",
    href: "/neet",
    accent: "#00F5D4",
    tag: "Most Popular",
    dateStr: "May 2026 (Tentative)",
    feeStr: "₹1,700",
    capStr: "Announcing Soon",
    capIcon: "users",
  },
  {
    id: "jee",
    name: "JEE Advanced 2026",
    subtitle: "Joint Entrance Examination — Advanced",
    href: "/jee",
    accent: "#00BBF9",
    tag: "IIT Gateway",
    dateStr: "May / June 2026",
    feeStr: "₹3,200",
    capStr: "TBD",
    capIcon: "users",
  },
  {
    id: "incho",
    name: "INChO 2026",
    subtitle: "Indian National Chemistry Olympiad",
    href: "/olympiads",
    accent: "#9B5DE5",
    tag: "Olympiad",
    dateStr: "January 2026",
    feeStr: "Free",
    capStr: "~300 seats worldwide",
    capIcon: "users",
  },
  {
    id: "gate",
    name: "GATE 2026 (CY)",
    subtitle: "Graduate Aptitude Test — Chemistry",
    href: "/gate",
    accent: "#C084FC",
    tag: "Postgraduate",
    dateStr: "February 2026",
    feeStr: "₹1,800",
    capStr: "Score valid 3 years",
    capIcon: "award",
  },
];
