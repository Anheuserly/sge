import Image from "next/image";

export const metadata = {
  title: "Executive Leadership & Technical Board | SGE Platform",
  description: "Meet the seasoned engineers, technology leaders, and facility directors steering Shree Ganesh Enterprises.",
};

const leaders = [
  {
    name: "Vikramaditya S.",
    designation: "Managing Director & Chief Executive Officer",
    qualification: "B.Tech (Mechanical), M.Tech (Thermal & Fluids)",
    experience: "26+ Years Industry Experience",
    bio: "Pioneered industrial MEP contracting standards across North India, directing multi-crore public sector tenders and large-scale hospital facility systems.",
    specialization: "Heavy HVAC Infrastructure, Institutional Contracts, Executive Direction",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    name: "Dr. Sunita Rao",
    designation: "Chief Technical Officer & Head of Safety Compliance",
    qualification: "Ph.D. in Fire Protection Engineering, Certified NEBOSH / NFPA",
    experience: "19+ Years Engineering Experience",
    bio: "Directs statutory fire safety architecture, automatic deluge suppression networks, and regulatory liaison with Delhi Fire Services (DFS) and state municipal authorities.",
    specialization: "National Building Code (NBC 2016), Life Safety Systems, Statutory NOC Audits",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    name: "Karan Singhal",
    designation: "VP of Digital Engineering & Software Platform",
    qualification: "B.Tech (Computer Science), Former Lead Systems Architect",
    experience: "14+ Years Technology Experience",
    bio: "Architect of the AMC MEP 24x7 cloud platform and mobile dispatch ecosystem, bridging physical mechanical assets with real-time telemetry and automated ticket SLAs.",
    specialization: "Distributed Cloud Infrastructure, Real-Time Field Telemetry, Enterprise CAFM Systems",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    name: "Arjun Verma",
    designation: "Head of Substation & Electrical Operations",
    qualification: "B.E. (Electrical & Electronics), Licensed Electrical Inspector",
    experience: "21+ Years Power Systems Experience",
    bio: "Oversees 11kV/33kV substation erection, HT/LT breaker testing, synchronizing power panel banks, and high-reliability diesel generator failover operations.",
    specialization: "HT Switchgear, Transformer DGA Analysis, Industrial Power Factor Correction",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    name: "Meenakshi Sundaram",
    designation: "Director of Field Operations & Client SLA Delivery",
    qualification: "B.E. (Mechanical), PMP Certified Operations Specialist",
    experience: "16+ Years Facility Logistics",
    bio: "Commands our pan-regional team of 150+ certified service engineers, enforcing strict under-4-hour emergency response times and preventive maintenance quality benchmarks.",
    specialization: "Service Level Agreement (SLA) Logistics, Field Force Orchestration, Quality Assurance",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    name: "Rameshwar Prasad",
    designation: "Chief Public Health & Water Systems Specialist",
    qualification: "Diploma in Public Health Engineering (PHE)",
    experience: "24+ Years Water Infrastructure",
    bio: "Specializes in multi-stage water treatment plants (WTP), reverse osmosis filtration, biological sewage treatment plants (STP), and computerized hydro-pneumatic pumping stations.",
    specialization: "Hydro-Pneumatic Water Networks, Commercial Drainage, Pollution Control Compliance",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600"
  }
];

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1200px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          Leadership &amp; Technical Directorate
        </span>
        <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Engineering Leadership With Proven Pedigree
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
          Our executive and engineering directors combine over a century of cumulative technical field mastery, managing India's most complex building infrastructures.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
        {leaders.map((person, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '320px', backgroundColor: '#f1f5f9' }}>
              <Image
                src={person.imageUrl}
                alt={person.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {person.experience}
              </span>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy)', margin: '0.35rem 0 0.25rem 0', fontWeight: 800 }}>
                {person.name}
              </h3>
              <p style={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {person.designation}
              </p>
              
              <p style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                🎓 {person.qualification}
              </p>

              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                {person.bio}
              </p>

              <div style={{ backgroundColor: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #edf2f7' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                  Core Focus
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>
                  {person.specialization}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
