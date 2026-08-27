import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SportsComingSoon from "@/components/SportsComingSoon";
import IntegritySection from "@/components/IntegritySection";
/* import RegisterNowSection from "@/components/RegisterNowSection"; */

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SportsComingSoon />
        <About />
        <Contact />
        <IntegritySection />
      </main>

      <Footer />
    </>
  );
}
