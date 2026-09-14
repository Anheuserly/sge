"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const isIndia = tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("Asia/Colombo");
      if (isIndia) {
        setCurrency("INR");
      } else {
        const lang = navigator.language || "";
        if (lang.includes("IN")) {
          setCurrency("INR");
        } else {
          setCurrency("USD");
        }
      }
    } catch (e) {
      setCurrency("INR");
    }
  }, []);

  const tiers = [
    {
      name: "Normal User / Facility Client",
      badge: "100% Free Forever",
      badgeColor: "#16a34a",
      target: "For building owners, RWAs, facility managers, residents & enterprises requesting maintenance.",
      isFree: true,
      priceAnnualTotal: currency === "INR" ? "₹0" : "$0",
      priceAnnualPerMonth: currency === "INR" ? "₹0 / mo" : "$0 / mo",
      priceMonthlyOnly: currency === "INR" ? "₹0 / mo" : "$0 / mo",
      description: "Everything you need to raise breakdown requests, book certified technicians, and log facility maintenance at zero software cost.",
      features: [
        "Free mobile app access on iOS & Android",
        "Unlimited breakdown & emergency ticket creation",
        "Live GPS tracking of assigned service engineers",
        "Direct in-app chat & phone call with technicians",
        "Digital service inspection report with photos",
        "One-click quotation approval & PDF invoice viewing",
        "Full historical asset & equipment maintenance logs",
        "Instant push notifications for job status & dispatch"
      ],
      ctaText: "Download Free App",
      ctaLink: "/partner"
    },
    {
      name: "Verified Business Partner",
      badge: "Best Value for Contractors",
      badgeColor: "var(--brand)",
      target: "For licensed MEP technicians, electrical contractors, HVAC repair firms & fire safety agencies.",
      isFree: false,
      popular: true,
      // Accessible pricing: ₹4,999/yr (~₹416/mo) or ₹599/mo | Global: $69/yr (~$5.75/mo) or $9/mo
      priceAnnualTotal: currency === "INR" ? "₹4,999" : "$69",
      priceAnnualPerMonth: currency === "INR" ? "₹416 / mo" : "$5.75 / mo",
      priceMonthlyOnly: currency === "INR" ? "₹599 / mo" : "$9 / mo",
      description: "List your business on the marketplace, receive customer service leads in your operating area, and dispatch field technicians.",
      features: [
        "Official 'Verified Partner' badge on the catalog",
        "Direct local leads from commercial & domestic clients",
        "Up to 5 field technician team logins",
        "Automated mobile ticket assignment & route navigation",
        "In-app quotation maker & digital customer invoicing",
        "Direct bank settlements with full GST transaction logs",
        "Dedicated contractor support & emergency helpline",
        "Monthly performance, revenue & completed ticket reports"
      ],
      ctaText: "Register as Partner",
      ctaLink: "/partner"
    },
    {
      name: "Enterprise Multi-Branch",
      badge: "For Corporate Agencies",
      badgeColor: "var(--navy)",
      target: "For established MEP contracting companies, multi-city facility agencies & property management corporations.",
      isFree: false,
      popular: false,
      // Accessible pricing: ₹14,999/yr (~₹1,249/mo) or ₹1,699/mo | Global: $199/yr (~$16.50/mo) or $24/mo
      priceAnnualTotal: currency === "INR" ? "₹14,999" : "$199",
      priceAnnualPerMonth: currency === "INR" ? "₹1,249 / mo" : "$16.50 / mo",
      priceMonthlyOnly: currency === "INR" ? "₹1,699 / mo" : "$24 / mo",
      description: "Full enterprise CAFM suite with unlimited technicians, multi-warehouse operational management, and priority lead routing.",
      features: [
        "Unlimited technician and supervisor logins",
        "Multi-city, multi-branch & warehouse management",
        "Priority lead distribution in chosen geographic zones",
        "Custom ERP, Webhook & enterprise billing API access",
        "Dedicated Account Director & onboarding engineer",
        "Custom SLA contracts & white-label customer reports",
        "Comprehensive statutory compliance & tax exports",
        "24x7 Priority technical assistance line"
      ],
      ctaText: "Apply for Enterprise",
      ctaLink: "/partner"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-10" style={{ maxWidth: '1080px' }}>
      {/* Title & Description */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.9rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
          Fair &amp; Transparent Plans
        </span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          AMC MEP 24x7 Platform Pricing
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.92rem', maxWidth: '650px', margin: '0 auto 1.75rem', lineHeight: 1.5 }}>
          Free forever for clients and building owners to raise repair requests. Transparent, flat subscription for verified contractors to receive leads and manage field staff.
        </p>

        {/* Currency & Billing Switchers */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Currency Toggle */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f1f5f9', borderRadius: '30px', padding: '3px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setCurrency("INR")}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '24px',
                border: 'none',
                background: currency === "INR" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: currency === "INR" ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                color: currency === "INR" ? "var(--brand)" : "#64748b",
                fontSize: '0.82rem'
              }}
            >
              🇮🇳 India (INR ₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '24px',
                border: 'none',
                background: currency === "USD" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: currency === "USD" ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                color: currency === "USD" ? "var(--brand)" : "#64748b",
                fontSize: '0.82rem'
              }}
            >
              🌐 Global (USD $)
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f1f5f9', borderRadius: '30px', padding: '3px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setBillingCycle("yearly")}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '24px',
                border: 'none',
                background: billingCycle === "yearly" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: billingCycle === "yearly" ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                color: billingCycle === "yearly" ? "var(--navy)" : "#64748b",
                fontSize: '0.82rem'
              }}
            >
              Annual Plan <span style={{ color: 'var(--brand)', fontSize: '0.72rem', marginLeft: '3px', fontWeight: 800 }}>(-30% OFF)</span>
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '24px',
                border: 'none',
                background: billingCycle === "monthly" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: billingCycle === "monthly" ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                color: billingCycle === "monthly" ? "var(--navy)" : "#64748b",
                fontSize: '0.82rem'
              }}
            >
              Monthly Plan
            </button>
          </div>
        </div>
      </div>

      {/* Plan Cards Grid - Compact & Small */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', alignItems: 'stretch' }}>
        {tiers.map((tier, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '14px',
                padding: '1.5rem 1.25rem',
                boxShadow: tier.popular ? '0 8px 24px -6px rgba(200, 24, 29, 0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                border: tier.popular ? '2px solid var(--brand)' : '1px solid #e2e8f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: tier.popular ? 'translateY(-4px)' : 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Badge Tag */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  backgroundColor: tier.isFree ? 'rgba(22, 163, 74, 0.1)' : (tier.popular ? 'var(--brand)' : 'rgba(15, 23, 42, 0.08)'),
                  color: tier.popular ? 'white' : (tier.isFree ? '#16a34a' : 'var(--navy)'),
                  padding: '3px 10px',
                  borderRadius: '16px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}>
                  {tier.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.35rem', fontWeight: 800 }}>
                {tier.name}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', minHeight: '36px', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                {tier.target}
              </p>

              {/* Price Container */}
              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                {tier.isFree ? (
                  <div>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: '#16a34a', letterSpacing: '-0.5px' }}>
                      {tier.priceAnnualTotal}
                    </span>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.78rem', color: '#16a34a', fontWeight: 700 }}>
                      ✓ Always Free for Normal Users &amp; RWAs
                    </p>
                  </div>
                ) : (
                  <div>
                    {billingCycle === "yearly" ? (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                          <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.5px' }}>
                            {tier.priceAnnualTotal}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 700 }}>
                            / year
                          </span>
                        </div>
                        <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.78rem', color: 'var(--brand)', fontWeight: 800, backgroundColor: 'rgba(200, 24, 29, 0.06)', padding: '4px 8px', borderRadius: '6px', display: 'inline-block' }}>
                          👉 Just {tier.priceAnnualPerMonth} on annual billing
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                          <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.5px' }}>
                            {tier.priceMonthlyOnly}
                          </span>
                        </div>
                        <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>
                          Billed monthly. Cancel anytime in the app.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.8px', marginBottom: '0.85rem' }}>
                  {tier.isFree ? "Included Client Privileges:" : "Partner Features:"}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', color: '#334155', fontSize: '0.82rem', lineHeight: 1.4 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={tier.isFree ? "#16a34a" : "var(--brand)"} strokeWidth="3" style={{ marginRight: '0.5rem', marginTop: '1px', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <Link
                href={tier.ctaLink}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.75rem',
                  backgroundColor: tier.popular ? 'var(--brand)' : (tier.isFree ? '#16a34a' : '#f8fafc'),
                  color: (tier.popular || tier.isFree) ? 'white' : 'var(--navy)',
                  borderRadius: '8px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  border: tier.popular || tier.isFree ? 'none' : '1px solid #cbd5e1',
                  transition: 'all 0.2s',
                  boxShadow: tier.popular ? '0 2px 8px rgba(200, 24, 29, 0.25)' : 'none'
                }}
              >
                {tier.ctaText} &rarr;
              </Link>
            </div>
          );
        })}
      </div>

      {/* Compact App Store Banner */}
      <div style={{ marginTop: '3rem', backgroundColor: '#09131f', borderRadius: '16px', padding: '1.75rem 2rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', border: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '560px' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            iOS &amp; Android App
          </span>
          <h3 style={{ fontSize: '1.25rem', margin: '0.4rem 0 0.5rem', fontFamily: 'var(--font-heading)' }}>
            Get AMC MEP 24x7 One App
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
            Normal clients raise repair tickets completely free. Contractors complete KYC and verify staff directly inside the Partner section of the app.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="https://apps.apple.com/app/amc-mep-24x7-one-app/id6792257571" target="_blank" rel="noreferrer">
            <Image src="/badges/app-store.svg" alt="App Store" width={135} height={40} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge" target="_blank" rel="noreferrer">
            <Image src="/badges/google-play.svg" alt="Google Play" width={135} height={40} />
          </Link>
        </div>
      </div>
    </main>
  );
}
