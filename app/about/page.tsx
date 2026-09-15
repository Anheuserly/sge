import Link from "next/link";
import { aboutContent } from "@/lib/content";

export const metadata = {
  title: "Know About Us | Shree Ganesh Enterprises (SGE)",
  description: "Learn about Shree Ganesh Enterprises (SGE) — three decades of MEP engineering excellence, trusted public and private facility contracts, and next-generation AMC software.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12" style={{ maxWidth: '950px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
          {aboutContent.badge}
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', lineHeight: 1.2 }}>
          {aboutContent.title}
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
          {aboutContent.subtitle}
        </p>
      </div>

      {/* Corporate Overview Story */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            {aboutContent.story.heading}
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {aboutContent.story.p1}
          </p>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {aboutContent.story.p2}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href={aboutContent.story.ctaExploreLink}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--brand)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              {aboutContent.story.ctaExploreText}
            </Link>
            <Link
              href={aboutContent.story.ctaPartnerLink}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#f1f5f9',
                color: 'var(--navy)',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              {aboutContent.story.ctaPartnerText}
            </Link>
          </div>
        </div>

        {/* Highlight Stats Card */}
        <div style={{ backgroundColor: '#0f172a', borderRadius: '20px', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {aboutContent.stats.map((stat, sIdx) => (
            <div 
              key={sIdx} 
              style={sIdx > 0 ? { borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' } : undefined}
            >
              <span style={{ fontSize: '2.4rem', fontWeight: 900, color: stat.color }}>{stat.value}</span>
              <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0 0.5rem 0' }}>{stat.label}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Engineering Disciplines */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          {aboutContent.pillarsHeading}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {aboutContent.pillars.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.metric}
              </span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: '0.5rem 0' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
