"use client";

import React from "react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1770&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>

          <div className="h-1 w-24 bg-red-600 mx-auto mb-8"></div>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your fire safety, MEP, electrical, plumbing, or AMC
            requirements? Our experts are here to provide reliable solutions and
            professional consultation across Delhi NCR.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact-form"
              className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition shadow-lg"
            >
              Send a Message
            </Link>

            <a
              href="tel:+918527378555"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Call Now: +91 85273 78555
            </a>
          </div>

          {/* Contact Details Block */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">

            {/* Address */}
            <div className="bg-black/40 rounded-xl p-6 backdrop-blur-md">
              <div className="text-red-500 text-2xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Head Office</h3>
              <p className="text-sm leading-relaxed">
                Plot No. 535, S/F, D-21, <br />
                Chattarpur Pahadi, <br />
                New Delhi – 110074
              </p>
            </div>

            {/* Phone */}
            <div className="bg-black/40 rounded-xl p-6 backdrop-blur-md">
              <div className="text-red-500 text-2xl mb-3">📞</div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm leading-relaxed">
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
            <div className="bg-black/40 rounded-xl p-6 backdrop-blur-md">
              <div className="text-red-500 text-2xl mb-3">✉️</div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm leading-relaxed">
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
    </section>
  );
}
