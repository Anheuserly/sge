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
          <div 
            key={listing.id} 
            style={{ 
              minWidth: "300px", 
              maxWidth: "300px", 
              scrollSnapAlign: "start",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "var(--shadow)",
              border: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {listing.media_url ? (
              <div style={{ height: "180px", background: "var(--steel)" }}>
                <img src={listing.media_url} alt={listing.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ) : (
              <div style={{ height: "180px", background: "var(--steel)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>No Image</span>
              </div>
            )}
            
            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 700, color: "var(--brand)", letterSpacing: "0.05em" }}>{listing.type}</span>
                {listing.price && Number(listing.price) > 0 && (
                  <span style={{ fontWeight: "bold", color: "var(--ink)" }}>{listing.currency === "INR" ? "₹" : listing.currency} {Number(listing.price).toLocaleString()}</span>
                )}
              </div>
              
              <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", textTransform: "capitalize", color: "var(--ink)", lineHeight: 1.3 }}>
                {listing.title}
              </h4>
              <p style={{ margin: "0 0 1.5rem 0", fontSize: "0.9rem", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {listing.description}
              </p>
              
              <div style={{ marginTop: "auto" }}>
                <Link 
                  href={`https://amcmep.in/listing/${listing.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: "block", 
                    width: "100%", 
                    textAlign: "center", 
                    padding: "0.75rem", 
                    backgroundColor: "var(--brand)", 
                    color: "white", 
                    borderRadius: "8px", 
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--brand-dark)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--brand)"}
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
