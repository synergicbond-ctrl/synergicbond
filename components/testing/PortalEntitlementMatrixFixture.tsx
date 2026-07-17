"use client";

import { useMemo, useState } from "react";
import {
  portalDestinationsForContext,
  resolveActiveProgramContext,
  type ActiveProgramCatalogEntry,
  type PortalProgram,
} from "@/lib/portal/activeProgramState";
import { PROGRAM_CATALOG, programKeyToHref } from "@/lib/programs";
import { addActiveEntitlementRows, type ActiveEntitlementRow } from "@/lib/access/entitlementRows";
import ProgramSwitcher from "@/components/portal/ProgramSwitcher";

// Development-only fixture data. It has no Supabase client, customer data,
// cookies, or production-route access and is reachable only from the guarded
// test route in app/test-fixtures/portal-matrix.
const CATALOG: ActiveProgramCatalogEntry[] = PROGRAM_CATALOG.map((program) => ({
  ...program,
  href: programKeyToHref(program.key),
}));

type FixtureKey = "free" | "one" | "multiple" | "all-access" | "expired" | "tampered";

type Fixture = {
  key: FixtureKey;
  label: string;
  entitlementKeys: string[];
  entitlementRows?: ActiveEntitlementRow[];
  preferredProgramKey?: string;
  isAllAccess?: boolean;
  notice: string;
};

const FIXTURES: Fixture[] = [
  {
    key: "free",
    label: "Free user",
    entitlementKeys: [],
    notice: "No paid programme entitlement. Free notes remain available; premium notes remain locked.",
  },
  {
    key: "one",
    label: "One programme",
    entitlementKeys: ["neet"],
    notice: "The only entitled programme is selected automatically; no switcher is rendered.",
  },
  {
    key: "multiple",
    label: "Multiple",
    entitlementKeys: ["neet", "jee-main"],
    preferredProgramKey: "jee-main",
    notice: "Only the two entitled programmes appear in the switcher. Select one to update this fixture context.",
  },
  {
    key: "all-access",
    label: "All access",
    entitlementKeys: CATALOG.map((program) => program.key).concat("olympiad"),
    preferredProgramKey: "neet",
    isAllAccess: true,
    notice: "All-access resolves to the real portal catalogue only; unsupported entitlement keys are not shown.",
  },
  {
    key: "expired",
    label: "Expired",
    entitlementKeys: [],
    entitlementRows: [
      { program_key: "neet", status: "active", expires_at: "2099-01-01T00:00:00.000Z" },
      { program_key: "jee-main", status: "active", expires_at: "2000-01-01T00:00:00.000Z" },
    ],
    preferredProgramKey: "jee-main",
    notice: "The same active-entitlement expiry filter drops the expired JEE Main row, so the saved preference falls back to NEET.",
  },
  {
    key: "tampered",
    label: "Tampered",
    entitlementKeys: ["neet"],
    preferredProgramKey: "jee-advanced",
    notice: "An unentitled saved-program value is ignored. A server request for it would be rejected with 403 before a cookie is set.",
  },
];

function FixtureSwitcher({
  programs,
  activeProgram,
  isAllAccess,
  onChange,
}: {
  programs: PortalProgram[];
  activeProgram: PortalProgram | null;
  isAllAccess: boolean;
  onChange: (program: PortalProgram) => void;
}) {
  return (
    <div data-testid={activeProgram ? programs.length > 1 ? "multi-program-switcher" : "single-program" : "free-workspace"}>
      <ProgramSwitcher
        entitledPrograms={programs}
        activeProgram={activeProgram}
        isAllAccess={isAllAccess}
        onProgramChange={(key) => {
          const program = programs.find((candidate) => candidate.key === key);
          if (program) onChange(program);
        }}
      />
    </div>
  );
}

export default function PortalEntitlementMatrixFixture() {
  const [fixtureKey, setFixtureKey] = useState<FixtureKey>("free");
  const [preferenceOverride, setPreferenceOverride] = useState<string | undefined>();
  const fixture = FIXTURES.find((item) => item.key === fixtureKey) ?? FIXTURES[0];
  const entitlementKeys = useMemo(() => {
    const keys = new Set(fixture.entitlementKeys);
    if (fixture.entitlementRows) addActiveEntitlementRows(keys, fixture.entitlementRows);
    return keys;
  }, [fixture]);
  const ctx = useMemo(() => resolveActiveProgramContext({
    hasUser: true,
    entitlementKeys,
    isAllAccess: Boolean(fixture.isAllAccess),
    isPrivileged: false,
    preferredProgramKey: preferenceOverride ?? fixture.preferredProgramKey,
    catalog: CATALOG,
  }), [entitlementKeys, fixture, preferenceOverride]);
  const destinations = portalDestinationsForContext(ctx);
  const subscriptionLabel = ctx.isAllAccess
    ? "Verified subscription: All-access"
    : ctx.entitledPrograms.length
      ? `Verified subscription: ${ctx.entitledPrograms.length} active programme entitlement${ctx.entitledPrograms.length === 1 ? "" : "s"}`
      : "Verified subscription: Free tier";
  const notesPolicy = ctx.isAllAccess
    ? "All-access verified: premium notes are available through the real all-access entitlement."
    : "Free notes: Mole Concept and Redox Reactions. Pro notes remain locked without a real premium entitlement.";

  function selectFixture(key: FixtureKey) {
    setFixtureKey(key);
    setPreferenceOverride(undefined);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0F19] px-3 py-6 text-white sm:px-6">
      <div className="mx-auto max-w-5xl space-y-5">
        <header className="rounded-3xl border border-amber-400/30 bg-amber-400/[0.07] p-4">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-200">Development-only entitlement fixture</p>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">Authenticated portal matrix</h1>
          <p className="mt-2 text-sm text-white/65">No Supabase account, subscription, cookie, or production data is used by this fixture.</p>
        </header>

        <nav aria-label="Fixture states" className="flex flex-wrap gap-2">
          {FIXTURES.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => selectFixture(item.key)}
              className={`rounded-xl border px-3 py-2 text-xs font-bold ${item.key === fixtureKey ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-200" : "border-white/10 bg-white/[0.03] text-white/65"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <section data-testid="active-context" className="flex flex-col gap-4 rounded-3xl border border-white/[0.08] bg-[#111827] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/45">Active portal context</p>
            <p className="mt-1 break-words text-lg font-black">{ctx.activeProgram?.name ?? "Free workspace"}</p>
            <p className="mt-1 text-xs leading-relaxed text-white/55">{fixture.notice}</p>
          </div>
          <FixtureSwitcher
            programs={ctx.entitledPrograms}
            activeProgram={ctx.activeProgram}
            isAllAccess={ctx.isAllAccess}
            onChange={(program) => setPreferenceOverride(program.key)}
          />
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section data-testid="continue-learning" className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Continue Learning</p>
            <h2 className="mt-1 text-lg font-black">Start your first chapter</h2>
            <p className="mt-1 text-sm text-white/55">Truthful empty state: this fixture has no study-session data.</p>
          </section>
          <section data-testid="revise-today" className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Revise Today</p>
            <h2 className="mt-1 text-lg font-black">0 cards due</h2>
            <p className="mt-1 text-sm text-white/55">Truthful empty state: no SM-2 fixture cards are due.</p>
          </section>
          <section data-testid="practice-now" className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Practice Now</p>
            <h2 className="mt-1 text-lg font-black">Choose a topic</h2>
            <p className="mt-1 text-sm text-white/55">Truthful empty state: no attempt data means no fabricated recommendation.</p>
          </section>
          <section data-testid="profile-notes" className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Profile and notes</p>
            <p className="mt-1 text-sm font-bold">{ctx.entitledPrograms.length ? `${ctx.entitledPrograms.length} verified programme${ctx.entitledPrograms.length === 1 ? "" : "s"}` : "No paid programmes"}</p>
            <p className="mt-1 text-xs text-white/55">{subscriptionLabel}</p>
            <p className="mt-1 text-xs text-white/55">{notesPolicy}</p>
          </section>
        </div>

        <section data-testid="portal-routes" className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/45">Resolved portal routes</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {Object.entries(destinations).map(([label, href]) => (
              <div key={label} className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                <p className="text-xs font-bold capitalize text-white">{label}</p>
                <p className="mt-1 break-all text-[10px] text-cyan-200">{href}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
