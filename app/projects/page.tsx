import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projectTypes, majorProjects, methodology } from "@/lib/content";

const sampleLocation =
  "DLF WeWork Forum Building-1, Cyber City Phase-2, Gurugram";

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Execution That Scales with Complexity"
            subtitle="Fire safety and MEP delivery for high-rise, infrastructure, and institutional developments."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Sector Coverage"
            title="Project Types"
            subtitle="Multi-sector expertise across residential, healthcare, metro, and commercial sites."
          />
          <div className="list-grid">
            {projectTypes.map((item) => (
              <div key={item} className="list-card">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Major Projects"
              title="Selected Executions"
              subtitle="Representative portfolio of completed work across India."
            />
            <div className="list-grid">
              {majorProjects.map((item) => (
                <div key={item} className="list-card">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>Example Reference Location</h3>
            <p className="muted">{sampleLocation}</p>
            <p className="muted">
              Structured project control ensures safe handover and compliance
              readiness.
            </p>
            <Link className="button" href="/contact">
              Start a Project Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Work Methodology"
            title="Three-Stage Delivery"
            subtitle="Clear milestones from investigation through handover."
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
      </section>
    </main>
  );
}
