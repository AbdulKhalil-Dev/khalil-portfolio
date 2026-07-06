import travelAgencyPage from "@/assets/images/travel-agency.png";
import modernPortfolio from "@/assets/images/modern-portfolio.png";
import newsApp from "@/assets/images/news-app.png";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeader from "../components/SectionHeader";
import { Card } from "../components/Card";

const PortfolioProjects = [
  {
    company: "Quantum Dynamics",
    year: "2025",
    title: "Travel Agency Landing Page",
    results: [
      { title: "Built with Next.js & Tailwind CSS" },
      { title: "Modern responsive landing page" },
      { title: "Fast performance and SEO-friendly" },
      { title: "Clean reusable component structure" },
    ],
    link: "https://nextjs-travel-app-sigma.vercel.app/",
    image: travelAgencyPage,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "3D Developer Portfolio",
    results: [
      { title: "Built with Next.js 15 & TypeScript" },
      { title: "Smooth GSAP animations and transitions" },
      { title: "Prismic CMS for dynamic content management" },
      { title: "Responsive design using Tailwind CSS" },
    ],
    link: "https://abdulkhalildev.vercel.app/",
    image: modernPortfolio,
  },

  {
    company: "Acme Corp",
    year: "2025",
    title: "Live News Magazine App",
    results: [
      { title: "Built with React & Tailwind CSS" },
      { title: "Live news fetched using REST API" },
      { title: "Category-based news filtering" },
      { title: "Responsive design for all devices" },
    ],
    link: "https://news-app-react-gilt.vercel.app/",
    image: newsApp,
  },
];

export const Projects = () => {
  return (
    <section className="flex justify-center items-center pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />          
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {PortfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span className="text-white">&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 md:text-base text-sm text-white/50"
                      >
                        <FaRegDotCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <BsArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
