import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ================= COMPANY INFO ================= */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SHREE GANESHE ENTERPRISES
            </h2>

            <p className="text-gray-300 mt-6 max-w-md leading-relaxed text-lg">
              Your trusted partner for comprehensive MEP solutions, fire safety
              systems, electrical & plumbing services, and annual maintenance
              contracts across Delhi NCR. We stand for quality, safety, and
              reliability in every project we deliver.
            </p>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-600 pl-3">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "Fire Fighting Systems",
                "Fire Detection & Alarm",
                "Electrical LT / HT Works",
                "Plumbing & Drainage",
                "AMC Services",
                "Security Systems",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-red-400 transition group"
                  >
                    <span className="mr-3 text-red-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-600 pl-3">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">

              {/* Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-4 text-white">
                  📍
                </div>
                <p>
                  <strong>HO:</strong> Plot No. 535, S/F, D-21,  
                  Chattarpur Pahadi,  
                  New Delhi – 110074
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-4 text-white">
                  📞
                </div>
                <p>
                  <a href="tel:+918527378555" className="hover:text-red-400">
                    +91 85273 78555
                  </a>
                  <br />
                  <a href="tel:+919871936847" className="hover:text-red-400">
                    +91 98719 36847
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-4 text-white">
                  ✉️
                </div>
                <p>
                  <a
                    href="mailto:info@sge.org.in"
                    className="hover:text-red-400"
                  >
                    info@sge.org.in
                  </a>
                  <br />
                  <a
                    href="mailto:anilkumarsaini0507@gmail.com"
                    className="hover:text-red-400"
                  >
                    anilkumarsaini0507@gmail.com
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">

          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} SHREE GANESHE ENTERPRISES.  
              All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Providing excellence in MEP & Fire Safety Solutions since 2010
            </p>
          </div>

          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-red-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-red-400 transition">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-red-400 transition">
              Sitemap
            </Link>
          </div>

        </div>
      </div>

      {/* ================= DECORATIVE GLOW ================= */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-600 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 right-0 w-56 h-56 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
    </footer>
  );
}
