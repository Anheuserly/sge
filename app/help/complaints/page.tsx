export const metadata = {
  title: "File a Complaint | SGE Platform Support",
  description: "File a grievance or service complaint for SGE services.",
};

export default function FileComplaint() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>File a Grievance or Complaint</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
        SGE takes service quality and engineering standards seriously. If you have experienced an issue with our AMC deployment, platform, or engineers, please detail it below. Our escalation team will review it within 24 hours.
      </p>
      
      <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Your Name</label>
          <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Business Name</label>
          <input type="text" placeholder="Company Ltd" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>AMC Contract / Ticket ID (Optional)</label>
          <input type="text" placeholder="e.g. TICK-12345" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Complaint Details</label>
          <textarea rows={6} placeholder="Please provide detailed information regarding the issue..." style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <button type="button" style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
            Submit Complaint
          </button>
        </div>
      </form>
    </main>
  );
}
