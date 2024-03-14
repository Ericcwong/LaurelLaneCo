import pkg from "react-lazy-load-image-component";

import manOnMat from "~/assets/images/tony.jpg";
import nonSkidBottom from "~/assets/images/non-skid-bottom.png";
import waterDroplets from "~/assets/images/waterdroplets.png";
import { animate, inView } from "motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export const SupportiveComfort = () => {
  const { LazyLoadImage } = pkg;
  return (
    <div className="py-4 font-cmu-serif">
      {/* Top Supportive Comfort */}
      <div className="grid grid-flow-row  lg:grid-cols-2 text-white gap-y-4 justify-center items-center">
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <LazyLoadImage
            src={manOnMat}
            alt=""
            className="w-full h-full object-fill lg:hidden"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
          <TextBody
            title="Supportive Comfort"
            description="Transform your space with the luxurious comfort of our 3/4 inch thick mat that adds captivating beauty and functionality."
          />
        </div>
        <div className="p-8 hidden lg:block">
          <LazyLoadImage
            src={manOnMat}
            alt=""
            className="w-full h-full max-w-[700px] max-h-[800px]  object-contain"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
        </div>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-2 text-center text-white gap-y-4 justify-center items-center  ">
        <div className="p-8 ">
          <LazyLoadImage
            src={nonSkidBottom}
            alt=""
            className="w-full h-full max-w-[700px] max-h-[800px] object-contain"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
        </div>
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <TextBody
            title="Non-Skid Bottom"
            description="Specially crafted with beveled non-curl edge & anti-skid grooves at the bottom of the mat to ensure that it stays in place even in high-traffic areas."
            additionalDescription="The perfect combination of functionality, comfort, and style."
          />
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 text-center text-white gap-y-4 justify-center items-center ">
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <LazyLoadImage
            src={waterDroplets}
            alt=""
            className="w-full h-full object-fill lg:hidden"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
          <TextBody
            title="Water Resistant & Easy to Clean"
            description="Easily wipe away spills and messes with mild dish soap followed by a dry cloth."
          />
        </div>
        <div className="hidden md:flex-1 p-8 lg:block">
          <LazyLoadImage
            src={waterDroplets}
            alt=""
            className="w-full h-full max-w-[700px] max-h-[800px] object-contain"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const TextBody = ({
  title,
  description,
  additionalDescription,
}: {
  title: string;
  description: string;
  additionalDescription?: string;
}) => {
  const titleRef = useRef<HTMLElement>(null);
  useEffect(() => {
    console.log("What is titleRef", titleRef.current);
    inView("div", () => {
      animate(
        titleRef.current!,
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 text-left text-white lg:text-center lg:mt-56">
      <h2
        ref={titleRef}
        className="title-animation w-full text-2xl  lg:text-5xl "
      >
        {title}
      </h2>
      <p className="lg:text-xl">{description}</p>
      {additionalDescription && <p className="">{additionalDescription}</p>}
    </div>
  );
};
