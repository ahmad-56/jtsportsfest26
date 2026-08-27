"use client";

import Image from "next/image";
import {
  CalendarDays,
  Users,
  Trophy,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { sports, type Sport } from "@/data/sports";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterNowSection from "@/components/RegisterNowSection";
import Reveal from "@/components/Reveal";

export default function SportsGrid() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedSport ? "hidden" : "";

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedSport(null);
      }
    }

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selectedSport]);

  return (
    <>
      <Header />
      <section
        id="sports"
        className="relative overflow-hidden bg-[#071b16] pb-20 pt-28 text-white sm:pt-32 md:py-32"
      >
        <Image
          src="/images/hero3-sports.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-25"
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071b16]/65 via-[#071b16]/75 to-[#071b16]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#075c3f]/35 blur-[110px] sm:h-[30rem] sm:w-[30rem]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="w-full">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a9c4b4] sm:text-sm">
                  Participate in up to 3 sports
                </p>

                <h2 className="mt-3 max-w-5xl text-[clamp(1.6rem,6.5vw,3.2rem)] font-black uppercase leading-[1] sm:text-[clamp(1.8rem,6vw,3.8rem)] md:text-[clamp(2.6rem,4.5vw,4.8rem)] lg:text-[clamp(3.5rem,3.2vw,6rem)]">
                  Sports & categories

                  <span className="block text-[clamp(1.05rem,3.5vw,1.4rem)] text-[#a9c4b4]">
                    JT SportsFest XIII
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>
          
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-4">
      
            {sports.map((sport) => (
              <Reveal key={sport.slug}>
                <button
                  type="button"
                  onClick={() => setSelectedSport(sport)}
                  aria-label={`View ${sport.name} event details`}
                  className="sports-preview-card group relative aspect-square w-full cursor-pointer overflow-hidden border-[3px] border-[#a9c4b4] bg-[#071b16] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c4b4] sm:border-4"
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
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/60 sm:text-[10px] lg:text-xs">
                      View event details
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
            {/* final panel */}
            <Reveal>
              <div className="sports-preview-card group relative aspect-square w-full cursor-default overflow-hidden border-[3px] border-[#a9c4b4] bg-[#071b16] text-left sm:border-4">
                <Image
                  src="/images/hero-sports.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 639px) calc(100vw - 7rem), 340px"
                  className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/80 via-[#071b16]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4">
                  <p className="truncate text-[8px] font-black uppercase tracking-wide text-[#a9c4b4] sm:text-xs">
                    LGS JT
                  </p>
                  <h3 className="mt-0.5 truncate text-[10px] font-black uppercase text-white sm:mt-1 sm:text-lg">
                    SportsFest XIII
                  </h3>
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/60 sm:text-[10px] lg:text-xs">
                    25–27 Sep & 2–4 Oct
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {selectedSport && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedSport.name} details`}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden bg-[#071b16]/92 p-2 backdrop-blur-md sm:p-4 lg:p-6"
          onClick={() => setSelectedSport(null)}
        >
          <div
            className="relative grid max-h-[94svh] min-w-0 w-full max-w-6xl overflow-x-hidden overflow-y-auto rounded-xl border border-white/15 bg-[#071b16] shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:h-[86vh] lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:overflow-hidden lg:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSport(null)}
              aria-label="Close sport details"
              className="absolute right-3 top-3 z-30 grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-[#a9c4b4] text-[#071b16] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10 lg:right-8 lg:top-8 xl:right-10 xl:top-10"
            >
              <X
                size={20}
                strokeWidth={2.5}
                className="block"
              />
            </button>

            <div className="relative h-[170px] min-w-0 overflow-hidden bg-black/30 sm:h-[220px] lg:h-full">
              <Image
                src={
                  selectedSport.image ||
                  "/images/sports/placeholder.png"
                }
                alt={selectedSport.name}
                fill
                sizes="(max-width: 1023px) 100vw, 30vw"
                className="object-contain"
                priority
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b16]/70 via-transparent to-[#071b16]/10" />

              <span className="absolute bottom-3 left-4 text-5xl font-black italic text-white/20 sm:text-6xl lg:bottom-6 lg:left-6 lg:text-7xl">
                {selectedSport.number}
              </span>
            </div>

            <div className="relative min-w-0 overflow-x-hidden p-4 text-white sm:p-6 lg:overflow-y-auto lg:p-8 xl:p-10">
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#a9c4b4]/15 blur-[90px]" />

              <div className="relative z-10 min-w-0">
                <p className="min-w-0 break-words pr-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.22em]">
                  {selectedSport.category}
                </p>

                <h2 className="mt-3 min-w-0 break-words pr-12 text-3xl font-black uppercase leading-none sm:text-4xl lg:text-5xl">
                  {selectedSport.name}
                </h2>

                <div className="mt-5 grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
                  <DetailItem
                    icon={Users}
                    label="Team size"
                    value={selectedSport.teamSize}
                  />

                  <DetailItem
                    icon={CalendarDays}
                    label="Category date"
                    value={selectedSport.date}
                  />

                  <DetailItem
                    icon={Users}
                    label="Age groups"
                    value={selectedSport.age}
                  />

                  <DetailItem
                    icon={Trophy}
                    label="Competition format"
                    value={selectedSport.format}
                  />
                </div>

                <div className="mt-6 min-w-0 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-sm">
                    Event rules
                  </h3>

                  <ul className="mt-4 min-w-0 space-y-3 sm:mt-5 sm:space-y-4">
                    {selectedSport.rules.map((rule, index) => (
                      <li
                        key={`${selectedSport.slug}-rule-${index}`}
                        className="flex min-w-0 gap-3 text-xs leading-6 text-white/65 sm:gap-4 sm:text-sm sm:leading-7"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#a9c4b4]/10 text-[10px] font-black text-[#a9c4b4] sm:h-7 sm:w-7 sm:text-xs">
                          {index + 1}
                        </span>

                        <span className="min-w-0 break-words">
                          {rule}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedSport.note && (
                  <div className="mt-6 min-w-0 overflow-hidden border-l-2 border-[#a9c4b4] bg-[#a9c4b4]/10 p-4 sm:mt-8 sm:p-5">
                    <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#a9c4b4] sm:text-xs">
                      Important note
                    </p>

                    <p className="mt-2 break-words text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                      {selectedSport.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <RegisterNowSection />
      <Footer />
    </>
  );
}

type DetailItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function DetailItem({
  icon: Icon,
  label,
  value,
}: DetailItemProps) {
  return (
    <div className="min-w-0 overflow-hidden border border-white/10 bg-white/[0.035] p-3 sm:p-4">
      <Icon
        size={18}
        className="text-[#a9c4b4]"
      />

      <p className="mt-3 min-w-0 break-words text-[9px] font-black uppercase tracking-[0.12em] text-white/35 sm:mt-4 sm:text-[10px] sm:tracking-[0.18em]">
        {label}
      </p>

      <p className="mt-2 min-w-0 break-words text-xs font-bold text-white/80 sm:text-sm">
        {value}
      </p>
    </div>
  );
}
