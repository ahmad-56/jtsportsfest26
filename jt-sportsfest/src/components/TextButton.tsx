"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type TextButtonProps = Omit<
  ComponentProps<typeof Link>,
  "children" | "className" | "onMouseMove"
> & {
  children: ReactNode;
  className?: string;
};

export default function TextButton({
  children,
  className = "",
  ...props
}: TextButtonProps) {
  function updateGlowPosition(event: MouseEvent<HTMLAnchorElement>) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    button.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <Link
      {...props}
      onMouseMove={updateGlowPosition}
      className={`group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-black bg-[#06432f] px-8 py-3 text-center text-sm font-black uppercase tracking-wider text-white transition-transform duration-150 ease-out active:translate-y-px active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4b4] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(90px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,1), rgba(169,196,180,0.65) 40%, rgba(169,196,180,0.2) 70%, transparent 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
}
