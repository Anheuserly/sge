export const metadata = {
  title: "Careers | Join the SGE Engineering & Technology Platform",
  description: "Explore career opportunities in MEP engineering, software development, fire safety systems, and facility management at Shree Ganesh Enterprises.",
};

const openRoles = [
  {
    title: "Senior MEP Project Engineer",
    department: "Engineering & Field Execution",
    location: "Delhi NCR / Pan-India Sites",
    type: "Full-Time",
    experience: "5+ Years",
    summary: "Lead complex MEP installation projects, supervise contractor drawings, oversee HVAC chiller plants, and execute high-capacity electrical substations.",
    requirements: [
      "B.Tech / Diploma in Mechanical or Electrical Engineering",
      "In-depth knowledge of NBC 2016, ASHRAE, and NFPA standards",
      "Experience executing commercial hospital or high-rise facility projects",
      "Proficiency in AutoCAD and BIM modeling tools"
    ]
  },
  {
    title: "Mobile App Engineer (Flutter / Dart)",
    department: "Digital Product & Software",
    location: "Hybrid / New Delhi",
    type: "Full-Time",
    experience: "3+ Years",
    summary: "Build and scale the AMC MEP 24x7 mobile application across iOS and Android, designing offline-first field synchronization and real-time dispatch systems.",
    requirements: [
      "Proven production Flutter / Dart app development experience",
      "Expertise in RESTful APIs, WebSockets, and state management (Bloc / Provider)",
      "Experience integrating background location telemetry & push notifications",
      "Track record publishing apps to Apple App Store & Google Play Store"
    ]
  },
  {
    title: "Certified Fire Protection & Safety Auditor",
    department: "Safety & Statutory Compliance",
    location: "New Delhi (Travel Required)",
    type: "Full-Time",
    experience: "4+ Years",
    summary: "Conduct rigorous fire safety audits, test hydrants, smoke alarms, and deluge sprinkler systems, and draft official Fire NOC compliance dossiers.",
    requirements: [
      "Certification in Fire & Safety Engineering (DIFS / NEBOSH preferred)",
      "Hands-on experience with addressable fire alarm panels and gas suppression",
      "Knowledge of local Delhi Fire Services (DFS) guidelines and bye-laws",
      "Strong client reporting and executive presentation capabilities"
    ]
  },
  {
    title: "Facility AMC Operations Manager",
    department: "Client Success & Operations",
    location: "New Delhi Headquarters",
    type: "Full-Time",
    experience: "3+ Years",
    summary: "Coordinate preventive maintenance schedules, monitor field technician SLAs, oversee ticketing escalations, and manage enterprise client relationships.",
    requirements: [
      "Experience managing facility maintenance operations or technical helpdesk",
      "Familiarity with digital CAFM / CMMS / AMC software platforms",
      "Exceptional communication and crisis management skills",
      "Strong analytical ability to interpret SLA turnaround metrics"
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          Shape the Future of Infrastructure
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Work With Us at SGE
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          We are blending traditional mechanical &amp; electrical excellence with modern digital software. Join our elite engineering and product team.
        </p>
      </div>

      {/* Culture Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(200, 24, 29, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.25rem' }}>
            ⚡
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Innovation First</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Modernize critical building systems with cutting-edge digital monitoring, automated ticketing, and cloud dispatching.
          </p>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(200, 24, 29, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.25rem' }}>
            🏛️
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Elite Projects</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Work on landmark infrastructure projects with leaders like Adani, L&amp;T, Delhi Metro, and prestigious government institutions.
          </p>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(200, 24, 29, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.25rem' }}>
            📈
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Rapid Career Growth</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Direct mentorship from veteran industry directors, ongoing technical certifications, and competitive compensation.
          </p>
        </div>
      </div>

      {/* Open Roles Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
          Current Open Positions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {openRoles.map((role, idx) => (
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
                  href={`mailto:careers@sge.org.in?subject=Application: ${encodeURIComponent(role.title)}`}
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
          href="mailto:careers@sge.org.in?subject=General Application - SGE Platform"
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
          Email CV to careers@sge.org.in
        </a>
      </div>
    </main>
  );
}
