"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
import SmartImage from "../shared/SmartImage";
import { BUSINESS } from "@/data/business";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

const IMAGES: GalleryImage[] = [
  {
    src: "/Images/gallery/project-01.webp",
    alt: "Finished bathroom remodel by CD Garrett Handyman Services in Midlothian, TX",
    caption: "Full bathroom remodel, finished start to finish",
  },
  {
    src: "/Images/gallery/project-02.webp",
    alt: "Updated kitchen with new cabinets and fixtures by CD Garrett Handyman Services",
    caption: "Kitchen refresh with new fixtures and finishes",
  },
  {
    src: "/Images/gallery/project-03.webp",
    alt: "Custom trim and carpentry work installed in a Midlothian home",
    caption: "Custom trim and carpentry, cleanly finished",
  },
  {
    src: "/Images/gallery/project-04.webp",
    alt: "Drywall repair and fresh interior paint by CD Garrett Handyman Services",
    caption: "Drywall patched, textured and repainted",
  },
  {
    src: "/Images/gallery/project-05.webp",
    alt: "Ceiling fan and light fixture installation by CD Garrett Handyman Services",
    caption: "Ceiling fans and lighting, hung and wired",
  },
  {
    src: "/Images/gallery/project-06.webp",
    alt: "New exterior door installed and sealed by CD Garrett Handyman Services",
    caption: "Doors hung true, sealed and weatherproofed",
  },
  {
    src: "/Images/gallery/project-07.webp",
    alt: "Deck and fence repair by CD Garrett Handyman Services in Ellis County, TX",
    caption: "Deck and fence repairs, solid and safe again",
  },
  {
    src: "/Images/gallery/project-08.webp",
    alt: "Tile and backsplash work by CD Garrett Handyman Services",
    caption: "Tile and backsplash, set clean and sealed",
  },
  {
    src: "/Images/gallery/project-09.webp",
    alt: "Plumbing fixture repair and replacement by CD Garrett Handyman Services",
    caption: "Plumbing fixtures repaired and replaced",
  },
  {
    src: "/Images/gallery/project-10.webp",
    alt: "Interior painting with crisp lines by CD Garrett Handyman Services",
    caption: "Interior painting with careful prep and tidy lines",
  },
  {
    src: "/Images/gallery/project-11.webp",
    alt: "Custom built-in shelving and storage by CD Garrett Handyman Services",
    caption: "Built-in shelving and storage made to fit",
  },
  {
    src: "/Images/gallery/project-12.webp",
    alt: "Outdoor living and patio improvement by CD Garrett Handyman Services",
    caption: "Outdoor living and patio improvements",
  },
];

const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setLightboxIdx((i) =>
        i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length,
      ),
    [],
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIdx, close, next, prev]);

  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="eyebrow">Gallery</div>
          <h2 className="mb-4">Our recent work.</h2>
          <p className="text-[var(--color-text-muted)]">
            A look at recent repairs, remodels and honey-do projects we&apos;ve
            completed for homeowners across Ellis and Dallas counties.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 lg:auto-rows-[220px]">
          {IMAGES.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIdx(idx)}
              aria-label={`Open photo: ${img.caption}`}
              className={`relative block rounded-2xl overflow-hidden cursor-pointer group bg-white border border-[var(--color-border)] aspect-square lg:aspect-auto lg:h-full ${SPANS[idx]}`}
              style={{
                transition:
                  "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease",
              }}
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full"
                imgClassName="gallery-img"
                fetchPriority="low"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,20,16,0) 40%, rgba(26,20,16,0.55) 75%, rgba(26,20,16,0.85) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 transition-all duration-500 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <p
                  className="text-[0.95rem] leading-snug font-medium text-left"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={BUSINESS.socials.googlePhotos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] link-underline"
          >
            See more photos on Google
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery viewer"
          onClick={close}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-in"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close gallery"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl flex flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES[lightboxIdx].src}
              alt={IMAGES[lightboxIdx].alt}
              className="w-auto max-w-full max-h-[78vh] object-contain rounded-lg gallery-img"
            />
            <div
              className="text-center mt-4 text-sm px-6"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {IMAGES[lightboxIdx].caption}
              <span
                className="block text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {lightboxIdx + 1} / {IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
