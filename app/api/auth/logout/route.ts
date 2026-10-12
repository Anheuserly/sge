import { NextResponse } from "next/server";
import { deleteWorkspaceSession } from "@/lib/workspace-auth";
export async function POST() { await deleteWorkspaceSession(); return NextResponse.json({ success: true }); }
