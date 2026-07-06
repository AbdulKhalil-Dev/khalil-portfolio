import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Card } from "../components/Card";
import { MdStars } from "react-icons/md";
import bookImage from '@/assets/images/bookCover.jpeg'
import Image from "next/image";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TechIcon } from "../components/TechIcon";

const toolboxItems = [
  { title: "JavaScript", iconType: IoLogoJavascript },
  { title: "HTML5", iconType: IoLogoHtml5 },
  { title: "CSS3", iconType: IoLogoCss3 },
  { title: "React", iconType: IoLogoReact },
  { title: "Tailwind CSS", iconType: SiTailwindcss },
  { title: "GitHub", iconType: IoLogoGithub },
];

const About = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="Get to Know Me"
        description="Explore my journey, my work, and the ideas that drive me every day."
      />
      <div>
        <Card>
          <div>
          <MdStars />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
          <MdStars />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
          </div>
          <div>
          {toolboxItems.map((item) => (
              <div key={item.title}>
              <TechIcon component={item.iconType} />
                {/* <Image src={item.iconType} alt={`${item.title} icon`} width={24} height={24} /> */}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
