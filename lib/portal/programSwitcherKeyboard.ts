// Keyboard movement for the active-program listbox. Kept pure so the
// interaction can be regression-tested without a browser or a user session.

export function getNextProgramOptionIndex(
  key: string,
  currentIndex: number,
  optionCount: number,
): number | null {
  if (optionCount <= 0) return null;

  const index = Math.min(Math.max(currentIndex, 0), optionCount - 1);
  switch (key) {
    case "ArrowDown":
      return (index + 1) % optionCount;
    case "ArrowUp":
      return (index - 1 + optionCount) % optionCount;
    case "Home":
      return 0;
    case "End":
      return optionCount - 1;
    default:
      return null;
  }
}
