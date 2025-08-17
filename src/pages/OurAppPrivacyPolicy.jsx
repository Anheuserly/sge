// src/pages/OurAppPrivacyPolicy.jsx

import React from "react";
import Header from "../components/Header";
import "../styles/OurAppPrivacyPolicy.css";

function OurAppPrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <Header />
      <div className="container">
        <h1>Privacy Policy</h1>

        {/* Policy for MEP AMC 24/7 Service App */}
        <section>
          <h2>Privacy Policy for MEP AMC 24/7 Service App</h2>
          <p>
            SHREE GANESH ENTERPRISES ("we", "our", or "us") operates the{" "}
            <strong>MEP AMC 24/7 Service App</strong>. This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our application.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We may collect personal information such as your name, contact
            number, email address, and location information to provide our
            maintenance, fire fighting, plumbing, and electrical AMC services.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            Your information is used to process service requests, manage annual
            maintenance contracts, send updates, and provide customer support.
          </p>
          <h3>Data Security</h3>
          <p>
            We take appropriate measures to protect your data from unauthorized
            access, disclosure, or misuse.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, contact us at:
            <br />
            SHREE GANESH ENTERPRISES
            <br />
            Email: info@sge.org.in
            <br />
            Phone:
          </p>
        </section>

        {/* Policy for MEP AMC 24/7 Partner App */}
        <section>
          <h2>Privacy Policy for MEP AMC 24/7 Partner App</h2>
          <p>
            SHREE GANESH ENTERPRISES ("we", "our", or "us") operates the{" "}
            <strong>MEP AMC 24/7 Partner App</strong>. This Privacy Policy
            outlines how we collect, use, and safeguard the data of our
            registered partners and service providers.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We may collect your name, contact number, business details, service
            area, and real-time location data to enable service assignment,
            tracking, and communication.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            The collected information is used to connect you with customers,
            track service requests, process payments, and improve our partner
            network.
          </p>
          <h3>Data Security</h3>
          <p>
            We implement strong security measures to ensure that partner data
            remains safe and confidential.
          </p>
          <h3>Contact Us</h3>
          <p>
            For questions regarding this Privacy Policy, contact us at:
            <br />
            SHREE GANESH ENTERPRISES
            <br />
            Email: info@sge.org.in
            <br />
            Phone:
          </p>
        </section>
      </div>
    </div>
  );
}

export default OurAppPrivacyPolicy;
