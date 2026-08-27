"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import {
  House,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SquareChartGantt,
  UserPen,
  ChessKnight,
} from "lucide-react";
import { FaInstagram,
         FaFacebook,
         FaGithub
} from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "/#home", icon: House },
  { label: "About", href: "/#about", icon: Info },
  {
    label: "Rules",
    href: "/rules",
    icon: SquareChartGantt,
  },
  { label: "Sports", href: "/coming-soon", icon: ChessKnight },
  {
    label: "Contact",
    href: "/#contact",
    icon: MessageCircle,
  },
  {
    label: "Register",
    href: "/register",
    icon: UserPen,
  },
];

const connectItems = [
  {
    label: "Email",
    href: "mailto:info.alevel@lgsjt.edu.pk",
    icon: Mail,
    external: false,
  },
  {
    label: "Telephone",
    href: "tel:+924235165647",
    icon: Phone,
    external: false,
  },
  {
    label: "Location",
    href: "https://www.google.com/maps/search/?api=1&query=LGS+Johar+Town+Senior+Boys+Lahore",
    icon: MapPin,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jtsportsfest/",
    icon: FaInstagram,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/lgsjtsportsfest/",
    icon: FaFacebook,
    external: true,
  },
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
  function updateFooterGlow(event: MouseEvent<HTMLAnchorElement>) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    button.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#04120f] text-white">
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
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#075c3f]/30 blur-[100px] sm:h-80 sm:w-80"
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#a9c4b4]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-5 pt-9 sm:px-6 sm:pb-7 sm:pt-11 lg:pt-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.9fr_1.5fr_0.85fr] lg:items-start lg:gap-10 lg:pb-10">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center gap-3"
              aria-label="Go to JT SportsFest homepage"
            >
              <Image
                src="/images/nobglogo.png"
                alt="JT SportsFest Edition XIII"
                width={76}
                height={76}
                className="h-14 w-14 shrink-0 object-contain drop-shadow-2xl sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
              />

              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#a9c4b4] sm:text-[10px] sm:tracking-[0.2em]">
                  LGS Johar Town
                </p>

                <h2 className="mt-1 text-lg font-black uppercase leading-none sm:text-xl lg:text-2xl">
                  JT SportsFest

                  <span className="mt-1.5 block text-xs text-white/50 sm:text-sm">
                    Edition XIII
                  </span>
                </h2>
              </div>
            </Link>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.25em]">
              Navigate
            </p>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-nowrap items-start gap-2 sm:gap-3">
                {navigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className="footer-action group flex min-w-9 flex-col items-center sm:min-w-12"
                        onMouseMove={updateFooterGlow}
                      >
                        <span className="footer-action-icon relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-white/5 text-[#ffffff] sm:h-11 sm:w-11">
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-lg p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                              background:
                                "radial-gradient(54px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,1), rgba(169,196,180,0.65) 40%, rgba(169,196,180,0.2) 70%, transparent 100%)",
                              WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                            }}
                          />

                          <Icon
                            size={18}
                            className="relative z-10 sm:h-5 sm:w-5"
                          />
                        </span>

                        <span className="mt-2 text-center text-[7px] font-semibold uppercase leading-3 tracking-wide text-white/45 sm:text-[9px]">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.25em]">
              Connect
            </p>

            <div className="flex flex-nowrap items-start gap-2 sm:gap-3">
              {connectItems.map((item) => {
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
                    aria-label={item.label}
                    className="footer-action group flex min-w-9 flex-col items-center sm:min-w-12"
                    onMouseMove={updateFooterGlow}
                  >
                    <span className="footer-action-icon relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-white/5 text-[#ffffff] sm:h-11 sm:w-11">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-lg p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(54px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,1), rgba(169,196,180,0.65) 40%, rgba(169,196,180,0.2) 70%, transparent 100%)",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />

                      <Icon
                        size={18}
                        className="relative z-10 sm:h-5 sm:w-5"
                      />
                    </span>

                    <span className="mt-2 text-center text-[7px] font-semibold uppercase leading-3 tracking-wide text-white/45 sm:text-[9px]">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2.5 pt-5 text-center text-[9px] leading-4 text-white/40 sm:text-[10px] lg:flex-row lg:text-left">
          <p className="max-w-xl">
            Copyright © 2026 Lahore Grammar School Senior Boys
            Johar Town. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2.5 lg:justify-end">
            <span>
              Made by:{" "}
              {developers.map((developer, index) => (
                <span key={developer.href}>
                  <a
                    href={developer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-text-action inline-flex items-center gap-1 font-semibold text-[#ffffff] transition-[color,transform] duration-600 hover:-translate-y-0.25 hover:text-[#a9c4b4]"
                  >
                    {developer.name}
                    <FaGithub
                      size={11}
                      aria-hidden="true"
                      className="text-[#ffffff]/70"
                    />
                  </a>
                  {index < developers.length - 1 && (
                    <span className="text-white/30">
                      {" "}{" "}
                      Registrations By:{" "}
                    </span>
                  )}
                </span>
              ))}
            </span>

            <span className="hidden text-[#ffffff]/40 sm:inline">
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
                  className="footer-text-action inline-flex items-center gap-1 font-semibold text-[#ffffff] transition-[color,transform] duration-600 hover:-translate-y-0.25 hover:text-[#a9c4b4]"
                >
                  {item.name}
                  <FaInstagram
                    size={11}
                    aria-hidden="true"
                    className="text-[#ffffff]/70"
                  />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
