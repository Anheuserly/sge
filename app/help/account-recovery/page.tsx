import { helpContent } from "@/lib/content";

export const metadata = {
  title: "Account Recovery | SGE Platform Support",
};

export default function AccountRecovery() {
  const recovery = helpContent.accountRecovery;

  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '600px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        {recovery.title}
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
        {recovery.description}
      </p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Email Address or Phone Number</label>
          <input type="text" placeholder={recovery.emailPlaceholder} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Company Name (Optional)</label>
          <input type="text" placeholder={recovery.companyPlaceholder} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        <button type="button" style={{ padding: '1rem', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.1rem', marginTop: '1rem' }}>
          {recovery.buttonText}
        </button>
      </form>
    </main>
  );
}
