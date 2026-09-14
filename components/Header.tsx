import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header className="site-header" suppressHydrationWarning style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: 'white', padding: '0.75rem 0' }}>
      <div className="container header-inner" suppressHydrationWarning style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link className="brand" href="/" suppressHydrationWarning style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <Image
            src="/shreeganeshlogo.jpeg"
            alt="Shree Ganesh Enterprises logo"
            width={52}
            height={52}
            style={{ borderRadius: "50%", objectFit: "cover", boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            priority
          />
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            SHREE GANESH ENTERPRISES
          </span>
        </Link>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '0 1.5rem' }}>
          <HeaderSearch />
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/bucket" suppressHydrationWarning style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: 'var(--navy)', transition: 'background-color 0.2s' }} aria-label="Bucket / Cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
