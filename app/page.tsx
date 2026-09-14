import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CatalogSlider from "@/components/CatalogSlider";
import ClientMarquee from "@/components/ClientMarquee";

import { company, appLinks } from "@/lib/content";

async function getListings() {
  try {
    const res = await fetch("https://storage.amcmep.in/v1/listings", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.rows || [];
  } catch (error) {
    return [];
  }
}

export default async function HomePage() {
  const listings = await getListings();
  const businessId = process.env.NEXT_PUBLIC_BUSINESS_ID || "3bc9edf1-68df-4dcf-98be-fc3295651c28";
  
  const myListings = listings.filter(
    (l: any) => 
      l.business_id === businessId || 
      l.business_name === "SHREE GANESH ENTERPRISES" ||
      l.business_id === "hln5dfpt1l_6o9og00k9q63faez"
  );

  const categories = Array.from(new Set(myListings.map((l: any) => l.category || "General"))) as string[];

  const jsonLdProducts = myListings.map((listing: any) => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": listing.title,
    "image": listing.media_url ? [listing.media_url] : [],
    "description": listing.description || "Premium MEP service and products by SGE.",
    "brand": {
      "@type": "Brand",
      "name": "Shree Ganesh Enterprises"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sge.org.in/product/${listing.id}`,
      "priceCurrency": listing.currency || "INR",
      "price": listing.price || "0",
      "availability": listing.availability === "in_stock" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "Shree Ganesh Enterprises"
      }
    }
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProducts) }}
      />
      
      {/* Authentic, Informative Hero Section */}
      <section style={{ backgroundColor: '#09131f', color: 'white', padding: '3.5rem 0 3rem', borderBottom: '1px solid #1e293b', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Left: Core Information */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(200, 24, 29, 0.12)', border: '1px solid rgba(200, 24, 29, 0.3)', padding: '4px 12px', borderRadius: '20px', marginBottom: '1rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand)' }}></span>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fca5a5', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Since 1997 • Licensed MEP Contractor &amp; Digital AMC
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                Fire Protection, Electrical, Plumbing &amp; Turnkey MEP Services
              </h1>

              <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '580px' }}>
                Shree Ganesh Enterprises delivers end-to-end building engineering across Delhi NCR and India — from fire hydrant installations, HVAC overhauling, and HT/LT sub-stations to 24x7 verified breakdown repairs via our unified mobile app.
              </p>

              {/* Service Highlights Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['Fire Fighting & Hydrants', 'Fire NOC & Alarms', 'HT/LT Panels & DG Sets', 'Commercial Plumbing & STP', '24x7 Emergency AMC'].map((service, sIdx) => (
                  <span key={sIdx} style={{ backgroundColor: '#1e293b', color: '#e2e8f0', fontSize: '0.78rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', border: '1px solid #334155' }}>
                    ✓ {service}
                  </span>
                ))}
              </div>

              {/* Quick Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="#marketplace" style={{ padding: '0.65rem 1.4rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', transition: 'background-color 0.2s', boxShadow: '0 2px 8px rgba(200, 24, 29, 0.3)' }}>
                  View Services &amp; Spares Catalog ↓
                </Link>
                <Link href="/pricing" style={{ padding: '0.65rem 1.3rem', backgroundColor: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', transition: 'background-color 0.2s' }}>
                  AMC &amp; Partner Plans &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Real Operational Metrics Card */}
            <div style={{ backgroundColor: '#111e2f', borderRadius: '16px', border: '1px solid #1e2e42', padding: '1.5rem', boxShadow: '0 12px 30px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.85rem', borderBottom: '1px solid #1e2e42', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Operational Verification
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', backgroundColor: '#09131f', padding: '2px 8px', borderRadius: '4px', border: '1px solid #1e293b' }}>
                  Govt &amp; Private Compliant
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#09131f', padding: '0.85rem', borderRadius: '10px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f8fafc' }}>28+ Years</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>Operational Excellence (Est. 1997)</div>
                </div>
                <div style={{ backgroundColor: '#09131f', padding: '0.85rem', borderRadius: '10px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>1,200+</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>Hospitals, Metros &amp; Data Centers</div>
                </div>
                <div style={{ backgroundColor: '#09131f', padding: '0.85rem', borderRadius: '10px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#4ade80' }}>&lt; 4 Hours</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>Emergency Breakdown On-Site SLA</div>
                </div>
                <div style={{ backgroundColor: '#09131f', padding: '0.85rem', borderRadius: '10px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f59e0b' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>Fire NOC &amp; Statutory Pass Rate</div>
                </div>
              </div>

              {/* Direct helpline bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#09131f', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #1e293b' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Direct Support / Dispatch</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e2e8f0' }}>+91 98719 36847 / 85273 78555</span>
                </div>
                <Link href="/help" style={{ fontSize: '0.78rem', color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>
                  Help Center &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ClientMarquee />

      <section id="marketplace" className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Marketplace & Services"
            title="Smarter Service Catalog"
            subtitle="Browse our comprehensive e-commerce catalog of MEP solutions and annual maintenance contracts, ready to request."
          />
          
          <div style={{ marginTop: "3rem" }}>
            {categories.map(category => {
              const catListings = myListings.filter((l: any) => (l.category || "General") === category);
              return (
                <CatalogSlider key={category} category={category} listings={catListings} />
              );
            })}
            
            {myListings.length === 0 && (
              <div className="panel" style={{ textAlign: "center", padding: "4rem" }}>
                <h3>Catalog Updating...</h3>
                <p className="muted">We are bringing our services online. Check back shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', fontWeight: 'bold', letterSpacing: '1px' }}>Digital AMC Management</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>{appLinks.name}</h2>
            <p className="muted" style={{ fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem', color: '#475569' }}>{appLinks.summary}</p>
            <div className="app-downloads" style={{ display: 'flex', gap: '1rem' }}>
              <Link href={appLinks.appStore} target="_blank" rel="noreferrer">
                <Image src="/badges/app-store.svg" alt="App Store" width={160} height={48} style={{ transition: 'transform 0.2s', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
              </Link>
              <Link href={appLinks.playStore} target="_blank" rel="noreferrer">
                <Image src="/badges/google-play.svg" alt="Google Play" width={160} height={48} style={{ transition: 'transform 0.2s', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
              </Link>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', gap: '1.5rem', position: 'relative', height: '550px' }}>
            <Image src="/app-screens/media_1789380613259.png" alt="AMC MEP App Screen 1" width={260} height={520} style={{ borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', transform: 'rotate(-4deg) translateY(20px)', objectFit: 'cover' }} />
            <Image src="/app-screens/media_1789380613262.png" alt="AMC MEP App Screen 2" width={260} height={520} style={{ borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', transform: 'rotate(4deg) translateY(0px)', zIndex: 1, objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
