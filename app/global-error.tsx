"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

// Root error boundary — catches errors thrown in the root layout itself, so it
// must render its own <html> and <body>. Kept dependency-free and inline-styled
// (globals.css may not have loaded) and leaks no error details.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error?.digest ?? "unknown");
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0F19",
          color: "#fff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro', 'Segoe UI', sans-serif",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em" }}>
          Something went wrong
        </h1>
        <p style={{ marginTop: 12, maxWidth: 420, color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6 }}>
          The application ran into an unexpected problem. Please try again.
        </p>
        {error?.digest && (
          <p style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            Reference: {error.digest}
          </p>
        )}
        <button
          onClick={() => reset()}
          style={{
            marginTop: 28,
            border: "1px solid rgba(0,245,212,0.3)",
            background: "rgba(0,245,212,0.1)",
            color: "#00F5D4",
            fontWeight: 700,
            fontSize: 14,
            padding: "10px 20px",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
