import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61553936282762",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulkhalil1122",
  },
  {
    title: "Fiverr",
    href: "https://www.fiverr.com/khalilwebdev",
  },
  {
    title: "GitHub",
    href: "https://github.com/AbdulKhalil-Dev",
  },
];

const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 "></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2026. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer" className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <BsArrowUpRight className="size-3"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
