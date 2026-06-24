export type UserStats = {
  xp: number;
  streak: number;
  level: number;
};

export const userStats: UserStats = {
  xp: 120,
  streak: 3,
  level: 1,
};

export function addXP(amount: number) {
  userStats.xp += amount;

  if (userStats.xp >= 100) {
    userStats.level += 1;
    userStats.xp = 0;
  }
}

export function increaseStreak() {
  userStats.streak += 1;
}