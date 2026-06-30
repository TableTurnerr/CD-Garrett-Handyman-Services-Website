"use client";

import { useEffect, useState } from "react";
import { Images, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/data/business";
import SmartImage from "../shared/SmartImage";
import QRHover from "../shared/QRHover";

type Project = {
  id: string;
  caption: string;
  /** Descriptive alt text for SEO/accessibility. */
  alt: string;
  image: string;
  tag: string;
};

const PHOTOS_URL = BUSINESS.socials.googlePhotos;

const PROJECTS: Project[] = [
  {
    id: "1",
    caption: "Bathroom remodel finished start to finish",
    alt: "Completed bathroom remodel by CD Garrett Handyman Services in Midlothian, TX",
    image: "/Images/gallery/project-01.webp",
    tag: "Remodeling",
  },
  {
    id: "2",
    caption: "Custom trim and carpentry work",
    alt: "Custom trim and carpentry by CD Garrett Handyman Services",
    image: "/Images/gallery/project-03.webp",
    tag: "Carpentry",
  },
  {
    id: "3",
    caption: "Ceiling fans and lighting installed",
    alt: "Ceiling fan and lighting installation by CD Garrett Handyman Services",
    image: "/Images/gallery/project-05.webp",
    tag: "Electrical",
  },
  {
    id: "4",
    caption: "New doors hung, sealed and weatherproofed",
    alt: "Exterior door installation by CD Garrett Handyman Services",
    image: "/Images/gallery/project-06.webp",
    tag: "Doors",
  },
  {
    id: "5",
    caption: "Tile and backsplash set clean",
    alt: "Tile and backsplash work by CD Garrett Handyman Services",
    image: "/Images/gallery/project-08.webp",
    tag: "Tile",
  },
  {
    id: "6",
    caption: "Interior painting with crisp, tidy lines",
    alt: "Interior painting by CD Garrett Handyman Services",
    image: "/Images/gallery/project-10.webp",
    tag: "Painting",
  },
];

export default function ProjectsStrip() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 968) setColumns(2);
      else setColumns(3);
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const cols: Project[][] = Array.from({ length: columns }, () => []);
  PROJECTS.forEach((project, i) => cols[i % columns].push(project));

  const hoveredColumnIndex = hoveredId
    ? PROJECTS.findIndex((p) => p.id === hoveredId) % columns
    : -1;

  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="eyebrow">More Photos</div>
          <h2 className="mb-4">See more of our work</h2>
          <p className="text-[var(--color-text-muted)]">
            Recent repairs, remodels and honey-do projects from homes across
            Ellis and Dallas counties.
          </p>
        </div>

        <div className="flex gap-4 md:gap-5">
          {cols.map((columnData, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4 md:gap-5">
              {columnData.map((project) => {
                const isHovered = project.id === hoveredId;
                const isInHoveredColumn = hoveredColumnIndex === columnIndex;
                const shouldCompress = isInHoveredColumn && !isHovered;

                let height = 360;
                if (isHovered) height = 460;
                else if (shouldCompress) height = 300;

                return (
                  <a
                    key={project.id}
                    href={PHOTOS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project photos: ${project.caption}`}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative block rounded-2xl overflow-hidden cursor-pointer bg-white border border-[var(--color-border)] group"
                    style={{
                      height: `${height}px`,
                      transition:
                        "height 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: isHovered ? "var(--shadow-lift)" : "none",
                      borderColor: isHovered ? "transparent" : "var(--color-border)",
                    }}
                  >
                    <SmartImage
                      src={project.image}
                      alt={project.alt}
                      sizes="(min-width: 968px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-full"
                      style={{
                        transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                        transform: isHovered ? "scale(1.06)" : "scale(1)",
                      }}
                    />

                    <div
                      className="absolute inset-0 z-10 transition-opacity duration-400"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(26,20,16,0) 35%, rgba(26,20,16,0.55) 75%, rgba(26,20,16,0.85) 100%)",
                        opacity: isHovered ? 1 : shouldCompress ? 0 : 0.7,
                      }}
                    />

                    <div
                      className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400"
                      style={{
                        background: isHovered ? "var(--color-primary)" : "rgba(255,255,255,0.92)",
                        color: isHovered ? "white" : "var(--color-text)",
                        opacity: shouldCompress ? 0 : 1,
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <Images size={16} strokeWidth={1.75} />
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white transition-all duration-400"
                      style={{
                        opacity: shouldCompress ? 0 : 1,
                        transform: isHovered ? "translateY(0)" : "translateY(0)",
                      }}
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-1.5">
                        {project.tag}
                      </div>
                      <div
                        className="leading-snug transition-all duration-400"
                        style={{
                          fontSize: isHovered ? "1.05rem" : "0.9rem",
                          fontWeight: 500,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.caption}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <QRHover value={PHOTOS_URL}>
            <a
              href={PHOTOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] link-underline"
            >
              <Images size={16} strokeWidth={1.75} />
              View all our photos on Google
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </QRHover>
        </div>
      </div>
    </section>
  );
}
