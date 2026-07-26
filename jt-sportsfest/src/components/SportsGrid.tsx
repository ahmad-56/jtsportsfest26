import Image from "next/image";
import Link from "next/link";
import { sports } from "../data/sports";

export default function SportsGrid() {
  return (
    <section className="bg-[#f3f4ef] py-28 text-[#020d20]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-bold uppercase tracking-[0.2em] text-[#00633e]">
          Choose your arena
        </p>

        <h2 className="mt-4 text-6xl font-black uppercase md:text-8xl">
          Compete your way.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              href={`/sports/${sport.slug}`}
              className="group relative min-h-96 overflow-hidden bg-[#020d20]"
            >
              <Image
                src={sport.image}
                alt={sport.name}
                fill
                className="object-cover opacity-60 transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020d20] to-transparent" />

              <div className="absolute bottom-0 p-7 text-white">
                <span className="text-xs uppercase tracking-widest text-[#36e29b]">
                  {sport.category}
                </span>

                <h3 className="mt-2 text-4xl font-black uppercase">
                  {sport.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}