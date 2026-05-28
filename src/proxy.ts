import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/auth"];

export async function proxy(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  const nextUrl = req.nextUrl.pathname;

  if (!session && protectedRoutes.includes(nextUrl)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (session && authRoutes.includes(nextUrl)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
