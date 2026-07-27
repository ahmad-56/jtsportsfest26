"use client";

import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

import { sports, type Sport } from "@/data/sports";
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
      <section
        id="sports"
        className="relative overflow-hidden bg-[#f3f4ef] py-24 text-[#020d20] md:py-32"
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
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-bold uppercase tracking-[0.22em] text-[#00633e]">
                  Participate in upto 3 sports
                </p>

                <h2 className="mt-3 max-w-5xl text-6xl font-black uppercase leading-[1.0] md:text-10xl">
                  sports & categories
                  <span className="block text-[#00633e]">
                    JT Sportsfest XIII
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport) => (
              <Reveal key={sport.slug}>
                <button
                  type="button"
                  onClick={() => setSelectedSport(sport)}
                  className="group relative flex min-h-72 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#020d20] p-7 text-left text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#36e29b] hover:shadow-[0_0_0_1px_rgba(54,226,155,0.25),0_25px_60px_rgba(0,99,62,0.35)]"
                >
                  {/* Sport image */}
                  <Image
                    src={sport.image || "/images/sports/placeholder.jpg"}
                    alt={sport.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-35"
                  />

                  {/* Dark image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020d20] via-[#020d20]/45 to-[#020d20]/15" />

                  {/* Green hover overlay */}
                  <div className="absolute inset-0 bg-[#00633e]/0 transition-colors duration-500 group-hover:bg-[#00633e]/15" />

                  {/* Card number */}
                  <span className="relative z-10 text-4xl font-black italic text-white/20 transition duration-500 group-hover:text-[#36e29b]/50">
                    {sport.number}
                  </span>

                  <div className="relative z-10">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#36e29b]">
                      {sport.category}
                    </p>

                    <h3 className="text-3xl font-black uppercase leading-none">
                      {sport.name}
                    </h3>

                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white/45 transition group-hover:text-white/70">
                      View event details
                    </p>
                  </div>

                  {/* Glowing hover circle */}
                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#36e29b]/0 blur-3xl transition-all duration-500 group-hover:bg-[#36e29b]/30" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedSport && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedSport.name} details`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020d20]/90 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedSport(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-white/15 bg-[#020d20] shadow-[0_30px_100px_rgba(0,0,0,0.65)] lg:grid-cols-[0.9fr_1.1fr]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedSport(null)}
              aria-label="Close sport details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center bg-[#36e29b] text-[#020d20] transition hover:scale-105 hover:bg-white"
            >
              <X size={22} />
            </button>

            {/* Modal image */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[650px]">
              <Image
                src={
                  selectedSport.image ||
                  "/images/sports/placeholder.jpg"
                }
                alt={selectedSport.name}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020d20] via-transparent to-[#020d20]/20" />

              <span className="absolute bottom-6 left-6 text-8xl font-black italic text-white/20">
                {selectedSport.number}
              </span>
            </div>

            {/* Modal information */}
            <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#36e29b]/15 blur-[90px]" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#36e29b]">
                  {selectedSport.category}
                </p>

                <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
                  {selectedSport.name}
                </h2>

                <p className="mt-6 leading-8 text-white/65">
                  {selectedSport.description}
                </p>

                {/* Quick details */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <DetailItem
                    icon={Users}
                    label="Team size"
                    value={selectedSport.teamSize}
                  />

                  <DetailItem
                    icon={CalendarDays}
                    label="Event date"
                    value={selectedSport.date}
                  />

                  <DetailItem
                    icon={MapPin}
                    label="Venue"
                    value={selectedSport.venue}
                  />

                  <DetailItem
                    icon={Users}
                    label="Categories"
                    value={selectedSport.eligibility}
                  />
                </div>

                {/* Rules */}
                <div className="mt-9 border-t border-white/10 pt-8">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#36e29b]">
                    Event rules
                  </h3>

                  <ul className="mt-5 space-y-4">
                    {selectedSport.rules.map((rule, index) => (
                      <li
                        key={rule}
                        className="flex gap-4 text-sm leading-7 text-white/65"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#36e29b]/10 text-xs font-black text-[#36e29b]">
                          {index + 1}
                        </span>

                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedSport.note && (
                  <div className="mt-8 border-l-2 border-[#36e29b] bg-[#36e29b]/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#36e29b]">
                      Important note
                    </p>

                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {selectedSport.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type DetailItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function DetailItem({ icon: Icon, label, value }: DetailItemProps) {
  return (
    <div className="border border-white/10 bg-white/[0.035] p-4">
      <Icon size={18} className="text-[#36e29b]" />

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold text-white/80">
        {value}
      </p>
    </div>
  );
}