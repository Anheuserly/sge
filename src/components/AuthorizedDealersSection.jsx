// src/components/AuthorizedDealersSection.js
import React, { useState } from 'react';
import '../styles/AuthorizedDealersSection.css';

import logoADI from '../path/dealerlogo/honeywell-logo-solo1.png';
import logoPumps from '../path/dealerlogo/kirloskar.png';
import logoAgni from '../path/dealerlogo/agnisuraksha.png';
import logoCooper from '../path/dealerlogo/coopersafety.png';
import logoZoloto from '../path/dealerlogo/zolotovalves_logo.jpg';
import logoJindal from '../path/dealerlogo/jindalhissar.png';

function AuthorizedDealersSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'fire-safety', name: 'Fire Safety Systems' },
    { id: 'pumps', name: 'Pumps' },
    { id: 'panels', name: 'Panels & Control Systems' },
    { id: 'valves', name: 'Valves & Fittings' },
    { id: 'pipes', name: 'Pipes & Tubing' }
  ];
  
  const dealers = [
    {
      id: 1,
      name: "ADI Honeywell",
      category: "fire-safety",
      description: "Global leader in fire safety and building automation systems",
      items: ["System Sensor", "Bosch", "Revel", "Securico", "Morley IAS", "Ascon"],
      logo: logoADI
    },
    {
      id: 2,
      name: "Pumps Division",
      category: "pumps",
      description: "Comprehensive range of industrial and commercial pumps",
      items: ["End Suction Pump", "Split Case Pump", "Multistage Pump", "Special & Engineered Pump", "Monobloc Pump", "Vacuum Pump"],
      logo: logoPumps
    },
    {
      id: 3,
      name: "Agni Suraksha",
      category: "panels",
      description: "Specialized in fire safety panels and control systems",
      items: ["Standard Panels", "Blizzard", "Customized Panels", "Auto Dialer"],
      logo: logoAgni
    },
    {
      id: 4,
      name: "Cooper Safety",
      category: "fire-safety",
      description: "Innovative fire detection and alarm solutions",
      items: ["Addressable Fire Alarm Systems", "Conventional Fire Alarm Systems"],
      logo: logoCooper
    },
    {
      id: 5,
      name: "Zoloto",
      category: "valves",
      description: "Premium valves for industrial and commercial applications",
      items: ["Butterfly Valve", "Non Return Valve", "Ball Valve", "Sluice Valve", "Gate Valve", "Pressure Reduce Valve", "Pressure Release Valve", "Globe Valve"],
      logo: logoZoloto
    },
    {
      id: 6,
      name: "Jindal Hissar",
      category: "pipes",
      description: "Leading manufacturer of pipes and structural steel products",
      items: ["Black Pipes", "Galvanized Pipes", "API (Line Pipe)", "Hollow Sections", "Steel Tubular Poles", "Seamless Pipe", "SKF CI Pipe", "Neco CI Pipe"],
      logo: logoJindal
    }
  ];
  
  const filteredDealers = activeCategory === 'all' 
    ? dealers 
    : dealers.filter(dealer => dealer.category === activeCategory);

  return (
    <section className="dealers-section">
      <div className="container">
        <div className="section-header">
          <h2>Authorized Dealers & Material Suppliers</h2>
          <p>
            We partner with industry-leading manufacturers to deliver premium materials and equipment 
            for all your project needs.
          </p>
        </div>
        
        <div className="category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="dealers-grid">
          {filteredDealers.map(dealer => (
            <div key={dealer.id} className="dealer-card">
              <div className="dealer-header">
                <div className="logo-container">
                  <div className="logo-placeholder">
                    {dealer.logo ? (
                      <img src={dealer.logo} alt={dealer.name} className="dealer-logo" />
                    ) : (
                      <span>{dealer.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                <div className="dealer-info">
                  <h3>{dealer.name}</h3>
                  <p className="dealer-desc">{dealer.description}</p>
                </div>
              </div>
              
              <div className="dealer-items">
                <h4>Products & Materials:</h4>
                <ul>
                  {dealer.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="supply-chain">
          <h3>Our Supply Chain Advantage</h3>
          <div className="chain-steps">
            <div className="chain-step">
              <div className="step-icon">1</div>
              <h4>Direct Partnerships</h4>
              <p>Authorized dealer status ensures genuine products and manufacturer support</p>
            </div>
            <div className="chain-step">
              <div className="step-icon">2</div>
              <h4>Quality Assurance</h4>
              <p>All materials meet industry standards and manufacturer specifications</p>
            </div>
            <div className="chain-step">
              <div className="step-icon">3</div>
              <h4>Timely Delivery</h4>
              <p>Efficient logistics network for on-time project delivery</p>
            </div>
            <div className="chain-step">
              <div className="step-icon">4</div>
              <h4>Technical Support</h4>
              <p>Manufacturer-backed technical assistance for all products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorizedDealersSection;