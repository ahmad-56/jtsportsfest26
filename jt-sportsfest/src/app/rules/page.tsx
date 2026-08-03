import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  Cigarette,
  CircleOff,
  Gavel,
  ShieldAlert,
  VolumeX,
} from "lucide-react";

const rules = [
  {
    number: "01",
    title: "Physical Violence",
    description:
      "The use of physical force, violence, threats, abusive language or misbehavior toward SportsFest management, officials, volunteers or other participants is strictly prohibited.",
    icon: ShieldAlert,
  },
  {
    number: "02",
    title: "School Property & Restricted Areas",
    description:
      "Damaging school property, attempting to damage any facility or entering areas marked as restricted is strictly prohibited.",
    icon: Ban,
  },
  {
    number: "03",
    title: "Weapons",
    description:
      "Bringing any weapon, dangerous object or item that may cause harm onto the venue or school campus is strictly prohibited.",
    icon: CircleOff,
  },
  {
    number: "04",
    title: "Unfair Means & Cheating",
    description:
      "Using unfair means, cheating or attempting to gain an unauthorized advantage over other participants in order to win a competition is prohibited.",
    icon: Gavel,
  },
  {
    number: "05",
    title: "Smoking, Vaping & Alcohol",
    description:
      "Cigarettes, vapes, e-cigarettes, alcohol and all other intoxicating substances are prohibited on campus. Any vape or e-cigarette discovered will be confiscated and will not be returned.",
    icon: Cigarette,
  },
  {
    number: "06",
    title: "Noise & Disturbance",
    description:
      "Producing excessive noise, creating unnecessary disturbance or disrupting events, classes, officials or other participants on campus is prohibited.",
    icon: VolumeX,
  },
  {
    number: "07",
    title: "Offensive Material",
    description:
      "Displaying, carrying or distributing content that promotes violence, profanity, drug abuse, discrimination or any other offensive material is prohibited.",
    icon: AlertTriangle,
  },
  {
    number: "08",
    title: "Misuse of Equipment",
    description:
      "Misusing, removing or damaging any sports equipment, furniture, technology or other property provided by the SportsFest management is prohibited.",
    icon: Ban,
  },
  {
    number: "09",
    title: "Harassment",
    description:
      "Any attempt to harass, threaten, intimidate or offend another delegate, participant, official or member of the management—physically, verbally or otherwise—is strictly prohibited.",
    icon: ShieldAlert,
  },
];

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen bg-[#020d20] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36">
        <Image
          src="/images/hero4-sports.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-35"
        />

        <div className="absolute inset-0 z-0 bg-[#020d20]/70" />

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,99,62,0.55),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/#home"
            className="group mb-6 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/55 transition hover:text-[#36e29b] sm:mb-10 sm:gap-2 sm:text-sm sm:tracking-[0.15em]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 sm:h-[18px] sm:w-[18px]" />
            Back to SportsFest
          </Link>

          <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#36e29b] sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
            JT SportsFest Edition XIII
          </p>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl">
            Code of{" "}
            <span className="text-[#36e29b]">
              Conduct
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-white/65 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            A delegate or delegation will be disqualified if they fail to
            refrain from any of the following actions.
          </p>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex items-start gap-3 overflow-hidden border border-[#36e29b]/30 bg-[#00633e]/20 p-4 sm:block sm:p-6 md:flex md:items-center md:gap-6 md:p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#36e29b] text-[#020d20] sm:mb-5 sm:h-14 sm:w-14 md:mb-0">
              <AlertTriangle className="h-4 w-4 sm:h-[26px] sm:w-[26px]" />
            </span>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#36e29b] sm:text-xs sm:tracking-[0.22em]">
                Zero-tolerance policy
              </p>

              <p className="mt-1.5 max-w-4xl text-[10px] leading-4 text-white/75 sm:mt-2 sm:text-base sm:leading-7">
                Serious misconduct may result in immediate disqualification,
                removal from the venue and further disciplinary action by the
                school administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => {
            const Icon = rule.icon;

            return (
              <article
                key={rule.number}
                className="group relative h-full min-w-0 overflow-hidden border border-white/10 bg-white/[0.035] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#36e29b]/50 hover:bg-[#00633e]/10 sm:p-7"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-[#36e29b] sm:w-1" />

                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#36e29b]/25 bg-[#36e29b]/10 text-[#36e29b] transition group-hover:bg-[#36e29b] group-hover:text-[#020d20] sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 sm:h-[22px] sm:w-[22px]" />
                  </span>

                  <span className="text-2xl font-black text-white/[0.06] sm:text-4xl">
                    {rule.number}
                  </span>
                </div>

                <h2 className="mt-3 break-words text-[11px] font-black uppercase leading-[1.15] tracking-normal text-white sm:mt-6 sm:text-xl sm:leading-normal sm:tracking-wide">
                  {rule.title}
                </h2>

                <p className="mt-2 break-words text-[9px] leading-[1.45] text-white/60 sm:mt-4 sm:text-sm sm:leading-7">
                  {rule.description}
                </p>

                <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-[#36e29b]/0 blur-2xl transition duration-300 group-hover:bg-[#36e29b]/15 sm:-bottom-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl" />
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}