import Link from "next/link";
import Image from "next/image";
import { partnerContent, appLinks } from "@/lib/content";

export const metadata = { 
  title: "Partner Verification & Onboarding | AMC MEP 24x7 One App",
  description: "Join the verified contractor network for AMC MEP 24x7. Access commercial leads, manage field staff, and automate dispatch."
};

export default function PartnerPage() {
  return (
    <main className="container mx-auto px-4 py-12" style={{ maxWidth: '960px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
          {partnerContent.badge}
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
          {partnerContent.title}
        </h1>
        <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
          {partnerContent.subtitle}
        </p>
      </div>

      {/* Two-Column Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '3.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--navy)', fontWeight: 800 }}>
            {partnerContent.overview.heading}
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {partnerContent.overview.p1}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {partnerContent.overview.highlights.map((h, hIdx) => (
              <div key={hIdx} style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 800, color: h.color, fontSize: '1.1rem' }}>{h.label}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{h.detail}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Link href={partnerContent.overview.ctaPricingLink} style={{ padding: '0.65rem 1.25rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
              {partnerContent.overview.ctaPricingText}
            </Link>
            <Link href={partnerContent.overview.ctaHelpLink} style={{ padding: '0.65rem 1.25rem', backgroundColor: '#f1f5f9', color: 'var(--navy)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
              {partnerContent.overview.ctaHelpText}
            </Link>
          </div>
        </div>

        {/* Download App Box */}
        <div style={{ backgroundColor: '#09131f', padding: '2rem', borderRadius: '16px', color: 'white', textAlign: 'center', border: '1px solid #1e293b' }}>
          <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {partnerContent.appBox.tag}
          </span>
          <h3 style={{ fontSize: '1.25rem', color: 'white', margin: '0.5rem 0 0.75rem' }}>
            {partnerContent.appBox.title}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: '320px', margin: '0 auto 1.5rem' }}>
            {partnerContent.appBox.description}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'center' }}>
            <Link href={appLinks.appStore} target="_blank" rel="noreferrer">
              <Image src="/badges/app-store.svg" alt="Download on App Store" width={145} height={44} />
            </Link>
            <Link href={appLinks.playStore} target="_blank" rel="noreferrer">
              <Image src="/badges/google-play.svg" alt="Download on Google Play" width={145} height={44} />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Steps Onboarding Process */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--navy)', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
          {partnerContent.stepsHeading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {partnerContent.steps.map((s, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand)', marginBottom: '0.35rem' }}>{s.step}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)', margin: '0 0 0.35rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--navy)', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
          {partnerContent.benefitsHeading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {partnerContent.benefits.map((b, bIdx) => (
            <div key={bIdx} style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                ✓ {b.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
