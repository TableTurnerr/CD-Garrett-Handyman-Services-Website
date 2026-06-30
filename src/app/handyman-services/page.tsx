import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/data/schema";
import { SPECIALTIES } from "@/data/specialties";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";

const TITLE = "Handyman Services in Ellis & Dallas County, TX | CD Garrett";
const DESCRIPTION =
  "CD Garrett Handyman Services is a family-owned handyman in Midlothian, TX with 35+ years of experience. Plumbing, electrical, drywall, carpentry, doors, painting, and bathroom and kitchen remodeling across Ellis and Dallas counties. Free estimates.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/handyman-services/",
  keywords: [
    "handyman services ellis county",
    "handyman dallas county tx",
    "handyman midlothian tx",
    "handyman waxahachie tx",
    "home repair ellis county",
    "remodeling midlothian tx",
    "handyman near me midlothian",
    "honey do list service",
    "local handyman ellis county",
  ],
});

export default function HandymanServicesPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          webPageSchema({
            url: "/handyman-services/",
            name: TITLE,
            description: DESCRIPTION,
            primaryImage: "/Images/hero.webp",
          }),
          articleSchema({
            url: "/handyman-services/",
            headline: "Handyman Services in Ellis & Dallas County, TX",
            description: DESCRIPTION,
            image: "/Images/hero.webp",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Handyman Services", url: "/handyman-services/" },
          ]),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Handyman Services", url: "/handyman-services/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Your Local Handyman</div>
            <h1 className="mb-6">Handyman Services in Ellis &amp; Dallas County, TX</h1>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              {BUSINESS.name} is a family-owned handyman company in the heart of Midlothian,
              Texas. Owner {BUSINESS.owner} has spent {BUSINESS.yearsExperience} years repairing,
              building and improving homes across Ellis and Dallas counties, and that experience
              shows in every job. From a dripping faucet to a full bathroom remodel, one call
              gets it all done.
            </p>
            <div className="flex flex-wrap gap-3">
              <ThemeBtn href={BUSINESS.quoteUrl} variant="primary">
                Get a Free Quote
              </ThemeBtn>
              <ThemeBtn href="/services/" variant="secondary">
                Browse All Services
              </ThemeBtn>
            </div>
          </div>

          <SmartImage
            src="/Images/hero.webp"
            alt={`${BUSINESS.name} — handyman serving ${BUSINESS.address.city}, ${BUSINESS.address.state} and the surrounding Ellis and Dallas County area`}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
          />
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <div className="eyebrow">One Call Does It All</div>
          <h2 className="mb-6">A Handyman You Can Trust With the Whole List</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Most homeowners would rather make one call than chase a different specialist for
              every task. That&apos;s the whole idea behind a good handyman: one trusted crew for
              the whole honey-do list, with honest, upfront pricing and a free estimate before any
              work begins. Browse the full{" "}
              <Link href="/services/" className="link-underline text-[var(--color-text)]">
                list of handyman services
              </Link>{" "}
              we offer, or{" "}
              <Link href="/get-a-quote/" className="link-underline text-[var(--color-text)]">
                request a free estimate
              </Link>{" "}
              and tell us what you need done.
            </p>
            <p>
              We built {BUSINESS.name} on a simple promise: we don&apos;t leave until the work is
              done right and you&apos;re completely satisfied. That means clean, careful work,
              tidy job sites, and the kind of attention to detail that comes from{" "}
              {BUSINESS.yearsExperience} years in the trade. Read{" "}
              <Link href="/our-story/" className="link-underline text-[var(--color-text)]">
                our story
              </Link>{" "}
              to learn how {BUSINESS.owner} built the company into the Honey-Do Crew that
              homeowners call first.
            </p>
            <p>
              We&apos;re proud to serve {BUSINESS.serviceAreasLabel}. See the{" "}
              <Link href="/near/" className="link-underline text-[var(--color-text)]">
                areas we serve
              </Link>{" "}
              to find your city, then{" "}
              <Link href="/get-a-quote/" className="link-underline text-[var(--color-text)]">
                get a free quote
              </Link>{" "}
              to get on the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="max-w-3xl mb-10">
          <div className="eyebrow">Every Area of the Home</div>
          <h2 className="mb-4">Everything We Handle</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            From a single repair to a full remodel, here is the work we take on across Ellis and
            Dallas counties. Tap any specialty to see what&apos;s involved and get a free estimate.
          </p>
        </div>

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
                    alt={`${s.name} by ${BUSINESS.name} in ${BUSINESS.address.city}, ${BUSINESS.address.state}`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
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
