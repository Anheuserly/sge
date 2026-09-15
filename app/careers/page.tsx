import { careersContent } from "@/lib/content";

export const metadata = {
  title: "Careers | Join the SGE Engineering & Technology Platform",
  description: "Explore career opportunities in MEP engineering, software development, fire safety systems, and facility management at Shree Ganesh Enterprises.",
};

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          {careersContent.badge}
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          {careersContent.title}
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          {careersContent.subtitle}
        </p>
      </div>

      {/* Culture Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {careersContent.perks.map((perk, pIdx) => (
          <div key={pIdx} style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(200, 24, 29, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.25rem' }}>
              {perk.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>{perk.title}</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {perk.description}
            </p>
          </div>
        ))}
      </div>

      {/* Open Roles Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
          {careersContent.openRolesHeading}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {careersContent.roles.map((role, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 0.5rem 0' }}>{role.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#64748b' }}>
                    <span style={{ fontWeight: 600, color: 'var(--brand)' }}>{role.department}</span>
                    <span>•</span>
                    <span>📍 {role.location}</span>
                    <span>•</span>
                    <span>💼 {role.type}</span>
                    <span>•</span>
                    <span>⏳ {role.experience}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${careersContent.contactEmail}?subject=Application: ${encodeURIComponent(role.title)}`}
                  style={{
                    padding: '0.75rem 1.75rem',
                    backgroundColor: 'var(--navy)',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Apply Now &rarr;
                </a>
              </div>

              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {role.summary}
              </p>

              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                  Key Qualifications:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem' }}>
                  {role.requirements.map((req, rIdx) => (
                    <li key={rIdx} style={{ display: 'flex', alignItems: 'center', color: '#334155', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Application Footer Box */}
      <div style={{ backgroundColor: '#f8fafc', padding: '3.5rem 2.5rem', borderRadius: '20px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>Don't See the Exact Role?</h3>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          We are always excited to meet exceptional engineers, technicians, and digital operators. Send your CV and a brief note about what you build to our talent team.
        </p>
        <a
          href={`mailto:${careersContent.contactEmail}?subject=General Application - SGE Platform`}
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: 'var(--brand)',
            color: 'white',
            fontWeight: 700,
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '1.05rem'
          }}
        >
          Email CV to {careersContent.contactEmail}
        </a>
      </div>
    </main>
  );
}
