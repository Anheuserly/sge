import Image from "next/image";
import { teamMembers } from "@/lib/content";

export const metadata = {
  title: "Our Team & Key Personnel | Shree Ganesh Enterprises (SGE)",
  description: "Meet the leadership, architectural, engineering, and digital media team driving Shree Ganesh Enterprises.",
};

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-12" style={{ maxWidth: '1160px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.9rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
          Our Team
        </span>
        <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          People Behind Shree Ganesh Enterprises
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
          Dedicated architects, project leads, system engineers, and media professionals working cohesively to deliver dependable MEP and digital facility services.
        </p>
      </div>

      {/* Team Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'white',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {/* Real Portrait Image Container */}
            <div style={{ position: 'relative', width: '100%', height: '260px', backgroundColor: '#09131f' }}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top, rgba(9,19,31,0.85), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fca5a5', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {member.roleCategory}
                </span>
              </div>
            </div>

            {/* Info Body */}
            <div style={{ padding: '1.15rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', margin: '0 0 0.25rem 0', fontWeight: 800 }}>
                {member.name}
              </h3>
              
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand)', display: 'block', lineHeight: 1.35 }}>
                  {member.designation}
                </span>
              </div>

              <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.5, flex: 1, margin: '0 0 1rem 0' }}>
                {member.bio}
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.65rem' }}>
                <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>
                  Key Focus
                </span>
                <span style={{ fontSize: '0.78rem', color: '#334155', fontWeight: 600, display: 'block', lineHeight: 1.35 }}>
                  {member.focus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
