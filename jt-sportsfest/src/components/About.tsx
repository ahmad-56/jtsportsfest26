import Reveal from "@/components/Reveal";
import TextButton from "@/components/TextButton";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#071b16] py-14 text-white sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,92,63,0.22),transparent_55%)] sm:bg-[radial-gradient(circle_at_50%_50%,rgba(7,92,63,0.22),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <Reveal>
          <div className="text-left">
            <h2 className="max-w-full break-words text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
              About {" "}
              <span className="text-[#a9c4b4]">
                JT SportsFest
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-white/65 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              For the past 12 years, LGS JT&apos;s Sports Society has been
              hosting one of Pakistan&apos;s biggest sporting events, and each
              year it has exceeded expectations. With over 20 categories for
              both boys and girls to compete in and prove their skill, we
              assure you it will be a jam-packed, incredible three days.
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65 sm:mt-4 sm:text-base sm:leading-8 md:text-lg">
              This year, we aim for JT SportsFest to be bigger, better and more
              engaging than ever before. We present to you JT SportsFest XIII.
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#a9c4b4] sm:mt-8 sm:w-20" />
          </div>
        </Reveal>

        <Reveal>
          <div className="group relative overflow-hidden border border-white/15 bg-[#071b16]/65 p-5 backdrop-blur-md hover:border-[#a9c4b4]/60 sm:p-7">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#a9c4b4]" />

            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#a9c4b4] sm:text-xs sm:tracking-[0.2em]">
              JT SportsFest XIII
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
              Participate in JT SportsFest
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 min-[390px]:grid-cols-2 sm:mt-6 sm:gap-4 sm:pt-6">
              <TextButton
                href="/register"
                className="w-full !px-4 text-xs sm:min-h-14 sm:!px-5 sm:!py-4 sm:text-sm"
              >
                Register Now
              </TextButton>

              <TextButton
                href="/sports"
                className="w-full !px-4 text-xs sm:min-h-14 sm:!px-5 sm:!py-4 sm:text-sm"
              >
                View Categories
              </TextButton>
            </div>

            <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#a9c4b4]/0 blur-2xl transition group-hover:bg-[#a9c4b4]/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
