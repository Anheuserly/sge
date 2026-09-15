import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CatalogSlider from "@/components/CatalogSlider";
import ClientMarquee from "@/components/ClientMarquee";

import { company, appLinks, homeContent, heroMetrics } from "@/lib/content";

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
  const businessId = process.env.NEXT_PUBLIC_BUSINESS_ID || "";
  
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
      
      {/* Modern & Clean Hero Section */}
      <section style={{ backgroundColor: '#09131f', color: 'white', padding: '3.5rem 0 3rem', borderBottom: '1px solid #1e293b' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '5px 14px', borderRadius: '30px', marginBottom: '1.25rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--brand)' }}></span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e2e8f0', letterSpacing: '0.5px' }}>
              {homeContent.hero.badge}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
            {homeContent.hero.title}
          </h1>

          <p style={{ fontSize: '1.02rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '680px', margin: '0 auto 2rem' }}>
            {homeContent.hero.subtitle}
          </p>

          {/* Action Buttons & App Download */}
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href={homeContent.hero.primaryCtaLink} style={{ padding: '0.75rem 1.6rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', boxShadow: '0 4px 12px rgba(200, 24, 29, 0.3)' }}>
              {homeContent.hero.primaryCtaText}
            </Link>
            <Link href={homeContent.hero.secondaryCtaLink} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem' }}>
              {homeContent.hero.secondaryCtaText}
            </Link>
          </div>

          {/* Clean Key Metrics Bar */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', borderTop: '1px solid #1e293b', paddingTop: '1.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
            {heroMetrics.map((metric, mIdx) => (
              <span key={mIdx}>{metric.icon} <strong>{metric.value}</strong> {metric.label}</span>
            ))}
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
