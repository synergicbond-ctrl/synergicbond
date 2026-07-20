import type { NextConfig } from "next";

// Production security headers. Applied to every route via source "/:path*".
//
// A Content-Security-Policy is deliberately NOT set here yet: a correct CSP has
// to allow Next.js inline/hydration scripts, Supabase, the Razorpay checkout
// iframe, and Vercel Analytics, and shipping an untested policy would break
// checkout or auth. CSP is tracked as a production follow-up (see the Codex
// handover) so it can be rolled out in Report-Only mode first.
const securityHeaders: { key: string; value: string }[] = [
  // Stop browsers MIME-sniffing a response away from the declared content-type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Clickjacking protection — the app must not be embedded in a foreign frame.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Don't leak full URLs (which can carry ?next=…/ids) to other origins.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Least-privilege browser features. Camera is allowed same-origin for
  // Snap & Solve image capture; microphone and geolocation are disabled.
  { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=()" },
  // Legacy XSS auditor off (modern browsers ignore; avoids known bypass issues).
  { key: "X-XSS-Protection", value: "0" },
];

// HSTS only in production — never send it in dev/preview over plain HTTP.
if (process.env.NODE_ENV === "production") {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

const nextConfig: NextConfig = {
  // Don't advertise the framework/version.
  poweredByHeader: false,
  // This repository is a standalone Next.js app. Without an explicit root,
  // Turbopack walks up to an unrelated parent lockfile, increasing file-system
  // watching and invalidating more of its cache than necessary.
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
