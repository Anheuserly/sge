import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import {
  appLinks,
  company,
  highlights,
  documentLibrary,
  featuredSolutions,
  heroCapabilities,
  serviceModel,
  methodology,
  majorProjects,
  clients,
  certifications,
  operatingSectors,
  proofPoints,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SGE / New Delhi / Since 1997</span>
            <h1>{company.name}</h1>
            <p className="hero-subtitle">{company.tagline}</p>
            <p className="lead">{company.overview}</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Request a Site Survey
              </Link>
              <Link className="button ghost" href="/services">
                Explore Solutions
              </Link>
            </div>
            <div className="hero-badges">
              <span>{company.iso}</span>
              <span>Design to AMC</span>
              <span>Fire • Plumbing • Electrical</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="SGE service capability summary">
            <div className="operations-panel">
              <div className="operations-head">
                <span>Service Desk</span>
                <strong>Design to AMC</strong>
              </div>
              <div className="operations-grid">
                {heroCapabilities.map((item) => (
                  <div key={item.label} className="operations-row">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <div className="operations-footer">
                {serviceModel.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
              <p className="muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Core Solutions"
            title="Fire Safety, MEP, and Integrated Systems"
            subtitle="Our technical solutions cover design to commissioning for complex facilities."
          />
          <div className="grid-2">
            {featuredSolutions.map((solution) => (
              <div key={solution.title} className="panel">
                <div className="panel-head">
                  <h3>{solution.title}</h3>
                  <p className="muted">{solution.description}</p>
                </div>
                <ul>
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Work Methodology"
              title="Structured Execution, Clear Accountability"
              subtitle="Every project moves through three disciplined stages to ensure compliance."
            />
            <div className="grid-3">
              {methodology.map((step) => (
                <div key={step.title} className="tile">
                  <h4>{step.title}</h4>
                  <p className="muted">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel proof-panel">
            <h3>Why Clients Use SGE</h3>
            <ul className="checklist">
              {proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Major Projects"
            title="Execution Across India"
            subtitle="Selected projects across residential, healthcare, metro, and commercial sectors."
          />
          <div className="list-grid">
            {majorProjects.map((item) => (
              <div key={item} className="list-card">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container app-band">
          <div>
            <span className="eyebrow">Digital Service Support</span>
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

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Clients & Compliance"
            title="Trusted by Institutions and Developers"
            subtitle="Long-term relationships backed by statutory registrations and industry approvals."
          />
          <div className="grid-2">
            <div className="panel">
              <h3>Key Clients</h3>
              <div className="logo-grid">
                {clients.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="panel">
              <h3>Registrations & Certifications</h3>
              <ul>
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Sectors"
            title="Built for Operational Facilities"
            subtitle="SGE works across active buildings where safety, uptime and documentation matter."
          />
          <div className="sector-grid">
            {operatingSectors.map((sector) => (
              <span key={sector}>{sector}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Document Library"
            title="Profile and Compliance Downloads"
            subtitle="Open the profile deck or statutory documents directly from the website."
          />
          <div className="document-grid">
            {documentLibrary.map((doc) => (
              <Link href={doc.href} className="document-card" key={doc.title}>
                <span className="document-type">{doc.type}</span>
                <strong>{doc.title}</strong>
                <small>Download PDF</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Start a Project"
              title="Book a Site Survey"
              subtitle="Share your scope and we will propose the right protection and MEP plan."
            />
          </div>
          <div className="form-panel">
            <h3>Request a Service Survey</h3>
            <p className="muted">
              Provide site details and requirements. Our team will respond with a
              detailed plan.
            </p>
            <ServiceRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
