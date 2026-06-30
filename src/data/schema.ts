import { BUSINESS } from "./business";
import { SERVICE_CATEGORIES } from "./services";
import { FAQS, type FAQ } from "./faqs";

const BASE_URL = BUSINESS.url;

// Canonical brand name matching the Google Business Profile.
const CANONICAL_NAME = "CD Garrett Handyman Services";

// Historical / variant spellings to help search engines consolidate the entity.
const ALTERNATE_NAMES = [
  "CD Garrett Handyman",
  "CD Garrett Handyman Services LLC",
  "C D Garrett Handyman Services LLC",
  "C.D. Garrett Handyman Services",
  "C D Garrett Handyman Services",
  "CD Garrett Remodeling",
  "C D Garrett Remodeling",
  "Honey Do Crew",
];

const KEYWORDS_STRING = [
  "handyman midlothian tx",
  "handyman services ellis county",
  "handyman dallas county",
  "plumbing repair midlothian",
  "electrical repair midlothian tx",
  "drywall repair midlothian",
  "carpentry midlothian tx",
  "ceiling fan installation midlothian",
  "door installation midlothian tx",
  "bathroom remodeling midlothian",
  "kitchen remodeling midlothian tx",
  "painting midlothian tx",
  "home repair waxahachie",
  "honey do list midlothian",
  "cd garrett handyman",
].join(", ");

const KNOWS_ABOUT = [
  "Handyman services",
  "Home repair",
  "Plumbing repair",
  "Electrical repair",
  "Light fixture installation",
  "Ceiling fan installation",
  "Drywall repair and texture",
  "Carpentry and woodwork",
  "Trim and molding",
  "Interior and exterior door installation",
  "Lock installation",
  "Interior and exterior painting",
  "Bathroom remodeling",
  "Kitchen remodeling",
  "Tile installation",
  "Deck and fence repair",
  "Covered patio construction",
  "Outdoor fireplaces",
  "Pressure washing",
  "TV mounting",
  "Furniture assembly",
];

const SERVICE_FEATURES = [
  { name: "Free Estimates", value: true },
  { name: "35+ Years of Experience", value: true },
  { name: "Family Owned & Operated", value: true },
  { name: "Insured", value: true },
  { name: "Satisfaction Guaranteed", value: true },
  { name: "Honest, Upfront Pricing", value: true },
  { name: "Residential & Commercial", value: true },
  { name: "Serving Ellis & Dallas Counties", value: true },
].map((f) => ({
  "@type": "LocationFeatureSpecification",
  name: f.name,
  value: f.value,
}));

const PRIMARY_IMAGES = [
  `${BASE_URL}/Images/hero.webp`,
  `${BASE_URL}/Images/services/bathroom-remodel.webp`,
  `${BASE_URL}/Images/services/carpentry.webp`,
  `${BASE_URL}/Images/services/doors.webp`,
  `${BASE_URL}/Images/gallery/project-03.webp`,
  `${BASE_URL}/Images/gallery/project-04.webp`,
];

const HAS_MAP = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.address.full
)}`;

// Only emit opening hours for days the business is actually open.
const openingHoursSpecification = BUSINESS.hours
  .filter((h) => h.open !== "Closed")
  .map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  }));

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.state,
  postalCode: BUSINESS.address.zip,
  addressCountry: BUSINESS.address.country,
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: BUSINESS.geo.latitude,
  longitude: BUSINESS.geo.longitude,
};

const areaServed = BUSINESS.areasServed.map((city) => ({
  "@type": "City",
  name: city,
}));

const brand = {
  "@type": "Brand",
  "@id": `${BASE_URL}/#brand`,
  name: CANONICAL_NAME,
  alternateName: ALTERNATE_NAMES,
  logo: `${BASE_URL}/Images/logo.webp`,
  slogan: BUSINESS.slogan,
};

// Flat list of every individual service across all categories — used for OfferCatalog.
const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) =>
  c.items.map((i) => ({ category: c.name, name: i.name, description: i.description }))
);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: CANONICAL_NAME,
    legalName: BUSINESS.legalName,
    alternateName: ALTERNATE_NAMES,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/Images/logo.webp`,
      caption: `${CANONICAL_NAME} logo`,
    },
    image: PRIMARY_IMAGES,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: postalAddress,
    foundingDate: BUSINESS.founded,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Owner",
      description:
        "Owner of CD Garrett Handyman Services, with 35+ years of experience in the handyman and home-improvement trade across Ellis and Dallas counties.",
    },
    slogan: BUSINESS.slogan,
    description: `${BUSINESS.legalName} — family-owned handyman company in Midlothian, TX serving Ellis and Dallas counties with 35+ years of experience. Plumbing, electrical, drywall, carpentry, doors, painting, and bathroom and kitchen remodeling.`,
    knowsAbout: KNOWS_ABOUT,
    keywords: KEYWORDS_STRING,
    hasMap: HAS_MAP,
    areaServed,
    brand,
    sameAs: Object.values(BUSINESS.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: CANONICAL_NAME,
    alternateName: ALTERNATE_NAMES,
    description: BUSINESS.shortDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${BASE_URL}/#organization` },
    keywords: KEYWORDS_STRING,
  };
}

// Primary local-business entity. A handyman is a HomeAndConstructionBusiness /
// GeneralContractor in schema.org's vocabulary.
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: CANONICAL_NAME,
    legalName: BUSINESS.legalName,
    alternateName: ALTERNATE_NAMES,
    description: BUSINESS.longDescription,
    slogan: BUSINESS.slogan,
    url: BASE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: PRIMARY_IMAGES,
    logo: `${BASE_URL}/Images/logo.webp`,
    address: postalAddress,
    geo,
    hasMap: HAS_MAP,
    paymentAccepted: ["Cash", "Check", "Credit Card"],
    currenciesAccepted: BUSINESS.currenciesAccepted,
    openingHoursSpecification,
    areaServed,
    knowsAbout: KNOWS_ABOUT,
    keywords: KEYWORDS_STRING,
    amenityFeature: SERVICE_FEATURES,
    foundingDate: BUSINESS.founded,
    founder: { "@type": "Person", name: BUSINESS.owner },
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
    brand,
    makesOffer: ALL_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        category: s.category,
      },
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "[data-speakable]"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(BUSINESS.socials),
  };
}

// Catalog of all services, grouped by category. Injected on the /services page.
export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${BASE_URL}/services/#catalog`,
    name: `${CANONICAL_NAME} Services`,
    description:
      "Full catalog of handyman and home-improvement services: plumbing, electrical, drywall, carpentry, doors, painting, and bathroom and kitchen remodeling across Ellis and Dallas counties.",
    inLanguage: "en-US",
    provider: { "@id": `${BASE_URL}/#business` },
    itemListElement: SERVICE_CATEGORIES.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      description: category.description,
      itemListElement: category.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
          provider: { "@id": `${BASE_URL}/#business` },
          areaServed,
        },
      })),
    })),
  };
}

function stripMarkdownLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

export function faqSchema(faqs: FAQ[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(faq.answer),
      },
    })),
  };
}

export type ServiceSchemaInput = {
  name: string;
  description: string;
  serviceType?: string;
  url: string;
  image?: string;
  areaServedCities?: string[];
  offerings?: string[];
};

// Generic Service schema for individual service / specialty pages and the quote page.
export function serviceSchema(input: ServiceSchemaInput) {
  const {
    name,
    description,
    serviceType = "Handyman",
    url,
    image,
    areaServedCities = BUSINESS.areasServed as unknown as string[],
    offerings,
  } = input;

  const absoluteUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}`
    : PRIMARY_IMAGES[0];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl}#service`,
    name,
    serviceType,
    category: "Handyman & home improvement",
    description,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: areaServedCities.map((city) => ({ "@type": "City", name: city })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl,
      servicePhone: BUSINESS.phone,
      serviceSmsNumber: BUSINESS.phone,
    },
    ...(offerings && offerings.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} options`,
            itemListElement: offerings.map((o, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: { "@type": "Service", name: o },
            })),
          },
        }
      : {}),
    image: imageUrl,
    url: absoluteUrl,
    brand,
  };
}

export type ArticleSchemaInput = {
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
};

export function articleSchema({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
}: ArticleSchemaInput) {
  const absoluteUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}`
    : PRIMARY_IMAGES[0];
  const today = new Date().toISOString().slice(0, 10);

  const author = authorName
    ? { "@type": "Person", name: authorName }
    : { "@id": `${BASE_URL}/#organization` };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl}#article`,
    headline,
    description,
    image: imageUrl,
    url: absoluteUrl,
    mainEntityOfPage: { "@id": `${absoluteUrl}#webpage` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    author,
    inLanguage: "en-US",
    datePublished: datePublished ?? today,
    dateModified: dateModified ?? today,
  };
}

export type WebPageSchemaInput = {
  url: string;
  name: string;
  description: string;
  primaryImage?: string;
  dateModified?: string;
  hasBreadcrumb?: boolean;
};

export function webPageSchema({
  url,
  name,
  description,
  primaryImage,
  dateModified,
  hasBreadcrumb = true,
}: WebPageSchemaInput) {
  const absoluteUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const today = new Date().toISOString().slice(0, 10);
  const modified = dateModified ?? today;
  const imageUrl = primaryImage
    ? primaryImage.startsWith("http")
      ? primaryImage
      : `${BASE_URL}${primaryImage}`
    : PRIMARY_IMAGES[0];

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    url: absoluteUrl,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#business` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    dateModified: modified,
    ...(hasBreadcrumb && {
      breadcrumb: { "@id": `${absoluteUrl}#breadcrumb` },
    }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "[data-speakable]"],
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  const lastItem = items[items.length - 1];
  const pageUrl = lastItem
    ? lastItem.url.startsWith("http")
      ? lastItem.url
      : `${BASE_URL}${lastItem.url}`
    : BASE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: CANONICAL_NAME,
    legalName: BUSINESS.legalName,
    alternateName: ALTERNATE_NAMES,
    description: BUSINESS.shortDescription,
    image: PRIMARY_IMAGES,
    logo: `${BASE_URL}/Images/logo.webp`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: postalAddress,
    geo,
    hasMap: HAS_MAP,
    url: BASE_URL,
    priceRange: BUSINESS.priceRange,
    paymentAccepted: ["Cash", "Check", "Credit Card"],
    currenciesAccepted: BUSINESS.currenciesAccepted,
    openingHoursSpecification,
    areaServed,
    keywords: KEYWORDS_STRING,
    foundingDate: BUSINESS.founded,
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(BUSINESS.socials),
  };
}
