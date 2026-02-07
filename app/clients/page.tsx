import SectionHeading from "@/components/SectionHeading";
import { clients, certifications } from "@/lib/content";

export default function ClientsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Clients"
            title="Institutions That Trust SGE"
            subtitle="A diverse portfolio across government, private, and multinational organizations."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Client Portfolio"
            title="Key Clients"
            subtitle="Representative organizations served by Shree Ganesh Enterprises."
          />
          <div className="logo-grid">
            {clients.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications"
            title="Registrations & Approvals"
            subtitle="Quality and compliance assurance across statutory and industry bodies."
          />
          <div className="grid-3">
            {certifications.map((item) => (
              <div key={item} className="tile">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
