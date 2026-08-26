"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Timer from "@/components/Timer";
import TextButton from "@/components/TextButton";

function EventDates() {
  return (
 <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35 }}
  className="w-full max-w-md"
>
  <div className="relative px-4 py-3 text-center sm:px-5 sm:py-4">
    {/* Date columns */}
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
      {/* September */}
      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#97afa1] sm:text-xs">
          September
        </p>

        <div className="mt-1 flex flex-nowrap items-baseline justify-center gap-1.5 sm:gap-2">
          <span className="whitespace-nowrap text-2xl font-black leading-none text-white sm:text-4xl">
            25–27
          </span>

          <span className="shrink-0 text-[9px] font-bold leading-none tracking-[0.1em] text-white/45 sm:text-xs">
            2026
          </span>
        </div>
      </div>

      {/* Divider line */}
      <div className="h-10 w-px sm:h-12" />

      {/* October */}
      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#97afa1] sm:text-xs">
          October
        </p>

        <div className="mt-1 flex flex-nowrap items-baseline justify-center gap-1.5 sm:gap-2">
          <span className="whitespace-nowrap text-2xl font-black leading-none text-white sm:text-4xl">
            02–04
          </span>

          <span className="shrink-0 text-[9px] font-bold leading-none tracking-[0.1em] text-white/45 sm:text-xs">
            2026
          </span>
        </div>
      </div>
    </div>

  </div>
</motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] scroll-mt-24 overflow-x-hidden bg-[#071b16] pt-20 text-white"
    >
      <Image
        src="/images/hero4-sports.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 60vw"
        className="absolute inset-0 z-0 object-cover object-center opacity-20"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(7,92,63,.45),transparent_43%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center justify-center px-4 py-4 sm:px-6 sm:py-8 lg:py-12">
        <div className="flex w-full flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-[#a9c4b4] sm:text-sm sm:tracking-[0.25em]"
          >
            LGS Johar Town proudly presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-2 text-[clamp(2rem,10vw,3.5rem)] font-NexaXBold font-black uppercase leading-[0.95] sm:mt-3 sm:text-6xl md:text-7xl lg:mt-4 lg:text-[6.5rem]"
          >
            JT SPORTSFEST

            <span className="mt-1 block text-[0.68em] leading-none text-[#a9c4b4] sm:mt-1 sm:text-[0.7em]">
              Edition XIII
            </span>
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              rotate: 4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.8 }}
            className="relative order-1 mt-0 flex w-full items-center justify-center lg:order-none lg:mt-2"
          >
            <div className="absolute h-4/5 w-4/5 max-w-md rounded-full bg-[#a9c4b4]/10 blur-3xl" />

            <Image
              src="/images/nobglogo.png"
              alt="SportsFest Edition XIII"
              width={500}
              height={500}
              priority
              className="relative z-10 -my-8 h-[clamp(280px,72vw,380px)] w-auto max-w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] sm:-my-9 sm:h-[400px] lg:-my-12 lg:h-[440px]"
            />
          </motion.div>

          <div className="order-2 mt-3 flex w-full justify-center sm:mt-5 lg:order-none lg:mt-4">
            <EventDates />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="order-3 mt-6 flex w-full flex-col items-center gap-8 sm:mt-7 lg:order-none lg:mt-4"
          >
            <TextButton href="/register">
              Register Now
            </TextButton>

            <div>
              <Timer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
