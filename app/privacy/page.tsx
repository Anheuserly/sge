export const metadata = {
  title: "Privacy Policy | SGE Platform & AMC MEP 24x7 Mobile App",
  description: "Comprehensive Privacy Policy for Shree Ganesh Enterprises (SGE) web platform and AMC MEP 24x7 mobile applications on Google Play Store and Apple App Store.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '900px', lineHeight: 1.8, color: '#334155' }}>
      <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Legal &amp; Compliance</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
          Effective Date: September 14, 2026 | Last Updated: September 14, 2026 | Governing Platforms: SGE Web, AMC MEP 24x7 (Android / iOS)
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>1. Introduction &amp; Scope</h2>
          <p>
            Shree Ganesh Enterprises ("SGE", "we", "us", or "our") operates the SGE web platform (https://sge.org.in) and the <strong>AMC MEP 24x7</strong> mobile applications distributed via the <strong>Apple App Store</strong> (Bundle ID / App ID: 6792257571) and the <strong>Google Play Store</strong> (Package: <code>com.mepsge.amcsge</code>). This Privacy Policy applies to all users, clients, facility managers, enterprise partners, and field service technicians accessing our services.
          </p>
          <p>
            We are committed to maintaining the highest standards of data integrity, confidentiality, and regulatory compliance under applicable privacy laws, including the Indian Digital Personal Data Protection Act, 2023 (DPDP), the Information Technology Act, 2000, and standard mobile distribution guidelines enforced by Apple Inc. and Google LLC.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>2. Information We Collect</h2>
          <p>We collect only the minimum necessary information required to deliver mission-critical MEP engineering, facility operations, and automated Annual Maintenance Contract (AMC) dispatch services:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Account &amp; Identity Data:</strong> Full name, verified mobile phone number, official corporate email address, organization name, and assigned facility address.</li>
            <li><strong>Infrastructure &amp; Asset Data:</strong> Equipment serial numbers, HVAC/chiller models, fire suppression layout drawings, piping schematics, maintenance histories, and service ticket logs.</li>
            <li><strong>Device &amp; App Diagnostics:</strong> IP address, device model, operating system version, unique device identifiers, crash analytics, latency logs, and network connection status.</li>
            <li><strong>Transaction &amp; Billing Data:</strong> Payment transaction reference IDs, quotation authorizations, and GSTIN/tax identification numbers. (Note: Card numbers and banking credentials are processed directly through PCI-DSS certified gateways and never stored on our servers).</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>3. Mobile Device Permissions (App Store &amp; Play Store Compliance)</h2>
          <p>When running the <strong>AMC MEP 24x7</strong> mobile application, the following system permissions may be requested with clear runtime prompts:</p>
          <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <strong>Camera &amp; Photo Gallery:</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Required solely to enable clients and technicians to capture and upload photographic evidence of mechanical breakdowns, pipeline leakages, fire safety gauge readings, and completed service inspection sheets.</p>
            </div>
            <div>
              <strong>Location Services (Precise &amp; Coarse):</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Used to identify client facility locations for emergency technician dispatch, verify engineer on-site arrival during maintenance SLAs, and prevent fraudulent check-ins.</p>
            </div>
            <div>
              <strong>Push Notifications:</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Delivers critical, real-time alerts regarding AMC emergency tickets, technician assignment, scheduled preventive maintenance visits, and safety compliance certificate expiries.</p>
            </div>
            <div>
              <strong>Storage / Document Access:</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Enables downloading and caching of official AMC contracts, tax invoices, service audit PDFs, and compliance certifications locally on your device.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>4. Purpose and Legal Basis for Processing</h2>
          <p>Your information is processed under lawful bases, including contractual necessity and legitimate business interest:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>To dispatch certified MEP technicians and execute preventive maintenance schedules.</li>
            <li>To manage transparent ticketing, real-time status tracking, and digital service sign-offs.</li>
            <li>To comply with statutory fire safety codes, National Building Code (NBC) standards, and audit records.</li>
            <li>To provide secure customer support, account recovery, and multi-factor authentication (OTP verification).</li>
            <li>To analyze platform uptime, optimize mobile app reliability, and debug software anomalies.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>5. Third-Party Disclosures &amp; Service Providers</h2>
          <p>
            <strong>We do not sell, rent, or trade your personal data to any third parties or advertisers.</strong> Data is shared strictly on a need-to-know basis with vetted infrastructure providers:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Cloud Infrastructure:</strong> High-security PostgreSQL database instances and Cloudflare edge networks configured with strict data residency controls.</li>
            <li><strong>Push Notification Gateways:</strong> Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM) for mobile alert delivery.</li>
            <li><strong>Statutory Authorities:</strong> Regulatory or government law enforcement bodies only when strictly mandated by applicable laws or court orders.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>6. Data Security &amp; Retention</h2>
          <p>
            All network communication across the web and mobile app is encrypted in transit using <strong>Transport Layer Security (TLS 1.3)</strong>. Stored databases utilize <strong>AES-256 bit encryption at rest</strong> with role-based access control (RBAC). 
          </p>
          <p>
            We retain your account data for as long as your organization maintains an active AMC contract or account with us. Service records and regulatory compliance documentation are retained for a minimum statutory period of 5 years to fulfill building audit requirements.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>7. Account Deletion &amp; Data Erasure (Apple &amp; Google Requirement)</h2>
          <p>
            In strict compliance with Apple App Store Guideline 5.1.1 and Google Play Data Safety policies, users have the absolute right to permanently delete their account and associated personal data at any time:
          </p>
          <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
            <h4 style={{ color: '#9f1239', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>How to Delete Your Account:</h4>
            <ol style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#881337' }}>
              <li><strong>Inside the Mobile App:</strong> Open AMC MEP 24x7 &rarr; Navigate to <em>Profile / Settings</em> &rarr; Tap <em>Security</em> &rarr; Select <strong>Delete Account &amp; Data</strong> and confirm via OTP.</li>
              <li><strong>Online / Support Request:</strong> You can submit a deletion request directly by visiting our <a href="/help/account-recovery" style={{ color: '#9f1239', fontWeight: 'bold', textDecoration: 'underline' }}>Account Portal</a> or emailing <code>support@sge.org.in</code> with the subject "Account Deletion Request".</li>
            </ol>
            <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '0.9rem', color: '#9f1239' }}>
              Upon confirmation, all personally identifiable information, login credentials, and personal profiles are purged from our live databases within 30 business days.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>8. Your Rights &amp; Choices</h2>
          <p>Under governing data privacy frameworks, you retain the following rights:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Right to Access:</strong> Request a digital copy of all personal records we hold regarding your account.</li>
            <li><strong>Right to Rectification:</strong> Update inaccurate contact details or company personnel assignments directly in your profile.</li>
            <li><strong>Right to Restrict or Withdraw Consent:</strong> Revoke app permissions (Camera, Location, Notifications) at any time through your iOS or Android system settings.</li>
            <li><strong>Right to Grievance Redressal:</strong> Contact our designated Grievance Officer regarding any privacy concern.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>9. Policy Updates</h2>
          <p>
            We may periodically update this Privacy Policy to reflect advancements in technology, platform enhancements, or evolving legal frameworks. When material amendments occur, we will notify registered users via in-app push notification or banner update prior to implementation.
          </p>
        </section>

        <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>10. Contact Us &amp; Grievance Redressal</h2>
          <p>For any inquiries regarding data protection, permissions, or deletion requests, please contact our Compliance Team:</p>
          <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--navy)' }}>Shree Ganesh Enterprises (SGE) — Data Protection Office</p>
            <p style={{ margin: '0.25rem 0' }}>App Support: AMC MEP 24x7 Operations Division</p>
            <p style={{ margin: '0.25rem 0' }}>Official Email: <a href="mailto:support@sge.org.in" style={{ color: 'var(--brand)', fontWeight: 600 }}>support@sge.org.in</a></p>
            <p style={{ margin: '0.25rem 0' }}>Website: <a href="https://sge.org.in" style={{ color: 'var(--brand)' }}>https://sge.org.in</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}
