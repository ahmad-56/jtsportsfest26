import Image from "next/image";
import Link from "next/link";

export default function IntegritySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#00633e] px-4 py-10 text-white sm:px-6 sm:py-12">
      <Image
        src="/images/hero6-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-35"
      />

      <div className="absolute inset-0 z-0 bg-[#00633e]/60" />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#020d20]/70 via-[#00633e]/25 to-[#020d20]/70" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#36e29b] sm:text-xs sm:tracking-[0.25em]">
          Respect the game
        </p>

        <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
          Compete with integrity
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/70 sm:mt-5 sm:text-base sm:leading-7">
          Every participant is expected to respect the venue, management,
          officials and fellow competitors throughout JT SportsFest XIII.
        </p>

        <Link
          href="/sports"
          className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#36e29b] px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-[#020d20] shadow-lg shadow-[#020d20]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] hover:shadow-xl sm:mt-8 sm:min-h-14 sm:px-7 sm:py-4 sm:text-base"
        >
          Explore Sports
        </Link>
      </div>
    </section>
  );
}