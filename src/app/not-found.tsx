import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Phone,
  Wrench,
} from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { BUSINESS } from "@/data/business";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found (404) | CD Garrett Handyman Services",
  description:
    "Looks like this page needs a repair. Find your way back to our handyman services, our story, or a free quote, or give us a call.",
  path: "/404/",
  noindex: true,
});

const QUICK_LINKS = [
  {
    href: "/services/",
    title: "Our Services",
    body: "Plumbing, electrical, drywall, carpentry, doors, painting and remodels.",
    icon: Wrench,
  },
  {
    href: "/our-story/",
    title: "Our Story",
    body: "Family owned, 35+ years of experience, serving Ellis & Dallas counties.",
    icon: BookOpen,
  },
  {
    href: "/get-a-quote/",
    title: "Get a Free Quote",
    body: "Tell us about your project and get an honest, no-obligation estimate.",
    icon: ClipboardList,
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-warm-white)] min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(242,176,30,0.40), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(199,127,26,0.28), transparent 70%)",
        }}
      />

      <div className="container-pad relative pt-16 md:pt-24 pb-10 md:pb-14 text-center">
        <div className="eyebrow">404 · Off the Blueprint</div>

        <h1
          className="mx-auto leading-none animate-fade-up"
          style={{
            fontSize: "clamp(7rem, 20vw, 16rem)",
            fontFamily: "var(--font-accent)",
            fontWeight: 400,
            letterSpacing: "-0.06em",
            color: "var(--color-text)",
          }}
          aria-label="404"
        >
          <span aria-hidden="true">4</span>
          <em
            aria-hidden="true"
            className="inline-block align-baseline"
            style={{
              fontStyle: "italic",
              margin: "0 0.04em",
            }}
          >
            0
          </em>
          <span aria-hidden="true">4</span>
        </h1>

        <div
          className="mx-auto my-6 flex items-center justify-center gap-3 text-[var(--color-gold-dark)]"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[var(--color-gold-dark)] opacity-60" />
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-accent)",
              fontStyle: "italic",
            }}
          >
            ◆
          </span>
          <span className="h-px w-12 bg-[var(--color-gold-dark)] opacity-60" />
        </div>

        <h2 className="mx-auto max-w-2xl">
          Looks like this page needs a{" "}
          <em
            className="text-[var(--color-primary)]"
            style={{
              fontFamily: "var(--font-accent)",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            repair
          </em>
          .
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-muted)] leading-relaxed">
          The page you&apos;re looking for has moved or no longer exists. The
          link may be old, but don&apos;t worry, fixing things is what we do.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ThemeBtn href="/" variant="primary">
            Back to Home
          </ThemeBtn>
          <ThemeBtn href="/get-a-quote/" variant="secondary">
            Get a Free Quote
          </ThemeBtn>
        </div>

        <QRHover value={`tel:${BUSINESS.phoneRaw}`} className="mt-8">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            <span>
              Need a hand? Call{" "}
              <span className="font-semibold">{BUSINESS.phone}</span>
            </span>
          </a>
        </QRHover>
      </div>

      <div className="container-pad relative pb-20 md:pb-28">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((q) => {
            const Icon = q.icon;
            return (
              <Link key={q.href} href={q.href} className="card group block p-6 text-left">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-sand)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-text)] group-hover:text-white">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span
                    className="font-semibold text-[var(--color-text)]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                  >
                    {q.title}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {q.body}
                </p>
                <span className="link-underline mt-4 inline-flex text-sm font-medium text-[var(--color-primary)]">
                  Go there <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
