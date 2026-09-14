"use client";

import Image from "next/image";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useId, useRef, type KeyboardEvent } from "react";
import { sports, type Sport } from "@/data/sports";

type SportDetailsProps = {
  sport: Sport | null;
  onClose: () => void;
  onNavigate: (sport: Sport) => void;
};

export default function SportDetails(props: SportDetailsProps) {
  if (!props.sport) return null;

  return <SportDetailsDialog {...props} sport={props.sport} />;
}

function SportDetailsDialog({
  sport,
  onClose,
  onNavigate,
}: SportDetailsProps & { sport: Sport }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  const index = sports.findIndex((item) => item.slug === sport.slug);
  const previousSport = sports[(index - 1 + sports.length) % sports.length];
  const nextSport = sports[(index + 1) % sports.length];

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog?.showModal();
    document.body.style.overflow = "hidden";
    headingRef.current?.focus({ preventScroll: true });

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [sport.slug]);

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (
      event.target instanceof HTMLElement &&
      event.target.closest("input, textarea, select, [contenteditable=true]")
    ) return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      headingRef.current?.focus({ preventScroll: true });
      onNavigate(event.key === "ArrowLeft" ? previousSport : nextSport);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-auto w-[calc(100%-5.5rem)] max-w-6xl overflow-visible bg-transparent p-0 text-white outline-none backdrop:bg-[#071b16]/92 backdrop:backdrop-blur-md sm:w-[calc(100%-8rem)]"
    >
      <div
        ref={panelRef}
        className="relative grid max-h-[94svh] min-w-0 w-full max-w-6xl overflow-x-hidden overflow-y-auto rounded-xl border border-white/15 bg-[#071b16] shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:h-[86vh] lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:overflow-hidden lg:rounded-2xl"
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

        <div ref={contentRef} className="relative min-w-0 overflow-x-hidden p-4 text-white sm:p-6 lg:overflow-y-auto lg:p-8 xl:p-10">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#a9c4b4]/15 blur-[90px]" />

          <div className="relative z-10 min-w-0">
            <p className="min-w-0 break-words pr-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.22em]">
              {sport.category}
            </p>

            <h2 ref={headingRef} id={titleId} tabIndex={-1} className="mt-3 min-w-0 break-words pr-12 text-3xl font-black uppercase leading-none outline-none sm:text-4xl lg:text-5xl">
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
                  Allowed Kits and Footwear
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-white/65 marker:text-[#a9c4b4] sm:text-sm sm:leading-7">
                  {sport.note.map((item, index) => (
                    <li
                      key={`${sport.slug}-note-${index}`}
                      className="break-words pl-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav aria-label="Browse sports">
        <button
          type="button"
          onClick={() => onNavigate(previousSport)}
          aria-label={`Previous sport: ${previousSport.name}`}
          className="absolute -left-11 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center text-white/75 transition-opacity hover:text-white focus-visible:outline-2 focus-visible:outline-[#a9c4b4] sm:-left-16 sm:h-12 sm:w-12"
        >
          <ChevronLeft aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
        </button>
        <button
          type="button"
          onClick={() => onNavigate(nextSport)}
          aria-label={`Next sport: ${nextSport.name}`}
          className="absolute -right-11 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center text-white/75 transition-opacity hover:text-white focus-visible:outline-2 focus-visible:outline-[#a9c4b4] sm:-right-16 sm:h-12 sm:w-12"
        >
          <ChevronRight aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
        </button>
      </nav>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {sport.name}. Sport {index + 1} of {sports.length}.
      </p>
    </dialog>
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
