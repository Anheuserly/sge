import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { appLinks, servicePillars, maintenance, serviceModel } from "@/lib/content";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Solutions"
            title="End-to-End Fire, Electrical & Plumbing Delivery"
            subtitle="Turnkey solutions with design, installation, testing, commissioning, and AMC."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          {servicePillars.map((pillar) => (
            <div key={pillar.title} className="panel">
              <div className="panel-head">
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.description}</p>
              </div>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Maintenance"
            title="Annual Maintenance Contracts"
            subtitle="Preventive schedules, compliance testing, and emergency coverage."
          />
          <div className="tag-grid">
            {maintenance.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service Model"
            title="Single-Point Accountability"
            subtitle="From concept to commissioning, every stage stays under one team."
          />
          <div className="step-flow dense">
            {serviceModel.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container app-band">
          <div>
            <span className="eyebrow">AMC Support</span>
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
