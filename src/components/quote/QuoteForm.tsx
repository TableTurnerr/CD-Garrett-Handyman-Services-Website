"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICE_CATEGORIES } from "@/data/services";

const SERVICE_OPTIONS = [...SERVICE_CATEGORIES.map((c) => c.name), "Other"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
};

function buildMailto(values: {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  date: string;
  message: string;
}) {
  const subject = `Free Quote Request - ${values.name}`;
  const body = `Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email}
Address / City: ${values.address}
Service Needed: ${values.service}
Preferred Date: ${values.date || "Flexible"}

Details:
${values.message}`;
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const errors: FieldErrors = {};
    if (!name) errors.name = "Please enter your name.";

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (
      !/^[\d\s()+\-.]+$/.test(phone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      errors.phone = "Please enter a valid phone number (7-15 digits).";
    }

    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!address) errors.address = "Please enter your address or city.";
    if (!service) errors.service = "Please select the service you need.";
    if (!message) errors.message = "Please tell us a little about the job.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    const mailto = buildMailto({ name, phone, email, address, service, date, message });
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] transition-colors focus:outline-none focus:border-[var(--color-text)]";
  const labelCls =
    "block text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2";
  const fieldErrorCls = "mt-1 text-xs text-[var(--color-primary)]";

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-section)] border border-[var(--color-border)] bg-[var(--color-warm-white)] p-10 text-center">
        <h3 className="!text-2xl mb-3">Thanks. Your request is on its way.</h3>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
          Your email app should have opened with your quote request ready to send. Once
          we have it, we&apos;ll reach out to set up your free estimate. Prefer to talk now?
          Give us a call.
        </p>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary justify-center">
          <Phone size={16} aria-hidden="true" /> Call {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[var(--radius-section)] border border-[var(--color-border)] bg-[var(--color-warm-white)] p-7 md:p-10 grid gap-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Full Name *</span>
          <input name="name" required type="text" className={inputCls} />
          {fieldErrors.name && <span className={fieldErrorCls}>{fieldErrors.name}</span>}
        </label>
        <label className="block">
          <span className={labelCls}>Phone *</span>
          <input name="phone" required type="tel" className={inputCls} />
          {fieldErrors.phone && <span className={fieldErrorCls}>{fieldErrors.phone}</span>}
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Email *</span>
          <input name="email" required type="email" className={inputCls} />
          {fieldErrors.email && <span className={fieldErrorCls}>{fieldErrors.email}</span>}
        </label>
        <label className="block">
          <span className={labelCls}>Address / City *</span>
          <input
            name="address"
            required
            type="text"
            placeholder="e.g. Midlothian, TX"
            className={inputCls}
          />
          {fieldErrors.address && <span className={fieldErrorCls}>{fieldErrors.address}</span>}
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Service Needed *</span>
          <select name="service" required className={inputCls} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {fieldErrors.service && <span className={fieldErrorCls}>{fieldErrors.service}</span>}
        </label>
        <label className="block">
          <span className={labelCls}>Preferred Date</span>
          <input name="date" type="date" className={inputCls} />
        </label>
      </div>

      <label className="block">
        <span className={labelCls}>Project Details *</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about the job, or list everything on your honey-do list and we'll tackle it in one visit."
          className={inputCls}
        />
        {fieldErrors.message && <span className={fieldErrorCls}>{fieldErrors.message}</span>}
      </label>

      <button type="submit" className="btn-primary justify-center mt-2">
        Request My Free Quote
      </button>

      <div className="text-center">
        <p className="text-xs text-[var(--color-text-muted)] mb-3">
          Prefer to talk it through? Call or text us and we&apos;ll get you scheduled.
        </p>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="btn-secondary justify-center inline-flex"
        >
          <Phone size={16} aria-hidden="true" /> Call {BUSINESS.phone}
        </a>
      </div>
    </form>
  );
}
