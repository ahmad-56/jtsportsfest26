"use client";

import { Users } from "lucide-react";
import { useEffect, useState } from "react";

type TeamCounterProps = {
  initialCount?: number;
};

export default function TeamCounter({
  initialCount = 0,
}: TeamCounterProps) {
  const [teamCount, setTeamCount] =
    useState(initialCount);

  const [animatedCount, setAnimatedCount] =
    useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const getTeamCount = async () => {
      try {
        const response = await fetch(
          "/api/registration-count",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) return;

        const data: { total: number } =
          await response.json();

        if (
          active &&
          Number.isFinite(data.total)
        ) {
          setTeamCount(data.total);
        }
      } catch (error) {
        console.error(
          "Unable to retrieve delegate count:",
          error
        );
      } finally {
        if (active) setLoading(false);
      }
    };

    void getTeamCount();

    const interval = window.setInterval(() => {
      void getTeamCount();
    }, 60000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const duration = 1400;
    const startTime = performance.now();
    let frame: number;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setAnimatedCount(
        Math.round(teamCount * eased)
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [teamCount, loading]);

  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-white/15 bg-[#071b16] px-3 py-2.5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#a9c4b4]/60 hover:shadow-[0_18px_40px_rgba(7,92,63,0.30)] lg:w-[240px] lg:px-4 lg:py-3">
      <div className="relative z-10 flex items-center gap-2.5 lg:gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075c3f] text-[#a9c4b4] shadow-md shadow-[#075c3f]/20 transition-transform duration-300 group-hover:scale-110 lg:h-10 lg:w-10">
          <Users size={14} className="lg:h-4 lg:w-4" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-black uppercase tracking-[0.14em] text-[#a9c4b4] sm:text-[8px]">
            Registered Delegates
          </p>

          <div className="mt-0.5 flex items-end gap-1.5">
            <span className="text-xl font-black leading-none tabular-nums lg:text-2xl">
              {loading
                ? "—"
                : animatedCount.toLocaleString()}
            </span>

            <span className="pb-px text-[9px] font-bold uppercase text-white/45 lg:text-[11px]">
              Delegates
            </span>
          </div>
        </div>

        <div className="relative h-2 w-2 shrink-0 self-start">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#a9c4b4] opacity-60" />
          <span className="absolute inset-0 rounded-full bg-[#a9c4b4]" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#a9c4b4]/0 blur-2xl transition-all duration-500 group-hover:bg-[#a9c4b4]/30 lg:-bottom-16 lg:-right-16 lg:h-40 lg:w-40 lg:blur-3xl" />
    </div>
  );}