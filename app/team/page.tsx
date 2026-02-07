import SectionHeading from "@/components/SectionHeading";
import { teamStrength, keyContacts } from "@/lib/content";

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Team Strength"
            title="Experienced, Multi-Disciplinary Workforce"
            subtitle="A balance of seasoned expertise and next-generation vision."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {teamStrength.map((item) => (
            <div key={item} className="tile">
              <p className="name">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Key Contacts"
            title="Leadership & Points of Contact"
            subtitle="Reach the right specialist for your requirement."
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
    </main>
  );
}
