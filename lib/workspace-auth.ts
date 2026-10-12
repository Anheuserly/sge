import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { cookies } from "next/headers";

const cookieName = "sge_workspace_session";
const secret = process.env.SGE_SESSION_SECRET;

function signingKey() {
  if (!secret && process.env.NODE_ENV === "production") {
    throw new Error("SGE_SESSION_SECRET must be configured in production.");
  }
  return new TextEncoder().encode(secret || "sge-local-development-session-secret-change-me");
}

export type WorkspaceSession = JWTPayload & {
  userId: string;
  name: string;
  email: string;
  accessToken: string;
};

export async function createWorkspaceSession(session: WorkspaceSession) {
  const token = await new SignJWT(session).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(signingKey());
  (await cookies()).set(cookieName, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 8 * 60 * 60 });
}

export async function getWorkspaceSession(): Promise<WorkspaceSession | null> {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, signingKey(), { algorithms: ["HS256"] });
    return typeof payload.userId === "string" && typeof payload.accessToken === "string" ? payload as WorkspaceSession : null;
  } catch { return null; }
}

export async function deleteWorkspaceSession() { (await cookies()).delete(cookieName); }
