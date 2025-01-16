import Hero from "@/components/heroSection/Hero";
import HeroCarousel from "@/components/heroSection/HeroCarousel";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Carousel */}
        <HeroCarousel />

        {/* Hero */}
        <Hero />
      </div>
    </>
  );
}
