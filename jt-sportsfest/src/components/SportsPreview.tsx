"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SportDetailsModal from "@/components/SportDetailsModal";
import TextButton from "@/components/TextButton";
import { sports, type Sport } from "@/data/sports";

type SlideDirection = -1 | 1;

export default function SportsPreview() {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] =
    useState<SlideDirection | null>(null);
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  const firstOffset = slideDirection === -1 ? -1 : 0;
  const itemCount = slideDirection === null ? 3 : 4;
  const trackSports = Array.from(
    { length: Math.min(itemCount, sports.length) },
    (_, position) =>
      sports[
        (startIndex + firstOffset + position + sports.length) %
          sports.length
      ],
  );

  function moveCarousel(nextDirection: -1 | 1) {
    if (slideDirection !== null || sports.length <= 3) return;

    setSlideDirection(nextDirection);
  }

  function finishSlide() {
    if (slideDirection === null) return;

    setStartIndex(
      (current) =>
        (current + slideDirection + sports.length) % sports.length,
    );
    setSlideDirection(null);
  }

  return (
    <>
      <section
        id="sports-preview"
        className="relative overflow-hidden border-y border-[#a9c4b4]/30 bg-[#071b16] py-10 text-white shadow-[inset_0_1px_18px_rgba(169,196,180,0.08)]"
      >
        <Image
          src="/images/hero9-sports.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-[#000000]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.32),transparent_58%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-14 sm:px-20">
          <h2 className="text-center text-3xl font-black uppercase md:text-5xl">
            Our <span className="text-[#a9c4b4]">Sports</span>
          </h2>

          <div className="relative mx-auto mt-8 max-w-[1080px]">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              disabled={slideDirection !== null}
              aria-label="Show previous sports"
              aria-disabled={slideDirection !== null}
              className="absolute -left-11 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-white/75 outline-none transition-opacity focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-30 sm:-left-16"
            >
              <ChevronLeft aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
            </button>

            <div className="overflow-hidden py-1">
              <div
                onAnimationEnd={finishSlide}
                className={`sports-preview-track ${
                  slideDirection === 1
                    ? "sports-preview-track-next"
                    : slideDirection === -1
                      ? "sports-preview-track-previous"
                      : ""
                }`}
              >
                  {trackSports.map((sport) => (
                    <button
                      key={sport.slug}
                      type="button"
                      onClick={() => setSelectedSport(sport)}
                      aria-label={`View ${sport.name} event details`}
                      className="sports-preview-card group relative aspect-square cursor-pointer overflow-hidden border-[3px] border-[#a9c4b4] bg-[#071b16] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c4b4] sm:border-4"
                    >
                      <Image
                        src={sport.image}
                        alt={sport.name}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 7rem), 340px"
                        className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/80 via-[#071b16]/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4">
                        <p className="truncate text-[8px] font-black uppercase tracking-wide text-[#a9c4b4] sm:text-xs">
                          {sport.category}
                        </p>
                        <h3 className="mt-0.5 truncate text-[10px] font-black uppercase text-white sm:mt-1 sm:text-lg">
                          {sport.name}
                        </h3>
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              disabled={slideDirection !== null}
              aria-label="Show next sports"
              aria-disabled={slideDirection !== null}
              className="absolute -right-11 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-white/75 outline-none transition-opacity focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-30 sm:-right-16"
            >
              <ChevronRight aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <TextButton href="/sports">View All Sports</TextButton>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />
      </section>

      <SportDetailsModal
        sport={selectedSport}
        onClose={() => setSelectedSport(null)}
      />
    </>
  );
}
