import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: 'white', paddingTop: '4rem', paddingBottom: '2.5rem', borderTop: '1px solid #1e293b' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'start' }}>
        
        {/* Brand - Logo only as requested */}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Link href="/" style={{ display: 'inline-block' }}>
            <Image
              src="/shreeganeshlogo.jpeg"
              alt="SGE Logo"
              width={64}
              height={64}
              style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.15)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            />
          </Link>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Know About Us</Link></li>
            <li><Link href="/team" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Leadership Team</Link></li>
            <li><Link href="/careers" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Careers</Link></li>
          </ul>
        </div>

        {/* Platform Solutions */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>Platform</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Pricing &amp; Plans</Link></li>
            <li><Link href="/partner" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Become a Partner</Link></li>
            <li><Link href="/clients" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Success Stories</Link></li>
          </ul>
        </div>

        {/* Education & Media */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>Education</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/academy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Anil Saini Fire Academy</Link></li>
            <li><a href="https://www.youtube.com/@AnilSainiFireAcamedy" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Fire Safety Tutorials</a></li>
            <li><Link href="/compliance" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Compliance Norms</Link></li>
            <li><Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Industry Insights</Link></li>
          </ul>
        </div>

        {/* Support & Help */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/help" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Help Center</Link></li>
            <li><Link href="/help/account-recovery" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Account Recovery</Link></li>
            <li><Link href="/help/password-reset" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Password Reset</Link></li>
            <li><Link href="/help/complaints" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>File a Complaint</Link></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>Connect With Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Twitter (X)</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Instagram</a></li>
            <li><a href="https://youtube.com/@AnilSainiFireAcamedy" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container" style={{ borderTop: '1px solid #1e293b', paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/privacy" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
