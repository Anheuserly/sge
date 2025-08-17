import React, { useState } from "react";
import { registerPartner } from "../services/partnerService";
import "../styles/PartnerRegistration.css";

const PartnerRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerPartner(formData);
      console.log("✅ Partner Registered:", response);
      alert("Thank you for applying! We have saved your registration.");
    } catch (err) {
      alert("❌ Error saving partner. Please try again.");
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
