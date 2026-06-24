export type UserStats = {
  xp: number;

  streak: number;

  level: number;

  badges: string[];
};

export const userStats: UserStats = {
  xp: 320,

  streak: 7,

  level: 4,

  badges: [
    "🔥 Consistent Learner",
    "🧠 Atom Master",
  ],
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