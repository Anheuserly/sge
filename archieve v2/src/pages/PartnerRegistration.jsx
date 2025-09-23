import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation
import { registerPartner } from "../services/partnerAuthService";
import "../styles/PartnerRegistration.css";

const PartnerRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ hook for redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10,15}$/.test(formData.phone)) {
      alert("Please enter a valid phone number (10–15 digits).");
      return;
    }

    setLoading(true);

    try {
      const response = await registerPartner(formData);

      if (response.success) {
        if (response.message === "Partner already exists") {
          navigate("/thank-you", { state: { existing: true } });
        } else {
          navigate("/thank-you", { state: { existing: false } });
        }
      } else {
        throw response.error;
      }
    } catch (err) {
      console.error("❌ Error registering partner:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="partner-registration">
      <h1>Partner Registration</h1>
      <form className="pr-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default PartnerRegistration;
