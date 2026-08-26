"use client";

import { useEffect, useState } from "react";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = new Date("2026-10-02T00:00:00+05:00");

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
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatValue(value: number) {
  return String(value).padStart(2, "0");
}

function NumberHalf({
  value,
  position,
  className = "",
}: {
  value: string;
  position: "top" | "bottom";
  className?: string;
}) {
  return (
    <div
      className={`timer-half timer-${position} ${className}`}
    >
      <span className="timer-number">{value}</span>
    </div>
  );
}

function DigitFlipper({
  value,
}: {
  value: string;
}) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    if (value === displayedValue) return;

    const timeout = window.setTimeout(() => {
      setDisplayedValue(value);
    }, 600);

    return () => window.clearTimeout(timeout);
  }, [value, displayedValue]);

  const isFlipping = value !== displayedValue;
  const oldValue = displayedValue;
  const newValue = value;

  return (
    <div className="timer-display">
      <NumberHalf value={newValue} position="top" />

      <NumberHalf
        value={isFlipping ? oldValue : newValue}
        position="bottom"
      />

      {isFlipping && (
        <>
          <NumberHalf
            value={oldValue}
            position="top"
            className="timer-top-animation"
          />

          <NumberHalf
            value={newValue}
            position="bottom"
            className="timer-bottom-animation"
          />
        </>
      )}

      <div className="timer-middle-line" />
    </div>
  );
}

function TimerUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const digits = formatValue(value);

  return (
    <div className="timer-unit">
      <div className="timer-digits">
        <DigitFlipper value={digits[0]} />
        <DigitFlipper value={digits[1]} />
      </div>

      <span className="timer-label">{label}</span>
    </div>
  );
}

export default function Timer() {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemaining | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    updateTimer();

    const interval = window.setInterval(updateTimer, 1000);

    return () => window.clearInterval(interval);
  }, []);

  if (!timeRemaining) {
    return (
      <div
        className="h-28"
        aria-label="Loading countdown"
      />
    );
  }

  const timeFinished =
    timeRemaining.days === 0 &&
    timeRemaining.hours === 0 &&
    timeRemaining.minutes === 0 &&
    timeRemaining.seconds === 0;

  if (timeFinished) {
    return (
      <div
        className="flex min-h-28 items-center justify-center text-center text-2xl font-black uppercase text-[#a9c4b4]"
        aria-live="polite"
      >
        JT SportsFest XIII is live!
      </div>
    );
  }

  return (
    <div>

      <div
        className="timer-countdown"
        aria-label={`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes and ${timeRemaining.seconds} seconds until SportsFest`}
      >
        <TimerUnit
          value={timeRemaining.days}
          label="Days"
        />

        <span className="timer-separator" aria-hidden="true">
          :
        </span>

        <TimerUnit
          value={timeRemaining.hours}
          label="Hours"
        />

        <span className="timer-separator" aria-hidden="true">
          :
        </span>

        <TimerUnit
          value={timeRemaining.minutes}
          label="Minutes"
        />

        <span className="timer-separator" aria-hidden="true">
          :
        </span>

        <TimerUnit
          value={timeRemaining.seconds}
          label="Seconds"
        />
      </div>
    </div>
  );
}
