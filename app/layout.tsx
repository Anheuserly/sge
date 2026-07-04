import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

export { metadata } from "./metadata";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const siteUrl = "https://www.sge.org.in";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              legalName: company.legal,
              url: siteUrl,
              foundingDate: company.founded,
              description: company.overview,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address,
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              contactPoint: company.phones.map((phone) => ({
                "@type": "ContactPoint",
                telephone: phone,
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              })),
              sameAs: company.websites.map((website) =>
                website.startsWith("http") ? website : `https://${website}`
              ),
            }),
          }}
        />
      </body>
    </html>
  );
}
