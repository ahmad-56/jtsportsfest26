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
import TeamCounter from "@/components/Counter";
import RegisterNowSection from "@/components/RegisterNowSection";
import Reveal from "@/components/Reveal";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Sports", href: "/sports" },
  { label: "Contact", href: "/#contact" },
];

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
        className="relative overflow-hidden bg-[#f3f4ef] pb-20 pt-28 text-[#020d20] sm:pt-32 md:py-32"
      >
        <Image
          src="/images/hero3-sports.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-50"
        />

        <div className="absolute inset-0 z-0 bg-[#f3f4ef]/40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#020d20 1px, transparent 1px), linear-gradient(90deg, #020d20 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="w-full">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00633e] sm:text-sm">
                  Participate in up to 3 sports
                </p>

                <h2 className="mt-3 max-w-5xl text-[clamp(1.6rem,6.5vw,3.2rem)] font-black uppercase leading-[1] sm:text-[clamp(1.8rem,6vw,3.8rem)] md:text-[clamp(2.6rem,4.5vw,4.8rem)] lg:text-[clamp(3.5rem,3.2vw,6rem)]">
                  Sports & categories

                  <span className="block text-[clamp(1.05rem,3.5vw,1.4rem)] text-[#00633e]">
                    JT SportsFest XIII
                  </span>
                </h2>
              </div>

              <div className="hidden shrink-0 lg:block lg:self-end lg:pb-1">
                <TeamCounter initialCount={0} />
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-4">
            {sports.map((sport) => (
              <Reveal key={sport.slug}>
                <button
                  type="button"
                  onClick={() => setSelectedSport(sport)}
                  className="group relative flex min-h-[145px] w-full transform-gpu cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-white/15 bg-[#020d20] p-3 text-left text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.25 hover:border-[#36e29b]/60 hover:shadow-[0_18px_40px_rgba(0,99,62,0.25)] active:translate-y-0 sm:min-h-[190px] sm:p-4 lg:min-h-72 lg:rounded-2xl lg:p-7 lg:hover:-translate-y-2"
                >
                  {/* Sport image */}
                  <Image
                    src={sport.image || "/images/sports/placeholder.jpg"}
                    alt={sport.name}
                    fill
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="scale-90 object-cover opacity-80 transition duration-700 group-hover:scale-95 group-hover:opacity-35"
                  />
                  {/*black overlay*/}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020d20] via-[#020d20]/25 to-[#020d20]/15" />

                  {/*hover*/}
                  <div className="absolute inset-0 bg-[#00633e]/0 transition-colors duration-500 group-hover:bg-[#00633e]/15" />

                  {/*Card number*/}
                  <span className="relative z-10 text-2xl font-black italic text-white/20 transition duration-500 group-hover:text-[#36e29b]/50 sm:text-3xl lg:text-4xl">
                    {sport.number}
                  </span>

                  <div className="relative z-10 min-w-0">
                    <p className="mb-1 text-[8px] font-black uppercase tracking-[0.1em] text-[#36e29b] sm:text-[10px] sm:tracking-[0.14em] lg:mb-2 lg:text-xs lg:tracking-[0.18em]">
                      {sport.category}
                    </p>

                    <h3 className="break-words text-base font-black uppercase leading-[0.95] sm:text-xl lg:text-3xl lg:leading-none">
                      {sport.name}
                    </h3>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/45 transition group-hover:text-white/70 sm:text-[10px] lg:mt-2 lg:text-xs lg:tracking-wider">
                      View event details
                    </p>
                  </div>

                  {/* Glowing hover circle */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#36e29b]/0 blur-2xl transition-all duration-500 group-hover:bg-[#36e29b]/30 lg:-bottom-16 lg:-right-16 lg:h-40 lg:w-40 lg:blur-3xl" />
                </button>
              </Reveal>
            ))}
            {/* final panel */}
            <Reveal>
              <div className="group relative flex min-h-[145px] w-full cursor-default flex-col justify-end overflow-hidden rounded-xl border border-white/15 bg-[#020d20] p-3 text-left text-white shadow-lg sm:min-h-[190px] sm:p-4 lg:min-h-72 lg:rounded-2xl lg:p-7">
                <Image
                  src="/images/hero-sports.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020d20] via-[#020d20]/65 to-[#020d20]/20" />

                <div className="absolute inset-0 bg-[#00633e]/0 transition-colors duration-500 group-hover:bg-[#00633e]/15" />

                <div className="relative z-10 min-w-0">
                  <p className="mb-1 text-[8px] font-black uppercase tracking-[0.1em] text-[#36e29b] sm:text-[10px] lg:mb-2 lg:text-xs lg:tracking-[0.18em]">
                    LGS JT
                  </p>

                  <h3 className="break-words text-base font-black uppercase leading-[0.95] sm:text-xl lg:text-3xl lg:leading-none">
                    SportsFest XIII
                  </h3>

                  <p className="mt-1.5 text-[9px] leading-4 text-white/60 sm:text-xs lg:mt-3 lg:text-sm lg:leading-6">
                    25–27 Sep & 2–4 Oct
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#36e29b]/0 blur-3xl transition-all duration-500 group-hover:bg-[#36e29b]/30" />
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden bg-[#020d20]/92 p-2 backdrop-blur-md sm:p-4 lg:p-6"
          onClick={() => setSelectedSport(null)}
        >
          <div
            className="relative grid max-h-[94svh] min-w-0 w-full max-w-6xl overflow-x-hidden overflow-y-auto rounded-xl border border-white/15 bg-[#020d20] shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:h-[86vh] lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:overflow-hidden lg:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSport(null)}
              aria-label="Close sport details"
              className="absolute right-3 top-3 z-30 grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-[#36e29b] text-[#020d20] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10 lg:right-8 lg:top-8 xl:right-10 xl:top-10"
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

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020d20]/70 via-transparent to-[#020d20]/10" />

              <span className="absolute bottom-3 left-4 text-5xl font-black italic text-white/20 sm:text-6xl lg:bottom-6 lg:left-6 lg:text-7xl">
                {selectedSport.number}
              </span>
            </div>

            <div className="relative min-w-0 overflow-x-hidden p-4 text-white sm:p-6 lg:overflow-y-auto lg:p-8 xl:p-10">
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#36e29b]/15 blur-[90px]" />

              <div className="relative z-10 min-w-0">
                <p className="min-w-0 break-words pr-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#36e29b] sm:text-xs sm:tracking-[0.22em]">
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
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#36e29b] sm:text-sm">
                    Event rules
                  </h3>

                  <ul className="mt-4 min-w-0 space-y-3 sm:mt-5 sm:space-y-4">
                    {selectedSport.rules.map((rule, index) => (
                      <li
                        key={`${selectedSport.slug}-rule-${index}`}
                        className="flex min-w-0 gap-3 text-xs leading-6 text-white/65 sm:gap-4 sm:text-sm sm:leading-7"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#36e29b]/10 text-[10px] font-black text-[#36e29b] sm:h-7 sm:w-7 sm:text-xs">
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
                  <div className="mt-6 min-w-0 overflow-hidden border-l-2 border-[#36e29b] bg-[#36e29b]/10 p-4 sm:mt-8 sm:p-5">
                    <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#36e29b] sm:text-xs">
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
        className="text-[#36e29b]"
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