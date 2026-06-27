export function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    console.error(`❌ Missing env: ${name}`);
    return "";
  }

  return value;
}
