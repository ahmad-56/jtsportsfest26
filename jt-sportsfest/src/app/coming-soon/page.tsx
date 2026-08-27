import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextButton from "@/components/TextButton";

export const metadata: Metadata = {
  title: "Coming Soon | JT SportsFest XIII",
  description:
    "The JT SportsFest XIII sports and categories page is coming soon.",
};

export default function ComingSoonPage() {
  return (
    <>
      <Header />

      <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[#071b16] px-6 pb-16 pt-32 text-center text-white sm:pt-36">
        <Image
          src="/images/hero3-sports.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071b16]/65 via-[#071b16]/75 to-[#071b16]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#075c3f]/35 blur-[110px] sm:h-[30rem] sm:w-[30rem]"
        />

        <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-[#a9c4b4] sm:text-sm">
            Sports &amp; categories
          </p>

          <h1 className="mt-13 text-[clamp(3.25rem,12vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">
            Coming
            <span className="block text-[#a9c4b4]">Soon</span>
          </h1>

          <TextButton href="/" className="mt-9">
            Back to home
          </TextButton>
        </section>
      </main>

      <Footer />
    </>
  );
}
