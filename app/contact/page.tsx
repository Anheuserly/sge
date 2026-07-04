import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { appLinks, company, keyContacts } from "@/lib/content";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Secure Your Facility"
            subtitle="Talk to our engineers for fire protection, MEP, or AMC requirements."
          />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h3>Head Office</h3>
            <p className="muted">{company.address}</p>
            <div className="contact-list">
              <div>
                <span>Phone</span>
                <p>{company.phones.join(" | ")}</p>
              </div>
              <div>
                <span>Websites</span>
                <p>{company.websites.join(" | ")}</p>
              </div>
              <div>
                <span>Email</span>
                <p>{company.email}</p>
              </div>
            </div>
            <div className="notice">
              <p className="muted">
                For urgent support, contact the primary numbers listed above.
              </p>
            </div>
          </div>
          <div className="form-panel">
            <h3>Send a Requirement</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Key Contacts"
            title="Direct Points of Contact"
            subtitle="Connect with the right lead for quick response."
          />
          <div className="grid-3">
            {keyContacts.map((contact) => (
              <div key={contact.phone} className="tile contact-card">
                <p className="role">{contact.role}</p>
                <p className="name">{contact.name}</p>
                <p className="muted">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container app-band">
          <div>
            <span className="eyebrow">AMC Clients</span>
            <h2>{appLinks.name}</h2>
            <p className="muted">{appLinks.summary}</p>
          </div>
          <div className="app-downloads">
            <Link href={appLinks.appStore} target="_blank" rel="noreferrer">
              <Image
                src="/badges/app-store.svg"
                alt="Download on the App Store"
                width={135}
                height={40}
              />
            </Link>
            <Link href={appLinks.playStore} target="_blank" rel="noreferrer">
              <Image
                src="/badges/google-play.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
