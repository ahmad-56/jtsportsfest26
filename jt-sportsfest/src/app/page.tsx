import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SportsPreview from "@/components/SportsPreview";
import IntegritySection from "@/components/IntegritySection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SportsPreview />
        <About />
        <Contact />
        <IntegritySection />
      </main>

      <Footer />
    </>
  );
}
