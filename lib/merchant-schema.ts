/**
 * Utility to generate 100% Google Merchant Listings compliant schema.org Product JSON-LD
 * loaded dynamically from PostgreSQL database columns (media_url, shipping_details, merchant_return_policy, specifications).
 */

export interface ShippingDetailsFromDb {
  shippingRate?: {
    value?: number | string;
    currency?: string;
  };
  shippingDestination?: {
    addressCountry?: string;
  };
  deliveryTime?: {
    handlingTime?: {
      minValue?: number;
      maxValue?: number;
      unitCode?: string;
    };
    transitTime?: {
      minValue?: number;
      maxValue?: number;
      unitCode?: string;
    };
  };
  areaServed?: string;
  shippingRateLabel?: string;
  dispatchTimeLabel?: string;
  transitTimeLabel?: string;
  fulfillmentBy?: string;
  [key: string]: unknown;
}

export interface MerchantReturnPolicyFromDb {
  applicableCountry?: string;
  returnPolicyCategory?: string;
  merchantReturnDays?: number;
  returnMethod?: string;
  returnFees?: string;
  policyLabel?: string;
  returnFeesLabel?: string;
  returnMethodLabel?: string;
  itemCondition?: string;
  itemConditionLabel?: string;
  taxInvoiceLabel?: string;
  [key: string]: unknown;
}

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
  compliance?: string;
  itemCondition?: string;
  taxInvoice?: string;
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
  shipping_details?: ShippingDetailsFromDb;
  merchant_return_policy?: MerchantReturnPolicyFromDb;
  business_name?: string;
  [key: string]: unknown;
}

export function createProductJsonLd(listing: ListingItem) {
  const fallbackLogo = "https://sge.org.in/shreeganeshlogo.jpeg";
  const primaryImage = (listing.media_url && typeof listing.media_url === "string" && listing.media_url.trim())
    ? listing.media_url.trim()
    : fallbackLogo;

  const imageList = [primaryImage];
  if (primaryImage !== fallbackLogo) {
    imageList.push(fallbackLogo);
  }

  const rawPrice = Number(listing.price);
  const formattedPrice = Number.isFinite(rawPrice) && rawPrice > 0 ? rawPrice.toFixed(2) : "0.00";
  const sku = listing.specifications?.sku || `SGE-${listing.id.substring(0, 8).toUpperCase()}`;
  const mpn = listing.specifications?.modelNumber || sku;
  const brandName = listing.specifications?.brand || listing.business_name || "Shree Ganesh Enterprises";

  // Loaded directly from database table columns
  const dbShipping = listing.shipping_details;
  const dbReturn = listing.merchant_return_policy;

  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": String(dbShipping?.shippingRate?.value ?? 0),
      "currency": dbShipping?.shippingRate?.currency || listing.currency || "INR"
    },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": dbShipping?.shippingDestination?.addressCountry || "IN"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": dbShipping?.deliveryTime?.handlingTime?.minValue ?? 0,
        "maxValue": dbShipping?.deliveryTime?.handlingTime?.maxValue ?? 2,
        "unitCode": dbShipping?.deliveryTime?.handlingTime?.unitCode || "DAY"
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": dbShipping?.deliveryTime?.transitTime?.minValue ?? 1,
        "maxValue": dbShipping?.deliveryTime?.transitTime?.maxValue ?? 5,
        "unitCode": dbShipping?.deliveryTime?.transitTime?.unitCode || "DAY"
      }
    }
  };

  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": dbReturn?.applicableCountry || "IN",
    "returnPolicyCategory": dbReturn?.returnPolicyCategory || "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": dbReturn?.merchantReturnDays ?? 14,
    "returnMethod": dbReturn?.returnMethod || "https://schema.org/ReturnByMail",
    "returnFees": dbReturn?.returnFees || "https://schema.org/FreeReturn"
  };

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
      "name": brandName
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sge.org.in/product/${listing.id}`,
      "priceCurrency": listing.currency || "INR",
      "price": formattedPrice,
      "priceValidUntil": "2027-12-31",
      "itemCondition": listing.specifications?.itemCondition || dbReturn?.itemCondition || "https://schema.org/NewCondition",
      "availability": listing.availability === "in_stock" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": brandName,
        "url": "https://sge.org.in"
      },
      "shippingDetails": shippingDetails,
      "hasMerchantReturnPolicy": returnPolicy
    }
  };
}
