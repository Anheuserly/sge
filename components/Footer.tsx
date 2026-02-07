import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
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
        </div>
        <div>
          <p className="footer-label">Websites</p>
          <p className="muted">{company.websites.join(" | ")}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
