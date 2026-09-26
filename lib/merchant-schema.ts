/**
 * Utility to generate 100% Google Merchant Listings compliant schema.org Product JSON-LD.
 * Specifically satisfies:
 * - 'image' (non-empty array of valid image URLs)
 * - 'shippingDetails' (OfferShippingDetails under offers)
 * - 'hasMerchantReturnPolicy' (MerchantReturnPolicy under offers)
 * - 'priceValidUntil', 'sku', 'mpn', 'itemCondition', 'availability'
 */

export interface ListingSpecification {
  sku?: string;
  tags?: string[];
  unit?: string;
  brand?: string;
  details?: string;
  coverage?: string;
  leadTime?: string;
  location?: string;
  warranty?: string;
  modelNumber?: string;
  stockQuantity?: number;
  [key: string]: unknown;
}

export interface ListingItem {
  id: string;
  business_id?: string;
  title: string;
  description?: string;
  category?: string;
  type?: string;
  price?: string | number;
  currency?: string;
  availability?: string;
  media_url?: string | null;
  specifications?: ListingSpecification;
  business_name?: string;
  [key: string]: unknown;
}

export function createProductJsonLd(listing: ListingItem) {
  const fallbackLogo = "https://sge.org.in/shreeganeshlogo.jpeg";
  const primaryImage = (listing.media_url && typeof listing.media_url === "string" && listing.media_url.trim())
    ? listing.media_url.trim()
    : fallbackLogo;

  // Google Merchant Listings requires a non-empty image array with valid URLs
  const imageList = [primaryImage];
  if (primaryImage !== fallbackLogo) {
    imageList.push(fallbackLogo);
  }

  const rawPrice = Number(listing.price);
  const formattedPrice = Number.isFinite(rawPrice) && rawPrice > 0 ? rawPrice.toFixed(2) : "0.00";
  const sku = listing.specifications?.sku || `SGE-${listing.id.substring(0, 8).toUpperCase()}`;
  const mpn = listing.specifications?.modelNumber || sku;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": listing.title,
    "description": listing.description || "Certified engineering services, fire safety equipment, and annual maintenance contracts by Shree Ganesh Enterprises.",
    "image": imageList,
    "sku": sku,
    "mpn": mpn,
    "category": listing.category || "MEP Services",
    "brand": {
      "@type": "Brand",
      "name": "Shree Ganesh Enterprises"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sge.org.in/product/${listing.id}`,
      "priceCurrency": listing.currency || "INR",
      "price": formattedPrice,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": listing.availability === "in_stock" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "Shree Ganesh Enterprises",
        "url": "https://sge.org.in"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    }
  };
}
