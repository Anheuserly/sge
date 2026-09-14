import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CatalogSlider from "@/components/CatalogSlider";
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

  // Categorize listings
  const categories = Array.from(new Set(myListings.map((l: any) => l.category || "General"))) as string[];

  return (
    <main>
      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SGE / New Delhi / Since 1997</span>
            <h1>{company.name}</h1>
            <p className="hero-subtitle">{company.tagline}</p>
            <p className="lead">{company.overview}</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Request a Site Survey
              </Link>
              <Link className="button ghost" href="/services">
                Explore Solutions
              </Link>
            </div>
            <div className="hero-badges">
              <span>{company.iso}</span>
              <span>Design to AMC</span>
              <span>Fire • Plumbing • Electrical</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="SGE facility systems capability">
            <div className="capability-board">
              <div className="capability-board-head">
                <span>Integrated MEP Coverage</span>
                <strong>Facility systems, planned and maintained</strong>
              </div>
              <div className="capability-grid">
                <div className="capability-cell">HVAC</div>
                <div className="capability-cell">Fire Fighting</div>
                <div className="capability-cell">Electrical</div>
                <div className="capability-cell">Plumbing</div>
                <div className="capability-cell">AMC</div>
                <div className="capability-cell">Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Marketplace"
            title="Book Our Services Directly"
            subtitle="Explore our comprehensive e-commerce catalog of MEP solutions and annual maintenance contracts, ready to request."
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

      <section className="section">
        <div className="container app-band">
          <div>
            <span className="eyebrow">Digital AMC Management</span>
            <h2>{appLinks.name}</h2>
            <p className="muted">{appLinks.summary}</p>
          </div>
          <div className="app-downloads">
            <Link href={appLinks.appStore} target="_blank" rel="noreferrer">
              <Image src="/badges/app-store.svg" alt="App Store" width={135} height={40} />
            </Link>
            <Link href={appLinks.playStore} target="_blank" rel="noreferrer">
              <Image src="/badges/google-play.svg" alt="Google Play" width={135} height={40} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
