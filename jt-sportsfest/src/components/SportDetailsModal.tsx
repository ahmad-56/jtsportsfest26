"use client";

import Image from "next/image";
import {
  CalendarDays,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect } from "react";
import type { Sport } from "@/data/sports";

type SportDetailsModalProps = {
  sport: Sport | null;
  onClose: () => void;
};

export default function SportDetailsModal({
  sport,
  onClose,
}: SportDetailsModalProps) {
  useEffect(() => {
    if (!sport) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [sport, onClose]);

  if (!sport) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${sport.name} details`}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden bg-[#071b16]/92 p-2 backdrop-blur-md sm:p-4 lg:p-6"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[94svh] min-w-0 w-full max-w-6xl overflow-x-hidden overflow-y-auto rounded-xl border border-white/15 bg-[#071b16] shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:h-[86vh] lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:overflow-hidden lg:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sport details"
          className="absolute right-3 top-3 z-30 grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-[#a9c4b4] text-[#071b16] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10 lg:right-8 lg:top-8 xl:right-10 xl:top-10"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="relative h-[170px] min-w-0 overflow-hidden bg-black/30 sm:h-[220px] lg:h-full">
          <Image
            src={sport.image || "/images/sports/placeholder.png"}
            alt={sport.name}
            fill
            sizes="(max-width: 1023px) 100vw, 30vw"
            className="object-contain"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b16]/70 via-transparent to-[#071b16]/10" />

          <span className="absolute bottom-3 left-4 text-5xl font-black italic text-white/20 sm:text-6xl lg:bottom-6 lg:left-6 lg:text-7xl">
            {sport.number}
          </span>
        </div>

        <div className="relative min-w-0 overflow-x-hidden p-4 text-white sm:p-6 lg:overflow-y-auto lg:p-8 xl:p-10">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#a9c4b4]/15 blur-[90px]" />

          <div className="relative z-10 min-w-0">
            <p className="min-w-0 break-words pr-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.22em]">
              {sport.category}
            </p>

            <h2 className="mt-3 min-w-0 break-words pr-12 text-3xl font-black uppercase leading-none sm:text-4xl lg:text-5xl">
              {sport.name}
            </h2>

            <div className="mt-5 grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
              <DetailItem icon={Users} label="Team size" value={sport.teamSize} />
              <DetailItem icon={CalendarDays} label="Category date" value={sport.date} />
              <DetailItem icon={Users} label="Age groups" value={sport.age} />
              <DetailItem icon={Trophy} label="Competition format" value={sport.format} />
            </div>

            <div className="mt-6 min-w-0 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-sm">
                Event rules
              </h3>

              <ul className="mt-4 min-w-0 space-y-3 sm:mt-5 sm:space-y-4">
                {sport.rules.map((rule, index) => (
                  <li
                    key={`${sport.slug}-rule-${index}`}
                    className="flex min-w-0 gap-3 text-xs leading-6 text-white/65 sm:gap-4 sm:text-sm sm:leading-7"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#a9c4b4]/10 text-[10px] font-black text-[#a9c4b4] sm:h-7 sm:w-7 sm:text-xs">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {sport.note && (
              <div className="mt-6 min-w-0 overflow-hidden border-l-2 border-[#a9c4b4] bg-[#a9c4b4]/10 p-4 sm:mt-8 sm:p-5">
                <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#a9c4b4] sm:text-xs">
                  Important note
                </p>
                <p className="mt-2 break-words text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                  {sport.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type DetailItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function DetailItem({ icon: Icon, label, value }: DetailItemProps) {
  return (
    <div className="min-w-0 overflow-hidden border border-white/10 bg-white/[0.035] p-3 sm:p-4">
      <Icon size={18} className="text-[#a9c4b4]" />
      <p className="mt-3 min-w-0 break-words text-[9px] font-black uppercase tracking-[0.12em] text-white/35 sm:mt-4 sm:text-[10px] sm:tracking-[0.18em]">
        {label}
      </p>
      <p className="mt-2 min-w-0 break-words text-xs font-bold text-white/80 sm:text-sm">
        {value}
      </p>
    </div>
  );
}
