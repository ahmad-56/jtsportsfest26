"use client";

import Image from "next/image";
import { useState } from "react";
import { sports, type Sport } from "@/data/sports";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterNowSection from "@/components/RegisterNowSection";
import Reveal from "@/components/Reveal";
import SportDetails from "@/components/SportDetails";

export default function SportsGrid() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  return (
    <>
      <Header />
      <section
        id="sports"
        className="relative overflow-hidden bg-[#071b16] pb-20 pt-28 text-white sm:pt-32 md:py-32"
      >
        <Image
          src="/images/bg/hero3-sports.jpg"
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
                    <p className={`truncate text-[8px] font-black uppercase tracking-wide ${sport.date.startsWith("September") ? "text-[#C7FFDA]" : "text-[#a9c4b4]"} sm:text-xs`}>
                      {sport.date}
                    </p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/60 sm:text-[10px] lg:text-xs">
                      View event details
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
            {/* final panel */}
            <Reveal className="lg:col-span-3 lg:[container-type:inline-size]">
                <div className="sports-preview-card group relative aspect-square w-full cursor-default overflow-hidden border-[3px] border-[#a9c4b4] bg-[#071b16] text-left sm:border-4 lg:h-[calc((100cqw_-_2rem)/3)] lg:aspect-auto">
                  <Image
                    src="/images/bg/hero9-sports.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 639px) calc(100vw - 7rem), 310px"
                    className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                  />

                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.32),transparent_58%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b16]/80 via-[#071b16]/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center sm:p-4 lg:p-6">
                    <p className="truncate text-[10px] font-black uppercase tracking-wide text-[#a9c4b4] lg:text-lg lg:tracking-[0.2em]">
                      LGS JT
                    </p>
                    <h3 className="mt-1 truncate text-base font-black uppercase text-white sm:text-xl lg:mt-3 lg:text-5xl lg:leading-none">
                      SportsFest XIII
                    </h3>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-white/70 sm:text-xs lg:mt-4 lg:text-xl">
                      25–27 Sep & 2–4 Oct
                    </p>
                  </div>
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SportDetails
        sport={selectedSport}
        onClose={() => setSelectedSport(null)}
        onNavigate={setSelectedSport}
      />
      <RegisterNowSection />
      <Footer />
    </>
  );
}
