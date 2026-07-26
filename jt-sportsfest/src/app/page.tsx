import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SportsGrid from "@/components/SportsGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SportsGrid />
        <Contact />
      </main>

      <Footer />
    </>
  );
}