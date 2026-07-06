import React from "react";
import myImg from "@/assets/images/khalil-img.jpg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { BsArrowDown } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { IoStar } from "react-icons/io5"
import { FaRegDotCircle } from "react-icons/fa";
import { HeroOrbit } from "../components/HeroOrbit";

const Hero = () => {
  return (
    <div className="background-gradient flex flex-col items-center justify-center py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={775}
      rotation={-70}>
        <WiStars className='animate-spin-slow size-20 text-white' />
      </HeroOrbit>
      <HeroOrbit size={670} rotation={25}>
      <WiStars className="animate-spin-slow size-12 text-white"/>
      </HeroOrbit>
      <HeroOrbit size={590}
      rotation={98}>
        <WiStars className='animate-spin-reverse-slow size-10 text-white' />
      </HeroOrbit>
      <HeroOrbit size={430}
      rotation={-14}>
        <IoStar className='animate-spin-reverse-slow size-6 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={440}
      rotation={79}>
        <IoStar className='size-4 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={730}
      rotation={-28}>
        <IoStar className='size-10 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={710}
      rotation={120}>
        <IoStar className='size-8 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={510}
      rotation={144}>
        <IoStar className='animate-spin-slow size-6 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={510}
      rotation={-40}>
        <IoStar className='size-5 text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={720}
      rotation={85}>
        <FaRegDotCircle className='size-3 rounded-full text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={570}
      rotation={170}>
        <FaRegDotCircle className='size-3 rounded-full text-white/10' />
      </HeroOrbit>
      <HeroOrbit size={750}
      rotation={-5}>
        <FaRegDotCircle className='size-3 rounded-full text-white/10' />
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
            <div className="relative flex h-1.5 w-1.5 items-center justify-center"> 
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-600 drop-shadow-[0_0_8px_#16a34a]"></span>
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
          <button className="inline-flex items-center gap-2 border border-white/15 hover:bg-gray-950/10 px-5 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <BsArrowDown className="animate-smooth-bounce" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-5 rounded-xl">
            <span className="animate-waving inline-block origin-bottom-right">
              👋
            </span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
