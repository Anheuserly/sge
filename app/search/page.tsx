import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Search Results | SGE Platform",
  description: "Search the SGE service and product catalog.",
};

async function searchListings(query: string) {
  try {
    const res = await fetch("https://storage.amcmep.in/v1/listings", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const rows = data.rows || [];
    
    const businessId = process.env.NEXT_PUBLIC_BUSINESS_ID || "3bc9edf1-68df-4dcf-98be-fc3295651c28";
    
    // Filter by business and then by search query
    return rows.filter((l: any) => {
      const isMyListing = l.business_id === businessId || l.business_name === "SHREE GANESH ENTERPRISES" || l.business_id === "hln5dfpt1l_6o9og00k9q63faez";
      if (!isMyListing) return false;
      
      const searchStr = `${l.title} ${l.description} ${l.category}`.toLowerCase();
      return searchStr.includes(query.toLowerCase());
    });
  } catch (error) {
    return [];
  }
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || "";
  const results = query ? await searchListings(query) : [];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Search Results for "{query}"
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '3rem' }}>
        Found {results.length} result(s).
      </p>

      {results.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {results.map((listing: any) => (
            <Link key={listing.id} href={`/product/${listing.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', backgroundColor: 'white' }}>
                <div style={{ width: '100%', height: '200px', backgroundColor: '#f1f5f9', position: 'relative' }}>
                  {listing.media_url ? (
                    <Image src={listing.media_url} alt={listing.title} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94a3b8' }}>
                      No Image Available
                    </div>
                  )}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>{listing.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                    {listing.description || "No description provided."}
                  </p>
                  <div style={{ fontWeight: 'bold', color: 'var(--brand)' }}>
                    {listing.price ? `${listing.currency || 'INR'} ${listing.price}` : 'Price on Request'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1rem' }}>No matches found</h3>
          <p style={{ color: '#64748b' }}>Try adjusting your search terms or browse our general catalog.</p>
          <Link href="/#marketplace" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            View Full Catalog
          </Link>
        </div>
      )}
    </main>
  );
}
