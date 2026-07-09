import React from "react";
import myImg from "@/assets/images/khalil-img.jpg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { BsArrowDown } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { IoStar } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";
import { HeroOrbit } from "../components/HeroOrbit";

const Hero = () => {
  return (
    <section
      id="home"
      className="background-gradient flex flex-col items-center justify-center py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={775} rotation={-70} shouldOrbit orbitDuration="45s">
          <WiStars className="animate-spin-slow size-20 text-white" />
        </HeroOrbit>
        <HeroOrbit
          size={610}
          rotation={130}
          shouldOrbit
          reverseOrbit
          orbitDuration="30s"
        >
          <WiStars className="animate-spin-slow size-14 text-white" />
        </HeroOrbit>
        <HeroOrbit size={465} rotation={10} shouldOrbit orbitDuration="30s">
          <WiStars className="animate-spin-reverse-slow size-12 text-white" />
        </HeroOrbit>
        <HeroOrbit size={870} rotation={-10} shouldOrbit
          reverseOrbit
          orbitDuration="30s">
          <IoStar className="animate-spin-reverse-slow size-8 text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={315} rotation={80} shouldOrbit
          reverseOrbit
          orbitDuration="40s">
          <IoStar className="animate-spin-slow size-6 text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={50} shouldOrbit
          reverseOrbit
          orbitDuration="50s">
          <IoStar className="animate-spin-slow size-6 text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-28} shouldOrbit
          orbitDuration="33s">
          <IoStar className="animate-spin-reverse-slow size-6 text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={485} rotation={-40} shouldOrbit
          orbitDuration="36s">
          <IoStar className="animate-spin-slow size-6 text-white" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={120} shouldOrbit orbitDuration="20s">
          <IoStar className="animate-spin-reverse-slow size-4 text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={155} shouldOrbit orbitDuration="70s">
          <IoStar className="animate-spin-slow size-4 text-white" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <FaRegDotCircle className="size-3 rounded-full text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={170}>
          <FaRegDotCircle className="size-3 rounded-full text-white/10" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-5}>
          <FaRegDotCircle className="size-3 rounded-full text-white/10" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image
            src={myImg}
            alt="Abdul Khalil Developer"
            className="size-[120px] rounded-t-full border border-gray-950"
          />
          <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 inline-flex items-center gap-3.5 rounded-lg">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-emerald-400/70"></span>
              <span className="absolute h-full w-full rounded-full bg-emerald-400/25 blur-[2px]"></span>
              <span
                className="relative h-2 w-2 rounded-full bg-emerald-500 
              shadow-[0_0_10px_rgba(16,185,129,0.7)]"
              ></span>
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
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 hover:bg-gray-950/10 px-5 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <BsArrowDown className="animate-smooth-bounce" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-5 rounded-xl"
          >
            <span className="animate-waving inline-block origin-bottom-right">
              👋
            </span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
