import type { Metadata } from "next";
import { BUSINESS } from "./business";

const BASE_URL = BUSINESS.url;
const DEFAULT_OG = `${BASE_URL}/Images/hero.webp`;

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
};

const BASE_KEYWORDS = [
  // Brand variants
  "cd garrett handyman",
  "cd garrett handyman services",
  "c d garrett handyman",
  "cd garrett handyman midlothian",
  "honey do crew",

  // Core handyman (local intent)
  "handyman midlothian tx",
  "handyman near me",
  "handyman services midlothian",
  "handyman ellis county",
  "handyman dallas county",
  "handyman waxahachie tx",
  "home repair midlothian tx",
  "honey do list service",

  // Trades
  "plumbing repair midlothian tx",
  "handyman plumber midlothian",
  "electrical repair midlothian",
  "light fixture installation midlothian",
  "ceiling fan installation midlothian tx",
  "drywall repair midlothian",
  "drywall texture matching",
  "carpentry midlothian tx",
  "trim and molding installation",
  "door installation midlothian tx",
  "door hanging handyman",
  "interior painting midlothian",
  "exterior painting midlothian tx",

  // Remodeling
  "bathroom remodeling midlothian tx",
  "kitchen remodeling midlothian",
  "tile installation midlothian",
  "covered patio builder midlothian",
];

export function createMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG,
  keywords,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const fullTitle =
    title.includes(BUSINESS.name) ||
    title.includes("CD Garrett") ||
    title.includes("C D Garrett") ||
    title.includes("C.D. Garrett")
      ? title
      : `${title} | ${BUSINESS.name}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords: [...BASE_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — handyman & home repair in Midlothian, TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    other: {
      "theme-color": "#1C1A17",
    },
  };
}
