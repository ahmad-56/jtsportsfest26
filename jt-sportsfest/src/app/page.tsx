import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SportsPreview from "@/components/SportsPreview";
import IntegritySection from "@/components/IntegritySection";
import Sponsors from "@/components/Sponsors";
/* import SportsComingSoon from "@/components/SportsComingSoon"; */
/* import RegisterNowSection from "@/components/RegisterNowSection"; */

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SportsPreview />
        <About />
        <Sponsors />
        <Contact />
        <IntegritySection />
      </main>

      <Footer />
    </>
  );
}
