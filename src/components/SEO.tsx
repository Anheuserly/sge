"use client";
import React from "react";
import Script from "next/script";

export default function SEO() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SHREE GANESH ENTERPRISES",
    url: "https://www.sge.org.in",
    image: "https://www.sge.org.in/amcmep-icon.png",
    logo: "https://www.sge.org.in/amcmep-icon.png",
    telephone: "+91-9871936847",
    email: "anilkumarsaini0507@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "House No. 535, Second Floor, Left Side, Khasra No. 60, 128-D21, Chattarpur Pahadi",
      addressLocality: "New Delhi",
      postalCode: "110074",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5068707,
      longitude: 77.1847125,
    },

    founder: {
      "@type": "Person",
      name: "A. K. Saini",
      sameAs: [
        "https://www.youtube.com/@anilsainibusinesscoach",
        "https://www.youtube.com/@COACHANILSAINI",
        "https://www.instagram.com/coachanilsaini.official",
        "https://www.instagram.com/coachanilsaininlp"
      ],
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9871936847",
      contactType: "customer service",
      areaServed: ["IN"],
      availableLanguage: ["en", "hi"],
    },

    service: [
      "Fire Fighting Systems",
      "Fire Alarm & Detection Systems",
      "Electrical Contracting",
      "Plumbing & PHE Solutions",
      "AMC (Annual Maintenance Contracts)",
      "Separation & Passive Fire Systems",
      "Security Surveillance Systems",
      "IT & Network Infrastructure",
      "AutoCAD Drafting & Design Support"
    ],

    hasPart: [
      { "@type": "WebPage", url: "https://www.sge.org.in/about", name: "About Us" },
      { "@type": "WebPage", url: "https://www.sge.org.in/contact", name: "Contact Us" },
      { "@type": "WebPage", url: "https://www.sge.org.in/portfolio", name: "Portfolio" },
      { "@type": "WebPage", url: "https://www.sge.org.in/blog", name: "Blog" },
      { "@type": "WebPage", url: "https://www.sge.org.in/journal", name: "Journal" },
      { "@type": "WebPage", url: "https://www.sge.org.in/services", name: "Services" },
    ],

    // ==========================================
    //           MASTER SAMEAS (UPDATED)
    // ==========================================
    sameAs: [
      // --- SGE Primary ---
      "https://www.facebook.com/profile.php?id=61566464961902",
      "https://www.instagram.com/_sgemep/",
      "https://www.linkedin.com/in/shree-ganesh-enterprises-1385b5271/",
      "https://www.youtube.com/@sgemep",
      "https://x.com/_sgemep",

      // --- AMC MEP ---
      "https://x.com/amcmep24x7",
      "https://www.instagram.com/amcmep247",
      "https://www.linkedin.com/in/amc-mep-b53b68391",
      "https://www.facebook.com/profile.php?id=61583370617483",

      // --- Mobile Apps ---
      "https://play.google.com/store/apps/details?id=com.mepsge.amcsge",
      "https://play.google.com/store/apps/details?id=com.mepsge.amcsgepartner.amcsgepartner",

      // --- Communication ---
      "https://wa.me/919871936847",
      "https://t.me/+HJbJBvfbGyMxMzI1",
      "https://discord.gg/hp5Z6ddTNy",

      // --- Other Business Domains ---
      "https://www.ssengineers.in/",
      "https://www.amcmep.in/",
      "https://www.arcelevenarchitect.com/",
      "https://www.notshubham.com/",

      // --- Arc Eleven Architects ---
      "https://www.linkedin.com/in/ar-shashank-saini-a0830b19b",
      "https://www.facebook.com/profile.php?id=61578009358525",
      "https://koloapp.in/delhi/architects/shashank-saini--delhi",
      "https://www.instagram.com/arc11studio_/",

      // --- OWNER CHANNELS (NEWLY ADDED) ---
      "https://www.youtube.com/@anilsainibusinesscoach",
      "https://www.youtube.com/@COACHANILSAINI",
      "https://www.instagram.com/coachanilsaini.official",
      "https://www.instagram.com/coachanilsaininlp",

      // Google Maps
      "https://www.google.com/maps/place/Shree+Ganesh+Enterprises/"
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does SHREE GANESH ENTERPRISES provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Shree Ganesh Enterprises provides fire fighting systems, fire alarm & detection, electrical contracting, plumbing & PHE solutions, AMC services, security systems, separation systems, IT solutions and AutoCAD drafting services across India.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide AMC services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we offer Annual Maintenance Contracts (AMC) for fire safety systems, electrical systems, pumps, CCTV surveillance, plumbing and industrial safety equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Where do you operate?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Shree Ganesh Enterprises operates PAN-India, serving commercial, residential, industrial and government clients across all major states.",
        },
      },
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHREE GANESH ENTERPRISES",
    url: "https://www.sge.org.in",
    logo: "https://www.sge.org.in/amcmep-icon.png",

    sameAs: [
      "https://www.facebook.com/profile.php?id=61566464961902",
      "https://www.instagram.com/_sgemep/",
      "https://www.linkedin.com/in/shree-ganesh-enterprises-1385b5271/",
      "https://www.youtube.com/@sgemep",
      "https://x.com/_sgemep",

      "https://x.com/amcmep24x7",
      "https://www.instagram.com/amcmep247",
      "https://www.linkedin.com/in/amc-mep-b53b68391",
      "https://www.facebook.com/profile.php?id=61583370617483",

      "https://www.ssengineers.in/",
      "https://www.amcmep.in/",
      "https://www.arcelevenarchitect.com/",
      "https://www.notshubham.com/",

      // Owner Links
      "https://www.youtube.com/@anilsainibusinesscoach",
      "https://www.youtube.com/@COACHANILSAINI",
      "https://www.instagram.com/coachanilsaini.official",
      "https://www.instagram.com/coachanilsaininlp"
    ],
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sge.org.in" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.sge.org.in/about" },
      { "@type": "ListItem", position: 3, name: "Contact", item: "https://www.sge.org.in/contact" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fire Safety Systems, Electrical Contracting & MEP Solutions",
    provider: {
      "@type": "LocalBusiness",
      name: "SHREE GANESH ENTERPRISES",
      url: "https://www.sge.org.in",
    },
    areaServed: {
      "@type": "Place",
      name: "PAN India",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.sge.org.in/services",
      priceCurrency: "INR",
      price: "Consultation-based",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Script id="ld-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
