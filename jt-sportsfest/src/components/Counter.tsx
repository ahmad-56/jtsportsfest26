"use client";

import { Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

type TeamCounterProps = {
  initialCount?: number;
};

export default function TeamCounter({
  initialCount = 0,
}: TeamCounterProps) {
  const [teamCount, setTeamCount] = useState(initialCount);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

      setTeamCount(data.total);
    } catch (error) {
      console.error(
        "Unable to retrieve delegate count:",
        error
          );
        } finally {
          setLoading(false);
        }
      };

      void getTeamCount();

      const interval = window.setInterval(() => {
        void getTeamCount();
      }, 60000);

      return () => window.clearInterval(interval);
    }, []);

  return (
  <div className="relative -translate-y-16">
    <div className="group relative inline-flex overflow-hidden rounded-xl border border-[#00633e]/20 bg-[#031b25] shadow-[0_10px_30px_rgba(0,99,62,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#36e29b]/60 hover:shadow-[0_15px_35px_rgba(0,99,62,0.2)]">
      <div className="flex items-center gap-3 px-4 py-3">

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00633e] text-[#36e29b] shadow-md shadow-[#00633e]/20 transition-transform duration-300 group-hover:scale-105">
          <Users size={16} />
        </span>

        {/* Counter text */}
        <div className="pr-7">
          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#36e29b]">
            Registered Delegates
          </p>

          <div className="mt-0.5 flex items-end gap-1.5">
            <span className="text-2xl font-black leading-none tabular-nums text-white">
              {loading ? "—" : teamCount}
            </span>

            <span className="pb-0.5 text-[11px] font-bold uppercase text-white/45">
              Delegates
            </span>
          </div>
        </div>

        {/* live circle effect */}
        <div className="absolute right-2.5 top-2.5 h-2.5 w-2.5">
          <span className="absolute h-2.5 w-2.5 inset-0 animate-ping rounded-full bg-[#36e29b] opacity-60" />
          <span className="absolute inset-0 rounded-full bg-[#36e29b]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#36e29b]/0 blur-3xl transition-all duration-500 group-hover:bg-[#36e29b]/30" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-[#36e29b]/0 blur-2xl transition duration-300 group-hover:bg-[#36e29b]/20" />
    </div>
  </div>
);
}