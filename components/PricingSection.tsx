"use client";

import { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  
  const plans = [
    {
      name: "Starter",
      description: "For small facilities and offices.",
      priceMonthly: "$49",
      priceYearly: "$39",
      features: [
        "Up to 5 Users",
        "Basic AMC Tracking",
        "Email Support",
        "Standard SLA"
      ]
    },
    {
      name: "Professional",
      description: "For mid-sized commercial spaces.",
      priceMonthly: "$149",
      priceYearly: "$119",
      popular: true,
      features: [
        "Up to 25 Users",
        "Advanced AMC & Preventive Maintenance",
        "24x7 App Access",
        "Priority Support",
        "Asset Management"
      ]
    },
    {
      name: "Enterprise",
      description: "For large industrial & global scale.",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      features: [
        "Unlimited Users",
        "Full MEP & Fire Safety Systems",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Global Deployment"
      ]
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>Transparent International Pricing</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Choose the perfect plan for your facility management needs.</p>
          
          <div style={{ display: 'inline-flex', backgroundColor: '#e2e8f0', borderRadius: '30px', padding: '4px' }}>
            <button 
              onClick={() => setBilling('monthly')}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '26px', border: 'none', background: billing === 'monthly' ? 'white' : 'transparent', fontWeight: 600, cursor: 'pointer', boxShadow: billing === 'monthly' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', color: billing === 'monthly' ? 'var(--navy)' : '#64748b' }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '26px', border: 'none', background: billing === 'yearly' ? 'white' : 'transparent', fontWeight: 600, cursor: 'pointer', boxShadow: billing === 'yearly' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', color: billing === 'yearly' ? 'var(--navy)' : '#64748b' }}
            >
              Yearly <span style={{ color: 'var(--brand)', fontSize: '0.75rem', marginLeft: '0.25rem' }}>(-20%)</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: plan.popular ? '0 20px 40px -15px rgba(200,24,29,0.2)' : '0 10px 30px -10px rgba(0,0,0,0.1)', border: plan.popular ? '2px solid var(--brand)' : '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {plan.popular && (
                <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--brand)', color: 'white', padding: '4px 16px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Most Popular</span>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem' }}>{plan.description}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--navy)' }}>{billing === 'monthly' ? plan.priceMonthly : plan.priceYearly}</span>
                {plan.priceMonthly !== 'Custom' && <span style={{ color: '#94a3b8', fontWeight: 500 }}>/mo</span>}
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                {plan.features.map((feature, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#334155' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3" style={{ marginRight: '1rem' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href={plan.priceMonthly === 'Custom' ? '/contact' : 'https://amcmep.in/pricing'} style={{ display: 'block', textAlign: 'center', padding: '1rem', backgroundColor: plan.popular ? 'var(--brand)' : '#f1f5f9', color: plan.popular ? 'white' : 'var(--navy)', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }}>
                {plan.priceMonthly === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
