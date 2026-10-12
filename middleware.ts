import { NextRequest, NextResponse } from "next/server";
import { getWorkspaceSession } from "@/lib/workspace-auth";
export async function middleware(request: NextRequest) { const session = await getWorkspaceSession(); if (session) return NextResponse.next(); if (request.nextUrl.pathname.startsWith("/api/")) return NextResponse.json({ error: "Sign-in is required." }, { status: 401 }); return NextResponse.redirect(new URL("/login", request.url)); }
export const config = { matcher: ["/workspace/:path*", "/api/workspace/:path*"] };
