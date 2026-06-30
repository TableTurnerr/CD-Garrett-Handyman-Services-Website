"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/data/business";

const DAY_NAMES = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
] as const;

function toMins(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${period}` : `${hour} ${period}`;
}

type DayHours = (typeof BUSINESS.hours)[number];

function isClosedDay(h: DayHours) {
  // `open` and `close` are always "Closed" together; cast avoids the
  // correlated-union narrowing that would flag the comparison as dead.
  return (h.open as string) === "Closed";
}

type Status =
  | { kind: "open"; closes: string }
  | { kind: "closed"; label: string; detail: string };

function getStatus(now: Date): Status {
  const dayName = DAY_NAMES[now.getDay()];
  const mins = now.getHours() * 60 + now.getMinutes();

  const todayHours = BUSINESS.hours.find((h) => h.day === dayName)!;

  if (!isClosedDay(todayHours)) {
    const openMins = toMins(todayHours.open);
    const closeMins = toMins(todayHours.close);
    if (mins >= openMins && mins < closeMins) {
      return { kind: "open", closes: fmtTime(todayHours.close) };
    }
    if (mins < openMins) {
      return { kind: "closed", label: "Opens Today", detail: fmtTime(todayHours.open) };
    }
  }

  // Closed for the rest of today — find the next day with open hours.
  for (let offset = 1; offset <= 7; offset++) {
    const nextIdx = (now.getDay() + offset) % 7;
    const nextDay = DAY_NAMES[nextIdx];
    const nextHours = BUSINESS.hours.find((h) => h.day === nextDay)!;
    if (!isClosedDay(nextHours)) {
      const label = offset === 1 ? "Opens Tomorrow" : `Opens ${nextDay}`;
      return { kind: "closed", label, detail: fmtTime(nextHours.open) };
    }
  }

  return { kind: "closed", label: "Closed", detail: "Free Estimates" };
}

export default function HeroStatusBadge() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    function tick() {
      setStatus(getStatus(new Date()));
    }
    tick();
    // Re-evaluate every minute
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    // Skeleton to avoid layout shift before hydration
    return (
      <div className="hidden md:block absolute -bottom-8 -left-8 bg-white border border-[var(--color-border)] rounded-2xl px-5 py-4 shadow-[var(--shadow-lift)] min-w-[9rem]">
        <div className="h-2.5 w-16 rounded bg-[var(--color-border)] mb-2 animate-pulse" />
        <div className="h-4 w-24 rounded bg-[var(--color-border)] animate-pulse" />
      </div>
    );
  }

  const isOpen = status.kind === "open";
  const label = isOpen ? "Open Now" : status.label;
  const detail = isOpen ? `Closes at ${status.closes}` : status.detail;
  const dotColor = isOpen ? "bg-emerald-500" : "bg-[var(--color-text-muted)]";

  return (
    <div className="hidden md:block absolute -bottom-8 -left-8 bg-white border border-[var(--color-border)] rounded-2xl px-5 py-4 shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className={`inline-block w-2 h-2 rounded-full ${dotColor}`} />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: isOpen ? "inherit" : "var(--color-text-muted)" }}
        >
          {label}
        </span>
      </div>
      <div
        className="font-semibold text-[1.05rem]"
        style={{ color: isOpen ? "var(--color-text)" : "var(--color-text-muted)" }}
      >
        {detail}
      </div>
    </div>
  );
}
