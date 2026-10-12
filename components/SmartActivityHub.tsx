"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- SVG Icons ---
function CheckIcon({ size = 18, color = "#16a34a" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SmartphoneIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  );
}

function UsersIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CpuIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function QrCodeIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// --- Data: Who Is It For ---
const AUDIENCE_PERSONAS = [
  {
    id: "facility-managers",
    role: "Facility & Building Managers",
    tag: "Operations & Digital AMC",
    summary: "Replace messy paper records with real-time digital equipment passports, SLA ticketing, and automated preventive maintenance.",
    benefits: [
      "Digital equipment QR tags for instant maintenance history",
      "Auto-alerts 60 days before statutory Fire NOC expiry",
      "Daily pump room pressure and diesel fuel logging in mobile app",
      "Instant SLA escalation with assigned senior MEP engineers",
    ],
  },
  {
    id: "mep-engineers",
    role: "MEP Engineers & Site Contractors",
    tag: "Technical & Design Standards",
    summary: "Master practical field execution, National Building Code (NBC 2016 Part 4) mandates, and pipe sizing standards.",
    benefits: [
      "Direct guidance on IS 15105 sprinkler density & friction loss",
      "Pump capacity selection (2,850 LPM / 4,500 LPM auto systems)",
      "Addressable fire alarm loop load & AHU/lift interlock schemes",
      "Video walk-throughs from Anil Saini Fire Academy masterclasses",
    ],
  },
  {
    id: "safety-officers",
    role: "Fire & Life Safety Officers",
    tag: "Compliance & Audit Readiness",
    summary: "Ensure 100% compliance during municipal fire officer audits, emergency drills, and gas suppression inspections.",
    benefits: [
      "Hydro-test protocols (14 bar riser testing documentation)",
      "FM-200 and Novec 1230 gas flooding discharge verifications",
      "Evacuation travel distance checks (<30m to fire exits)",
      "Scheduled staff fire extinguisher drills and certification",
    ],
  },
  {
    id: "architects",
    role: "Architects & Space Planners",
    tag: "Planning & Statutory Approvals",
    summary: "Coordinate MEP shafts, pump room headroom, water tank sizing, and fire safety drawings before concrete is poured.",
    benefits: [
      "Pre-construction fire staircase pressurization layouts",
      "Underground & Overhead fire water tank sizing per NBC Table 7",
      "Clearance drawings for fire tender turning radiuses (>6.0m)",
      "Municipal fire department approval consultation & vetting",
    ],
  },
];

// --- Data: Who Is With Us ---
const TEAM_EXPERTS = [
  {
    name: "A. K. Saini",
    designation: "Founder & Chief Fire Protection Master",
    badge: "30+ Years Field Engineering",
    bio: "Pioneer in turnkey fire protection contracting, IS code standards, and founder of Anil Saini Fire Academy. Has supervised millions of minutes of active MEP operations across India.",
    channel: "https://www.youtube.com/@AnilSainiFireAcademy",
  },
  {
    name: "Shashank Saini",
    designation: "Architect & Lead Project Systems Director",
    badge: "Life Safety & Spatial Coordination",
    bio: "Specializes in high-rise architectural life safety integration, fire compartmentation, shaft coordination, and municipal statutory documentation.",
    channel: "/about",
  },
  {
    name: "Shubham Kumar",
    designation: "Operations & Digital Ecosystem Lead",
    badge: "Cloud, App & Systems Architect",
    bio: "Leads SGE's digital engineering division, powering the AMC MEP 24x7 One App, Cloud DataHub console, and IoT equipment tagging infrastructure.",
    channel: "/about",
  },
];

// --- Data: NBC 2016 Interactive Simulator ---
const FACILITY_TYPES = [
  {
    id: "data-center",
    name: "Data Center & Server Facility",
    suppression: "Dual Hydrant Riser + Clean Agent Gas (FM-200 / Novec 1230) + Pre-Action Sprinklers",
    pumps: "2,850 LPM Main Electrical + 2,850 LPM Standby Diesel + 180 LPM Jockey (10.5 bar head)",
    detection: "VESDA (Very Early Warning Aspirating Smoke Detection) + Addressable Optical Multi-Sensors",
    standards: "NBC 2016 Part 4, NFPA 75, NFPA 2001, IS 15105",
    appBenefit: "Real-time clean agent cylinder pressure telemetry & gas discharge abort switch audit via AMC MEP App.",
  },
  {
    id: "commercial-highrise",
    name: "Commercial High-Rise (>30 Meters)",
    suppression: "Wet Riser Hydrant Ring + Fully Automatic Wet Pipe Sprinkler Network + Yard Hydrants",
    pumps: "4,500 LPM Main Electrical + 4,500 LPM Standby Diesel + 180 LPM Jockey (12 bar head)",
    detection: "Microprocessor Addressable Fire Alarm with Talkback PA & Lift Grounding Override",
    standards: "NBC 2016 Part 4 Table 7, IS 15105, IS 2189, IS 12469",
    appBenefit: "QR-coded landing valve inspections & automated stairwell pressurization fan testing logs.",
  },
  {
    id: "hospital",
    name: "Hospital & Healthcare (>15 Meters)",
    suppression: "Zone-Segregated Sprinklers + Quick Response Fire Hydrant Risers + Kitchen Suppression",
    pumps: "2,850 LPM Main Electrical + 2,850 LPM Standby Diesel + 180 LPM Jockey",
    detection: "Intelligent Addressable Smoke Sensing with Area Zoning to Prevent Panic Evacuation",
    standards: "NBC 2016 Group C (Institutional), NABH Safety Guidelines, IS 2189",
    appBenefit: "Priority 24x7 breakdown dispatch ticket SLA (<60 mins) backed by SGE One App.",
  },
  {
    id: "industrial",
    name: "Industrial Campus & Warehouses",
    suppression: "High-Volume Hydrant Ring + Medium Velocity Water Spray + Foam Flooding for Fuel Storage",
    pumps: "4,500 LPM Dual Diesel Driven Fire Pumps + 2,850 LPM Jockey Pump System",
    detection: "Beam Smoke Detectors (High Ceiling) + Linear Heat Sensing (Cable Trays)",
    standards: "NBC 2016 Group G (Industrial), IS 3844, TAC Fire Rules",
    appBenefit: "Automated diesel fuel level alerts & battery cranking health verification via App.",
  },
  {
    id: "residential",
    name: "Residential High-Rise Society (>15m)",
    suppression: "Internal Hydrant Risers at Each Landing + Sprinklers in Basements/Common Corridors",
    pumps: "2,280 LPM Main Electrical + 2,280 LPM Standby Diesel + 180 LPM Jockey",
    detection: "Heat Detectors in Common Basements + Manual Call Points (MCP) + Fire Hooter Network",
    standards: "NBC 2016 Group A (Residential), Municipal Bye-laws",
    appBenefit: "Resident RWAs can track quarterly fire safety drills and NOC renewal status directly on web portal.",
  },
];

export default function SmartActivityHub() {
  const [selectedPersona, setSelectedPersona] = useState(AUDIENCE_PERSONAS[0].id);
  const [selectedFacility, setSelectedFacility] = useState(FACILITY_TYPES[0].id);
  const [checklist, setChecklist] = useState({
    jockey: true,
    mainPump: true,
    dieselBattery: true,
    sprinklerValve: true,
    alarmPanel: true,
  });

  const activePersona = AUDIENCE_PERSONAS.find((p) => p.id === selectedPersona) || AUDIENCE_PERSONAS[0];
  const activeFacility = FACILITY_TYPES.find((f) => f.id === selectedFacility) || FACILITY_TYPES[0];

  const totalChecks = Object.keys(checklist).length;
  const passedChecks = Object.values(checklist).filter(Boolean).length;
  const scorePercent = Math.round((passedChecks / totalChecks) * 100);

  return (
    <div style={{ margin: "2rem 0 3.5rem" }}>
      {/* =========================================================================
          SECTION 1: SMART APP ECOSYSTEM HIGHLIGHT
      ========================================================================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #173d47 100%)",
          borderRadius: "24px",
          padding: "3rem 2.5rem",
          color: "#ffffff",
          marginBottom: "3.5rem",
          boxShadow: "0 20px 48px rgba(15, 23, 42, 0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200, 24, 29, 0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(200, 24, 29, 0.15)",
                border: "1px solid rgba(200, 24, 29, 0.4)",
                color: "#f87171",
                fontSize: "0.78rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "0.35rem 0.9rem",
                borderRadius: "50px",
                marginBottom: "1rem",
              }}
            >
              <SmartphoneIcon size={14} color="#f87171" />
              SGE Digital Companion Ecosystem
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                margin: "0 0 1rem 0",
                fontFamily: "var(--font-heading)",
              }}
            >
              Smarter Field Engineering Powered by AMC MEP 24x7 One App
            </h2>

            <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.65, margin: "0 0 1.8rem" }}>
              Every activity captured on SGE sites connects directly to our enterprise mobile app.
              No paper logbooks. No lost testing records. Real-time equipment status right in your pocket.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                  <QrCodeIcon size={16} /> QR Asset Passport
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>
                  Scan hydrants, pumps &amp; panels on-site for live hydro-test &amp; service logs.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#60a5fa", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                  <CpuIcon size={16} /> Digital Run-Logbook
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>
                  Automated pump room pressure, diesel engine fuel, and battery voltage records.
                </p>
              </div>
            </div>

            {/* App Action Links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", alignItems: "center" }}>
              <a
                href="https://amcmep.in/login"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.6rem",
                  backgroundColor: "var(--brand, #c8181d)",
                  color: "#ffffff",
                  fontWeight: 800,
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(200, 24, 29, 0.4)",
                }}
              >
                Access SGE App Cloud Portal <ExternalLinkIcon size={15} />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.2rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Google Play Store
              </a>

              <a
                href="https://apps.apple.com/app/amc-mep-24x7-one-app/id6792257571"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.2rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Apple App Store
              </a>
            </div>
          </div>

          {/* Interactive Digital Health Auditor Card */}
          <div
            style={{
              background: "#0b1120",
              borderRadius: "20px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 16px 36px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.8rem" }}>
              <div>
                <span style={{ fontSize: "0.72rem", color: "#38bdf8", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                  Interactive Simulator
                </span>
                <h3 style={{ fontSize: "1.15rem", color: "#ffffff", margin: "2px 0 0" }}>Daily Plant Room Health Auditor</h3>
              </div>
              <div
                style={{
                  background: scorePercent === 100 ? "rgba(34, 197, 94, 0.2)" : "rgba(234, 179, 8, 0.2)",
                  color: scorePercent === 100 ? "#4ade80" : "#facc15",
                  border: `1px solid ${scorePercent === 100 ? "rgba(34, 197, 94, 0.4)" : "rgba(234, 179, 8, 0.4)"}`,
                  borderRadius: "30px",
                  padding: "0.3rem 0.8rem",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                }}
              >
                {scorePercent}% Readiness
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "1.2rem" }}>
              Toggle parameters to test simulated Morning Plant Room checks logged by our engineers via the AMC MEP One App:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { key: "jockey", label: "Jockey Pump Auto Cut-in (6.5 bar) & Cut-out (7.5 bar)" },
                { key: "mainPump", label: "Main Electric Pump Auto-start (starts at 5.5 bar drop)" },
                { key: "dieselBattery", label: "Diesel Standby Engine 24V Starter Battery Voltage" },
                { key: "sprinklerValve", label: "Sprinkler Alarm Valve Retard Chamber & Water Gong" },
                { key: "alarmPanel", label: "Addressable Fire Alarm Master Loop (0 Active Faults)" },
              ].map((item) => {
                const isChecked = checklist[item.key as keyof typeof checklist];
                return (
                  <label
                    key={item.key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      background: isChecked ? "rgba(255,255,255,0.05)" : "rgba(220, 38, 38, 0.08)",
                      border: `1px solid ${isChecked ? "rgba(255,255,255,0.1)" : "rgba(220, 38, 38, 0.3)"}`,
                      padding: "0.65rem 0.85rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "0.83rem",
                      color: isChecked ? "#f1f5f9" : "#fca5a5",
                    }}
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        setChecklist((prev) => ({
                          ...prev,
                          [item.key]: e.target.checked,
                        }))
                      }
                      style={{ cursor: "pointer", width: "16px", height: "16px", accentColor: "#c8181d" }}
                    />
                  </label>
                );
              })}
            </div>

            <div style={{ marginTop: "1.4rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                Status: {scorePercent === 100 ? "Ready for Fire NOC Audit" : "Requires Engineering Inspection"}
              </span>
              <a
                href="https://amcmep.in"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#38bdf8",
                  textDecoration: "none",
                }}
              >
                Log Live in App →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO IS IT FOR (INTERACTIVE STAKEHOLDER MATRIX)
      ========================================================================= */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              backgroundColor: "rgba(23, 61, 71, 0.08)",
              color: "var(--navy, #173d47)",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "0.6rem",
            }}
          >
            Target Stakeholder Ecosystem
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", color: "var(--navy)", margin: 0, fontFamily: "var(--font-heading)" }}>
            Who Is This Platform &amp; Knowledge Hub Built For?
          </h2>
          <p style={{ color: "#64748b", maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "1rem" }}>
            Designed specifically for technical decision makers responsible for life safety, continuous plant operations, and statutory building compliance.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            justifyContent: "center",
            marginBottom: "1.8rem",
          }}
        >
          {AUDIENCE_PERSONAS.map((persona) => {
            const isSelected = selectedPersona === persona.id;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setSelectedPersona(persona.id)}
                style={{
                  padding: "0.65rem 1.25rem",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: isSelected ? 800 : 600,
                  border: isSelected ? "2px solid var(--navy, #173d47)" : "1px solid #cbd5e1",
                  backgroundColor: isSelected ? "var(--navy, #173d47)" : "#ffffff",
                  color: isSelected ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 4px 14px rgba(23, 61, 71, 0.25)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {persona.role}
              </button>
            );
          })}
        </div>

        {/* Selected Persona Highlight Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
            padding: "2.2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "var(--brand, #c8181d)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                background: "rgba(200, 24, 29, 0.08)",
                padding: "0.3rem 0.75rem",
                borderRadius: "4px",
                display: "inline-block",
                marginBottom: "0.8rem",
              }}
            >
              {activePersona.tag}
            </span>
            <h3 style={{ fontSize: "1.6rem", color: "var(--navy)", margin: "0 0 0.8rem 0" }}>
              {activePersona.role}
            </h3>
            <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
              {activePersona.summary}
            </p>

            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.4rem",
                background: "var(--navy, #173d47)",
                color: "#ffffff",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Explore Solutions for Your Facility →
            </Link>
          </div>

          <div
            style={{
              background: "#f8fafc",
              padding: "1.5rem",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h4 style={{ fontSize: "1rem", color: "#0f172a", margin: "0 0 1rem", fontWeight: 800 }}>
              Key Operational Advantages:
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {activePersona.benefits.map((benefit, bIdx) => (
                <div key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    <CheckIcon size={16} color="#16a34a" />
                  </div>
                  <span style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.5 }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE NBC 2016 & MEP CONFIGURATION SIMULATOR
      ========================================================================= */}
      <section
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
          padding: "2.5rem 2.2rem",
          marginBottom: "4rem",
          boxShadow: "0 8px 28px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              backgroundColor: "rgba(220, 38, 38, 0.08)",
              color: "#dc2626",
              padding: "0.35rem 0.9rem",
              borderRadius: "30px",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "0.5rem",
            }}
          >
            Intelligent Standards Engine
          </span>
          <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", color: "var(--navy)", margin: 0, fontFamily: "var(--font-heading)" }}>
            NBC 2016 Part 4 &amp; MEP System Mandate Selector
          </h2>
          <p style={{ color: "#64748b", maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "0.95rem" }}>
            Select your building occupancy profile to instantly review statutory fire suppression, pump head, and detection specifications required by Indian law.
          </p>
        </div>

        {/* Facility Selector Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "0.65rem",
            marginBottom: "2rem",
          }}
        >
          {FACILITY_TYPES.map((fac) => {
            const isSelected = selectedFacility === fac.id;
            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => setSelectedFacility(fac.id)}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  fontWeight: isSelected ? 800 : 600,
                  border: isSelected ? "2px solid var(--brand, #c8181d)" : "1px solid #e2e8f0",
                  backgroundColor: isSelected ? "rgba(200, 24, 29, 0.05)" : "#f8fafc",
                  color: isSelected ? "var(--brand, #c8181d)" : "#334155",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {fac.name}
              </button>
            );
          })}
        </div>

        {/* Selected Facility Details Card */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            padding: "1.8rem",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>Selected Occupancy:</span>
              <h3 style={{ fontSize: "1.35rem", color: "var(--navy)", margin: 0 }}>{activeFacility.name}</h3>
            </div>
            <div style={{ background: "#ffffff", padding: "0.4rem 0.8rem", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.82rem", fontWeight: 700, color: "#0f172a" }}>
              Codes: {activeFacility.standards}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.2rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ background: "#ffffff", padding: "1.2rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "0.82rem", color: "#c8181d", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                Fire Suppression System
              </strong>
              <p style={{ fontSize: "0.92rem", color: "#1e293b", margin: 0, lineHeight: 1.5 }}>
                {activeFacility.suppression}
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.2rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "0.82rem", color: "#0284c7", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                Pump House Capacity (Flow/Pressure)
              </strong>
              <p style={{ fontSize: "0.92rem", color: "#1e293b", margin: 0, lineHeight: 1.5 }}>
                {activeFacility.pumps}
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.2rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "0.82rem", color: "#16a34a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                Detection &amp; Evacuation Alarms
              </strong>
              <p style={{ fontSize: "0.92rem", color: "#1e293b", margin: 0, lineHeight: 1.5 }}>
                {activeFacility.detection}
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "1rem 1.2rem",
              borderRadius: "10px",
              border: "1px dashed #cbd5e1",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <SmartphoneIcon size={18} color="#c8181d" />
              <span style={{ fontSize: "0.88rem", color: "#334155" }}>
                <strong>App Integration:</strong> {activeFacility.appBenefit}
              </span>
            </div>
            <a
              href="https://amcmep.in"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--brand, #c8181d)",
                textDecoration: "none",
              }}
            >
              Configure in AMC MEP One App →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHO IS WITH US (LEADERSHIP, MENTORS & STRATEGIC NETWORK)
      ========================================================================= */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              backgroundColor: "rgba(220, 38, 38, 0.08)",
              color: "#c8181d",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "0.6rem",
            }}
          >
            Engineering Leadership &amp; Network
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", color: "var(--navy)", margin: 0, fontFamily: "var(--font-heading)" }}>
            Who Is With Us Behind Shree Ganesh Enterprises
          </h2>
          <p style={{ color: "#64748b", maxWidth: "720px", margin: "0.5rem auto 0", fontSize: "1rem" }}>
            Decades of senior ground execution, architecture, and technology expertise steering statutory fire protection and MEP projects.
          </p>
        </div>

        {/* Leadership Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.6rem",
            marginBottom: "2.5rem",
          }}
        >
          {TEAM_EXPERTS.map((member, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                padding: "1.8rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--brand, #c8181d)",
                    background: "rgba(200, 24, 29, 0.07)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {member.badge}
                </span>

                <h3 style={{ fontSize: "1.35rem", color: "var(--navy)", margin: "0 0 0.25rem 0" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", margin: "0 0 0.9rem 0" }}>
                  {member.designation}
                </p>

                <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                  {member.bio}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #f1f5f9" }}>
                <a
                  href={member.channel}
                  target={member.channel.startsWith("http") ? "_blank" : undefined}
                  rel={member.channel.startsWith("http") ? "noreferrer" : undefined}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {member.channel.includes("youtube") ? "Watch Academy Masterclasses →" : "Learn More →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Associations & Certifications Banner */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            padding: "1.6rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <strong style={{ display: "block", color: "var(--navy)", fontSize: "1.05rem" }}>
              Tanushka Projects Pvt. Ltd.
            </strong>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Corporate Association Partner for Turnkey Fire &amp; MEP Delivery since 1997.
            </span>
          </div>

          <div>
            <strong style={{ display: "block", color: "var(--navy)", fontSize: "1.05rem" }}>
              Anil Saini Fire Academy
            </strong>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Official Knowledge &amp; Life Safety Demonstration Channel for technicians &amp; engineers.
            </span>
          </div>

          <div>
            <strong style={{ display: "block", color: "var(--navy)", fontSize: "1.05rem" }}>
              NSIC – ISO 9001:2008 Certified
            </strong>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Quality Assured Execution for Design, Supply, Testing &amp; Commissioning.
            </span>
          </div>

          <div>
            <strong style={{ display: "block", color: "var(--navy)", fontSize: "1.05rem" }}>
              Pan-India Engineering Force
            </strong>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Licensed Electricians, Certified Plumbers, Pump Mechanics &amp; Safety Auditors.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
