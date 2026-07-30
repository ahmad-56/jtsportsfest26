import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Code of Conduct", href: "/rules" },
  { label: "Sports", href: "/sports" },
  { label: "Contact", href: "/#contact" },
  { label: "Register", href: "/register" },
];

const developers = [
  {
    name: "Ahmad Hassan",
    href: "https://github.com/ahmad-56",
  },
  {
    name: "Hannan Aqil",
    href: "https://github.com/blaadz",
  },
];

const society = [
  {
    name: "LGS JT IT Society",
    href: "https://www.instagram.com/lgsjt.itsociety",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#010916] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#00633e]/30 blur-[120px]"
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#36e29b]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center gap-5"
              aria-label="Go to JT SportsFest homepage"
            >
              <Image
                src="/images/nobglogo.png"
                alt="JT SportsFest Edition XIII"
                width={100}
                height={100}
                className="h-24 w-24 object-contain drop-shadow-2xl"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#36e29b]">
                  LGS Johar Town
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase leading-none">
                  JT SportsFest

                  <span className="mt-2 block text-xl text-white/60">
                    Edition XIII
                  </span>
                </h2>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Become part of an unforgettable event.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#36e29b] px-6 py-4 text-sm font-black uppercase tracking-wider text-[#020d20] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Register your team
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-[#36e29b]">
              Navigate
            </p>

            <nav aria-label="Footer navigation">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#36e29b] transition-all duration-300 group-hover:w-5" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-[#36e29b]">
              Contact
            </p>
            <div className="space-y-6">
              <a
                href="mailto:info.alevel@lgsjt.edu.pk"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b] transition group-hover:border-[#36e29b]/50">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/35">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-white/65 transition group-hover:text-white">
                    info.alevel@lgsjt.edu.pk
                  </span>
                </span>
              </a>
              <a
                href="tel:+924235165647"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b] transition group-hover:border-[#36e29b]/50">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/35">
                    Telephone
                  </span>
                  <span className="mt-1 block text-sm text-white/65 transition group-hover:text-white">
                    +92 42 35165647
                  </span>
                </span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=LGS+Johar+Town+Senior+Boys+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#36e29b] transition group-hover:border-[#36e29b]/50">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/35">
                    Location
                  </span>
                  <span className="mt-1 block max-w-xs text-sm leading-6 text-white/65 transition group-hover:text-white">
                    364-E/1, Block E1, Johar Town, Lahore
                  </span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/jtsportsfest/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-[#36e29b]"
              >
                <FaInstagram size={19} />
                Follow JT SportsFest
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center text-xs text-white/40 lg:flex-row lg:text-left">
          <p>
            Copyright © 2026 Lahore Grammar School Senior Boys
            Johar Town. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <span>
              Made by{" "}
              {developers.map((developer, index) => (
                <span key={developer.href}>
                  <a
                    href={developer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-semibold text-[#36e29b] transition-all duration-300 hover:-translate-y-0.25 hover:text-white hover:drop-shadow-[0_0_7px_rgba(54,226,155,0.6)]"
                  >
                    {developer.name}
                  </a>

                  {index < developers.length - 1 && (
                    <span className="text-white/30">
                      {" "}
                      &{" "}
                    </span>
                  )}
                </span>
              ))}
            </span>

            <span className="hidden text-[#36e29b]/40 sm:inline">
              •
            </span>

            <span>
              Presented by{" "}
              {society.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-[#36e29b] transition-all duration-300 hover:-translate-y-0.25 hover:text-white hover:drop-shadow-[0_0_7px_rgba(54,226,155,0.6)]"
                >
                  {item.name}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}