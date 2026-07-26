"use client";

import { useEffect, useState } from "react";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = new Date("2026-10-04T00:00:00+05:00");

function calculateTimeRemaining(): TimeRemaining {
  const difference = EVENT_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),
    seconds: Math.floor(
      (difference / 1000) % 60,
    ),
  };
}

function FlipCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative min-w-[64px] overflow-hidden border border-white/15 bg-[#010916]/90 shadow-2xl backdrop-blur-md sm:min-w-[76px]">
        {/* Middle flip line */}
        <div className="pointer-events-none absolute left-0 top-1/2 z-20 h-px w-full bg-black/70" />

        {/* Light reflection */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />

        <div
          key={formattedValue}
          className="animate-[flipNumber_0.45s_ease-out] px-3 py-4 text-center text-3xl font-black tabular-nums text-white sm:text-4xl"
        >
          {formattedValue}
        </div>
      </div>

      <span className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#36e29b] sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

export default function Timer() {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemaining | null>(null);

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining());

    const timer = window.setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (!timeRemaining) {
    return (
      <div className="mt-7 h-24" aria-label="Loading countdown" />
    );
  }

  return (
    <div className="mt-7">
      <p className="mb-4 text-center text-[10px] font-black uppercase tracking-[0.25em] text-white/45">
        Countdown:
      </p>

      <div
        className="flex justify-center gap-2 sm:gap-3"
        aria-label={`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes and ${timeRemaining.seconds} seconds until SportsFest`}
      >
        <FlipCard value={timeRemaining.days} label="Days" />
        <FlipCard value={timeRemaining.hours} label="Hours" />
        <FlipCard value={timeRemaining.minutes} label="Minutes" />
        <FlipCard value={timeRemaining.seconds} label="Seconds" />
      </div>
    </div>
  );
}