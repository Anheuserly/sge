import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBucketButton from "@/components/AddToBucketButton";
import { createProductJsonLd } from "@/lib/merchant-schema";

async function getListing(id: string) {
  try {
    const res = await fetch("https://storage.amcmep.in/v1/listings", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.rows?.find((l: any) => l.id === id) || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = await getListing(params.id);
  if (!listing) return { title: "Listing Not Found" };
  return {
    title: `${listing.title} | SGE MEP Catalog`,
    description: listing.description || "Certified MEP engineering specifications and AMC maintenance schedules from Shree Ganesh Enterprises.",
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const listing = await getListing(params.id);
  
  if (!listing) {
    notFound();
  }

  const priceFormatted = listing.price 
    ? `${listing.currency || 'INR'} ${listing.price}` 
    : "Custom Quote on Request";

  const jsonLd = createProductJsonLd(listing);

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "85vh", padding: "1.5rem 0 3.5rem 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container" style={{ maxWidth: "1150px" }}>
        {/* Compact Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#64748b", marginBottom: "1.25rem" }}>
          <Link href="/#marketplace" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
            <span>&larr;</span> Back to Catalog
          </Link>
          <span>/</span>
          <span style={{ color: "var(--brand)", fontWeight: 600 }}>{listing.category || "MEP Solutions"}</span>
          <span>/</span>
          <span style={{ color: "var(--navy)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "300px" }}>{listing.title}</span>
        </div>

        {/* Compact, Unified Product Card */}
        <div style={{ backgroundColor: "white", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "start" }}>
            
            {/* Left Column: Image with Tech Badge */}
            <div>
              <div style={{
                position: "relative",
                width: "100%",
                height: "360px",
                backgroundColor: "#0f172a",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {listing.media_url ? (
                  <Image 
                    src={listing.media_url} 
                    alt={listing.title} 
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#94a3b8", textAlign: "center", padding: "1.5rem" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <span style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>Technical Asset Verification</span>
                    <span style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>Certified SGE Infrastructure Component</span>
                  </div>
                )}
                
                <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 700, color: "white", letterSpacing: "0.5px", border: "1px solid rgba(255,255,255,0.15)" }}>
                  {listing.category || "Comprehensive AMC"}
                </div>
              </div>

              {/* Service SLA Highlights Box */}
              <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>DISPATCH SLA</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--navy)" }}>Under 4 Hours</span>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>COMPLIANCE</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "#16a34a" }}>NBC 2016 Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Pricing, Specs & Add to Bucket */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ backgroundColor: "rgba(200, 24, 29, 0.08)", color: "var(--brand)", padding: "3px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Active Contract Item
                </span>
                <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>ID: {listing.id.substring(0, 8)}...</span>
              </div>

              <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", color: "var(--navy)", margin: "0 0 0.75rem 0", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1.2 }}>
                {listing.title}
              </h1>

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--navy)" }}>
                  {priceFormatted}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                  (Periodic AMC or Turnkey Execution)
                </span>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px", color: "#64748b", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Description
                </h3>
                <p style={{ color: "#334155", lineHeight: 1.6, fontSize: "0.95rem", margin: 0, whiteSpace: "pre-wrap" }}>
                  {listing.description || "High-grade industrial MEP specification delivered by certified SGE technicians with complete digital audit tracking."}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div style={{ backgroundColor: "#f8fafc", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 0.75rem 0", color: "#64748b", fontWeight: 700 }}>
                  Engineering Specifications
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.85rem" }}>
                  <div>
                    <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase" }}>Contract Unit</span>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>{listing.unit || "Annual AMC"}</span>
                  </div>
                  <div>
                    <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase" }}>Contractor</span>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>SHREE GANESH ENTERPRISES</span>
                  </div>
                  <div>
                    <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase" }}>Tag Class</span>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>{listing.tags ? listing.tags.join(", ") : "MEP, AMC"}</span>
                  </div>
                  <div>
                    <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase" }}>Availability</span>
                    <span style={{ fontWeight: 700, color: "#16a34a" }}>Ready for Immediate Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Add to Bucket CTA */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ flex: 1, minWidth: "220px" }}>
                  <AddToBucketButton product={listing} />
                </div>
                <Link
                  href="/bucket"
                  style={{
                    padding: "0.9rem 1.5rem",
                    backgroundColor: "#f1f5f9",
                    color: "var(--navy)",
                    borderRadius: "10px",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    border: "1px solid #cbd5e1",
                    whiteSpace: "nowrap"
                  }}
                >
                  View My Bucket &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Specifications & Merchant Policies Tables */}
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "1.5rem" }}>
          
          {/* Table 1: Technical & Product Specifications */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.75rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--brand)" }}></div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", margin: 0 }}>
                Product & Engineering Specifications
              </h2>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600, width: "40%" }}>Product SKU</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 700 }}>
                      {listing.specifications?.sku || `SGE-${listing.id.substring(0, 8).toUpperCase()}`}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Model / MPN</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      {listing.specifications?.modelNumber || listing.specifications?.sku || "SGE-CERT-01"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Manufacturer / Brand</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 700 }}>
                      {listing.specifications?.brand || "Shree Ganesh Enterprises"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>System Category</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      {listing.category || "Fire Fighting & MEP Services"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Contract Unit</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      {listing.specifications?.unit || listing.unit || "Annual Service / Unit"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Warranty & AMC</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      {listing.specifications?.warranty || "12 Months Comprehensive Coverage"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Coverage Scope</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      {listing.specifications?.coverage || "Commercial & Industrial Plant Facilities"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Compliance Norms</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "#16a34a", fontWeight: 700 }}>
                      NBC 2016, IS 15683, NFPA Compliant
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Availability</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "#16a34a", fontWeight: 700 }}>
                      {listing.availability === "in_stock" ? "In Stock (Immediate Dispatch)" : "Available on Schedule"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Merchant Shipping, Delivery & Return Policy */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.75rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#16a34a" }}></div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", margin: 0 }}>
                Merchant Delivery & Return Policies
              </h2>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600, width: "40%" }}>Shipping Rate</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "#16a34a", fontWeight: 700 }}>
                      Free Delivery across Delhi NCR & Northern India (₹0.00)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Dispatch Handling</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      0 - 2 Business Days (Same-day dispatch for emergency equipment)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Transit Time</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      1 - 5 Business Days via SGE Logistics & Dedicated Technicians
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Return Policy</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 700 }}>
                      14-Day Free Replacement Policy
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Return Fees</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "#16a34a", fontWeight: 700 }}>
                      Free Return & Replacement (Zero restocking fees)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Return Method</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      On-site Technician Inspection & Free Pickup
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Item Condition</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      100% Brand New, Factory Calibrated & Certified (NewCondition)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>GST Tax Invoice</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 600 }}>
                      Official Tax Invoice with HSN/SAC & ITC Included
                    </td>
                  </tr>
                  <tr>
                    <th style={{ textAlign: "left", padding: "0.7rem 0.5rem", color: "#64748b", fontWeight: 600 }}>Direct Fulfillment</th>
                    <td style={{ padding: "0.7rem 0.5rem", color: "var(--navy)", fontWeight: 700 }}>
                      Shree Ganesh Enterprises (Authorized MEP Contractor)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
