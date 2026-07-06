import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Card } from "../components/Card";
import bookImage from '@/assets/images/bookCover.jpeg'
import Image from "next/image";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import mapImg from '@/assets/images/map-img.jpeg'
import smileMemoji from '@/assets/images/map-ico.png'
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";

const toolboxItems = [
  { title: "JavaScript", iconType: IoLogoJavascript },
  { title: "HTML5", iconType: IoLogoHtml5 },
  { title: "CSS3", iconType: IoLogoCss3 },
  { title: "React", iconType: IoLogoReact },
  { title: "Tailwind CSS", iconType: SiTailwindcss },
  { title: "GitHub", iconType: IoLogoGithub },
];

const hobbies = [
  { title: "Coding", emoji: "👨‍💻" },
  { title: "AI Exploration", emoji: "🤖" },
  { title: "Web Design", emoji: "✨" },
  { title: "Problem Solving", emoji: "🧠" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Learning", emoji: "📖" },
  { title: "Fitness", emoji: "🏋️" },
];

const About = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="Get to Know Me"
        description="Explore my journey, my work, and the ideas that drive me every day."
      />
      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives." /> 
          <div className="w-40 mx-auto mt-8">
          <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>
        <Card className="h-[320px] p-0">
          <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to build modern, high-quality web applications." className="px-6 pt-6" /> 
        <ToolboxItems items={toolboxItems} className="mt-6"/>
        <ToolboxItems items={toolboxItems} className="mt-6"/>
        </Card>
        <Card>
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." /> 
          <div>
            {hobbies.map((hobby)=>(
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
            <Image src={mapImg} alt="map" />
            <Image src={smileMemoji} alt="smiling memoji" />
        </Card>
      </div>
    </div>
    </div>
  );
};

export default About;
