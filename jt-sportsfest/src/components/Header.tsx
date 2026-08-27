"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import TextButton from "@/components/TextButton";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Code Of Conduct", href: "/rules" },
  { label: "Sports", href: "/coming-soon" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 48);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "border-white/15 bg-[#071b16]/95 shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
            : "border-white/10 bg-[#071b16]/80"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? "h-[72px]" : "h-24"
          }`}
        >
          <Link
            href="/#home"
            className={`logo-wrapper flex items-center transition-[gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled ? "gap-2.5" : "gap-3"
            }`}
          >
            <Image
              src="/images/nobglogo.png"
              alt="JT SportsFest logo"
              width={75}
              height={75}
              priority
              className={`logo-img object-contain ${
                isScrolled ? "h-14 w-14" : "h-[75px] w-[75px]"
              }`}
            />

            <span
              className={`whitespace-nowrap font-bold uppercase transition-[font-size] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              JT SportsFest{" "}
              <span className="text-[#a9c4b4]">
                &apos;26
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative rounded-lg py-2 font-bold uppercase tracking-wider text-white/70 transition-[color,padding,font-size] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#a9c4b4] ${
                  isScrolled ? "px-3 text-xs" : "px-4 text-sm"
                }`}
              >
                <span className="relative z-10">
                  {link.label}
                </span>

                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#a9c4b4] transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}

            <TextButton
              href="/register"
              className={`ml-3 !min-h-0 font-bold !transition-[transform,padding,font-size,min-height] !duration-500 !ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isScrolled
                  ? "!px-4 !py-2 !text-xs"
                  : "!px-5 !py-3 !text-sm"
              }`}
            >
              Register now
            </TextButton>
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
          className={`grid overflow-hidden bg-[#071b16] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
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
                  className={`block border-b border-white/10 py-4 font-bold uppercase tracking-wider text-white/75 transition-all duration-300 hover:pl-2 hover:text-[#a9c4b4] ${
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

              <TextButton
                href="/register"
                className={`mt-5 w-full !py-4 font-bold transition-all duration-300 ${
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
              </TextButton>
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
              filter 300ms ease,
              width 500ms cubic-bezier(0.22, 1, 0.36, 1),
              height 500ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }

          .logo-wrapper:hover .logo-img,
          .logo-wrapper:active .logo-img {
            animation: mobileRollHover 480ms ease;
            filter: drop-shadow(
              0 0 10px rgba(169, 196, 180, 0.35)
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
