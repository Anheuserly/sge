import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ThankYou.css";

const ThankYou = () => {
  const location = useLocation();
  const existing = location.state?.existing;

  return (
    <div className="thank-you">
      <h1>Thank You!</h1>
      {existing ? (
        <p>You are already registered as our partner 🎉</p>
      ) : (
        <p>Your application has been received. We’ll review and get back to you soon!</p>
      )}
    </div>
  );
};

export default ThankYou;
