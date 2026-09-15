"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { pricingPlans } from "@/lib/content";

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

  return (
    <main className="container mx-auto px-4 py-10" style={{ maxWidth: '1160px' }}>
      {/* Title & Description */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.35rem 0.9rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
          Partner Plans &amp; Client Access
        </span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          Transparent Platform Pricing
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.92rem', maxWidth: '680px', margin: '0 auto 1.75rem', lineHeight: 1.5 }}>
          100% Free for normal users, property owners, and architects to request service and review designs. Direct business partner membership for contractors, studios, and agencies with a 10% annual discount.
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
              Annual Billing <span style={{ color: 'var(--brand)', fontSize: '0.72rem', marginLeft: '3px', fontWeight: 800 }}>(10% OFF)</span>
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
              Monthly Billing
            </button>
          </div>
        </div>
      </div>

      {/* Plan Cards Grid - Compact & Equal Visual Hierarchy */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', alignItems: 'stretch' }}>
        {pricingPlans.map((tier) => {
          const monthlyRaw = currency === "INR" ? tier.priceMonthlyINR : tier.priceMonthlyUSD;
          const currencySymbol = currency === "INR" ? "₹" : "$";

          // 10% annual discount calculation
          const annualTotalRaw = tier.isFree ? 0 : Math.round(monthlyRaw * 12 * 0.9);
          const annualPerMonthRaw = tier.isFree ? 0 : Math.round(annualTotalRaw / 12);

          const formattedMonthly = tier.isFree ? `${currencySymbol}0` : `${currencySymbol}${monthlyRaw.toLocaleString()}`;
          const formattedAnnualTotal = tier.isFree ? `${currencySymbol}0` : `${currencySymbol}${annualTotalRaw.toLocaleString()}`;
          const formattedAnnualPerMonth = tier.isFree ? `${currencySymbol}0 / mo` : `${currencySymbol}${annualPerMonthRaw.toLocaleString()} / mo`;

          return (
            <div
              key={tier.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '14px',
                padding: '1.5rem 1.15rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Badge Tag */}
              <div style={{ marginBottom: '0.65rem' }}>
                <span style={{
                  backgroundColor: tier.isFree ? 'rgba(22, 163, 74, 0.1)' : 'rgba(15, 23, 42, 0.08)',
                  color: tier.isFree ? '#16a34a' : 'var(--navy)',
                  padding: '3px 10px',
                  borderRadius: '16px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}>
                  {tier.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.2rem', fontWeight: 800 }}>
                {tier.name}
              </h3>

              {/* Team Capacity Badge */}
              <div style={{ marginBottom: '0.6rem' }}>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: tier.isFree ? '#16a34a' : 'var(--brand)',
                  backgroundColor: tier.isFree ? 'rgba(22, 163, 74, 0.08)' : 'rgba(200, 24, 29, 0.06)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>
                  👥 {tier.teamCapacity}
                </span>
              </div>

              <p style={{ color: '#64748b', fontSize: '0.78rem', minHeight: '34px', lineHeight: 1.4, marginBottom: '1rem' }}>
                {tier.target}
              </p>

              {/* Price Container */}
              <div style={{ marginBottom: '1.15rem', paddingBottom: '0.9rem', borderBottom: '1px solid #f1f5f9' }}>
                {tier.isFree ? (
                  <div>
                    <span style={{ fontSize: '1.9rem', fontWeight: 900, color: '#16a34a', letterSpacing: '-0.5px' }}>
                      {formattedMonthly}
                    </span>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>
                      ✓ Always 100% Free for Clients
                    </p>
                  </div>
                ) : (
                  <div>
                    {billingCycle === "yearly" ? (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                          <span style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.5px' }}>
                            {formattedAnnualTotal}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 700 }}>
                            / yr
                          </span>
                        </div>
                        <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.75rem', color: 'var(--brand)', fontWeight: 700, backgroundColor: 'rgba(200, 24, 29, 0.05)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                          10% OFF • Equivalent to {formattedAnnualPerMonth}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                          <span style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.5px' }}>
                            {formattedMonthly}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 700 }}>
                            / month
                          </span>
                        </div>
                        <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>
                          Direct membership • Billed monthly
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.6px', marginBottom: '0.75rem' }}>
                  {tier.isFree ? "Included Client Features:" : "Workspace & Team Features:"}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', color: '#334155', fontSize: '0.78rem', lineHeight: 1.35 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tier.isFree ? "#16a34a" : "var(--brand)"} strokeWidth="3" style={{ marginRight: '0.45rem', marginTop: '1px', flexShrink: 0 }}>
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
                  padding: '0.65rem',
                  backgroundColor: tier.isFree ? '#16a34a' : 'var(--brand)',
                  color: 'white',
                  borderRadius: '7px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  border: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                }}
              >
                {tier.ctaText} &rarr;
              </Link>
            </div>
          );
        })}
      </div>

      {/* Compact App Store Banner */}
      <div style={{ marginTop: '2.5rem', backgroundColor: '#09131f', borderRadius: '14px', padding: '1.5rem 1.75rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', border: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '560px' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            iOS &amp; Android App
          </span>
          <h3 style={{ fontSize: '1.15rem', margin: '0.35rem 0 0.45rem', fontFamily: 'var(--font-heading)' }}>
            AMC MEP 24x7 One App Ecosystem
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
            Normal clients raise repair tickets completely free. Business partners manage their team (5, 10, or 15 users) with internal chats, calls, automated work order dispatch, and invoice generation inside the app.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="https://apps.apple.com/app/amc-mep-24x7-one-app/id6792257571" target="_blank" rel="noreferrer">
            <Image src="/badges/app-store.svg" alt="App Store" width={130} height={38} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge" target="_blank" rel="noreferrer">
            <Image src="/badges/google-play.svg" alt="Google Play" width={130} height={38} />
          </Link>
        </div>
      </div>
    </main>
  );
}
