import { redirect } from "next/navigation";
import { getWorkspaceSession } from "@/lib/workspace-auth";
import { getWorkspaceBusinesses } from "@/lib/workspace-access";
import type { WorkspaceBusiness } from "@/lib/workspace-access";

export default async function WorkspacePage() {
  const session = await getWorkspaceSession();
  if (!session) redirect("/login");
  let businesses: WorkspaceBusiness[] = [];
  let unavailable = false;
  try { businesses = await getWorkspaceBusinesses(session); } catch { unavailable = true; }
  return <main className="workspace-page"><header><div><p className="workspace-eyebrow">Private workspace</p><h1>Welcome, {session.name}</h1><p>Manage Shree Ganesh Enterprises workforce operations.</p></div><form action="/api/auth/logout" method="post"><button type="submit">Sign out</button></form></header>{unavailable ? <section className="workspace-panel"><h2>Workspace access is temporarily unavailable</h2><p>The central account service is not responding. Your SGE session remains protected; try again shortly.</p></section> : businesses.length === 0 ? <section className="workspace-panel"><h2>SGE workspace access is not assigned</h2><p>Your account is signed in, but it does not have an active membership for Shree Ganesh Enterprises. Ask an SGE owner to add your access.</p></section> : <section className="workspace-panel"><h2>Shree Ganesh Enterprises</h2><div className="workspace-businesses">{businesses.map((business) => <article key={business.id}><p className="workspace-eyebrow">{business.role}</p><h3>{business.name}</h3><p>Attendance, workforce, vendors, and payroll will be shown here as each private operations module is released.</p></article>)}</div></section>}</main>;
}
