import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QuoteCTA from "@/components/shared/QuoteCTA";

const DESCRIPTION =
  "CD Garrett Handyman Services serves homeowners across Ellis and Dallas counties from Midlothian, TX. Plumbing, electrical, drywall, carpentry, doors, ceiling fans, painting and remodels. Free estimates, satisfaction guaranteed.";

export const metadata: Metadata = createMetadata({
  title: "Service Areas in Ellis & Dallas County, TX | CD Garrett",
  description: DESCRIPTION,
  path: "/near/",
  keywords: [
    "handyman ellis county tx",
    "handyman dallas county tx",
    "handyman service areas midlothian",
    "handyman near me midlothian tx",
    "home repair ellis county",
  ],
});

function serviceAreasItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Service Areas",
    itemListElement: NEIGHBORHOODS.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${n.city}, ${n.state}`,
      url: `${BUSINESS.url}/near/${n.slug}/`,
    })),
  };
}

export default function ServiceAreasIndex() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/near/" },
          ]),
          serviceAreasItemListSchema(),
          webPageSchema({
            url: "/near/",
            name: "Service Areas in Ellis & Dallas County, TX | CD Garrett",
            description: DESCRIPTION,
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/near/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Ellis &amp; Dallas Counties</div>
        <h1 className="mb-6">Service Areas Across Ellis &amp; Dallas Counties</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          From our shop in Midlothian, we bring 35+ years of handyman experience to
          homeowners across the area. Pick your city for a dedicated page with drive times,
          the services neighbors call us for most, and how to get a free estimate.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <ThemeBtn href="/get-a-quote/" variant="primary">Get a Free Quote</ThemeBtn>
          <ThemeBtn href="/services/" variant="secondary">View Our Services</ThemeBtn>
        </div>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.slug}
              href={`/near/${n.slug}/`}
              className="card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-text-muted)] mb-3">
                <MapPin size={12} className="text-[var(--color-primary)]" />
                {n.state}
              </div>
              <h2
                className="!text-xl !mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {n.city}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
                <Clock size={12} />
                <span>{n.driveTime}</span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed mb-3">
                {n.intro}
              </p>
              <span className="text-sm font-medium text-[var(--color-primary)]">
                Visit page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
