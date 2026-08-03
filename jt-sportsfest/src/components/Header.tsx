"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Code Of Conduct", href: "/rules" },
  { label: "Sports", href: "/sports" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020d20]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <a
            href="/#home"
            className="logo-wrapper flex items-center gap-3"
          >
            <Image
              src="/images/nobglogo.png"
              alt="JT SportsFest logo"
              width={75}
              height={75}
              priority
              className="logo-img"
            />

            <span className="text-xl font-bold uppercase">
              JT SportsFest{" "}
              <span className="text-[#36e29b]">
                &apos;26
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 transition-colors duration-300 hover:text-[#36e29b]"
              >
                <span className="relative z-10">
                  {link.label}
                </span>

                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#36e29b] transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}

            <Link
              href="/register"
              className="ml-3 rounded-lg bg-[#36e29b] px-5 py-3 font-bold uppercase text-[#020d20] shadow-lg shadow-[#36e29b]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] hover:shadow-xl hover:shadow-[#36e29b]/30 active:translate-y-0"
            >
              Register now
            </Link>
          </div>

          <button
            type="button"
            className="text-white lg:hidden"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            <span
              className={`block transition-transform duration-500 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </span>
          </button>
        </nav>

        <div
          className={`grid overflow-hidden bg-[#020d20] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] border-t border-white/10 opacity-100"
              : "pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`px-6 pb-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen
                  ? "translate-y-0"
                  : "-translate-y-5"
              }`}
            >
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block border-b border-white/10 py-4 font-bold uppercase tracking-wider text-white/75 transition-all duration-300 hover:pl-2 hover:text-[#36e29b] ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen
                      ? `${80 + index * 55}ms`
                      : "0ms",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <Link
                href="/register"
                className={`mt-5 block rounded-lg bg-[#36e29b] px-5 py-4 text-center font-bold uppercase text-[#020d20] transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen
                    ? `${100 + links.length * 55}ms`
                    : "0ms",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes mobileRollIn {
          0% {
            transform: translateX(-18px) rotate(-18deg)
              scale(0.85);
            opacity: 0;
          }

          65% {
            transform: translateX(4px) rotate(7deg)
              scale(1.03);
            opacity: 1;
          }

          100% {
            transform: translateX(0) rotate(0deg)
              scale(1);
            opacity: 1;
          }
        }

        @keyframes mobileRollHover {
          0% {
            transform: rotate(0deg) scale(1);
          }

          40% {
            transform: rotate(12deg) scale(1.05);
          }

          70% {
            transform: rotate(-4deg) scale(1.03);
          }

          100% {
            transform: rotate(0deg) scale(1);
          }
        }

        @media (max-width: 1023px) {
          .logo-img {
            display: block;
            animation: mobileRollIn 650ms
              cubic-bezier(0.22, 1, 0.36, 1) both;
            transition:
              transform 420ms ease,
              filter 300ms ease;
            will-change: transform;
          }

          .logo-wrapper:hover .logo-img,
          .logo-wrapper:active .logo-img {
            animation: mobileRollHover 480ms ease;
            filter: drop-shadow(
              0 0 10px rgba(54, 226, 155, 0.35)
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-img,
          .logo-wrapper:hover .logo-img,
          .logo-wrapper:active .logo-img {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}