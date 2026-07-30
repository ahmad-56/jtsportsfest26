import Image from "next/image";

const sponsors = [
  {
    name: "Sponsor One",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
  {
    name: "Sponsor Two",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
  {
    name: "Sponsor Three",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
  {
    name: "Sponsor Four",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
  {
    name: "Sponsor Five",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
  {
    name: "Sponsor Six",
    logo: "/images/sponsors/sponsorslogoreplacement.png",
  },
];

export default function Sponsors() {
  const slidingSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden border-y border-[#36e29b]/30 bg-[#020d20] py-10 text-white shadow-[inset_0_1px_18px_rgba(54,226,155,0.08)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#36e29b] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-black uppercase md:text-5xl">
          Our <span className="text-[#36e29b]">Sponsors</span>
        </h2>
      </div>

      <div className="sponsor-slider group mt-8">
        <div className="sponsor-track">
          {slidingSponsors.map((sponsor, index) => (
            <Image
              key={`${sponsor.name}-${index}`}
              src={sponsor.logo}
              alt={sponsor.name}
              width={300}
              height={300}
              className="h-20 w-44 object-contain transition duration-300 group-hover/card:scale-105"
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#36e29b] to-transparent" />
    </section>
  );
}