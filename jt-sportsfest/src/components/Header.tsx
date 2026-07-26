"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Code Of Conduct", href: "/rules" },
  { label: "Sports", href: "#sports" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020d20]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/images/nobglogo.png"
            alt="JT SportsFest logo"
            width={75}
            height={75}
            priority
          />

          <span className="text-xl font-serif font-bold uppercase">
            JT SportsFest{" "}
            <span className="text-[#36e29b]">&apos;26</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 transition-colors duration-300 hover:text-[#36e29b]"
            >
              <span className="relative z-10">{link.label}</span>

              <span className="absolute inset-0 scale-90 rounded-lg bg-[#36e29b]/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#36e29b]/10" />

              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#36e29b] transition-all duration-300 group-hover:w-2/3" />
            </Link>
          ))}

          <Link
            href="/register"
            className="ml-3 rounded-lg bg-[#36e29b] px-5 py-3 font-mono font-bold uppercase text-[#020d20] shadow-lg shadow-[#36e29b]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] hover:shadow-xl hover:shadow-[#36e29b]/30 active:translate-y-0"
          >
            Register now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#020d20] px-6 pb-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/10 py-4 font-bold uppercase tracking-wider text-white/75 transition hover:pl-2 hover:text-[#36e29b]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/register"
            className="mt-5 block rounded-lg bg-[#36e29b] px-5 py-4 text-center font-mono font-bold uppercase text-[#020d20]"
            onClick={() => setMenuOpen(false)}
          >
            Register now
          </Link>
        </div>
      )}
    </header>
  );
}