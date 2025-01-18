import Hero from "@/components/heroSection/Hero";
import { connectMongo } from "@/services";

export default async function Home() {
  await connectMongo();

  return (
    <div className="">
      {/* Carousel */}
      {/* <HeroCarousel /> */}

      {/* Hero */}

      <Hero />
    </div>
  );
}
