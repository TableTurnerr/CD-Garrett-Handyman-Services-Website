import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Star } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS, NEIGHBORHOOD_SLUGS } from "@/data/neighborhoods";
import { SPECIALTIES } from "@/data/specialties";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";

// Map a popular-service name to its specialty page slug when it clearly matches.
const SPECIALTY_SLUG_BY_NAME = new Map(SPECIALTIES.map((s) => [s.name, s.slug]));

export function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === city);
  if (!n) return {};
  return createMetadata({
    title: n.metaTitle,
    description: n.metaDescription,
    path: `/near/${city}/`,
    keywords: n.keywords,
  });
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === city);
  if (!n) notFound();

  return (
    <>
      <SchemaInjector
        schema={[
          serviceSchema({
            name: `Handyman in ${n.city}, ${n.state}`,
            description: n.metaDescription,
            url: `/near/${city}/`,
            areaServedCities: [n.city],
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/near/" },
            { name: n.city, url: `/near/${city}/` },
          ]),
          webPageSchema({
            url: `/near/${city}/`,
            name: n.metaTitle,
            description: n.metaDescription,
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/near/" },
          { name: n.city, url: `/near/${city}/` },
        ]}
      />

      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Serving {n.city}, {n.state}</div>
            <h1 className="mb-6">{n.heroHeadline}</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-6">{n.heroSubheadline}</p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={18} className="text-[var(--color-primary)]" />
                <span className="font-medium">{n.driveTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star size={18} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="font-medium">
                  {BUSINESS.ratingValue} ({BUSINESS.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ThemeBtn href="/get-a-quote/" variant="primary">Get a Free Quote</ThemeBtn>
              <ThemeBtn href={`tel:${BUSINESS.phoneRaw}`} variant="secondary" showArrow={false}>
                Call {BUSINESS.phone}
              </ThemeBtn>
            </div>
          </div>

          <SmartImage
            src="/Images/hero.webp"
            alt={`${BUSINESS.name} providing handyman services in ${n.city}, ${n.state}`}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
          />
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">Handyman Services for {n.city}</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-6">{n.intro}</p>
          <p className="text-base text-[var(--color-text-muted)] mb-8">{n.body}</p>

          <h3 className="mb-4">Popular Services in {n.city}</h3>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {n.popularServices.map((service) => {
              const slug = SPECIALTY_SLUG_BY_NAME.get(service);
              return (
                <li key={service} className="card p-4 flex items-center gap-3">
                  <Clock size={18} className="text-[var(--color-primary)] shrink-0" />
                  {slug ? (
                    <Link
                      href={`/specialties/${slug}/`}
                      className="font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {service}
                    </Link>
                  ) : (
                    <span className="font-medium">{service}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <ThemeBtn href="/services/" variant="primary">See All Services</ThemeBtn>
        </div>
      </section>

      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Serving {n.city} From Midlothian</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          Our shop is at {BUSINESS.address.full}, {n.driveTime.toLowerCase()}. Family owned
          and operated with 35+ years of experience, free estimates, and a promise that we
          don&apos;t leave until the job is done right.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeBtn
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address.full)}`}
            external
            variant="primary"
          >
            Get Directions
          </ThemeBtn>
          <ThemeBtn href="/get-a-quote/" variant="secondary">Request a Free Estimate</ThemeBtn>
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-5xl">
          <h2 className="mb-3 text-center">Other Areas We Serve</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-8">
            Trusted handyman services across Ellis and Dallas counties.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {NEIGHBORHOODS.filter((other) => other.slug !== n.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/near/${other.slug}/`}
                className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Handyman in {other.city}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/near/"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA itemName={`${n.city} Handyman Services`} />
    </>
  );
}
