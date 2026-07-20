"use client";

import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n";

// Maps the site's existing language codes (lib/i18n.tsx) to real Google
// Translate target codes. "english" and "hinglish" have no machine-translate
// target — they're left to the existing UI-chrome dictionary only.
const GOOGLE_LANG_MAP: Record<string, string> = {
  hindi: "hi",
  spanish: "es",
  arabic: "ar",
  french: "fr",
  german: "de",
};

declare global {
  interface Window {
    google?: { translate?: { TranslateElement?: new (opts: Record<string, unknown>, id: string) => unknown } & { InlineLayout?: Record<string, unknown> } };
    googleTranslateElementInit?: () => void;
  }
}

function readGoogTransCookie(): string | null {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function writeGoogTransCookie(value: string | null) {
  const host = window.location.hostname;
  const parts = value ? [`googtrans=${encodeURIComponent(value)}`] : ["googtrans=", "expires=Thu, 01 Jan 1970 00:00:00 UTC"];
  const cookie = parts.join("; ");
  document.cookie = `${cookie}; path=/`;
  document.cookie = `${cookie}; path=/; domain=${host}`;
  document.cookie = `${cookie}; path=/; domain=.${host}`;
}

/**
 * Bridges the site's existing language switcher (lib/i18n.tsx, already wired
 * into the Navbar) to Google's page-translate engine, so picking a language
 * there also machine-translates chapter/body content — not just nav chrome.
 *
 * Loaded once from the root layout; renders nothing visible.
 */
export default function AutoTranslateBridge() {
  const { lang } = useT();
  const scriptLoaded = useRef(false);
  const target = GOOGLE_LANG_MAP[lang] ?? null;

  useEffect(() => {
    // Most visits use English/Hinglish. Do not download Google's third-party
    // translation runtime unless a language that needs it is selected.
    if (!target) return;
    if (scriptLoaded.current || document.getElementById("google_translate_element")) return;
    scriptLoaded.current = true;

    const host = document.createElement("div");
    host.id = "google_translate_element";
    host.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;";
    document.body.appendChild(host);

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement) return;
      new TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, [target]);

  useEffect(() => {
    const desired = target ? `/en/${target}` : null;
    const current = readGoogTransCookie();
    if (current === desired) return;

    writeGoogTransCookie(desired);
    // Google's translate engine reads the cookie on load; a full reload is
    // the reliable way to apply it without fighting React's own DOM updates.
    window.location.reload();
  }, [lang]);

  return null;
}
