import type { WorkspaceSession } from "@/lib/workspace-auth";

const baseUrl = process.env.DATA_HUB_VPS_API_URL || process.env.NEXT_PUBLIC_DATA_HUB_API_URL || "https://storage.amcmep.in/v1";
const projectKey = process.env.NEXT_PUBLIC_SGE_PLATFORM_PROJECT_KEY || "amcmep";

export type WorkspaceBusiness = { id: string; name: string; role: string; permissions: string[] };

function sgeBusinessId() {
  const businessId = process.env.SGE_BUSINESS_ID?.trim();
  if (!businessId) throw new Error("The SGE workspace business is not configured.");
  return businessId;
}

async function request(path: string, accessToken: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    return await fetch(`${baseUrl}${path}`, { headers: { "X-Data-Project": projectKey, ...(process.env.DATA_HUB_INTERNAL_API_KEY ? { "X-Data-Hub-Key": process.env.DATA_HUB_INTERNAL_API_KEY } : {}), Authorization: `Bearer ${accessToken}` }, cache: "no-store", signal: controller.signal });
  } finally { clearTimeout(timeout); }
}

function rows(data: unknown): Record<string, unknown>[] {
  if (Array.isArray(data)) return data.filter((row): row is Record<string, unknown> => Boolean(row) && typeof row === "object");
  if (data && typeof data === "object") {
    const payload = data as { rows?: unknown; documents?: unknown };
    return rows(payload.rows || payload.documents || []);
  }
  return [];
}

export async function getWorkspaceBusinesses(session: WorkspaceSession): Promise<WorkspaceBusiness[]> {
  const businessId = sgeBusinessId();
  const membershipResponse = await request(`/records/business_memberships?user_id=${encodeURIComponent(session.userId)}&status=active&limit=100`, session.accessToken);
  if (!membershipResponse.ok) throw new Error("Could not verify business access.");
  const membership = rows(await membershipResponse.json().catch(() => [])).find((candidate) => candidate.status === "active" && candidate.business_id === businessId);
  if (!membership) return [];

  const businessResponse = await request("/records/businesses?limit=100", session.accessToken);
  if (!businessResponse.ok) throw new Error("Could not load the SGE business.");
  const business = rows(await businessResponse.json().catch(() => [])).find((candidate) => candidate.id === businessId);
  return [{
    id: businessId,
    name: typeof business?.name === "string" ? business.name : "Shree Ganesh Enterprises",
    role: typeof membership.role === "string" ? membership.role : "member",
    permissions: Array.isArray(membership.permissions) ? membership.permissions.filter((value): value is string => typeof value === "string") : [],
  }];
}
