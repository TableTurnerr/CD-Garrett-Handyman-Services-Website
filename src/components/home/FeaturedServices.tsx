"use client";

import Link from "next/link";
import { ArrowRight, Hand, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SmartImage from "../shared/SmartImage";
import { SERVICE_CATEGORIES } from "@/data/services";

const featured = SERVICE_CATEGORIES.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.description,
  image: category.image,
  count: category.items.length,
  href: category.specialtySlug
    ? `/specialties/${category.specialtySlug}/`
    : "/services/",
}));

export default function FeaturedServices() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<0 | 1 | -1>(0);
  const speedRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const [edge, setEdge] = useState<"left" | "right" | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollDir, setScrollDir] = useState<"left" | "right" | null>(null);
  const prevScrollLeft = useRef(0);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    setScrollDir(el.scrollLeft > prevScrollLeft.current ? "right" : "left");
    prevScrollLeft.current = el.scrollLeft;
    if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = setTimeout(() => setScrollDir(null), 800);
  };

  useEffect(() => {
    const tick = () => {
      const el = scrollerRef.current;
      if (el && directionRef.current !== 0) {
        el.scrollLeft += directionRef.current * speedRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = Math.min(180, rect.width * 0.18);

    if (x < zone) {
      const intensity = 1 - x / zone;
      directionRef.current = -1;
      speedRef.current = 2 + intensity * 12;
      setEdge("left");
    } else if (x > rect.width - zone) {
      const intensity = 1 - (rect.width - x) / zone;
      directionRef.current = 1;
      speedRef.current = 2 + intensity * 12;
      setEdge("right");
    } else {
      directionRef.current = 0;
      speedRef.current = 0;
      setEdge(null);
    }
  };

  const handleLeave = () => {
    directionRef.current = 0;
    speedRef.current = 0;
    setEdge(null);
  };

  return (
    <section className="bg-white section-pad">
      <div className="container-pad">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2>Services we handle.</h2>
          </div>
          <Link
            href="/services/"
            className="link-underline text-[var(--color-text)] font-medium text-sm"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div
          className="relative -mx-5"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >

          <div
            ref={scrollerRef}
            className="flex items-start gap-5 md:gap-6 overflow-x-auto hide-scrollbar pb-4 px-[calc((100vw-280px)/2)] md:px-5 snap-x snap-mandatory md:snap-none"
            style={{ scrollBehavior: "auto" }}
          >
            {featured.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="card shrink-0 w-[280px] md:w-[320px] snap-center group"
              >
                <div className="card-img aspect-[4/3]">
                  <SmartImage
                    src={service.image}
                    alt={`${service.name} by CD Garrett Handyman Services in Midlothian, TX`}
                    sizes="(min-width: 768px) 320px, 280px"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-2">
                    {service.count} services
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 mb-4">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 font-semibold text-sm text-[var(--color-primary)]">
                    View services
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 transition-opacity duration-700 ${
              canScrollLeft
                ? scrollDir === "left"
                  ? "opacity-60 md:opacity-100"
                  : "opacity-30 md:opacity-50"
                : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0))",
            }}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 transition-opacity duration-700 ${
              canScrollRight
                ? scrollDir === "right"
                  ? "opacity-60 md:opacity-100"
                  : "opacity-30 md:opacity-50"
                : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0))",
            }}
          />

        </div>

        <div className="mt-6 flex justify-center">
          <div
            aria-hidden
            className="hidden md:flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]"
          >
            <span className="flex items-center -space-x-2">
              <ChevronLeft size={14} strokeWidth={2.5} />
              <ChevronLeft size={14} strokeWidth={2.5} />
            </span>
            <span>Hover edges to scroll</span>
            <span className="flex items-center -space-x-2">
              <ChevronRight size={14} strokeWidth={2.5} />
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
          </div>
          <div
            aria-hidden
            className="flex md:hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]"
          >
            <span className="flex items-center -space-x-2">
              <ChevronLeft size={14} strokeWidth={2.5} />
              <ChevronLeft size={14} strokeWidth={2.5} />
            </span>
            <Hand size={12} />
            <span>Drag to scroll</span>
            <span className="flex items-center -space-x-2">
              <ChevronRight size={14} strokeWidth={2.5} />
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
