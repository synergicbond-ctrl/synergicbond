export type UserStats = {
  xp: number;

  streak: number;

  level: number;

  badges: string[];
};

export const userStats: UserStats = {
  xp: 120,

  streak: 3,

  level: 1,

  badges: [],
};

export function addXP(amount: number) {
  userStats.xp += amount;

  while (userStats.xp >= 100) {
    userStats.level += 1;

    userStats.xp -= 100;
  }
}

export function increaseStreak() {
  userStats.streak += 1;
}

export function addBadge(badge: string) {
  if (!userStats.badges.includes(badge)) {
    userStats.badges.push(badge);
  }
}