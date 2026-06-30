import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import QRHover from "../shared/QRHover";
import FooterLogo from "./FooterLogo";
import { BUSINESS } from "@/data/business";
import pkg from "../../../package.json";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/specialties/", label: "Specialties" },
  { href: "/honey-do/", label: "Honey-Do List" },
  { href: "/handyman-services/", label: "Handyman Guide" },
  { href: "/our-story/", label: "Our Story" },
  { href: "/near/", label: "Service Areas" },
  { href: "/get-a-quote/", label: "Get a Free Quote" },
  { href: "/?review=open", label: "Leave a Review" },
  { href: "/satisfaction-guarantee/", label: "Our Guarantee" },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-[10px] md:px-[50px] lg:px-[70px] pt-12 md:pt-16 pb-[20px] sm:pb-[10px] mt-12"
      style={{ background: "var(--color-text)", color: "rgba(255,255,255,0.78)" }}
    >
      <div
        className="text-4xl sm:text-5xl md:text-6xl w-full text-white leading-none text-center"
        style={{ letterSpacing: "-0.04em", fontWeight: 700 }}
      >
        CD Garrett Handyman
      </div>
      <div className="mt-4 text-center text-sm md:text-base" style={{ color: "var(--color-gold)" }}>
        We Do What Your Honey Can&apos;t Do
      </div>
      <div className="mt-3 mb-10 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-center" style={{ color: "rgba(255,255,255,0.62)" }}>
        {BUSINESS.footerDescription}
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[100px] lg:grid-cols-3 gap-[10px] lg:gap-8">
          <div className="col-span-2 lg:col-span-1 mx-auto flex flex-row items-center lg:items-start gap-4">
            <FooterLogo version={pkg.version} />
            <div className="flex h-[120px] justify-evenly gap-[10px] flex-col my-auto max-w-100">
              <a
                href={BUSINESS.socials.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CD Garrett Handyman on Google"
                className="min-w-[120px] p-2 py-3 h-full w-full items-center justify-center flex gap-2 rounded-lg group transition-colors duration-300 bg-white/5 hover:bg-[var(--color-primary)]/90"
              >
                <Star size={18} className="text-[var(--color-gold)]" fill="currentColor" aria-hidden="true" />
                <span className="text-xs font-medium text-white/85 group-hover:text-white">Google Reviews</span>
              </a>
              <a
                href={BUSINESS.socials.googlePhotos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CD Garrett Handyman project photos"
                className="min-w-[120px] p-2 py-3 h-full w-full items-center justify-center flex gap-2 rounded-lg group transition-colors duration-300 bg-white/5 hover:bg-[var(--color-primary)]/90"
              >
                <MapPin size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                <span className="text-xs font-medium text-white/85 group-hover:text-white">View Our Work</span>
              </a>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 flex flex-row justify-evenly w-full mb-8 lg:mb-0">
            <div className="col-span-1 text-center h-full lg:mr-10 mr-0">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-base font-semibold mb-[22px] text-white tracking-tight">Contact Us</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
                  <div className="flex flex-col items-center gap-[10px]">
                    <QRHover value={`tel:${BUSINESS.phoneRaw}`}>
                      <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        className="hover:text-[var(--color-gold)] hover:underline cursor-pointer transition-colors"
                      >
                        {BUSINESS.phone}
                      </a>
                    </QRHover>
                    <QRHover value={`mailto:${BUSINESS.email}`}>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="hover:text-[var(--color-gold)] hover:underline cursor-pointer transition-colors"
                      >
                        {BUSINESS.email}
                      </a>
                    </QRHover>
                    <span className="max-w-[220px] leading-snug">{BUSINESS.address.full}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 text-center h-full">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-base text-white font-semibold mb-[22px] tracking-tight">Quick Links</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
                  <div className="text-center grid grid-cols-2 gap-x-6 gap-y-[10px]">
                    {QUICK_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        scroll={l.href === "/?review=open" ? false : undefined}
                        className="hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                      >
                        <span className="hover:underline">{l.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />

      <div
        className="rounded-full text-white w-[90%] mx-auto min-h-[37px] py-[10px] sm:px-[50px] md:px-[100px]"
        style={{ background: "var(--color-primary-dark)" }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-xs gap-[20px]" style={{ color: "rgba(255,255,255,0.9)" }}>
          <p className="hidden sm:block" style={{ color: "rgba(255,255,255,0.9)" }}>
            CD Garrett Handyman Services LLC © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <p className="text-nowrap" style={{ color: "rgba(255,255,255,0.9)" }}>
            Made with{" "}
            <a target="_blank" href="http://tableturnerr.com" rel="noopener noreferrer" className="hover:underline cursor-pointer" style={{ color: "rgba(255,255,255,0.9)" }}>
              <u>TableTurnerr.com</u>
            </a>
          </p>
        </div>
      </div>
      <div className="block sm:hidden w-full text-center text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.9)" }}>
        CD Garrett Handyman Services LLC © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
}
