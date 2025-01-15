"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/hero-2.avif",
  "/hero-2.avif",
  "/hero-2.avif",
  "/hero-2.avif",
  "/hero-2.avif",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-full">
            <Image
              src={"/hero-2.avif"}
              alt="carousel"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-400 text-white rounded-md px-2"
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-400 text-white rounded-md px-2"
      >
        &rarr;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
