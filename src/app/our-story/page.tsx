import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/data/schema";
import { BUSINESS } from "@/data/business";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";

const HEADLINE = "Built on 35+ Years of Doing the Job Right";
const DESCRIPTION =
  "The story of CD Garrett Handyman Services. Founded and run by Cedric Garrett, our family-owned handyman company has served Ellis and Dallas counties from Midlothian, TX for more than 35 years, built on professionalism, attention to detail, and a promise to finish the job right.";

export const metadata: Metadata = createMetadata({
  title: "Our Story | CD Garrett Handyman Services",
  description: DESCRIPTION,
  path: "/our-story/",
  keywords: [
    "cd garrett handyman story",
    "family owned handyman midlothian tx",
    "cedric garrett handyman",
    "handyman ellis county",
    "handyman dallas county",
  ],
});

export default function OurStoryPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Our Story", url: "/our-story/" },
          ]),
          webPageSchema({
            url: "/our-story/",
            name: "Our Story | CD Garrett Handyman Services",
            description: DESCRIPTION,
            primaryImage: "/Images/about.webp",
          }),
          articleSchema({
            url: "/our-story/",
            headline: HEADLINE,
            description: DESCRIPTION,
            image: "/Images/about.webp",
            authorName: BUSINESS.owner,
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="mb-8">{HEADLINE}</h1>

        <SmartImage
          src="/Images/about.webp"
          alt={`${BUSINESS.owner}, owner of ${BUSINESS.name}, a family-owned handyman serving Ellis and Dallas counties from Midlothian, TX`}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="aspect-[16/9] rounded-[var(--radius-section)] mb-12 shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
        />

        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <h2 className="!mt-0 !mb-4">A Family-Owned Handyman in Midlothian, TX</h2>
          <p>
            {BUSINESS.name} is a family owned and operated handyman company based right
            here in Midlothian, Texas. From a dripping faucet to a full bathroom remodel,
            we&apos;re the one call homeowners across Ellis and Dallas counties make when
            they want the job done right the first time.
          </p>

          <h2 className="!mt-12 !mb-4">Meet Cedric Garrett</h2>
          <p>
            The company is founded and run by owner {BUSINESS.owner}, who brings more than
            35 years of hands-on experience to every project. Those decades on the tools
            mean there isn&apos;t much around a house he hasn&apos;t already seen and fixed,
            and that experience shows in the quality of the work and the honesty of the
            advice you get.
          </p>

          <h2 className="!mt-12 !mb-4">Extreme Professionalism &amp; Attention to Detail</h2>
          <p>
            We built this business on two simple things: extreme professionalism and
            attention to detail. That means showing up when we say we will, treating your
            home with respect, keeping the work area clean, and sweating the small stuff
            that makes a finished job look finished. No shortcuts, no surprises.
          </p>

          <h2 className="!mt-12 !mb-4">One Call Does It All</h2>
          <p>
            Most homes don&apos;t need a different specialist for every little task. They
            need one trusted crew that can handle plumbing, electrical, drywall, carpentry,
            door hanging, ceiling fans, painting, and full bathroom and kitchen remodels.
            That&apos;s us. We&apos;ll knock out the whole honey-do list in one organized
            visit so you can have your weekend back.
          </p>

          <h2 className="!mt-12 !mb-4">We Don&apos;t Leave Until You&apos;re Satisfied</h2>
          <p>
            Here&apos;s our promise, and we mean it: we don&apos;t leave until the job is
            done right and you&apos;re completely satisfied. Every project starts with a
            free estimate and honest, upfront pricing, so you always know what to expect
            before we begin.
          </p>

          <h2 className="!mt-12 !mb-4">Serving Ellis &amp; Dallas Counties</h2>
          <p>
            From our shop on Calvert Drive in Midlothian, we serve homeowners throughout
            Ellis and Dallas counties, including Waxahachie, Ennis, Red Oak, Ovilla, Cedar
            Hill, DeSoto, Duncanville, and Mansfield. When your honey can&apos;t, we can.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <ThemeBtn href="/services/" variant="primary">See Our Services</ThemeBtn>
          <ThemeBtn href="/satisfaction-guarantee/" variant="secondary">Our Guarantee</ThemeBtn>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
