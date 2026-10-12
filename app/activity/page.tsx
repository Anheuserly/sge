import Link from "next/link";
import ActivityVideoGallery from "@/components/ActivityVideoGallery";
import SmartActivityHub from "@/components/SmartActivityHub";

export const metadata = {
  title: "Engineering Activity, App Platform & Video Hub | Shree Ganesh Enterprises (SGE)",
  description: "Explore on-site MEP execution activities, AMC MEP One App integration, NBC 2016 compliance standards, and technical masterclasses by Anil Saini Fire Academy.",
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
          App-Driven Engineering &amp; Field Knowledge Hub
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
          SGE Activity &amp; Digital Engineering Hub
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.15rem",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Connect real plant room execution directly with our <strong>AMC MEP 24x7 One App</strong>, explore statutory NBC 2016 compliance standards, discover who we are, and watch practical video demonstrations from Anil Saini Fire Academy.
        </p>
      </div>

      {/* Smart Hub: App Platform, Stakeholder Matrix, NBC Selector, Team & Network */}
      <SmartActivityHub />

      {/* Section Divider & Heading for Video Gallery */}
      <div style={{ textAlign: "center", margin: "4rem 0 2rem" }}>
        <span
          style={{
            backgroundColor: "rgba(220, 38, 38, 0.08)",
            color: "#dc2626",
            padding: "0.4rem 1.1rem",
            borderRadius: "30px",
            fontSize: "0.8rem",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "0.6rem",
          }}
        >
          Hands-On Masterclasses
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", color: "var(--navy)", margin: 0, fontFamily: "var(--font-heading)" }}>
          Anil Saini Fire Academy Video Masterclasses
        </h2>
        <p style={{ color: "#64748b", maxWidth: "700px", margin: "0.5rem auto 0", fontSize: "1rem" }}>
          In-depth video tutorials covering National Building Code (NBC 2016 Part 4), gas suppression, pump house operations, and Indian Standards.
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
