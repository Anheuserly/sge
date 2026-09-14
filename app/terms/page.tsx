export const metadata = {
  title: "Terms of Service | SGE Platform & AMC MEP 24x7 Mobile App",
  description: "Official Terms of Service governing the use of Shree Ganesh Enterprises (SGE) web platform and AMC MEP 24x7 iOS and Android applications.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '900px', lineHeight: 1.8, color: '#334155' }}>
      <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Legal &amp; Contracts</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginTop: '0.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
          Effective Date: September 14, 2026 | Last Updated: September 14, 2026 | Applicable: SGE Web, AMC MEP 24x7 (iOS &amp; Android)
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you, whether personally or on behalf of an entity ("Client", "User", "You"), and <strong>Shree Ganesh Enterprises</strong> ("SGE", "Company", "we", "our"). These Terms govern your access to and use of the SGE website (https://sge.org.in), the <strong>AMC MEP 24x7</strong> mobile application (available on Apple App Store and Google Play Store), and all associated mechanical, electrical, plumbing, fire safety engineering, and maintenance services.
          </p>
          <p>
            By downloading our application, accessing our portal, or executing a digital service order, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree, you must immediately discontinue use of the platform.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>2. Scope of Services &amp; Platform Role</h2>
          <p>
            SGE delivers integrated digital MEP solutions and facility asset management:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Digital AMC Management:</strong> Transparent scheduling, logging, and dispatch for Annual Maintenance Contracts across HVAC, Fire Fighting, Electrical Substations, Plumbing, and Water Treatment infrastructure.</li>
            <li><strong>24x7 Emergency Helpdesk:</strong> On-demand critical breakdown dispatch with trackable Service Level Agreements (SLAs) through the mobile app.</li>
            <li><strong>Compliance Auditing:</strong> Statutory fire safety testing, NOC audit preparations, and asset lifecycle tracking in accordance with the National Building Code (NBC) of India.</li>
            <li><strong>Marketplace &amp; Parts Procurement:</strong> Verified procurement of industrial engineering spares, certified valves, pumps, and fire suppression accessories.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>3. User Accounts &amp; Security</h2>
          <p>
            To access certain features, including ticket tracking and quotation approvals, you must maintain an authenticated corporate profile:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>You agree to provide accurate, current, and complete organization and contact information during mobile phone OTP or email authentication.</li>
            <li>You are solely responsible for maintaining the confidentiality of your credentials and all activities occurring under your account.</li>
            <li>You must notify SGE immediately at <code>support@sge.org.in</code> if you suspect unauthorized access or compromise of your login session.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>4. Mobile App End-User License Agreement (EULA)</h2>
          <p>
            Subject to your compliance with these Terms, SGE grants you a non-exclusive, non-transferable, revocable limited license to download, install, and use the <strong>AMC MEP 24x7</strong> application on compatible iOS and Android devices owned or controlled by you, strictly for authorized facility management purposes.
          </p>
          <p>You agree not to:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code of the application or backend APIs.</li>
            <li>Circumvent, bypass, or tamper with security or rate-limiting protocols enforced by our Cloudflare edge network.</li>
            <li>Use the platform or its automated booking systems for unlawful, fraudulent, or speculative emergency calls.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>5. Service Level Agreements (SLAs) &amp; Dispatch Terms</h2>
          <p>
            All engineer dispatches and maintenance visits are governed by the contract tier agreed upon in your active AMC schedule:
          </p>
          <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <strong>Emergency Response:</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Critical fire alarm activations or mainline plumbing bursts are prioritized with automated closest-technician dispatch. Expected on-site arrival targets vary based on geographical zone and traffic conditions.</p>
            </div>
            <div>
              <strong>Preventive Maintenance (PPM):</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Scheduled routine check-ups are automatically registered on the app. Clients must provide unhindered, safe physical access to plant rooms, risers, and electrical control panels during pre-arranged inspection windows.</p>
            </div>
            <div>
              <strong>Digital Service Reports:</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>Upon completion of each service visit, the lead technician submits a digital checklist with before/after photos. Client facility managers must digitally verify and sign the report via the mobile application.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>6. Pricing, Invoicing &amp; Payment Terms</h2>
          <p>
            Pricing for AMC contracts, one-off engineering services, and spare components is clearly specified in formal quotations or in-app billing tiers:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>All domestic transactions are denominated in <strong>Indian Rupees (INR)</strong> and subject to applicable Goods and Services Tax (GST). International clients are billed in approved convertible currencies (USD / EUR) with regional compliance.</li>
            <li>Invoices generated via the platform are payable within the net credit period stipulated in your commercial agreement.</li>
            <li>Failure to remit payments within the designated timeframes may result in temporary suspension of automated app dispatch services.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>7. Intellectual Property Rights</h2>
          <p>
            The SGE name, brand logos, mobile software codebases, interactive UI designs, algorithms, and technical schematics published on the platform are the exclusive intellectual property of Shree Ganesh Enterprises and protected by copyright, trademark, and unfair competition laws.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, SGE and its directors, employees, and certified vendor affiliates shall not be liable for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Any indirect, consequential, punitive, or exemplary damages, including loss of business profit or operational downtime.</li>
            <li>Equipment failures resulting from pre-existing structural defects, client unauthorized modifications, or neglect of written safety recommendations.</li>
            <li>Delays or failures in service delivery caused by Acts of God, severe weather, governmental restrictions, utility power grid failure, or civil unrest (Force Majeure).</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>9. Termination &amp; Suspension</h2>
          <p>
            Either party may terminate platform access or active service contracts pursuant to the written notice terms of their master AMC agreement. In addition, SGE reserves the right to immediately suspend or revoke access to users who violate these Terms or engage in hostile conduct toward service personnel.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>10. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms and any contractual disputes arising out of your relationship with SGE shall be governed by and construed in accordance with the laws of <strong>India</strong>. The courts located at New Delhi, India shall have exclusive jurisdiction over any legal proceedings.
          </p>
        </section>

        <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>11. Questions &amp; Legal Notices</h2>
          <p>For inquiries regarding these Terms or formal legal correspondence, please contact:</p>
          <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--navy)' }}>Shree Ganesh Enterprises (SGE) — Legal Operations</p>
            <p style={{ margin: '0.25rem 0' }}>Official Portal: <a href="https://sge.org.in" style={{ color: 'var(--brand)' }}>https://sge.org.in</a></p>
            <p style={{ margin: '0.25rem 0' }}>Support &amp; Inquiries: <a href="mailto:support@sge.org.in" style={{ color: 'var(--brand)', fontWeight: 600 }}>support@sge.org.in</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}
