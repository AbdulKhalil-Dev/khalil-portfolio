import React from "react";
import myImg from "@/assets/images/Khalil.jpeg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { BsArrowDown } from "react-icons/bs";
import { LuAtom } from "react-icons/lu";
import { HeroOrbit } from "../components/HeroOrbit";

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800}/>
        <LuAtom className='size-14 text-emerald-300' />
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myImg}
            alt="Abdul Khalil Developer"
            className="size-[130px] rounded-t-full border border-gray-800 shadow-[0_0_4px_rgba(34,197,94,0.4)]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative flex h-2 w-2 items-center justify-center"> 
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600 drop-shadow-[0_0_8px_#16a34a]"></span>
            </div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming ideas and designs into fast,
            functional, and high-performing web applications. Let&apos;s discuss
            your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 hover:bg-gray-950/10 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <BsArrowDown className="size-4 font-bold animate-bounce [animation-duration:3s]" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="animate-waving inline-block origin-bottom-right">
              👋
            </span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
