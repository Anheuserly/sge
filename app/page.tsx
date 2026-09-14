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
      
      {/* SGE Advanced Hero */}
      <section style={{ backgroundColor: '#0f172a', color: 'white', padding: '10rem 0 8rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.35, backgroundImage: 'url("/hero-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.2)' }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(15,23,42,0.2))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px' }}>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#bae6fd', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2rem', display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}>
            Elevating Building Infrastructure
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            Next-Generation <span style={{ color: 'var(--brand)' }}>MEP Engineering</span> Platform
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '3.5rem', maxWidth: '700px' }}>
            A powerful digital ecosystem powering facility systems with intelligent design, execution, and 24x7 automated AMC support. We manage the infrastructure so you can manage your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="#marketplace" style={{ padding: '1.25rem 3rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'transform 0.2s', boxShadow: '0 4px 14px 0 rgba(200, 24, 29, 0.39)' }}>
              Explore Platform
            </Link>
            <Link href="/partner" style={{ padding: '1.25rem 3rem', backgroundColor: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'background-color 0.2s' }}>
              Become a Partner
            </Link>
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
