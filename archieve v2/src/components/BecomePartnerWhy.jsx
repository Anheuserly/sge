import React from "react";
import "../styles/BecomePartnerWhy.css";

const BecomePartnerWhy = () => {
  const reasons = [
    "Get access to regular AMC service requests 24/7",
    "Grow your business with our trusted network",
    "Easy payments and transparent service flow",
    "Real-time service assignments through our Partner App",
  ];

  return (
    <section className="bp-why">
      <h2>Why Partner With Us?</h2>
      <ul>
        {reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </section>
  );
};

export default BecomePartnerWhy;
