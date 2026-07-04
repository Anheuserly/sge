import Image from "next/image";
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
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Since 1997</span>
          <span>{company.iso}</span>
          <span>{company.phones[0]}</span>
        </div>
      </div>
      <div className="container header-inner">
        <Link className="brand" href="/">
          <Image
            src="/shreeganeshlogo.jpeg"
            alt="Shree Ganesh Enterprises logo"
            width={48}
            height={48}
            className="brand-logo"
            priority
          />
          <div>
            <p className="brand-name">{company.name}</p>
            <p className="brand-sub">{company.tagline}</p>
          </div>
        </Link>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="cta" href="/contact">
          Site Survey
        </Link>
      </div>
    </header>
  );
}
