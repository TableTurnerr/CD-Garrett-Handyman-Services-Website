import Link from "next/link";
import { Star } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import SmartImage from "@/components/shared/SmartImage";

type ServiceCardProps = {
  item: ServiceItem;
  categoryLabel?: string;
  href?: string;
  showBadge?: boolean;
};

export default function ServiceCard({
  item,
  categoryLabel,
  href,
  showBadge = true,
}: ServiceCardProps) {
  const content = (
    <>
      {item.image && (
        <SmartImage
          src={item.image}
          alt={item.name}
          className="aspect-[16/10] rounded-xl mb-5"
        />
      )}
      {categoryLabel && (
        <div className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-2">
          {categoryLabel}
        </div>
      )}
      <h3
        className="text-lg mb-3"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {item.name}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
        {item.description}
      </p>
      {item.price && (
        <div className="text-sm font-semibold text-[var(--color-text)] mb-4">
          {item.price}
        </div>
      )}
      {showBadge && item.popular && (
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)] uppercase tracking-wider">
            <Star size={10} className="fill-current" /> Popular
          </span>
        </div>
      )}
    </>
  );

  const baseClass =
    "rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-transparent hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5";

  if (href) {
    return (
      <Link href={href} className={`block ${baseClass}`}>
        {content}
      </Link>
    );
  }

  return <article className={baseClass}>{content}</article>;
}
