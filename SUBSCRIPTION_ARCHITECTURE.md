# Synergic Bond — Subscription & Entitlement Architecture

This document specifies the technical design, database schemas, transaction flows, and security model governing the **Synergic Bond Subscription Management System**.

---

## 1. Final Pricing Table & programKey Map

The system maps each founder-approved program key to its respective annual pricing tier in paise (paise = INR × 100):

| Program Name | programKey | Price (Paise) | Price (INR) | Validity |
| :--- | :--- | :--- | :--- | :--- |
| **Free Chapters** | N/A | 0 | ₹0 | Lifetime (no expiry) |
| **CBSE Class 11 Chemistry** | `cbse:class-11` | 49900 | ₹499 | 365 Days |
| **ISC Class 11 Chemistry** | `isc:class-11` | 49900 | ₹499 | 365 Days |
| **State Boards Class 11** | `state-boards:class-11` | 49900 | ₹499 | 365 Days |
| **CBSE Class 12 Chemistry** | `cbse:class-12` | 69900 | ₹699 | 365 Days |
| **ISC Class 12 Chemistry** | `isc:class-12` | 69900 | ₹699 | 365 Days |
| **State Boards Class 12** | `state-boards:class-12` | 69900 | ₹699 | 365 Days |
| **NEET Chemistry** | `neet` | 99900 | ₹999 | 365 Days |
| **JEE Main Chemistry** | `jee-main` | 109900 | ₹1099 | 365 Days |
| **JEE Advanced Chemistry** | `jee-advanced` | 149900 | ₹1499 | 365 Days |

*Note: Pro Monthly (`pro_monthly`) and Pro Annual (`pro_annual`) subscriptions are disabled on public checkout surfaces to align with this program-based model.*

---

## 2. Database Schema Model

The system utilizes two primary, mutually exclusive tables under public schema in Supabase to authorize user access.

### Subscriptions Table (Legacy Pro Plan All-Access)
Tracks Pro level access. 
```sql
CREATE TABLE public.subscriptions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan        TEXT,                             -- 'pro_monthly' | 'pro_annual'
  status      TEXT NOT NULL DEFAULT 'inactive', -- 'active' | 'inactive'
  expires_at  TIMESTAMPTZ,
  razorpay_payment_id TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
CREATE UNIQUE INDEX subscriptions_user_id_key ON public.subscriptions(user_id);
```

### User Program Entitlements Table (Granular Purchases)
Tracks granular, per-program single-year entitlements.
```sql
CREATE TABLE public.user_program_entitlements (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  program_key TEXT NOT NULL,                    -- e.g., 'neet', 'jee-main', 'cbse:class-11'
  source      TEXT NOT NULL DEFAULT 'purchase' CHECK (source IN ('purchase', 'grant')),
  razorpay_payment_id TEXT,
  status      TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked')),
  expires_at  TIMESTAMPTZ,                      -- null = lifetime; otherwise 365-day expiry
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
CREATE UNIQUE INDEX user_program_entitlements_user_program_key ON public.user_program_entitlements(user_id, program_key);
```

### Webhook Idempotency Events Table (Idempotency Logs)
Logs raw webhook payloads from Razorpay to guarantee idempotency and prevent replay attacks.
```sql
CREATE TABLE public.payment_events (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id   TEXT UNIQUE NOT NULL,              -- matches paymentEntity.id / orderEntity.id
  payload    JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 3. Access Gating Flow

The content gating mechanism relies on `getUserEntitlements()` inside `lib/access/entitlements.ts`. It acts as the single gateway for both program pages and board dashboards.

```
       [User Request for Gated Chapter / Dashboard]
                           │
                           ▼
          Check: getUserEntitlements()
                           │
          ┌────────────────┴────────────────┐
          ▼                                 ▼
    [Pro Subscription]              [Granular Entitlements]
    Is plan active                  Is program active
    and unexpired?                  and unexpired?
          │                                 │
   (Yes) ─┼───► Grant All Access            ├───► (Yes: matches key) ──► Unlock Content
          │                                 │
          ▼                                 ▼
       Degrade                           Skip / Lock Content
```

---

## 4. Payment & Renewal Transaction Lifecycle

### Create Order Flow
1. Client selects a program key (`neet`, `cbse:class-11`, etc.).
2. POST to `/api/payment/create-order` validates the parameters:
   - Unknown program keys return `HTTP 400 Bad Request`.
   - The verified program price is looked up in `PROGRAM_ACCESS_PRICE_PAISE_BY_KEY` (paise-based).
3. The server generates a Razorpay Order containing metadata notes:
   - `notes: { user_id, program_key: programKey }` (Program checkouts)
4. Client opens the Razorpay Checkout overlay, user processes payment.

### Webhook & Renewal Extension Flow
Upon receiving `payment.captured` or `order.paid`:
1. The signature (HMAC-SHA256) is verified using the webhook secret.
2. The `event_id` is queried in `payment_events`. If seen, processing halts (Idempotency/Replay Protection).
3. **Mutual Exclusivity Enforcement**:
   - If notes contain `plan`, we upsert to `subscriptions`.
   - If notes contain `program_key`, we upsert to `user_program_entitlements`.
   - Never write to both tables for the same event notes.
4. **Renewal Calculation**:
   - The existing row is queried to read the current `expires_at`.
   - If `expires_at` is in the future (`expires_at > now`), the new expiry is calculated as:
     `newExpiresAt = existing_expires_at + duration` (extending remaining validity).
   - If expired or empty, it is calculated as:
     `newExpiresAt = now + duration`.
5. The row is upserted with `newExpiresAt` and the event is logged into `payment_events`.

---

## 5. Dashboard Upgrade & Consent UX

- **Legal Consent Checkbox**: Added to both `components/PaymentGateway.tsx` and `components/subscription/SubscriptionDashboardClient.tsx` confirmation modals.
  - Required text: *"I understand this annual program subscription will be added to my account after payment. It cannot be removed or downgraded during the active period."*
  - The payment checkout / proceed button remains disabled until this checkbox is checked.
- **Terms Warnings**: The user is presented with the following copy before payment confirmation:
  - *"This is an annual program subscription. Access remains active for 365 days from activation. Once expired, paid content will be locked unless renewed."*
  - For upgrades/add-ons: *"Once added, a program cannot be removed or downgraded. Please confirm before payment."*

---

## 6. Admin Security Hardening

- **Email Whitelist Removal**: `hello@synergicbond.com` has been permanently removed from the admin whitelist check to prevent public support addresses from accessing operational data.
- **Disabled Admin Route**: Because no secure role-management schema or private environment variables exist in the repository for admin roles, the `/dashboard/subscription/admin` route has been permanently configured to throw `notFound()` and return a 404 error page.

---

## 7. Known Risks

1. **Local System Time Dependency**: Expiry checks inside client dashboards are computed relative to client/server timestamps. If server and client clocks are severely misaligned, it may temporarily impact active badge states on-screen (mitigated by server-side gate validation).
2. **Board Conversion Mapping**: User program keys must map accurately to syllabus tracks. Mismatches in database lookup keys may deny access (mitigated by board key mapping tests).

---

## 8. Launch Certification Checklist

The system status is: **Code-ready after gates pass**.

A full deployment is certified only when the following real-world behaviors have been executed and verified in staging/production:

- [ ] **Real Razorpay Payment**: Successfully execute a payment on the staging checkout widget.
- [ ] **Webhook Received**: Verify that the webhook endpoint `/api/payment/webhook` receives the Razorpay event.
- [ ] **Entitlement Row Created**: Verify a row with the correct `program_key`, `status = 'active'`, and `expires_at` (now + 365 days) is populated in `user_program_entitlements`.
- [ ] **Premium Access Unlocked**: Confirm that previously locked premium chapters under the purchased program are accessible.
- [ ] **Expiry Verified**: Verify that manual expiry updates (e.g. setting `expires_at` in the database to the past) immediately locks chapters and displays the renewal button.
