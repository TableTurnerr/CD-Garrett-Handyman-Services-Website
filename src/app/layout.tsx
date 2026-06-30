import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Fraunces } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaInjector from "@/components/shared/SchemaInjector";
import TabTitleHandler from "@/components/shared/TabTitleHandler";
import ReviewModal from "@/components/reviews/ReviewModal";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/data/schema";
import { createMetadata } from "@/data/metadata";
import { BUSINESS } from "@/data/business";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
    path: "/",
    keywords: [
      "handyman midlothian tx",
      "handyman near me",
      "handyman ellis county",
      "handyman dallas county",
      "plumbing repair midlothian",
      "electrical repair midlothian tx",
      "drywall repair midlothian",
      "ceiling fan installation midlothian",
      "door installation midlothian tx",
      "bathroom remodeling midlothian tx",
      "kitchen remodeling midlothian",
      "painting midlothian tx",
      "home repair waxahachie",
      "honey do list service",
      "cd garrett handyman",
    ],
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#1C1A17" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <SchemaInjector
          schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
        <TabTitleHandler />
        <Header />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <ReviewModal />
        </Suspense>
      </body>
    </html>
  );
}
