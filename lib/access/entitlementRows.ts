/** Minimal entitlement-row shape shared by the server adapter and safe tests. */
export interface ActiveEntitlementRow {
  program_key: string;
  status: string;
  expires_at: string | null;
}

/**
 * Add only active, unexpired entitlement rows to an existing key set.
 * Malformed expiry values fail closed rather than extending paid access.
 */
export function addActiveEntitlementRows(
  keys: Set<string>,
  rows: readonly ActiveEntitlementRow[],
  now = Date.now(),
): void {
  for (const row of rows) {
    if (row.status !== "active" || !row.program_key) continue;
    if (row.expires_at !== null) {
      const expiresAt = Date.parse(row.expires_at);
      if (!Number.isFinite(expiresAt) || expiresAt <= now) continue;
    }
    keys.add(row.program_key);
  }
}