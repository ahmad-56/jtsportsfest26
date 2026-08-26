import Image from "next/image";
import TextButton from "@/components/TextButton";

export default function RegisterNowSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#075c3f] px-4 py-10 text-white sm:px-6 sm:py-12">
      <Image
        src="/images/hero6-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-35"
      />

      <div className="absolute inset-0 z-0 bg-[#075c3f]/60" />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071b16]/70 via-[#075c3f]/25 to-[#071b16]/70" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.25em]">
          Register now
        </p>

        <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
          JT SportsFest XIII
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/70 sm:mt-5 sm:text-base sm:leading-7">
          Be a part of LGS JT&apos;s flagship sports event.
        </p>

        <TextButton
          href="/register"
          className="mt-5 min-h-10 !px-5 !py-2.5 text-[10px] sm:mt-8 sm:min-h-14 sm:!px-7 sm:!py-4 sm:text-base"
        >
          Register now
        </TextButton>
      </div>
    </section>
  );
}
