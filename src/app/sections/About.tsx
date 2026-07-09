'use client'
import React, { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import { Card } from "../components/Card";
import bookImage from "@/assets/images/bookCover.jpeg";
import Image from "next/image";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoGithub,
} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import mapImg from "@/assets/images/map-img.jpeg";
import smileMemoji from "@/assets/images/map-ico.png";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import { motion } from "motion/react";


const toolboxItems = [
  { title: "JavaScript", iconType: IoLogoJavascript },
  { title: "HTML5", iconType: IoLogoHtml5 },
  { title: "CSS3", iconType: IoLogoCss3 },
  { title: "React", iconType: IoLogoReact },
  { title: "Tailwind CSS", iconType: SiTailwindcss },
  { title: "GitHub", iconType: IoLogoGithub },
];

const hobbies = [
  { title: "Coding", emoji: "👨‍💻", left: "5%", top: "5%" },
  { title: "AiXplore", emoji: "🤖", left: "50%", top: "5%" },
  { title: "Developer", emoji: "✨", left: "10%", top: "35%" },
  { title: "WebSolver", emoji: "🧠", left: "33%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "70%", top: "45%" },
  { title: "Learning", emoji: "📚", left: "5%", top: "65%" },
  { title: "Fitness", emoji: "🏋️", left: "45%", top: "70%" },
];

const About = () => {
  const constrainRef = useRef(null);
  return (
    <section id="about" className="py-20 lg:py-28 flex items-center justify-center">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Get to Know Me"
          description="Explore my journey, my work, and the ideas that inspire me every day."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books that shape my perspective."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to build modern web applications."
              className=""
            />
            <ToolboxItems items={toolboxItems} className="" itemWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemWrapperClassName="animate-move-right [animation-duration:15s]"/>
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constrainRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                  drag
                  dragConstraints={constrainRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImg}
              alt="map"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-[45%] left-[55%] size-10 rounded-full flex items-center justify-center border-2 border-gray-950/25 after:content-[''] after:absolute after:inset-0 after-outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-slate-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 z-20 animate-ping [animation-duration:2000ms]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="Smiling memoji"
                className="size-8 rounded-full object-cover"
              />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
