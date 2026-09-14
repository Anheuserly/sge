"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { name: "Adani Connex", logo: "/logos/adani_connex.svg", width: 170, height: 44 },
  { name: "L&T Construction", logo: "/logos/lnt.svg", width: 170, height: 44 },
  { name: "Delhi Metro", logo: "/logos/delhi_metro.svg", width: 160, height: 44 },
  { name: "HSCC (India) Limited", logo: "/logos/hscc.svg", width: 150, height: 44 },
  { name: "NBCC (India) Limited", logo: "/logos/nbcc.svg", width: 160, height: 44 },
  { name: "Indian Air Force", logo: "/logos/iaf.svg", width: 170, height: 44 },
  { name: "AIIMS Delhi", logo: "/logos/aiims.svg", width: 150, height: 44 },
];

export default function ClientMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (scrollRef.current) {
        scrollPos += 0.6;
        if (scrollPos >= scrollRef.current.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollRef.current.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "3.5rem 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", overflow: "hidden" }}>
      <div className="container">
        <h3 style={{ textAlign: "center", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "2.5px", color: "#64748b", marginBottom: "2.5rem", fontWeight: 700 }}>
          Trusted By Industry Leaders &amp; Partners
        </h3>
      </div>
      <div 
        ref={scrollRef}
        style={{ display: "flex", whiteSpace: "nowrap", overflow: "hidden" }}
      >
        <div style={{ display: "flex", gap: "2rem", padding: "0 2rem", alignItems: "center" }}>
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              style={{ 
                padding: "0.75rem 1.75rem",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                minWidth: "190px",
                height: "64px",
                flexShrink: 0
              }}
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={client.width} 
                height={client.height} 
                style={{ objectFit: "contain", maxHeight: "38px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
