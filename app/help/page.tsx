import Link from "next/link";
import { helpContent } from "@/lib/content";

export const metadata = {
  title: "Help Center | SGE Platform",
  description: "Get support for the SGE MEP Platform.",
};

export default function HelpCenter() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        {helpContent.title}
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '3rem' }}>
        {helpContent.subtitle}
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {helpContent.categories.map((cat, idx) => (
          <Link 
            key={idx} 
            href={cat.href} 
            style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>{cat.title}</h3>
            <p style={{ color: '#64748b' }}>{cat.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
