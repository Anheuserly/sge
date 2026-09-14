import Link from "next/link";

export const metadata = {
  title: "Know About Us | Shree Ganesh Enterprises (SGE)",
  description: "Learn about Shree Ganesh Enterprises (SGE) — three decades of MEP engineering excellence, trusted public and private facility contracts, and next-generation AMC software.",
};

const pillars = [
  {
    title: "Mechanical & HVAC Excellence",
    description: "Design, installation, balancing, and chiller overhauling for high-tonnage industrial, corporate, and healthcare complexes.",
    metric: "25+ Years Experience"
  },
  {
    title: "Fire Protection & Life Safety",
    description: "Comprehensive hydrant networks, addressable alarm integration, FM-200 gas suppression, and statutory Fire NOC compliance.",
    metric: "100% Audit Track Record"
  },
  {
    title: "Substations & High Voltage",
    description: "HT/LT switchgear panels, power transformers, synchronized DG sets, and uninterruptible commercial power distribution.",
    metric: "500+ Facilities Powered"
  },
  {
    title: "Plumbing & Public Health",
    description: "Hydro-pneumatic booster pumping systems, heavy drainage risers, water treatment (WTP), and biological sewage plants (STP).",
    metric: "Zero-Downtime Guarantee"
  }
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1100px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          Know About Us
        </span>
        <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', lineHeight: 1.2 }}>
          Powering India's Critical Infrastructure Since 1997
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.25rem', maxWidth: '780px', margin: '0 auto', lineHeight: 1.7 }}>
          Shree Ganesh Enterprises (SGE) is an industry-benchmark MEP engineering contracting and facility management firm, pioneering the transition from manual repairs to intelligent, predictive digital AMCs.
        </p>
      </div>

      {/* Corporate Overview Story */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Engineering Integrity Built on Real-World Field Execution
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Founded in 1997, SGE began with a dedicated focus on mechanical contracting, heavy electrical distribution, and life-critical fire safety systems. Over three decades, we have served as the trusted MEP partner for premier governmental corporations, defense establishments, hospital super-specialties, and multinational corporations.
          </p>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Today, SGE bridges deep mechanical discipline with software innovation. Through our flagship <strong>AMC MEP 24x7</strong> digital platform, we provide asset managers with real-time equipment telemetry, instant technician dispatching, transparent SLA enforcement, and statutory safety audit compliance.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link
              href="/pricing"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: 'var(--brand)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Explore AMC Plans
            </Link>
            <Link
              href="/partner"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#f1f5f9',
                color: 'var(--navy)',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Partner Ecosystem
            </Link>
          </div>
        </div>

        {/* Highlight Stats Card */}
        <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--brand)' }}>28+</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0 0.5rem 0' }}>Years in Operation</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Uninterrupted MEP engineering contracting across north and central India.</p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8' }}>1,200+</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0 0.5rem 0' }}>Completed Projects</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Hospitals, data centers, airports, metro stations, and corporate headquarters.</p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#4ade80' }}>&lt; 4 Hr</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0 0.5rem 0' }}>Average Critical SLA</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Guaranteed emergency on-site engineer deployment backed by our mobile dispatch app.</p>
          </div>
        </div>
      </div>

      {/* Core Engineering Disciplines */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          Core Engineering Disciplines
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {pillars.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '2.25rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.metric}
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', margin: '0.75rem 0' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
