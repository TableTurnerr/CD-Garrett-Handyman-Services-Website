import Link from "next/link";
import SmartImage from "../shared/SmartImage";
import ThemeBtn from "../shared/ThemeBtn";

export default function AboutIntro() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="card-img rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-square">
          <SmartImage
            src="/Images/about.webp"
            alt="Cedric Garrett, owner of CD Garrett Handyman Services in Midlothian, TX"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full"
          />
        </div>

        <div>
          <div className="eyebrow">Family Owned in Midlothian</div>
          <h2 className="mb-5">35+ years of trusted handyman work.</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              CD Garrett Handyman Services is a family-owned company built by owner{" "}
              <span className="text-[var(--color-text)] font-medium">Cedric Garrett</span> on more than 35 years
              of hands-on experience. We bring extreme professionalism and real attention to detail to every job,
              whether it&apos;s a quick repair or a full remodel, and we don&apos;t leave until the work is done
              right and you&apos;re completely satisfied.
            </p>
            <p>
              From{" "}
              <Link href="/specialties/plumbing/" className="link-underline text-[var(--color-text)]">plumbing</Link>{" "}
              and{" "}
              <Link href="/specialties/electrical/" className="link-underline text-[var(--color-text)]">electrical</Link>{" "}
              to{" "}
              <Link href="/specialties/drywall-repair/" className="link-underline text-[var(--color-text)]">drywall</Link>,{" "}
              <Link href="/specialties/carpentry/" className="link-underline text-[var(--color-text)]">carpentry</Link>{" "}
              and full{" "}
              <Link href="/specialties/bathroom-remodeling/" className="link-underline text-[var(--color-text)]">bathroom</Link>{" "}
              and{" "}
              <Link href="/specialties/kitchen-remodeling/" className="link-underline text-[var(--color-text)]">kitchen remodels</Link>,
              one trusted crew handles it all. We proudly serve homeowners across Ellis and Dallas counties with
              free estimates and honest, upfront pricing. Browse our{" "}
              <Link href="/services/" className="link-underline text-[var(--color-text)]">services</Link> to see
              everything we do.
            </p>
          </div>
          <div className="mt-7">
            <ThemeBtn href="/our-story/" variant="secondary">Our Story</ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
