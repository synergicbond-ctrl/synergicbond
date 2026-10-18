/**
 * Plain-text distance in units of the cell edge a, written the way a student writes it:
 * a/2, a, √2 a, √3 a/2 ... The distance is d = √num / den · a.
 */
const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));

export function plainDist(num: number, den: number): string {
  let s = 1;
  let r = num;
  for (let k = Math.floor(Math.sqrt(num)); k >= 2; k--) {
    if (num % (k * k) === 0) {
      s = k;
      r = num / (k * k);
      break;
    }
  }
  const g = gcd(s, den);
  const n = s / g;
  const m = den / g;
  const coef = n === 1 ? "" : String(n);
  if (r === 1) return m === 1 ? (n === 1 ? "a" : `${n}a`) : `${coef}a/${m}`;
  return m === 1 ? `${coef}√${r} a` : `${coef}√${r} a/${m}`;
}
