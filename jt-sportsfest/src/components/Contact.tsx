import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import TextButton from "@/components/TextButton";

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
      className="relative overflow-hidden bg-[#071b16] py-16 text-white md:py-24 lg:py-32"
    >
      <Image
        src="/images/hero2-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-30"
      />

      <div className="absolute inset-0 z-0 bg-[#075c3f]/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071b16]/25 via-transparent to-[#071b16]/55" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap text-[80px] font-black uppercase leading-none text-white/[0.035] sm:text-[140px] md:text-[152px]"
      >
        JT SportsFest XIII
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#a9c4b4]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl font-black uppercase leading-[0.9] sm:text-5xl md:text-6xl lg:text-8xl">
              Contact the
              <span className="block text-[#a9c4b4]">
                SportsFest team
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
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

                  <div className="relative flex h-full min-h-[220px] flex-col border border-[#a9c4b4]/40 bg-[#071b16]/80 p-4 shadow-2xl backdrop-blur-xl sm:min-h-[315px] sm:p-7">
                    <div className="absolute right-3 top-3 h-3 w-3 sm:right-5 sm:top-5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#a9c4b4] opacity-60" />
                      <span className="absolute inset-0 rounded-full bg-[#a9c4b4]" />
                    </div>

                    <div className="mb-3 flex h-9 w-9 items-center justify-center border border-[#a9c4b4]/30 bg-[#a9c4b4]/10 text-xs font-black text-[#a9c4b4] sm:mb-7 sm:h-14 sm:w-14 sm:text-xl">
                      {person.name
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <h3 className="line-clamp-2 text-xs font-black uppercase text-white sm:text-2xl sm:leading-tight">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#a9c4b4] sm:mt-2 sm:text-xs sm:tracking-[0.18em]">
                      {person.role}
                    </p>

                    <div className="mt-auto space-y-1.5 pt-3 sm:space-y-4 sm:pt-8">
                      <a
                        href={person.phoneHref}
                        className="flex items-center gap-2 text-[10px] text-white/65 transition hover:text-white sm:gap-3 sm:text-sm"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-white/5 text-[#a9c4b4] sm:h-9 sm:w-9">
                          <FaPhone size={10} className="sm:hidden" />
                          <FaPhone size={15} className="hidden sm:block" />
                        </span>

                        <span className="line-clamp-1">{person.phone}</span>
                      </a>

                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-2 text-[10px] text-white/65 transition hover:text-white sm:gap-3 sm:text-sm"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-white/5 text-[#a9c4b4] sm:h-9 sm:w-9">
                          <FaEnvelope size={10} className="sm:hidden" />
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
            <div className="flex h-full flex-col border border-[#a9c4b4]/40 bg-[#071b16]/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
              <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#a9c4b4] sm:h-12 sm:w-12">
                  <FaLocationDot size={16} className="sm:hidden" />
                  <FaLocationDot size={20} className="hidden sm:block" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.22em]">
                    Location:
                  </p>

                  <h3 className="mt-0.5 line-clamp-2 text-xs font-black uppercase text-white sm:mt-2 sm:text-xl">
                    LGS Johar Town Senior Boys
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
                    364-E/1, Block E1, Johar Town, Lahore
                  </p>
                </div>
              </div>

              <div className="relative min-h-[200px] flex-1 overflow-hidden border border-white/10 sm:min-h-[300px] lg:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=LGS+Johar+Town+Senior+Boys+Lahore&output=embed"
                  title="LGS Johar Town Senior Boys location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <TextButton
                href="https://www.google.com/maps/search/?api=1&query=LGS+Johar+Town+Senior+Boys+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 min-h-0 w-full !px-3 !py-2 text-[10px] sm:mt-5 sm:!px-6 sm:!py-4 sm:text-sm"
              >
                <FaLocationDot size={13} className="sm:hidden" />
                <FaLocationDot size={17} className="hidden sm:block" />
                Open in Google Maps
              </TextButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
