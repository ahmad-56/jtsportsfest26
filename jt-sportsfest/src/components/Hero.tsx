"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Timer from "@/components/Timer";

function EventDates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="grid w-full max-w-lg grid-cols-2 gap-2 sm:gap-3 lg:mt-4"
    >
      <div className="group relative h-full overflow-hidden border border-white/15 bg-[#020d20]/65 p-3 backdrop-blur-md transition duration-300 hover:border-[#36e29b]/60 sm:p-5 lg:hover:-translate-y-1">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#36e29b] sm:text-xs sm:tracking-[0.2em]">
          September
        </p>

        <div className="mt-2 flex flex-wrap items-end gap-1.5 sm:flex-nowrap sm:gap-3">
          <span className="text-xl font-black leading-none text-white sm:text-3xl">
            25 – 27
          </span>

          <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 sm:text-xs">
            2026
          </span>
        </div>

        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-white/75 sm:text-sm sm:leading-normal">
            Cricket, Athletics & Tug of War
          </p>
        </div>

        <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#36e29b]/0 blur-2xl transition group-hover:bg-[#36e29b]/20" />
      </div>

      <div className="group relative h-full overflow-hidden border border-white/15 bg-[#020d20]/65 p-3 backdrop-blur-md transition duration-300 hover:border-[#36e29b]/60 sm:p-5 lg:hover:-translate-y-1">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#36e29b] sm:text-xs sm:tracking-[0.2em]">
          October
        </p>

        <div className="mt-2 flex flex-wrap items-end gap-1.5 sm:flex-nowrap sm:gap-3">
          <span className="text-xl font-black leading-none text-white sm:text-3xl">
            2 – 4
          </span>

          <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 sm:text-xs">
            2026
          </span>
        </div>

        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-white/75 sm:text-sm sm:leading-normal">
            All Sports
          </p>
        </div>

        <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#36e29b]/0 blur-2xl transition group-hover:bg-[#36e29b]/20" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] scroll-mt-24 overflow-x-hidden bg-[#020d20] pt-24 text-white"
    >
      <Image
        src="/images/hero-sports.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 60vw"
        className="absolute inset-0 z-0 object-cover object-center opacity-25"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(0,99,62,.45),transparent_43%)] lg:bg-[radial-gradient(circle_at_79%_40%,rgba(0,99,62,.45),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-0">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#36e29b] sm:mb-6 sm:text-sm sm:tracking-[0.25em]"
          >
            LGS Johar Town proudly presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-[clamp(2.25rem,10vw,3.25rem)] font-NexaXBold font-black uppercase leading-[0.92] sm:text-6xl sm:leading-[0.9] md:text-7xl lg:text-[7.5rem]"
          >
            SPORTSFEST

            <span className="mt-1 block text-[0.7em] leading-[0.95] text-[#36e29b] sm:text-[0.72em] lg:text-[0.9em]">
              Edition XIII
            </span>
          </motion.h1>

          <div className="hidden lg:block">
            <EventDates />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-0 flex flex-col items-center justify-center lg:mt-0 lg:-translate-y-8 lg:translate-x-10 xl:translate-x-14"
        >
          <div className="relative -my-5 flex items-center justify-center sm:-my-7 lg:my-0">
            <div className="absolute inset-8 rounded-full bg-[#36e29b]/10 blur-3xl" />

            <Image
              src="/images/nobglogo.png"
              alt="SportsFest Edition XIII"
              width={500}
              height={500}
              priority
              className="relative z-10 h-[clamp(230px,42svh,310px)] w-auto max-w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] sm:h-[clamp(280px,38svh,370px)] lg:h-[400px] lg:w-auto xl:h-[430px]"
            />
          </div>

          <div className="relative z-20 -mt-1 flex w-full justify-center sm:-mt-2 lg:-mt-9">
            <Timer />
          </div>

          <Link
            href="/register"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#36e29b] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#020d20] shadow-lg shadow-[#36e29b]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] lg:hidden"
          >
            Register Now
          </Link>
        </motion.div>

        <div className="mt-5 flex w-full justify-center pb-5 lg:hidden">
          <EventDates />
        </div>
      </div>
    </section>
  );
}