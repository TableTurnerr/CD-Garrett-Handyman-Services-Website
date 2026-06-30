import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ArrowRight, Phone } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { BUSINESS } from "@/data/business";
import { SERVICE_CATEGORIES } from "@/data/services";
import { serviceCatalogSchema, webPageSchema, breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SmartImage from "@/components/shared/SmartImage";
import ThemeBtn from "@/components/shared/ThemeBtn";
import CategoryNav from "@/components/services/CategoryNav";
import ServiceCard from "@/components/services/ServiceCard";
import QuoteCTA from "@/components/shared/QuoteCTA";

const PAGE_TITLE = "Handyman Services in Midlothian, TX | CD Garrett";
const PAGE_DESCRIPTION =
  "Plumbing, electrical, drywall, carpentry, door hanging, ceiling fans, painting, and bathroom and kitchen remodeling in Midlothian, TX. Free estimates, 35+ years, family owned. One call does it all.";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/" },
];

export const metadata: Metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/",
  keywords: [
    "handyman services midlothian tx",
    "home repair services midlothian",
    "plumbing repair midlothian tx",
    "electrical repair midlothian",
    "drywall repair midlothian",
    "carpentry midlothian tx",
    "door installation midlothian tx",
    "ceiling fan installation midlothian",
    "interior painting midlothian",
    "bathroom remodeling midlothian tx",
    "kitchen remodeling midlothian",
    "honey do list service",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          serviceCatalogSchema(),
          webPageSchema({
            url: "/services/",
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            primaryImage: "/Images/services/honey-do.webp",
          }),
          breadcrumbSchema(BREADCRUMBS),
        ]}
      />
      <BreadcrumbNav items={BREADCRUMBS} />

      <section className="container-pad py-10 md:py-16">
        <div className="max-w-3xl">
          <div className="eyebrow">Our Services</div>
          <h1 className="mb-5">Handyman Services in Midlothian, TX</h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            From a dripping faucet to a full bathroom remodel, the Honey-Do Crew handles
            the whole list with 35+ years of experience and honest, upfront pricing. Every
            job starts with a free estimate, and one call gets it all done.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <ThemeBtn href={BUSINESS.quoteUrl} variant="primary">
              Get a Free Quote
            </ThemeBtn>
            <ThemeBtn href={`tel:${BUSINESS.phoneRaw}`} variant="secondary" showArrow={false}>
              <Phone size={16} aria-hidden="true" /> Call {BUSINESS.phone}
            </ThemeBtn>
          </div>

          <div className="mt-8 inline-flex items-start gap-3 rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/[0.07] px-4 py-3">
            <Wrench size={18} className="text-[var(--color-gold-dark)] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">
                Free Estimates · Family Owned · One Call Does It All
              </div>
              <div className="text-sm text-[var(--color-text)] mt-1 font-medium">
                We don&apos;t leave until the job is done right and you&apos;re completely satisfied.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryNav categories={SERVICE_CATEGORIES.map(({ id, name }) => ({ id, name }))} />

      {SERVICE_CATEGORIES.map((category) => (
        <section key={category.id} id={category.id} className="container-pad section-pad scroll-mt-[152px]">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center mb-10">
            <header className="max-w-2xl">
              <h2 className="mb-3">{category.name}</h2>
              <p className="text-[var(--color-text-muted)]">{category.description}</p>
              {category.specialtySlug && (
                <Link
                  href={`/specialties/${category.specialtySlug}/`}
                  className="link-underline inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[var(--color-text)]"
                >
                  Learn more about {category.name}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              )}
            </header>
            <SmartImage
              src={category.image}
              alt={`${category.name} by ${BUSINESS.name} in Midlothian, TX`}
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((item) => (
              <ServiceCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}

      <section className="container-pad section-pad border-t border-[var(--color-border)]">
        <div className="max-w-3xl">
          <div className="eyebrow">More About Our Work</div>
          <h2 className="mb-5">Your Local Handyman Across Ellis &amp; Dallas Counties</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              CD Garrett Handyman Services is a family-owned shop in Midlothian, Texas,
              serving homeowners across {BUSINESS.serviceAreasLabel}. Owner Cedric Garrett
              brings 35+ years of hands-on experience to every job, big or small, with
              honest, upfront pricing and a free estimate before any work begins.
            </p>
            <p>
              We take care of the everyday repairs that pile up:{" "}
              <Link href="/specialties/plumbing/" className="link-underline text-[var(--color-text)]">plumbing repairs</Link>,{" "}
              <Link href="/specialties/electrical/" className="link-underline text-[var(--color-text)]">electrical and lighting</Link>,{" "}
              <Link href="/specialties/ceiling-fan-installation/" className="link-underline text-[var(--color-text)]">ceiling fan installation</Link>,{" "}
              <Link href="/specialties/drywall-repair/" className="link-underline text-[var(--color-text)]">drywall repair</Link>, and{" "}
              <Link href="/specialties/painting/" className="link-underline text-[var(--color-text)]">interior and exterior painting</Link>.
              Our carpenters handle{" "}
              <Link href="/specialties/carpentry/" className="link-underline text-[var(--color-text)]">trim, molding and woodwork</Link> and{" "}
              <Link href="/specialties/door-installation/" className="link-underline text-[var(--color-text)]">door hanging and repair</Link>.
            </p>
            <p>
              Ready for a bigger project? We remodel{" "}
              <Link href="/specialties/bathroom-remodeling/" className="link-underline text-[var(--color-text)]">bathrooms</Link> and{" "}
              <Link href="/specialties/kitchen-remodeling/" className="link-underline text-[var(--color-text)]">kitchens</Link>, build{" "}
              <Link href="/specialties/patio-covers/" className="link-underline text-[var(--color-text)]">covered patios and outdoor living spaces</Link>,
              and knock out the whole{" "}
              <Link href="/specialties/handyman/" className="link-underline text-[var(--color-text)]">honey-do list</Link> in a single visit.
              When your honey can&apos;t, we can. One call does it all.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
