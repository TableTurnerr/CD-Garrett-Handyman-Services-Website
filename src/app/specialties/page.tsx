import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { SPECIALTIES } from "@/data/specialties";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";

const TITLE = "Our Handyman Specialties in Midlothian, TX | CD Garrett";
const DESCRIPTION =
  "Plumbing, electrical, drywall, carpentry, doors, ceiling fans, painting, and bathroom and kitchen remodeling. Explore the handyman specialties CD Garrett Handyman Services handles across Ellis and Dallas counties, with free estimates.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/specialties/",
  keywords: [
    "handyman specialties midlothian tx",
    "handyman services ellis county",
    "plumbing repair midlothian",
    "electrical repair midlothian tx",
    "drywall repair midlothian",
    "carpentry midlothian tx",
    "ceiling fan installation midlothian",
    "door installation midlothian tx",
    "painting midlothian tx",
    "bathroom remodeling midlothian",
    "kitchen remodeling midlothian tx",
    "patio cover builder midlothian",
    "honey do list midlothian",
  ],
});

function specialtiesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Handyman Specialties",
    itemListElement: SPECIALTIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${BUSINESS.url}/specialties/${s.slug}/`,
    })),
  };
}

export default function SpecialtiesIndexPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          webPageSchema({
            url: "/specialties/",
            name: TITLE,
            description: DESCRIPTION,
            primaryImage: "/Images/specialties/handyman.webp",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Specialties", url: "/specialties/" },
          ]),
          specialtiesListSchema(),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Specialties", url: "/specialties/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">What We Do</div>
        <h1 className="mb-6">Our Handyman Specialties in Midlothian, TX</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          One call gets it all done. With {BUSINESS.yearsExperience} years of experience across
          Ellis and Dallas counties, {BUSINESS.name} handles the repairs, upgrades and honey-do
          lists most homeowners would rather not. Pick a specialty below to see what we do, or
          request a free estimate and hand us the whole list.
        </p>
      </section>

      <section className="container-pad pb-12 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              href={`/specialties/${s.slug}/`}
              className="card overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              {s.image && (
                <div className="card-img aspect-[4/3]">
                  <SmartImage
                    src={s.image}
                    alt={`${s.name} by ${BUSINESS.name}, handyman serving ${BUSINESS.address.city}, ${BUSINESS.address.state}`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                {s.heroEyebrow && (
                  <div className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-2">
                    {s.heroEyebrow}
                  </div>
                )}
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {s.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed mb-4">
                  {s.metaDescription}
                </p>
                <span className="link-underline text-[var(--color-text)] font-medium text-sm inline-flex items-center gap-1">
                  Learn more about {s.name} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
