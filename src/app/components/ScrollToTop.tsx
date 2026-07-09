"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-emerald-300 to-sky-400 text-slate-950 shadow-sm shadow-emerald-400/20 transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
};

export default ScrollToTop;