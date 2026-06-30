import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv,
  Hammer,
  Droplets,
  Droplet,
  SprayCan,
  DoorOpen,
  Layers,
  Fan,
  Check,
} from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import QuoteCTA from "@/components/shared/QuoteCTA";
import { BUSINESS } from "@/data/business";

const HONEY_DO_IMAGE = "/Images/services/honey-do.webp";

const DESCRIPTION =
  "Hand us your whole honey-do list and we knock it out in one organized visit. TV and picture mounting, furniture assembly, caulking, pressure washing, sticky doors, leaky faucets, drywall patches, ceiling fans and the rest. Free estimates from a trusted Midlothian, TX handyman serving Ellis and Dallas counties.";

const EXAMPLES = [
  {
    icon: Tv,
    label: "TV & Picture Mounting",
    body: "Flat-screens, mirrors, art and shelves hung level and secure, with the cords tucked out of sight.",
  },
  {
    icon: Hammer,
    label: "Furniture Assembly",
    body: "Flat-pack furniture, shelving, grills and exercise equipment built and set right where you want it.",
  },
  {
    icon: Droplets,
    label: "Caulking & Sealing",
    body: "Tubs, sinks, counters and trim re-caulked clean to keep water out and keep things looking sharp.",
  },
  {
    icon: SprayCan,
    label: "Pressure Washing",
    body: "Driveways, patios, fences and siding washed back to clean, free of dirt, mildew and grime.",
  },
  {
    icon: DoorOpen,
    label: "Sticking Doors",
    body: "Doors that drag, stick or won't latch planed, adjusted and rehung so they swing and close right.",
  },
  {
    icon: Droplet,
    label: "Leaky Faucets",
    body: "Drips, worn washers and tired fixtures repaired or swapped before a small leak turns costly.",
  },
  {
    icon: Layers,
    label: "Drywall Patches",
    body: "Holes, cracks and dents cut out, patched and textured so the repair blends right in.",
  },
  {
    icon: Fan,
    label: "Ceiling Fans",
    body: "New fans hung, balanced and wired, plus old fans and light kits swapped out, even on tall ceilings.",
  },
];

const VALUE_POINTS = [
  "One organized visit instead of a dozen weekends you never get to",
  "A free estimate and honest, upfront pricing before any work starts",
  "35+ years of experience and the right tools already in the truck",
  "We don't leave until every item is checked off and you're satisfied",
];

export const metadata: Metadata = createMetadata({
  title: "Honey-Do List Services in Midlothian, TX | CD Garrett",
  description: DESCRIPTION,
  path: "/honey-do/",
  keywords: [
    "honey do list midlothian tx",
    "honey do list service",
    "handyman honey do list",
    "tv mounting midlothian tx",
    "furniture assembly midlothian",
    "odd jobs handyman midlothian",
    "small home repairs midlothian tx",
    "handyman near me midlothian",
    "pressure washing midlothian tx",
    "ceiling fan installation midlothian",
    "drywall patch repair midlothian",
    "honey do crew",
  ],
});

export default function HoneyDoPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          serviceSchema({
            name: "Honey-Do List Services",
            description: DESCRIPTION,
            url: "/honey-do/",
            image: HONEY_DO_IMAGE,
          }),
          webPageSchema({
            url: "/honey-do/",
            name: "Honey-Do List Services in Midlothian, TX | CD Garrett",
            description: DESCRIPTION,
            primaryImage: HONEY_DO_IMAGE,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Honey-Do List", url: "/honey-do/" },
          ]),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Honey-Do List", url: "/honey-do/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-xl">
            <div className="eyebrow">The Honey-Do Crew</div>
            <h1 className="mb-6">We Do What Your Honey Can&apos;t Do</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Every house has a list. The leaky faucet, the TV that still needs mounting,
              the door that sticks every time it rains, the fan that&apos;s been in its box
              since spring. Hand the whole thing to us and we knock it out in one organized
              visit, so you get your weekends back.
            </p>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              No job is too small. Whether it&apos;s a single repair or a list a page long,
              one call gets it all done by a {BUSINESS.yearsExperience}-year handyman who
              shows up with the right tools and a free estimate in hand.
            </p>
          </div>
          <div className="card-img aspect-[4/3] rounded-[var(--radius-section)] overflow-hidden">
            <SmartImage
              src={HONEY_DO_IMAGE}
              alt="CD Garrett handyman working through a homeowner's honey-do list in Midlothian, TX"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="container-pad pb-12 md:pb-16">
        <div className="max-w-3xl mb-10">
          <h2 className="mb-3">What goes on a honey-do list?</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            These are the small jobs that pile up around the house. We handle all of them,
            and plenty more, in a single trip.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXAMPLES.map(({ icon: Icon, label, body }) => (
            <article key={label} className="card p-6">
              <div className="w-11 h-11 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {label}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad pb-12 md:pb-16">
        <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-section)] p-8 md:p-12 border border-[var(--color-border)]">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-xl">
              <div className="eyebrow">One Visit, Whole List</div>
              <h2 className="mb-5">Why hand the list to us</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Calling a different pro for every little fix is slow and expensive. We bring
                the skills of a plumber, electrician, carpenter and painter in one truck, so
                the whole list gets done together, the right way, the first time.
              </p>
              <ul className="space-y-3">
                {VALUE_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-[var(--color-primary)] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[var(--color-text)]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-xl">
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Looking for the bigger jobs too?
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                The honey-do list is just the start. We also handle plumbing, electrical,
                drywall, carpentry, doors, painting, and full bathroom and kitchen remodels.
                Browse everything we do, or read more about our handyman work.
              </p>
              <div className="flex flex-wrap gap-3">
                <ThemeBtn href="/services/" variant="primary">
                  See All Services
                </ThemeBtn>
                <ThemeBtn href="/specialties/handyman/" variant="secondary">
                  Our Handyman Work
                </ThemeBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA itemName="Your Honey-Do List" />
    </>
  );
}
