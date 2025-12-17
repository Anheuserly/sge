// src/app/contact/page.tsx

import ContactForm from "../contact/ContactForm/page";
import ContactHero from "../../components/Contact/ContactHero";

export const metadata = {
  title: "Contact Us | SHREE GANESHE ENTERPRISES – MEP & Fire Safety Experts",
  description:
    "Contact SHREE GANESHE ENTERPRISES for Fire Fighting Systems, MEP Services, Electrical, Plumbing & AMC solutions across Delhi NCR. Get expert consultation today.",
  alternates: { canonical: "https://www.sge.org.in/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <ContactHero />

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gray-900 rounded-2xl rotate-1 opacity-5"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Office Information
              </h2>

              <div className="space-y-8">

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Head Office
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>SHREE GANESHE ENTERPRISES</strong> <br />
                      Plot No. 535, S/F, D-21, <br />
                      Chattarpur Pahadi, <br />
                      New Delhi – 110074
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+918527378555"
                        className="hover:text-red-600 transition"
                      >
                        +91 85273 78555
                      </a>
                      <br />
                      <a
                        href="tel:+919871936847"
                        className="hover:text-red-600 transition"
                      >
                        +91 98719 36847
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@sge.org.in"
                        className="hover:text-red-600 transition"
                      >
                        info@sge.org.in
                      </a>
                      <br />
                      <a
                        href="mailto:anilkumarsaini0507@gmail.com"
                        className="hover:text-red-600 transition"
                      >
                        anilkumarsaini0507@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= BUSINESS HOURS ================= */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Business Hours
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-medium text-gray-900">
                      9:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">
                      Emergency Services Only
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= EMERGENCY ================= */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  24×7 Emergency Support
                </h3>
                <p className="text-gray-600 mb-2">
                  For urgent fire safety or critical MEP emergencies:
                </p>
                <p className="text-red-600 font-semibold text-lg">
                  +91 85273 78555
                </p>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gray-900 rounded-2xl -rotate-1 opacity-5"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Location
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8856281986364!2d77.1821376!3d28.506875399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f768fdfa54b%3A0xd41288173e5dfa86!2sShree%20Ganesh%20Enterprises!5e0!3m2!1sen!2sin!4v1725958500000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SHREE GANESHE ENTERPRISES Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
