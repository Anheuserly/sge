"use client";

import { useRef } from "react";
import Link from "next/link";

export default function CatalogSlider({ listings, category }: { listings: any[], category: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  if (listings.length === 0) return null;

  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h3 style={{ margin: 0, textTransform: "capitalize", fontSize: "1.5rem", color: "var(--ink)" }}>{category}</h3>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={() => scroll("left")} style={{ width: "36px", height: "36px", borderRadius: "18px", border: "1px solid var(--line)", background: "white", cursor: "pointer" }}>&larr;</button>
          <button onClick={() => scroll("right")} style={{ width: "36px", height: "36px", borderRadius: "18px", border: "1px solid var(--line)", background: "white", cursor: "pointer" }}>&rarr;</button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        style={{ 
          display: "flex", 
          gap: "1.5rem", 
          overflowX: "auto", 
          scrollSnapType: "x mandatory", 
          paddingBottom: "1rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {listings.map((listing) => (
          <Link
            href={`/product/${listing.id}`}
            key={listing.id} 
            style={{ 
              minWidth: "240px", 
              maxWidth: "240px", 
              scrollSnapAlign: "start",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
            }}
          >
            {listing.media_url ? (
              <div style={{ height: "135px", background: "var(--steel)", overflow: "hidden" }}>
                <img src={listing.media_url} alt={listing.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ) : (
              <div style={{ height: "135px", background: "var(--steel)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>No Image</span>
              </div>
            )}
            
            <div style={{ padding: "0.85rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                <span style={{ fontSize: "0.68rem", textTransform: "uppercase", fontWeight: 700, color: "var(--brand)", letterSpacing: "0.04em" }}>{listing.type || "MEP"}</span>
                {listing.price && Number(listing.price) > 0 && (
                  <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "var(--ink)" }}>{listing.currency === "INR" ? "₹" : listing.currency} {Number(listing.price).toLocaleString()}</span>
                )}
              </div>
              
              <h4 style={{ margin: "0 0 0.35rem 0", fontSize: "0.92rem", fontWeight: 700, textTransform: "capitalize", color: "var(--ink)", lineHeight: 1.25 }}>
                {listing.title}
              </h4>
              <p style={{ margin: "0 0 0.85rem 0", fontSize: "0.8rem", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.4 }}>
                {listing.description}
              </p>
              
              <div style={{ marginTop: "auto" }}>
                <span
                  style={{ 
                    display: "block", 
                    width: "100%", 
                    textAlign: "center", 
                    padding: "0.5rem 0.75rem", 
                    backgroundColor: "var(--brand)", 
                    color: "white", 
                    borderRadius: "6px", 
                    border: "none", 
                    fontWeight: 700, 
                    fontSize: "0.8rem", 
                  }}
                >
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
