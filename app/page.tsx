import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import {
  company,
  highlights,
  achievements,
  featuredSolutions,
  serviceModel,
  methodology,
  majorProjects,
  clients,
  certifications,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SGE • Since 1997</span>
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
              <span>Design → AMC</span>
              <span>Fire • Plumbing • Electrical</span>
            </div>
          </div>
          <div className="hero-stack">
            <div className="hero-card">
              <p className="card-title">All-in-One Service Model</p>
              <p className="muted">
                Single-point accountability from concept to compliance-ready
                handover.
              </p>
              <div className="step-flow">
                {serviceModel.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
            <div className="hero-card accent">
              <p className="card-title">Rebranded Legacy</p>
              <p className="muted">{company.legal}</p>
              <p className="muted">{company.association}</p>
              <Link className="button small" href="/projects">
                View Project Capability
              </Link>
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
          <div className="panel">
            <h3>Experience & Achievements</h3>
            <ul className="checklist">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
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
