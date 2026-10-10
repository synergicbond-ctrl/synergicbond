import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { requiresAuth } from "@/lib/access/contentAccess";

/**
 * Temporary whole-site lock for pre-launch builds.
 *
 * Independent of the Supabase content-access gate below — this exists so the
 * site can be taken fully private (every route, every asset) while it's not
 * ready for the public, without touching the premium-content auth logic.
 *
 * Controlled entirely by env vars so it can be flipped off with zero code
 * changes when the site is ready to go public:
 *   SITE_LOCKED=true            enables the lock
 *   SITE_LOCK_USER=<username>   Basic Auth username
 *   SITE_LOCK_PASSWORD=<secret> Basic Auth password
 *
 * If SITE_LOCKED is not "true", or the credentials aren't configured, this is
 * a no-op — misconfiguration fails open rather than taking prod down.
 */
function checkSiteLock(request: NextRequest): NextResponse | null {
  if (process.env.SITE_LOCKED !== "true") return null;

  const expectedUser = process.env.SITE_LOCK_USER;
  const expectedPassword = process.env.SITE_LOCK_PASSWORD;
  if (!expectedUser || !expectedPassword) return null;

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
    const separatorIndex = decoded.indexOf(":");
    const user = separatorIndex === -1 ? decoded : decoded.slice(0, separatorIndex);
    const password = separatorIndex === -1 ? "" : decoded.slice(separatorIndex + 1);
    if (user === expectedUser && password === expectedPassword) {
      return null;
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="synergicbond", charset="UTF-8"' },
  });
}

/**
 * Public-folder assets may share a URL prefix with protected pages (for example
 * `/notes/d-block/visuals/*.webp`). They must pass through untouched so an
 * anonymous image, stylesheet, or font request is never redirected to sign-in.
 */
const STATIC_FILE_PATH = /\.(?:webp|png|jpe?g|gif|svg|ico|css|js|map|json|wasm|woff2?|ttf|otf)$/i;

function isStaticFileRequest(pathname: string): boolean {
  return STATIC_FILE_PATH.test(pathname);
}

/** Build /auth/signin?next=<current path+query> so the user returns after login. */
function signinRedirect(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone();
  const next = request.nextUrl.pathname + request.nextUrl.search;
  url.pathname = "/auth/signin";
  url.search = "";
  url.searchParams.set("next", next);
  return NextResponse.redirect(url);
}

export async function proxy(request: NextRequest) {
  // The standalone studio is the one public teaching resource available while
  // the rest of the pre-launch site remains password protected.
  const studioPath = request.nextUrl.pathname;
  if (studioPath === "/learn/isomerism/studio") {
    return NextResponse.redirect(new URL("/stereochemistry-studio.html", request.url));
  }
  if (studioPath === "/stereochemistry-studio.html") {
    return NextResponse.next({ request });
  }

  const lockResponse = checkSiteLock(request);
  if (lockResponse) return lockResponse;

  const { pathname } = request.nextUrl;

  // Keep this runtime check in addition to the matcher below: it protects
  // static assets if the matcher is later broadened.
  if (isStaticFileRequest(pathname)) {
    return NextResponse.next({ request });
  }

  const isProtected = requiresAuth(pathname);

  // Public pages use the browser Supabase client for optional navbar state.
  // Refreshing a session with getUser() here would add a network round trip to
  // every document/RSC request, even for anonymous visitors. Keep the proxy
  // limited to the authorization boundary it actually enforces.
  if (!isProtected) return NextResponse.next({ request });

  let supabaseResponse = NextResponse.next({ request });
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return signinRedirect(request);
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return signinRedirect(request);
  }

  return supabaseResponse;
}

export const config = {
  // Matches every request (including static assets, api/, auth/) so the
  // SITE_LOCKED check above can gate the entire site when it's enabled.
  // When SITE_LOCKED is unset, checkSiteLock() is a no-op and the function's
  // own static-file/route checks below restore the original exclusions.
  matcher: ["/:path*"],
};
