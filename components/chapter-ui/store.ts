/**
 * Tiny localStorage-backed external store for useSyncExternalStore.
 *
 * - Server snapshot is always the defaults, so server and first client render match.
 * - Snapshots are cached, so they are referentially stable between changes.
 * - Reads and writes are wrapped in try/catch: private windows or blocked storage
 *   simply fall back to in-memory state for the session.
 */
type Listener = () => void;

export function createLocalStore<T extends object>(
  key: string,
  initial: T,
  sanitize: (raw: Partial<T>) => Partial<T> = (r) => r,
) {
  let cache: T | null = null;
  const listeners = new Set<Listener>();

  const read = (): T => {
    if (cache) return cache;
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      cache = raw ? ({ ...initial, ...sanitize(JSON.parse(raw)) } as T) : initial;
    } catch {
      cache = initial;
    }
    return cache;
  };
  const emit = () => listeners.forEach((l) => l());

  if (typeof window !== "undefined") {
    window.addEventListener("storage", (e) => {
      if (e.key === key) {
        cache = null;
        emit();
      }
    });
  }

  return {
    subscribe(l: Listener) {
      listeners.add(l);
      return () => {
        listeners.delete(l);
      };
    },
    getSnapshot: read,
    getServerSnapshot: () => initial,
    set(patch: Partial<T> | ((cur: T) => Partial<T>)) {
      const cur = read();
      const next = { ...cur, ...(typeof patch === "function" ? patch(cur) : patch) } as T;
      cache = next;
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* storage unavailable: keep in memory */
      }
      emit();
    },
  };
}
