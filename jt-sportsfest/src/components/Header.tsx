"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sports", href: "/sports" },
  { label: "Rules", href: "/rules" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020d20]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/nobglogo.png"
            alt="logo"
            width={75}
            height={75}
          />

          <span className="text-xl font-bold uppercase">
            JT SportsFest{" "}
            <span className="text-[#36e29b]">&apos;26</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider transition hover:text-[#36e29b]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/register"
            className="bg-[#36e29b] px-6 py-4 font-bold uppercase text-[#020d20]"
          >
            Register now
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#020d20] p-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/10 py-4 uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}