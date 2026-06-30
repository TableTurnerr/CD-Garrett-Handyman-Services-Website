import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ThemeBtn from "../shared/ThemeBtn";
import QRHover from "../shared/QRHover";
import { BUSINESS } from "@/data/business";

const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.address.full
)}`;

const MAP_EMBED =
  "https://www.google.com/maps?q=414+Calvert+Dr+Midlothian+TX+76065&output=embed";

function formatHour(time: string): string {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
}

function renderRange(h: { open: string; close: string }): string {
  if (h.open === "Closed") return "Closed";
  return `${formatHour(h.open)} – ${formatHour(h.close)}`;
}

// Day index in BUSINESS.hours: 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun.
const WEEKDAY = BUSINESS.hours[0];
const SATURDAY = BUSINESS.hours[5];
const SUNDAY = BUSINESS.hours[6];

export default function OurLocation() {
  return (
    <section className="bg-white section-pad">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">Find Us</div>
          <h2>Based in Midlothian, serving the area.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-[var(--radius-section)] overflow-hidden border border-[var(--color-border)] aspect-video lg:aspect-auto lg:min-h-[440px] bg-[var(--color-sand)]">
            <iframe
              title="CD Garrett Handyman Services location map"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 440 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="rounded-[var(--radius-section)] border border-[var(--color-border)] p-8 flex flex-col gap-6 bg-[var(--color-warm-white)]">
            <div className="flex items-start gap-3">
              <MapPin size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Address</div>
                <QRHover value={DIRECTIONS}>
                  <span className="text-[var(--color-text)] leading-relaxed">
                    {BUSINESS.address.full}
                  </span>
                </QRHover>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Call or Text</div>
                <QRHover value={`tel:${BUSINESS.phoneRaw}`}>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </QRHover>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Email</div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors break-all"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={18} strokeWidth={1.75} className="text-[var(--color-primary)] shrink-0 mt-1" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-1.5">Hours</div>
                <div className="text-[var(--color-text)] space-y-1 text-sm">
                  <div>Mon–Fri &nbsp;·&nbsp; {renderRange(WEEKDAY)}</div>
                  <div>Saturday &nbsp;·&nbsp; {renderRange(SATURDAY)}</div>
                  <div>Sunday &nbsp;·&nbsp; {renderRange(SUNDAY)}</div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                  {BUSINESS.hoursNote}
                </p>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-2.5">Service Areas</div>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS.areasServed.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-[var(--color-text)] bg-white border border-[var(--color-border)] rounded-full px-2.5 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-2 flex flex-col gap-3">
              <ThemeBtn href={BUSINESS.quoteUrl} variant="primary" className="w-full justify-center">
                Get a Free Quote
              </ThemeBtn>
              <QRHover value={`tel:${BUSINESS.phoneRaw}`} block>
                <ThemeBtn
                  href={`tel:${BUSINESS.phoneRaw}`}
                  external
                  variant="secondary"
                  showArrow={false}
                  className="w-full justify-center"
                >
                  Call {BUSINESS.phone}
                </ThemeBtn>
              </QRHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
