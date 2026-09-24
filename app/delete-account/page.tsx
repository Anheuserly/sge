import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account | SGE",
  description:
    "How to permanently delete your AMC MEP 24x7 sign-in account and remove authentication access.",
};

export default function DeleteAccountPage() {
  return (
    <main className="container" style={{ maxWidth: "820px", padding: "4rem 0 5rem" }}>
      <span className="eyebrow">Account controls</span>
      <h1>Delete account</h1>
      <p className="lead" style={{ maxWidth: "700px" }}>
        Delete your AMC MEP 24x7 sign-in account directly from the mobile app.
        This removes your authentication access without deleting organisation-owned
        business and operational records.
      </p>
      <p className="muted" style={{ maxWidth: "700px" }}>
        AMC MEP 24x7 is operated by S.S Engineers &amp; Associates.
      </p>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#fff1f2",
          border: "1px solid #fecdd3",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "1.35rem", color: "#881337" }}>What deletion removes</h2>
        <ul style={{ color: "#881337" }}>
          <li>Your password and other authentication credentials.</li>
          <li>Active sessions, linked social sign-ins, and password-reset tokens.</li>
          <li>Registered device tokens used for account notifications.</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.35rem" }}>Delete in the app</h2>
        <ol style={{ paddingLeft: "1.25rem" }}>
          <li>Open AMC MEP 24x7 and sign in to the account you want to remove.</li>
          <li>Open <strong>Profile</strong>, then <strong>Account Settings</strong> or <strong>Privacy &amp; Security</strong>.</li>
          <li>Select <strong>Delete Account</strong> and complete the signed-in confirmation.</li>
        </ol>
      </section>

      <section style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.35rem" }}>What remains</h2>
        <p className="muted">
          A sign-in account deletion does not remove business profiles, listings,
          channels, service history, invoices, compliance reports, or other
          organisation-owned records. Those records remain available to other
          authorised business members and may be retained for legal, tax, and
          safety-compliance obligations.
        </p>
      </section>

      <section style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface-alt)", border: "1px solid var(--line)", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.35rem" }}>Data handling and retention</h2>
        <p className="muted">
          An app-confirmed request removes the account&apos;s login credential, active
          sessions, linked OAuth identities, password-reset records, and device
          notification tokens immediately. Business profiles, listings, channels,
          service requests, invoices, maintenance reports, and compliance records
          are organisation-owned records. They are retained for five years, or
          longer when required for legal, tax, accounting, or safety-compliance
          obligations.
        </p>
        <p className="muted">
          The app does not currently offer a separate request to delete selected
          data while keeping an account active.
        </p>
      </section>

      <section style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface-alt)", border: "1px solid var(--line)", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.35rem" }}>Need help?</h2>
        <p className="muted">
          If you cannot access the app, email <a href="mailto:admin@amcmep.in" style={{ color: "var(--brand)", fontWeight: 700 }}>admin@amcmep.in</a> from your registered email address and include your registered phone number for identity verification. Email requests are completed within 30 days after verification.
        </p>
        <Link href="/privacy" className="button ghost" style={{ marginTop: "0.5rem" }}>
          Read the privacy policy
        </Link>
      </section>
    </main>
  );
}
