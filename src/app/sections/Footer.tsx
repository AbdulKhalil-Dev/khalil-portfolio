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
    <footer>
      <div className="container">
        <div>
          <div>&copy; 2026. All rights reserved.</div>
          <nav>
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.title}</span>
                <BsArrowUpRight />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
