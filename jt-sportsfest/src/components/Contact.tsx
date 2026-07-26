import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import Reveal from "@/components/Reveal";

const eventHeads = [
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
];

const contactItems = [
  {
    label: "Director Registrations",
    value: "info.alevel@lgsjt.edu.pk",
    href: "mailto:info.alevel@lgsjt.edu.pk",
    icon: FaPhone,
    external: false,
  },
  {
    label: "Co Director Registrations",
    value: "Mr Someone: +92 42 35165647",
    href: "tel:+924235165647",
    icon: FaPhone,
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#00633e] py-24 text-white md:py-32"
    >
      {/* Background lettering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap text-[150px] font-black uppercase leading-none text-white/[0.035] md:text-[240px]"
      >
        SportsFest
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#36e29b]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="font-black uppercase tracking-[0.22em] text-[#36e29b]">
              Contact
            </p>

            <h2 className="mt-4 max-w-4xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              Connect with the
              <span className="block text-[#36e29b]">
                SportsFest team.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">
              Contact our event heads for registration assistance,
              categories, rules and institutional participation.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Event heads */}
          <Reveal>
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
              {eventHeads.map((person, index) => (
                <article
                  key={person.email}
                  className="group relative h-full"
                >
                  {/* Card glow */}
                  <div
                    className={`absolute -inset-2 rounded-xl blur-xl transition duration-500 group-hover:opacity-100 ${
                      index === 0
                        ? "bg-blue-500/20 opacity-50"
                        : "bg-cyan-500/20 opacity-50"
                    }`}
                  />

                  <div className="relative flex h-full flex-col border border-white/15 bg-[#020d20]/80 p-7 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:-translate-y-2 group-hover:border-[#36e29b]/60">
                    {/* Animated status dot */}
                    <div className="absolute right-5 top-5">
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#36e29b] opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#36e29b]" />
                    </div>

                    {/* Initial */}
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

                    <div className="mt-8 space-y-4">
                      <a
                        href={person.phoneHref}
                        className="flex items-center gap-3 text-sm text-white/65 transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 items-center justify-center bg-white/5 text-[#36e29b]">
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

          {/* Headquarters */}
          <Reveal>
            <div className="h-full border border-white/15 bg-[#020d20]/80 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <p className="mb-7 text-xs font-black uppercase tracking-[0.22em] text-[#36e29b]">
                SportsFest headquarters
              </p>

              <div className="divide-y divide-white/10">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={
                        item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b] transition group-hover:border-[#36e29b]/60 group-hover:bg-[#36e29b] group-hover:text-[#020d20]">
                        <Icon size={18} />
                      </span>

                      <span>
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                          {item.label}
                        </span>

                        <span className="mt-2 block text-sm leading-6 text-white/75 transition group-hover:text-white sm:text-base">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jtsportsfest/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-wider transition hover:border-[#36e29b] hover:bg-[#36e29b] hover:text-[#020d20]"
              >
                <FaInstagram size={19} />
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}