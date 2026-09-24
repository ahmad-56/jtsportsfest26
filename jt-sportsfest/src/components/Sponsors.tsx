import Image from "next/image";

const sponsors = [
  {
    name: "Afzal Electronics",
    logo: "/images/sponsors/afzal-electronics.png",
  },
  {
    name: "Fareed Metals",
    logo: "/images/sponsors/fareed-metals.png",
  },
  {
    name: "Gourmet",
    logo: "/images/sponsors/gourmet.png",
  },
  {
    name: "Kunhar",
    logo: "/images/sponsors/kunhar.png",
  },
  {
    name: "Midea",
    logo: "/images/sponsors/midea.png",
  },
  {
    name: "Print Master",
    logo: "/images/sponsors/print-masters.png",
  },
  {
    name: "Sufi",
    logo: "/images/sponsors/sufi.png",
  },
  {
    name: "Tifal",
    logo: "/images/sponsors/tifal.png",
  },
  {
    name: "Vital",
    logo: "/images/sponsors/vital.png",
  },
];

export default function Sponsors() {
  const slidingSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden border-y-2 border-[#a9c4b4]/50 bg-[#071b16] py-10 text-white shadow-[inset_0_1px_18px_rgba(169,196,180,0.08)]"
    >
      <Image
        src="/images/bg/hero5-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover object-center opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#000000]/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.32),transparent_60%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-black uppercase md:text-5xl">
          Our <span className="text-[#a9c4b4]">Sponsors</span>
        </h2>
      </div>

      <div className="sponsor-slider group mt-8 py-3">
        <div className="sponsor-track">
          {slidingSponsors.map((sponsor, index) => (
            <Image
              key={`${sponsor.name}-${index}`}
              src={sponsor.logo}
              alt={sponsor.name}
              width={300}
              height={300}
              className="h-20 w-44 object-contain transition-transform delay-200 duration-500 ease-out hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />
    </section>
  );
}
