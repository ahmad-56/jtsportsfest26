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

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Sports", href: "/sports" },
  { label: "Contact", href: "/#contact" },
];

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-36">
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
            className="group mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white/55 transition hover:text-[#36e29b]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to SportsFest
          </Link>

          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#36e29b]">
            JT SportsFest Edition XIII
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] md:text-7xl lg:text-8xl">
            Code of <span className="text-[#36e29b]">Conduct</span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
            A delegate or delegation will be disqualified if they fail to refrain
            from any of the following actions.
          </p>
        </div>
      </section>

      {/* all rules */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-[#36e29b]/30 bg-[#00633e]/20 p-6 md:flex md:items-center md:gap-6 md:p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

            <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#36e29b] text-[#020d20] md:mb-0">
              <AlertTriangle size={26} />
            </span>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#36e29b]">
                Zero-tolerance policy
              </p>

              <p className="mt-2 max-w-4xl text-base leading-7 text-white/75">
                Serious misconduct may result in immediate disqualification,
                removal from the venue and further disciplinary action by the
                school administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => {
            const Icon = rule.icon;

            return (
              <article
                key={rule.number}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#36e29b]/50 hover:bg-[#00633e]/10"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#36e29b]" />

                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#36e29b]/25 bg-[#36e29b]/10 text-[#36e29b] transition group-hover:bg-[#36e29b] group-hover:text-[#020d20]">
                    <Icon size={22} />
                  </span>

                  <span className="text-4xl font-black text-white/[0.06]">
                    {rule.number}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-black uppercase tracking-wide text-white">
                  {rule.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {rule.description}
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#36e29b]/0 blur-3xl transition duration-300 group-hover:bg-[#36e29b]/15" />
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}