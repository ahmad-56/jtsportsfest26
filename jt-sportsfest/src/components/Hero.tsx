"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Timer from "@/components/Timer";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020d20] pt-6">
      <Image
        src="/images/hero-sports.jpg"
        alt=""
        fill
        priority
        sizes="60vw"
        className="absolute inset-0 z-0 object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(0,99,62,.45),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[800px] max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-bold uppercase tracking-[0.25em] text-[#36e29b]"
          >
            LGS Johar Town proudly presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-6xl font-NexaXBold font-black uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl"
          >
            SPORTSFEST
            <span className="block text-[#36e29b]">Edition XIII</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-9 grid max-w-lg gap-3 sm:grid-cols-2"
          >
            <div className="group relative overflow-hidden border border-white/15 bg-[#020d20]/65 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#36e29b]/60">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#36e29b]">
                September
              </p>

              <div className="mt-2 flex items-end gap-3">
                <span className="text-3xl font-black leading-none text-white">
                  24 – 27
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                  2026
                </span>
              </div>

              <div className="mt-3 border-t border-white/10 pt-3">
                <p className="text-sm font-bold uppercase tracking-wide text-white/75">
                  Cricket, Athletics & Tug of War
                </p>
              </div>

              <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#36e29b]/0 blur-2xl transition group-hover:bg-[#36e29b]/20" />
            </div>

            <div className="group relative overflow-hidden border border-white/15 bg-[#020d20]/65 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#36e29b]/60">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#36e29b]">
                October
              </p>

              <div className="mt-2 flex items-end gap-3">
                <span className="text-3xl font-black leading-none text-white">
                  2 – 4
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                  2026
                </span>
              </div>

              <div className="mt-3 border-t border-white/10 pt-3">
                <p className="text-sm font-bold uppercase tracking-wide text-white/75">
                  All Sports
                </p>
              </div>

              <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#36e29b]/0 blur-2xl transition group-hover:bg-[#36e29b]/20" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex -translate-y-4 flex-col items-center justify-center lg:translate-x-20 lg:-translate-y-10"
        >
          <Image
            src="/images/nobglogo.png"
            alt="SportsFest Edition XIII"
            width={500}
            height={500}
            priority
            className="w-full max-w-[500px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
          />

          <div className="-mt-6 flex w-full justify-center pb-8 lg:-mt-10">
            <Timer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}