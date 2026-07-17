import { notFound } from "next/navigation";
import PortalEntitlementMatrixFixture from "@/components/testing/PortalEntitlementMatrixFixture";

export const dynamic = "force-dynamic";

// The fixture is intentionally unavailable in production builds and is only
// enabled for a local development server that explicitly opts in.
export default function PortalMatrixFixturePage() {
  if (process.env.NODE_ENV !== "development" || process.env.PORTAL_ENTITLEMENT_TEST_MODE !== "1") {
    notFound();
  }
  return <PortalEntitlementMatrixFixture />;
}
