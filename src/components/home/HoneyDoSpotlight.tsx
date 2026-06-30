import ThemeBtn from "../shared/ThemeBtn";
import SmartImage from "../shared/SmartImage";

export default function HoneyDoSpotlight() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="card-img rounded-[28px] overflow-hidden aspect-square">
          <SmartImage
            src="/Images/services/honey-do.webp"
            alt="CD Garrett Handyman crew working through a homeowner's honey-do list in Midlothian, TX"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full"
          />
        </div>

        <div>
          <div className="eyebrow">The Honey-Do Crew</div>
          <h2 className="mb-6">We do what your honey can&apos;t do.</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
            Everybody has a honey-do list, the small repairs and to-dos that never quite get done. Hand the whole list to us. From a leaky faucet, a sticky door and a wobbly fence to mounting the TV and hanging that ceiling fan, we knock it all out in one organized trip. One call does it all, with free estimates and honest, upfront pricing.
          </p>
          <div className="flex flex-wrap gap-3">
            <ThemeBtn href="/honey-do/" variant="primary">See the Honey-Do List</ThemeBtn>
            <ThemeBtn href="/get-a-quote/" variant="secondary">Get a Free Quote</ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
