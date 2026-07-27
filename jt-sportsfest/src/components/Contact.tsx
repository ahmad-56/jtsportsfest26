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
      className="relative overflow-hidden bg-[#020d20] py-24 text-white md:py-32"
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
        className="pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap text-[150px] font-black uppercase leading-none text-white/[0.035] md:text-[240px]"
      >
        SportsFest
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#36e29b]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14">
            <h2 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              Contact the
              <span className="block text-[#36e29b]">
                SportsFest team
              </span>
            </h2>

          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

                  <div className="relative flex h-full min-h-[315px] flex-col border border-white/15 bg-[#020d20]/80 p-7 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:-translate-y-2 group-hover:border-[#36e29b]/60">
                    <div className="absolute right-5 top-5 h-3 w-3">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#36e29b] opacity-60" />
                      <span className="absolute inset-0 rounded-full bg-[#36e29b]" />
                    </div>

                    <div className="mb-7 flex h-14 w-14 items-center justify-center border border-[#36e29b]/30 bg-[#36e29b]/10 text-xl font-black text-[#36e29b]">
                      {person.name
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <h3 className="pr-7 text-2xl font-black uppercase text-white">
                      {person.name}
                    </h3>

                    <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#36e29b]">
                      {person.role}
                    </p>

                    <div className="mt-auto space-y-4 pt-8">
                      <a
                        href={person.phoneHref}
                        className="flex items-center gap-3 text-sm text-white/65 transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/5 text-[#36e29b]">
                          <FaPhone size={15} />
                        </span>

                        {person.phone}
                      </a>

                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-3 break-all text-sm text-white/65 transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/5 text-[#36e29b]">
                          <FaEnvelope size={15} />
                        </span>

                        {person.email}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col border border-white/15 bg-[#020d20]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b]">
                  <FaLocationDot size={20} />
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#36e29b]">
                    Location
                  </p>

                  <h3 className="mt-2 text-xl font-black uppercase text-white">
                    LGS Johar Town Senior Boys
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    364-E/1, Block E1, Johar Town, Lahore
                  </p>
                </div>
              </div>

              <div className="relative min-h-[420px] flex-1 overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=LGS+Johar+Town+Senior+Boys+Lahore&output=embed"
                  title="LGS Johar Town Senior Boys location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=LGS+Johar+Town+Senior+Boys+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-wider transition hover:border-[#36e29b] hover:bg-[#36e29b] hover:text-[#020d20]"
              >
                <FaLocationDot size={17} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}