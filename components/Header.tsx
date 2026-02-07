import Link from "next/link";
import { company } from "@/lib/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-mark">SGE</div>
          <div>
            <p className="brand-name">{company.name}</p>
            <p className="brand-sub">{company.tagline}</p>
          </div>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="cta" href="/contact">
          Request a Site Survey
        </Link>
      </div>
    </header>
  );
}
