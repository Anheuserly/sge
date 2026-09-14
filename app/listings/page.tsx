import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Service Listings | SGE",
  description: "Browse our comprehensive list of integrated MEP services and annual maintenance contracts.",
};

async function getListings() {
  try {
    // We fetch from the amcmep data hub
    const res = await fetch("https://storage.amcmep.in/v1/listings", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.rows || [];
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    return [];
  }
}

export default async function ListingsPage() {
  const listings = await getListings();

  // Filter listings by the business ID configured in env
  const businessId = process.env.NEXT_PUBLIC_BUSINESS_ID || "3bc9edf1-68df-4dcf-98be-fc3295651c28";
  
  // NOTE: For now, we show all listings if filtering is too strict or the ID mismatches, 
  // but ideally we filter by business_id or business_name.
  const myListings = listings.filter(
    (l: any) => 
      l.business_id === businessId || 
      l.business_name === "SHREE GANESH ENTERPRISES" ||
      l.business_id === "hln5dfpt1l_6o9og00k9q63faez" // the ID from API
  );

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Marketplace & Offerings"
            title="Our Service Listings"
            subtitle="Browse our comprehensive range of MEP solutions, maintenance contracts, and specialized services available for booking."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {myListings.length > 0 ? (
            <div className="grid-3">
              {myListings.map((listing: any) => (
                <div key={listing.id} className="panel flex-col" style={{ display: 'flex', gap: '1rem' }}>
                  {listing.media_url ? (
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', background: 'var(--steel)' }}>
                      <img 
                        src={listing.media_url} 
                        alt={listing.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', background: 'var(--steel)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="muted" style={{ fontSize: '0.875rem' }}>No Image</span>
                    </div>
                  )}
                  
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="eyebrow" style={{ margin: 0 }}>{listing.category || "Service"}</span>
                      {listing.price && Number(listing.price) > 0 && (
                        <strong style={{ color: 'var(--brand)' }}>
                          {listing.currency === 'INR' ? '₹' : listing.currency} {Number(listing.price).toLocaleString()}
                        </strong>
                      )}
                    </div>
                    <h3 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{listing.title}</h3>
                    <p className="muted" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {listing.description || "No description provided."}
                    </p>
                  </div>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <Link className="button ghost" href={`https://amcmep.in/listing/${listing.id}`} target="_blank" rel="noopener noreferrer" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                      View Details on AMC MEP &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h3>No Listings Found</h3>
              <p className="muted">We are currently updating our digital catalog. Please contact us directly for our offerings.</p>
              <Link className="button" href="/contact" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
