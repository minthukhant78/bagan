import React from "react";
import Selection from "./Section";
import { curve, robot, heroBackground, bagan } from "../assets";
import Button from "./Button";
import { useRef } from "react";
import Generating from "./Generating";
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Selection
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative container" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 ">
            Welcome to &nbsp;Bagan &nbsp; {` `}
            <span className="inline-block relative">
              Burma {"Official"}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Bagan is an ancient city and a UNESCO World Heritage Site in the
            Mandalay Region of Burma.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className=" relative max-w-[23rem ] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={bagan}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                
<Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Selection>
  );
};

export default Hero;
