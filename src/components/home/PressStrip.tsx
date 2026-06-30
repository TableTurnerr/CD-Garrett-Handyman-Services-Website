import { Star } from "lucide-react";
import { PRESS_QUOTES } from "@/data/reviews";
import { BUSINESS } from "@/data/business";

export default function PressStrip() {
  return (
    <section className="bg-[var(--color-sand)] border-y border-[var(--color-border)] mb-5 md:mb-7">
      <div className="container-pad py-6 md:py-7">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 text-center">
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                />
              ))}
            </div>
            <span className="font-semibold text-[var(--color-text)]">{BUSINESS.ratingValue}</span>
            <span className="text-sm text-[var(--color-text-muted)]">
              · {BUSINESS.reviewCount} reviews
            </span>
          </div>

          <span className="hidden md:block h-5 w-px bg-[var(--color-border)]" aria-hidden="true" />

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {PRESS_QUOTES.map(({ quote }, i) => (
              <li key={quote} className="flex items-center gap-x-5">
                {i > 0 && (
                  <span
                    className="hidden md:inline-block w-1 h-1 rounded-full bg-[var(--color-gold)]"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="text-[var(--color-text)] italic leading-snug"
                  style={{ fontFamily: "var(--font-accent)", fontWeight: 400 }}
                >
                  &ldquo;{quote}&rdquo;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
