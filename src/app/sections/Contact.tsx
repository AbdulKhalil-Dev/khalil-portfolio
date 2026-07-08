"use client";
import React, { useState } from "react";
import ContactModal from "../components/ContactModal";
import { BsArrowUpRight } from "react-icons/bs";
import grainImg from "@/assets/images/grain.jpg";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="flex items-center justify-center py-16 pt-12 lg:py-24 lg:pt-20"
    >
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage: `url(${grainImg.src})`,
          }}
        ></div>
        <div className="container flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-sm md:text-base mt-2">
              Have a project in mind or looking for a developer? Let&apos;s
              connect and discuss how we can bring your ideas to life with
              modern, responsive, and high-performance web solutions.
            </p>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer"
            >
              <span className="font-semibold">Contact Me</span>
              <BsArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
