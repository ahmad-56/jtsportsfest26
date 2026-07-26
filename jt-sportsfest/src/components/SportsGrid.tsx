import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sports } from "@/data/sports";
import Reveal from "@/components/Reveal";

export default function SportsGrid() {
  return (
    <section
      id="sports"
      className="relative overflow-hidden bg-[#f3f4ef] py-24 text-[#020d20] md:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
                Choose your arena
              </p>

              <h2 className="mt-4 max-w-4xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                Twenty sports.
                <span className="block text-[#00633e]">
                  One arena.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#020d20]/60">
              Compete across team sports, racquet events, athletics,
              strength challenges, precision sports and esports.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport) => (
            <Reveal key={sport.slug}>
              <Link
                href={`/sports/${sport.slug}`}
                className="group relative flex min-h-64 flex-col justify-between overflow-hidden border border-[#020d20]/10 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#00633e] hover:bg-[#00633e] hover:text-white hover:shadow-[0_25px_60px_rgba(0,99,62,0.22)]"
              >
                {/* Card number */}
                <span className="text-6xl font-black italic text-[#020d20]/10 transition duration-500 group-hover:text-white/15">
                  {sport.number}
                </span>

                {/* Arrow */}
                <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-[#020d20]/10 transition duration-300 group-hover:border-white/25 group-hover:bg-[#36e29b] group-hover:text-[#020d20]">
                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>

                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#00633e] transition group-hover:text-[#36e29b]">
                    {sport.category}
                  </p>

                  <h3 className="text-3xl font-black uppercase leading-none">
                    {sport.name}
                  </h3>
                </div>

                {/* Hover decoration */}
                <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-[#36e29b]/0 blur-3xl transition duration-500 group-hover:bg-[#36e29b]/20" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}