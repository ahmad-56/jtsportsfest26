import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020d20] py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,99,62,0.22),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        {/* Left side */}
        <Reveal>
          <div className="text-left">
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
              About JT{" "}
              <span className="text-[#36e29b]">SportsFest</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              For the past 12 years, LGS JT&apos;s Sports Society has been
              hosting one of Pakistan&apos;s biggest sporting events, and each
              year it has exceeded expectations. With over 20 categories for
              both boys and girls to compete in and prove their skill, we
              assure you it will be a jam-packed, incredible three days.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              This year, we aim for JT SportsFest to be bigger, better and more
              engaging than ever before. We present to you JT SportsFest XIII.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#36e29b]" />
          </div>
        </Reveal>

        {/* Right-side box */}
        <Reveal>
          <div className="group relative overflow-hidden border border-white/15 bg-[#020d20]/65 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#36e29b]/60">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#36e29b]">
              Official guidelines
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
              Code of Conduct
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Review the official rules, participation guidelines and expected
              conduct before entering the SportsFest Event.
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <Link
                href="/code-of-conduct"
                className="inline-flex rounded-lg bg-[#36e29b] px-6 py-4 text-sm font-black uppercase tracking-wider text-[#020d20] shadow-lg shadow-[#36e29b]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#48f0aa] hover:shadow-xl hover:shadow-[#36e29b]/30 active:translate-y-0"
              >
                View Code of Conduct
              </Link>
            </div>

            <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#36e29b]/0 blur-2xl transition group-hover:bg-[#36e29b]/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}