import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SportsGrid from "@/app/sports/page";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Sponsors />
        <Contact />
      </main>

      <Footer />
    </>
  );
}