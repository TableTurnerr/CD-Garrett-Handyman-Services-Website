import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/data/schema";
import { SPECIALTIES, SPECIALTY_SLUGS } from "@/data/specialties";
import { SERVICE_CATEGORIES, type ServiceItem } from "@/data/services";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import FAQSection from "@/components/home/FAQSection";
import QuoteCTA from "@/components/shared/QuoteCTA";

// Flattened list of every individual service across all categories.
const ALL_SERVICE_ITEMS = SERVICE_CATEGORIES.flatMap((c) => c.items);

function resolveRelatedServices(names: string[] | undefined): ServiceItem[] {
  if (!names || names.length === 0) return [];
  const lookup = new Map<string, ServiceItem>();
  for (const item of ALL_SERVICE_ITEMS) {
    lookup.set(item.name, item);
  }
  return names
    .map((name) => lookup.get(name))
    .filter((item): item is ServiceItem => Boolean(item));
}

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${BUSINESS.url}${path}`;
}

export function generateStaticParams() {
  return SPECIALTY_SLUGS.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) return {};
  return createMetadata({
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    path: `/specialties/${topic}/`,
    keywords: specialty.keywords,
    ogImage: specialty.image ? absoluteUrl(specialty.image) : undefined,
  });
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) notFound();

  const related = resolveRelatedServices(specialty.relatedServiceNames);
  const url = `/specialties/${topic}/`;
  const image = specialty.image ?? "/Images/hero.webp";

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Specialties", url: "/specialties/" },
      { name: specialty.name, url },
    ]),
    webPageSchema({
      url,
      name: specialty.metaTitle,
      description: specialty.metaDescription,
      primaryImage: image,
    }),
    serviceSchema({
      name: specialty.name,
      description: specialty.metaDescription,
      url,
      image,
      ...(related.length ? { offerings: related.map((r) => r.name) } : {}),
    }),
    ...(specialty.faqs && specialty.faqs.length > 0 ? [faqSchema(specialty.faqs)] : []),
  ];

  return (
    <>
      <SchemaInjector schema={schemas} />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Specialties", url: "/specialties/" },
          { name: specialty.name, url },
        ]}
      />

      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {specialty.heroEyebrow && (
              <div className="eyebrow">{specialty.heroEyebrow}</div>
            )}
            <h1 className="mb-6">{specialty.heroHeadline}</h1>
            {specialty.heroSubheadline && (
              <p className="text-lg text-[var(--color-text-muted)] mb-6">
                {specialty.heroSubheadline}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <ThemeBtn href={BUSINESS.quoteUrl} variant="primary">
                Get a Free Quote
              </ThemeBtn>
              <ThemeBtn
                href={`tel:${BUSINESS.phoneRaw}`}
                variant="secondary"
                showArrow={false}
              >
                <Phone size={16} aria-hidden="true" /> Call {BUSINESS.phone}
              </ThemeBtn>
            </div>
          </div>

          {specialty.image && (
            <SmartImage
              src={specialty.image}
              alt={`${specialty.heroHeadline} — ${specialty.name} by ${BUSINESS.name} in ${BUSINESS.address.city}, ${BUSINESS.address.state}`}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
            />
          )}
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">{specialty.primaryBlock.heading}</h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {specialty.primaryBlock.body}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-pad section-pad">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <h2>Related services</h2>
              <Link
                href="/services/"
                className="link-underline text-[var(--color-text)] font-medium text-sm"
              >
                View all services
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-transparent hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
                >
                  <h3
                    className="text-lg mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {item.price && (
                    <div className="text-sm font-semibold text-[var(--color-text)]">
                      {item.price}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {specialty.faqs && specialty.faqs.length > 0 && (
        <FAQSection
          faqs={specialty.faqs}
          eyebrow={`Common questions about ${specialty.name.toLowerCase()}`}
          title="Frequently asked questions."
        />
      )}

      <QuoteCTA itemName={specialty.name} />
    </>
  );
}
