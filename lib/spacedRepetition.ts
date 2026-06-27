export interface ReviewCard {
  id: string;
  frontText: string;
  backText: string;
  nextReview: Date;
  interval: number; // in days
  easeFactor: number;
}

export function calculateNextInterval(
  easeFactor: number,
  interval: number,
  quality: number // 0 to 5 rating of how well they recalled the card
): { interval: number; easeFactor: number } {
  let newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEaseFactor < 1.3) newEaseFactor = 1.3;

  let newInterval: number;
  if (quality < 3) {
    newInterval = 1;
  } else if (interval === 0) {
    newInterval = 1;
  } else if (interval === 1) {
    newInterval = 6;
  } else {
    newInterval = Math.round(interval * newEaseFactor);
  }

  return { interval: newInterval, easeFactor: newEaseFactor };
}
