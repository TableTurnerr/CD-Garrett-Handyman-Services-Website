import { Star, BadgeCheck } from "lucide-react";
import ThemeBtn from "../shared/ThemeBtn";
import SmartImage from "../shared/SmartImage";
import HeroStatusBadge from "./HeroStatusBadge";
import { BUSINESS } from "@/data/business";

export default function HeroBanner() {
  return (
    <section className="relative bg-white">
      <div className="container-pad relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center pt-12 pb-16 md:pt-24 md:pb-28">
        <div className="animate-fade-up">
          <div className="eyebrow">
            {BUSINESS.slogan} · Family-Owned · {BUSINESS.yearsExperience} Years
          </div>
          <h1 className="mb-7">
            Expert Handyman &amp;{" "}
            <em
              className="text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Honey-Do
            </em>{" "}
            Services<br />in Midlothian, TX
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-10 leading-relaxed">
            Family-owned and operated with {BUSINESS.yearsExperience} years of experience, serving
            homeowners across Ellis &amp; Dallas counties. From plumbing and electrical to drywall,
            carpentry, and full remodels, one call does it all. Free estimates and honest, upfront pricing.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <ThemeBtn href={BUSINESS.quoteUrl} variant="primary">Get a Free Quote</ThemeBtn>
            <ThemeBtn
              href={`tel:${BUSINESS.phoneRaw}`}
              external
              variant="secondary"
              showArrow={false}
              ariaLabel={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            >
              Call {BUSINESS.phone}
            </ThemeBtn>
          </div>

          <div className="flex items-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>
              <span className="font-semibold">{BUSINESS.ratingValue}</span>
              <span className="text-[var(--color-text-muted)]">
                · {BUSINESS.reviewCount} reviews
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[var(--color-text-muted)]">
              <BadgeCheck size={16} className="text-[var(--color-gold-dark)]" aria-hidden="true" />
              Free Estimates · Insured
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm">
            <BadgeCheck size={16} className="text-[var(--color-gold-dark)]" aria-hidden="true" />
            <span className="font-semibold text-[var(--color-text)]">Satisfaction Guaranteed</span>
            <span className="text-[var(--color-text-muted)]">· {BUSINESS.serviceAreasLabel}</span>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <SmartImage
            src="/Images/hero.webp"
            alt="Professional handyman from CD Garrett Handyman Services completing a home repair in Midlothian, TX"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[28px] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
          />

          <HeroStatusBadge />

          <div className="hidden md:flex absolute -top-6 -right-6 bg-[var(--color-primary)] text-white rounded-full w-28 h-28 items-center justify-center text-center px-4 shadow-[var(--shadow-lift)]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-90">Experience</div>
              <div
                className="text-sm mt-1 italic"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}
              >
                {BUSINESS.yearsExperience} Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
