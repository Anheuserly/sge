"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          borderRadius: "30px",
          backgroundColor: "var(--brand)",
          color: "white",
          border: "none",
          boxShadow: "var(--shadow)",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Toggle Assistant Chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            width: "360px",
            height: "550px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid var(--line)"
          }}
        >
          <div style={{ backgroundColor: "var(--brand)", padding: "1rem", color: "white" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem", display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
              SGE Smart Assistant
            </h3>
            <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem", opacity: 0.9 }}>
              Ask about our MEP services, catalog, or create a ticket.
            </p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#f9f9f9", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", overflowY: 'auto' }}>
            <div style={{ alignSelf: 'flex-start', background: 'white', padding: '0.75rem', borderRadius: '12px', border: '1px solid #eee', fontSize: '0.9rem', maxWidth: '85%' }}>
              Hello! I am the SGE Assistant. You can ask me to book a service, request a site survey, or check our catalog!
            </div>
          </div>
          <div style={{ padding: "1rem", borderTop: "1px solid #eee", backgroundColor: "white", display: "flex", gap: "0.5rem" }}>
            <input 
              type="text" 
              placeholder="Type your request here..." 
              style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", border: "1px solid #ddd", fontSize: "0.9rem", outline: "none" }}
              onFocus={(e) => e.target.style.borderColor = "var(--brand)"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
            <button style={{ backgroundColor: "var(--brand)", color: "white", border: "none", borderRadius: "8px", padding: "0 1rem", cursor: "pointer", fontWeight: "bold" }}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
