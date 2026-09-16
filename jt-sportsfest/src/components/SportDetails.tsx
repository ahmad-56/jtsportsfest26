"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { sports, type Sport, type SportSectionContent } from "@/data/sports";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const imageSrc = sport.image && failedImage !== sport.image
    ? sport.image
    : "/images/bg/hero-sports.jpg";
  const titleId = useId();
  const index = sports.findIndex((item) => item.slug === sport.slug);
  const previousSport = sports[(index - 1 + sports.length) % sports.length];
  const nextSport = sports[(index + 1) % sports.length];

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;

    dialog?.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    headingRef.current?.focus({ preventScroll: true });

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
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

  const ruleItems: Array<{ heading: string } | { text: string; number: number }> = [];
  let ruleNumber = 0;

  for (const rule of sport.rules) {
    if (typeof rule === "string") {
      ruleNumber += 1;
      ruleItems.push({ text: rule, number: ruleNumber });
    } else {
      ruleItems.push(rule);
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
      className="fixed inset-0 m-auto max-h-none w-[calc(100%-5.5rem)] max-w-6xl overflow-visible bg-transparent p-0 text-white outline-none backdrop:bg-[#071b16]/92 backdrop:backdrop-blur-md sm:w-[calc(100%-8rem)]"
    >
      <div
        className="relative grid max-h-[calc(100dvh-2rem)] min-w-0 w-full max-w-6xl grid-rows-[minmax(0,1fr)] overflow-hidden rounded-xl border border-white/15 bg-[#071b16] shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:flex lg:h-[min(86dvh,calc((100vw_-_8rem)*8/15),38.4rem)] lg:rounded-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sport details"
          className="absolute right-3 top-3 z-30 grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-[#a9c4b4] text-[#071b16] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10 lg:right-8 lg:top-8 xl:right-10 xl:top-10"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="relative hidden min-h-0 min-w-0 overflow-hidden bg-black/30 lg:block lg:aspect-[3/4] lg:h-full lg:w-auto lg:shrink-0">
          <Image
            src={imageSrc}
            alt={sport.name}
            fill
            sizes="(max-width: 1023px) 1px, min(calc(40vw - 3.2rem), 64.5dvh, 460px)"
            className="object-contain"
            onError={() => setFailedImage(sport.image)}
            priority
          />
        </div>

        <div ref={contentRef} className="relative min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain p-4 text-white sm:p-6 lg:flex-1 lg:p-8 xl:p-10">
          <div className="relative z-10 min-w-0">
            <p className={`min-w-0 break-words pr-12 text-xs font-black uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.22em] ${sport.date.startsWith("September") ? "text-[#C7FFDA]" : "text-[#a9c4b4]"}`}>
              {sport.date}
            </p>

            <h2 ref={headingRef} id={titleId} tabIndex={-1} className="mt-3 min-w-0 break-words pr-12 text-3xl font-black uppercase leading-none outline-none sm:text-4xl lg:text-5xl">
              {sport.name}
            </h2>

            <BulletSection title="Team size" items={sport.teamSize} />
            <DetailSection title="Age groups" content={sport.age} />
            <DetailSection title="Competition format" content={sport.format} />

            <div className="mt-7 min-w-0 sm:mt-8">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-base">
                Event rules
              </h3>

              <ul className="mt-4 min-w-0 space-y-3 sm:mt-5 sm:space-y-4">
                {ruleItems.map((rule, index) => {
                  if ("heading" in rule) {
                    return (
                      <li key={`${sport.slug}-heading-${index}`} className="min-w-0 pt-3 first:pt-0 sm:pt-4">
                        <h4 className="break-words text-sm font-bold leading-6 text-[#a9c4b4] sm:text-[15px] sm:leading-7">
                          {rule.heading}
                        </h4>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={`${sport.slug}-rule-${index}`}
                      className="grid min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 text-sm leading-6 text-white/80 sm:grid-cols-[1.75rem_minmax(0,1fr)] sm:gap-x-4 sm:text-[15px] sm:leading-7"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#a9c4b4]/10 text-xs font-black leading-none text-[#a9c4b4] tabular-nums sm:h-7 sm:w-7">
                        {rule.number}
                      </span>
                      <span className="min-w-0 break-words">{rule.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <BulletSection title="Allowed footwear & kits" items={sport.allowedFootwear} />
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

function DetailSection({ title, content }: { title: string; content: SportSectionContent }) {
  if (Array.isArray(content)) {
    return <BulletSection title={title} items={content} />;
  }

  const columns = content.columns.filter((column) => column.items.length > 0);
  if (!columns.length) return null;

  return (
    <section className="mt-7 min-w-0 sm:mt-8">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-base">
        {title}
      </h3>
      <div className="mt-3 grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {columns.map((column) => (
          <div key={column.heading} className="min-w-0">
            <h4 className="text-sm font-bold leading-6 text-[#a9c4b4] sm:text-[15px] sm:leading-7">
              {column.heading}
            </h4>
            <BulletList items={column.items} />
          </div>
        ))}
      </div>
    </section>
  );
}

function BulletSection({ title, items }: BulletSectionProps) {
  if (!items?.length) return null;

  return (
    <section className="mt-7 min-w-0 sm:mt-8">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-base">
        {title}
      </h3>
      <BulletList items={items} />
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-white/80 marker:text-[#a9c4b4] sm:text-[15px] sm:leading-7">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="break-words pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
