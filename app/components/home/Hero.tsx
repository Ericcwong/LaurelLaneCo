import anime, { set } from "animejs";
import { useEffect, useRef, useState } from "react";
import HomeImage from "~/assets/images/hero.webp";
import { animate, stagger, timeline } from "motion";
export const Hero = () => {
  return (
    <div className="relative h-screen grid justify-center items-center">
      {" "}
      {/* Ensures the container is full height and centers content */}
      <img
        src={HomeImage}
        alt=""
        className="w-full h-[100vh] object-cover absolute top-0"
        style={{ objectPosition: "center bottom" }}
      />
      <HeroText />
    </div>
  );
};

const HeroText: React.FC = () => {
  useEffect(() => {
    animate(
      ".hero-title",
      { y: [100, 0], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 0.8,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
    animate(
      ".hero-message",
      { y: [100, 0], opacity: [0, 1] },
      { duration: 0.8, delay: 0.4, easing: [0.22, 0.03, 0.26, 1] }
    );
    animate(
      ".shopNowButton",
      { y: [100, 0], opacity: [0, 1] },
      { duration: 0.8, delay: 0.4, easing: [0.22, 0.03, 0.26, 1] }
    );
  }, []);

  return (
    <div className="lg:absolute left-[5%] top-2/4 p-4 w-full md:w-1/3 flex flex-col gap-2  text-white">
      <p className="text-white text-xl md:text-4xl lg:text-8xl font-bold hero-title font-seasons">
        COMFORT MEETS BEAUTY
      </p>

      <p
        className={`text-white text-lg md:text-xl lg:text-4xl hero-message font-dm-sans`}
      >
        Elevate the aesthetics of your home with our designer premium foam
        anti-fatigue standing mats.
      </p>
      <a
        href="#shop-now"
        className="shopNowButton font-dm-sans inline-block bg-red-500 text-white font-semibold py-2 px-4 rounded w-1/2 text-2xl text-center hover:bg-red-700 transition-colors"
      >
        Shop Now
      </a>
    </div>
  );
};
