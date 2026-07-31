import Link from "next/link";
import Image from "next/image";

export default function IntegritySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#00633e] px-6 py-12">
        <Image
          src="/images/hero6-sports.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-35"
        />

        {/* Transparent green overlay */}
        <div className="absolute inset-0 z-0 bg-[#00633e]/60" />
        {/* Dark gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#020d20]/70 via-[#00633e]/25 to-[#020d20]/70" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#36e29b]">
            Register Now
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
            JT Sportsfest XIII
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Be a part of LGS JT's Flagship Sports event.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex rounded-lg bg-[#36e29b] px-7 py-4 font-black uppercase tracking-wider text-[#020d20] shadow-lg shadow-[#020d20]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] hover:shadow-xl"
          >
            Register Now
          </Link>
        </div>
      </section>
  );
}