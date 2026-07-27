import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { requiresAuth } from "@/lib/access/contentAccess";

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
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/|auth/|.*\\.(?:webp|png|jpe?g|gif|svg|ico|css|js|map|json|wasm|woff2?|ttf|otf)$).*)",
  ],
};
