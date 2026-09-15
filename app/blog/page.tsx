import Link from "next/link";
import { blogContent } from "@/lib/content";

export const metadata = {
  title: "Industry Insights & Technical Engineering Blog | SGE Platform",
  description: "Technical articles, fire safety regulatory guides, MEP engineering best practices, and facility maintenance insights from Shree Ganesh Enterprises.",
};

export default function BlogPage() {
  const posts = blogContent.posts;

  return (
    <main className="container mx-auto px-4 py-12" style={{ maxWidth: '1000px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ backgroundColor: 'rgba(200, 24, 29, 0.08)', color: 'var(--brand)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
          {blogContent.badge}
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
          {blogContent.title}
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          {blogContent.subtitle}
        </p>
      </div>

      {/* Featured Article */}
      {posts.length > 0 && (
        <div style={{ backgroundColor: '#0f172a', borderRadius: '20px', padding: '2rem 2.5rem', color: 'white', marginBottom: '3rem', boxShadow: '0 10px 25px -10px rgba(15, 23, 42, 0.2)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'var(--brand)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
              {blogContent.featuredBadge}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{posts[0].date} • {posts[0].readTime}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', margin: '0 0 1.25rem 0', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
            {posts[0].title}
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '850px' }}>
            {posts[0].summary}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>By {posts[0].author}</span>
            <Link
              href={blogContent.readFullChecklistLink}
              style={{
                padding: '0.75rem 1.75rem',
                backgroundColor: 'white',
                color: 'var(--navy)',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              {blogContent.readFullChecklistText}
            </Link>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {posts.slice(1).map((post, idx) => (
          <article
            key={idx}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {post.category}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{post.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', margin: '0 0 1rem 0', lineHeight: 1.4, fontWeight: 700, flex: '0 0 auto' }}>
              {post.title}
            </h3>

            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', flex: 1 }}>
              {post.summary}
            </p>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                    #{tag}
                  </span>
                ))}
              </div>
              <Link href="/academy" style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                {blogContent.learnMoreText}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
