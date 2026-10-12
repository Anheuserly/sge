import { NextResponse } from "next/server";
import { getWorkspaceSession } from "@/lib/workspace-auth";
import { getWorkspaceBusinesses } from "@/lib/workspace-access";
export async function GET() { const session = await getWorkspaceSession(); if (!session) return NextResponse.json({ error: "Sign-in is required." }, { status: 401 }); try { return NextResponse.json({ businesses: await getWorkspaceBusinesses(session) }); } catch { return NextResponse.json({ error: "Business access could not be verified right now." }, { status: 503 }); } }
