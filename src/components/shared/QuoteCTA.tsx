import ThemeBtn from "./ThemeBtn";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/business";

type Props = {
  /** Optional service/topic name — used only in the heading for a light keyword touch. */
  itemName?: string;
};

// Single shared "request a free estimate" CTA used across service and specialty pages.
// Page uniqueness lives in the primary copy + FAQs, not here.
export default function QuoteCTA({ itemName }: Props) {
  const heading = itemName
    ? `Get a Free Estimate for ${itemName}`
    : "Get a Free Estimate Today";

  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad max-w-3xl">
        <h2 className="mb-6">{heading}</h2>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
          Tell us what you need done and we&apos;ll give you an honest, upfront price, with
          no obligation. Serving {BUSINESS.serviceAreasLabel}. We don&apos;t leave until the
          job is done right and you&apos;re completely satisfied.
        </p>
        <div className="flex flex-wrap gap-3">
          <ThemeBtn href={BUSINESS.quoteUrl} variant="primary">
            Request a Free Quote
          </ThemeBtn>
          <ThemeBtn href={`tel:${BUSINESS.phoneRaw}`} variant="secondary" showArrow={false}>
            <Phone size={16} aria-hidden="true" /> Call {BUSINESS.phone}
          </ThemeBtn>
        </div>
      </div>
    </section>
  );
}
