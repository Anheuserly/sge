import React from "react";
import Header from "../components/Header";
import BecomePartnerIntro from "../components/BecomePartnerIntro";
import BecomePartnerWhy from "../components/BecomePartnerWhy";
import BecomePartnerApply from "../components/BecomePartnerApply";

function BecomePartner() {
  return (
    <div className="become-partner-page">
      <Header />
      <div className="bp-container">
        <BecomePartnerIntro />
        <BecomePartnerWhy />
        <BecomePartnerApply />
      </div>
    </div>
  );
}

export default BecomePartner;
