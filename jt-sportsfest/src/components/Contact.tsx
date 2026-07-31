import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const teamMembers = [
  {
    name: "Saqib Khan",
    role: "Event Head",
    phone: "+92 327 4527530",
    phoneHref: "tel:+923274527530",
    email: "saqibwazir13579@gmail.com",
  },
  {
    name: "Ayaan Aquib",
    role: "Event Head",
    phone: "+92 316 4846440",
    phoneHref: "tel:+923164846440",
    email: "ayaanaquib31@gmail.com",
  },
  {
    name: "Mr Someone 1",
    role: "Director Registrations",
    phone: "Insert Phone Number Here",
    phoneHref: "tel:+924235165647",
    email: "Insert Email Here",
  },
  {
    name: "Mr Someone 2",
    role: "Co-Director Registrations",
    phone: "Insert Phone Number Here",
    phoneHref: "tel:+924235165647",
    email: "Insert Email Here",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020d20] py-16 text-white md:py-24 lg:py-32"
    >
      <Image
        src="/images/hero2-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-30"
      />

      <div className="absolute inset-0 z-0 bg-[#00633e]/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020d20]/25 via-transparent to-[#020d20]/55" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap text-[80px] font-black uppercase leading-none text-white/[0.035] sm:text-[140px] md:text-[220px]"
      >
        SportsFest
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#36e29b]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl font-black uppercase leading-[0.9] sm:text-5xl md:text-6xl lg:text-8xl">
              Contact the
              <span className="block text-[#36e29b]">
                SportsFest team
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {teamMembers.map((person, index) => (
                <article
                  key={`${person.name}-${person.role}`}
                  className="group relative"
                >
                  <div
                    className={`absolute -inset-2 rounded-xl opacity-50 blur-xl transition duration-500 group-hover:opacity-100 ${
                      index % 2 === 0
                        ? "bg-blue-500/20"
                        : "bg-cyan-500/20"
                    }`}
                  />

                  <div className="relative flex flex-col border border-white/15 bg-[#020d20]/80 p-4 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:-translate-y-2 sm:p-6">
                    <div className="absolute right-3 top-3 h-3 w-3 sm:right-5 sm:top-5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#36e29b] opacity-60" />
                      <span className="absolute inset-0 rounded-full bg-[#36e29b]" />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center border border-[#36e29b]/30 bg-[#36e29b]/10 text-base font-black text-[#36e29b] sm:h-14 sm:w-14 sm:text-xl">
                      {person.name
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <h3 className="mt-3 line-clamp-2 text-sm font-black uppercase text-white sm:mt-4 sm:text-2xl">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-[#36e29b] sm:mt-2">
                      {person.role}
                    </p>

                    <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                      <a
                        href={person.phoneHref}
                        className="flex items-center gap-2 text-xs text-white/65 transition hover:text-white sm:gap-3 sm:text-sm"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white/5 text-[#36e29b] sm:h-9 sm:w-9">
                          <FaPhone size={12} className="sm:hidden" />
                          <FaPhone size={15} className="hidden sm:block" />
                        </span>

                        <span className="line-clamp-1">{person.phone}</span>
                      </a>

                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-2 text-xs text-white/65 transition hover:text-white sm:gap-3 sm:text-sm"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white/5 text-[#36e29b] sm:h-9 sm:w-9">
                          <FaEnvelope size={12} className="sm:hidden" />
                          <FaEnvelope size={15} className="hidden sm:block" />
                        </span>

                        <span className="line-clamp-1">{person.email}</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col border border-white/15 bg-[#020d20]/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start gap-3 border-b border-white/10 p-4 sm:gap-4 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b] sm:h-12 sm:w-12">
                  <FaLocationDot size={18} className="sm:hidden" />
                  <FaLocationDot size={20} className="hidden sm:block" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#36e29b]">
                    Location
                  </p>

                  <h3 className="mt-1 line-clamp-2 text-base font-black uppercase text-white sm:mt-2 sm:text-xl">
                    LGS Johar Town Senior Boys
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
                    364-E/1, Block E1, Johar Town, Lahore
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border-b border-white/10">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps?q=LGS+Johar+Town+Senior+Boys+Lahore&output=embed"
                    title="LGS Johar Town Senior Boys location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=LGS+Johar+Town+Senior+Boys+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 text-xs font-black uppercase tracking-wider transition hover:bg-white/10 sm:gap-3 sm:p-4 sm:text-sm"
              >
                <FaLocationDot size={15} className="sm:hidden" />
                <FaLocationDot size={17} className="hidden sm:block" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}