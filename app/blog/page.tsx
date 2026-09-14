import Link from "next/link";

export const metadata = {
  title: "Industry Insights & Technical Engineering Blog | SGE Platform",
  description: "Technical articles, fire safety regulatory guides, MEP engineering best practices, and facility maintenance insights from Shree Ganesh Enterprises.",
};

const blogPosts = [
  {
    title: "NBC 2016 Fire Safety Compliance: The Essential Checklist for High-Rise Commercial Facilities",
    category: "Fire Protection",
    date: "September 10, 2026",
    readTime: "7 min read",
    author: "SGE Technical Directorate",
    summary: "A practical guide to fire hydrant pressure calibration, addressable smoke detector spacing, automatic sprinkler deluge valves, and securing your annual Fire NOC without audit penalties.",
    tags: ["NBC 2016", "Fire NOC", "Life Safety"]
  },
  {
    title: "Preventive vs. Reactive HVAC Maintenance: Slashing Chiller Downtime and Energy Bills",
    category: "HVAC & Energy",
    date: "August 28, 2026",
    readTime: "6 min read",
    author: "MEP Operations Division",
    summary: "Why waiting for chiller compressor breakdown costs 4x more than quarterly condenser descaling, refrigerant leak detection, and micro-vibration analysis.",
    tags: ["HVAC", "Chillers", "Energy Efficiency"]
  },
  {
    title: "The Death of Paper AMC Logs: How Digital App Dispatching Guarantees Under-4-Hour SLAs",
    category: "Digital Transformation",
    date: "August 15, 2026",
    readTime: "5 min read",
    author: "Platform Product Team",
    summary: "Traditional facility maintenance suffers from lost job sheets, untracked engineer arrivals, and delayed spare parts. Explore how cloud-based ticketing eliminates operational ambiguity.",
    tags: ["Mobile App", "SLA Guarantee", "CAFM"]
  },
  {
    title: "Substation Health & Transformer Oil Testing: Preventing Catastrophic Electrical Outages",
    category: "Electrical Engineering",
    date: "July 30, 2026",
    readTime: "8 min read",
    author: "High-Voltage Systems Group",
    summary: "Understanding Dielectric Dissipation Factor (tan delta), breakdown voltage (BDV) limits, and Dissolved Gas Analysis (DGA) for dry and oil-cooled industrial transformers.",
    tags: ["Electrical", "Transformers", "Substation"]
  },
  {
    title: "Sewage & Water Treatment (STP / WTP) Protocols: Maintaining Biological Flora in Commercial Real Estate",
    category: "Plumbing & Public Health",
    date: "July 12, 2026",
    readTime: "6 min read",
    author: "Water Systems Team",
    summary: "Best practices for Maintaining MLSS levels, air blower diffuser calibration, dosing pump maintenance, and meeting pollution control board (SPCB) discharge standards.",
    tags: ["STP", "WTP", "Plumbing"]
  }
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          Technical Knowledge Base
        </span>
        <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Industry Insights &amp; Engineering Guides
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          Practical engineering knowledge, statutory compliance frameworks, and digital facility management trends directly from veteran MEP practitioners.
        </p>
      </div>

      {/* Featured Article */}
      <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', padding: '3.5rem 3rem', color: 'white', marginBottom: '4rem', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.2)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ backgroundColor: 'var(--brand)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
            Featured Guide
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{blogPosts[0].date} • {blogPosts[0].readTime}</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', margin: '0 0 1.25rem 0', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
          {blogPosts[0].title}
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '850px' }}>
          {blogPosts[0].summary}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>By {blogPosts[0].author}</span>
          <Link
            href="/academy"
            style={{
              padding: '0.75rem 1.75rem',
              backgroundColor: 'white',
              color: 'var(--navy)',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            Read Full Checklist &rarr;
          </Link>
        </div>
      </div>

      {/* Grid of Articles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {blogPosts.slice(1).map((post, idx) => (
          <article
            key={idx}
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {post.category}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{post.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', margin: '0 0 1rem 0', lineHeight: 1.4, fontWeight: 700, flex: '0 0 auto' }}>
              {post.title}
            </h3>

            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', flex: 1 }}>
              {post.summary}
            </p>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                    #{tag}
                  </span>
                ))}
              </div>
              <Link href="/academy" style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                Learn &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
