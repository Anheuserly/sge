import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Become a Partner | SGE Platform" };

export default function PartnerPage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '900px' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
        Become a Partner
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
        Join our growing digital ecosystem of certified vendors, engineers, and facility managers using the AMC MEP 24x7 App.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--navy)' }}>Why Partner with SGE?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The AMC MEP platform digitizes facility management. As a partner, you gain access to our extensive network of commercial and industrial clients requiring immediate service deployments.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--ink)', fontSize: '1.1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--brand)' }}>✓</span> Lead Generation & Automated Dispatch
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--brand)' }}>✓</span> Real-time Ticket Management
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--brand)' }}>✓</span> Centralized Payment & Invoicing
            </li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
           <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1rem' }}>Download the Partner App</h3>
           <p style={{ color: '#64748b', marginBottom: '2rem' }}>
             All partnerships are now managed directly through our digital application. Download the app to register your business and get verified.
           </p>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
             <Link href="https://apps.apple.com/app/amc-mep-24x7-one-app/id6792257571" target="_blank" rel="noreferrer">
               <Image src="/badges/app-store.svg" alt="App Store" width={180} height={54} />
             </Link>
             <Link href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge" target="_blank" rel="noreferrer">
               <Image src="/badges/google-play.svg" alt="Google Play" width={180} height={54} />
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
