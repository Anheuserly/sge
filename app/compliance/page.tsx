import { complianceContent } from "@/lib/content";

export const metadata = { 
  title: "Compliance | SGE Platform",
  description: "Statutory MEP engineering and fire safety compliance frameworks adhering to NBC 2016 and local authorities.",
};

export default function CompliancePage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '880px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
        {complianceContent.title}
      </h1>
      <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2.5rem' }}>
        {complianceContent.subtitle}
      </p>

      <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
          {complianceContent.description}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {complianceContent.sections.map((section, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 700 }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
