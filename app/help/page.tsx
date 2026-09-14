import Link from "next/link";

export const metadata = {
  title: "Help Center | SGE Platform",
  description: "Get support for the SGE MEP Platform.",
};

export default function HelpCenter() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Help Center</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '3rem' }}>How can we assist you with the SGE Platform today?</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <Link href="/help/account-recovery" style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>Account Recovery</h3>
          <p style={{ color: '#64748b' }}>Regain access to your locked or suspended AMC platform account.</p>
        </Link>

        <Link href="/help/password-reset" style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>Password Reset</h3>
          <p style={{ color: '#64748b' }}>Reset your credentials securely to access your facility dashboard.</p>
        </Link>

        <Link href="/help/complaints" style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>File a Complaint</h3>
          <p style={{ color: '#64748b' }}>Escalate a service issue or file a grievance regarding our engineering services.</p>
        </Link>
        
        <Link href="/help/complaints" style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>Contact Support</h3>
          <p style={{ color: '#64748b' }}>Speak directly with our technical deployment team.</p>
        </Link>
      </div>
    </main>
  );
}
