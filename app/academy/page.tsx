export const metadata = {
  title: "Anil Saini Fire Academy | Fire Safety Education & Practical Training",
  description: "Official educational hub of Anil Saini Fire Academy. Practical fire safety demonstrations, life safety protocols, equipment handling, and NBC standards tutorials.",
};

const modules = [
  {
    title: "Fire Extinguisher Selection & Operation",
    description: "Detailed video demonstrations on operating Water CO2, Mechanical Foam, ABC Dry Chemical Powder, and Clean Agent extinguishers according to IS 2190 standards.",
    videoTopic: "IS 2190 Practical Drill"
  },
  {
    title: "Addressable Fire Alarm Panels & Sensors",
    description: "Step-by-step masterclasses on detector loop wiring, smoke sensor sensitivity testing, manual call point (MCP) activations, and hooter control modules.",
    videoTopic: "Fire Alarm Troubleshooting"
  },
  {
    title: "Hydrant Networks, Landing Valves & Riser Pumps",
    description: "Real-world site walkthroughs covering fire main pressure maintenance, jockey pump cut-in/cut-out settings, diesel engine testing, and branch pipe nozzle handling.",
    videoTopic: "Hydrant Flow & Pressure Testing"
  },
  {
    title: "Automatic Sprinkler Deluge & Gas Suppression",
    description: "In-depth tutorials explaining quartzoid bulb temperature ratings, alarm check valves, pre-action systems, and FM-200 / Novec clean agent cylinder inspections.",
    videoTopic: "Sprinkler & Suppression Systems"
  }
];

export default function AcademyPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ backgroundColor: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          Official YouTube Education Channel
        </span>
        <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Anil Saini Fire Academy
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Dedicated to spreading life-saving fire protection knowledge. Watch comprehensive, hands-on tutorials on firefighting equipment, statutory compliance, and emergency drill procedures.
        </p>

        <a 
          href="https://www.youtube.com/@AnilSainiFireAcamedy" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.1rem 2.5rem',
            backgroundColor: '#dc2626',
            color: 'white',
            fontWeight: 800,
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 4px 16px rgba(220, 38, 38, 0.35)',
            transition: 'transform 0.2s'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Visit Channel: @AnilSainiFireAcamedy
        </a>
      </div>

      {/* Featured Video Box */}
      <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', padding: '3.5rem 3rem', color: 'white', marginBottom: '4.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#f87171', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Practical Ground-Zero Training
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0.75rem 0 1rem', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
            Demystifying Life Safety for Facility Managers &amp; Engineers
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Unlike theoretical textbooks, the Anil Saini Fire Academy walks viewers through real plant rooms, live fire pump houses, addressable control panels, and fire drill executions. Whether you are an MEP engineer or a building owner, these tutorials prepare your facility for actual emergencies and government audits.
          </p>
          <a
            href="https://www.youtube.com/@AnilSainiFireAcamedy"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2rem',
              backgroundColor: 'white',
              color: 'var(--navy)',
              borderRadius: '8px',
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            Explore Playlist on YouTube &rarr;
          </a>
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '2rem', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'white', marginBottom: '1.25rem' }}>Popular Tutorial Series:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2rem' }}>▶</span>
              <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Fire NOC Inspection Checklist for Delhi NCR Buildings</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2rem' }}>▶</span>
              <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Main Pump, Jockey Pump &amp; Diesel Engine Auto-Start Setup</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2rem' }}>▶</span>
              <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Gas Suppression (FM-200) Server Room Discharges</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: '#dc2626', fontSize: '1.2rem' }}>▶</span>
              <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Smoke Damper Interlocking with Air Handling Units (AHU)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Tutorial Modules */}
      <div>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          Curriculum &amp; Technical Coverage
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {modules.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {item.videoTopic}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: '0.75rem 0' }}>{item.title}</h3>
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
