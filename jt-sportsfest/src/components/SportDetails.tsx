"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
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

        <div className="relative hidden h-[170px] min-w-0 overflow-hidden bg-black/30 sm:h-[220px] lg:block lg:h-full">
          <Image
            src={sport.image || "/images/sports/placeholder.png"}
            alt={sport.name}
            fill
            sizes="(max-width: 1023px) 100vw, 30vw"
            className="object-contain"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b16]/70 via-transparent to-[#071b16]/10" />

          <span className="absolute bottom-3 left-4 text-4xl font-black italic text-white/20 sm:text-5xl lg:bottom-6 lg:left-6 lg:text-6xl">
            {sport.number}
          </span>
        </div>

        <div ref={contentRef} className="relative min-w-0 overflow-x-hidden p-4 text-white sm:p-6 lg:overflow-y-auto lg:p-8 xl:p-10">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#a9c4b4]/15 blur-[90px]" />

          <div className="relative z-10 min-w-0">
            <p className={`min-w-0 break-words pr-12 text-xs font-black uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.22em] ${sport.date.startsWith("September") ? "text-[#C7FFDA]" : "text-[#a9c4b4]"}`}>
              {sport.date}
            </p>

            <h2 ref={headingRef} id={titleId} tabIndex={-1} className="mt-3 min-w-0 break-words pr-12 text-3xl font-black uppercase leading-none outline-none sm:text-4xl lg:text-5xl">
              {sport.name}
            </h2>

            <BulletSection title="Team size" items={sport.teamSize} />
            <BulletSection title="Age groups" items={sport.age} />
            <BulletSection title="Competition format" items={sport.format} />

            <div className="mt-7 min-w-0 sm:mt-8">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-base">
                Event rules
              </h3>

              <ul className="mt-4 min-w-0 space-y-3 sm:mt-5 sm:space-y-4">
                {sport.rules.map((rule, index) => (
                  <li
                    key={`${sport.slug}-rule-${index}`}
                    className="grid min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 text-sm leading-6 text-white/80 sm:grid-cols-[1.75rem_minmax(0,1fr)] sm:gap-x-4 sm:text-[15px] sm:leading-7"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#a9c4b4]/10 text-xs font-black leading-none text-[#a9c4b4] tabular-nums sm:h-7 sm:w-7">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <BulletSection title="Allowed footwear" items={sport.allowedFootwear} />
            {sport.imp_note?.length ? (
              <section className="mt-7 min-w-0 overflow-hidden border-l-2 border-[#a9c4b4] bg-[#a9c4b4]/10 p-4 sm:mt-8 sm:p-5">
                <h3 className="break-words text-sm font-black uppercase tracking-[0.18em] text-[#a9c4b4] sm:text-base">
                  Important note
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-white/80 marker:text-[#a9c4b4] sm:text-[15px] sm:leading-7">
                  {sport.imp_note.map((item, index) => (
                    <li key={`${sport.slug}-important-note-${index}`} className="break-words pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
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

type BulletSectionProps = {
  title: string;
  items?: string[];
};

function BulletSection({ title, items }: BulletSectionProps) {
  if (!items?.length) return null;

  return (
    <section className="mt-7 min-w-0 sm:mt-8">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-base">
        {title}
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-white/80 marker:text-[#a9c4b4] sm:text-[15px] sm:leading-7">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="break-words pl-1">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
