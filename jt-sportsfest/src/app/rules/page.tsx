import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rules = [

  {
    title: "Identification",
    description:
    "All participants must bring valid official identification documents (ID Card/Smart Card/CNIC) to ensure entry in the Event.",
  },
  {
    title: "Protest Policy",
    description:
    "Teams/Delegations would be charged over Rs 4000 if they protest against refrees or indulge in serious fights.",
  },
  {
    title: "Physical Violence",
    description:
      "The use of physical force, violence, threats, abusive language or misbehavior toward SportsFest management, officials, volunteers or other participants is strictly prohibited.",
  },
  {
    title: "School Property & Restricted Areas",
    description:
      "Damaging school property, attempting to damage any facility or entering areas marked as restricted is strictly prohibited.",
  },
  {
    title: "Weapons",
    description:
      "Bringing any weapon, dangerous object or item that may cause harm onto the venue or school campus is strictly prohibited.",
  },
  {
    title: "Unfair Means & Cheating",
    description:
      "Using unfair means, cheating or attempting to gain an unauthorized advantage over other participants in order to win a competition is prohibited.",
  },
  {
    title: "Smoking, Vaping & Alcohol",
    description:
      "Cigarettes, vapes, e-cigarettes, alcohol and all other intoxicating substances are prohibited on campus. Any vape or e-cigarette discovered will be confiscated and will not be returned.",
  },
  {
    title: "Noise & Disturbance",
    description:
      "Producing excessive noise, creating unnecessary disturbance or disrupting events, classes, officials or other participants on campus is prohibited.",
  },
  {
    title: "Offensive Material",
    description:
      "Displaying, carrying or distributing content that promotes violence, profanity, drug abuse, discrimination or any other offensive material is prohibited.",
  },
  {
    title: "Misuse of Equipment",
    description:
      "Misusing, removing or damaging any sports equipment, furniture, technology or other property provided by the SportsFest management is prohibited.",
  },
  {
    title: "Harassment",
    description:
      "Any attempt to harass, threaten, intimidate or offend another delegate, participant, official or member of the management—physically, verbally or otherwise—is strictly prohibited.",
  },
];

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071b16] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <Image
          src="/images/hero4-sports.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-35"
        />

        <div className="absolute inset-0 z-0 bg-[#071b16]/70" />

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_35%,rgba(7,92,63,0.55),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/#home"
            className="mb-5 inline-flex text-[9px] font-bold uppercase tracking-[0.12em] text-white/55 transition hover:text-[#a9c4b4] sm:mb-10 sm:text-sm sm:tracking-[0.15em]"
          >
            Back to SportsFest
          </Link>

          <p className="mb-3 text-[9px] font-black uppercase tracking-[0.16em] text-[#a9c4b4] sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
            JT SportsFest Edition XIII
          </p>

          <h1 className="max-w-5xl text-3xl font-black uppercase leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl">
            Code of{" "}
            <span className="text-[#a9c4b4]">
              Conduct
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-white/65 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            A delegate or delegation will be disqualified if they fail to
            refrain from any of the following actions.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-20">
        <ul className="mx-auto max-w-5xl list-disc space-y-6 pl-5 marker:text-[#a9c4b4] sm:space-y-8 sm:pl-7">
          {rules.map((rule) => (
            <li key={rule.title} className="pl-2 sm:pl-3">
              <h2 className="text-sm font-black uppercase leading-snug tracking-wide text-white sm:text-xl">
                {rule.title}
              </h2>

              <p className="mt-2 text-xs leading-6 text-white/65 sm:text-base sm:leading-8">
                {rule.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
