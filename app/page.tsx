import Footer from "@/components/footer/Footer";
import Hero from "@/components/heroSection/Hero";
import HeroCarousel from "@/components/heroSection/HeroCarousel";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Carousel */}
        <HeroCarousel />

        {/* Hero */}
        <Hero />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
