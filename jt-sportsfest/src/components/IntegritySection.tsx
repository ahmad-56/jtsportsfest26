import Image from "next/image";
import TextButton from "@/components/TextButton";

export default function IntegritySection() {
  return (
    <section className="relative overflow-hidden border-y border-[#a9c4b4]/30 bg-[#071b16] px-4 py-10 text-white shadow-[inset_0_1px_18px_rgba(169,196,180,0.08)] sm:px-6 sm:py-12">
      <Image
        src="/images/hero6-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-20"
      />

      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.32),transparent_58%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.25em]">
          Compete with integrity
        </p>

        <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
          JT SPORTSFEST XIII
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/70 sm:mt-5 sm:text-base sm:leading-7">
          Every participant is expected to respect the venue, management,
          officials and fellow competitors throughout JT SportsFest XIII.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <TextButton
            href="/sports"
            className="min-h-9 !px-3.5 !py-2 text-[9px] sm:min-h-12 sm:!px-5 sm:!py-3 sm:text-sm"
          >
            Explore Sports
          </TextButton>

          <TextButton
            href="/rules"
            className="min-h-9 !px-3.5 !py-2 text-[9px] sm:min-h-12 sm:!px-5 sm:!py-3 sm:text-sm"
          >
            Read Code of Conduct
          </TextButton>
        </div>
      </div>
    </section>
  );
}
