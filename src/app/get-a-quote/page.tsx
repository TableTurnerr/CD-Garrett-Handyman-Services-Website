import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import QuoteForm from "@/components/quote/QuoteForm";
import { BUSINESS } from "@/data/business";

const DESCRIPTION =
  "Request a free, no-obligation handyman estimate from CD Garrett Handyman Services in Midlothian, TX. Honest, upfront pricing and a promise we don't leave until you're satisfied. Serving Ellis and Dallas counties.";

function formatTime(t: string) {
  const [hourStr, minStr] = t.split(":");
  const hour = Number(hourStr);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minStr} ${period}`;
}

const STEPS = [
  {
    n: "1",
    title: "Send us the details",
    body: "Fill out the form or give us a call. Tell us what needs doing, or hand over the whole honey-do list.",
  },
  {
    n: "2",
    title: "Get a free estimate",
    body: "We review the job and give you an honest, upfront price with no obligation and no surprises.",
  },
  {
    n: "3",
    title: "We get it done right",
    body: "We show up on schedule, do the work with care, and don't leave until you're completely satisfied.",
  },
];

const ASSURANCES = [
  "Free, no-obligation estimates",
  "Honest, upfront pricing",
  "35+ years of experience",
  "Family owned and operated",
  "Satisfaction guaranteed",
];

export const metadata: Metadata = createMetadata({
  title: "Get a Free Quote | CD Garrett Handyman Services",
  description: DESCRIPTION,
  path: "/get-a-quote/",
  keywords: [
    "free handyman quote midlothian tx",
    "handyman estimate midlothian",
    "free estimate handyman ellis county",
    "handyman quote near me",
    "request handyman estimate midlothian tx",
    "home repair quote waxahachie",
    "cd garrett handyman quote",
    "handyman pricing midlothian tx",
  ],
});

export default function GetAQuotePage() {
  return (
    <>
      <SchemaInjector
        schema={[
          serviceSchema({
            name: "Free Handyman Estimate",
            description: DESCRIPTION,
            url: "/get-a-quote/",
          }),
          webPageSchema({
            url: "/get-a-quote/",
            name: "Get a Free Quote | CD Garrett Handyman Services",
            description: DESCRIPTION,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Get a Free Quote", url: "/get-a-quote/" },
          ]),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Get a Free Quote", url: "/get-a-quote/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Free Estimates</div>
        <h1 className="mb-6">Get a Free Quote</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-5 leading-relaxed">
          Tell us what you need done and we&apos;ll give you a free, no-obligation estimate.
          No pressure, no hidden fees, just an honest, upfront price so you know exactly what
          to expect before any work begins.
        </p>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          For more than {BUSINESS.yearsExperience} years, homeowners across Ellis and Dallas
          counties have trusted CD Garrett Handyman Services to get the job done right. We
          don&apos;t leave until it&apos;s finished and you&apos;re completely satisfied.
        </p>
      </section>

      <section className="container-pad pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="mb-6">How It Works</h2>
            <div className="space-y-5">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="!mt-12 !mb-6">Our Promise</h2>
            <ul className="space-y-3">
              {ASSURANCES.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-[var(--color-primary)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--color-text)]">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="container-pad pb-16">
        <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-section)] p-8 md:p-12 border border-[var(--color-border)]">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-[var(--color-primary)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-[var(--color-text)] link-underline"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-[var(--color-primary)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[var(--color-text)] link-underline break-words"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[var(--color-primary)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--color-text-muted)]">
                    {BUSINESS.address.full}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                <Clock size={18} className="text-[var(--color-primary)]" aria-hidden="true" />
                Hours
              </h3>
              <ul className="space-y-1.5 text-sm">
                {BUSINESS.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-text)]">{h.day}</span>
                    <span>
                      {h.open === "Closed"
                        ? "Closed"
                        : `${formatTime(h.open)} - ${formatTime(h.close)}`}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic text-[var(--color-text-muted)] leading-relaxed">
                {BUSINESS.hoursNote}
              </p>
            </div>

            <div>
              <h3
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.areasServed.map((city) => (
                  <span
                    key={city}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                Serving {BUSINESS.serviceAreasLabel}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
