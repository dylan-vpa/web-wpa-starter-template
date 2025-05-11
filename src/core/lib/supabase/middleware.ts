//Next.
import { type NextRequest, NextResponse } from "next/server";
//Supabase.
import { createServerClient } from "@supabase/ssr";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const user = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith("/private") && user.error) {
      return NextResponse.redirect(new URL("/auth/signIn", request.url));
    }

    if (request.nextUrl.pathname === "/" && !user.error) {
      return NextResponse.redirect(new URL("/private", request.url));
    }

    return response;
  } catch (e) {
    console.log(e)
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
