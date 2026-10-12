"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Sign-in could not be completed.");
      window.location.assign("/workspace");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Sign-in could not be completed.");
    } finally { setLoading(false); }
  }

  return <main className="workspace-login"><section><p className="workspace-eyebrow">Shree Ganesh Enterprises</p><h1>Workforce Workspace</h1><p>Private operations access for attendance, workforce, vendors, and payroll administration.</p></section><form onSubmit={submit} className="workspace-login-form"><h2>Sign in</h2><p>Use your AMC MEP account email and password.</p>{error && <p role="alert" className="workspace-error">{error}</p>}<label>Email address<input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label><button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in to workspace"}</button><a href="/help/account-recovery">Need help with your account?</a></form></main>;
}
