import Link from "next/link";
import ActivityVideoGallery from "@/components/ActivityVideoGallery";

export const metadata = {
  title: "On-Site Activity & Video Gallery | Shree Ganesh Enterprises (SGE)",
  description: "Explore on-site MEP execution activities, fire protection demonstrations, NBC 2016 tutorials, and pump house masterclasses by Anil Saini Fire Academy.",
};

export default function ActivityPage() {
  return (
    <main className="container mx-auto px-4 py-12" style={{ maxWidth: "1200px" }}>
      {/* Page Hero */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span
          style={{
            backgroundColor: "rgba(220, 38, 38, 0.08)",
            color: "#dc2626",
            padding: "0.45rem 1.25rem",
            borderRadius: "30px",
            fontSize: "0.85rem",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "0.85rem",
          }}
        >
          Ground Execution & Field Masterclasses
        </span>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            margin: "0 0 1rem",
            fontFamily: "var(--font-heading)",
            color: "var(--navy)",
            lineHeight: 1.2,
          }}
        >
          Engineering Activity & Video Gallery
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.15rem",
            maxWidth: "780px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Real site inspections, fire NOC compliance tutorials, gas suppression walk-throughs, and active MEP plant room operations curated from the official Anil Saini Fire Academy channel.
        </p>
      </div>

      {/* Main Video Gallery Component */}
      <ActivityVideoGallery />

      {/* Bottom Technical Support Strip */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2.5rem 2rem",
          borderRadius: "20px",
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--navy)", margin: "0 0 0.5rem" }}>
            Need Fire NOC Audit or MEP AMC for Your Facility?
          </h3>
          <p style={{ color: "#64748b", margin: 0, fontSize: "0.95rem" }}>
            Our senior engineers provide full survey, testing-commissioning, and statutory municipal compliance.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/services"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              backgroundColor: "white",
              color: "var(--navy)",
              border: "1px solid #cbd5e1",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Explore Services
          </Link>
          <a
            href="https://amcmep.in"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              backgroundColor: "#dc2626",
              color: "white",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow: "0 4px 12px rgba(220, 38, 38, 0.25)",
            }}
          >
            Open AMC MEP Platform →
          </a>
        </div>
      </div>
    </main>
  );
}
