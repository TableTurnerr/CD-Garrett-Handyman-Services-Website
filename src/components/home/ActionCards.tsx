import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "../shared/SmartImage";

type Action = {
  href: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
};

const ACTIONS: Action[] = [
  {
    href: "/services/",
    title: "Our Services",
    sub: "Plumbing, electrical, carpentry & more",
    image: "/Images/services/plumbing.webp",
    alt: "Handyman repairing plumbing under a sink",
  },
  {
    href: "/get-a-quote/",
    title: "Get a Free Quote",
    sub: "Honest, upfront pricing",
    image: "/Images/services/honey-do.webp",
    alt: "Handyman working through a homeowner's honey-do list",
  },
  {
    href: "/specialties/",
    title: "Specialties",
    sub: "Remodels, ceiling fans, door hanging",
    image: "/Images/services/carpentry.webp",
    alt: "Carpenter measuring and cutting trim",
  },
  {
    href: "/near/",
    title: "Service Areas",
    sub: "Serving Ellis & Dallas counties",
    image: "/Images/services/electrical.webp",
    alt: "Electrician installing a light fixture",
  },
];

export default function ActionCards() {
  return (
    <section className="container-pad pb-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACTIONS.map(({ href, title, sub, image, alt }) => (
          <Link
            key={href}
            href={href}
            className="card group relative overflow-hidden p-0"
          >
            <SmartImage
              src={image}
              alt={alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.78)] via-[rgba(26,20,16,0.18)] to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <div
                  className="font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}
                >
                  {title}
                </div>
                <div className="text-sm text-white/85">{sub}</div>
              </div>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
