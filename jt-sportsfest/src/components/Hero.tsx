"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020d20] pt-32">
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
            className="text-7xl font-black uppercase leading-[0.88] md:text-9xl"
          >
            Own the
            <span className="block text-[#36e29b]">moment.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/70"
          >
            Three unforgettable days, more than 20 sporting categories
            and one arena where skill and school spirit become history.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/register"
              className="bg-[#36e29b] px-8 py-5 font-bold uppercase text-[#020d20]"
            >
              Enter the arena
            </Link>

            <Link
              href="/sports"
              className="border border-white/30 px-8 py-5 font-bold uppercase"
            >
              Explore sports
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/sportsfest-logo.png"
            alt="SportsFest Edition XIII"
            width={600}
            height={600}
            priority
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}