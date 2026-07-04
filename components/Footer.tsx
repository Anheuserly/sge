import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image
            src="/shreeganeshlogo.jpeg"
            alt="Shree Ganesh Enterprises logo"
            width={54}
            height={54}
            className="brand-logo"
          />
          <p className="footer-title">{company.name}</p>
          <p className="muted">{company.legal}</p>
        </div>
        <div>
          <p className="footer-label">Head Office</p>
          <p className="muted">{company.address}</p>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <p className="muted">{company.phones.join(" | ")}</p>
          <p className="muted">{company.email}</p>
        </div>
        <div>
          <p className="footer-label">Websites</p>
          {company.websites.map((website) => (
            <p className="muted" key={website}>
              <Link href={`https://${website}`}>{website}</Link>
            </p>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
