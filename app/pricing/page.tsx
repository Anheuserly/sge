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
      name: "Normal User / Client",
      badge: "100% Free Forever",
      badgeColor: "#16a34a",
      target: "For building owners, facility managers, residents & clients requesting maintenance.",
      isFree: true,
      priceAnnualTotal: currency === "INR" ? "₹0" : "$0",
      priceAnnualPerMonth: currency === "INR" ? "₹0 / month" : "$0 / month",
      priceMonthlyOnly: currency === "INR" ? "₹0 / month" : "$0 / month",
      description: "Everything you need to raise breakdown requests and manage your building AMC at zero cost.",
      features: [
        "Free mobile app access on iOS & Android",
        "Unlimited service & emergency ticket creation",
        "Real-time technician live GPS arrival tracking",
        "Direct in-app chat & call with assigned engineer",
        "Digital service report with before/after photos",
        "One-click quotation approval & invoice viewing",
        "Complete historical asset maintenance logs",
        "Push notifications for every ticket status update"
      ],
      ctaText: "Download Free App",
      ctaLink: "/partner"
    },
    {
      name: "Verified Business Partner",
      badge: "Most Popular for Contractors",
      badgeColor: "var(--brand)",
      target: "For MEP contractors, technicians & maintenance firms registering as a verified business.",
      isFree: false,
      popular: true,
      priceAnnualTotal: currency === "INR" ? "₹11,999" : "$149",
      priceAnnualPerMonth: currency === "INR" ? "₹999 / month" : "$12.50 / month",
      priceMonthlyOnly: currency === "INR" ? "₹1,499 / month" : "$19 / month",
      description: "Unlock all business features: list your services, receive nearby client leads, and dispatch technicians.",
      features: [
        "Verified Business Partner badge on marketplace",
        "Receive direct commercial & domestic client service leads",
        "Technician team accounts (Up to 10 staff)",
        "Automated job dispatching & route navigation",
        "In-app quotation builder & automated customer billing",
        "Direct bank settlements for completed jobs",
        "Customer messaging & dedicated support desk",
        "Monthly revenue & completed job performance reports"
      ],
      ctaText: "Register Business Account",
      ctaLink: "/partner"
    },
    {
      name: "Enterprise Multi-Branch",
      badge: "For Corporate Firms",
      badgeColor: "var(--navy)",
      target: "For large MEP contracting enterprises, multi-city franchises & corporate agencies.",
      isFree: false,
      popular: false,
      priceAnnualTotal: currency === "INR" ? "₹35,999" : "$449",
      priceAnnualPerMonth: currency === "INR" ? "₹2,999 / month" : "$37.50 / month",
      priceMonthlyOnly: currency === "INR" ? "₹4,499 / month" : "$55 / month",
      description: "Full enterprise power with unlimited technicians, multi-branch control, and custom integrations.",
      features: [
        "Unlimited technician and supervisor logins",
        "Multi-city & multi-warehouse operational management",
        "Priority lead distribution in designated operating zones",
        "Custom ERP / Webhook / Billing API access",
        "Dedicated Partner Success Account Director",
        "Custom SLA guarantee templates & company branding",
        "Comprehensive GST accounting export & tax logs",
        "24x7 Priority technical assistance line"
      ],
      ctaText: "Get Enterprise Access",
      ctaLink: "/partner"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '1200px' }}>
      {/* Title & Description */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          AMC MEP 24x7 Platform Plans
        </span>
        <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Transparent Platform Registration
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          100% Free for normal users to raise requests and track tickets. Simple, flat subscription for businesses and contractors wanting to receive leads and operate on the digital platform.
        </p>

        {/* Currency & Billing Switchers */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Currency Toggle */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f1f5f9', borderRadius: '30px', padding: '4px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setCurrency("INR")}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '26px',
                border: 'none',
                background: currency === "INR" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: currency === "INR" ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                color: currency === "INR" ? "var(--brand)" : "#64748b",
                fontSize: '0.95rem'
              }}
            >
              🇮🇳 India (INR ₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '26px',
                border: 'none',
                background: currency === "USD" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: currency === "USD" ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                color: currency === "USD" ? "var(--brand)" : "#64748b",
                fontSize: '0.95rem'
              }}
            >
              🌐 Global (USD $)
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f1f5f9', borderRadius: '30px', padding: '4px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => setBillingCycle("yearly")}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '26px',
                border: 'none',
                background: billingCycle === "yearly" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: billingCycle === "yearly" ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                color: billingCycle === "yearly" ? "var(--navy)" : "#64748b",
                fontSize: '0.95rem'
              }}
            >
              Annual Plan <span style={{ color: 'var(--brand)', fontSize: '0.8rem', marginLeft: '4px', fontWeight: 800 }}>(-30% OFF)</span>
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '26px',
                border: 'none',
                background: billingCycle === "monthly" ? "white" : "transparent",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: billingCycle === "monthly" ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                color: billingCycle === "monthly" ? "var(--navy)" : "#64748b",
                fontSize: '0.95rem'
              }}
            >
              Monthly Plan
            </button>
          </div>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
        {tiers.map((tier, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '22px',
                padding: '3rem 2.25rem',
                boxShadow: tier.popular ? '0 20px 40px -12px rgba(200, 24, 29, 0.25)' : '0 8px 24px -8px rgba(0,0,0,0.06)',
                border: tier.popular ? '2px solid var(--brand)' : '1px solid #e2e8f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: tier.popular ? 'translateY(-8px)' : 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Badge Tag */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: tier.isFree ? 'rgba(22, 163, 74, 0.1)' : (tier.popular ? 'var(--brand)' : 'rgba(15, 23, 42, 0.08)'),
                  color: tier.popular ? 'white' : (tier.isFree ? '#16a34a' : 'var(--navy)'),
                  padding: '5px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {tier.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.65rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                {tier.name}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', minHeight: '44px', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                {tier.target}
              </p>

              {/* Price Container */}
              <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                {tier.isFree ? (
                  <div>
                    <span style={{ fontSize: '3.2rem', fontWeight: 900, color: '#16a34a', letterSpacing: '-1px' }}>
                      {tier.priceAnnualTotal}
                    </span>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#16a34a', fontWeight: 700 }}>
                      ✓ Always 100% Free for Clients &amp; Users
                    </p>
                  </div>
                ) : (
                  <div>
                    {billingCycle === "yearly" ? (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-1px' }}>
                            {tier.priceAnnualTotal}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '1rem', fontWeight: 700 }}>
                            / year
                          </span>
                        </div>
                        {/* Subtext showing how much per month on annual fees */}
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem', color: 'var(--brand)', fontWeight: 800, backgroundColor: 'rgba(200, 24, 29, 0.06)', padding: '6px 12px', borderRadius: '8px', display: 'inline-block' }}>
                          👉 Just {tier.priceAnnualPerMonth} on annual billing
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-1px' }}>
                            {tier.priceMonthlyOnly}
                          </span>
                        </div>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                          Billed monthly. Cancel or switch anytime.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px', marginBottom: '1.25rem' }}>
                  {tier.isFree ? "Included Client Privileges:" : "Business Management Features:"}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', color: '#334155', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={tier.isFree ? "#16a34a" : "var(--brand)"} strokeWidth="3" style={{ marginRight: '0.75rem', marginTop: '2px', flexShrink: 0 }}>
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
                  padding: '1.1rem',
                  backgroundColor: tier.popular ? 'var(--brand)' : (tier.isFree ? '#16a34a' : '#f8fafc'),
                  color: (tier.popular || tier.isFree) ? 'white' : 'var(--navy)',
                  borderRadius: '12px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  border: tier.popular || tier.isFree ? 'none' : '1px solid #cbd5e1',
                  transition: 'all 0.2s',
                  boxShadow: tier.popular ? '0 4px 14px rgba(200, 24, 29, 0.35)' : 'none'
                }}
              >
                {tier.ctaText} &rarr;
              </Link>
            </div>
          );
        })}
      </div>

      {/* App Store Links Section */}
      <div style={{ marginTop: '5rem', backgroundColor: '#0f172a', borderRadius: '24px', padding: '3.5rem 3rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
        <div style={{ maxWidth: '650px' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Available for iPhone, iPad &amp; Android
          </span>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.2rem)', margin: '0.75rem 0 1rem', fontFamily: 'var(--font-heading)' }}>
            Download AMC MEP 24x7 on the App Store
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Normal users can raise requests and track tickets completely free. Contractors and service businesses can complete their verification in the app under the Partner portal.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="https://apps.apple.com/app/amc-mep-24x7-one-app/id6792257571" target="_blank" rel="noreferrer">
            <Image src="/badges/app-store.svg" alt="App Store" width={160} height={48} style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge" target="_blank" rel="noreferrer">
            <Image src="/badges/google-play.svg" alt="Google Play" width={160} height={48} style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
          </Link>
        </div>
      </div>
    </main>
  );
}
