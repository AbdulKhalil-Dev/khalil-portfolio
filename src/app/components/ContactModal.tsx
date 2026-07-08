"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { X, Mail, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDataState {
  name: string;
  email: string;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 transition-all">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1329] border border-slate-800 p-5 sm:p-7 md:p-8 shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-5 sm:mb-6 pr-6 sm:pr-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
            Get In{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xs sm:max-w-none mx-auto">
            Have a project in mind or want to collaborate? Let's talk
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full bg-[#131c35] border border-slate-700/60 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full bg-[#131c35] border border-slate-700/60 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              className="w-full bg-[#131c35] border border-slate-700/60 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none sm:rows-4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 px-6 rounded-lg font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-emerald-300 hover:opacity-90 active:scale-[0.99] transition-all shadow-lg hover:shadow-sky-400/20"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mt-5 sm:mt-6 pt-2">
          <div className="bg-[#131c35]/80 border border-slate-800 rounded-lg p-2.5 sm:p-3 flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-md bg-emerald-400/10 text-emerald-300 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Email
              </p>
              <p
                className="text-xs sm:text-sm text-slate-200 font-medium truncate"
                title="khalil.codelab@gmail.com"
              >
                khalil.codelab@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-[#131c35]/80 border border-slate-800 rounded-lg p-2.5 sm:p-3 flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-md bg-sky-400/10 text-sky-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Phone
              </p>
              <p className="text-xs sm:text-sm text-slate-200 font-medium truncate">
                +92 3004541151
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
