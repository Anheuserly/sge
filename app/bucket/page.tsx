"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BucketPage() {
  const [bucket, setBucket] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sge_bucket");
      if (stored) {
        setBucket(JSON.parse(stored));
      }
    } catch (err) {}
  }, []);

  const removeItem = (id: string) => {
    const updated = bucket.filter(item => item.id !== id);
    setBucket(updated);
    localStorage.setItem("sge_bucket", JSON.stringify(updated));
  };

  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Your Service Bucket</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '3rem' }}>
        Review the MEP products and services you wish to request an AMC or quote for.
      </p>

      {bucket.length > 0 ? (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {bucket.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: 'white' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#f1f5f9', borderRadius: '8px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  {item.media_url ? (
                    <Image src={item.media_url} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  ) : null}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: '0 0 0.25rem 0' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>ID: {item.id}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ padding: '0.5rem 1rem', border: '1px solid #fee2e2', backgroundColor: '#fef2f2', color: '#ef4444', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to proceed?</h3>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>Submit your bucket to our engineering team to receive a formal AMC quotation and deployment schedule.</p>
            <Link href="mailto:support@sge.org.in?subject=AMC Quote Request" style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 'bold', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem' }}>
              Request Official Quote
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" style={{ marginBottom: '1rem' }}>
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1rem' }}>Your bucket is empty</h3>
          <p style={{ color: '#64748b' }}>Explore our marketplace to find services and products.</p>
          <Link href="/#marketplace" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--brand)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            View Full Catalog
          </Link>
        </div>
      )}
    </main>
  );
}
