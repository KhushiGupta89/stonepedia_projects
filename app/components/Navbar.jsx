"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setIsMenuOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <div className="max-w-[1800px] mx-auto h-full">

        <header className="fixed top-0 left-0 right-0 z-50 bg-white w-full  h-14">
          <div className="flex items-center justify-between h-full px-4 sm:px-6">

            {/* LOGO */}
            <div className="relative h-8 w-28 sm:h-9 sm:w-32 md:h-10 md:w-32 lg:w-36">
              <Image
                src="/logo.png"
                alt="Stonepedia"
                fill
                sizes="(min-width: 1024px) 9rem, (min-width: 640px) 8rem, 7rem"
                priority
                className="object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center text-[#565656] text-xs lg:text-sm xl:text-base 2xl:text-lg gap-4 lg:gap-6 xl:gap-10">
              <button onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-[#000000] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('work')} className="cursor-pointer hover:text-[#000000] transition-colors">Work</button>
              <button onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#000000] transition-colors">Services</button>
              <button onClick={() => scrollToSection('featured-work')} className="cursor-pointer hover:text-[#000000] transition-colors">Featured Work</button>
              <button onClick={() => scrollToSection('about-us')} className="cursor-pointer hover:text-[#000000] transition-colors">About Us</button>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* CONTACT BUTTON (hide mobile) */}
              <button className="hidden sm:flex items-center gap-2 bg-black text-white px-4 md:px-4 xl:px-5 py-2 rounded-full text-xs md:text-sm  lg:text-sm   2xl:text-[16px] font-medium cursor-pointer">
                Contact us
                <span className="bg-white text-black rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <FiArrowUpRight className="text-[12px] md:text-[14px]" />
                </span>
              </button>

              {/* HAMBURGER */}
              {!isMenuOpen && (
                <button
                  className="md:hidden text-[#000000]  cursor-pointer"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <RxHamburgerMenu size={24} />
                </button>
              )}

            </div>
          </div>
        </header>

        {/* OVERLAY */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        />

        {/* SIDEBAR MENU */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-[320px] bg-white transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200">
            <div className="relative h-8 w-28 sm:h-9 sm:w-32 md:h-10 md:w-32 lg:w-36">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                sizes="(min-width: 1024px) 9rem, (min-width: 640px) 8rem, 7rem"
                className="object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            </div>

            <button className="cursor-pointer text-[#000000]" onClick={() => setIsMenuOpen(false)}>
              <RxCross2 size={24} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col text-[#000000] p-4 text-sm">
            <button onClick={() => scrollToSection('projects')} className="text-left 
            py-2 border-b border-gray-300 hover:pl-2 transition-all">Projects</button>

            <button onClick={() => scrollToSection('work')} className="text-left py-2 border-b border-gray-300 hover:pl-2 transition-all">Work</button>

            <button onClick={() => scrollToSection('services')} className="text-left py-2 border-b border-gray-300 hover:pl-2 transition-all">Services</button>

            <button onClick={() => scrollToSection('featured-work')} className="text-left py-2 border-b border-gray-300 hover:pl-2 transition-all">Featured Work</button>

            <button onClick={() => scrollToSection('about-us')} className="text-left py-2 border-b border-gray-300 hover:pl-2 transition-all border-b-0">About Us</button>
            {/* MOBILE BUTTON */}
            <button className="mt-6 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full">
              Contact us <FiArrowUpRight className="text-sm" />

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;