import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { BUSINESS } from "@/data/business";

const DESCRIPTION =
  "Our satisfaction guarantee. Free estimates, honest upfront pricing, insured work, and a promise that we don't leave until you're completely satisfied. Here's how to reach CD Garrett Handyman Services.";

export const metadata: Metadata = createMetadata({
  title: "Our Satisfaction Guarantee | CD Garrett Handyman",
  description: DESCRIPTION,
  path: "/satisfaction-guarantee/",
  keywords: [
    "handyman satisfaction guarantee",
    "free estimates handyman midlothian",
    "honest handyman pricing",
    "insured handyman ellis county",
    "cd garrett handyman guarantee",
  ],
});

export default function SatisfactionGuaranteePage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Satisfaction Guarantee", url: "/satisfaction-guarantee/" },
          ]),
          webPageSchema({
            url: "/satisfaction-guarantee/",
            name: "Our Satisfaction Guarantee | CD Garrett Handyman",
            description: DESCRIPTION,
            primaryImage: "/Images/about.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Satisfaction Guarantee", url: "/satisfaction-guarantee/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Our Promise</div>
        <h1 className="mb-6">Our Satisfaction Guarantee</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-10">
          For more than 35 years, {BUSINESS.name} has built its reputation on doing the job
          right and standing behind it. Here&apos;s exactly what you can count on when you
          hire us.
        </p>

        <div className="prose-content space-y-6 text-[var(--color-text)] leading-relaxed">
          <h2>Free estimates, always</h2>
          <p>
            Every job starts with a free, no-obligation estimate. We&apos;ll look at the
            work, talk through your options, and give you a clear price before any work
            begins. There&apos;s never a charge or a catch just to find out what something
            costs.
          </p>

          <h2>Honest, upfront pricing</h2>
          <p>
            We quote the job before we start, so you know what you&apos;re paying and why.
            No vague guesses, no padded invoices, and no surprise charges at the end. If the
            scope changes once we&apos;re into the work, we&apos;ll stop and talk it through
            with you first.
          </p>

          <h2>Insured and professional</h2>
          <p>
            We&apos;re an insured, family owned and operated company, and we treat your home
            like our own. That means showing up on time, keeping the work area clean,
            respecting your space, and paying attention to the details that make a finished
            job look finished.
          </p>

          <h2>We don&apos;t leave until you&apos;re completely satisfied</h2>
          <p>
            This is the heart of how we work: we don&apos;t consider a job done until
            it&apos;s done right and you&apos;re completely satisfied with it. If something
            isn&apos;t the way you expected, tell us and we&apos;ll make it right. Your
            satisfaction is the whole point.
          </p>

          <h2>How to reach us</h2>
          <p>
            Have a question, a project, or something you&apos;d like us to take another look
            at? The fastest way to reach us is to call or email directly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Phone:{" "}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>
              In person: {BUSINESS.address.full} (during business hours)
            </li>
          </ul>

          <p className="text-sm text-[var(--color-text-muted)] mt-8">
            This guarantee reflects the standard {BUSINESS.legalName} holds itself to on
            every job across Ellis and Dallas counties. When your honey can&apos;t, we can.
          </p>
        </div>
      </section>
    </>
  );
}
