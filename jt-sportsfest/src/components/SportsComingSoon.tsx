import Image from "next/image";

export default function SportsComingSoon() {
  return (
    <section
      id="sports-preview"
      className="relative grid min-h-[26rem] place-items-center overflow-hidden border-y border-[#a9c4b4]/30 bg-[#071b16] px-6 py-20 text-center text-white shadow-[inset_0_1px_18px_rgba(169,196,180,0.08)] sm:min-h-[32rem]"
    >
      <Image
        src="/images/hero9-sports.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover object-center opacity-20"
      />

      <div className="absolute inset-0 bg-[#000000]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.4),transparent_58%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mt-8 text-[clamp(2.75rem,10vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.045em]">
          Coming
          <span className="block text-[#a9c4b4]">Soon</span>
        </p>

      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a9c4b4] to-transparent" />
    </section>
  );
}
