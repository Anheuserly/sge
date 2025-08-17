import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BecomePartnerApply.css";

function BecomePartnerApply() {
  const navigate = useNavigate();

  return (
    <section className="bp-apply">
      <h2>How to Apply</h2>
      <p>
        Download the <strong>MEP AMC 24/7 Partner App</strong> to get started or{" "}
        contact us at{" "}
        <a href="mailto:info@shreeganeshenterprises.com">
          info@shreeganeshenterprises.com
        </a>
      </p>

      <div className="bp-apply-actions">
        <button
          className="bp-apply-btn"
          onClick={() => navigate("/partner-registration")}
        >
          Apply Online
        </button>
      </div>
    </section>
  );
}

export default BecomePartnerApply;
