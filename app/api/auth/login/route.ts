import { NextResponse } from "next/server";
import { createWorkspaceSession } from "@/lib/workspace-auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json() as { email?: unknown; password?: unknown };
    if (typeof email !== "string" || !email.includes("@") || typeof password !== "string" || !password) return NextResponse.json({ error: "Enter your account email address and password." }, { status: 400 });
    const baseUrl = process.env.DATA_HUB_VPS_API_URL || process.env.NEXT_PUBLIC_DATA_HUB_API_URL || "https://storage.amcmep.in/v1";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    let response: Response;
    try { response = await fetch(`${baseUrl}/auth/login`, { method: "POST", headers: { "Content-Type": "application/json", "X-Data-Project": process.env.NEXT_PUBLIC_SGE_PLATFORM_PROJECT_KEY || "amcmep" }, body: JSON.stringify({ identifier: email.trim(), password, deviceName: "SGE Workforce Workspace" }), signal: controller.signal }); } finally { clearTimeout(timeout); }
    const data: any = await response.json().catch(() => ({}));
    if (!response.ok) return NextResponse.json({ error: response.status >= 500 ? "The account service is temporarily unavailable. Please try again shortly." : typeof data.message === "string" ? data.message : "Invalid email or password." }, { status: response.status >= 500 ? 503 : response.status });
    const user = data.user || {};
    const userId = user.id || user.user_id || data.userId || data.id;
    const accessToken = data.accessToken || data.apiKey;
    if (typeof userId !== "string" || typeof accessToken !== "string" || !accessToken) return NextResponse.json({ error: "The account service returned an incomplete sign-in response." }, { status: 502 });
    await createWorkspaceSession({ userId, name: typeof user.name === "string" ? user.name : email.trim().split("@")[0], email: typeof user.email === "string" ? user.email : email.trim(), accessToken });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof DOMException && error.name === "AbortError" ? "The account service is taking too long to respond. Please try again shortly." : "The account service is unavailable. Please try again shortly." }, { status: 503 });
  }
}
